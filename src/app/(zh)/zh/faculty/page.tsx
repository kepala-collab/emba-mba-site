import ChineseCorePage from "@/components/site/ChineseCorePage";
import JsonLd from "@/components/site/JsonLd";
import { FACULTY, SITE } from "@/lib/content";
import { CORE_PAGES_ZH } from "@/lib/content-zh";
import { PROVIDER_ID, withSeo } from "@/lib/seo";

const path = "/zh/faculty";
const content = CORE_PAGES_ZH.faculty;

export const metadata = withSeo(path, {
  title: "课程导师与企业教练",
  description: "认识 Future Ready Executive MBA 的导师团队——他们看重您的思路，不只看结果，经验涵盖战略、运营、财务、人才、治理、变革与企业辅导。",
});

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: FACULTY.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        "@id": `${SITE.url}/faculty#${f.n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
        name: f.n,
        jobTitle: f.r,
        description: f.b,
        image: `${SITE.url}${f.img}`,
        affiliation: { "@id": PROVIDER_ID },
        knowsAbout: f.focus.split(" · "),
      },
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <ChineseCorePage path={path} {...content} />
    </>
  );
}
