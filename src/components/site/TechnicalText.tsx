import { Fragment } from "react";

const TECHNICAL_TERM_PATTERN = /(CMgr MCMI|CMI \(UK\)|CMI（UK）|CMI（英国）|fCMgr|CMgr|MCMI|M\(CMI\)|HRD Corp|HRDC|CMI|MQA|LMS|MDP|MBA|AI|CEO|VAT)/g;
const TECHNICAL_TERM_EXACT = /^(CMgr MCMI|CMI \(UK\)|CMI（UK）|CMI（英国）|fCMgr|CMgr|MCMI|M\(CMI\)|HRD Corp|HRDC|CMI|MQA|LMS|MDP|MBA|AI|CEO|VAT)$/;

export default function TechnicalText({ children }: Readonly<{ children: string }>) {
  return children.split(TECHNICAL_TERM_PATTERN).map((part, index) =>
    TECHNICAL_TERM_EXACT.test(part) ? (
      <span className="technical-term" key={`${part}-${index}`}>{part}</span>
    ) : (
      <Fragment key={`${part}-${index}`}>{part}</Fragment>
    ),
  );
}
