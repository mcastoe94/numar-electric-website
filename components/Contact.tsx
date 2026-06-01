"use client";

import { FormEvent, useState } from "react";
import { EMAIL, PHONE_HREF, PHONE_NUMBER, SERVICE_FORM_OPTIONS } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Ready to Schedule Your Electrical Service?"
              description="Tell us about your project and a member of the Numar Electric team will follow up with next steps."
              align="left"
            />

            <div className="mt-10 space-y-6">
              <ContactItem label="Phone" value={PHONE_NUMBER} href={PHONE_HREF} />
              <ContactItem label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactItem
                label="Service Area"
                value="Phoenix Metro & Surrounding Arizona"
              />
            </div>

            <div className="mt-12 border border-brand/15 bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Prefer to talk now?
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                Call Numar Electric to discuss your project, timeline, and service needs.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-5 inline-flex items-center justify-center rounded-sm bg-brand px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:bg-brand-dark"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="border border-zinc-200 bg-white p-7 sm:p-10">
            {submitted ? (
              <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center bg-brand/10 text-brand">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                    <path
                      d="M5 12l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mt-8 text-3xl text-brand-dark">
                  Quote Request Received
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
                  Thank you for contacting Numar Electric. We&apos;ll review your project
                  details and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required placeholder="Your name" />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(480) 555-0147"
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                />
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium tracking-wide text-brand-dark"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-sm border border-zinc-300 bg-white px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_FORM_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block text-sm font-medium tracking-wide text-brand-dark"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    required
                    placeholder="Tell us about your project, property type, and timeline."
                    className="w-full resize-y rounded-sm border border-zinc-300 px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-brand px-8 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-brand-dark"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium tracking-wide text-brand-dark">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-zinc-300 px-4 py-3.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand/20"
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      {href ? (
        <a
          href={href}
          className="font-heading mt-1 inline-block text-xl text-brand-dark transition-colors hover:text-brand"
        >
          {value}
        </a>
      ) : (
        <p className="font-heading mt-1 text-xl text-brand-dark">{value}</p>
      )}
    </div>
  );
}
