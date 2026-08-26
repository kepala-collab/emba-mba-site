export type BreadcrumbItem = { name: string; path: string };

/** @deprecated RouteBreadcrumbs now owns the visible trail and its matching JSON-LD. */
export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  void items;
  return null;
}
