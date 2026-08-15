"use client";

export default function PrintBriefButton({ label = "Print or save as PDF" }: { label?: string }) {
  return <button className="btn btn-primary" type="button" onClick={() => window.print()}>{label}</button>;
}
