import { FACTS, FACULTY, INTAKES, PROGRAMME_POSITIONING_ZH } from "@/lib/content";

const MODULES_ZH = [
  { c: "M01", title: "未来前瞻", outcome: "洞察商业格局" },
  { c: "M02", title: "JTBD 待办任务理论", outcome: "以客户为中心的创新与增长" },
  { c: "M03", title: "F.A.S.T. 方法论", outcome: "自适应系统思维" },
  { c: "M04", title: "关键议题", outcome: "问题与机会" },
  { c: "M05", title: "战略 DNA", outcome: "4D 战略构建" },
  { c: "M06", title: "SBAP", outcome: "战略商业行动规划" },
  { c: "M07", title: "转型领导力", outcome: "原则性与情境性" },
  { c: "M08", title: "团队介入", outcome: "以辅导加速发展" },
  { c: "M09", title: "整合系统", outcome: "系统视角与检视" },
  { c: "M10", title: "组织转型", outcome: "BOLT 领导力" },
  { c: "M11", title: "影响力设计", outcome: "战略存在感与精准度" },
  { c: "M12", title: "利益相关者生态系统", outcome: "信任与影响力网络" },
] as const;

export const HRD_CORP_CLAIM_ZH =
  "已向人力资源发展机构（HRD Corp）注册的马来西亚雇主，须在开课前通过 e-TRiS 系统提交培训资助申请。资格与批准金额由 HRD Corp 依据其 Allowable Cost Matrix 审定；资助额以雇主可动用的征费（levy）余额为上限。申请由雇主提出，而非学员。";

// Mirror of HRD_CORP_CLAIM.label in content.ts.
export const HRD_CORP_CLAIM_LABEL_ZH =
  "由雇主主导的 HRD Corp 资助 · 须经批准";

// Mirror of INCLUSIONS[5].s in content.ts.
export const INCLUSIONS_CMI_CERTIFICATE_ZH =
  "成功完成课程可获颁 CMI 认可证书（CMI Certificate of Recognition）。Chartered Manager 是独立可选的 CMI 路线，具有独立资格、评估及费用。";

// Mirror of CERTIFICATE_POSITIONING.professionalRelevance in content.ts.
export const CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH =
  "该证书记录了根据 CMI Professional Standard 获认可的管理与领导力发展成果，可列入专业档案；证书不保证晋升、就业、加薪或任何其他职业结果。";

// Mirror of ENQUIRY_COMMITMENT in content.ts.
export const ENQUIRY_COMMITMENT_ZH =
  "咨询不构成报读或付款承诺。";

export const PROGRAMME_AUDIENCE_ZH =
  "适合对业绩、团队、跨部门决策或增长计划负责的企业主、董事、总经理与高级经理。";

export const REFUND_TERMS_ZH =
  "ABC 经签署的报名条款列明退款资格、通知期限、可退金额、教材归还条件及处理日期。学员在付款前收到并审阅该条款；已签署条款以外不作退款承诺。";

// Chinese mirror of COMPARISON_SCOPE (English constant in src/lib/content.ts):
// the reference-group definition required beside every rendering of the
// comparison table.
export const COMPARISON_SCOPE_ZH =
  "本表所指的参考学术 MBA，是一项为期 18 至 24 个月、以学术模块、作业或考试及论文为核心的课程；并不代表所有 MBA 课程。";

export const COMPARISON_ZH = [
  { k: "修读时间", them: "18–24 个月", us: `${FACTS.durationMonths} 个月：${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次导师带领的研习课完成` },
  { k: "学习重点", them: "学术理论、研究及案例分析", us: "企业情境、战略判断及可重复使用的决策框架" },
  { k: "评估方式", them: "作业或考试，加上论文", us: "以学员自身企业为对象的企业应用项目；没有传统考试或论文" },
  { k: "导师角色", them: "学术教学及研究指导", us: "企业实践者、顾问及高管教练" },
  { k: "主要工具", them: "学术教材、研究文献及案例", us: `F.A.S.T. 方法论及 ${FACTS.moduleCount} 个实用商业框架` },
  { k: "修读形式", them: "按授予院校公布的学术课程时间表修读", us: `${FACTS.durationMonths} 个月内完成 ${FACTS.liveSessions} 次指定周末研习课，学员可继续工作` },
  { k: "课程费用", them: "授予院校公布的学费及附加费用", us: `标准费用 ${FACTS.priceStd}；${FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经评估与书面批准，任何奖学金金额及应付费用均会个别以书面确认` },
  { k: "资格性质", them: "由授予院校颁发的学术 MBA 学位", us: "CMI 专业课程认可证书；并非 MQA 认证的学术学位" },
] as const;

