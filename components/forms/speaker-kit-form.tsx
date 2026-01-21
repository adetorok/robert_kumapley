"use client";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { formsContent } from "@/content/content";

import { useRouter } from "next/navigation";
import type { Route } from "next";

export function SpeakerKitForm({ anchorId, redirectType }: { anchorId?: string; redirectType?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formKey, setFormKey] = useState(0);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("submitting");
    const payload = {
      intent: "SpeakerKit",
      tag: formsContent.speakerKit.tag,
      fullName: formData.get("fullName"),
      organization: formData.get("organization"),
      email: formData.get("email"),
      audience: formData.get("audience"),
      notes: formData.get("notes"),
    };
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
      if (redirectType) {
        router.push(`/thanks?type=${redirectType}` as Route);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 text-white" id={anchorId}>
        <p className="text-lg font-semibold">Thanks — we’ll get back to you shortly.</p>
        <p className="text-white/70">If this is time-sensitive, please use the scheduling link.</p>
        <Button
          className="mt-4"
          variant="secondary"
          onClick={() => {
            setStatus("idle");
            setFormKey((k) => k + 1);
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      key={formKey}
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6"
      id={anchorId}
    >
      {["fullName", "organization", "email", "audience"].map((name) => (
        <div key={name} className="space-y-2">
          <label className="block text-sm font-semibold text-white capitalize" htmlFor={name}>
            {name === "audience" ? "Audience / event" : name.replace(/([A-Z])/g, " $1")}
          </label>
          <input
            id={name}
            name={name}
            required={name !== "audience"}
            type={name === "email" ? "email" : "text"}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
          />
        </div>
      ))}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-white" htmlFor="notes">
          Notes / customization needs
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
        />
      </div>
      <p className="text-xs text-white/50">{formsContent.privacyNotice}</p>
      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Submitting..." : "Request speaker kit"}
      </Button>
      {status === "error" && <p className="text-sm text-red-300">Something went wrong. Please try again.</p>}
    </form>
  );
}
