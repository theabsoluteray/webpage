import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

// Store for rate limiting (in production, use Redis)
const rateLimitStore: Record<string, number[]> = {}

const RATE_LIMIT_WINDOW = 3600000 // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 3 // Max 3 emails per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now()

  if (!rateLimitStore[ip]) {
    rateLimitStore[ip] = []
  }

  // Remove timestamps older than the rate limit window
  rateLimitStore[ip] = rateLimitStore[ip].filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW)

  // Check if limit exceeded
  if (rateLimitStore[ip].length >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  // Add current timestamp
  rateLimitStore[ip].push(now)
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (result.error) {
      console.log(process.env.RESEND_API_KEY)

      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
