import { permanentRedirect } from "next/navigation";

export const metadata = { robots: { index: false, follow: true } };

export default function CorporateTrainingRedirect() {
  permanentRedirect("/ms/hrd-corp-claimable");
}
