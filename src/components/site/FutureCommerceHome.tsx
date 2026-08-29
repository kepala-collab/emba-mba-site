import Image from "next/image";
import Link from "next/link";
import CommerceHeroMedia from "@/components/site/CommerceHeroMedia";
import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { FACTS, INTAKES, PROGRAMME_PROOF } from "@/lib/content";

type HomeLocale = "en" | "ms" | "zh";

const COPY = {
  en: {
    lang: "en-MY",
    prefix: "",
    eyebrow: "Malaysia · Executive development",
    product: "Future Ready Executive MBA",
    title: "Your next leadership chapter starts here.",
    lede: "A six-month professional development programme for ambitious Malaysian managers, business owners and senior leaders ready to sharpen judgement, widen perspective and lead what comes next.",
    guide: "Get the free 2026 guide",
    explore: "Explore the programme",
    mediaKicker: "Six months · built around work",
    mediaTitle: "Programme and cohort clarity.",
    mediaAlt: "Malaysian executive leader overlooking Kuala Lumpur",
    pauseVideo: "Pause video",
    playVideo: "Play video",
    intakesKicker: "2026 intakes",
    intakesTitle: "Choose the working rhythm that fits.",
    intakeOpen: "Open for enquiries",
    factRecognition: "awarded and endorsed",
    factCommunity: "16 English · Mandarin cohort",
    factDuration: "professional development programme",
    factDays: "training days across three facilitated sessions",
    factModules: "applied management modules",
    factProject: "built around a live business challenge",
    experienceKicker: "The programme experience",
    experienceTitle: "A working room built around real decisions.",
    experienceIntro: "Structured workshops, applied project work and a peer community turn leadership development into something you can use back at work.",
    experienceLabels: ["Strategy workshop", "Applied project work", "Executive community"],
    recognitionKicker: "Proof and recognition",
    recognitionTitle: "Credibility you can see. A community you can meet.",
    recognitionIntro: "Executive MBA on Future Ready Business Leadership, awarded and endorsed by CMI.",
    graduates: "graduates",
    cohorts: "cohorts",
    englishCohorts: "English cohorts",
    mandarin: "Mandarin cohort",
    audienceKicker: "The right room matters",
    audienceTitle: "For people whose decisions affect more than their own desk.",
    audienceBody: "Designed for business owners, directors, general managers and senior managers responsible for results, teams, cross-functional decisions or growth plans.",
    audiencePoints: ["Bring a current business issue.", "Learn through a rigorous structure that fits around work.", "Leave with a practical plan you can explain, test and act on."],
    decisionKicker: "Free 2026 programme guide",
    decisionTitle: "Get the complete picture before you commit.",
    decisionBody: "Review the six-month structure, published dates, programme fee, scholarship criteria and CMI recognition in one focused PDF.",
    decisionAside: "A conversation is optional. The guide is designed to help you decide whether the programme deserves one.",
  },
  ms: {
    lang: "ms-MY",
    prefix: "/ms",
    eyebrow: "Malaysia · Pembangunan Eksekutif",
    product: "Future Ready Executive MBA",
    title: "Langkah pertama menjadi pemimpin pengurusan dan perniagaan bermula di sini.",
    lede: "Program pembangunan profesional selama enam bulan untuk pemilik perniagaan, pengurus dan pengurus kanan di Malaysia yang mahu memperkukuh pertimbangan, meluaskan perspektif dan melangkah ke hadapan sebagai pemimpin.",
    guide: "Muat turun panduan 2026 percuma",
    explore: "Ketahui lebih lanjut",
    mediaKicker: "6 bulan · Fleksibel dengan waktu kerja",
    mediaTitle: "Kejelasan program dan kohort.",
    mediaAlt: "Pemimpin eksekutif Malaysia menghadap pemandangan Kuala Lumpur",
    pauseVideo: "Jeda video",
    playVideo: "Mainkan video",
    intakesKicker: "Sesi Pengambilan 2026",
    intakesTitle: "Pilih sesi yang bersesuaian dengan anda.",
    intakeOpen: "Pertanyaan dibuka",
    factRecognition: "dianugerahkan dan disokong",
    factCommunity: "16 Bahasa Inggeris · 1 kohort Mandarin",
    factDuration: "program pembangunan profesional",
    factDays: "hari latihan merangkumi tiga sesi berpandu",
    factModules: "modul pengurusan gunaan",
    factProject: "projek berteraskan cabaran perniagaan sebenar",
    experienceKicker: "Pengalaman program",
    experienceTitle: "Ruang pembelajaran yang berasaskan keputusan sebenar.",
    experienceIntro: "Bengkel berstruktur, projek yang diterapkan pada kerja sebenar dan komuniti rakan eksekutif menjadikan pembangunan kepimpinan sesuatu yang benar-benar boleh digunakan semula di tempat kerja.",
    experienceLabels: ["Bengkel strategi", "Projek terpakai", "Komuniti eksekutif"],
    recognitionKicker: "Bukti dan pengiktirafan",
    recognitionTitle: "Kredibiliti yang nyata. Komuniti yang benar-benar wujud.",
    recognitionIntro: "Executive MBA dalam Future Ready Business Leadership, dianugerahkan dan disokong oleh CMI.",
    graduates: "graduan",
    cohorts: "kohort",
    englishCohorts: "kohort Bahasa Inggeris",
    mandarin: "kohort Mandarin",
    audienceKicker: "Gandingan yang tepat penentu kejayaan",
    audienceTitle: "Untuk mereka yang keputusannya menentukan hala tuju, bukan sekadar tugas sendiri.",
    audienceBody: "Direka khas untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan yang bertanggungjawab ke atas hasil, pasukan kerja, keputusan rentas fungsi atau rancangan pertumbuhan.",
    audiencePoints: ["Bawa isu perniagaan semasa anda.", "Belajar melalui struktur yang ketat namun sesuai dengan tugas harian.", "Bawa pulang pelan praktikal yang boleh anda jelaskan, uji dan laksanakan."],
    decisionKicker: "Panduan program 2026 percuma",
    decisionTitle: "Dapatkan gambaran lengkap sebelum membuat komitmen.",
    decisionBody: "Semak struktur enam bulan, tarikh yang diterbitkan, yuran program, penilaian biasiswa dan pengiktirafan CMI dalam satu PDF yang jelas.",
    decisionAside: "Perbualan tidak diwajibkan. Panduan ini membantu anda menilai sama ada program ini wajar dibincangkan.",
  },
  zh: {
    lang: "zh-Hans",
    prefix: "/zh",
    eyebrow: "马来西亚 · 高管发展",
    product: "Future Ready 高管 MBA",
    title: "您的下一阶段领导力，从这里开始。",
    lede: "为马来西亚管理者、企业主及高级领导者设计的六个月专业发展课程，帮助您提升判断力、拓宽视野，并带领企业迈向下一步。",
    guide: "获取免费 2026 课程指南",
    explore: "了解课程",
    mediaKicker: "六个月 · 配合工作安排",
    mediaTitle: "清楚了解课程与开课安排。",
    mediaAlt: "一位马来西亚企业领导者俯瞰吉隆坡",
    pauseVideo: "暂停视频",
    playVideo: "播放视频",
    intakesKicker: "2026 开课",
    intakesTitle: "选择适合工作节奏的班次。",
    intakeOpen: "开放咨询",
    factRecognition: "由 CMI 颁授并背书",
    factCommunity: "16 个英语班 · 华语班",
    factDuration: "专业发展课程",
    factDays: "个培训日，分三个导师引导阶段完成",
    factModules: "个应用管理模块",
    factProject: "围绕一项真实企业课题",
    experienceKicker: "课程体验",
    experienceTitle: "围绕真实企业决定而设的学习空间。",
    experienceIntro: "结构化工作坊、应用项目与高管同侪交流，让领导力发展能够直接运用在实际工作中。",
    experienceLabels: ["策略工作坊", "应用项目实践", "高管学习社群"],
    recognitionKicker: "成果与认可",
    recognitionTitle: "看得见的可信度，见得到的学习社群。",
    recognitionIntro: "面向未来商业领导力的 Executive MBA，由 CMI 颁授并背书。",
    graduates: "名毕业生",
    cohorts: "个班次",
    englishCohorts: "个英语班",
    mandarin: "华语班",
    audienceKicker: "共同学习的人同样重要",
    audienceTitle: "为那些决策影响整个团队与企业的人而设。",
    audienceBody: "适合对业绩、团队、跨部门决定或增长计划负责的企业主、董事、总经理及高级管理者。",
    audiencePoints: ["带来一项当前企业课题。", "通过严谨并能配合工作的结构学习。", "形成一套能够说明、检验及执行的实用方案。"],
    decisionKicker: "免费 2026 课程指南",
    decisionTitle: "先了解完整资料，再决定是否参与。",
    decisionBody: "一份 PDF 清楚列出六个月课程结构、已公布日期、课程费用、奖学金择优评估条件及 CMI 认可。",
    decisionAside: "是否进一步沟通由您决定。指南的作用，是帮助您判断这项课程是否值得一次对话。",
  },
} as const;

