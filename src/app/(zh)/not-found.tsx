import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <div className="eyebrow"><span className="l" /><span className="mono sec-k">页面不存在</span></div>
        <h1 className="sec-h" style={{ maxWidth: "16ch" }}>找不到这个页面。</h1>
        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>网址已更改，或输入有误。以下页面涵盖全部已公布的课程信息。</p>
          <p>
            <Link href="/zh" className="text-action">返回首页 <span aria-hidden="true">→</span></Link>
          </p>
          <p>
            <Link href="/zh/executive-mba" className="text-action">查看课程 <span aria-hidden="true">→</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}
