import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { priceId, productName, successUrl, cancelUrl } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: priceId === "price_fractional_retainer" ? "subscription" : "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        productName,
      },
      customer_email: undefined, // Will be collected during checkout
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["AE", "SA", "KW", "QA", "BH", "OM", "EG", "JO", "LB", "US", "GB", "CA"],
      },
      allow_promotion_codes: true,
      automatic_tax: {
        enabled: true,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}
