"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

const QUESTIONS = [
  {
    id: "broader-role",
    index: "01",
    tab: "A broader role",
    label: "Capability / evidence",
    title: "Turn experience into clearer judgement.",
    body: "Connect the context you already carry to systems thinking, first-principle analysis and an applied business project that makes your reasoning visible.",
    boundary: "The programme supports professional development. It does not promise a promotion, salary outcome or particular role.",
    href: "/executive-mba",
    action: "See the programme",
  },
  {
    id: "harder-decision",
    index: "02",
    tab: "A harder decision",
    label: "Method / application",
    title: "Make the decision inspectable before making it irreversible.",
    body: "Use seven F.A.S.T. disciplines to separate evidence from assumptions, trace dependencies, compare options and define a defensible next move.",
    boundary: "Frameworks support judgement; they do not replace accountable leadership or guarantee a business result.",
    href: "/how-it-works",
    action: "Explore the method",
  },
  {
    id: "workable-commitment",
    index: "03",
    tab: "A workable commitment",
    label: "Time / structure",
    title: "Return to serious learning without stepping away from work.",
    body: "The certificate phase uses six training days across three monthly sessions, followed by three months of supported Chartered Manager assessment preparation for eligible participants.",
    boundary: "Published dates are shown before you enquire. CMI controls Chartered Manager eligibility, assessment, membership and fees.",
    href: "/intakes",
    action: "Review 2026 intakes",
  },
  {
    id: "recognition",
    index: "04",
    tab: "Recognition clarity",
    label: "Recognition / boundary",
    title: "Understand the recognition without filling in the gaps.",
    body: "The programme is approved and endorsed by CMI against its Professional Standard. Successful participants receive the CMI Certificate of Recognition for the programme.",
    boundary: "It is professional development—not an MQA-accredited academic degree or regulated qualification.",
    href: "/executive-mba#credential",
    action: "Read the recognition boundary",
  },
  {
    id: "investment",
    index: "05",
    tab: "Time and investment",
    label: "Fee / funding route",
    title: "See the complete financial decision in one place.",
    body: "The standard fee is RM10,000.00. Malaysian participants receive the published RM5,000.00 LIFE Innoversity scholarship and pay RM5,000.00.",
    boundary: "HRD Corp—not the programme provider—decides employer funding eligibility and the approved amount.",
    href: "/fees",
    action: "Review the investment",
  },
] as const;

export default function DecisionBrief() {
  const [activeId, setActiveId] = useState<(typeof QUESTIONS)[number]["id"]>(QUESTIONS[0].id);
  const active = QUESTIONS.find((item) => item.id === activeId) ?? QUESTIONS[0];
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveTab = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % QUESTIONS.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + QUESTIONS.length) % QUESTIONS.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = QUESTIONS.length - 1;
    else return;
    event.preventDefault();
    setActiveId(QUESTIONS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="decision-brief" aria-labelledby="decision-brief-title">
      <div className="decision-brief-heading">
        <p className="mono sec-k">The advancement question desk</p>
        <h2 id="decision-brief-title">Start with the question your next role is asking.</h2>
        <p>A private, non-predictive way to find the evidence you need next. No score. No profile. No data sent.</p>
      </div>

      <div className="decision-brief-layout">
        <div className="decision-tabs" role="tablist" aria-label="Choose an advancement question">
          {QUESTIONS.map((item) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                ref={(element) => { tabRefs.current[QUESTIONS.indexOf(item)] = element; }}
                id={`decision-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`decision-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(event) => moveTab(event, QUESTIONS.indexOf(item))}
              >
                <span>{item.index}</span>
                {item.tab}
              </button>
            );
          })}
        </div>

        <article
          key={active.id}
          id={`decision-panel-${active.id}`}
          className="decision-panel"
          role="tabpanel"
          aria-labelledby={`decision-tab-${active.id}`}
        >
          <p className="mono decision-panel-label">{active.label}</p>
          <h3>{active.title}</h3>
          <p className="decision-panel-body">{active.body}</p>
          <p className="decision-panel-boundary">{active.boundary}</p>
          <Link href={active.href} className="text-action" data-track-event="cta_click" data-track-location="decision_brief">
            {active.action} <span aria-hidden="true">↗</span>
          </Link>
        </article>
      </div>
    </section>
  );
}