export default function FutureCommerceHome({ locale }: { locale: HomeLocale }) {
  const copy = COPY[locale];
  const formLang = locale;
  const programmeHref = `${copy.prefix}/executive-mba`;
  const durationValue = locale === "zh" ? "6 个月" : locale === "ms" ? "6 bulan" : FACTS.durationShort;
  const currentIsoDate = new Date().toISOString().slice(0, 10);
  const futureIntakes = [...INTAKES]
    .filter((intake) => intake.startDate >= currentIsoDate)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const featuredIntakes = (futureIntakes.length ? futureIntakes : [...INTAKES].reverse()).slice(0, 3);
  const languageName = (language: string) => {
    if (language === "Mandarin") return locale === "zh" ? "华语" : "Mandarin";
    return locale === "zh" ? "英语" : locale === "ms" ? "Bahasa Inggeris" : "English";
  };

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
              <div className="commerce-actions">
                <Link href="#programme-guide" className="btn btn-primary">{copy.guide} <span aria-hidden="true">↗</span></Link>
                <Link href={programmeHref} className="commerce-text-link">{copy.explore} <span aria-hidden="true">→</span></Link>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="commerce-hero-facts" aria-label={locale === "zh" ? "课程概览" : locale === "ms" ? "Ringkasan program" : "Programme at a glance"}>
                <div><strong>{durationValue}</strong><span>{copy.factDuration}</span></div>
                <div><strong className="commerce-cmi-wordmark"><Image src="/brand/cmi-logo-official-white.webp" alt="CMI" width={78} height={31} /></strong><span>{copy.factRecognition}</span></div>
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
              pauseLabel={copy.pauseVideo}
              playLabel={copy.playVideo}
              title={copy.mediaTitle}
            />
          </Reveal>
        </div>

        <div className="wrap commerce-intake-rail" aria-label={copy.intakesKicker}>
          <div className="commerce-intake-heading"><span className="mono">{copy.intakesKicker}</span><strong>{copy.intakesTitle}</strong></div>
          {featuredIntakes.map((intake) => (
            <Link key={`${intake.language}-${intake.co}`} href={`${copy.prefix}/intakes`} className="commerce-intake-card">
              <span className="mono">{languageName(intake.language)} · {intake.co}</span>
              <strong>{intake.s1}</strong>
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
            <article className="commerce-credential"><div><span className="mono">CMI recognition</span><h3>{locale === "zh" ? "颁授并背书" : locale === "ms" ? "Dianugerahkan dan disokong" : "Awarded and endorsed"}</h3><p>{copy.recognitionIntro}</p></div><Image src="/brand/cmi-logo-official.svg" alt="Chartered Management Institute" width={144} height={98} /></article>
            <div className="commerce-proof-stats"><div><strong>{PROGRAMME_PROOF.graduates}</strong><span>{copy.graduates}</span></div><div><strong>{PROGRAMME_PROOF.cohorts}</strong><span>{copy.cohorts}</span></div><div><strong>{PROGRAMME_PROOF.englishCohorts}</strong><span>{copy.englishCohorts}</span></div><div><strong>1</strong><span>{copy.mandarin}</span></div></div>
          </div>
          <div className="commerce-recognition-support">
            <figure className="commerce-recognition-photo"><Image src="/brand/community/graduation-cohort.webp" alt="Future Ready Executive MBA graduation cohort" width={894} height={596} quality={88} sizes="(max-width: 820px) calc(100vw - 50px), (max-width: 1080px) 88vw, 625px" /><figcaption>{PROGRAMME_PROOF.graduationAttendance} {locale === "zh" ? "名毕业生出席首届毕业典礼。" : locale === "ms" ? "graduan menghadiri majlis graduasi pertama." : "graduates attended the inaugural graduation."}</figcaption></figure>
            <div className="commerce-recognition-organizations" aria-label={locale === "zh" ? "课程机构与认可" : locale === "ms" ? "Organisasi dan pengiktirafan program" : "Programme organizations and recognition"}>
              <div><Image src="/brand/abc-mark.webp" alt="Asian Business Consulting" width={360} height={100} /><p><strong>{locale === "zh" ? "课程设计与授课" : locale === "ms" ? "Reka bentuk dan penyampaian" : "Programme design and delivery"}</strong>Asian Business Consulting</p></div>
              <div><Image src="/brand/hrdcorp-claimable-official.webp" alt="HRD Corp Claimable" width={180} height={180} /><p><strong>{locale === "zh" ? "雇主资助路线" : locale === "ms" ? "Laluan pembiayaan majikan" : "Employer-funding route"}</strong>{locale === "zh" ? "以雇主申请及 HRD Corp 审批为准" : locale === "ms" ? "Tertakluk pada permohonan majikan dan kelulusan HRD Corp" : "Subject to employer application and HRD Corp approval"}</p></div>
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
