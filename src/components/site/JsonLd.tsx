type JsonLdProps = {
  data: unknown;
};

/** Render inert structured data without allowing an HTML script terminator. */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
