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
    factCommunity: "16 English · first Mandarin cohort",
    factDuration: "professional development programme",
    factDays: "across three facilitated sessions",
    factModules: "applied management modules",
    factProject: "built around a live business challenge",
    pathwaysKicker: "Explore the programme",
    pathwaysTitle: "Go straight to the answer you need.",
    pathwaysIntro: "Each route answers one decision clearly—from programme fit and curriculum to recognition, fees and dates.",
    experienceKicker: "The programme experience",
    experienceTitle: "A working room built around real decisions.",
    experienceIntro: "Structured workshops, applied project work and a peer community turn leadership development into something you can use back at work.",
    experienceLabels: ["Strategy workshop", "Applied project work", "Executive community"],
    outcomesKicker: "What changes when you complete it",
    outcomesTitle: "More than new knowledge. A sharper way to operate.",
    outcomesIntro: "Future-ready leadership means seeing the whole system, making a defensible decision and moving people into action.",
    recognitionKicker: "Proof and recognition",
    recognitionTitle: "Credibility you can see. A community you can meet.",
    recognitionIntro: "Executive MBA on Future Ready Business Leadership, awarded and endorsed by CMI.",
    graduates: "graduates",
    cohorts: "cohorts",
    englishCohorts: "English cohorts",
    mandarin: "first Mandarin cohort",
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
    eyebrow: "Malaysia · Pembangunan eksekutif",
    product: "Future Ready Executive MBA",
    title: "Bab kepimpinan anda yang seterusnya bermula di sini.",
    lede: "Program pembangunan profesional enam bulan untuk pengurus, pemilik perniagaan dan pemimpin kanan Malaysia yang mahu mempertajam pertimbangan, meluaskan perspektif dan memimpin langkah seterusnya.",
    guide: "Dapatkan panduan 2026 percuma",
    explore: "Terokai program",
    mediaKicker: "Enam bulan · Dibina sekitar kerja",
    mediaTitle: "Kejelasan program dan kohort.",
    mediaAlt: "Pemimpin eksekutif Malaysia menghadap pemandangan Kuala Lumpur",
    pauseVideo: "Jeda video",
    playVideo: "Mainkan video",
    intakesKicker: "Kohort 2026",
    intakesTitle: "Pilih rentak pembelajaran yang sesuai.",
    intakeOpen: "Dibuka untuk pertanyaan",
    factRecognition: "dianugerahkan dan disokong",
    factCommunity: "16 Bahasa Inggeris · kohort Mandarin pertama",
    factDuration: "program pembangunan profesional",
    factDays: "dalam tiga sesi dipermudah cara",
    factModules: "modul pengurusan gunaan",
    factProject: "berasaskan cabaran perniagaan sebenar",
    pathwaysKicker: "Terokai program",
    pathwaysTitle: "Terus kepada jawapan yang anda perlukan.",
    pathwaysIntro: "Setiap laluan menjawab satu keputusan dengan jelas—daripada kesesuaian dan kurikulum hingga pengiktirafan, yuran dan tarikh.",
    experienceKicker: "Pengalaman program",
    experienceTitle: "Ruang pembelajaran yang dibina sekitar keputusan sebenar.",
    experienceIntro: "Bengkel berstruktur, kerja projek gunaan dan komuniti rakan eksekutif menjadikan pembangunan kepimpinan sesuatu yang boleh terus digunakan di tempat kerja.",
    experienceLabels: ["Bengkel strategi", "Kerja projek gunaan", "Komuniti eksekutif"],
    outcomesKicker: "Perubahan selepas tamat",
    outcomesTitle: "Lebih daripada pengetahuan baharu. Cara beroperasi yang lebih tajam.",
    outcomesIntro: "Kepimpinan masa hadapan bermaksud melihat keseluruhan sistem, membuat keputusan yang boleh dipertahankan dan menggerakkan tindakan.",
    recognitionKicker: "Bukti dan pengiktirafan",
    recognitionTitle: "Kredibiliti yang boleh dilihat. Komuniti yang boleh ditemui.",
    recognitionIntro: "Executive MBA dalam Future Ready Business Leadership, dianugerahkan dan disokong oleh CMI.",
    graduates: "graduan",
    cohorts: "kohort",
    englishCohorts: "kohort Bahasa Inggeris",
    mandarin: "kohort Mandarin pertama",
    audienceKicker: "Kumpulan yang betul penting",
    audienceTitle: "Untuk mereka yang keputusannya memberi kesan melangkaui meja sendiri.",
    audienceBody: "Direka untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan yang bertanggungjawab terhadap hasil, pasukan, keputusan rentas fungsi atau rancangan pertumbuhan.",
    audiencePoints: ["Bawa isu perniagaan semasa.", "Belajar melalui struktur rapi yang sesuai dengan jadual kerja.", "Bawa pulang pelan praktikal yang boleh dijelaskan, diuji dan dilaksanakan."],
    decisionKicker: "Panduan program 2026 percuma",
    decisionTitle: "Dapatkan gambaran lengkap sebelum membuat komitmen.",
    decisionBody: "Semak struktur enam bulan, tarikh yang diterbitkan, yuran program, kriteria biasiswa dan pengiktirafan CMI dalam satu PDF yang jelas.",
    decisionAside: "Perbualan adalah pilihan. Panduan ini membantu anda menentukan sama ada program ini wajar dibincangkan.",
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
    factCommunity: "16 个英语班 · 首个华语班",
    factDuration: "专业发展课程",
    factDays: "分三个导师引导阶段完成",
    factModules: "个应用管理模块",
    factProject: "围绕一项真实企业课题",
    pathwaysKicker: "了解课程",
    pathwaysTitle: "直接查看您需要的答案。",
    pathwaysIntro: "每个入口清楚回答一项决定——从课程匹配和大纲，到认可、费用及日期。",
    experienceKicker: "课程体验",
    experienceTitle: "围绕真实企业决定而设的学习空间。",
    experienceIntro: "结构化工作坊、应用项目与高管同侪交流，让领导力发展能够直接运用在实际工作中。",
    experienceLabels: ["策略工作坊", "应用项目实践", "高管学习社群"],
    outcomesKicker: "完成课程后的改变",
    outcomesTitle: "不只是增加知识，而是以更清晰的方法开展工作。",
    outcomesIntro: "面向未来的领导力，是看清整个系统、作出有依据的决定，并带动团队执行。",
    recognitionKicker: "成果与认可",
    recognitionTitle: "看得见的可信度，见得到的学习社群。",
    recognitionIntro: "面向未来商业领导力的 Executive MBA，由 CMI 颁授并背书。",
    graduates: "名毕业生",
    cohorts: "个班次",
    englishCohorts: "个英语班",
    mandarin: "首个华语班",
    audienceKicker: "共同学习的人同样重要",
    audienceTitle: "为那些决策影响整个团队与企业的人而设。",
    audienceBody: "适合对业绩、团队、跨部门决定或增长计划负责的企业主、董事、总经理及高级管理者。",
    audiencePoints: ["带来一项当前企业课题。", "通过严谨并能配合工作的结构学习。", "形成一套能够说明、检验及执行的实用方案。"],
    decisionKicker: "免费 2026 课程指南",
    decisionTitle: "先了解完整资料，再决定是否参与。",
    decisionBody: "一份 PDF 清楚列出六个月课程结构、已公布日期、课程费用、奖学金评估条件及 CMI 认可。",
    decisionAside: "是否进一步沟通由您决定。指南的作用，是帮助您判断这项课程是否值得一次对话。",
  },
} as const;

