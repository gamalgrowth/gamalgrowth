import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,
  {
    apiVersion: "2025-06-30.basil",
  }
)

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session

      // Handle successful payment
      console.log("Payment successful for session:", session.id)

      // Here you can:
      // - Send confirmation email
      // - Update your database
      // - Trigger automation workflows
      // - Send Calendly booking link

      // Example: Send email notification
      await sendConfirmationEmail(session)

      break

    case "invoice.payment_succeeded":
      const invoice = event.data.object as Stripe.Invoice

      // Handle successful subscription payment
      console.log("Subscription payment successful:", invoice.id)

      break

    case "customer.subscription.deleted":
      const subscription = event.data.object as Stripe.Subscription

      // Handle subscription cancellation
      console.log("Subscription cancelled:", subscription.id)

      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

async function sendConfirmationEmail(session: Stripe.Checkout.Session) {
  // Implement your email sending logic here
  // You can use services like SendGrid, Resend, or Nodemailer

  const productName = session.metadata?.productName
  const customerEmail = session.customer_details?.email

  console.log(`Sending confirmation email to ${customerEmail} for ${productName}`)

  // Example email content would include:
  // - Payment confirmation
  // - Service details
  // - Calendly booking link
  // - Next steps
}
