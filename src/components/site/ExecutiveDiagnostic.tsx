"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LeadForm from "@/components/site/LeadForm";
import { CTA_LABELS, PROGRAMME_YEAR } from "@/lib/content";

const QUESTIONS = [
  {
    question: "Which situation best describes why you are looking now?",
    options: [
      "My role is becoming broader than my current management toolkit.",
      "I am facing an important business decision or operating change.",
      "I want structured professional development without leaving work.",
      "I need clearer evidence before choosing any programme.",
    ],
  },
  {
    question: "Where would a more structured approach help?",
    options: [
      "Seeing the whole system before acting.",
      "Separating verified constraints from assumptions.",
      "Turning strategy into a practical business plan.",
      "Leading people and stakeholders through change.",
    ],
  },
  {
    question: "Which learning arrangement fits your responsibilities?",
    options: [
      "A published schedule that fits around full-time work.",
      "Applying the learning to my own business context.",
      "Practitioner guidance instead of a traditional thesis route.",
      "Clear information about fees, recognition and employer funding.",
    ],
  },
  {
    question: "What evidence do you need before taking a next step?",
    options: [
      "The method, modules and applied project requirements.",
      "The exact time commitment and published intake dates.",
      "What the CMI recognition means and how Chartered Manager assessment works.",
      "The Malaysian fee, scholarship and HRD Corp process.",
    ],
  },
] as const;

const RESULT_COPY = [
  {
    title: "Management capability",
    body: "Start with the seven F.A.S.T. disciplines and how they support a repeatable business decision process.",
    href: "/how-it-works",
    action: "Explore the method",
  },
  {
    title: "Applied business project",
    body: "Review the curriculum and the applied business project. The useful test is whether the work can address a real organisational question.",
    href: "/curriculum",
    action: "Review the curriculum",
  },
  {
    title: "Schedule and time commitment",
    body: `Compare the six-month structure with the published ${PROGRAMME_YEAR} dates before deciding whether the schedule fits your responsibilities.`,
    href: "/intakes",
    action: "See the intakes",
  },
  {
    title: "Fees and recognition",
    body: "Read the exact fee, scholarship, CMI recognition and employer-funding process before requesting a conversation.",
    href: "/resources/advancement-brief",
    action: "Open the programme guide",
  },
] as const;

const QUESTIONS_ZH = [
  {
    question: "哪一种情况最能说明您现在寻找课程的原因？",
    options: [
      "我的职责范围已经超出现有的管理工具。",
      "我正面对一项影响重大的商业决策或转型。",
      "我希望在继续工作的同时接受有结构的专业发展。",
      "我需要更清晰的资料，才会选择任何课程。",
    ],
  },
  {
    question: "在哪一方面建立更清晰的结构最有价值？",
    options: [
      "行动前先看清整个系统。",
      "把已核实的限制与假设区分开来。",
      "把战略转化为可执行的商业计划。",
      "带领员工及利益相关者完成改变。",
    ],
  },
  {
    question: "什么学习安排最符合您的实际情况？",
    options: [
      "已公布并适合全职工作的上课时间。",
      "把学习应用到自己的商业情境。",
      "以实践者指导取代传统论文模式。",
      "清楚列明费用、认可与雇主资助边界。",
    ],
  },
  {
    question: "采取下一步之前，您最需要哪项资料？",
    options: [
      "教学方法、模块及企业项目要求。",
      "完整时间投入与已公布班次日期。",
      "CMI 认可及 Chartered Manager 的明确边界。",
      "马来西亚学员费用、奖学金与 HRD Corp 流程。",
    ],
  },
] as const;

const RESULT_COPY_ZH = [
  {
    title: "扩展管理能力",
    body: "先了解七套 F.A.S.T. 思维方法，以及它们如何把经验转化为可重复使用的决策流程。",
    href: "/zh/executive-mba",
    action: "了解课程",
  },
  {
    title: "应用商业判断",
    body: "查看课程大纲与企业应用项目。关键问题是：这项学习能否用于一个真实的组织议题。",
    href: "/zh/curriculum",
    action: "查看课程大纲",
  },
  {
    title: "可执行的时间投入",
    body: `把六个月课程结构与已公布的 ${PROGRAMME_YEAR} 年日期逐项比较，再判断是否符合您的工作责任。`,
    href: "/zh/intakes",
    action: "查看开课日期",
  },
  {
    title: "明确的决策资料",
    body: "提出沟通请求前，先在一份资料中查看完整费用、奖学金、认可与资助边界。",
    href: "/zh/resources/advancement-brief",
    action: "打开课程指南",
  },
] as const;

