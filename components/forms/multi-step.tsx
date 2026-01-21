"use client";
import { useMemo, useState } from "react";
import type { Route } from "next";
import { formsContent } from "@/content/content";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function MultiStepForm({ anchorId = "contact-form" }: { anchorId?: string }) {
  const steps = formsContent.multistep.steps;
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [data, setData] = useState<Record<string, string | boolean>>({});
  const router = useRouter();

  const isLast = current === steps.length - 1;

  const progress = useMemo(() => ((current + 1) / steps.length) * 100, [current, steps.length]);

  function updateField(name: string, value: string | boolean) {
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    setStatus("submitting");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent: data.intent ?? "Other", ...data }),
      });
      setStatus("success");
      // Optional redirect based on intent if provided.
      const intent = (data.intent as string | undefined)?.toLowerCase();
      if (intent === "advisory" || intent === "speaking" || intent === "mentorship") {
        router.push(`/thanks?type=${intent}` as Route);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6" id="contact-form">
        <p className="text-lg font-semibold text-white">Thanks — we’ll get back to you shortly.</p>
        <p className="text-white/70">If this is time-sensitive, please use the scheduling link.</p>
        <Button
          className="mt-4"
          variant="secondary"
          onClick={() => {
            setStatus("idle");
            setCurrent(0);
            setData({});
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  const step = steps[current];

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 space-y-4" id={anchorId}>
      <div className="h-1.5 w-full rounded-full bg-white/10">
        <div className="h-full rounded-full bg-accent-500" style={{ width: `${progress}%` }} />
      </div>
      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
      <div className="space-y-4">
        {step.fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block text-sm font-semibold text-white" htmlFor={field.name}>
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
                rows={4}
                value={(data[field.name] as string) ?? ""}
                onChange={(e) => updateField(field.name, e.target.value)}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
                value={(data[field.name] as string) ?? ""}
                onChange={(e) => updateField(field.name, e.target.value)}
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
            ) : field.type === "radio" ? (
              <div className="flex flex-wrap gap-3">
                {field.options?.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/80">
                    <input
                      type="radio"
                      name={field.name}
                      value={opt}
                      checked={data[field.name] === opt}
                      onChange={(e) => updateField(field.name, e.target.value)}
                      required={field.required}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ) : field.type === "checkbox" ? (
              <label className="flex items-center gap-3 text-sm text-white/80">
                <input
                  type="checkbox"
                  name={field.name}
                  checked={Boolean(data[field.name])}
                  onChange={(e) => updateField(field.name, e.target.checked)}
                  required={field.required}
                />
                {field.label}
              </label>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
                value={(data[field.name] as string) ?? ""}
                onChange={(e) => updateField(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-white/50">{formsContent.privacyNotice}</p>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="w-full sm:w-auto"
        >
          Back
        </Button>
        {!isLast ? (
          <Button onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))} className="w-full sm:w-auto">
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={status === "submitting"} className="w-full sm:w-auto">
            {status === "submitting" ? "Submitting..." : "Submit"}
          </Button>
        )}
      </div>
      {status === "error" && <p className="text-sm text-red-300">Something went wrong. Please try again.</p>}
    </div>
  );
}
