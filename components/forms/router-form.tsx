"use client";
import { useState } from "react";
import { LeadForm } from "@/components/forms/lead-form";

const tabs = [
  { key: "advisory", label: "Advisory" },
  { key: "speaking", label: "Speaking" },
  { key: "mentorship", label: "Mentorship" },
] as const;

export function ContactRouterForm() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("advisory");
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              active === tab.key ? "bg-accent-500 text-white" : "bg-white/5 text-white/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <LeadForm formKey={active} intent={tabLabel(active)} />
    </div>
  );
}

function tabLabel(key: (typeof tabs)[number]["key"]) {
  if (key === "advisory") return "Advisory";
  if (key === "speaking") return "Speaking";
  return "Mentorship";
}