export const CORE_PAGES_ZH = {
  method: {
    eyebrow: "承压之下的决策",
    title: "收入放缓、成本走高，团队待决",
    intro: `直觉与经验把您带到今天。这个决策目前只留在您脑中，在会议室里被反复解释，而必须据此行动的团队仍在等待——职务也不会暂停，让您抽身去学习如何带领它。${FACTS.durationMonths} 个月内，您把这一个决策——来自您自身的职责——做成一份团队能据以行动的书面行动方案：${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次导师带领的研习课完成，加上一对一教练指导及一个企业应用项目，全程在您自己的机构内进行，而您仍留在原职务上。框架与工作模板留在您身上。`,
    sections: [
      ["第一节", "您把这个决策定义为问题，并与教练一起用框架检验它。"],
      ["第一、二节之间，在自己机构内", "您把检验过的做法用在您带来的课题上，再把结果带回研习课。"],
      ["第二节", "您依据证据权衡选项，由导师与教练审视您的推理。"],
      ["第二、三节之间，在自己机构内", "您把决策带回职务中再次验证，然后才完成行动方案。"],
      ["第三节", "您完成行动方案：决定、行动、负责人及衡量指标，交由导师审阅。"],
      ["行动方案与留下的东西", `您把这份书面行动方案——决定、行动、负责人及衡量指标——提交导师审阅。${FACTS.durationMonths} 个月结束后，框架与工作模板留在您身上。`],
      ["三次研习课贯穿的 F.A.S.T. 方法", "界定真正的问题、检验证据、建立可比较的选项、说明决策依据，并转化为行动方案。Right Questions 是您选择哪个问题最能服务受决策影响的人——真正的领导是仆人式领导（servant leadership）：以所服务的人来衡量。"],
      ["若错过某次研习课", "请在该次研习课前联络课程团队。ABC 会以书面方式记录获批准的补课方式：视频学习，或安排在指定的后续届别出席。"],
      ["CMI 认可", `${INCLUSIONS_CMI_CERTIFICATE_ZH} ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}`],
    ],
  },
  programme: {
    eyebrow: `${FACTS.durationMonths} 个月 Executive MBA · 英国 CMI 认可`,
    title: "带着决策来，带着方法走",
    intro: `${FACTS.durationMonths} 个月内，您把自身负责的一项当前课题，从问题界定推进为经导师审阅的书面行动方案：${FACTS.trainingDays} 个培训日、${FACTS.liveSessions} 次指定研习课、一对一辅导及一个企业应用项目，全程不必离开原有职务。${PROGRAMME_POSITIONING_ZH}这是为期六个月的非学术专业发展课程，并非 MQA 认证的学术学位或受监管资格。`,
    sections: [
      [`${FACTS.durationMonths} 个月课程安排`, `完成 ${FACTS.trainingDays} 个培训日、${FACTS.liveSessions} 次导师带领的研习课、企业应用项目及辅导。达到课程要求后，学员将获颁 CMI 认可证书（CMI Certificate of Recognition）。${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH}`],
      ["独立的 Chartered Manager 路线", "Chartered Manager 是 CMI 的独立可选路线，具有独立资格、评估及费用，由 CMI 决定。此路线不属于本课程，也不在已公布的课程费用之内；修毕本课程，并不等于自动取得 Chartered Manager。"],
      ["CMI 专业名衔", "根据 CMI 公布的 CMI Recognised 课程条款，修毕课程的学员可取得 Foundation Chartered Manager（fCMgr）专业名衔。名衔的启用、会员续期及专业名衔的使用，均由 CMI 负责。"],
      ["课程性质", "这是面向资深管理者的专业发展课程，并非 MQA 认证的学术学位或受监管资格。CMI 的 Chartered Manager 评估费及会员费由 CMI 独立收取，除非正式费用表明确列为已包含项目。"],
      ["适合对象", PROGRAMME_AUDIENCE_ZH],
      ["学习成果", "完成课程时，学员将针对自身企业课题，提交包含决策、行动、负责人及衡量指标的书面行动方案，由课程导师及实践专家评审，供需要据此行动的团队使用。"],
      ["资格说明", "这是由英国特许管理协会（CMI）认可的专业发展课程，并非经马来西亚学术资格鉴定机构（MQA）认证的学术学位。"],
    ],
  },
  curriculum: {
    eyebrow: `课程大纲 · ${FACTS.moduleCount} 个模块`,
    title: `${FACTS.moduleCount} 个模块，团队可落实的方案`,
    intro: `${FACTS.durationMonths} 个月内，您通过基于 F.A.S.T. 方法论的 ${FACTS.moduleCount} 个应用模块，处理一项真实业务课题。您界定问题、与教练一起检验，并将其写成包含决策、行动、负责人及衡量指标的行动方案，供导师评审。`,
    sections: [
      ["阶段 1：创造价值", "通过 F.A.S.T.、Jobs-To-Be-Done、未来洞察、战略 DNA 与行动规划，重新定义客户价值和企业方向。"],
      ["阶段 2：交付价值", "通过情境领导、团队介入、系统思维及转型管理，把战略转化为团队行为与执行机制。"],
      ["阶段 3：形成行动方案", "运用影响力设计、利益相关者关系及企业系统分析，完成供导师评审的企业行动方案。清楚的负责人与衡量指标，让方案成为团队能够执行的成果，而不只是您完成的任务。"],
      [`${FACTS.moduleCount} 个模块`, MODULES_ZH.map((module) => `${module.c} ${module.title}——${module.outcome}`).join("；")],
      ["评估方式", "评估以课堂参与、辅导过程及一个与学员企业直接相关的应用项目为基础，不设传统考试或论文。"],
    ],
  },
  fees: {
    eyebrow: "学费 · 奖学金 · HRD Corp",
    title: `${FACTS.priceStd} 标准费用，其余条件书面确认`,
    intro: `学费用于支持 ${FACTS.durationMonths} 个月内针对一项真实业务课题的工作：${FACTS.trainingDays} 个培训日、共 ${FACTS.liveSessions} 次导师带领的研习课、一对一辅导与项目评审，以及企业应用项目和您保留的框架与工作模板。符合资格的马来西亚申请者可接受 ${FACTS.scholarshipProvider} 奖学金择优评估；名额有限，须经个别评估与书面批准，奖学金金额及应付费用个别以书面确认。奖学金并非自动授予。`,
    sections: [
      ["课程费用包含什么", `无论支付标准费用或获得奖学金，课程均包括 ${FACTS.durationMonths} 个月内 ${FACTS.trainingDays} 个培训日、共 ${FACTS.liveSessions} 次导师带领的研习课、一对一辅导与项目评审，以及企业应用项目和您保留的框架与工作模板。${INCLUSIONS_CMI_CERTIFICATE_ZH} ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH} 此课程并非 MQA 认证的学术学位或受监管资格。Chartered Manager 是独立可选的 CMI 路线，由 CMI 认定，不包含在已公布课程费用内。`],
      ["HRD Corp", `雇主提出申请，HRD Corp 决定。${HRD_CORP_CLAIM_ZH}`],
      ["马来西亚申请者费用", `标准费用为 ${FACTS.priceStd}，由课程订定。符合资格的马来西亚申请者可接受 ${FACTS.scholarshipProvider} 奖学金择优评估；名额有限，须经个别评估与书面批准。任何奖学金金额及应付费用均会个别以书面确认；奖学金并非自动授予。`],
      ["个人付款", "课程团队在付款前向个人学员提供书面分期表，列明每期金额及到期日。付款方式包括 RHB 信用卡 6 至 12 个月分期，以及 ABC 的 4 个月付款计划。交通与住宿费用不包括在课程费用内。"],
      ["退款安排", REFUND_TERMS_ZH],
      ["咨询前须知", `索取信息或申请奖学金资格评估均不收取任何费用。${ENQUIRY_COMMITMENT_ZH}`],
    ],
  },
  intakes: {
    eyebrow: "2026 英语及华语班开课日期",
    title: "选择最适合您工作日程的班次",
    intro: `每个班次均在 ${FACTS.liveSessions} 个指定周末完成 ${FACTS.liveSessions} 次导师带领的研习课。课程团队会在回复咨询时确认班次名额。`,
    sections: [
      ...INTAKES.map((intake) => [
        `${intake.language === "Mandarin" ? "华语" : "英语"} ${intake.co}`,
        `第一次：${intake.s1}；第二次：${intake.s2}；第三次：${intake.s3}。${intake.days === "Sat–Sun" ? "星期六至星期日" : "星期五至星期六"}，上午 9 时至下午 6 时。`,
      ] as const),
      ["进一步了解", "您可预约通话、线上说明会、在双方同意的地点面谈，或先收取资料。以上为已公布的 2026 年日期；如 ABC 更改日期，已报名学员将收到书面替代日期。"],
    ],
  },
  faculty: {
    eyebrow: "导师与企业教练",
    title: "导师看重思路，不只看结果",
    intro: "课程导师来自企业领导、顾问、制造、财务、人才与转型领域，经验丰富。他们看重您的思路，不只看结果。真正的领导是仆人式领导（servant leadership）：以所服务的人来衡量，其中包括日后落实计划的团队。",
    sections: [
      ["实践经验", "导师团队包括曾负责大型制造、上市公司财务、组织转型、金融政策、人才发展及企业咨询的专业人士。"],
      ["个人辅导", "课程把框架应用在您自己的企业问题上。导师审视您计划背后的思路，不只看最终结果。"],
      ["当前导师团队", FACULTY.map((faculty) => `${faculty.n}（${faculty.focus}）`).join("；")],
      ["该届导师安排", "ABC 在第一次课程前发出的说明中，列明该届导师、履历及负责模块。"],
    ],
  },
} as const;

