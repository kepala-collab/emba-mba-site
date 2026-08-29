from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)

# Shared design language with generate-working-manager-guides.py (Arial + Georgia).
FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("GSans", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("GSansBold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFont(TTFont("GSerif", str(FONT_DIR / "georgia.ttf")))
pdfmetrics.registerFont(TTFont("GSerifBold", str(FONT_DIR / "georgiab.ttf")))

NAVY = colors.HexColor("#102B52")
BLUE = colors.HexColor("#1B5FD1")
GOLD = colors.HexColor("#CF9B3C")
PALE = colors.HexColor("#EEF5FF")
INK = colors.HexColor("#1E3658")
MUTED = colors.HexColor("#526A89")
LINE = colors.HexColor("#D6E2F2")
EMAIL = "support@futurereadymba.com"
PHONE = "+60 12-981 8533"
SITE = "futurereadymba.com"

S = {
    "kicker": ParagraphStyle("kicker", fontName="GSansBold", fontSize=8, leading=11, textColor=BLUE, spaceAfter=8),
    "title": ParagraphStyle("title", fontName="GSerifBold", fontSize=26, leading=32, textColor=NAVY, spaceAfter=11),
    "lead": ParagraphStyle("lead", fontName="GSans", fontSize=11.5, leading=18, textColor=INK, spaceAfter=10),
    "h1": ParagraphStyle("h1", fontName="GSerifBold", fontSize=19, leading=25, textColor=NAVY, spaceBefore=2, spaceAfter=8),
    "h2": ParagraphStyle("h2", fontName="GSansBold", fontSize=11, leading=16, textColor=NAVY, spaceBefore=4, spaceAfter=4),
    "body": ParagraphStyle("body", fontName="GSans", fontSize=9.8, leading=15.2, textColor=INK, spaceAfter=7),
    "small": ParagraphStyle("small", fontName="GSans", fontSize=7.7, leading=11, textColor=MUTED),
    "fact": ParagraphStyle("fact", fontName="GSerifBold", fontSize=18, leading=22, textColor=NAVY, alignment=1),
    "fact_label": ParagraphStyle("fact_label", fontName="GSans", fontSize=7.6, leading=10, textColor=MUTED, alignment=1),
    "card_title": ParagraphStyle("card_title", fontName="GSansBold", fontSize=10.3, leading=13, textColor=NAVY, spaceAfter=3),
}


def P(text, style="body"):
    return Paragraph(text, S[style])


def page_chrome(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 18 * mm, width, 18 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont("GSansBold", 9)
    canvas.drawString(17 * mm, height - 11 * mm, "FUTURE READY EXECUTIVE MBA")
    canvas.setFont("GSans", 7.3)
    canvas.setFillColor(colors.HexColor("#AFC6E8"))
    canvas.drawRightString(width - 17 * mm, height - 11 * mm, "RIGHT DOTS RESOURCES  |  PROGRAMME INFORMATION")
    canvas.setFillColor(GOLD)
    canvas.rect(17 * mm, height - 14.5 * mm, 18 * mm, 1.2 * mm, stroke=0, fill=1)
    canvas.setStrokeColor(LINE)
    canvas.line(17 * mm, 14 * mm, width - 17 * mm, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("GSans", 7.3)
    canvas.drawString(17 * mm, 8.5 * mm, f"{EMAIL}  |  {PHONE}  |  {SITE}")
    canvas.drawRightString(width - 17 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.linkURL(f"mailto:{EMAIL}", (17 * mm, 6 * mm, 70 * mm, 12 * mm), relative=0)
    canvas.restoreState()


def fact_band():
    facts = [("6", "months"), ("6", "training days"), ("3", "scheduled sessions"), ("1", "applied project")]
    cells = [[Paragraph(v, S["fact"]), Paragraph(l, S["fact_label"])] for v, l in facts]
    t = Table([cells], colWidths=[43.5 * mm] * 4)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def card(title, body):
    t = Table([[P(title, "card_title"), P(body, "body")]], colWidths=[47 * mm, 127 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE), ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return t


def cta(label):
    t = Table([[P(f'<link href="mailto:{EMAIL}"><font color="#FFFFFF">{label}</font></link>', "card_title")]], colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 12), ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 11), ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
    ]))
    return t


def notice(text):
    t = Table([[P(text, "small")]], colWidths=[174 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F6F9FE")), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def document(filename, story):
    doc = BaseDocTemplate(str(OUT / filename), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=25 * mm, bottomMargin=21 * mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="letterhead", frames=[frame], onPage=page_chrome)])
    doc.build(story)


def cover(kicker, title, lead, promise, subhead, detail):
    return [
        Spacer(1, 20 * mm),
        P(kicker, "kicker"), P(title, "title"), P(lead, "lead"),
        Spacer(1, 6 * mm), fact_band(), Spacer(1, 9 * mm),
        card("What you'll get", promise), Spacer(1, 9 * mm),
        P(subhead, "h1"), P(detail, "body"),
        Spacer(1, 9 * mm), cta(f"Talk to the programme team — {EMAIL}"), Spacer(1, 5 * mm),
        notice("The Future Ready Executive MBA is a professional development programme recognised by CMI (UK). It is not an MQA-accredited academic degree or a regulated qualification."),
        PageBreak(),
    ]


# ---------------------------------------------------------------- Decision guide
decision = cover(
    "A PRIVATE DECISION GUIDE",
    "Is this programme right for you?",
    "A plain-English guide for Malaysian managers who want a better next move — without stepping away from work.",
    "A clear view of the programme, the CMI-recognised certificate, the separate Chartered Manager route, the real time commitment, and the questions worth asking before you enquire.",
    "Made for the decision you're facing now.",
    "Use this guide to judge whether the programme fits the responsibility you already carry — not just the title you would like next. It sets out the programme shape, what completion gives you, the time it needs, and how to prepare.",
)
decision += [
    P("Start with the work you already carry.", "h1"),
    P("The programme is built for business owners, directors, general managers and senior managers who need a more structured way to examine decisions, test assumptions and move an important business issue forward — using their own live challenge as the material."),
    Spacer(1, 3 * mm),
    card("Six-month programme", "Six training days across three scheduled sessions, coaching and an applied project, completed across the full six months while you keep working."),
    Spacer(1, 4 * mm),
    card("On completion", "Participants who meet the programme requirements receive the CMI-recognised Executive MBA programme certificate. Chartered Manager remains a separate, optional CMI route."),
    Spacer(1, 7 * mm),
    P("A good fit if you", "h2"),
    P("•&nbsp; already make decisions that affect people, operations or business performance<br/>•&nbsp; can bring a live business challenge into the learning<br/>•&nbsp; want applied management development rather than a traditional academic MBA<br/>•&nbsp; can protect time for three scheduled sessions, coaching and project work across six months"),
    Spacer(1, 5 * mm),
    notice("What it is not: a university degree, an MQA-accredited academic MBA, a promise of promotion, or an automatic Chartered Manager award."),
    PageBreak(),
    P("Four questions to ask before you enquire.", "h1"),
    card("1.  Is the work relevant?", "Pick a current decision, constraint or opportunity that genuinely matters to your role or business — that becomes your project."),
    Spacer(1, 4 * mm),
    card("2.  Is the schedule workable?", "The six months run across three scheduled sessions plus coaching and project work. Check the published cohort dates against your responsibilities."),
    Spacer(1, 4 * mm),
    card("3.  Do you need employer support?", "If funding or sponsorship matters, ask for the employer conversation and HRD Corp briefing before your company applies."),
    Spacer(1, 4 * mm),
    card("4.  Are you exploring the scholarship?", "Eligible Malaysian applicants may be considered for a LIFE Innoversity scholarship, subject to availability, assessment and written approval."),
    Spacer(1, 8 * mm),
    cta(f"Request a no-obligation programme-fit conversation — {EMAIL}"),
    Spacer(1, 5 * mm),
    notice("Published Malaysian standard fee: RM10,000.00. Any scholarship award and resulting participant fee are confirmed individually in writing. This guide is not an offer of admission, scholarship approval or payment commitment."),
]
document("future-ready-decision-guide.pdf", decision)

# ---------------------------------------------------------------- Employer brief
employer = cover(
    "EMPLOYER DECISION BRIEF",
    "Employer sponsorship & HRD Corp funding.",
    "A concise internal briefing for a manager, HR team or learning leader evaluating practical management development.",
    "A clear employer-led funding process, the programme's applied format, and a short internal case you can adapt for a conversation with your organisation.",
    "The outcome is applied, not just attendance.",
    "This is a structured programme built around a live business issue and an applied project — so the organisation sees capability strengthened on its own work, not a generic attendance record.",
)
employer += [
    P("What an employer is evaluating.", "h1"),
    P("A practical management-development decision connects three things: the participant's responsibility, the business issue they will work on, and the capability the organisation needs strengthened."),
    Spacer(1, 3 * mm),
    card("Applied work", "Participants bring a current business challenge, use management frameworks to test assumptions and options, and complete an applied business project."),
    Spacer(1, 4 * mm),
    card("Defined commitment", "Six months across six training days, three scheduled sessions, coaching and applied project work."),
    Spacer(1, 4 * mm),
    card("Professional recognition", "Successful participants receive the CMI Certificate of Recognition for the programme — not an academic MBA degree or regulated qualification."),
    Spacer(1, 6 * mm),
    P("The employer-led HRD Corp process", "h2"),
    P("1.&nbsp; Employer confirms its current eligibility and levy position.<br/>2.&nbsp; Programme team supplies the quotation, schedule, course content and trainer documents.<br/>3.&nbsp; Employer submits the application before training begins. HRD Corp decides eligibility and the approved amount."),
    Spacer(1, 5 * mm),
    notice("Funding is not automatic. The employer and HRD Corp control eligibility, timing and the approved amount."),
    PageBreak(),
    P("A short internal conversation starter.", "h1"),
    card("The capability need", "The manager is responsible for [team / business unit / project] and needs a more structured method for evaluating complex decisions and leading implementation."),
    Spacer(1, 4 * mm),
    card("The applied outcome", "The participant will work on [current business challenge] and produce an applied business project that can be discussed with the organisation."),
    Spacer(1, 4 * mm),
    card("The format", "Six facilitated training days across three scheduled sessions, coaching and applied work across the six-month programme."),
    Spacer(1, 4 * mm),
    card("The funding question", "Should sponsorship, or an employer-led HRD Corp application, be explored before the selected intake?"),
    Spacer(1, 8 * mm),
    cta(f"Request the employer document pack — {EMAIL}"),
    Spacer(1, 5 * mm),
    notice("Right Dots Resources is the authorised programme partner for marketing, enquiries, pricing and enrolment coordination. The applicable written proposal controls delivery, pricing and terms."),
]
document("future-ready-employer-funding-brief.pdf", employer)

# ---------------------------------------------------------------- Scholarship
scholarship = cover(
    "ELIGIBILITY INFORMATION",
    "Scholarship & eligibility self-check.",
    "Use this before you ask about the scholarship. It helps you prepare the right questions — it is not an application or approval form.",
    "The standard fee, the scholarship assessment conditions, the questions worth preparing, and the next step for an eligibility conversation.",
    "Clear terms protect everyone.",
    "Eligibility is assessed, availability matters, and an award exists only once it has been confirmed in writing. Knowing that up front makes your conversation with the programme team faster and clearer.",
)
scholarship += [
    P("The published Malaysian fee.", "h1"),
    card("Standard programme fee", "RM10,000.00"),
    Spacer(1, 4 * mm),
    card("LIFE Innoversity scholarship", "Eligible Malaysian applicants may be considered, subject to availability, assessment and written approval."),
    Spacer(1, 4 * mm),
    card("Award & participant fee", "Confirmed individually in writing after assessment."),
    Spacer(1, 7 * mm),
    P("The scholarship is not", "h2"),
    P("•&nbsp; automatic for every Malaysian participant<br/>•&nbsp; a discount code or a guarantee<br/>•&nbsp; a replacement for a written fee schedule<br/>•&nbsp; an HRD Corp decision"),
    Spacer(1, 5 * mm),
    notice("There is no fee to request information or to ask the programme team about the assessment process."),
    PageBreak(),
    P("Prepare for an eligibility conversation.", "h1"),
    P("Use these prompts to organise the facts you want to discuss. They are not selection criteria and do not predict an outcome."),
    Spacer(1, 3 * mm),
    card("Your programme goal", "What responsibility, business issue or management capability are you looking to strengthen?"),
    Spacer(1, 4 * mm),
    card("Your intended cohort", "Which published English or Mandarin cohort works with your commitments?"),
    Spacer(1, 4 * mm),
    card("Your funding route", "Self-funding, employer sponsorship, or asking your employer to explore HRD Corp funding?"),
    Spacer(1, 4 * mm),
    card("Your next question", "What would you need clarified about fit, dates, fee, scholarship conditions or the separate Chartered Manager route before deciding?"),
    Spacer(1, 8 * mm),
    cta(f"Request an eligibility conversation — {EMAIL}"),
    Spacer(1, 5 * mm),
    notice("The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. Chartered Manager assessment, membership, fees and awards are controlled separately by CMI."),
]
document("future-ready-scholarship-eligibility.pdf", scholarship)

print("Created:")
for path in sorted(OUT.glob("future-ready-*.pdf")):
    if "-zh" not in path.name and "-ms" not in path.name:
        print(" ", path.name)
