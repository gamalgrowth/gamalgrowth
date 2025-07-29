"use client"

import type React from "react"

import { useEffect } from "react"

interface CalEmbedProps {
  calLink: string
  config?: {
    name?: string
    email?: string
    theme?: "light" | "dark"
  }
}

export function CalInlineEmbed({ calLink, config }: CalEmbedProps) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const embedConfig = {
    namespace: "poas-audit",
    styles: {
      branding: {
        brandColor: "#f97316", // Orange-500
      },
    },
    hideEventTypeDetails: false,
    layout: "month_view",
    ...config,
  }

  return (
    <div
      className="cal-inline-embed"
      data-cal-link={calLink}
      data-cal-config={JSON.stringify(embedConfig)}
      style={{ width: "100%", height: "630px", overflow: "scroll" }}
    />
  )
}

export function CalPopupButton({
  calLink,
  children,
  className = "",
  config,
}: CalEmbedProps & {
  children: React.ReactNode
  className?: string
}) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as unknown as { Cal?: unknown }).Cal) {
      const Cal = (window as unknown as { Cal: (action: string, options: Record<string, unknown>) => void }).Cal
      Cal("ui", {
        styles: {
          branding: {
            brandColor: "#f97316",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
        ...config,
      })
      Cal("openModal", {
        calLink,
      })
    } else {
      // Fallback to direct link
      window.open(`https://cal.com/${calLink}`, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div
      className={className}
      onClick={handleClick}
      data-cal-link={calLink}
      data-cal-config={JSON.stringify({
        name: config?.name,
        email: config?.email,
        theme: config?.theme || "light",
      })}
    >
      {children}
    </div>
  )
}
