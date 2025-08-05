"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Menu, X, ArrowRight, Clock, Loader2 } from "lucide-react"
import Link from "next/link"

// Define the type for an update object
type Update = {
  id: number
  title: string
  category: string
  publishedAt: string
  summary: string
  url: string
}

// Helper function to format relative time
function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
  const days = Math.round(hours / 24)

  if (seconds < 60) return `${seconds} seconds ago`
  if (minutes < 60) return `${minutes} minutes ago`
  if (hours < 24) return `${hours} hours ago`
  return `${days} days ago`
}

// A custom badge component to apply colors based on category
const CategoryBadge = ({ category }: { category: string }) => {
  const baseClasses = "text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border"
  let colorClasses = ""

  switch (category.toLowerCase()) {
    case "meta ads":
      colorClasses = "bg-blue-100 text-blue-800 border-blue-200"
      break
    case "google ads":
      colorClasses = "bg-red-100 text-red-800 border-red-200"
      break
    case "tiktok ads":
      colorClasses = "bg-slate-100 text-slate-800 border-slate-200"
      break
    case "seo":
      colorClasses = "bg-green-100 text-green-800 border-green-200"
      break
    case "industry news":
      colorClasses = "bg-yellow-100 text-yellow-800 border-yellow-200"
      break
    default:
      colorClasses = "bg-indigo-100 text-indigo-800 border-indigo-200"
  }
  return <span className={`${baseClasses} ${colorClasses}`}>{category}</span>
}

export default function PerformanceUpdatesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [updates, setUpdates] = useState<Update[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUpdates = useCallback(async (pageNum: number) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/updates?page=${pageNum}&limit=6`)
      const data = await response.json()
      setUpdates((prev) => (pageNum === 1 ? data.updates : [...prev, ...data.updates]))
      setHasMore(data.hasMore)
    } catch (error) {
      console.error("Failed to fetch updates:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUpdates(1)
  }, [fetchUpdates])

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchUpdates(nextPage)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Gamal Growth</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-600 hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/#results" className="text-slate-600 hover:text-orange-500 transition-colors">
              Results
            </Link>
            <Link href="/performance-updates" className="text-orange-500 font-semibold transition-colors">
              Performance Updates
            </Link>
            <Link href="/my-thoughts" className="text-slate-600 hover:text-orange-500 transition-colors">
              My Thoughts
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-orange-500 transition-colors py-2"
              >
                Services
              </Link>
              <Link
                href="/#results"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-orange-500 transition-colors py-2"
              >
                Results
              </Link>
              <Link
                href="/performance-updates"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-orange-500 font-semibold transition-colors py-2"
              >
                Performance Updates
              </Link>
              <Link
                href="/my-thoughts"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-orange-500 transition-colors py-2"
              >
                My Thoughts
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-orange-100 text-orange-700 mb-4 px-3 py-1">Curated Feed</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Performance Marketing Updates</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A curated feed of the latest insights, trends, and news in performance marketing, scraped from Swipe
              Insight and other leading sources.
            </p>
          </div>
        </section>

        {/* Updates Feed Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {isLoading && page === 1 ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {updates.map((update) => (
                  <Card key={update.id} className="flex flex-col border-slate-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CategoryBadge category={update.category} />
                        <span className="text-sm text-slate-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {formatRelativeTime(update.publishedAt)}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        <a
                          href={update.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-600 transition-colors"
                        >
                          {update.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-slate-600">{update.summary}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <a href={update.url} target="_blank" rel="noopener noreferrer">
                          Read Full Update
                          <ArrowRight className="ml-2 w-3 h-3" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {hasMore && (
              <div className="text-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  variant="outline"
                  className="px-8 py-3 bg-transparent"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Load More Updates"
                  )}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Gamal Growth</span>
            </div>
            <div className="text-slate-400 text-sm">© 2024 Gamal Growth. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
