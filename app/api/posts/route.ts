import { NextResponse } from "next/server"

const allPosts = [
  // Page 1
  {
    id: 1,
    slug: "why-roas-is-lying",
    title: "Why ROAS is Lying to Your P&L (And What to Track Instead)",
    publishedAt: new Date("2024-12-15T10:00:00Z").toISOString(),
    readTime: 5,
    summary:
      "After auditing 50+ MENA e-commerce accounts this year, I've seen the same pattern: brands celebrating 4x ROAS while their profit margins shrink. Here's why traditional metrics are broken and what actually matters...",
    category: "Metrics & Analytics",
  },
  {
    id: 2,
    slug: "mena-attribution-crisis",
    title: "The MENA E-commerce Attribution Crisis (And How AI Can Fix It)",
    publishedAt: new Date("2024-12-10T11:30:00Z").toISOString(),
    readTime: 8,
    summary:
      "iOS updates, cookie deprecation, and regional privacy laws are creating a perfect storm for attribution in MENA markets. But there's a way forward using AI-powered modeling...",
    category: "Strategy",
  },
  {
    id: 3,
    slug: "black-friday-2024-recap",
    title: "Black Friday 2024: What Worked (And What Didn't) in GCC Markets",
    publishedAt: new Date("2024-12-05T09:00:00Z").toISOString(),
    readTime: 6,
    summary:
      "I analyzed performance data from 12 GCC brands during Black Friday 2024. The results were surprising - traditional strategies failed while these 3 approaches dominated...",
    category: "Case Study",
  },
  {
    id: 4,
    slug: "building-a-poas-dashboard",
    title: "Building a POAS Dashboard That Actually Drives Decisions",
    publishedAt: new Date("2024-11-28T14:00:00Z").toISOString(),
    readTime: 10,
    summary:
      "Most performance dashboards are vanity metric museums. Here's how to build a POAS-focused dashboard that connects directly to your P&L and drives real business decisions...",
    category: "Metrics & Analytics",
  },
  {
    id: 5,
    slug: "pmax-black-box",
    title: "Cracking the PMax Black Box: A Guide for E-commerce Brands",
    publishedAt: new Date("2024-11-20T16:00:00Z").toISOString(),
    readTime: 7,
    summary:
      "Google's Performance Max is powerful but opaque. This guide provides actionable strategies to gain more control and transparency over your PMax campaigns.",
    category: "Google Ads",
  },
  {
    id: 6,
    slug: "creative-velocity",
    title: "The Importance of Creative Velocity in a Post-Cookie World",
    publishedAt: new Date("2024-11-15T10:00:00Z").toISOString(),
    readTime: 5,
    summary:
      "As targeting signals weaken, creative becomes the most important lever for performance. Learn how to build a system for high-velocity creative testing and iteration.",
    category: "Strategy",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const limit = Number.parseInt(searchParams.get("limit") || "6", 10)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = allPosts.slice(startIndex, endIndex)
  const hasMore = endIndex < allPosts.length

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({
    posts: results,
    hasMore,
  })
}