export const FAQS_ZH = [
  ["课程期间，我的工作会有什么改变？", `您把自己职责范围内的一项真实业务课题，在 ${FACTS.durationMonths} 个月内转化为一份书面行动方案，当中列明决定、行动、负责人及衡量指标，并由导师评审。课程的框架与工作模板会留在您手上。`],
  ["全职工作期间可以兼顾课程吗？", `可以。您按已公布日期完成 ${FACTS.trainingDays} 个培训日，分 ${FACTS.liveSessions} 次导师带领的研习课进行；企业应用项目在两次研习课之间、于您自己的机构内进行，您全程留任原有职务。`],
  ["课程结束时我会拿到什么，又不会拿到什么？", `成功完成课程的学员将获颁 Executive MBA 课程的 CMI 认可证书（CMI Certificate of Recognition）。${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH} Chartered Manager 是独立可选的 CMI 路线，由 CMI 决定，不包含在本课程或已公布费用内。`],
  ["这是高管教育课程还是学术 MBA 学位？", `这是面向未来商业领导力、由 CMI 颁发并认可的 Executive MBA。${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_ZH} 课程为期 ${FACTS.durationMonths} 个月，属于专业发展及高管教育课程，并非 MQA 认证的学术学位或受监管资格。`],
  ["这是 MQA 认证的学位吗？", "不是。这是由英国 CMI 认可的专业发展课程，并非 MQA 认证的学术学位。"],
  ["课程费用是多少，如何以书面确认？", `标准费用为 ${FACTS.priceStd}。${FACTS.scholarshipProvider} 奖学金名额有限，仅择优授予符合资格的马来西亚申请者，须经评估与书面批准，任何奖学金金额及应付费用均会个别以书面确认；奖学金并非自动授予。`],
  ["谁决定雇主资助？", HRD_CORP_CLAIM_ZH],
  ["公司可以为创办人或高层团队报名吗？", "本课程面向高管及以上人员，包括高级经理、董事、企业主与创办人。若采用由雇主主导的 HRD Corp 资助，公司须已在 HRD Corp 注册、有可用征费（levy）余额，并在开课前提交申请。当公司确认该学员在其薪资名册内时，创办人或企业主亦可纳入。HRD Corp 决定资格与批准金额。"],
  ["CMI 如何确定 Chartered Manager 路线？", "CMI 目前公布 Full Assessment、CMI Fast Track 及 Apprenticeship 三条路线。Full Assessment 适用于持有管理、商业或领导力学位并具备三年管理经验，或在没有管理类资格的情况下具备至少五年管理经验的管理者。Fast Track 要求在五年内完成一项列明的 CMI 资格，并具备至少三年管理经验。本课程属于 CMI 认可（CMI Recognised），并非 CMI 资格，因此每位学员适用的路线须由 CMI 确认。"],
  ["如果无法出席某次课程怎么办？", "请在课程开始前联系课程团队。ABC 将以书面方式确认指定视频或指定后续届别的补课安排。"],
  ["退款条款是什么？", REFUND_TERMS_ZH],
  ["课程适合谁？", PROGRAMME_AUDIENCE_ZH],
  ["如何进一步了解？", "您可预约电话交谈、参加线上说明会、约定地点面谈，或先索取课程资料。课程团队会按您的选择联系；这不等于录取或付款承诺。"],
] as const;
