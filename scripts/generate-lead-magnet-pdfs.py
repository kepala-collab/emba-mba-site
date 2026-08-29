"""Deep, distinct lead-magnet guides in English, Malay and Chinese.

Owns: future-ready-decision-guide, future-ready-employer-funding-brief,
future-ready-scholarship-eligibility (each in .pdf / -ms.pdf / -zh.pdf).
Shared visual system with generate-working-manager-guides.py (fact band,
gold header, Arial/Georgia + SimHei). Each document has distinct content.
"""
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageBreak, PageTemplate, Paragraph, Spacer, Table, TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("GSans", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("GSansBold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFont(TTFont("GSerif", str(FONT_DIR / "georgia.ttf")))
pdfmetrics.registerFont(TTFont("GSerifBold", str(FONT_DIR / "georgiab.ttf")))
pdfmetrics.registerFont(TTFont("GZh", str(FONT_DIR / "simhei.ttf")))

NAVY = colors.HexColor("#102B52"); BLUE = colors.HexColor("#1B5FD1"); GOLD = colors.HexColor("#CF9B3C")
PALE = colors.HexColor("#EEF5FF"); INK = colors.HexColor("#1E3658"); MUTED = colors.HexColor("#526A89")
LINE = colors.HexColor("#D6E2F2"); FAINT = colors.HexColor("#F6F9FE"); WHITE = colors.white
EMAIL = "support@futurereadymba.com"; PHONE = "+60 12-981 8533"; SITE = "futurereadymba.com"

FONTS = {
    "en": ("GSans", "GSansBold", "GSerifBold"),
    "ms": ("GSans", "GSansBold", "GSerifBold"),
    "zh": ("GZh", "GZh", "GZh"),
}

def styles(loc):
    sans, bold, serif = FONTS[loc]
    tsize = 25 if loc == "zh" else 26
    return {
        "kicker": ParagraphStyle("kicker", fontName=bold, fontSize=8, leading=11, textColor=BLUE, spaceAfter=8),
        "title": ParagraphStyle("title", fontName=serif, fontSize=tsize, leading=32, textColor=NAVY, spaceAfter=11),
        "lead": ParagraphStyle("lead", fontName=sans, fontSize=11.5, leading=18, textColor=INK, spaceAfter=10),
        "h1": ParagraphStyle("h1", fontName=serif, fontSize=18.5, leading=24, textColor=NAVY, spaceBefore=2, spaceAfter=8),
        "h2": ParagraphStyle("h2", fontName=bold, fontSize=11, leading=16, textColor=NAVY, spaceBefore=4, spaceAfter=4),
        "body": ParagraphStyle("body", fontName=sans, fontSize=9.8, leading=15.4, textColor=INK, spaceAfter=7),
        "small": ParagraphStyle("small", fontName=sans, fontSize=7.7, leading=11, textColor=MUTED),
        "fact": ParagraphStyle("fact", fontName=serif, fontSize=18, leading=22, textColor=NAVY, alignment=1),
        "fact_label": ParagraphStyle("fl", fontName=sans, fontSize=7.4, leading=10, textColor=MUTED, alignment=1),
        "card_title": ParagraphStyle("ct", fontName=bold, fontSize=10.2, leading=13, textColor=NAVY, spaceAfter=2),
        "th": ParagraphStyle("th", fontName=bold, fontSize=8.6, leading=12, textColor=WHITE),
        "td": ParagraphStyle("td", fontName=sans, fontSize=8.7, leading=12.4, textColor=INK),
        "td_muted": ParagraphStyle("tdm", fontName=sans, fontSize=8.7, leading=12.4, textColor=MUTED),
        "cta": ParagraphStyle("cta", fontName=bold, fontSize=10.2, leading=13, textColor=WHITE),
    }

FACT_LABELS = {
    "en": ("months", "training days", "scheduled sessions", "applied project"),
    "ms": ("bulan", "hari latihan", "sesi berjadual", "projek aplikasi"),
    "zh": ("个月", "培训日", "指定课程", "企业应用项目"),
}

def chrome(loc):
    def draw(canvas, doc):
        canvas.saveState()
        w, h = A4
        canvas.setFillColor(NAVY); canvas.rect(0, h - 18 * mm, w, 18 * mm, stroke=0, fill=1)
        canvas.setFillColor(WHITE); canvas.setFont("GSansBold", 9)
        canvas.drawString(17 * mm, h - 11 * mm, "FUTURE READY EXECUTIVE MBA")
        canvas.setFont("GSans", 7.3); canvas.setFillColor(colors.HexColor("#AFC6E8"))
        canvas.drawRightString(w - 17 * mm, h - 11 * mm, "RIGHT DOTS RESOURCES  |  PROGRAMME INFORMATION")
        canvas.setFillColor(GOLD); canvas.rect(17 * mm, h - 14.5 * mm, 18 * mm, 1.2 * mm, stroke=0, fill=1)
        canvas.setStrokeColor(LINE); canvas.line(17 * mm, 14 * mm, w - 17 * mm, 14 * mm)
        canvas.setFillColor(MUTED); canvas.setFont("GSans", 7.3)
        canvas.drawString(17 * mm, 8.5 * mm, f"{EMAIL}  |  {PHONE}  |  {SITE}")
        canvas.drawRightString(w - 17 * mm, 8.5 * mm, f"Page {doc.page}")
        canvas.linkURL(f"mailto:{EMAIL}", (17 * mm, 6 * mm, 70 * mm, 12 * mm), relative=0)
        canvas.restoreState()
    return draw

def fact_band(loc, s):
    labels = FACT_LABELS[loc]
    facts = [("6", labels[0]), ("6", labels[1]), ("3", labels[2]), ("1", labels[3])]
    cells = [[Paragraph(v, s["fact"]), Paragraph(l, s["fact_label"])] for v, l in facts]
    t = Table([cells], colWidths=[43.5 * mm] * 4)
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), PALE), ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)]))
    return t

def card(s, title, body):
    t = Table([[Paragraph(title, s["card_title"]), Paragraph(body, s["body"])]], colWidths=[47 * mm, 127 * mm])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), PALE), ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9)]))
    return t

