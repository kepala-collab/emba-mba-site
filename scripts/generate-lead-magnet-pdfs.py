from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, KeepTogether, PageBreak, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#102B52")
BLUE = colors.HexColor("#1B5FD1")
PALE = colors.HexColor("#EEF5FF")
INK = colors.HexColor("#1E3658")
MUTED = colors.HexColor("#526A89")
LINE = colors.HexColor("#D6E2F2")
RED = colors.HexColor("#E6374A")
EMAIL = "support@futurereadymba.com"
PHONE = "+60 12-981 8533"
SITE = "futurereadymba.com"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Kicker", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=BLUE, spaceAfter=7, tracking=1.3))
styles.add(ParagraphStyle(name="TitleLead", parent=styles["Title"], fontName="Times-Bold", fontSize=29, leading=33, textColor=NAVY, spaceAfter=12))
styles.add(ParagraphStyle(name="H1", parent=styles["Heading1"], fontName="Times-Bold", fontSize=20, leading=24, textColor=NAVY, spaceBefore=4, spaceAfter=10))
styles.add(ParagraphStyle(name="H2", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=12, leading=16, textColor=NAVY, spaceBefore=8, spaceAfter=5))
styles.add(ParagraphStyle(name="BodyLead", parent=styles["BodyText"], fontName="Helvetica", fontSize=12, leading=18, textColor=INK, spaceAfter=12))
styles.add(ParagraphStyle(name="Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.6, leading=14.2, textColor=INK, spaceAfter=7))
styles.add(ParagraphStyle(name="Small", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.8, leading=10.5, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="CardTitle", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=NAVY, spaceAfter=4))

def P(text, style="Body"):
    return Paragraph(text, styles[style])

def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 19 * mm, width, 19 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 10)
    canvas.drawString(17 * mm, height - 11.5 * mm, "FUTURE READY EXECUTIVE MBA")
    canvas.setFont("Helvetica", 7.5)
    canvas.drawRightString(width - 17 * mm, height - 11.5 * mm, "RIGHT DOTS RESOURCES  |  PROGRAMME INFORMATION")
    canvas.setStrokeColor(LINE)
    canvas.line(17 * mm, 14 * mm, width - 17 * mm, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(17 * mm, 8.5 * mm, f"{EMAIL}  |  {PHONE}  |  {SITE}")
    canvas.drawRightString(width - 17 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.linkURL(f"mailto:{EMAIL}", (17 * mm, 6 * mm, 65 * mm, 12 * mm), relative=0)
    canvas.restoreState()

def card(title, body, width=174*mm):
    table = Table([[P(f"{title}", "CardTitle"), P(body, "Body")]], colWidths=[48*mm, width - 48*mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), PALE), ("BOX", (0,0), (-1,-1), .6, LINE),
        ("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 10),
        ("RIGHTPADDING", (0,0), (-1,-1), 10), ("TOPPADDING", (0,0), (-1,-1), 9), ("BOTTOMPADDING", (0,0), (-1,-1), 9),
    ]))
    return table

def cta(label):
    table = Table([[P(f'<link href="mailto:{EMAIL}"><font color="#FFFFFF">{label}</font></link>', "CardTitle")]], colWidths=[174*mm])
    table.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), NAVY), ("BOX", (0,0), (-1,-1), .4, NAVY), ("LEFTPADDING", (0,0), (-1,-1), 12), ("RIGHTPADDING", (0,0), (-1,-1), 12), ("TOPPADDING", (0,0), (-1,-1), 10), ("BOTTOMPADDING", (0,0), (-1,-1), 10), ("TEXTCOLOR", (0,0), (-1,-1), colors.white)]))
    return table

def notice(text):
    table = Table([[P(text, "Small")]], colWidths=[174*mm])
    table.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), colors.HexColor("#F8FAFC")), ("BOX", (0,0), (-1,-1), .5, LINE), ("LEFTPADDING", (0,0), (-1,-1), 10), ("RIGHTPADDING", (0,0), (-1,-1), 9), ("TOPPADDING", (0,0), (-1,-1), 8), ("BOTTOMPADDING", (0,0), (-1,-1), 8)]))
    return table

