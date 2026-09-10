import Image from "next/image";
import Link from "next/link";
import CommerceHeroMedia from "@/components/site/CommerceHeroMedia";
import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import {
  ABC_PROFILE,
  CERTIFICATE_POSITIONING,
  CTA_LABELS,
  ENQUIRY_COMMITMENT,
  FACTS,
  INTAKES,
  PROGRAMME_AUDIENCE,
  PROGRAMME_POSITIONING_MS,
  PROGRAMME_POSITIONING_ZH,
  PROGRAMME_PROOF,
  PROGRAMME_YEAR,
} from "@/lib/content";
import {
  CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS,
  ENQUIRY_COMMITMENT_MS,
  PROGRAMME_AUDIENCE_MS,
} from "@/lib/content-ms";
import {
  CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH,
  ENQUIRY_COMMITMENT_ZH,
  PROGRAMME_AUDIENCE_ZH,
} from "@/lib/content-zh";
import { formatIntakeDateRange, malaysiaDateKey } from "@/lib/intakes";

type HomeLocale = "en" | "ms" | "zh";

const COPY = {
  en: {
    lang: "en-MY",
    prefix: "",
    eyebrow: `For people whose decisions affect more than their own desk · Malaysia · ${PROGRAMME_YEAR} intakes`,
    product: "Future Ready Executive MBA",
    title: "From carrying the decision alone to leading it.",
    lede: `Bring one live business issue and, across ${FACTS.durationLong}, work it into a written action plan your team can act on, with faculty and coaches reviewing your reasoning. The method stays with you. ${ABC_PROFILE.programmePositioning}`,
    heroSupport: CERTIFICATE_POSITIONING.professionalRelevance,
    guide: CTA_LABELS.guide,
    explore: `See what changes across the ${FACTS.durationLong}`,
    mediaKicker: `${FACTS.durationLong} · built around your role`,
    mediaTitle: "One issue. One plan you can lead.",
    mediaAlt: "Future Ready Executive MBA participant in the programme’s ceremonial gown and cap, in a modern office atrium",
    pauseVideo: "Pause video",
    playVideo: "Play video",
    intakesKicker: `${PROGRAMME_YEAR} intakes`,
    intakesTitle: "Choose when your six months start.",
    intakeOpen: "Open for enquiries",
    factRecognition: "awarded and endorsed",
    factCommunity: `${PROGRAMME_PROOF.englishCohorts} English · ${PROGRAMME_PROOF.mandarinCohorts} Mandarin cohort`,
    factDuration: "professional development programme",
    factDays: `training days across ${FACTS.liveSessions} scheduled sessions`,
    factModules: "applied management modules",
    factProject: "on one live business issue within your own responsibility",
    experienceKicker: "The programme experience",
    experienceTitle: "A working room built around real decisions.",
    experienceIntro: "A training day from your seat, coaching between sessions, and peers carrying decisions of similar weight — the method is practised on your own decisions across the six months.",
    experienceLabels: ["Strategy workshop", "Applied project work", "Executive community"],
    recognitionKicker: "Proof and recognition",
    recognitionTitle: "Evidence attributed to ABC, and a credential with its boundary.",
    recognitionIntro: `${CERTIFICATE_POSITIONING.distinction} ${CERTIFICATE_POSITIONING.professionalRelevance}`,
    graduates: "graduates",
    cohorts: "cohorts",
    englishCohorts: "English cohorts",
    mandarin: "Mandarin cohort",
    audienceKicker: "Who it's for",
    audienceTitle: "For people whose decisions affect more than their own desk.",
    audienceBody: PROGRAMME_AUDIENCE,
    audiencePoints: [
      "Markets and technology move quickly; a leader can still test the decision before committing to it.",
      "AI is now part of the role; a leader can still start with the business problem, not the model.",
      "Competitors adapt; a leader can still decide what to change first.",
    ],
    decisionKicker: `The ${PROGRAMME_YEAR} programme guide`,
    decisionTitle: "Get the facts for the decision in front of you.",
    decisionBody: `Review the ${FACTS.durationMonths}-month structure, the published ${PROGRAMME_YEAR} dates, the fee, the scholarship assessment and the CMI recognition in one PDF.`,
    decisionAside: ENQUIRY_COMMITMENT,
  },
  ms: {
    lang: "ms-MY",
    prefix: "/ms",
    eyebrow: "Untuk mereka yang keputusannya memberi kesan kepada orang lain · Malaysia · Pengambilan 2026",
    product: "Future Ready Executive MBA",
    title: "Daripada memikul keputusan sendirian kepada memimpin pelaksanaannya.",
    lede: `Bawa satu isu perniagaan sebenar dan, sepanjang ${FACTS.durationLong}, ubahnya menjadi pelan tindakan bertulis yang boleh dilaksanakan oleh pasukan anda. Fasilitator dan jurulatih menyemak cara anda berfikir, dan kaedah itu kekal bersama anda. ${PROGRAMME_POSITIONING_MS} Ini ialah program pembangunan profesional bukan akademik selama ${FACTS.durationMonths} bulan, bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.`,
    heroSupport: CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS,
    guide: CTA_LABELS.ms.guide,
    explore: `Lihat apa yang berubah sepanjang ${FACTS.durationLong}`,
    mediaKicker: `${FACTS.durationMonths} bulan · disusun di sekeliling peranan anda`,
    mediaTitle: "Satu isu. Satu pelan yang boleh dilaksanakan oleh pasukan anda.",
    mediaAlt: "Peserta Future Ready Executive MBA dalam jubah dan topi istiadat program, di atrium pejabat moden",
    pauseVideo: "Jeda video",
    playVideo: "Mainkan video",
    intakesKicker: "Pengambilan 2026",
    intakesTitle: "Pilih tarikh permulaan 6 bulan anda.",
    intakeOpen: "Terbuka untuk pertanyaan",
    factRecognition: "dianugerahkan dan disokong",
    factCommunity: `${PROGRAMME_PROOF.englishCohorts} kohort bahasa Inggeris · ${PROGRAMME_PROOF.mandarinCohorts} kohort Mandarin`,
    factDuration: "program pembangunan profesional",
    factDays: `hari latihan merentasi ${FACTS.liveSessions} sesi berjadual`,
    factModules: "modul pengurusan gunaan",
    factProject: "berteraskan satu isu perniagaan sebenar di bawah tanggungjawab anda",
    experienceKicker: "Pengalaman program",
    experienceTitle: "Ruang kerja dibina di sekeliling keputusan sebenar.",
    experienceIntro: "Satu hari latihan dari tempat duduk anda, bimbingan antara sesi, dan rakan sekelas yang turut memikul keputusan seberat itu — kaedah itu dipraktikkan atas keputusan anda sendiri sepanjang 6 bulan.",
    experienceLabels: ["Bengkel strategi", "Projek amali", "Komuniti eksekutif"],
    recognitionKicker: "Bukti dan pengiktirafan",
    recognitionTitle: "Bukti daripada ABC, dan sijil yang sempadannya dinyatakan.",
    recognitionIntro: `${PROGRAMME_POSITIONING_MS} ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}`,
    graduates: "graduan",
    cohorts: "kohort",
    englishCohorts: "kohort bahasa Inggeris",
    mandarin: "kohort Mandarin",
    audienceKicker: "Untuk siapa program ini",
    audienceTitle: "Untuk mereka yang keputusannya memberi kesan kepada orang lain.",
    audienceBody: PROGRAMME_AUDIENCE_MS,
    audiencePoints: [
      "Pasaran dan teknologi berubah dengan pantas; pemimpin tetap boleh menguji keputusan sebelum bertindak.",
      "AI kini sebahagian daripada peranan anda; pemimpin tetap boleh mulakan dengan masalah perniagaan, bukan model AI.",
      "Pesaing turut menyesuaikan diri; pemimpin tetap boleh memutuskan apa yang perlu diubah dahulu.",
    ],
    decisionKicker: "Panduan program 2026",
    decisionTitle: "Dapatkan fakta untuk keputusan yang anda hadapi sekarang.",
    decisionBody: `Semak struktur ${FACTS.durationMonths} bulan, tarikh 2026 yang diterbitkan, yuran, penilaian biasiswa dan pengiktirafan CMI dalam satu PDF.`,
    decisionAside: ENQUIRY_COMMITMENT_MS,
  },
  zh: {
    lang: "zh-Hans",
    prefix: "/zh",
    eyebrow: `专为决定影响不止一人的管理者而设 · 马来西亚 · ${PROGRAMME_YEAR} 年开课日期`,
    product: "Future Ready Executive MBA",
    title: "从独自决策，到带队落实",
    lede: `带一个手上的企业课题来，${FACTS.durationMonths} 个月内写成团队可落实的行动方案；导师与教练检视思路，方法留给您。${PROGRAMME_POSITIONING_ZH}`,
    heroSupport: CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH,
    guide: CTA_LABELS.zh.guide,
    explore: `查看这 ${FACTS.durationMonths} 个月会改变什么`,
    mediaKicker: `${FACTS.durationMonths} 个月 · 围绕您的角色安排`,
    mediaTitle: "一个课题，一份团队能落实的方案。",
    mediaAlt: "身穿课程礼服、头戴礼帽的 Future Ready Executive MBA 学员，站在现代办公大楼中庭",
    pauseVideo: "暂停视频",
    playVideo: "播放视频",
    intakesKicker: `${PROGRAMME_YEAR} 年开课日期`,
    intakesTitle: "选定您 6 个月的开始日期。",
    intakeOpen: "开放咨询",
    factRecognition: "由 CMI 颁发并认可",
    factCommunity: `${PROGRAMME_PROOF.englishCohorts} 个英语班 · ${PROGRAMME_PROOF.mandarinCohorts} 个华语班`,
    factDuration: "专业发展课程",
    factDays: `个培训日，分 ${FACTS.liveSessions} 次指定研习课完成`,
    factModules: "个应用管理模块",
    factProject: "以您分内的一项真实企业课题为核心",
    experienceKicker: "课程体验",
    experienceTitle: "围绕真实决策打造的学习场域。",
    experienceIntro: "培训日从您的座位展开，课次之间有辅导同行，还有肩负相近课题的同侪——方法用在您自己的决策上，贯穿这 6 个月。",
    experienceLabels: ["策略工作坊", "企业应用项目", "高管学习社群"],
    recognitionKicker: "成果与认可",
    recognitionTitle: "ABC 提供的实证，以及附带清晰边界的证书。",
    recognitionIntro: `${PROGRAMME_POSITIONING_ZH} ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}`,
    graduates: "名毕业生",
    cohorts: "届",
    englishCohorts: "个英语班",
    mandarin: "华语班",
    audienceKicker: "适合对象",
    audienceTitle: "专为决定影响不止一人的管理者而设。",
    audienceBody: PROGRAMME_AUDIENCE_ZH,
    audiencePoints: [
      "市场瞬息万变；领导者仍可在投入之前先验证决策。",
      "AI 已成为职务的一部分；领导者仍可先看业务问题，再选工具。",
      "对手也在调整；领导者仍可决定先改变什么。",
    ],
    decisionKicker: `${PROGRAMME_YEAR} 年课程指南`,
    decisionTitle: "先看清眼前这项决定的事实。",
    decisionBody: `一份 PDF，涵盖 ${FACTS.durationMonths} 个月课程结构、已公布的 ${PROGRAMME_YEAR} 年开课日期、费用、奖学金评估与 CMI 认可。`,
    decisionAside: ENQUIRY_COMMITMENT_ZH,
  },
} as const;