def compare_table(s, header, rows):
    data = [[Paragraph(header[0], s["th"]), Paragraph(header[1], s["th"]), Paragraph(header[2], s["th"])]]
    for a, ours, theirs in rows:
        data.append([Paragraph(a, s["card_title"]), Paragraph(ours, s["td"]), Paragraph(theirs, s["td_muted"])])
    t = Table(data, colWidths=[34 * mm, 74 * mm, 66 * mm])
    style = [("BACKGROUND", (0, 0), (-1, 0), NAVY), ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, LINE), ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("BACKGROUND", (1, 1), (1, -1), PALE)]
    for i in range(1, len(data)):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (0, i), FAINT))
            style.append(("BACKGROUND", (2, i), (2, i), FAINT))
    t.setStyle(TableStyle(style))
    return t

def faq(s, items):
    out = []
    for q, a in items:
        out.append(Paragraph(q, s["h2"]))
        out.append(Paragraph(a, s["body"]))
        out.append(Spacer(1, 2 * mm))
    return out

def cta(s, label):
    t = Table([[Paragraph(f'<link href="mailto:{EMAIL}"><font color="#FFFFFF">{label}</font></link>', s["cta"])]], colWidths=[174 * mm])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12), ("TOPPADDING", (0, 0), (-1, -1), 11), ("BOTTOMPADDING", (0, 0), (-1, -1), 11)]))
    return t

def notice(s, text):
    t = Table([[Paragraph(text, s["small"])]], colWidths=[174 * mm])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), FAINT), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)]))
    return t

def render(loc, doc):
    s = styles(loc)
    story = [Spacer(1, 20 * mm), Paragraph(doc["kicker"], s["kicker"]), Paragraph(doc["title"], s["title"]),
             Paragraph(doc["lead"], s["lead"]), Spacer(1, 6 * mm), fact_band(loc, s), Spacer(1, 9 * mm),
             card(s, doc["promise_t"], doc["promise"]), Spacer(1, 9 * mm),
             Paragraph(doc["subhead"], s["h1"]), Paragraph(doc["intro"], s["body"]),
             Spacer(1, 8 * mm), cta(s, doc["cover_cta"]), Spacer(1, 5 * mm), notice(s, doc["cover_notice"]), PageBreak()]
    for block in doc["blocks"]:
        kind = block[0]
        if kind == "h1": story.append(Paragraph(block[1], s["h1"]))
        elif kind == "h2": story.append(Paragraph(block[1], s["h2"]))
        elif kind == "p": story.append(Paragraph(block[1], s["body"]))
        elif kind == "card": story.append(card(s, block[1], block[2])); story.append(Spacer(1, 4 * mm))
        elif kind == "table": story.append(compare_table(s, block[1], block[2]))
        elif kind == "faq": story.extend(faq(s, block[1]))
        elif kind == "notice": story.append(notice(s, block[1]))
        elif kind == "cta": story.append(cta(s, block[1]))
        elif kind == "sp": story.append(Spacer(1, block[1] * mm))
        elif kind == "pb": story.append(PageBreak())
    d = BaseDocTemplate(str(OUT / doc["filename"]), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=25 * mm, bottomMargin=21 * mm)
    frame = Frame(d.leftMargin, d.bottomMargin, d.width, d.height, id="main")
    d.addPageTemplates([PageTemplate(id="lh", frames=[frame], onPage=chrome(loc))])
    d.build(story)
    print("  ", doc["filename"])


# ===================================================================== CONTENT
DOCS = {}

