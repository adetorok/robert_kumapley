"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const search = useSearchParams();
  const key = `${pathname ?? ""}${search?.toString() ?? ""}`;

  useEffect(() => {
    // On route/hash change, jump to top; browser will handle anchor targets.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [key]);

  return null;
}
