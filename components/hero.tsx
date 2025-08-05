"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CreditCard,
  Clock,
} from "lucide-react"

export default function Hero() {
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
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-[500px] md:min-h-[700px]">
      <div className="absolute inset-0 w-full h-full">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1024px)" srcSet="/images/Gamal-photo-1.png" />
          <source media="(min-width: 768px)" srcSet="/images/Gamal-photo-2.png" />
          <img
            src="/images/Gamal-photo-3.png"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>
      
      <div className="relative container mx-auto px-4 z-20 pt-56 pb-12 md:py-24">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-6">
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
              <Button
                onClick={() => handleStripePayment("one_hour_strategy_call_incl_tax", "One-Hour Strategy Call")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <CreditCard className="mr-3 w-6 h-6" />
                Book a One-Hour Strategy Call - AED 999
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <p className="text-sm text-slate-400 flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Limited availability • Targeted expert advice</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-4">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm">
                Mohamed Gamal, MBA • $100M+ Ad Spend Managed
            </Badge>
        </div>
      </div>
    </section>
  )
}
