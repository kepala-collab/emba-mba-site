import Image from "next/image";
import Link from "next/link";

type CommerceHeroMediaProps = {
  alt: string;
  guideHref: string;
  guideLabel: string;
  kicker: string;
  title: string;
};

export default function CommerceHeroMedia({
  alt,
  guideHref,
  guideLabel,
  kicker,
  title,
}: CommerceHeroMediaProps) {
  return (
    <figure className="commerce-hero-media">
      <Image
        src="/media/future-commerce/hero-leader.webp"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        quality={82}
        sizes="(max-width: 1080px) 100vw, 46vw"
      />
      <div className="commerce-hero-shade" />

      <div className="commerce-hero-stamp" aria-hidden="true">
        <Image src="/brand/rdr-emblem.webp" alt="" width={40} height={40} style={{ width: 40, height: 40 }} />
        <span>FUTURE READY<br />EXECUTIVE MBA</span>
      </div>

      <figcaption>
        <span className="mono">{kicker}</span>
        <strong>{title}</strong>
        <Link href={guideHref} aria-label={guideLabel}>
          <span aria-hidden="true">↗</span>
        </Link>
      </figcaption>
    </figure>
  );
}
