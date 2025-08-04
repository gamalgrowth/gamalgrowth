"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Mail, ArrowRight } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const product = searchParams.get("product")

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900 mb-2">Payment Successful!</CardTitle>
          <p className="text-xl text-slate-600">Thank you for purchasing {product || "our service"}</p>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="font-medium text-orange-900">Confirmation Email</p>
                  <p className="text-sm text-orange-700">
                    You&apos;ll receive a detailed confirmation email within 5 minutes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="font-medium text-orange-900">Schedule Your Session</p>
                  <p className="text-sm text-orange-700">Book your audit call using the Calendly link in your email</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-slate-600">
              Questions? Email us at{" "}
              <a href="mailto:hello@gamalgrowth.com" className="text-orange-600 hover:text-orange-700 font-medium">
                hello@gamalgrowth.com
              </a>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "/#services")}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book Your Call Now
              </Button>

              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
                className="border-slate-300 hover:bg-slate-50"
              >
                Return to Homepage
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-2">Secure payment processed by</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-16 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  stripe
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-slate-500">256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
