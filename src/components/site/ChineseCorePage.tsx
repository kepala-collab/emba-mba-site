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
      <section className="section zh-core-page geo-section">
        <div className="wrap">
          <Reveal>
            <div className="zh-core-intro">
              <div className="eyebrow"><span className="l" /><span className="mono sec-k">{eyebrow}</span></div>
              <h1>{title}</h1>
              <p>{intro}</p>
            </div>
          </Reveal>
          <div className="zh-core-section-grid">
            {sections.map(([heading, body], index) => (
              <Reveal key={heading} delay={(index % 2) * 60}>
                <section className="card">
                  <h2>{heading}</h2>
                  <p>{body}</p>
                </section>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-m">
            <div className="zh-core-actions">
              <Link href="/zh/apply" className="btn btn-primary">向课程团队提问 →</Link>
              <Link href="/zh/faq" className="btn btn-ghost">常见问题</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