export default function FutureCommerceHome({ locale }: { locale: HomeLocale }) {
  const copy = COPY[locale];
  const formLang = locale;
  const programmeHref = `${copy.prefix}/executive-mba`;
  const durationValue = locale === "zh" ? `${FACTS.durationMonths} 个月` : locale === "ms" ? `${FACTS.durationMonths} bulan` : FACTS.durationShort;
  const currentIsoDate = malaysiaDateKey();
  const futureIntakes = [...INTAKES]
    .filter((intake) => intake.startDate >= currentIsoDate)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const featuredIntakes = (futureIntakes.length ? futureIntakes : [...INTAKES].reverse()).slice(0, 3);
  const languageName = (language: string) => {
    if (language === "Mandarin") return locale === "zh" ? "华语" : "Mandarin";
    return locale === "zh" ? "英语" : locale === "ms" ? "bahasa Inggeris" : "English";
  };
  const cohortLabel = (co: string) => (locale === "ms" ? co.replace("Cohort", "Kohort") : co);

  return (
    <div className="commerce-home" lang={copy.lang}>
      <section className="commerce-hero" aria-labelledby="commerce-hero-title">
        <div className="commerce-grid" aria-hidden="true" />
        <div className="wrap commerce-hero-layout">
          <div className="commerce-hero-copy">
            <Reveal>
              <p className="commerce-status"><span />{copy.eyebrow}</p>
              <p className="mono commerce-product">{copy.product}</p>
              <h1 id="commerce-hero-title">{copy.title}</h1>
              <p className="commerce-hero-lede">{copy.lede}</p>
              <p className="commerce-hero-support">{copy.heroSupport}</p>
              <div className="commerce-actions">
                <Link href="#programme-guide" className="btn btn-primary">{copy.guide} <span aria-hidden="true">↗</span></Link>
                <Link href={programmeHref} className="commerce-text-link">{copy.explore} <span aria-hidden="true">→</span></Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="commerce-hero-facts" aria-label={locale === "zh" ? "课程概览" : locale === "ms" ? "Ringkasan program" : "Programme at a glance"}>
                <div><strong>{durationValue}</strong><span>{copy.factDuration}</span></div>
                <div><strong className="commerce-cmi-wordmark"><Image src="/brand/cmi-logo-official-white.webp" alt="Chartered Management Institute" width={78} height={31} /></strong><span>{copy.factRecognition}</span></div>
                <div><strong>{PROGRAMME_PROOF.cohorts} {copy.cohorts}</strong><span>{copy.factCommunity}</span></div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <CommerceHeroMedia
              alt={copy.mediaAlt}
              guideHref="#programme-guide"
              guideLabel={copy.guide}
              kicker={copy.mediaKicker}
              title={copy.mediaTitle}
            />
          </Reveal>
        </div>

        <div className="wrap commerce-intake-rail" aria-label={copy.intakesKicker}>
          <div className="commerce-intake-heading"><span className="mono">{copy.intakesKicker}</span><strong>{copy.intakesTitle}</strong></div>
          {featuredIntakes.map((intake) => (
            <Link key={`${intake.language}-${intake.co}`} href={`${copy.prefix}/intakes`} className="commerce-intake-card">
              <span className="mono">{languageName(intake.language)} · {cohortLabel(intake.co)}</span>
              <strong>{formatIntakeDateRange(intake.s1, locale)}</strong>
              <small>{copy.intakeOpen} <span aria-hidden="true">↗</span></small>
            </Link>
          ))}
        </div>
        <svg className="commerce-hero-arc" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 139 C330 136 498 119 666 83 C841 45 1066 29 1440 6" />
          <path d="M0 139 C332 139 523 130 702 101 C904 68 1148 53 1440 37" />
        </svg>
      </section>

      <section className="commerce-section commerce-snapshot" aria-labelledby="commerce-snapshot-title">
        <div className="wrap">
          <Reveal><header className="commerce-section-head"><div><p className="mono">{copy.audienceKicker}</p><h2 id="commerce-snapshot-title">{copy.audienceTitle}</h2></div><p>{copy.audienceBody}</p></header></Reveal>
          <div className="commerce-snapshot-panel">
            <div className="commerce-snapshot-facts" aria-label={locale === "zh" ? "课程数字" : locale === "ms" ? "Fakta program" : "Programme facts"}>
              <div><strong>{durationValue}</strong><span>{copy.factDuration}</span></div>
              <div><strong>{FACTS.trainingDays}</strong><span>{copy.factDays}</span></div>
              <div><strong>{FACTS.moduleCount}</strong><span>{copy.factModules}</span></div>
              <div><strong>1</strong><span>{copy.factProject}</span></div>
            </div>
            <Reveal delay={70}>
              <div className="commerce-snapshot-action">
                <ul>{copy.audiencePoints.map((point) => <li key={point}>{point}</li>)}</ul>
                <Link href={programmeHref} className="commerce-text-link">{copy.explore} <span aria-hidden="true">→</span></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="commerce-section commerce-experience" aria-labelledby="commerce-experience-title">
        <div className="wrap">
          <Reveal><header className="commerce-section-head"><div><p className="mono">{copy.experienceKicker}</p><h2 id="commerce-experience-title">{copy.experienceTitle}</h2></div><p>{copy.experienceIntro}</p></header></Reveal>
          <div className="commerce-experience-grid">
            <Reveal><figure className="commerce-experience-main"><Image src="/media/future-commerce/workshop-system.webp" alt={copy.experienceLabels[0]} width={1920} height={1440} quality={88} sizes="(max-width: 820px) calc(100vw - 50px), (max-width: 1440px) 58vw, 760px" /><figcaption><span className="mono">01</span><strong>{copy.experienceLabels[0]}</strong></figcaption></figure></Reveal>
            <Reveal delay={55}><figure><Image src="/media/future-commerce/founder-atelier.webp" alt={copy.experienceLabels[1]} width={1920} height={1080} quality={88} sizes="(max-width: 820px) calc(50vw - 28px), (max-width: 1440px) 30vw, 400px" /><figcaption><span className="mono">02</span><strong>{copy.experienceLabels[1]}</strong></figcaption></figure></Reveal>
            <Reveal delay={90}><figure><Image src="/media/future-commerce/community-commencement.webp" alt={copy.experienceLabels[2]} width={1920} height={1440} quality={88} sizes="(max-width: 820px) calc(50vw - 28px), (max-width: 1440px) 30vw, 400px" /><figcaption><span className="mono">03</span><strong>{copy.experienceLabels[2]}</strong></figcaption></figure></Reveal>
          </div>
        </div>
      </section>

      <section id="recognition" className="commerce-section commerce-recognition">
        <div className="wrap">
          <Reveal><header className="commerce-section-head"><div><p className="mono">{copy.recognitionKicker}</p><h2>{copy.recognitionTitle}</h2></div><p>{copy.recognitionIntro}</p></header></Reveal>
          <div className="commerce-recognition-wall">
            <article className="commerce-credential"><div><span className="mono">CMI recognition</span><h3>{locale === "zh" ? "颁发并认可" : locale === "ms" ? "Dianugerahkan dan disokong" : "Awarded and endorsed"}</h3><p>{copy.recognitionIntro}</p></div><Image src="/brand/cmi-logo-official.svg" alt="Chartered Management Institute" width={144} height={98} /></article>
            <div className="commerce-proof-stats"><div><strong>{PROGRAMME_PROOF.graduates}</strong><span>{copy.graduates}</span></div><div><strong>{PROGRAMME_PROOF.cohorts}</strong><span>{copy.cohorts}</span></div><div><strong>{PROGRAMME_PROOF.englishCohorts}</strong><span>{copy.englishCohorts}</span></div><div><strong>{PROGRAMME_PROOF.mandarinCohorts}</strong><span>{copy.mandarin}</span></div></div>
          </div>
          <div className="commerce-recognition-support">
            <figure className="commerce-recognition-photo"><Image src="/brand/community/graduation-cohort.webp" alt="Future Ready Executive MBA graduation cohort" width={894} height={596} quality={88} sizes="(max-width: 820px) calc(100vw - 50px), (max-width: 1080px) 88vw, 625px" /><figcaption>{PROGRAMME_PROOF.graduationAttendance} {locale === "zh" ? "名毕业生出席首届毕业典礼。" : locale === "ms" ? "graduan menghadiri majlis graduasi pertama." : "graduates attended the inaugural graduation."}</figcaption></figure>
            <div className="commerce-recognition-organizations" aria-label={locale === "zh" ? "课程机构与认可" : locale === "ms" ? "Organisasi dan pengiktirafan program" : "Programme organizations and recognition"}>
              <div><Image src="/brand/abc-mark.webp" alt="Asian Business Consulting" width={360} height={100} /><p><strong>{locale === "zh" ? "课程设计与授课" : locale === "ms" ? "Reka bentuk dan penyampaian" : "Programme design and delivery"}</strong>Asian Business Consulting</p></div>
              <div><Image src="/brand/hrdcorp-claimable-official.webp" alt="HRD Corp Claimable" width={180} height={180} /><p><strong>{locale === "zh" ? "雇主资助路线" : locale === "ms" ? "Laluan pembiayaan majikan" : "Employer-funding route"}</strong>{locale === "zh" ? "以雇主申请及 HRD Corp 审批为准" : locale === "ms" ? "Tertakluk kepada permohonan majikan dan kelulusan HRD Corp" : "Subject to employer application and HRD Corp approval"}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="programme-guide" className="commerce-section commerce-decision">
        <div className="commerce-grid" aria-hidden="true" />
        <div className="wrap commerce-decision-layout">
          <Reveal><div className="commerce-decision-copy"><p className="mono">{copy.decisionKicker}</p><h2>{copy.decisionTitle}</h2><p>{copy.decisionBody}</p><div className="commerce-decision-note">{copy.decisionAside}</div></div></Reveal>
          <Reveal delay={80}><div className="commerce-guide-card"><LeadForm programme="Executive MBA" source={`${locale}-future-commerce-home`} lang={formLang} placement="home-decision" variant="campaign" defaultIntent="details_first" /></div></Reveal>
        </div>
      </section>

    </div>
  );
}
