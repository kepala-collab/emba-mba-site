import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function GET(_request: Request, context: { params: Promise<{ indexNowKey: string }> }) {
  return context.params.then(({ indexNowKey }) => {
    const key = process.env.INDEXNOW_KEY;
    if (!key || indexNowKey !== `${key}.txt`) notFound();
    return new Response(key, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
    });
  });
}