const PATHWAYS = {
  en: [
    ["01", "The programme", "Who it is for, how the six months work and what participants complete.", "/executive-mba"],
    ["02", "The method", "How F.A.S.T. turns an unclear issue into a structured management decision.", "/how-it-works"],
    ["03", "The curriculum", "Twelve applied modules, coaching and one live business project.", "/curriculum"],
    ["04", "CMI recognition", "What the programme recognition means—and what remains a separate CMI route.", "/chartered-manager-malaysia"],
    ["05", "Fees and scholarship", "The RM10,000 fee, scholarship assessment and employer-funding process.", "/fees"],
    ["06", "2026 dates", "Published English and Mandarin schedules for working professionals.", "/intakes"],
  ],
  ms: [
    ["01", "Butiran program", "Sasaran peserta, susunan enam bulan dan hasil yang perlu disiapkan.", "/ms/executive-mba"],
    ["02", "Kaedah", "Cara F.A.S.T. menukar isu yang kabur menjadi keputusan pengurusan tersusun.", "/ms/how-it-works"],
    ["03", "Kurikulum", "Dua belas modul gunaan, bimbingan dan satu projek perniagaan sebenar.", "/ms/curriculum"],
    ["04", "Pengiktirafan CMI", "Maksud pengiktirafan program dan laluan CMI berasingan.", "/ms/chartered-manager-malaysia"],
    ["05", "Yuran dan biasiswa", "Yuran RM10,000, penilaian biasiswa dan proses pembiayaan majikan.", "/ms/fees"],
    ["06", "Tarikh 2026", "Jadual Bahasa Inggeris dan Mandarin yang diterbitkan untuk profesional bekerja.", "/ms/intakes"],
  ],
  zh: [
    ["01", "课程详情", "适合对象、六个月安排及学员需要完成的成果。", "/zh/executive-mba"],
    ["02", "课程方法", "F.A.S.T. 如何把不清晰的问题转化为有结构的管理决定。", "/zh/how-it-works"],
    ["03", "课程大纲", "十二个应用模块、辅导及一项真实企业项目。", "/zh/curriculum"],
    ["04", "CMI 专业认可", "课程认可的含义，以及属于独立路线的 CMI 资格。", "/zh/chartered-manager-malaysia"],
    ["05", "费用与奖学金", "RM10,000 费用、奖学金评估及雇主资助流程。", "/zh/fees"],
    ["06", "2026 开课日期", "为在职专业人士公布的英语及华语课程安排。", "/zh/intakes"],
  ],
} as const;

