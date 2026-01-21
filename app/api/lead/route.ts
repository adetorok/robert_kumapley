import { NextResponse } from "next/server";
import { resolveLeadEmail, formatLeadBody } from "@/lib/lead-routing";
import { sendLeadEmail } from "@/lib/email";

async function forwardToZapier(payload: Record<string, unknown>) {
  const webhook = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;
  if (!webhook) return;
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn("Zapier forwarding failed", error);
  }
}

export async function POST(req: Request) {
  const data = await req.json();
  const intent = data.intent || data.tag || "Other";
  const recipient = resolveLeadEmail(String(intent)) ?? "";
  const subject = `New ${intent} inquiry for Robert`;
  const body = formatLeadBody(data);

  await sendLeadEmail({ to: recipient, subject, body });
  await forwardToZapier({ intent, ...data });

  return NextResponse.json({ ok: true, message: "Thanks! We will follow up." });
}