def document(filename, story):
    doc = BaseDocTemplate(str(OUT / filename), pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=26*mm, bottomMargin=21*mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([__import__("reportlab.platypus", fromlist=["PageTemplate"]).PageTemplate(id="letterhead", frames=[frame], onPage=header_footer)])
    doc.build(story)

def cover(kicker, title, lead, promise, detail):
    return [Spacer(1, 30*mm), P(kicker, "Kicker"), P(title, "TitleLead"), P(lead, "BodyLead"), Spacer(1, 8*mm), card("What you will get", promise), Spacer(1, 10*mm), P(detail, "Body"), Spacer(1, 15*mm), cta(f"Email the programme team: {EMAIL}"), Spacer(1, 6*mm), notice("Future Ready Executive MBA is a professional development programme. It is not an MQA-accredited academic degree or a regulated qualification.") , PageBreak()]

decision = cover("A PRIVATE DECISION GUIDE", "Is This Programme Right for You?", "A plain-English guide for Malaysian managers who want to make a better next move - without stepping away from work.", "A clear view of the programme, the CMI-recognised certificate stage, the separate Chartered Manager route, time commitment and the questions to ask before you enquire.", "Use this guide to decide whether the programme fits the responsibility you carry now - not just the title you would like next.")
decision += [P("Start with the work you already carry.", "H1"), P("The programme is designed for business owners, directors, general managers and senior managers who need a more structured way to examine decisions, test assumptions and move an important business issue forward."), card("Months 1-3", "Six training days across three monthly sessions, coaching and an applied business project lead to the CMI-recognised Executive MBA programme certificate."), Spacer(1, 6*mm), card("Months 4-6", "Eligible participants receive preparation support for CMI's separate Chartered Manager assessment. CMI decides the route, eligibility and outcome. CMgr MCMI is not automatic."), Spacer(1, 8*mm), P("A good fit if you:", "H2"), P("• already make decisions that affect people, operations or business performance<br/>• can bring a live business challenge into the learning<br/>• want applied management development rather than a traditional academic MBA<br/>• can protect time for three scheduled monthly sessions and project work"), Spacer(1, 4*mm), notice("What it is not: a university degree, an MQA-accredited academic MBA, a promise of promotion, or an automatic Chartered Manager award."), PageBreak()]
decision += [P("Ask these before you apply.", "H1"), card("1. Is the work relevant?", "Choose a current decision, constraint or opportunity that matters to your role or business."), Spacer(1, 4*mm), card("2. Is the schedule workable?", "The certificate stage uses three monthly sessions. Review the published cohort dates against your responsibilities."), Spacer(1, 4*mm), card("3. Do you need employer support?", "If funding or sponsorship matters, ask for the employer conversation and HRD Corp briefing before your company applies."), Spacer(1, 4*mm), card("4. Are you evaluating scholarship eligibility?", "The RM5,000.00 LIFE Innoversity scholarship is for eligible Malaysian applicants only, subject to availability, assessment and written approval."), Spacer(1, 9*mm), cta(f"Request a no-obligation programme-fit conversation: {EMAIL}"), Spacer(1, 6*mm), notice("Published Malaysian standard fee: RM10,000.00. An approved scholarship recipient pays RM5,000.00. This guide does not constitute an offer of admission, scholarship approval or payment commitment.")]
document("future-ready-decision-guide.pdf", decision)

employer = cover("EMPLOYER DECISION BRIEF", "Employer Sponsorship & HRD Corp Funding Briefing", "A concise internal briefing for a manager, HR team or learning leader evaluating practical management development.", "A clear employer-led funding process, the programme's applied format and a short internal case you can adapt for a conversation with your organisation.", "The objective is not a generic attendance record. It is a structured programme built around a live business issue and an applied project.")
employer += [P("What an employer is evaluating.", "H1"), P("A practical management-development decision should connect the participant's responsibility, the business issue they will work on and the capability the organisation needs strengthened."), card("Applied work", "Participants bring a current business challenge, use management frameworks to test assumptions and options, and complete an applied business project."), Spacer(1, 5*mm), card("Defined time commitment", "The programme runs for three months across six training days and three monthly sessions."), Spacer(1, 5*mm), card("Professional recognition", "Successful participants receive the CMI Certificate of Recognition for the programme. It is not an academic MBA degree or regulated qualification."), Spacer(1, 9*mm), P("Employer-led HRD Corp process", "H1"), P("1. Employer confirms its current eligibility and funding position.<br/>2. Programme team supplies the quotation, schedule, course content and trainer documents.<br/>3. Employer submits the application before training begins. HRD Corp decides eligibility and approved amount."), Spacer(1, 7*mm), notice("Funding is not automatic. The employer and HRD Corp control eligibility, timing and the approved amount."), PageBreak()]
employer += [P("A short internal conversation starter.", "H1"), card("The capability need", "The manager is responsible for [team / business unit / project] and needs a more structured method for evaluating complex decisions and leading implementation."), Spacer(1, 4*mm), card("The applied outcome", "The participant will work on [current business challenge] and produce an applied business project that can be discussed with the organisation."), Spacer(1, 4*mm), card("The practical format", "Six facilitated training days across three monthly sessions, coaching and applied work designed around ongoing employment."), Spacer(1, 4*mm), card("The funding question", "Can the organisation confirm whether sponsorship or an employer-led HRD Corp application should be explored before the selected intake?"), Spacer(1, 9*mm), cta(f"Request the employer document pack: {EMAIL}"), Spacer(1, 6*mm), notice("Right Dots Resources is the authorised Global and Local Programme Partner for marketing, programme enquiries, pricing and enrolment coordination. The applicable written proposal controls delivery, pricing and terms.")]
document("future-ready-employer-funding-brief.pdf", employer)

scholarship = cover("ELIGIBILITY INFORMATION", "Scholarship & Eligibility Self-Assessment", "Use this before you ask about the published scholarship. It helps you prepare the right questions; it is not an approval form.", "The standard fee, the conditional RM5,000.00 LIFE Innoversity scholarship, questions to prepare and the next step for an eligibility conversation.", "Clear terms protect everyone: eligibility is assessed, availability matters and an award exists only when it has been confirmed in writing.")
scholarship += [P("The published Malaysian fee.", "H1"), card("Standard programme fee", "RM10,000.00"), Spacer(1, 4*mm), card("LIFE Innoversity scholarship", "RM5,000.00 for eligible Malaysian applicants, subject to availability, assessment and written approval."), Spacer(1, 4*mm), card("Approved recipient pays", "RM5,000.00"), Spacer(1, 9*mm), P("The scholarship is not:", "H2"), P("• automatic for every Malaysian participant<br/>• a discount code or a guarantee<br/>• a replacement for a written fee schedule<br/>• an HRD Corp decision"), Spacer(1, 7*mm), notice("There is no fee to request information or ask the programme team about the assessment process."), PageBreak()]
scholarship += [P("Prepare for an eligibility conversation.", "H1"), P("Use these prompts to organise the facts you want to discuss. They are not selection criteria and do not predict an outcome."), card("Your programme goal", "What responsibility, business issue or management capability are you looking to strengthen?"), Spacer(1, 4*mm), card("Your intended cohort", "Which published English or Mandarin cohort works with your work commitments?"), Spacer(1, 4*mm), card("Your funding route", "Are you self-funding, seeking employer sponsorship, or asking your employer to explore HRD Corp funding?"), Spacer(1, 4*mm), card("Your next question", "What would you need clarified about programme fit, dates, fee, scholarship conditions or the separate Chartered Manager route before deciding?"), Spacer(1, 9*mm), cta(f"Request an eligibility conversation: {EMAIL}"), Spacer(1, 6*mm), notice("Future Ready Executive MBA is a professional development programme approved and endorsed against CMI's Professional Standard. Chartered Manager assessment, membership, fees and awards are controlled separately by CMI.")]
document("future-ready-scholarship-eligibility.pdf", scholarship)

print("Created:")
for path in sorted(OUT.glob("future-ready-*.pdf")):
    print(path)
