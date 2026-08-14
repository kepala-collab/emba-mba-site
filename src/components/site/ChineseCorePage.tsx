import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import BreadcrumbJsonLd from "@/components/site/BreadcrumbJsonLd";

type Props = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: readonly (readonly [string, string])[];
};

export default function ChineseCorePage({ path, eyebrow, title, intro, sections }: Props) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: title, path }]} />
      <section className="section" style={{ paddingTop: "clamp(52px,7vw,84px)" }}>
        <div className="wrap maxw-820">
          <Reveal>
            <div className="eyebrow"><span className="l" /><span className="mono sec-k">{eyebrow}</span></div>
            <h1 className="sec-h">{title}</h1>
            <p className="sec-sub">{intro}</p>
          </Reveal>
          <div className="mt-m" style={{ display: "grid", gap: 16 }}>
            {sections.map(([heading, body], index) => (
              <Reveal key={heading} delay={(index % 2) * 60}>
                <section className="card">
                  <h2 style={{ fontSize: "1.35rem", marginBottom: 10 }}>{heading}</h2>
                  <p style={{ color: "var(--ink-2)", margin: 0 }}>{body}</p>
                </section>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-m">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/zh/apply" className="btn btn-primary">预约课程沟通 →</Link>
              <Link href="/zh/faq" className="btn btn-ghost">常见问题</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
