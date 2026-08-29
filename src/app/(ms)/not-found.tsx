import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <div className="eyebrow"><span className="l" /><span className="mono sec-k">Halaman tidak dijumpai</span></div>
        <h1 className="sec-h" style={{ maxWidth: "18ch" }}>Halaman ini tiada di sini.</h1>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>Alamat mungkin telah berubah atau tersilap taip. Pautan di bawah membawa anda ke semua maklumat program yang diterbitkan.</p>
          <p>
            <Link href="/ms" className="text-action">Ke halaman utama <span aria-hidden="true">→</span></Link>
          </p>
          <p>
            <Link href="/ms/executive-mba" className="text-action">Lihat program <span aria-hidden="true">→</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}
