import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as cheerio from 'cheerio';

const prisma = new PrismaClient();
const BASE_URL = 'https://www.swipeinsight.com/shorts';

interface ScrapedItem {
  title: string;
  url: string;
  summary: string;
  category: string;
  source: string;
  publishedAt: Date;
}

async function scrapePage(url: string): Promise<{ items: ScrapedItem[], nextPageUrl: string | null }> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const items: ScrapedItem[] = [];

    $('.post-item').each((_, element) => {
      const titleElement = $(element).find('.post-title a');
      
      const title = titleElement.text().trim();
      const url = titleElement.attr('href') || '';
      const summary = $(element).find('.post-excerpt').text().trim();
      const category = $(element).find('.post-cat').text().trim();
      const dateString = $(element).find('.post-meta time').attr('datetime');
      const publishedAt = dateString ? new Date(dateString) : new Date();

      if (title && url) {
        items.push({ 
          title, 
          url, 
          summary, 
          category,
          source: 'Swipe Insight',
          publishedAt
        });
      }
    });
    
    const nextPageUrl = $('.next.page-numbers').attr('href') || null;

    console.log(`Scraped ${items.length} items from ${url}`);
    return { items, nextPageUrl };
  } catch (error) {
    console.error(`Error scraping page: ${url}`, error);
    throw new Error(`Failed to scrape page: ${url}`);
  }
}

async function saveItems(items: ScrapedItem[]) {
  let savedCount = 0;
  let skippedCount = 0;
  for (const item of items) {
    try {
      const existingItem = await prisma.updateItem.findUnique({
        where: { url: item.url },
      });

      if (!existingItem) {
        await prisma.updateItem.create({
          data: item,
        });
        savedCount++;
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.error(`Error saving item: ${item.title}`, error);
    }
  }
  console.log(`Saved ${savedCount} new items, skipped ${skippedCount} duplicates.`);
}

async function runScraper() {
  console.log('Starting scraper via API...');
  let currentPageUrl: string | null = BASE_URL;
  let pageCount = 0;
  const maxPages = 5;

  while (currentPageUrl && pageCount < maxPages) {
    pageCount++;
    console.log(`Scraping page ${pageCount}: ${currentPageUrl}`);
    const { items, nextPageUrl } = await scrapePage(currentPageUrl);
    
    if (items.length > 0) {
      await saveItems(items);
    }

    currentPageUrl = nextPageUrl;

    if (currentPageUrl) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log(`Scraper finished. Scraped ${pageCount} pages.`);
  return { success: true, message: `Scraping completed successfully. Scraped ${pageCount} pages.` };
}

export async function GET() {
  try {
    const result = await runScraper();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in scraper API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, message: 'An error occurred during scraping.', error: errorMessage }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
