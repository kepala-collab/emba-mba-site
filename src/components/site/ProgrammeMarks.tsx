import Image from "next/image";

type ProgrammeMarksProps = {
  lang?: "en" | "zh";
  centered?: boolean;
  labelled?: boolean;
};

const COPY = {
  en: {
    group: "Programme recognition and funding marks",
    cmiAlt: "Chartered Management Institute compact logo",
    cmi: "CMI (UK) Endorsed and Recognised",
    hrdAlt: "Official HRD Corp Claimable logo",
    hrd: "HRD Corp Claimable · employer approval applies",
  },
  zh: {
    group: "课程认可与雇主资助标志",
    cmiAlt: "英国特许管理协会 CMI 官方标志",
    cmi: "CMI（英国）背书及认可",
    hrdAlt: "HRD Corp Claimable 官方标志",
    hrd: "HRD Corp 可申请资助 · 以雇主申请及审批为准",
  },
} as const;

export default function ProgrammeMarks({ lang = "en", centered = false, labelled = false }: ProgrammeMarksProps) {
  const copy = COPY[lang];
  return (
    <div className={`programme-marks${centered ? " is-centered" : ""}${labelled ? " is-labelled" : ""}`} aria-label={copy.group}>
      <div className="programme-mark programme-mark-cmi">
        <Image src="/brand/cmi-logo-official.svg" alt={copy.cmiAlt} width={96} height={66} />
        {labelled && <span>{copy.cmi}</span>}
      </div>
      <div className="programme-mark programme-mark-hrd">
        <Image src="/brand/hrdcorp-claimable-official.png" alt={copy.hrdAlt} width={82} height={82} sizes="82px" />
        {labelled && <span>{copy.hrd}</span>}
      </div>
    </div>
  );
}
