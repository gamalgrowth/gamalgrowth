import { NextResponse } from "next/server"

const allUpdates = [
  // Page 1
  {
    id: 1,
    title: "Meta's Advantage+ Shopping Campaigns See 17% CPA Reduction in New Study",
    category: "Meta Ads",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    summary:
      "A comprehensive study by AdWeek shows significant cost-per-acquisition improvements for e-commerce brands utilizing Meta's latest AI-powered campaign type.",
    url: "https://example.com/meta-advantage-plus",
  },
  {
    id: 2,
    title: "Google PMax: Asset Group Best Practices for 2025",
    category: "Google Ads",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    summary:
      "Search Engine Land breaks down how to structure your Performance Max asset groups for maximum reach and conversion, focusing on creative diversity.",
    url: "https://example.com/pmax-best-practices",
  },
  {
    id: 3,
    title: "iOS 18's Privacy Changes: What Marketers Need to Know",
    category: "Industry News",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "Apple's upcoming OS update introduces new challenges for attribution. This breakdown covers the impact on SKAdNetwork and what to prepare for.",
    url: "https://example.com/ios18-privacy",
  },
  {
    id: 4,
    title: "TikTok Shop's New Affiliate Features Boost Creator Partnerships",
    category: "TikTok Ads",
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "TikTok is rolling out new tools to make it easier for brands to collaborate with creators directly within the app, streamlining affiliate marketing workflows.",
    url: "https://example.com/tiktok-affiliate",
  },
  {
    id: 5,
    title: "The Rise of Programmatic SEO and Its Impact on E-commerce",
    category: "SEO",
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "Learn how brands are using programmatic SEO to generate thousands of landing pages, capturing long-tail traffic and dominating niche markets.",
    url: "https://example.com/programmatic-seo",
  },
  {
    id: 6,
    title: "Google Analytics 4 Releases Predictive Audiences for All Users",
    category: "Google Ads",
    publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "GA4's powerful predictive audience feature, previously limited to enterprise accounts, is now available to everyone, enabling smarter retargeting.",
    url: "https://example.com/ga4-predictive",
  },
  // Page 2
  {
    id: 7,
    title: "Meta Rolls Out New AR Ad Formats for Instagram Stories",
    category: "Meta Ads",
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "Engage users like never before with interactive Augmented Reality ads. Meta's latest update provides new templates for immersive brand experiences.",
    url: "https://example.com/meta-ar-ads",
  },
  {
    id: 8,
    title: "Is Video a Must-Have for Google PMax Campaigns?",
    category: "Google Ads",
    publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "A deep dive into performance data, analyzing whether including video assets in PMax is essential for success or just a nice-to-have.",
    url: "https://example.com/pmax-video",
  },
  {
    id: 9,
    title: "Cookie Deprecation Delayed Again: What's the New Timeline?",
    category: "Industry News",
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "Google has pushed back its timeline for phasing out third-party cookies in Chrome. Here's the latest roadmap and what it means for your strategy.",
    url: "https://example.com/cookie-delay",
  },
  {
    id: 10,
    title: "How to Leverage TikTok Search for Organic Product Discovery",
    category: "TikTok Ads",
    publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "TikTok is becoming a powerful search engine for Gen Z. This guide covers how to optimize your content to appear in TikTok search results.",
    url: "https://example.com/tiktok-search",
  },
  {
    id: 11,
    title: "Core Web Vitals: 2025 Update Focuses on Interaction to Next Paint (INP)",
    category: "SEO",
    publishedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "Google is replacing FID with INP as a core web vital. Understand the new metric and how to optimize your site for better responsiveness.",
    url: "https://example.com/core-web-vitals-inp",
  },
  {
    id: 12,
    title: "Using First-Party Data to Power Your Meta Ad Campaigns",
    category: "Meta Ads",
    publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "With the decline of third-party cookies, leveraging your own customer data is more critical than ever. Here's a step-by-step guide.",
    url: "https://example.com/meta-first-party-data",
  },
  // Page 3
  {
    id: 13,
    title: "The Ultimate Guide to Google Merchant Center Feed Optimization",
    category: "Google Ads",
    publishedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "Unlock the full potential of your Shopping ads with a perfectly optimized product feed. This guide covers everything from titles to custom labels.",
    url: "https://example.com/gmc-feed-optimization",
  },
  {
    id: 14,
    title: "Navigating Ad Fatigue on TikTok: A Creative Refresh Strategy",
    category: "TikTok Ads",
    publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "TikTok ads burn out fast. Learn how to build a system for rapid creative iteration to keep your campaigns fresh and effective.",
    url: "https://example.com/tiktok-ad-fatigue",
  },
  {
    id: 15,
    title: "AI in SEO: Separating the Hype from What Actually Works",
    category: "SEO",
    publishedAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
    summary:
      "An analysis of AI-powered SEO tools and techniques, focusing on what's currently driving real ranking improvements and what's just a gimmick.",
    url: "https://example.com/ai-in-seo",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const limit = Number.parseInt(searchParams.get("limit") || "6", 10)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = allUpdates.slice(startIndex, endIndex)
  const hasMore = endIndex < allUpdates.length

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({
    updates: results,
    hasMore,
  })
}
