import Reveal from "@/components/site/Reveal";
import LeadForm from "@/components/site/LeadForm";
import ProgrammeIntroduction from "@/components/site/ProgrammeIntroduction";
import ProgrammeMarks from "@/components/site/ProgrammeMarks";
import { SITE, FACTS, INCLUSIONS } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/apply", {
  title: "Arrange a Programme Conversation",
  description:
    "Request a call, online information meeting, in-person programme meeting at an agreed location, or programme details by email.",
});

const waText = encodeURIComponent(
  "Hello programme team, I'd like to explore the Future Ready Executive MBA. Please share the programme and next-intake details.",
);

const RECEIVE = [
  "Your choice of a call, online meeting, in-person meeting or details first",
  "Published 2026 intake dates and the Open status shown for each cohort",
  "The employer-led HRD Corp application process and required programme documents",
  "Malaysian participant fee — RM5,000.00 after the RM5,000.00 LIFE Innoversity scholarship",
];

export default function ApplyPage() {
  return (
    <section className="section apply-page-section">
      <div className="wrap">
        <Reveal className="apply-intro">
          <p className="eyebrow"><span className="l" />Programme enquiry</p>
          <h1 className="sec-h">Start with a conversation. Decide in your own time.</h1>
          <p className="sec-sub">
            Choose a short call, an online information meeting, an in-person meeting at an agreed
            location, or programme details by email first. There is no payment or admission commitment.
          </p>
        </Reveal>

        <div className="apply-grid">
          <div className="apply-support">
            <Reveal>
              <div className="apply-proof-list" aria-label="Programme facts">
                <ProgrammeMarks labelled />
                <span className="mono sec-k">
                  {FACTS.trainingDays} training days · {FACTS.liveSessions} sessions · English and Mandarin cohorts
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div className="apply-programme-introduction">
                <ProgrammeIntroduction image="conversation" />
              </div>
            </Reveal>

            <Reveal>
              <p className="mono sec-k apply-next-label">What happens next</p>
              <ul className="apply-next-list">
                {RECEIVE.map((item) => (
                  <li key={item}><span aria-hidden="true">→</span><span>{item}</span></li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="apply-direct-contact">
                <a
                  className="btn btn-wa"
                  href={`https://wa.me/${SITE.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="contact_click"
                  data-track-id="apply_page_whatsapp"
                  data-track-location="apply_page"
                  data-contact-method="whatsapp"
                  data-contact-language="en"
                >
                  Chat on WhatsApp →
                </a>
                <p className="fine">
                  Prefer to speak directly? {SITE.director} ·{" "}
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a> ·{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
            </Reveal>

            <Reveal>
              <p className="fine apply-inclusions">
                {INCLUSIONS[0].b} · {INCLUSIONS[4].b} · {INCLUSIONS[5].b}. The programme team
                provides the complete breakdown during your chosen conversation or in the details sent to you.
              </p>
            </Reveal>
          </div>

          <div className="apply-right">
            <Reveal>
              <div className="card apply-form-card">
                <p className="mono sec-k acc">Programme enquiry · No payment required</p>
                <h2>Choose what you need first.</h2>
                <p className="fine apply-fee-summary">
                  Standard fee {FACTS.priceStd}. Malaysian participants pay {FACTS.priceNet} after the
                  {` ${FACTS.scholarshipAmt} ${FACTS.scholarshipProvider}`} scholarship.
                </p>
                <LeadForm programme="Executive MBA" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="pill center mt-s apply-reassurance">
            <span className="mono sec-k">
              Programme enquiry · No payment required · Submitted to the programme team under the Privacy Policy.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
