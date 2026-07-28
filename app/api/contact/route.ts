import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { COMPANY_NAME, EMAIL } from "@/lib/constants";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  details?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const toEmail = process.env.CONTACT_TO_EMAIL || EMAIL;

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const details = body.details?.trim() ?? "";

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(service) ||
    !isNonEmptyString(details)
  ) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${COMPANY_NAME} Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New quote request: ${service} — ${name}`,
      text: [
        `New quote request from the ${COMPANY_NAME} website`,
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
      html: `
        <h2>New quote request from the ${COMPANY_NAME} website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Project details:</strong></p>
        <p>${details.replaceAll("\n", "<br />")}</p>
      `,
    });
  } catch (error) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
