"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Menu, X, ArrowRight, Clock, BookOpen, Loader2 } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

// Define the type for a post object
type Post = {
  id: number
  slug: string
  title: string
  publishedAt: string
  readTime: number
  summary: string
  category: string
}

// Helper function to format date
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function MyThoughtsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const fetchPosts = useCallback(async (pageNum: number) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/posts?page=${pageNum}&limit=6`)
      const data = await response.json()
      setPosts((prev) => (pageNum === 1 ? data.posts : [...prev, ...data.posts]))
      setHasMore(data.hasMore)
    } catch (error) {
      console.error("Failed to fetch posts:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts(1)
  }, [fetchPosts])

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchPosts(nextPage)
  }

  const generateStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': posts.map((post, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'BlogPosting',
          'headline': post.title,
          'url': `${window.location.origin}/my-thoughts/${post.slug}`,
          'datePublished': post.publishedAt,
          'description': post.summary,
          'author': {
            '@type': 'Person',
            'name': 'Gamal Growth'
          }
        }
      }))
    };
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
        />
      </Head>
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
              <Link href="/performance-updates" className="text-slate-600 hover:text-orange-500 transition-colors">
                Performance Updates
              </Link>
              <Link href="/my-thoughts" className="text-orange-500 font-semibold transition-colors">
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
                  className="text-slate-600 hover:text-orange-500 transition-colors py-2"
                >
                  Performance Updates
                </Link>
                <Link
                  href="/my-thoughts"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-orange-500 font-semibold transition-colors py-2"
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
              <Badge className="bg-orange-100 text-orange-700 mb-4 px-3 py-1">From the Field</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">My Thoughts</h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Insights from 14 years of scaling MENA e-commerce brands and navigating the evolving performance marketing
                landscape.
              </p>
            </div>
          </section>

          {/* Blog Feed Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              {isLoading && page === 1 ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Card key={post.id} className="flex flex-col border-slate-200 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            {post.readTime} min read
                          </span>
                        </div>
                        <CardTitle className="text-2xl leading-tight">
                          <Link href={`/my-thoughts/${post.slug}`} className="hover:text-orange-600 transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-slate-600">{post.summary}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                          <Link href={`/my-thoughts/${post.slug}`}>
                            Read Full Article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
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
                      "Load More Articles"
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
    </>
  )
}
