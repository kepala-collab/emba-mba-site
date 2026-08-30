import Link from "next/link";
import { SITE } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/ms/unsubscribed", {
  title: "Berhenti Melanggan",
  description: "Pengesahan keutamaan e-mel pemasaran Future Ready Executive MBA.",
  robots: { index: false, follow: false },
});

const COPY = {
  done: {
    heading: "Anda telah berhenti melanggan.",
    body: "Kami tidak akan menghantar e-mel pemasaran lagi kepada anda. Jika ada pertanyaan yang masih berjalan, pasukan program tetap akan membalasnya. Anda boleh menyertai semula senarai e-mel pada bila-bila masa dengan meminta semula panduan program.",
  },
  invalid: {
    heading: "Pautan tidak dapat disahkan.",
    body: "Pautan berhenti melanggan ini tidak lengkap atau tidak sah, jadi keutamaan anda belum diubah. E-mel sahaja kami dan kami akan hentikan langganan anda secara manual.",
  },
  error: {
    heading: "Buat masa ini permintaan tidak dapat diproses.",
    body: "Buat masa ini kami tidak dapat mengemas kini keutamaan anda. E-mel sahaja kami dan kami akan hentikan langganan anda secara manual.",
  },
} as const;

export default async function UnsubscribedMsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const key = status === "done" || status === "invalid" || status === "error" ? status : "done";
  const copy = COPY[key];
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <div className="eyebrow"><span className="l" /><span className="mono sec-k">Keutamaan E-mel</span></div>
        <h1 className="sec-h" style={{ maxWidth: "16ch" }}>{copy.heading}</h1>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>{copy.body}</p>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.phone}
          </p>
          <p>
            <Link href="/ms" className="text-action">Kembali ke laman program <span aria-hidden="true">→</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}
