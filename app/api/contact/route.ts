import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  let normalized = value.trim();

  const markdownMatch = normalized.match(/^\[([^\]]+)\]\(\s*mailto:([^\)]+)\s*\)$/i);
  if (markdownMatch) {
    normalized = markdownMatch[2].trim();
  }

  if (/^mailto:/i.test(normalized)) {
    normalized = normalized.replace(/^mailto:/i, "").trim();
  }

  return normalized;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = normalizeEmail(body.email);
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Name, email, and message are all required." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ success: false, error: "That email address doesn't look valid." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    console.error("Contact email service missing required environment variables.");
    return NextResponse.json({ success: false, error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend email send failed:", error);
    return NextResponse.json({ success: false, error: "Unable to send your message right now. Please try again later." }, { status: 500 });
  }
}