# --------------------------------------------------------------- DECISION GUIDE
DOCS["decision"] = {
 "en": {
  "filename": "future-ready-decision-guide.pdf",
  "kicker": "A PRIVATE DECISION GUIDE",
  "title": "Is this programme right for you?",
  "lead": "A plain-English guide for Malaysian managers who want a better next move — without stepping away from work.",
  "promise_t": "What you'll get",
  "promise": "A clear view of the programme, the CMI-recognised certificate, the separate Chartered Manager route, the real time commitment, how it compares to an academic MBA, and the questions worth asking before you enquire.",
  "subhead": "Made for the decision you're facing now.",
  "intro": "Use this to judge whether the programme fits the responsibility you already carry — not just the title you would like next.",
  "cover_cta": f"Talk to the programme team — {EMAIL}",
  "cover_notice": "The Future Ready Executive MBA is a professional development programme recognised by CMI (UK). It is not an MQA-accredited academic degree or a regulated qualification.",
  "blocks": [
   ("h1", "What this programme actually is."),
   ("p", "This is applied management development for experienced, working managers. You bring a live business challenge, use structured frameworks to test your assumptions and options, and complete a real project on your own work — not a case study."),
   ("card", "Six-month shape", "Six training days across three scheduled sessions, coaching and an applied project, completed across the full six months while you keep working."),
   ("card", "On completion", "Participants who meet the requirements receive the CMI-recognised Executive MBA programme certificate. Chartered Manager remains a separate, optional CMI route."),
   ("card", "The method", "The F.A.S.T. approach and twelve management frameworks give you a repeatable way to define a problem, weigh options and turn a decision into an action plan."),
   ("h2", "A good fit if you"),
   ("p", "•&nbsp; already make decisions that affect people, operations or business performance<br/>•&nbsp; can bring a live business challenge into the learning<br/>•&nbsp; want applied development rather than a traditional academic MBA<br/>•&nbsp; can protect time for three scheduled sessions, coaching and project work across six months"),
   ("sp", 3),
   ("notice", "What it is not: a university degree, an MQA-accredited academic MBA, a promise of promotion, or an automatic Chartered Manager award."),
   ("pb",),
   ("h1", "This programme vs a traditional MBA."),
   ("table", ("Aspect", "This programme", "A traditional academic MBA"), [
     ("Time", "Six months, alongside full-time work", "Typically 18–24 months"),
     ("What you build", "Judgment on your own live business issue, plus reusable frameworks", "Academic theory, research and case analysis"),
     ("Assessment", "One applied business project — no exams, no thesis", "Assignments or exams, plus a dissertation"),
     ("Who teaches", "Industry practitioners, consultants and executive coaches", "Academic faculty and research supervisors"),
     ("Format", "Three scheduled sessions across six months; keep working", "A set academic calendar"),
     ("Credential", "CMI (UK)-recognised programme certificate", "An academic MBA degree"),
   ]),
   ("sp", 4),
   ("notice", "This table describes a reference academic MBA of 18–24 months built around academic modules and a dissertation. It does not describe every MBA programme."),
   ("pb",),
   ("h1", "Four questions to ask before you enquire."),
   ("card", "1.  Is the work relevant?", "Pick a current decision, constraint or opportunity that genuinely matters to your role or business — that becomes your project."),
   ("card", "2.  Is the schedule workable?", "The six months run across three scheduled sessions plus coaching and project work. Check the published cohort dates against your responsibilities."),
   ("card", "3.  Do you need employer support?", "If funding or sponsorship matters, ask for the employer conversation and the HRD Corp briefing before your company applies."),
   ("card", "4.  Are you exploring the scholarship?", "Eligible Malaysian applicants may be considered for a LIFE Innoversity scholarship, subject to availability, assessment and written approval."),
   ("sp", 5),
   ("h1", "Common questions."),
   ("faq", [
     ("Is this a real MBA?", "It is an Executive MBA programme recognised by CMI (UK) against CMI Professional Standards. It is professional development, not an MQA-accredited academic degree."),
     ("Will I become a Chartered Manager?", "Not automatically. On completion you receive the CMI certificate; Chartered Manager is a separate, optional CMI route with its own eligibility, assessment and fees, decided by CMI."),
     ("Can I do it while working full-time?", "Yes — it is built for working managers: three scheduled sessions across six months, with an applied project on your own work. No exams, no thesis."),
   ]),
   ("sp", 4),
   ("cta", f"Request a no-obligation programme-fit conversation — {EMAIL}"),
   ("sp", 4),
   ("notice", "Published Malaysian standard fee: RM10,000.00. Any scholarship award and resulting participant fee are confirmed individually in writing. This guide is not an offer of admission, scholarship approval or payment commitment."),
  ],
 },
 "ms": {
  "filename": "future-ready-decision-guide-ms.pdf",
  "kicker": "PANDUAN KEPUTUSAN PERIBADI",
  "title": "Adakah program ini sesuai untuk anda?",
  "lead": "Panduan ringkas untuk pengurus di Malaysia yang mahu membuat langkah seterusnya yang lebih baik — tanpa berhenti bekerja.",
  "promise_t": "Apa yang anda dapat",
  "promise": "Gambaran jelas tentang program, sijil yang diiktiraf CMI, laluan Chartered Manager yang berasingan, komitmen masa sebenar, perbandingan dengan MBA akademik, dan soalan yang wajar ditanya sebelum anda membuat pertanyaan.",
  "subhead": "Untuk keputusan yang anda hadapi sekarang.",
  "intro": "Gunakan panduan ini untuk menilai sama ada program sesuai dengan tanggungjawab yang anda pikul sekarang — bukan sekadar jawatan yang anda inginkan.",
  "cover_cta": f"Hubungi pasukan program — {EMAIL}",
  "cover_notice": "Future Ready Executive MBA ialah program pembangunan profesional yang diiktiraf oleh CMI (UK). Ia bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia.",
  "blocks": [
   ("h1", "Apa sebenarnya program ini."),
   ("p", "Ini ialah pembangunan pengurusan yang diguna pakai untuk pengurus berpengalaman yang sedang bekerja. Anda membawa cabaran perniagaan semasa, menggunakan rangka kerja berstruktur untuk menguji andaian dan pilihan, dan menyiapkan projek sebenar berdasarkan kerja anda sendiri — bukan kajian kes."),
   ("card", "Bentuk enam bulan", "Enam hari latihan dalam tiga sesi berjadual, bimbingan dan projek aplikasi, diselesaikan sepanjang enam bulan sambil anda terus bekerja."),
   ("card", "Selepas tamat", "Peserta yang memenuhi keperluan menerima sijil program Executive MBA yang diiktiraf CMI. Chartered Manager kekal sebagai laluan CMI pilihan yang berasingan."),
   ("card", "Kaedahnya", "Pendekatan F.A.S.T. dan dua belas rangka kerja pengurusan memberi anda cara berulang untuk mentakrifkan masalah, menimbang pilihan dan menterjemahkan keputusan kepada pelan tindakan."),
   ("h2", "Sesuai jika anda"),
   ("p", "•&nbsp; sudah membuat keputusan yang memberi kesan kepada orang, operasi atau prestasi perniagaan<br/>•&nbsp; boleh membawa cabaran perniagaan semasa ke dalam pembelajaran<br/>•&nbsp; mahukan pembangunan yang diguna pakai, bukan MBA akademik tradisional<br/>•&nbsp; boleh meluangkan masa untuk tiga sesi berjadual, bimbingan dan projek sepanjang enam bulan"),
   ("sp", 3),
   ("notice", "Apa yang ia bukan: ijazah universiti, MBA akademik bertauliah MQA, janji kenaikan pangkat, atau anugerah Chartered Manager secara automatik."),
   ("pb",),
   ("h1", "Program ini berbanding MBA tradisional."),
   ("table", ("Aspek", "Program ini", "MBA akademik tradisional"), [
     ("Tempoh", "Enam bulan, sambil bekerja sepenuh masa", "Biasanya 18–24 bulan"),
     ("Apa yang dibina", "Pertimbangan atas isu perniagaan sebenar anda, serta rangka kerja boleh guna semula", "Teori akademik, penyelidikan dan analisis kes"),
     ("Penilaian", "Satu projek aplikasi perniagaan — tiada peperiksaan atau tesis", "Tugasan atau peperiksaan, berserta tesis"),
     ("Siapa mengajar", "Pengamal industri, perunding dan jurulatih eksekutif", "Ahli akademik dan penyelia penyelidikan"),
     ("Bentuk", "Tiga sesi berjadual sepanjang enam bulan; terus bekerja", "Kalendar akademik yang ditetapkan"),
     ("Kelayakan", "Sijil program yang diiktiraf CMI (UK)", "Ijazah MBA akademik"),
   ]),
   ("sp", 4),
   ("notice", "Jadual ini merujuk MBA akademik 18–24 bulan yang dibina atas modul akademik dan tesis. Ia tidak menggambarkan setiap program MBA."),
   ("pb",),
   ("h1", "Empat soalan sebelum anda bertanya."),
   ("card", "1.  Adakah kerja itu relevan?", "Pilih keputusan, kekangan atau peluang semasa yang benar-benar penting kepada peranan atau perniagaan anda — itu menjadi projek anda."),
   ("card", "2.  Adakah jadual sesuai?", "Enam bulan berjalan dalam tiga sesi berjadual serta bimbingan dan projek. Semak tarikh kohort yang diterbitkan dengan tanggungjawab anda."),
   ("card", "3.  Perlukah sokongan majikan?", "Jika pembiayaan atau penajaan penting, minta perbualan majikan dan taklimat HRD Corp sebelum syarikat anda memohon."),
   ("card", "4.  Menilai biasiswa?", "Pemohon Malaysia yang layak boleh dipertimbangkan untuk biasiswa LIFE Innoversity, tertakluk pada kekosongan, penilaian dan kelulusan bertulis."),
   ("sp", 5),
   ("h1", "Soalan lazim."),
   ("faq", [
     ("Adakah ini MBA sebenar?", "Ini ialah program Executive MBA yang diiktiraf oleh CMI (UK) menurut CMI Professional Standards. Ia pembangunan profesional, bukan ijazah akademik bertauliah MQA."),
     ("Adakah saya menjadi Chartered Manager?", "Tidak secara automatik. Selepas tamat anda menerima sijil CMI; Chartered Manager ialah laluan CMI pilihan yang berasingan dengan kelayakan, penilaian dan yuran tersendiri yang ditentukan CMI."),
     ("Boleh saya ikut sambil bekerja sepenuh masa?", "Boleh — ia direka untuk pengurus yang bekerja: tiga sesi berjadual sepanjang enam bulan, dengan projek aplikasi berdasarkan kerja anda sendiri. Tiada peperiksaan atau tesis."),
   ]),
   ("sp", 4),
   ("cta", f"Minta perbualan kesesuaian program tanpa obligasi — {EMAIL}"),
   ("sp", 4),
   ("notice", "Yuran standard Malaysia yang diterbitkan: RM10,000.00. Sebarang anugerah biasiswa dan yuran peserta disahkan secara individu dalam bentuk bertulis. Panduan ini bukan tawaran kemasukan, kelulusan biasiswa atau komitmen bayaran."),
  ],
 },
 "zh": {
  "filename": "future-ready-decision-guide-zh.pdf",
  "kicker": "个人课程决策指南",
  "title": "这项课程适合您吗？",
  "lead": "为希望在不离开工作岗位的情况下迈出更好一步的马来西亚经理人而写的简明指南。",
  "promise_t": "您将获得",
  "promise": "清晰了解课程内容、获 CMI 认可的证书、独立的 Chartered Manager 路径、真实的时间投入、与学术型 MBA 的比较，以及咨询前值得询问的问题。",
  "subhead": "为您当前面对的决定而写。",
  "intro": "用它来判断这项课程是否契合您现在所承担的责任——而不仅仅是您想要的职衔。",
  "cover_cta": f"联系课程团队 — {EMAIL}",
  "cover_notice": "Future Ready Executive MBA 是一项获 CMI（英国）认可的专业发展课程。它并非 MQA 认证的学术学位或受监管资格。",
  "blocks": [
   ("h1", "这项课程究竟是什么。"),
   ("p", "这是为在职资深经理人设计的实战型管理发展课程。您带着当前的业务挑战，运用结构化框架检验假设与选项，并就自己的实际工作完成一个真实项目——而非案例研究。"),
   ("card", "六个月结构", "六个培训日分三个指定课程进行，辅导与企业应用项目贯穿整个六个月，学员在此期间继续工作。"),
   ("card", "完成课程后", "符合要求的学员获得由 CMI 认可的 Executive MBA 课程证书。Chartered Manager 仍为独立、可选的 CMI 路径。"),
   ("card", "方法论", "F.A.S.T. 方法与十二个管理框架，为您提供一套可反复运用的方式：界定问题、权衡选项，并将决定转化为行动计划。"),
   ("h2", "如果您符合以下情况，将会很适合"),
   ("p", "•&nbsp; 已在做出影响人员、运营或业务表现的决定<br/>•&nbsp; 能把当前的业务挑战带入学习<br/>•&nbsp; 想要实战型发展，而非传统学术型 MBA<br/>•&nbsp; 能在六个月内为三个指定课程、辅导及项目预留时间"),
   ("sp", 3),
   ("notice", "它不是：大学学位、MQA 认证的学术型 MBA、升职承诺，或自动授予的 Chartered Manager 资格。"),
   ("pb",),
   ("h1", "本课程与传统 MBA 的比较。"),
   ("table", ("方面", "本课程", "传统学术型 MBA"), [
     ("时长", "六个月，边工作边学习", "通常 18–24 个月"),
     ("所建立的", "针对您真实业务问题的判断力，以及可反复运用的框架", "学术理论、研究与案例分析"),
     ("评估方式", "一个企业应用项目——不设考试或论文", "作业或考试，加上论文"),
     ("授课者", "行业实践者、顾问及高管教练", "学术教师与研究导师"),
     ("形式", "六个月内三个指定课程；继续工作", "既定的学术日历"),
     ("资格", "获 CMI（英国）认可的课程证书", "学术型 MBA 学位"),
   ]),
   ("sp", 4),
   ("notice", "此表以 18–24 个月、以学术模块与论文为核心的学术型 MBA 为参照。它并不代表每一项 MBA 课程。"),
   ("pb",),
   ("h1", "咨询前值得询问的四个问题。"),
   ("card", "1.  这项工作相关吗？", "选择一个对您的职责或业务真正重要的当前决定、限制或机会——它将成为您的项目。"),
   ("card", "2.  时间安排可行吗？", "六个月分三个指定课程进行，另加辅导与项目。请将已公布的开课日期与您的职责对照。"),
   ("card", "3.  需要雇主支持吗？", "若资助或赞助重要，请在公司提交申请前，要求进行雇主沟通与 HRD Corp 说明。"),
   ("card", "4.  正在评估奖学金？", "符合资格的马来西亚申请者可接受 LIFE Innoversity 奖学金评估，视名额、评估与书面批准而定。"),
   ("sp", 5),
   ("h1", "常见问题。"),
   ("faq", [
     ("这是真正的 MBA 吗？", "这是一项获 CMI（英国）依据 CMI Professional Standards 认可的 Executive MBA 课程。它属于专业发展，而非 MQA 认证的学术学位。"),
     ("我会自动成为 Chartered Manager 吗？", "不会自动获得。完成后您获得 CMI 证书；Chartered Manager 是独立、可选的 CMI 路径，其资格、评估与费用由 CMI 决定。"),
     ("我能边全职工作边完成吗？", "可以——它专为在职经理人设计：六个月内三个指定课程，并就您自己的工作完成应用项目。不设考试或论文。"),
   ]),
   ("sp", 4),
   ("cta", f"预约无义务的课程契合度沟通 — {EMAIL}"),
   ("sp", 4),
   ("notice", "已公布的马来西亚标准费用：RM10,000.00。任何奖学金金额及由此产生的学员费用均会个别以书面确认。本指南不构成录取、奖学金批准或付款承诺。"),
  ],
 },
}

