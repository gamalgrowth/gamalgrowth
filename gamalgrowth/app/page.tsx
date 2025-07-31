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
  Calendar,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalInlineEmbed, CalPopupButton } from "@/components/cal-embed"

export default function GamalConsultingLanding() {
  const handleStripePayment = async (priceId: string, productName: string) => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
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
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#results" className="text-slate-600 hover:text-orange-500 transition-colors">
              Results
            </a>
            <a href="#updates" className="text-slate-600 hover:text-orange-500 transition-colors">
              Performance Updates
            </a>
            <a href="#thoughts" className="text-slate-600 hover:text-orange-500 transition-colors">
              My Thoughts
            </a>
            <a href="#contact" className="text-slate-600 hover:text-orange-500 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-[700px]">
        {/* Large Transparent Photo Overlay */}
        <div className="absolute right-0 top-0 w-full h-full opacity-25">
          <img src="/images/Gamal-photo.png" alt="Mohamed Gamal" className="w-full h-full object-cover object-right" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm">
                    Mohamed Gamal, MBA • $100M+ Ad Spend Managed
                  </Badge>
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  Turn Ad Spend into <span className="text-orange-500 relative">Profit-Fuel</span>
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Fractional Head of Performance Marketing for 7-8-figure MENA e-commerce brands. AI-driven systems
                  wired directly to your P&L.
                </p>

                <div className="flex flex-wrap items-center gap-8 text-orange-400 text-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>
                      <span className="text-orange-500 font-bold text-2xl">+25%</span> ROAS in 6 months
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>
                      <span className="text-orange-500 font-bold text-2xl">14</span> years MENA experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>
                      <span className="text-orange-500 font-bold text-2xl">2</span> audit slots/month
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <CalPopupButton
                  calLink="gamal/poas-power-audit"
                  className="inline-block"
                  config={{
                    theme: "light",
                  }}
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <Calendar className="mr-3 w-6 h-6" />
                    Book a POAS Power Audit - $2,500
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </CalPopupButton>

                <p className="text-sm text-slate-400 flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Limited availability • Book directly via Cal.com • No pitch, just clarity</span>
                </p>
              </div>
            </div>
          </div>

          {/* Floating Credential Card */}
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">Ex-Director of Growth</div>
                <div className="text-orange-400 text-sm">GMG • Gulf Marketing Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <img src="/logos/01.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/02.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/03.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/04.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/05.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/06.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/07.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/08.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/09.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/10.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/11.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/12.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/13.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>

              {/* Second complete set for seamless loop */}
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/01.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/02.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/03.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/04.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/05.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/06.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/07.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/08.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/09.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/10.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/11.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/12.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
              <div className="flex-shrink-0 bg-orange-500 rounded-full px-8 py-4 min-w-[180px] flex items-center justify-center">
                <img src="/logos/13.png" alt="Brand partner" className="h-8 w-auto object-contain max-w-[120px]" />
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
                <div className="text-3xl font-bold text-orange-600 mt-2">$2,500</div>
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
                  onClick={() => handleStripePayment("price_poas_audit", "POAS Power Audit")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <CreditCard className="mr-2 w-4 h-4" />
                  Pay Now - $2,500
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
                <div className="text-3xl font-bold text-orange-600 mt-2">$15,000</div>
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
                  onClick={() => handleStripePayment("price_growth_sprint", "90-Day Growth Sprint")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <CreditCard className="mr-2 w-4 h-4" />
                  Pay Now - $15,000
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
                <div className="text-3xl font-bold text-slate-600 mt-2">$8,000/mo</div>
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
                  onClick={() => handleStripePayment("price_fractional_retainer", "Fractional Retainer")}
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white"
                >
                  <CreditCard className="mr-2 w-4 h-4" />
                  Subscribe - $8,000/mo
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

      {/* Performance Marketing Updates Section */}
      <section id="updates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Performance Marketing Updates</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Latest insights and trends scraped from across the web to keep you ahead of the curve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-100 text-orange-700">Meta Ads</Badge>
                  <span className="text-sm text-slate-500">2 hours ago</span>
                </div>
                <CardTitle className="text-xl leading-tight">
                  Meta&apos;s New AI Creative Tools Show 23% Better Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Latest data reveals Meta&apos;s AI-powered creative optimization is delivering significant improvements in
                  ROAS across e-commerce verticals...
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Full Update
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-100 text-blue-700">Google Ads</Badge>
                  <span className="text-sm text-slate-500">5 hours ago</span>
                </div>
                <CardTitle className="text-xl leading-tight">
                  PMax Campaign Structure Changes Impact MENA Markets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Google&apos;s latest Performance Max updates are showing different results in MENA markets compared to
                  US/EU benchmarks...
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Full Update
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-100 text-green-700">Industry News</Badge>
                  <span className="text-sm text-slate-500">1 day ago</span>
                </div>
                <CardTitle className="text-xl leading-tight">
                  iOS 17.2 Attribution Changes: What E-commerce Needs to Know
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Apple&apos;s latest privacy updates are reshaping attribution models. Here&apos;s how to adapt your measurement
                  strategy...
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Full Update
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3 bg-transparent">
              View All Updates
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* My Thoughts Section */}
      <section id="thoughts" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">My Thoughts</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Insights from 14 years of scaling MENA e-commerce brands and navigating the evolving performance marketing
              landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">December 15, 2024</div>
                    <div className="font-semibold text-slate-900">5 min read</div>
                  </div>
                </div>
                <CardTitle className="text-2xl leading-tight mb-4">
                  Why ROAS is Lying to Your P&L (And What to Track Instead)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  After auditing 50+ MENA e-commerce accounts this year, I&apos;ve seen the same pattern: brands celebrating
                  4x ROAS while their profit margins shrink. Here&apos;s why traditional metrics are broken and what actually
                  matters...
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">December 10, 2024</div>
                    <div className="font-semibold text-slate-900">8 min read</div>
                  </div>
                </div>
                <CardTitle className="text-2xl leading-tight mb-4">
                  The MENA E-commerce Attribution Crisis (And How AI Can Fix It)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  iOS updates, cookie deprecation, and regional privacy laws are creating a perfect storm for
                  attribution in MENA markets. But there&apos;s a way forward using AI-powered modeling...
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">December 5, 2024</div>
                    <div className="font-semibold text-slate-900">6 min read</div>
                  </div>
                </div>
                <CardTitle className="text-2xl leading-tight mb-4">
                  Black Friday 2024: What Worked (And What Didn&apos;t) in GCC Markets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  I analyzed performance data from 12 GCC brands during Black Friday 2024. The results were surprising -
                  traditional strategies failed while these 3 approaches dominated...
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">November 28, 2024</div>
                    <div className="font-semibold text-slate-900">10 min read</div>
                  </div>
                </div>
                <CardTitle className="text-2xl leading-tight mb-4">
                  Building a POAS Dashboard That Actually Drives Decisions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  Most performance dashboards are vanity metric museums. Here&apos;s how to build a POAS-focused dashboard
                  that connects directly to your P&L and drives real business decisions...
                </p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3 bg-transparent">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Capture Form with Cal.com Integration */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-white">Ready for Profit-Fuel?</h2>
              <p className="text-xl text-orange-100">
                I open just 2 audit slots per month. Book your POAS Power Audit call directly - no pitch, just clarity
                and peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Contact form for initial info */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Tell Me About Your Business</h3>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website URL</Label>
                      <Input id="website" placeholder="https://yourwebsite.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="revenue">Monthly Revenue Range</Label>
                      <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>Select range...</option>
                        <option>$50K - $100K</option>
                        <option>$100K - $500K</option>
                        <option>$500K - $1M</option>
                        <option>$1M+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="challenge">Biggest Performance Marketing Challenge</Label>
                      <Textarea
                        id="challenge"
                        placeholder="What's keeping you up at night? ROAS vs profit issues, attribution problems, scaling challenges..."
                        rows={4}
                      />
                    </div>
                    <CalPopupButton
                      calLink="gamal/poas-power-audit"
                      className="w-full"
                      config={{
                        theme: "light",
                      }}
                    >
                      <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                        Submit & Book Call
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </CalPopupButton>
                  </form>
                </CardContent>
              </Card>

              {/* Right side - Cal.com embed */}
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Book Your POAS Power Audit</h3>

                {/* Cal.com Inline Widget */}
                <CalInlineEmbed
                  calLink="gamal/poas-power-audit"
                  config={{
                    theme: "light",
                  }}
                />

                {/* Fallback for when Cal.com doesn't load */}
                <div className="text-center space-y-4 mt-6">
                  <p className="text-slate-600">Can&apos;t see the calendar? Book directly:</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                    <a
                      href="https://cal.com/gamal/poas-power-audit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Open Cal.com
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 text-center">
              <div className="grid md:grid-cols-3 gap-8 text-white">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">30 min</div>
                  <div className="text-orange-100">Deep-dive audit call</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">$2,500</div>
                  <div className="text-orange-100">Value delivered in one call</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">2 slots</div>
                  <div className="text-orange-100">Available per month</div>
                </div>
              </div>
            </div>
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
