export type LeadType = "Advisory" | "Speaking" | "Mentorship" | "Workshop" | "Other" | "SpeakerKit";

export function resolveLeadEmail(intent?: string) {
  const normalized = (intent ?? "").toLowerCase();
  if (normalized.includes("speak") || normalized === "speaking") return process.env.ROUTE_SPEAKING_EMAIL;
  if (normalized.includes("advis") || normalized.includes("project")) return process.env.ROUTE_ADVISORY_EMAIL;
  if (normalized.includes("mentor")) return process.env.ROUTE_MENTORSHIP_EMAIL;
  return process.env.ROUTE_DEFAULT_EMAIL;
}

export function formatLeadBody(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${value ?? ""}`)
    .join("\n");
}