const OUTCOMES = {
  en: [["From reactive activity", "To deliberate direction"], ["From isolated expertise", "To system leadership"], ["From change fatigue", "To adaptive momentum"]],
  ms: [["Daripada aktiviti reaktif", "Kepada arah yang disengajakan"], ["Daripada kepakaran terasing", "Kepada kepimpinan sistem"], ["Daripada keletihan perubahan", "Kepada momentum adaptif"]],
  zh: [["从被动处理事务", "到有方向地领导"], ["从单一专业视角", "到系统性领导"], ["从应对改变的疲惫", "到持续适应的动力"]],
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
                <div><strong className="commerce-cmi-wordmark"><Image src="/brand/cmi-logo-official-white.png" alt="CMI" width={78} height={31} /></strong><span>{copy.factRecognition}</span></div>
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

      <section className="commerce-fact-band" aria-label={locale === "zh" ? "课程数字" : locale === "ms" ? "Fakta program" : "Programme facts"}>
        <div className="wrap commerce-fact-grid">
          <div><strong>{durationValue}</strong><span>{copy.factDuration}</span></div>
          <div><strong>{FACTS.trainingDays}</strong><span>{copy.factDays}</span></div>
          <div><strong>{FACTS.moduleCount}</strong><span>{copy.factModules}</span></div>
          <div><strong>1</strong><span>{copy.factProject}</span></div>
        </div>
      </section>

      <section className="commerce-section commerce-pathways">
        <div className="wrap">
          <Reveal><header className="commerce-section-head"><div><p className="mono">{copy.pathwaysKicker}</p><h2>{copy.pathwaysTitle}</h2></div><p>{copy.pathwaysIntro}</p></header></Reveal>
          <div className="commerce-pathway-grid">
            {PATHWAYS[locale].map(([number, title, body, href], index) => (
              <Reveal key={href} delay={(index % 3) * 45}>
                <Link className="commerce-pathway" href={href}>
                  <span className="mono">{number}</span><h3>{title}</h3><p>{body}</p><span className="commerce-card-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="commerce-section commerce-experience" aria-labelledby="commerce-experience-title">
        <div className="wrap">
          <Reveal><header className="commerce-section-head"><div><p className="mono">{copy.experienceKicker}</p><h2 id="commerce-experience-title">{copy.experienceTitle}</h2></div><p>{copy.experienceIntro}</p></header></Reveal>
          <div className="commerce-experience-grid">
            <Reveal><figure className="commerce-experience-main"><Image src="/media/future-commerce/workshop-system.jpg" alt={copy.experienceLabels[0]} width={1920} height={1440} sizes="(max-width: 820px) 100vw, 62vw" /><figcaption><span className="mono">01</span><strong>{copy.experienceLabels[0]}</strong></figcaption></figure></Reveal>
            <Reveal delay={55}><figure><Image src="/media/future-commerce/founder-atelier.jpg" alt={copy.experienceLabels[1]} width={1920} height={1080} sizes="(max-width: 820px) 100vw, 34vw" /><figcaption><span className="mono">02</span><strong>{copy.experienceLabels[1]}</strong></figcaption></figure></Reveal>
            <Reveal delay={90}><figure><Image src="/media/future-commerce/community-commencement.jpg" alt={copy.experienceLabels[2]} width={1920} height={1440} sizes="(max-width: 820px) 100vw, 34vw" /><figcaption><span className="mono">03</span><strong>{copy.experienceLabels[2]}</strong></figcaption></figure></Reveal>
          </div>
        </div>
      </section>

      <section className="commerce-section commerce-outcomes">
        <div className="commerce-grid" aria-hidden="true" />
        <div className="wrap commerce-outcome-layout">
          <Reveal><div className="commerce-outcome-intro"><p className="mono">{copy.outcomesKicker}</p><h2>{copy.outcomesTitle}</h2><p>{copy.outcomesIntro}</p></div></Reveal>
          <div className="commerce-outcome-cards">
            {OUTCOMES[locale].map(([from, to], index) => (
              <Reveal key={from} delay={index * 55}><article><span className="mono">0{index + 1}</span><small>{from}</small><strong>{to}</strong></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="commerce-section commerce-recognition">
        <div className="wrap">
          <Reveal><header className="commerce-section-head"><div><p className="mono">{copy.recognitionKicker}</p><h2>{copy.recognitionTitle}</h2></div><p>{copy.recognitionIntro}</p></header></Reveal>
          <div className="commerce-recognition-wall">
            <article className="commerce-credential"><div><span className="mono">CMI recognition</span><h3>{locale === "zh" ? "颁授并背书" : locale === "ms" ? "Dianugerahkan dan disokong" : "Awarded and endorsed"}</h3><p>{copy.recognitionIntro}</p></div><Image src="/brand/cmi-logo-official.svg" alt="Chartered Management Institute" width={144} height={98} /></article>
            <div className="commerce-proof-stats"><div><strong>{PROGRAMME_PROOF.graduates}</strong><span>{copy.graduates}</span></div><div><strong>{PROGRAMME_PROOF.cohorts}</strong><span>{copy.cohorts}</span></div><div><strong>{PROGRAMME_PROOF.englishCohorts}</strong><span>{copy.englishCohorts}</span></div><div><strong>01</strong><span>{copy.mandarin}</span></div></div>
          </div>
          <div className="commerce-trust-marks" aria-label={locale === "zh" ? "课程机构与认可" : locale === "ms" ? "Organisasi dan pengiktirafan program" : "Programme organizations and recognition"}>
            <div><Image src="/brand/abc-mark.png" alt="Asian Business Consulting" width={650} height={180} /><p><strong>{locale === "zh" ? "课程设计与授课" : locale === "ms" ? "Reka bentuk dan penyampaian" : "Programme design and delivery"}</strong>Asian Business Consulting</p></div>
            <div><Image src="/brand/cmi-logo-official.svg" alt="Chartered Management Institute" width={144} height={98} /><p><strong>{locale === "zh" ? "专业认可" : locale === "ms" ? "Pengiktirafan profesional" : "Professional recognition"}</strong>{locale === "zh" ? "CMI 颁授并背书" : locale === "ms" ? "Dianugerahkan dan disokong oleh CMI" : "Awarded and endorsed by CMI"}</p></div>
            <div><Image src="/brand/hrdcorp-claimable-official.png" alt="HRD Corp Claimable" width={180} height={180} /><p><strong>{locale === "zh" ? "雇主资助路线" : locale === "ms" ? "Laluan pembiayaan majikan" : "Employer-funding route"}</strong>{locale === "zh" ? "以雇主申请及 HRD Corp 审批为准" : locale === "ms" ? "Tertakluk pada permohonan majikan dan kelulusan HRD Corp" : "Subject to employer application and HRD Corp approval"}</p></div>
          </div>
          <div className="commerce-proof-gallery">
            <figure><Image src="/brand/community/graduation-cohort.jpeg" alt="Future Ready Executive MBA graduation cohort" width={894} height={596} sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>{PROGRAMME_PROOF.graduationAttendance} {locale === "zh" ? "名毕业生出席首届毕业典礼。" : locale === "ms" ? "graduan menghadiri majlis graduasi pertama." : "graduates attended the inaugural graduation."}</figcaption></figure>
            <figure><Image src="/brand/community/faculty-event.jpeg" alt="Future Ready Executive MBA faculty and programme representatives" width={2560} height={1440} sizes="(max-width: 760px) 100vw, 38vw" /><figcaption>{locale === "zh" ? "实践型导师与课程代表。" : locale === "ms" ? "Fakulti berorientasikan amalan dan wakil program." : "Practitioner-led faculty and programme representatives."}</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="commerce-audience">
        <div className="wrap commerce-audience-layout">
          <Reveal><figure><Image src="/media/future-commerce/operators-workshop.jpg" alt={locale === "zh" ? "马来西亚企业领导者参与策略讨论" : locale === "ms" ? "Pemimpin perniagaan Malaysia dalam perbincangan strategi" : "Malaysian business leaders in a strategy discussion"} fill sizes="(max-width: 820px) 100vw, 46vw" /></figure></Reveal>
          <Reveal delay={70}><div><p className="mono">{copy.audienceKicker}</p><h2>{copy.audienceTitle}</h2><p>{copy.audienceBody}</p><ul>{copy.audiencePoints.map((point) => <li key={point}>{point}</li>)}</ul><Link href={programmeHref} className="commerce-text-link">{copy.explore} <span aria-hidden="true">→</span></Link></div></Reveal>
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
