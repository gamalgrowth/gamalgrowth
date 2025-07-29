# Gamal Growth – Consultancy Website

> **Live Preview:** (pending deployment)
> **Repo:** [https://github.com/gamalgrowth/gamalgrowth](https://github.com/gamalgrowth/gamalgrowth)

A clean, professional landing site for **Gamal Growth**, your go‑to fractional Head of Performance Marketing in MENA. Built to showcase services, share real results, publish performance insights, and capture leads.

**🚀 Current Status:** Core functionality implemented with Stripe payments, Cal.com integration, and responsive design.

---

## 📌 Table of Contents

1. [Key Features](#key-features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Scripts](#scripts)
7. [Deployment](#deployment)
8. [Navigation & Pages](#navigation--pages)
9. [Implementation Status](#implementation-status)
10. [Contributing](#contributing)

---

## ✨ Key Features

* **✅ Complete Landing Page** with all sections implemented
* **✅ Stripe Checkout Integration** for all service offerings (POAS Audit, Growth Sprint, Fractional Retainer)
* **✅ Cal.com Integration** for direct booking of consultation calls
* **✅ Responsive Design** with modern UI using shadcn/ui components
* **✅ Professional Branding** with consistent orange/slate color scheme
* **✅ Interactive Elements** including animated brand carousel and hover effects
* **✅ Contact Form** ready for integration with backend services
* **✅ SEO-Ready Structure** with proper meta tags and semantic HTML

---

## 🛠 Tech Stack

| Layer             | Technology & Purpose                                       | Status |
| ----------------- | ---------------------------------------------------------- | ------ |
| **Framework**     | Next.js 15 (App Router, React Server Components)           | ✅ Implemented |
| **Language**      | TypeScript                                                 | ✅ Implemented |
| **Styling**       | Tailwind CSS + shadcn/ui                                   | ✅ Implemented |
| **Payments**      | Stripe Checkout (serverless API route)                     | ✅ Implemented |
| **Booking**       | Cal.com integration for appointment scheduling              | ✅ Implemented |
| **Components**    | Reusable UI components (Button, Card, Badge, etc.)         | ✅ Implemented |

---

## 📂 Project Structure

```bash
gamalgrowth/
├── app/
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Complete landing page (all sections)
│   ├── loading.tsx              # Loading component
│   ├── globals.css              # Global styles
│   ├── success/                 # Stripe success page
│   │   ├── page.tsx             # Payment success handling
│   │   └── loading.tsx          # Success page loading
│   └── api/
│       ├── create-checkout-session/
│       │   └── route.ts         # Stripe checkout session creation
│       └── webhook/
│           └── route.ts         # Stripe webhook handling
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── badge.tsx            # Badge component
│   │   ├── input.tsx            # Input component
│   │   ├── label.tsx            # Label component
│   │   └── textarea.tsx         # Textarea component
│   └── cal-embed.tsx            # Cal.com integration components
├── lib/
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── .env.local                   # Environment variables (configured)
├── package.json                 # Dependencies & scripts
├── tailwind.config.ts           # Tailwind configuration
├── components.json              # shadcn/ui configuration
└── README.md                    # This file
```

---

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/gamalgrowth/gamalgrowth.git
   cd gamalgrowth/gamalgrowth
   ```

2. **Install dependencies**

   ```bash
   npm install   # requires Node.js ≥18
   ```

3. **Environment is already configured**
   
   ✅ `.env.local` file is set up with API keys

4. **Run development server**

   ```bash
   npm run dev   # http://localhost:3000
   ```

---

## 🔐 Environment Variables

✅ **Environment configured** - `.env.local` file includes:

```env
NEXT_PUBLIC_STRIPE_PKEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
# Cal.com integration settings
```

---

## ⚙️ Scripts

| Command         | Description                           | Status |
| --------------- | ------------------------------------- | ------ |
| `npm run dev`   | Start dev server (hot reload)         | ✅ Working |
| `npm run build` | Create optimized production build     | ✅ Ready |
| `npm start`     | Run production build                  | ✅ Ready |
| `npm run lint`  | ESLint checks                         | ✅ Configured |

---

## ☁️ Deployment

### Vercel (recommended)

1. Connect GitHub repo to Vercel
2. Add Environment Variables in Vercel Settings
3. Deploy automatically on push to main

**Required Environment Variables for Production:**
- `NEXT_PUBLIC_STRIPE_PKEY`
- `STRIPE_SECRET_KEY` 
- `STRIPE_WEBHOOK_SECRET`

---

## 🧭 Navigation & Pages

**✅ All sections implemented in single-page application:**

* **Header** – Professional navigation with Gamal Growth branding
* **Hero Section** – Compelling value proposition with Cal.com booking CTA
* **Services (#services)** – Three service tiers with Stripe payment integration
* **Results (#results)** – Client case studies with real metrics
* **Performance Updates (#updates)** – Latest industry insights and trends
* **My Thoughts (#thoughts)** – Blog-style articles and thought leadership
* **Contact (#contact)** – Lead capture form with Cal.com integration
* **Footer** – Brand consistency and copyright

---

## 📊 Implementation Status

| Component               | Status      | Notes                                    |
| ----------------------- | ----------- | ---------------------------------------- |
| **Core Infrastructure** | 🟢 Complete | Next.js 15, TypeScript, Tailwind setup  |
| **Landing Page**        | 🟢 Complete | All sections built and responsive        |
| **Stripe Integration**  | 🟢 Complete | All 3 products, checkout sessions       |
| **Cal.com Integration** | 🟢 Complete | Inline embed + popup buttons            |
| **UI Components**       | 🟢 Complete | shadcn/ui implementation                 |
| **Responsive Design**   | 🟢 Complete | Mobile-first, all breakpoints           |
| **Environment Setup**   | 🟢 Complete | All API keys configured                  |
| **Brand Consistency**   | 🟢 Complete | Orange/slate theme, professional look    |
| **SEO Structure**       | 🟠 Partial  | Basic structure, needs meta optimization |
| **Analytics**           | 🔴 Pending  | GA4/Plausible integration needed         |
| **Performance Optimization** | 🟠 Partial | Image optimization pending          |

---

## 🎯 Next Steps

**Ready for Launch:**
1. **Deploy to Vercel** - Core functionality is complete
2. **Test Stripe payments** in production mode
3. **Verify Cal.com integration** with live environment

**Optional Enhancements:**
1. Add Google Analytics or Plausible
2. Implement proper SEO meta tags
3. Add image optimization for brand logos
4. Create separate pages for blog articles
5. Add form backend integration for contact form

---

## 🤝 Contributing

The core application is ready for production. For additional features:

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/<your-username>/gamalgrowth.git
   cd gamalgrowth
   ```
3. **Create and switch** to a new branch:

   ```bash
   git checkout -b feature/<brief-description>
   ```
4. **Make your changes** in code, then **stage** and **commit**:

   ```bash
   git add .
   git commit -m "feat: <short description of change>"
   ```
5. **Push** your branch to GitHub:

   ```bash
   git push origin feature/<brief-description>
   ```
6. **Open a Pull Request** against `main` on the original repository.

Thanks for helping improve Gamal Growth's site! 🙌
