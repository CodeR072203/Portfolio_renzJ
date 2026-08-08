"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "sent" | "error";

const inputStyle = {
  backgroundColor: "var(--bg-elevated)",
  border: "1px solid var(--border-strong)",
  color: "var(--text)",
} as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || data?.success !== true) {
        const error = typeof data?.error === "string" ? data.error : "Request failed";
        setStatus("error");
        setErrorMessage(error);
        return;
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong — please try again.");
    }
  };

  return (
    <Card static>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-md px-3 py-2.5 text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md px-3 py-2.5 text-sm outline-none"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role..."
              className="w-full rounded-md px-3 py-2.5 text-sm outline-none resize-none"
              style={inputStyle}
            />
          </div>
          <Button type="submit" variant="primary" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" && "Sending…"}
            {status === "sent" && "Message sent"}
            {status === "error" && "Something went wrong — try again"}
            {status === "idle" && "Send message"}
          </Button>
          {status === "sent" && (
            <p className="text-sm text-emerald-400">Your message has been sent.</p>
          )}
          {status === "error" && errorMessage && (
            <p className="text-sm text-rose-400">{errorMessage}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
