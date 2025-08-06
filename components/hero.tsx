import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Phone,
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
              <div className="inline-block rounded-full bg-orange-950/40 border border-orange-600/50 px-3 py-1.5 mb-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  Mohamed Gamal, MBA
                </p>
              </div>
              <h1 className="text-[3.56rem] lg:text-[5.7rem] font-bold leading-tight">
                Turn Ad Spend into <span className="text-orange-500 relative">Profit-Fuel</span>
              </h1>

              <p className="text-[15px] text-slate-300 leading-relaxed max-w-2xl">
                Fractional Head of Performance Marketing for 7-8-figure MENA e-commerce brands. AI-driven systems
                wired directly to your P&L.
              </p>

              <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-orange-400 text-[10px] md:text-xs">
                <li className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>
                    <span className="font-bold text-sm">+25%</span> ROAS in 6 months
                  </span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>
                    <span className="font-bold text-sm">14</span> years MENA experience
                  </span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>
                    <span className="font-bold text-sm">2</span> audit slots/month
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => handleStripePayment("one_hour_strategy_call_incl_tax", "One-Hour Strategy Call")}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <Phone className="mr-2 w-5 h-5" />
                Book a One-Hour Strategy Call - AED 999
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-slate-400 flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Limited availability • Targeted expert advice</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          <img src="/logos/GMG.png" alt="GMG Logo" className="!h-5" />
          <div className="flex flex-col items-start text-left">
            <p className="text-[9px] font-bold text-white leading-tight">Ex-Director of Growth</p>
            <p className="text-[9px] text-slate-400 leading-tight">GMG - Gulf Marketing Group</p>
          </div>
        </div>
      </div>
    </section>
  )
}
