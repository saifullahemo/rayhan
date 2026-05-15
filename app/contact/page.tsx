"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Nav from "../components/nav";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("Thanks. Your message has been sent.");
      setFormData(initialForm);
    } catch {
      setStatus("The form could not send right now. You can email me directly instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Nav />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-6xl">
            Let’s make your product easier to trust.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Share what you’re building, what feels risky, or where the experience needs improvement. I’ll reply with
            a practical next step.
          </p>

          <div className="mt-10 space-y-3">
            <SocialLink href="mailto:saifullahemo@gmail.com" icon={Mail} label="saifullahemo@gmail.com" />
            <SocialLink href="https://github.com/saifullahemo" icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/saifullahemo" icon={Linkedin} label="LinkedIn" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Name
              <input
                required
                type="text"
                value={formData.name}
                onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                className="h-12 rounded-md border border-slate-300 bg-white px-4 text-base font-normal text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Email
              <input
                required
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                className="h-12 rounded-md border border-slate-300 bg-white px-4 text-base font-normal text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-800">
              Message
              <textarea
                required
                rows={7}
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                className="resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
                placeholder="Tell me about the product, timeline, and what you need help with."
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="h-12 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {status && <p className="text-sm leading-6 text-slate-600">{status}</p>}
          </div>
        </form>
      </section>
    </main>
  );
}

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:text-emerald-700"
  >
    <Icon className="h-5 w-5" />
    {label}
  </a>
);
