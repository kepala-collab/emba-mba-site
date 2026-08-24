import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <div className="eyebrow"><span className="l" /><span className="mono sec-k">Page not found</span></div>
        <h1 className="sec-h" style={{ maxWidth: "18ch" }}>That page is not here.</h1>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>The address may have changed or been typed differently. The pages below carry every published programme fact.</p>
          <p>
            <Link href="/home" className="text-action">Go to the homepage <span aria-hidden="true">→</span></Link>
          </p>
          <p>
            <Link href="/executive-mba" className="text-action">See the programme <span aria-hidden="true">→</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}
