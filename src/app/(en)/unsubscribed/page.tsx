import Link from "next/link";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/unsubscribed", {
  title: "Unsubscribed",
  description: "Marketing email preference confirmation for the Future Ready Executive MBA.",
  robots: { index: false, follow: false },
});

const COPY = {
  done: {
    heading: "You're unsubscribed.",
    body: "We will not send you further marketing emails. If you have an open enquiry, the programme team will still reply to that conversation. You can rejoin the mailing list at any time by requesting the programme guide again.",
  },
  invalid: {
    heading: "That link didn't check out.",
    body: "This unsubscribe link is incomplete or invalid, and your preference has not changed. Email us and we will remove you manually.",
  },
  error: {
    heading: "We couldn't process that just now.",
    body: "We could not update your preference just now. Email us and we will remove you manually.",
  },
} as const;

export default async function UnsubscribedPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const key = status === "done" || status === "invalid" || status === "error" ? status : "done";
  const copy = COPY[key];
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <div className="eyebrow"><span className="l" /><span className="mono sec-k">Email preferences</span></div>
        <h1 className="sec-h" style={{ maxWidth: "16ch" }}>{copy.heading}</h1>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>{copy.body}</p>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.phone}
          </p>
          <p>
            <Link href="/home" className="text-action">Back to the programme <span aria-hidden="true">→</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}
