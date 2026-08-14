import Reveal from "@/components/site/Reveal";
import { SITE, OPERATOR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/terms", {
  title: "Terms & Conditions",
  description:
    "The terms governing use of this website, which promotes the Future Ready Executive MBA (CMI UK) delivered by Asian Business Consulting.",
  robots: { index: true, follow: true },
});

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <Reveal>
          <div className="eyebrow"><span className="l" /><span className="mono sec-k">Legal</span></div>
          <h1 className="sec-h" style={{ maxWidth: "18ch" }}>Terms &amp; Conditions</h1>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>Last updated: 13 August 2026</p>
        </Reveal>

        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>
            These Terms &amp; Conditions govern your use of this website (the &ldquo;Site&rdquo;). By using the Site or
            submitting an enquiry, you agree to these terms.
          </p>

          <h2>About this Site</h2>
          <p>
            The Site promotes the Future Ready Executive MBA and related programmes. It is operated by{" "}
            <strong>{OPERATOR.name}</strong> (Registration No. {OPERATOR.reg}), the authorised {OPERATOR.role} for
            programme enquiries, pricing and enrolment coordination. The programmes are provided and delivered by
            {" "}<strong>{SITE.provider}</strong> (&ldquo;ABC&rdquo;). Enquiries you submit are handled by {OPERATOR.name}
            {" "}in coordination with ABC&rsquo;s programme team. {OPERATOR.name} and ABC are separate, independent
            companies; nothing on this Site should be taken to mean otherwise.
          </p>

          <h2>Programme information</h2>
          <p>
            Programme details, fees, schedules, intake dates and availability are provided for general information,
            are supplied by ABC, and may change without notice. Confirmed details are provided by the ABC programme
            team. The Executive MBA is a <strong>professional programme recognised by the Chartered Management
            Institute (CMI), UK</strong>; it is <strong>not a regulated qualification and is not MQA-accredited</strong>,
            and is not an academic degree.
          </p>

          <h2>No guarantees</h2>
          <p>
            Nothing on this Site is a guarantee of admission, HRD Corp claim approval, scholarship award, employment,
            income, promotion or any specific business outcome. HRD Corp claimability applies to eligible Malaysian
            employers and is subject to HRD Corp&rsquo;s eligibility and approval.
          </p>

          <h2>Programme assistant</h2>
          <p>
            The optional programme assistant uses automated AI to answer questions from a bounded set of programme
            facts. Its answers may be incomplete or inaccurate and do not constitute admission, pricing, scholarship,
            HRD Corp or enrolment confirmation. Do not submit personal, identity, confidential or payment information
            through the assistant. The applicable written proposal and signed enrolment terms always prevail.
          </p>

          <h2>Session 1 refund arrangement</h2>
          <p>
            ABC currently offers a refund arrangement for an enrolled participant who attends the first two training
            days and concludes that the programme is not suitable. To request it, the participant must notify the ABC
            programme team promptly after Session 1, stop participating and return all issued manuals and programme
            materials in reusable condition. The request, the amount eligible for refund and the processing timetable
            are governed by the written enrolment terms issued by ABC. Employer-funded and HRD Corp claims may require
            additional cancellation steps. Ask the programme team to confirm the current written terms before payment;
            where these Site terms differ from the signed enrolment terms, the signed enrolment terms prevail.
          </p>

          <h2>Credential and Chartered Manager</h2>
          <p>
            The specimen programme certificate states that the programme has been recognised by CMI against the CMI
            Professional Standards and that it is not a regulated qualification. Chartered Manager is a separate CMI
            designation. Programme completion does not automatically confer Chartered Manager status; eligibility,
            experience, membership, assessment, application and fees are determined by CMI.
          </p>

          <h2>Enquiries &amp; enrolment</h2>
          <p>
            Submitting the enquiry form registers your interest and allows the programme team to contact you. It does
            not create a binding agreement. Enrolment, fees and any scholarship are subject to ABC&rsquo;s own terms and
            confirmation.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Content on this Site is owned by the Site operator and/or ABC and may not be copied or reused without
            permission. The <strong>CMI</strong> and <strong>HRD Corp</strong> names and logos are the property of their
            respective owners and are used to indicate recognition and claimability. Third-party company names and logos
            are the property of their respective owners.
          </p>

          <h2>Third-party links</h2>
          <p>The Site may link to third-party websites (for example WhatsApp). We are not responsible for the content or practices of those sites.</p>

          <h2>Limitation of liability</h2>
          <p>
            The Site is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted by law, the Site
            operator and ABC are not liable for any loss arising from reliance on information on the Site.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of Malaysia.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact {SITE.director},{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
