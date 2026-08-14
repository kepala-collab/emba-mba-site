import { breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";

export type BreadcrumbItem = { name: string; path: string };

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={breadcrumbSchema(items)} />;
}
