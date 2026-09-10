# R2 follow-ups collected from reviewer hand-backs (resolve before the release gate)

- [x] ExecutiveDiagnostic result names the PDF "Progression Guide" in all three languages; it must be "the 2026 programme guide" (spec section 10 naming). Fix in ExecutiveDiagnostic.tsx en/ms/zh.
- [x] A shared surface repeats "Free" more than once (see R2-components-review-zh.json); reduce to at most one fine-print "Free PDF" per surface in all three languages.
- [ ] Breadcrumb and nav labels for the routes /resources/advancement-brief and /insights/advancement-question use "advancement"/"progression"/晋升 as labels; spec section 10 bans those as labels. Routes stay; labels change in the resources and insights units in all three languages, and RouteBreadcrumbs must follow.
- [ ] ProgrammeIntroduction has no call site; when a page unit embeds it, pass lang.
- [ ] ProgrammeComparison ms/zh comparison-scope line is a local transcreation; promote to a shared constant when the executive-mba-vs-mba unit runs.
- [ ] content.ts PROGRAMME_POSITIONING_MS half-translates the programme name; owner decision: the programme name stays in English in all three languages ("Executive MBA on Future Ready Business Leadership"). Fix at source in the cleanup unit; keep the locked "dianugerahkan dan disokong oleh CMI" clause.
- [ ] content-ms.ts HRD Corp label uses "diterajui" while CtaSection uses "dipohon"; unify at source to the employer-applies wording ("dipohon oleh majikan, ditentukan oleh HRD Corp").
- [ ] content-ms.ts still carries "laluan pilihan CMI" in several places; replace with "laluan Chartered Manager yang berasingan dan tidak wajib, ditentukan oleh CMI" at source.
- [ ] Malay fees link label "halaman pelaburan" (investment page) reads as investment framing; use "halaman yuran". Fix wherever it appears in ms pages and content-ms.ts.