const QUESTIONS_MS = [
  {
    question: "Situasi mana yang paling menggambarkan sebab anda mencari program sekarang?",
    options: [
      "Peranan saya sudah melangkaui kelengkapan pengurusan yang saya ada.",
      "Saya berdepan keputusan perniagaan atau perubahan operasi yang penting.",
      "Saya mahu pembangunan profesional berstruktur sambil terus bekerja.",
      "Saya perlukan bukti yang lebih jelas sebelum memilih mana-mana program.",
    ],
  },
  {
    question: "Dalam hal apa pendekatan yang lebih berstruktur dapat membantu anda?",
    options: [
      "Melihat keseluruhan sistem sebelum bertindak.",
      "Mengasingkan kekangan yang telah disahkan daripada andaian.",
      "Menterjemahkan strategi kepada pelan perniagaan yang praktikal.",
      "Memimpin pekerja dan pihak berkepentingan melalui perubahan.",
    ],
  },
  {
    question: "Susunan pembelajaran mana yang sesuai dengan tanggungjawab anda?",
    options: [
      "Jadual yang diterbitkan dan sesuai dengan kerja sepenuh masa.",
      "Menerapkan pembelajaran kepada konteks perniagaan saya sendiri.",
      "Bimbingan pengamal industri, bukan laluan tesis tradisional.",
      "Maklumat jelas tentang yuran, pengiktirafan dan pembiayaan majikan.",
    ],
  },
  {
    question: "Bukti apa yang anda perlukan sebelum mengambil langkah seterusnya?",
    options: [
      "Kaedah pembelajaran, modul dan keperluan projek aplikasi.",
      "Komitmen masa yang tepat serta tarikh kemasukan yang diterbitkan.",
      "Maksud pengiktirafan CMI dan cara penilaian Chartered Manager dijalankan.",
      "Yuran di Malaysia, biasiswa dan proses HRD Corp.",
    ],
  },
] as const;

const RESULT_COPY_MS = [
  {
    title: "Keupayaan pengurusan",
    body: "Mulakan dengan tujuh disiplin F.A.S.T. dan bagaimana ia menyokong proses membuat keputusan perniagaan yang boleh diulang.",
    href: "/ms/how-it-works",
    action: "Teliti kaedahnya",
  },
  {
    title: "Projek perniagaan aplikasi",
    body: "Semak kurikulum dan projek perniagaan aplikasi. Ujian yang berguna: adakah tugasan itu dapat menjawab persoalan sebenar organisasi anda.",
    href: "/ms/curriculum",
    action: "Semak kurikulum",
  },
  {
    title: "Jadual dan komitmen masa",
    body: `Bandingkan struktur enam bulan dengan tarikh ${PROGRAMME_YEAR} yang diterbitkan sebelum memutuskan sama ada jadualnya sesuai dengan tanggungjawab anda.`,
    href: "/ms/intakes",
    action: "Lihat tarikh kemasukan",
  },
  {
    title: "Yuran dan pengiktirafan",
    body: "Baca yuran yang tepat, biasiswa, pengiktirafan CMI dan proses pembiayaan majikan sebelum meminta perbualan.",
    href: "/ms/resources/advancement-brief",
    action: "Buka panduan program",
  },
] as const;

const UI_COPY = {
  en: {
    eyebrow: "Working manager progression check / no data sent",
    title: "Where has your role outgrown your management toolkit?",
    intro: "Answer four private questions to identify what you should evaluate next. Your selections stay in this browser and are not transmitted or stored. This is not an admission test or a prediction of career outcomes.",
    resultEyebrow: "Your private review checklist",
    resultTitle: "Here is what to evaluate next.",
    resultBody: "These are the priorities you selected. Review them against the published programme information before deciding whether the format fits your work.",
    selected: "Your selected priorities",
    next: "Check these four programme facts",
    talk: CTA_LABELS.conversation,
    guideKicker: "Your next step",
    guideTitle: "Keep the result and review the full guide.",
    guideBody: `The Working Manager’s ${PROGRAMME_YEAR} Progression Guide brings the programme structure, dates, fee, the scholarship assessment process and CMI recognition into one place.`,
    restart: "Start again",
    back: "Back",
    result: "See a starting point",
    continue: "Continue",
  },
  zh: {
    eyebrow: "课程匹配检查 / 不会传送资料",
    title: "哪些课程资料对您最重要？",
    intro: "回答四道问题，建立一份私人审阅清单。您的选择只保留在当前浏览器页面，不会被传送或储存。这不是入学测试，也不会预测职业结果。",
    resultEyebrow: "您的私人审阅清单",
    resultTitle: "根据您的选择，逐项检查课程是否合适。",
    resultBody: "以下是您选择的重点。请先与已公布的课程资料逐项核对，再决定是否联系课程团队。",
    selected: "您选择的重点",
    next: "核对四项课程事实",
    talk: CTA_LABELS.zh.conversation,
    guideKicker: "下一步",
    guideTitle: "保留结果，并查看完整课程指南。",
    guideBody: `《${PROGRAMME_YEAR} 在职经理进阶指南》把课程安排、日期、费用、奖学金择优评估方式及 CMI 认可集中在一份资料中。`,
    restart: "重新开始",
    back: "返回",
    result: "查看建议起点",
    continue: "继续",
  },
  ms: {
    eyebrow: "Semakan kemajuan pengurus bekerja / tiada data dihantar",
    title: "Di mana peranan anda sudah melangkaui kelengkapan pengurusan anda?",
    intro: "Jawab empat soalan peribadi untuk mengenal pasti perkara yang wajar anda nilai seterusnya. Pilihan anda kekal dalam pelayar ini dan tidak dihantar atau disimpan. Ini bukan ujian kemasukan dan bukan ramalan hasil kerjaya.",
    resultEyebrow: "Senarai semakan peribadi anda",
    resultTitle: "Inilah perkara yang wajar dinilai seterusnya.",
    resultBody: "Ini keutamaan yang anda pilih. Semak setiap satu terhadap maklumat program yang diterbitkan sebelum memutuskan sama ada formatnya sesuai dengan kerja anda.",
    selected: "Keutamaan pilihan anda",
    next: "Semak empat fakta program ini",
    talk: CTA_LABELS.ms.conversation,
    guideKicker: "Langkah anda seterusnya",
    guideTitle: "Simpan keputusan ini dan semak panduan penuh.",
    guideBody: `Panduan Kemajuan Pengurus Bekerja ${PROGRAMME_YEAR} menghimpunkan struktur program, tarikh, yuran, proses penilaian biasiswa dan pengiktirafan CMI dalam satu dokumen.`,
    restart: "Mula semula",
    back: "Kembali",
    result: "Lihat titik permulaan",
    continue: "Teruskan",
  },
} as const;

