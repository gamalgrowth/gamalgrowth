"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Search,
  Users,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  DollarSign,
  MousePointer,
  ShoppingCart,
  Clock,
  TrendingUp,
  Shield,
  Brain,
  Calculator,
  LineChart,
  CreditCard,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

import Hero from "@/components/hero"

export default function GamalConsultingLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const animationFrameRef = useRef<number | null>(null)
  const isProgrammaticScrollRef = useRef(false)

  const smoothScroll = (targetPosition: number, duration: number) => {
    isProgrammaticScrollRef.current = true
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = Math.min(timeElapsed / duration, 1)
      const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      const newPosition = startPosition + distance * ease(run)
      
      window.scrollTo(0, newPosition)

      if (timeElapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(animation)
      } else {
        animationFrameRef.current = null
        isProgrammaticScrollRef.current = false
      }
    }

    animationFrameRef.current = requestAnimationFrame(animation)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }

    const href = e.currentTarget.href
    const targetId = href.substring(href.lastIndexOf("#") + 1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
      smoothScroll(elementPosition, 800)
    }
  }

  useEffect(() => {
    const handleWheel = () => {
      if (isProgrammaticScrollRef.current) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }
        isProgrammaticScrollRef.current = false
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const handleStripePayment = async (lookupKey: string, productName: string) => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lookupKey,
          productName,
          successUrl: `${window.location.origin}/success?product=${encodeURIComponent(productName)}`,
          cancelUrl: `${window.location.origin}/#services`,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      alert("Something went wrong. Please try again or contact support.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Gamal Growth</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" onClick={handleSmoothScroll} className="text-slate-600 hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#results" onClick={handleSmoothScroll} className="text-slate-600 hover:text-orange-500 transition-colors">
              Results
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-slate-600 hover:text-orange-500 transition-colors py-2"
                onClick={handleSmoothScroll}
              >
                Services
              </a>
              <a 
                href="#results" 
                className="text-slate-600 hover:text-orange-500 transition-colors py-2"
                onClick={handleSmoothScroll}
              >
                Results
              </a>
            </nav>
          </div>
        )}
      </header>

      <Hero />

      {/* Trusted By Brands Carousel */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Trusted by Leading MENA Brands</p>
          </div>

          {/* Scrolling Brands Container */}
          <div className="relative overflow-hidden pointer-events-none">
            <div className="flex animate-infinite-scroll space-x-4">
              {/* First complete set */}
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/01.png"
                  alt="Logo of Nike, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/02.png"
                  alt="Logo of Under Armour, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/03.png"
                  alt="Logo of JD Sports, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/04.png"
                  alt="Logo of Sun and Sands Sports, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/05.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/06.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/07.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/08.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/09.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/10.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/11.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/12.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/13.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>

              {/* Second complete set for seamless loop */}
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/01.png"
                  alt="Logo of Nike, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/02.png"
                  alt="Logo of Under Armour, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/03.png"
                  alt="Logo of JD Sports, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/04.png"
                  alt="Logo of Sun and Sands Sports, a brand partner for e-commerce growth"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/05.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/06.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/07.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/08.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/09.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/10.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/11.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/12.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img
                  src="/logos/13.png"
                  alt="Logo of a brand partner for performance marketing"
                  className="h-8 w-auto object-contain max-w-[120px]"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-slate-600 font-bold tracking-wide">
              $100M+ COMBINED AD SPEND MANAGED ACROSS MENA PARTNERSHIPS
            </p>
          </div>
        </div>
      </section>

      {/* What's Keeping You Up? Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Keeping You Up?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 border-slate-200 hover:border-red-200 transition-colors">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">ROAS says &quot;win&quot; but margins are thinning</h3>
                <p className="text-slate-600">
                  You&apos;re celebrating high ROAS numbers while your actual profit margins shrink. The metrics lie.
                </p>
              </Card>
              <Card className="p-8 text-center border-2 border-slate-200 hover:border-yellow-200 transition-colors">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Google&apos;s PMax is a black box you can&apos;t break
                </h3>
                <p className="text-slate-600">
                  Algorithms control your spend with zero transparency. You&apos;re flying blind on your biggest channel.
                </p>
              </Card>
              <Card className="p-8 text-center border-2 border-blue-200 hover:border-blue-200 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Sales spike comes, but inventory and cashflow weren&apos;t ready
                </h3>
                <p className="text-slate-600">
                  Your marketing works too well, but operations can&apos;t keep up. Success becomes a cash flow crisis.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-slate-900">The Solution? POAS + AI + P&L Integration</h2>
              <p className="text-xl text-slate-600">Stop optimizing for vanity metrics. Start optimizing for profit.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 border-green-200 bg-green-50">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">POAS Clarity</h3>
                <p className="text-slate-600 mb-4">
                  Profit on Ad Spend reveals what ROAS hides. See which campaigns actually make you money.
                </p>
                <div className="text-sm text-green-700 font-semibold">
                  ✓ True profit visibility
                  <br />✓ Margin-aware optimization
                  <br />✓ Real business impact
                </div>
              </Card>

              <Card className="p-8 text-center border-2 border-orange-200 bg-orange-50">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">AI-Driven Systems</h3>
                <p className="text-slate-600 mb-4">
                  Break through algorithm black boxes with AI that learns your business patterns and predicts
                  performance.
                </p>
                <div className="text-sm text-orange-700 font-semibold">
                  ✓ Predictive optimization
                  <br />✓ Pattern recognition
                  <br />✓ Automated insights
                </div>
              </Card>

              <Card className="p-8 text-center border-2 border-blue-200 bg-blue-50">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">P&L Integration</h3>
                <p className="text-slate-600 mb-4">
                  Connect marketing spend directly to your financial statements. Plan inventory and cash flow around
                  performance.
                </p>
                <div className="text-sm text-blue-700 font-semibold">
                  ✓ Financial forecasting
                  <br />✓ Inventory planning
                  <br />✓ Cash flow optimization
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">What I Bring:</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              14 years of proven expertise in scaling MENA e-commerce brands with real, measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">14 Years</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Scaling GCC e-commerce
                  <br />
                  <span className="text-orange-400">(ex-Director of Growth, GMG)</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">$100M+</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Managed ad spend
                  <br />
                  <span className="text-orange-400">(25% avg. ROAS lift in 6 months)</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Dashboards</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Linked to (finance)
                  <br />
                  <span className="text-orange-400">not just clicks</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services as SaaS Products with Stripe Integration */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Products</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the right solution for your business growth stage and needs. Secure payments via Stripe.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* POAS Power Audit */}
            <Card className="border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">POAS Power Audit</CardTitle>
                <div className="text-3xl font-bold text-orange-600 mt-2">AED 9,999</div>
                <CardDescription className="text-slate-600 mt-4">
                  2 weeks to surface profit leaks & misallocated spend
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Complete ad account audit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Profit leak identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">POAS vs ROAS analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Actionable recommendations</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleStripePayment("poas_power_audit_incl_tax", "POAS Power Audit")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <CreditCard className="mr-2 w-4 h-4" />
                  Pay Now - AED 9,999
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    <Clock className="w-3 h-3 mr-1" />2 slots/month
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* 90-Day Growth Sprint */}
            <Card className="border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 hover:shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">90-Day Growth Sprint</CardTitle>
                <div className="text-3xl font-bold text-orange-600 mt-2">AED 55,000</div>
                <CardDescription className="text-slate-600 mt-4">
                  AI systems, creative loops, channel cleanup
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">AI-driven performance systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Creative optimization loops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Multi-channel cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Weekly performance reviews</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">P&L integration setup</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleStripePayment("ninety_day_growth_sprint_incl_tax", "90-Day Growth Sprint")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <CreditCard className="mr-2 w-4 h-4" />
                  Pay Now - AED 55,000
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    25% avg ROAS lift
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Fractional Retainer */}
            <Card className="border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-slate-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Fractional Retainer</CardTitle>
                <div className="text-3xl font-bold text-slate-600 mt-2">AED 29,360/mo</div>
                <CardDescription className="text-slate-600 mt-4">
                  Own your KPIs weekly, no juniors, no fluff
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Weekly KPI ownership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Direct access to Gamal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Strategic planning & execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Monthly strategy sessions</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleStripePayment("fractional_retainer_monthly_incl_tax", "Fractional Retainer")}
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white"
                >
                  <CreditCard className="mr-2 w-4 h-4" />
                  Subscribe - AED 29,360/mo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    <Users className="w-3 h-3 mr-1" />
                    Limited availability
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Security Notice */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-50 px-6 py-3 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-slate-700 font-medium">Secure payments powered by Stripe</span>
              <div className="flex space-x-2 ml-4">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="results" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Real Results</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Success stories from MENA e-commerce brands we&apos;ve helped scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Sports retailer</div>
                    <div className="font-semibold text-slate-900">Dubai</div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">+34% ROAS & +18% profit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">+34%</div>
                    <div className="text-sm text-slate-500">ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+18%</div>
                    <div className="text-sm text-slate-500">Profit</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <MousePointer className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">E-commerce marketplace</div>
                    <div className="font-semibold text-slate-900">KSA</div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">AED 210K ad waste cut</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">210K</div>
                    <div className="text-sm text-slate-500">AED Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">-45%</div>
                    <div className="text-sm text-slate-500">Waste</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Baby & Mom marketplace</div>
                    <div className="font-semibold text-slate-900">UAE</div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">CAC down 27% after unifying Meta + PMax</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">-27%</div>
                    <div className="text-sm text-slate-500">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+40%</div>
                    <div className="text-sm text-slate-500">Efficiency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
