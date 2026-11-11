"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/button";

/** Copies the full letter, for people whose device has no mail app set up. */
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={buttonClass("secondary")}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? "Copied" : "Copy the letter"}
    </button>
  );
}
