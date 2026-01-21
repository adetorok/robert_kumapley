"use client";
import { FormEvent, useState } from "react";
import { formsContent } from "@/content/content";
import { Button } from "@/components/ui/button";

type Field = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
};

export function LeadForm({ formKey, intent }: { formKey: "advisory" | "speaking" | "mentorship"; intent: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 text-white">
        <p className="text-lg font-semibold">Thank you</p>
        <p className="text-white/70">{formsContent.thankYou}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6">
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
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit"}
      </Button>
      {status === "error" && <p className="text-sm text-red-300">Something went wrong. Please try again.</p>}
    </form>
  );
}
