import Reveal from "@/components/site/Reveal";
import { SITE, OPERATOR } from "@/lib/content";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo("/privacy", {
  title: "Privacy Policy",
  description:
    "How personal data submitted through this website is collected, used, shared and protected under Malaysia's Personal Data Protection Act 2010 [Act 709], as amended.",
  robots: { index: true, follow: true },
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap maxw-820">
        <Reveal>
          <div className="eyebrow"><span className="l" /><span className="mono sec-k">Legal</span></div>
          <h1 className="sec-h" style={{ maxWidth: "18ch" }}>Privacy Policy</h1>
          <p className="mono" style={{ color: "var(--muted)", marginTop: 8 }}>Last updated: 13 August 2026</p>
        </Reveal>

        <div className="prose mt-m" style={{ marginLeft: 0 }}>
          <p>
            This Privacy Policy explains how personal data you provide through this website (the &ldquo;Site&rdquo;),
            which promotes the Future Ready Executive MBA (CMI UK), is collected, used, disclosed and protected.
            We are committed to handling your personal data in accordance with Malaysia&rsquo;s{" "}
            <strong>Personal Data Protection Act 2010 [Act 709], as amended</strong>.
          </p>

          <h2>Who we are</h2>
          <p>
            This Site and its enquiry form are operated by <strong>{OPERATOR.name}</strong> (Registration No.{" "}
            {OPERATOR.reg}) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), the authorised {OPERATOR.role} for
            marketing, programme enquiries, pricing and enrolment coordination. We are responsible for personal data collected
            through this Site. The programme itself is delivered by <strong>{SITE.provider}</strong>
            {" "}(&ldquo;ABC&rdquo;, the programme provider); the personal data you submit is shared with ABC so its
            programme team can assess your fit and process your application and enrolment.
          </p>
          <p style={{ color: "var(--muted)", fontSize: ".95rem" }}>Registered address: {OPERATOR.address}</p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Details you provide:</strong> name, email address, phone/WhatsApp number, company, job title, participant type and any message you send us.</li>
            <li><strong>Technical and attribution data:</strong> pages visited, page language, query-free referring page, landing page, campaign parameters (UTMs), advertising click identifiers and, via our hosting provider, your IP address and device/browser information.</li>
            <li><strong>Session storage:</strong> we retain campaign attribution within the current browser-tab session so an enquiry can be attributed after you navigate between pages. This session data is submitted only if you consent and send the enquiry form.</li>
            <li><strong>Analytics and advertising:</strong> optional analytics may be activated only after you choose “Allow analytics”. The site does not load advertising pixels by default. You can keep essential-only operation by declining the optional category.</li>
          </ul>

          <h2>How we use your data</h2>
          <ul>
            <li>To respond to your enquiry and contact you about the programme;</li>
            <li>To assess your suitability and process your application and enrolment together with ABC;</li>
            <li>To provide guidance on HRD Corp claims and scholarship eligibility;</li>
            <li>To send you information and updates about the programme where you have consented;</li>
            <li>To operate, secure and improve the Site.</li>
          </ul>

          <h2>Programme assistant</h2>
          <p>
            The optional programme assistant sends your programme question and limited recent conversation context to
            our contracted AI inference provider so it can generate an answer from our verified programme facts. Do
            not enter your name, phone number, email address, identity or payment details. The Site rejects common
            contact and identity patterns before sending a question, does not use assistant conversations to create an
            application, and does not store assistant transcripts in our application database. Security and aggregate
            usage metadata may still be processed by our hosting, abuse-prevention and inference providers.
          </p>

          <h2>Who we share it with</h2>
          <p>Your personal data may be disclosed to:</p>
          <ul>
            <li><strong>{SITE.provider}</strong> — the programme provider, to process your enquiry, application and enrolment;</li>
            <li><strong>Service providers</strong> who help us run the Site and communicate with you (for example website hosting, database, analytics and messaging providers), who are only permitted to use the data to provide those services.</li>
          </ul>
          <p>We do not sell your personal data.</p>

          <h2>Data transfer &amp; storage</h2>
          <p>
            Some of our service providers may store or process data on servers located outside Malaysia. Where this
            happens, we take reasonable steps to ensure your data continues to be protected to a standard consistent
            with the PDPA.
          </p>

          <h2>Retention</h2>
          <p>
            We keep your personal data for as long as necessary to respond to your enquiry, process any application and
            for our legitimate business and legal purposes, after which it is securely deleted or anonymised.
          </p>

          <h2>Your rights under the PDPA</h2>
          <p>Subject to the PDPA, you may request to access or correct your personal data, withdraw your consent, or ask us to limit how we process it. To do so, contact us using the details below.</p>

          <h2>Security</h2>
          <p>We apply reasonable technical and organisational measures to protect your personal data against unauthorised access, loss or misuse.</p>

          <h2>Contact</h2>
          <p>
            To make a privacy request or ask how your data is handled, contact us at {OPERATOR.name},{" "}
            {OPERATOR.address}. Questions about the programme and your application are handled by the ABC programme
            team: {SITE.director}, <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.phone}.
          </p>

          <h2>Changes</h2>
          <p>We may update this policy from time to time. The &ldquo;last updated&rdquo; date above reflects the latest version.</p>
        </div>
      </div>
    </section>
  );
}
