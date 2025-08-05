import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-07-30.basil",
  })
  try {
    const { lookupKey, productName, successUrl, cancelUrl } = await request.json()

    // Find the Stripe Price object using the lookup_key
    const prices = await stripe.prices.list({
      lookup_keys: [lookupKey],
      expand: ["data.product"],
      active: true,
    })

    if (!prices.data.length) {
      return NextResponse.json({ error: "Price not found" }, { status: 404 })
    }

    const price = prices.data[0]

    // Determine mode based on product type or price properties (e.g., recurring)
    const mode = price.type === "recurring" ? "subscription" : "payment"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        productName,
      },
      customer_email: undefined, // Will be collected during checkout
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["AE", "SA", "KW", "QA", "BH", "OM", "EG", "JO", "LB"],
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