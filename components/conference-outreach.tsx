"use client";
import { useState } from "react";
import { Button, LinkButton } from "@/components/ui/button";
import { speakingContent } from "@/content/content";

export function ConferenceOutreach() {
  const [eventName, setEventName] = useState("");
  const [audience, setAudience] = useState("");
  const [pitch, setPitch] = useState("");
  const email = speakingContent.flagshipTalk.outreachEmail;

  function copyEmail() {
    navigator.clipboard?.writeText(email);
  }

  function generatePitch() {
    const text = `Hi there,\n\nFor ${eventName || "your conference"}, Robert Kumapley can deliver “${speakingContent.flagshipTalk.title}”. Audience: ${
      audience || "infrastructure and transformation leaders"
    }.\n\nFocus: governance, data readiness, adoption blockers, and executive alignment to de-risk AI and emerging tech programs. Formats: Keynote (45–60), Workshop (half/full day), Executive briefing (60–90). Let us know a time to compare goals and share the tailored one-sheet.\n`;
    setPitch(text);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-ink-900/60 p-6">
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" onClick={copyEmail}>
          Copy outreach email
        </Button>
        <LinkButton href="/api/speaker-sheet" variant="ghost">
          Download one-sheet
        </LinkButton>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white">Event name</label>
          <input
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Summit / conference"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white">Audience</label>
          <input
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Public agencies, transportation leaders..."
          />
        </div>
      </div>
      <Button variant="primary" onClick={generatePitch}>
        Generate tailored pitch
      </Button>
      <textarea
        className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white"
        rows={5}
        value={pitch}
        onChange={(e) => setPitch(e.target.value)}
        placeholder="Generated pitch will appear here."
      />
      <p className="text-xs text-white/50">Copy and paste into your outreach emails.</p>
    </div>
  );
}
