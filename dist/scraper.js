"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/scraper.ts
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const jsdom_1 = require("jsdom");
// Load environment variables from .env file
dotenv_1.default.config();
const parseHtml = (htmlContent) => {
    const dom = new jsdom_1.JSDOM(htmlContent);
    const document = dom.window.document;
    const title = document.querySelector('h1')?.textContent?.trim();
    const category = document.querySelector('a[href^="/topics/"]')?.textContent?.trim();
    const metaDescription = document.querySelector('meta[name="description"]');
    const summary = metaDescription ? metaDescription.content : undefined;
    const publishedAtMeta = document.querySelector('meta[property="article:published_time"]');
    const publishedAt = publishedAtMeta ? publishedAtMeta.content : undefined;
    return {
        title,
        category,
        summary,
        publishedAt,
    };
};
const scrapeWithScrapingBee = async (url) => {
    console.log(`Scraping ${url} with ScrapingBee...`);
    const apiKey = process.env.SCRAPINGBEE_API_KEY;
    if (!apiKey) {
        console.error('ScrapingBee API key not found. Please add it to your .env file.');
        return;
    }
    try {
        const response = await axios_1.default.get('https://app.scrapingbee.com/api/v1/', {
            params: {
                api_key: apiKey,
                url: url,
                render_js: true, // Let ScrapingBee handle JavaScript rendering
            },
        });
        fs_1.default.writeFileSync('page.html', response.data);
        console.log('Page HTML content saved to page.html');
        const articleData = parseHtml(response.data);
        console.log('--- Extracted Data ---');
        console.log(articleData);
        console.log('----------------------');
    }
    catch (error) {
        console.error('Error during scraping with ScrapingBee:', error.response?.data || error.message);
    }
};
// Example usage:
const urlToScrape = 'https://web.swipeinsight.app/posts/google-ads-launches-beta-for-a-b-testing-images-and-videos-in-demand-gen-campaigns-18584';
scrapeWithScrapingBee(urlToScrape);