# --------------------------------------------------------------- EMPLOYER BRIEF
DOCS["employer"] = {
 "en": {
  "filename": "future-ready-employer-funding-brief.pdf",
  "kicker": "EMPLOYER DECISION BRIEF",
  "title": "Employer sponsorship & HRD Corp funding.",
  "lead": "A concise internal briefing for a manager, HR team or learning leader evaluating practical management development.",
  "promise_t": "What you'll get",
  "promise": "A clear employer-led funding process, the programme's applied format, a short internal case you can adapt, and answers to the questions a sponsor usually asks.",
  "subhead": "The outcome is applied, not just attendance.",
  "intro": "This is a structured programme built around a live business issue and an applied project — so the organisation sees capability strengthened on its own work, not a generic attendance record.",
  "cover_cta": f"Request the employer document pack — {EMAIL}",
  "cover_notice": "The Future Ready Executive MBA is a professional development programme recognised by CMI (UK). It is not an MQA-accredited academic degree or a regulated qualification.",
  "blocks": [
   ("h1", "What an employer is evaluating."),
   ("p", "A practical management-development decision connects three things: the participant's responsibility, the business issue they will work on, and the capability the organisation needs strengthened."),
   ("card", "Applied work", "Participants bring a current business challenge, use management frameworks to test assumptions and options, and complete an applied business project."),
   ("card", "Defined commitment", "Six months across six training days, three scheduled sessions, coaching and applied project work."),
   ("card", "Professional recognition", "Successful participants receive the CMI Certificate of Recognition for the programme — not an academic MBA degree or regulated qualification."),
   ("h2", "The employer-led HRD Corp process"),
   ("p", "1.&nbsp; Employer confirms its current eligibility and levy position.<br/>2.&nbsp; Programme team supplies the quotation, schedule, course content and trainer documents.<br/>3.&nbsp; Employer submits the application before training begins. HRD Corp decides eligibility and the approved amount."),
   ("sp", 2),
   ("notice", "Funding is not automatic. The employer and HRD Corp control eligibility, timing and the approved amount."),
   ("pb",),
   ("h1", "A short internal conversation starter."),
   ("card", "The capability need", "The manager is responsible for [team / business unit / project] and needs a more structured method for evaluating complex decisions and leading implementation."),
   ("card", "The applied outcome", "The participant will work on [current business challenge] and produce an applied business project that can be discussed with the organisation."),
   ("card", "The format", "Six facilitated training days across three scheduled sessions, coaching and applied work across the six-month programme."),
   ("card", "The funding question", "Should sponsorship, or an employer-led HRD Corp application, be explored before the selected intake?"),
   ("sp", 5),
   ("h1", "Common employer questions."),
   ("faq", [
     ("Does the levy cover the full fee?", "Not necessarily. HRD Corp decides the approved amount under its Allowable Cost Matrix, and funding cannot exceed the employer's available levy balance. The programme team supplies the documents needed to apply."),
     ("Who applies — the company or the participant?", "The employer applies, in e-TRiS, before training begins. The participant does not submit the grant. HRD Corp — not the programme provider — decides approval."),
     ("What does the company get back?", "An applied project on a real business issue the manager already owns, plus a CMI-recognised programme certificate on successful completion."),
   ]),
   ("sp", 4),
   ("cta", f"Request the employer document pack — {EMAIL}"),
   ("sp", 4),
   ("notice", "Right Dots Resources is the authorised programme partner for marketing, enquiries, pricing and enrolment coordination. The applicable written proposal controls delivery, pricing and terms."),
  ],
 },
 "ms": {
  "filename": "future-ready-employer-funding-brief-ms.pdf",
  "kicker": "RINGKASAN KEPUTUSAN MAJIKAN",
  "title": "Penajaan majikan & pembiayaan HRD Corp.",
  "lead": "Ringkasan dalaman yang padat untuk pengurus, pasukan HR atau pemimpin pembelajaran yang menilai pembangunan pengurusan yang praktikal.",
  "promise_t": "Apa yang anda dapat",
  "promise": "Proses pembiayaan yang diterajui majikan, format program yang diguna pakai, satu hujah dalaman ringkas yang boleh anda sesuaikan, dan jawapan kepada soalan yang biasa ditanya penaja.",
  "subhead": "Hasilnya diguna pakai, bukan sekadar kehadiran.",
  "intro": "Ini program berstruktur yang dibina atas isu perniagaan sebenar dan projek aplikasi — supaya organisasi melihat keupayaan diperkukuh pada kerjanya sendiri, bukan sekadar rekod kehadiran.",
  "cover_cta": f"Minta pek dokumen majikan — {EMAIL}",
  "cover_notice": "Future Ready Executive MBA ialah program pembangunan profesional yang diiktiraf oleh CMI (UK). Ia bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia.",
  "blocks": [
   ("h1", "Apa yang dinilai oleh majikan."),
   ("p", "Keputusan pembangunan pengurusan yang praktikal menghubungkan tiga perkara: tanggungjawab peserta, isu perniagaan yang akan ditanganinya, dan keupayaan yang perlu diperkukuh oleh organisasi."),
   ("card", "Kerja aplikasi", "Peserta membawa cabaran perniagaan semasa, menggunakan rangka kerja pengurusan untuk menguji andaian dan pilihan, dan menyiapkan projek aplikasi perniagaan."),
   ("card", "Komitmen yang jelas", "Enam bulan merentasi enam hari latihan, tiga sesi berjadual, bimbingan dan projek aplikasi."),
   ("card", "Pengiktirafan profesional", "Peserta yang berjaya menerima CMI Certificate of Recognition bagi program ini — bukan ijazah MBA akademik atau kelayakan yang dikawal selia."),
   ("h2", "Proses HRD Corp yang diterajui majikan"),
   ("p", "1.&nbsp; Majikan mengesahkan kelayakan dan baki levi semasa.<br/>2.&nbsp; Pasukan program membekalkan sebut harga, jadual, kandungan kursus dan dokumen jurulatih.<br/>3.&nbsp; Majikan mengemukakan permohonan sebelum latihan bermula. HRD Corp menentukan kelayakan dan jumlah yang diluluskan."),
   ("sp", 2),
   ("notice", "Pembiayaan tidak automatik. Majikan dan HRD Corp mengawal kelayakan, masa dan jumlah yang diluluskan."),
   ("pb",),
   ("h1", "Pencetus perbualan dalaman yang ringkas."),
   ("card", "Keperluan keupayaan", "Pengurus bertanggungjawab terhadap [pasukan / unit perniagaan / projek] dan memerlukan kaedah yang lebih berstruktur untuk menilai keputusan kompleks dan menerajui pelaksanaan."),
   ("card", "Hasil aplikasi", "Peserta akan menangani [cabaran perniagaan semasa] dan menghasilkan projek aplikasi perniagaan yang boleh dibincangkan dengan organisasi."),
   ("card", "Format", "Enam hari latihan berfasilitator dalam tiga sesi berjadual, bimbingan dan kerja aplikasi sepanjang program enam bulan."),
   ("card", "Soalan pembiayaan", "Perlukah penajaan, atau permohonan HRD Corp yang diterajui majikan, diteroka sebelum kohort yang dipilih?"),
   ("sp", 5),
   ("h1", "Soalan lazim majikan."),
   ("faq", [
     ("Adakah levi menampung keseluruhan yuran?", "Belum tentu. HRD Corp menentukan jumlah yang diluluskan mengikut Allowable Cost Matrix, dan pembiayaan tidak boleh melebihi baki levi majikan. Pasukan program membekalkan dokumen yang diperlukan untuk memohon."),
     ("Siapa memohon — syarikat atau peserta?", "Majikan memohon, melalui e-TRiS, sebelum latihan bermula. Peserta tidak mengemukakan geran. HRD Corp — bukan penyedia program — menentukan kelulusan."),
     ("Apa yang diperoleh syarikat?", "Projek aplikasi atas isu perniagaan sebenar yang telah dipikul pengurus, serta sijil program yang diiktiraf CMI apabila berjaya menamatkannya."),
   ]),
   ("sp", 4),
   ("cta", f"Minta pek dokumen majikan — {EMAIL}"),
   ("sp", 4),
   ("notice", "Right Dots Resources ialah rakan kongsi program yang diberi kuasa untuk pemasaran, pertanyaan, harga dan penyelarasan pendaftaran. Cadangan bertulis yang berkenaan mengawal penyampaian, harga dan terma."),
  ],
 },
 "zh": {
  "filename": "future-ready-employer-funding-brief-zh.pdf",
  "kicker": "雇主决策简报",
  "title": "雇主赞助与 HRD Corp 资助。",
  "lead": "为正在评估实用型管理发展的经理、HR 团队或学习负责人而写的简明内部简报。",
  "promise_t": "您将获得",
  "promise": "清晰的雇主主导资助流程、课程的实战形式、一份可供您调整的内部说帖，以及赞助方通常会问的问题的答案。",
  "subhead": "成果是实战的，而不仅是出席。",
  "intro": "这是一项围绕真实业务问题与应用项目而设计的结构化课程——让组织看到能力在自身工作上得到提升，而非一份普通的出席记录。",
  "cover_cta": f"索取雇主文件包 — {EMAIL}",
  "cover_notice": "Future Ready Executive MBA 是一项获 CMI（英国）认可的专业发展课程。它并非 MQA 认证的学术学位或受监管资格。",
  "blocks": [
   ("h1", "雇主在评估什么。"),
   ("p", "一项务实的管理发展决定连接三件事：学员的职责、他将处理的业务问题，以及组织需要强化的能力。"),
   ("card", "应用型工作", "学员带着当前的业务挑战，运用管理框架检验假设与选项，并完成一个企业应用项目。"),
   ("card", "明确的投入", "六个月，涵盖六个培训日、三个指定课程、辅导及企业应用项目。"),
   ("card", "专业认可", "成功的学员获得该课程的 CMI Certificate of Recognition——而非学术型 MBA 学位或受监管资格。"),
   ("h2", "雇主主导的 HRD Corp 流程"),
   ("p", "1.&nbsp; 雇主确认当前的资格与可用 levy 余额。<br/>2.&nbsp; 课程团队提供报价、日程、课程内容及讲师文件。<br/>3.&nbsp; 雇主在培训开始前提交申请。HRD Corp 决定资格与获批金额。"),
   ("sp", 2),
   ("notice", "资助并非自动。雇主与 HRD Corp 掌控资格、时间与获批金额。"),
   ("pb",),
   ("h1", "一段简短的内部沟通引子。"),
   ("card", "能力需求", "该经理负责 [团队／业务单位／项目]，需要一套更有结构的方法来评估复杂决策并领导执行。"),
   ("card", "应用成果", "学员将处理 [当前业务挑战]，并产出一个可与组织讨论的企业应用项目。"),
   ("card", "形式", "六个培训日分三个指定课程进行，辅导及应用工作贯穿六个月课程。"),
   ("card", "资助问题", "是否应在所选班次之前，先探讨赞助或由雇主主导的 HRD Corp 申请？"),
   ("sp", 5),
   ("h1", "雇主常见问题。"),
   ("faq", [
     ("levy 能涵盖全部费用吗？", "未必。HRD Corp 依据其 Allowable Cost Matrix 决定获批金额，且资助不得超过雇主的可用 levy 余额。课程团队会提供申请所需文件。"),
     ("由谁申请——公司还是学员？", "由雇主在培训开始前通过 e-TRiS 申请。学员不提交该津贴。由 HRD Corp（而非课程提供方）决定批准。"),
     ("公司能获得什么回报？", "一个针对经理已在负责的真实业务问题的应用项目，以及成功完成后获 CMI 认可的课程证书。"),
   ]),
   ("sp", 4),
   ("cta", f"索取雇主文件包 — {EMAIL}"),
   ("sp", 4),
   ("notice", "Right Dots Resources 是获授权处理营销、咨询、定价与报名协调的课程合作伙伴。适用的书面提案对交付、定价与条款具约束力。"),
  ],
 },
}

