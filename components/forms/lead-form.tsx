"use client";
import { FormEvent, useState } from "react";
import type { Route } from "next";
import { formsContent } from "@/content/content";
import { Button } from "@/components/ui/button";

type Field = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
};

import { useRouter } from "next/navigation";

export function LeadForm({
  formKey,
  intent,
  anchorId,
  redirectType,
}: {
  formKey: "advisory" | "speaking" | "mentorship";
  intent: string;
  anchorId?: string;
  redirectType?: "advisory" | "speaking" | "mentorship" | "contact";
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const router = useRouter();
  const [formKeyed, setFormKeyed] = useState(0);
  const config = formsContent[formKey];
  const fields = (config as { fields: Field[] }).fields;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("submitting");
    const payload: Record<string, unknown> = { intent, form: formKey };
    fields.forEach((field) => {
      payload[field.name] = formData.get(field.name) ?? "";
    });
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
            setFormKeyed((k) => k + 1);
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      key={formKeyed}
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6"
      id={anchorId}
    >
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block text-sm font-semibold text-white" htmlFor={field.name}>
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
                rows={4}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
              />
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-white/50">{formsContent.privacyNotice}</p>
      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Submitting..." : "Submit"}
      </Button>
      {status === "error" && <p className="text-sm text-red-300">Something went wrong. Please try again.</p>}
    </form>
  );
}
