"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CreditCard,
  Clock,
} from "lucide-react"
import { useState, useEffect } from "react"

const texts = {
  "/Gamal-photo-1.png": {
    badge: "E-commerce Growth Specialist",
    title: "Scale Your Brand Profitably",
    description: "I help 7-8 figure MENA e-commerce businesses achieve sustainable growth through bespoke performance marketing strategies.",
    stats: [
      { value: "+30%", label: "Average Profit Uplift" },
      { value: "12+", label: "Years of Experience" },
      { value: "50M+", label: "Managed Ad Spend" },
    ],
  },
  "/Gamal-photo-2.png": {
    badge: "Fractional CMO Services",
    title: "Expert Leadership On-Demand",
    description: "Get the strategic guidance of a seasoned CMO without the full-time overhead. Perfect for scaling businesses.",
    stats: [
      { value: "2x", label: "Faster Growth" },
      { value: "40%", label: "Improved Efficiency" },
      { value: "100%", label: "Focus on Your KPIs" },
    ],
  },
  "/Gamal-photo-3.png": {
    badge: "AI-Powered Marketing",
    title: "Data-Driven Decisions",
    description: "Leverage the power of AI to unlock hidden insights in your data and build a resilient marketing engine for the future.",
    stats: [
      { value: "24/7", label: "Optimization" },
      { value: "95%", label: "Prediction Accuracy" },
      { value: "3x", label: "More Creative Insights" },
    ],
  },
}

const images: (keyof typeof texts)[] = [
  "/Gamal-photo-1.png",
  "/Gamal-photo-2.png",
  "/Gamal-photo-3.png",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentImage = images[currentImageIndex]
  const currentText = texts[currentImage]

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
    <section className="relative bg-slate-900 text-white overflow-hidden min-h-[500px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background Image ${index + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      
      <div className="relative container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm">
                  {currentText.badge}
                </Badge>
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                {currentText.title}
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                {currentText.description}
              </p>

              <div className="flex flex-wrap items-center gap-8 text-orange-400 text-lg">
                {currentText.stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>
                      <span className="text-orange-500 font-bold text-2xl">{stat.value}</span> {stat.label}
                    </span>
                  </div>
                ))}
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
    </section>
  )
}