# --------------------------------------------------------------- SCHOLARSHIP
DOCS["scholarship"] = {
 "en": {
  "filename": "future-ready-scholarship-eligibility.pdf",
  "kicker": "ELIGIBILITY INFORMATION",
  "title": "Scholarship & eligibility self-check.",
  "lead": "Use this before you ask about the scholarship. It helps you prepare the right questions — it is not an application or approval form.",
  "promise_t": "What you'll get",
  "promise": "The standard fee, the scholarship assessment conditions, the questions worth preparing, the facts that matter to a conversation, and the next step for an eligibility discussion.",
  "subhead": "Clear terms protect everyone.",
  "intro": "Eligibility is assessed, availability matters, and an award exists only once it has been confirmed in writing. Knowing that up front makes your conversation with the programme team faster and clearer.",
  "cover_cta": f"Ask about the scholarship assessment — {EMAIL}",
  "cover_notice": "The Future Ready Executive MBA is a professional development programme recognised by CMI (UK). It is not an MQA-accredited academic degree or a regulated qualification.",
  "blocks": [
   ("h1", "The published Malaysian fee."),
   ("card", "Standard programme fee", "RM10,000.00"),
   ("card", "LIFE Innoversity scholarship", "Eligible Malaysian applicants may be considered, subject to availability, assessment and written approval."),
   ("card", "Award & participant fee", "Confirmed individually in writing after assessment. Installment schedules are provided in writing before payment."),
   ("h2", "The scholarship is not"),
   ("p", "•&nbsp; automatic for every Malaysian participant<br/>•&nbsp; a discount code or a guarantee<br/>•&nbsp; a replacement for a written fee schedule<br/>•&nbsp; an HRD Corp decision"),
   ("sp", 2),
   ("notice", "There is no fee to request information or to ask the programme team about the assessment process."),
   ("pb",),
   ("h1", "Prepare for an eligibility conversation."),
   ("p", "Use these prompts to organise the facts you want to discuss. They are not selection criteria and do not predict an outcome."),
   ("card", "Your programme goal", "What responsibility, business issue or management capability are you looking to strengthen?"),
   ("card", "Your intended cohort", "Which published English or Mandarin cohort works with your commitments?"),
   ("card", "Your funding route", "Self-funding, employer sponsorship, or asking your employer to explore HRD Corp funding?"),
   ("card", "Your next question", "What would you need clarified about fit, dates, fee, scholarship conditions or the separate Chartered Manager route before deciding?"),
   ("sp", 5),
   ("h1", "Common questions."),
   ("faq", [
     ("Do all Malaysians get the scholarship?", "No. It is considered for eligible Malaysian applicants, subject to availability, assessment and written approval. It is not automatic and is not a discount code."),
     ("Is the scholarship the same as HRD Corp funding?", "No. The scholarship is assessed by the programme's scholarship provider; HRD Corp funding is a separate, employer-led route decided by HRD Corp."),
     ("When is my fee confirmed?", "Your award, if any, and the resulting participant fee are confirmed individually in writing after assessment, with an installment schedule before payment."),
   ]),
   ("sp", 4),
   ("cta", f"Request an eligibility conversation — {EMAIL}"),
   ("sp", 4),
   ("notice", "The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. Chartered Manager assessment, membership, fees and awards are controlled separately by CMI."),
  ],
 },
 "ms": {
  "filename": "future-ready-scholarship-eligibility-ms.pdf",
  "kicker": "MAKLUMAT KELAYAKAN",
  "title": "Semakan kendiri biasiswa & kelayakan.",
  "lead": "Gunakan ini sebelum anda bertanya tentang biasiswa. Ia membantu anda menyediakan soalan yang tepat — ia bukan borang permohonan atau kelulusan.",
  "promise_t": "Apa yang anda dapat",
  "promise": "Yuran standard, syarat penilaian biasiswa, soalan yang wajar disediakan, fakta yang penting untuk perbualan, dan langkah seterusnya untuk perbincangan kelayakan.",
  "subhead": "Terma yang jelas melindungi semua pihak.",
  "intro": "Kelayakan dinilai, kekosongan penting, dan sesuatu anugerah wujud hanya setelah disahkan secara bertulis. Mengetahui perkara ini lebih awal menjadikan perbualan anda dengan pasukan program lebih pantas dan jelas.",
  "cover_cta": f"Tanya tentang penilaian biasiswa — {EMAIL}",
  "cover_notice": "Future Ready Executive MBA ialah program pembangunan profesional yang diiktiraf oleh CMI (UK). Ia bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia.",
  "blocks": [
   ("h1", "Yuran Malaysia yang diterbitkan."),
   ("card", "Yuran standard program", "RM10,000.00"),
   ("card", "Biasiswa LIFE Innoversity", "Pemohon Malaysia yang layak boleh dipertimbangkan, tertakluk pada kekosongan, penilaian dan kelulusan bertulis."),
   ("card", "Anugerah & yuran peserta", "Disahkan secara individu dalam bentuk bertulis selepas penilaian. Jadual ansuran diberikan secara bertulis sebelum bayaran."),
   ("h2", "Biasiswa ini bukan"),
   ("p", "•&nbsp; automatik untuk setiap peserta Malaysia<br/>•&nbsp; kod diskaun atau jaminan<br/>•&nbsp; pengganti jadual yuran bertulis<br/>•&nbsp; keputusan HRD Corp"),
   ("sp", 2),
   ("notice", "Tiada bayaran untuk meminta maklumat atau bertanya kepada pasukan program tentang proses penilaian."),
   ("pb",),
   ("h1", "Bersedia untuk perbualan kelayakan."),
   ("p", "Gunakan panduan ini untuk menyusun fakta yang ingin anda bincangkan. Ia bukan kriteria pemilihan dan tidak meramalkan keputusan."),
   ("card", "Matlamat program anda", "Tanggungjawab, isu perniagaan atau keupayaan pengurusan apa yang ingin anda perkukuh?"),
   ("card", "Kohort pilihan anda", "Kohort Bahasa Inggeris atau Mandarin yang diterbitkan mana yang sesuai dengan komitmen anda?"),
   ("card", "Laluan pembiayaan anda", "Membiayai sendiri, penajaan majikan, atau meminta majikan meneroka pembiayaan HRD Corp?"),
   ("card", "Soalan seterusnya", "Apa yang perlu dijelaskan tentang kesesuaian, tarikh, yuran, syarat biasiswa atau laluan Chartered Manager yang berasingan sebelum memutuskan?"),
   ("sp", 5),
   ("h1", "Soalan lazim."),
   ("faq", [
     ("Adakah semua rakyat Malaysia mendapat biasiswa?", "Tidak. Ia dipertimbangkan untuk pemohon Malaysia yang layak, tertakluk pada kekosongan, penilaian dan kelulusan bertulis. Ia tidak automatik dan bukan kod diskaun."),
     ("Adakah biasiswa sama dengan pembiayaan HRD Corp?", "Tidak. Biasiswa dinilai oleh penyedia biasiswa program; pembiayaan HRD Corp ialah laluan berasingan yang diterajui majikan dan diputuskan oleh HRD Corp."),
     ("Bila yuran saya disahkan?", "Anugerah anda (jika ada) dan yuran peserta berkenaan disahkan secara individu dalam bentuk bertulis selepas penilaian, dengan jadual ansuran sebelum bayaran."),
   ]),
   ("sp", 4),
   ("cta", f"Minta perbualan kelayakan — {EMAIL}"),
   ("sp", 4),
   ("notice", "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Penilaian Chartered Manager, keahlian, yuran dan anugerah dikawal secara berasingan oleh CMI."),
  ],
 },
 "zh": {
  "filename": "future-ready-scholarship-eligibility-zh.pdf",
  "kicker": "奖学金资格资料",
  "title": "奖学金与资格自查。",
  "lead": "在您咨询奖学金之前使用它。它帮助您准备恰当的问题——它并非申请或批准表格。",
  "promise_t": "您将获得",
  "promise": "标准费用、奖学金评估条件、值得准备的问题、对沟通有帮助的事实，以及资格讨论的下一步。",
  "subhead": "清晰的条款保护各方。",
  "intro": "资格需经评估，名额很重要，且只有在书面确认后才存在奖学金。事先了解这一点，能让您与课程团队的沟通更快、更清晰。",
  "cover_cta": f"咨询奖学金评估 — {EMAIL}",
  "cover_notice": "Future Ready Executive MBA 是一项获 CMI（英国）认可的专业发展课程。它并非 MQA 认证的学术学位或受监管资格。",
  "blocks": [
   ("h1", "已公布的马来西亚费用。"),
   ("card", "标准课程费用", "RM10,000.00"),
   ("card", "LIFE Innoversity 奖学金", "符合资格的马来西亚申请者可接受评估，视名额、评估与书面批准而定。"),
   ("card", "奖学金与学员费用", "经评估后个别以书面确认。分期付款时间表在付款前以书面提供。"),
   ("h2", "这项奖学金不是"),
   ("p", "•&nbsp; 每位马来西亚学员自动获得<br/>•&nbsp; 折扣码或保证<br/>•&nbsp; 书面费用表的替代品<br/>•&nbsp; HRD Corp 的决定"),
   ("sp", 2),
   ("notice", "索取资料或向课程团队询问评估流程均不收取费用。"),
   ("pb",),
   ("h1", "为资格沟通做准备。"),
   ("p", "用以下提示整理您想讨论的事实。它们并非甄选标准，也不预示结果。"),
   ("card", "您的课程目标", "您想强化哪项职责、业务问题或管理能力？"),
   ("card", "您意向的班次", "已公布的英语或华语班次中，哪一个符合您的时间安排？"),
   ("card", "您的资助途径", "自费、雇主赞助，还是请雇主探讨 HRD Corp 资助？"),
   ("card", "您的下一个问题", "在做决定前，您需要就课程契合度、日期、费用、奖学金条件或独立的 Chartered Manager 路径厘清什么？"),
   ("sp", 5),
   ("h1", "常见问题。"),
   ("faq", [
     ("所有马来西亚人都能获得奖学金吗？", "不是。它面向符合资格的马来西亚申请者接受评估，视名额、评估与书面批准而定。它并非自动，也不是折扣码。"),
     ("奖学金与 HRD Corp 资助相同吗？", "不同。奖学金由课程的奖学金提供方评估；HRD Corp 资助是由雇主主导、并由 HRD Corp 决定的独立途径。"),
     ("我的费用何时确认？", "您的奖学金（如有）及由此产生的学员费用，会在评估后个别以书面确认，并在付款前提供分期时间表。"),
   ]),
   ("sp", 4),
   ("cta", f"预约资格沟通 — {EMAIL}"),
   ("sp", 4),
   ("notice", "面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书。Chartered Manager 的评估、会员资格、费用及授予由 CMI 独立掌控。"),
  ],
 },
}

if __name__ == "__main__":
    print("Created:")
    for key in DOCS:
        for loc in ("en", "ms", "zh"):
            render(loc, DOCS[key][loc])
