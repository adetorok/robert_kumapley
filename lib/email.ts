'use server';

import nodemailer from "nodemailer";

type LeadPayload = {
  to: string;
  subject: string;
  body: string;
};

function hasSmtpEnv() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendLeadEmail(payload: LeadPayload) {
  if (!payload.to) {
    console.warn("No recipient configured for lead email");
    return;
  }

  if (!hasSmtpEnv()) {
    console.log("Lead email (SMTP not configured)", payload);
    return;
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: payload.to,
    subject: payload.subject,
    text: payload.body,
  });
}
