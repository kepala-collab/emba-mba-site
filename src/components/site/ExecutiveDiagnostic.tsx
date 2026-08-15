"use client";

import Link from "next/link";
import { useState } from "react";

const QUESTIONS = [
  {
    question: "Which situation best describes why you are looking now?",
    options: [
      "My role is becoming broader than my current management toolkit.",
      "I am facing a consequential business decision or transformation.",
      "I want structured professional development without leaving work.",
      "I need clearer evidence before choosing any programme.",
    ],
  },
  {
    question: "Where would stronger structure create the greatest value?",
    options: [
      "Seeing the whole system before acting.",
      "Separating verified constraints from assumptions.",
      "Turning strategy into a workable business plan.",
      "Leading people and stakeholders through change.",
    ],
  },
  {
    question: "What would make serious learning workable?",
    options: [
      "A published schedule that fits around full-time work.",
      "Applying the learning to my own business context.",
      "Practitioner guidance instead of a traditional thesis route.",
      "A clear view of fees, recognition and employer funding boundaries.",
    ],
  },
  {
    question: "What evidence do you need before taking a next step?",
    options: [
      "The method, modules and applied project requirements.",
      "The exact time commitment and published intake dates.",
      "The CMI recognition and Chartered Manager boundaries.",
      "The Malaysian fee, scholarship and HRD Corp process.",
    ],
  },
] as const;

const RESULT_COPY = [
  {
    title: "Capability expansion",
    body: "Start by examining the seven F.A.S.T. disciplines and how they convert experience into a more repeatable decision process.",
    href: "/how-it-works",
    action: "Explore the method",
  },
  {
    title: "Applied business judgement",
    body: "Review the curriculum and the applied business project. The useful test is whether the work can address a real organisational question.",
    href: "/curriculum",
    action: "Review the curriculum",
  },
  {
    title: "Workable commitment",
    body: "Compare the six-month structure with the published 2026 dates before deciding whether the schedule fits your responsibilities.",
    href: "/intakes",
    action: "See the intakes",
  },
  {
    title: "Decision clarity",
    body: "Read the exact fee, scholarship, recognition and funding boundaries in one place before requesting a conversation.",
    href: "/resources/advancement-brief",
    action: "Open the brief",
  },
] as const;

const QUESTIONS_ZH = [
  {
    question: "哪一种情况最能说明你现在寻找课程的原因？",
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
    question: "什么学习安排最符合你的实际情况？",
    options: [
      "已公布并适合全职工作的上课时间。",
      "把学习应用到自己的商业情境。",
      "以实践者指导取代传统论文路径。",
      "清楚列明费用、认可与雇主资助边界。",
    ],
  },
  {
    question: "采取下一步之前，你最需要哪项资料？",
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
    body: "把六个月课程结构与已公布的 2026 年日期逐项比较，再判断是否符合你的工作责任。",
    href: "/zh/intakes",
    action: "查看开课日期",
  },
  {
    title: "明确的决策资料",
    body: "提出沟通请求前，先在一份资料中查看完整费用、奖学金、认可与资助边界。",
    href: "/zh/resources/advancement-brief",
    action: "打开决策简报",
  },
] as const;

const UI_COPY = {
  en: {
    eyebrow: "Private reflection / no data sent",
    title: "What is your next role asking of you?",
    intro: "This is a decision aid, not a psychometric assessment or admission test. Your selections stay in this browser and are not transmitted or stored.",
    resultEyebrow: "A useful place to begin",
    meaning: "What this means",
    meaningBody: "Your answers indicate where clearer evidence may help your decision. They do not predict eligibility, performance or career outcomes.",
    next: "What to examine next",
    nextBody: "Check the method, time, recognition and total financial commitment against the actual responsibilities you carry.",
    restart: "Start again",
    back: "Back",
    result: "See a starting point",
    continue: "Continue",
  },
  zh: {
    eyebrow: "私人思考工具 / 不会传送资料",
    title: "你的下一项职责需要什么能力？",
    intro: "这是决策辅助工具，不是心理测评或入学考试。你的选择只保留在当前浏览器页面，不会被传送或储存。",
    resultEyebrow: "一个可行的起点",
    meaning: "这项结果说明什么",
    meaningBody: "你的选择显示哪一类资料能帮助当前决策。结果不会预测申请资格、学习表现或职业成果。",
    next: "接下来应查看什么",
    nextBody: "把教学方法、时间、认可与完整费用，逐项对照你现在承担的责任。",
    restart: "重新开始",
    back: "返回",
    result: "查看建议起点",
    continue: "继续",
  },
} as const;

export default function ExecutiveDiagnostic({ lang = "en" }: { lang?: "en" | "zh" }) {
  const questions = lang === "zh" ? QUESTIONS_ZH : QUESTIONS;
  const results = lang === "zh" ? RESULT_COPY_ZH : RESULT_COPY;
  const copy = UI_COPY[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const complete = step >= questions.length;
  const selected = answers[step];
  const resultIndex = answers.length
    ? answers.reduce((sum, answer) => sum + answer, 0) % results.length
    : 0;
  const result = results[resultIndex];

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
    <section className="diagnostic-card" aria-live="polite">
      <div className="diagnostic-head">
        <p className="mono sec-k">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>
      <div className="diagnostic-progress" aria-hidden="true">
        <span style={{ width: `${complete ? 100 : ((step + 1) / questions.length) * 100}%` }} />
      </div>

      {complete ? (
        <div className="diagnostic-result">
          <p className="mono sec-k">{copy.resultEyebrow}</p>
          <h2>{result.title}</h2>
          <p>{result.body}</p>
          <div className="diagnostic-result-grid">
            <div>
              <h3>{copy.meaning}</h3>
              <p>{copy.meaningBody}</p>
            </div>
            <div>
              <h3>{copy.next}</h3>
              <p>{copy.nextBody}</p>
            </div>
          </div>
          <div className="working-hero-actions">
            <Link className="btn btn-primary" href={result.href}>{result.action} <span aria-hidden="true">↗</span></Link>
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