export default function ExecutiveDiagnostic({ lang = "en" }: { lang?: "en" | "zh" | "ms" }) {
  const questions = lang === "zh" ? QUESTIONS_ZH : lang === "ms" ? QUESTIONS_MS : QUESTIONS;
  const results = lang === "zh" ? RESULT_COPY_ZH : lang === "ms" ? RESULT_COPY_MS : RESULT_COPY;
  const copy = UI_COPY[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const complete = step >= questions.length;
  const selected = answers[step];
  const cardRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!complete) return;
    requestAnimationFrame(() => resultRef.current?.scrollIntoView({ block: "start" }));
  }, [complete]);
  const choose = (index: number) => {
    setAnswers((current) => {
      const next = [...current];
      next[step] = index;
      return next;
    });
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <section ref={cardRef} className="diagnostic-card">
      <div className="diagnostic-head">
        <p className="mono sec-k">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>
      <div className="diagnostic-progress" aria-hidden="true">
        <span style={{ width: `${complete ? 100 : ((step + 1) / questions.length) * 100}%` }} />
      </div>

      {complete ? (
        <div ref={resultRef} className="diagnostic-result">
          <p className="mono sec-k">{copy.resultEyebrow}</p>
          <h2>{copy.resultTitle}</h2>
          <p>{copy.resultBody}</p>
          <h3 className="diagnostic-result-label">{copy.selected}</h3>
          <ol className="diagnostic-answer-list">
            {questions.map((question, index) => (
              <li key={question.question}>
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{question.question}</strong>
                  <p>{question.options[answers[index] ?? 0]}</p>
                </div>
              </li>
            ))}
          </ol>
          <h3 className="diagnostic-result-label">{copy.next}</h3>
          <div className="diagnostic-result-grid">
            {results.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="text-action" href={item.href}>{item.action} <span aria-hidden="true">↗</span></Link>
              </div>
            ))}
          </div>
          <div className="diagnostic-lead-capture">
            <div>
              <p className="mono sec-k">{copy.guideKicker}</p>
              <h3>{copy.guideTitle}</h3>
              <p>{copy.guideBody}</p>
            </div>
            <LeadForm
              programme="Executive MBA"
              source="progression-diagnostic"
              lang={lang}
              placement="diagnostic-result"
              variant="campaign"
              defaultIntent="details_first"
            />
          </div>
          <div className="diagnostic-actions diagnostic-result-actions">
            <Link className="text-action" href={lang === "zh" ? "/zh/apply" : lang === "ms" ? "/ms/apply" : "/apply"}>{copy.talk} <span aria-hidden="true">→</span></Link>
            <button className="btn btn-ghost" type="button" onClick={restart}>{copy.restart}</button>
          </div>
        </div>
      ) : (
        <div className="diagnostic-body">
          <form onSubmit={(event) => { event.preventDefault(); if (selected !== undefined) setStep((current) => current + 1); }}>
            <fieldset>
              <legend>{questions[step].question}</legend>
              <div className="diagnostic-options">
                {questions[step].options.map((option, index) => (
                  <label key={option} className="diagnostic-option">
                    <input type="radio" name={`question-${step}`} checked={selected === index} onChange={() => choose(index)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="diagnostic-actions">
              <button className="btn btn-ghost" type="button" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}>{copy.back}</button>
              <button className="btn btn-primary" type="submit" disabled={selected === undefined}>{step === questions.length - 1 ? copy.result : copy.continue}</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
