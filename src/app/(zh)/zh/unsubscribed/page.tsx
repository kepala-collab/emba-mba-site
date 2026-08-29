import Link from "next/link";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/zh/unsubscribed", {
  title: "已退订",
  description: "Future Ready Executive MBA 营销邮件偏好确认。",
  robots: { index: false, follow: false },
});

const COPY = {
  done: {
    heading: "您已退订。",
    body: "我们不会再向您发送营销邮件。如您有正在进行的咨询，课程团队仍会继续回复该对话。您可随时通过再次索取课程指南，重新加入邮件列表。",
  },
  invalid: {
    heading: "链接无法验证。",
    body: "该退订链接不完整或无效，您的偏好尚未更改。请发邮件给我们，我们会以人工方式为您办理退订。",
  },
  error: {
    heading: "暂时无法处理。",
    body: "我们暂时无法更新您的偏好。请发邮件给我们，我们会以人工方式为您办理退订。",
  },
} as const;

export default async function UnsubscribedZhPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const key = status === "done" || status === "invalid" || status === "error" ? status : "done";
  const copy = COPY[key];
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <div className="eyebrow"><span className="l" /><span className="mono sec-k">邮件偏好</span></div>
        <h1 className="sec-h" style={{ maxWidth: "16ch" }}>{copy.heading}</h1>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>{copy.body}</p>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.phone}
          </p>
          <p>
            <Link href="/zh" className="text-action">返回课程页面 <span aria-hidden="true">→</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}
