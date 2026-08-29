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

FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("GuideSans", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("GuideSansBold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFont(TTFont("GuideSerif", str(FONT_DIR / "georgia.ttf")))
pdfmetrics.registerFont(TTFont("GuideSerifBold", str(FONT_DIR / "georgiab.ttf")))
pdfmetrics.registerFont(TTFont("GuideZh", str(FONT_DIR / "simhei.ttf")))

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

GUIDES = {
    "en": {
        "filename": "working-managers-guide-2026.pdf",
        "kicker": "2026 WORKING MANAGER'S GUIDE",
        "title": "A clear guide to the six-month Future Ready Executive MBA.",
        "lead": "Everything to verify before you decide: programme structure, CMI recognition, published fees, scholarship assessment and employer funding.",
        "sections": [
            (
                "What you are evaluating",
                "The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. It is a six-month professional development programme designed for business owners, directors, general managers and senior managers who want to work on a live business issue while remaining in their roles.",
            ),
            (
                "How the six months work",
                "Six facilitated training days are delivered across three scheduled sessions. Coaching and applied project work continue across the programme. You use the frameworks on a current business challenge and complete one applied business project. There are no traditional examinations or thesis.",
            ),
            (
                "Recognition, stated precisely",
                "Successful participants receive the CMI Certificate of Recognition for the programme. This is a professional development programme, not an MQA-accredited academic degree or a regulated qualification. Chartered Manager is a separate optional CMI route with its own eligibility, assessment, membership and fees.",
            ),
            (
                "Published Malaysian fee",
                "The standard programme fee is RM10,000.00. Eligible Malaysian applicants may be considered for a LIFE Innoversity scholarship, subject to availability, assessment and written approval. Any award and resulting participant fee are confirmed individually in writing.",
            ),
            (
                "Employer funding",
                "An eligible HRD Corp-registered employer may submit a grant application before training begins. The programme team supplies the quotation, schedule, course content and trainer documents. HRD Corp decides eligibility and the approved amount; funding is not guaranteed by the programme provider.",
            ),
        ],
        "fit_title": "Use these five checks before you enquire",
        "checks": [
            "You carry responsibility for business results, people or major decisions.",
            "You can bring a current business issue into the applied work.",
            "You can attend all published session dates and complete work across six months.",
            "You understand the programme is professional development, not an academic MBA degree.",
            "You want the exact fee, scholarship or employer-funding route confirmed in writing.",
        ],
        "cta": "Request the programme guide or arrange a conversation",
        "notice": "No payment or enrolment commitment is required to request information.",
    },
    "ms": {
        "filename": "panduan-pengurus-bekerja-2026.pdf",
        "kicker": "PANDUAN PENGURUS BEKERJA 2026",
        "title": "Panduan jelas untuk Future Ready Executive MBA enam bulan.",
        "lead": "Semak struktur program, pengiktirafan CMI, yuran diterbitkan, penilaian biasiswa dan pembiayaan majikan sebelum membuat keputusan.",
        "sections": [
            ("Apa yang anda sedang nilai", "Executive MBA dalam Kepimpinan Perniagaan Masa Hadapan dianugerahkan dan disokong oleh CMI. Program pembangunan profesional enam bulan ini direka untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan yang mahu menangani isu perniagaan sebenar sambil terus bekerja."),
            ("Bagaimana enam bulan berjalan", "Enam hari latihan berfasilitator dilaksanakan dalam tiga sesi berjadual. Bimbingan dan projek aplikasi diteruskan sepanjang program. Anda menggunakan rangka kerja pada cabaran perniagaan semasa dan menyiapkan satu projek aplikasi perniagaan. Tiada peperiksaan tradisional atau tesis."),
            ("Pengiktirafan yang dinyatakan dengan tepat", "Peserta yang berjaya menerima CMI Certificate of Recognition bagi program ini. Ini ialah program pembangunan profesional, bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia. Chartered Manager ialah laluan pilihan CMI yang berasingan dengan kelayakan, penilaian, keahlian dan yuran tersendiri."),
            ("Yuran peserta Malaysia", "Yuran standard program ialah RM10,000.00. Pemohon Malaysia yang layak boleh dipertimbangkan untuk biasiswa LIFE Innoversity, tertakluk pada kekosongan, penilaian dan kelulusan bertulis. Sebarang anugerah dan yuran peserta berkenaan disahkan secara individu dalam bentuk bertulis."),
            ("Pembiayaan majikan", "Majikan berdaftar HRD Corp yang layak boleh mengemukakan permohonan geran sebelum latihan bermula. Pasukan program membekalkan sebut harga, jadual, kandungan kursus dan dokumen jurulatih. HRD Corp menentukan kelayakan dan jumlah yang diluluskan; pembiayaan tidak dijamin oleh penyedia program."),
        ],
        "fit_title": "Gunakan lima semakan ini sebelum bertanya",
        "checks": [
            "Anda bertanggungjawab terhadap hasil perniagaan, pasukan atau keputusan penting.",
            "Anda boleh membawa isu perniagaan semasa ke dalam projek aplikasi.",
            "Anda boleh menghadiri semua tarikh sesi dan menyiapkan kerja sepanjang enam bulan.",
            "Anda memahami bahawa ini program pembangunan profesional, bukan ijazah MBA akademik.",
            "Anda mahu yuran, biasiswa atau pembiayaan majikan disahkan secara bertulis.",
        ],
        "cta": "Minta panduan program atau aturkan perbualan",
        "notice": "Tiada bayaran atau komitmen pendaftaran diperlukan untuk meminta maklumat.",
    },
    "zh": {
        "filename": "zaizhi-jingli-zhinan-2026.pdf",
        "kicker": "2026 在职经理课程指南",
        "title": "六个月 Future Ready Executive MBA 清晰指南。",
        "lead": "作出决定前，先核实课程结构、CMI 认可、已公布费用、奖学金评估及雇主资助方式。",
        "sections": [
            ("您正在评估什么", "面向未来商业领导力的 Executive MBA 由 CMI 颁授并背书。这项六个月专业发展课程专为企业主、董事、总经理及高级经理设计，让学员在继续工作的同时处理真实业务问题。"),
            ("六个月如何进行", "六个导师引导培训日分三个指定课程进行。辅导及企业应用项目贯穿整个课程。学员把框架应用于当前业务挑战，并完成一项企业应用项目。课程不设传统考试或论文。"),
            ("准确说明 CMI 认可", "达到课程要求的学员获颁本课程的 CMI Certificate of Recognition。这是专业发展课程，并非 MQA 认证的学术学位或受监管资格。Chartered Manager 是独立可选 CMI 路线，具有独立资格、评估、会员及费用。"),
            ("马来西亚学员费用", "课程标准费用为 RM10,000.00。符合资格的马来西亚申请者可接受 LIFE Innoversity 奖学金评估，须视名额、评估及书面批准而定。任何奖学金金额及应付费用均会个别以书面确认。"),
            ("雇主资助", "符合资格的 HRD Corp 注册雇主可在培训开始前提交 grant 申请。课程团队提供报价、时间表、课程内容及培训师文件。资格及批准金额由 HRD Corp 决定；课程提供方不保证资助获批。"),
        ],
        "fit_title": "咨询前先完成以下五项核对",
        "checks": [
            "您负责业务成果、团队或重要决策。",
            "您可把当前业务问题带入企业应用项目。",
            "您可出席所有公布的课程日期，并在六个月内完成相关工作。",
            "您理解这是一项专业发展课程，并非学术 MBA 学位。",
            "您希望课程费用、奖学金或雇主资助方式获得书面确认。",
        ],
        "cta": "索取课程指南或预约课程沟通",
        "notice": "索取资料无需付款，也不代表承诺报名。",
    },
}


def styles(zh=False):
    sans = "GuideZh" if zh else "GuideSans"
    bold = "GuideZh" if zh else "GuideSansBold"
    serif = "GuideZh" if zh else "GuideSerifBold"
    return {
        "kicker": ParagraphStyle("kicker", fontName=bold, fontSize=8, leading=11, textColor=BLUE, spaceAfter=8),
        "title": ParagraphStyle("title", fontName=serif, fontSize=27 if not zh else 25, leading=34, textColor=NAVY, spaceAfter=12),
        "lead": ParagraphStyle("lead", fontName=sans, fontSize=11.5, leading=18, textColor=INK, spaceAfter=10),
        "h1": ParagraphStyle("h1", fontName=serif, fontSize=19, leading=25, textColor=NAVY, spaceAfter=8),
        "h2": ParagraphStyle("h2", fontName=bold, fontSize=11, leading=16, textColor=NAVY, spaceAfter=4),
        "body": ParagraphStyle("body", fontName=sans, fontSize=9.7, leading=15.2, textColor=INK, spaceAfter=7),
        "small": ParagraphStyle("small", fontName=sans, fontSize=7.7, leading=11, textColor=MUTED),
        "fact": ParagraphStyle("fact", fontName=serif, fontSize=18, leading=22, textColor=NAVY, alignment=1),
        "fact_label": ParagraphStyle("fact_label", fontName=sans, fontSize=7.6, leading=10, textColor=MUTED, alignment=1),
    }


def page_chrome(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 18 * mm, width, 18 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont("GuideSansBold", 9)
    canvas.drawString(17 * mm, height - 11 * mm, "FUTURE READY EXECUTIVE MBA")
    canvas.setFillColor(GOLD)
    canvas.rect(17 * mm, height - 14.5 * mm, 18 * mm, 1.2 * mm, stroke=0, fill=1)
    canvas.setStrokeColor(LINE)
    canvas.line(17 * mm, 14 * mm, width - 17 * mm, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("GuideSans", 7.3)
    canvas.drawString(17 * mm, 8.5 * mm, f"{EMAIL}  |  {PHONE}  |  {SITE}")
    canvas.drawRightString(width - 17 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def fact_band(locale, s):
    labels = {
        "en": ("months", "training days", "scheduled sessions", "applied project"),
        "ms": ("bulan", "hari latihan", "sesi berjadual", "projek aplikasi"),
        "zh": ("个月", "培训日", "指定课程", "企业应用项目"),
    }[locale]
    facts = [("6", labels[0]), ("6", labels[1]), ("3", labels[2]), ("1", labels[3])]
    cells = []
    for value, label in facts:
        cells.append([Paragraph(value, s["fact"]), Paragraph(label, s["fact_label"])])
    table = Table([cells], colWidths=[43.5 * mm] * 4)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def build(locale, copy):
    s = styles(locale == "zh")
    story = [
        Spacer(1, 27 * mm),
        Paragraph(copy["kicker"], s["kicker"]),
        Paragraph(copy["title"], s["title"]),
        Paragraph(copy["lead"], s["lead"]),
        Spacer(1, 8 * mm),
        fact_band(locale, s),
        Spacer(1, 16 * mm),
        Paragraph("Six months. One applied outcome." if locale == "en" else ("Enam bulan. Satu hasil aplikasi." if locale == "ms" else "六个月。一项企业应用成果。"), s["h1"]),
        Paragraph(copy["sections"][0][1], s["body"]),
        PageBreak(),
    ]
    for title, body in copy["sections"][1:]:
        story.extend([
            Paragraph(title, s["h1"]),
            Paragraph(body, s["body"]),
            Spacer(1, 7 * mm),
        ])
    story.extend([PageBreak(), Paragraph(copy["fit_title"], s["h1"])])
    for index, item in enumerate(copy["checks"], start=1):
        box = Table([[Paragraph(f"{index:02d}", s["h2"]), Paragraph(item, s["body"])]], colWidths=[18 * mm, 156 * mm])
        box.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), PALE),
            ("BOX", (0, 0), (-1, -1), 0.5, LINE),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 9),
            ("RIGHTPADDING", (0, 0), (-1, -1), 9),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ]))
        story.extend([box, Spacer(1, 3.5 * mm)])
    cta = Table([[Paragraph(f'<link href="mailto:{EMAIL}"><font color="#FFFFFF">{copy["cta"]}</font></link>', s["h2"])]], colWidths=[174 * mm])
    cta.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 11),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
    ]))
    story.extend([Spacer(1, 5 * mm), cta, Spacer(1, 4 * mm), Paragraph(copy["notice"], s["small"])])

    doc = BaseDocTemplate(str(OUT / copy["filename"]), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=25 * mm, bottomMargin=21 * mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="content")
    doc.addPageTemplates([PageTemplate(id="guide", frames=[frame], onPage=page_chrome)])
    doc.build(story)
    print(f"Created {OUT / copy['filename']}")


for locale, copy in GUIDES.items():
    build(locale, copy)

SUPPLEMENTAL_GUIDES = [
    (
        "ms",
        {
            **GUIDES["ms"],
            "filename": "future-ready-decision-guide-ms.pdf",
            "kicker": "PANDUAN KEPUTUSAN PERIBADI",
            "title": "Adakah program enam bulan ini sesuai untuk anda?",
            "lead": "Gunakan panduan ini untuk menyemak kesesuaian program, komitmen masa, hasil aplikasi, yuran dan soalan yang perlu dijawab sebelum anda membuat pertanyaan.",
        },
    ),
    (
        "zh",
        {
            **GUIDES["zh"],
            "filename": "future-ready-decision-guide-zh.pdf",
            "kicker": "个人课程决策指南",
            "title": "这项六个月课程适合您吗？",
            "lead": "咨询前先核对课程是否适合您、时间投入、企业应用成果、费用及需要获得明确答复的问题。",
        },
    ),
    (
        "ms",
        {
            **GUIDES["ms"],
            "filename": "future-ready-employer-funding-brief-ms.pdf",
            "kicker": "RINGKASAN PEMBIAYAAN MAJIKAN",
            "title": "Maklumat program untuk perbualan bersama majikan.",
            "lead": "Ringkasan enam bulan untuk pengurus, HR dan pemimpin pembelajaran yang menilai penajaan atau permohonan geran HRD Corp oleh majikan.",
            "cta": "Minta dokumen program untuk majikan",
        },
    ),
    (
        "zh",
        {
            **GUIDES["zh"],
            "filename": "future-ready-employer-funding-brief-zh.pdf",
            "kicker": "雇主资助简报",
            "title": "供您与雇主讨论的课程资料。",
            "lead": "为正在评估公司赞助或雇主提交 HRD Corp grant 申请的经理、HR 团队及学习负责人提供六个月课程摘要。",
            "cta": "索取雇主课程文件",
        },
    ),
    (
        "ms",
        {
            **GUIDES["ms"],
            "filename": "future-ready-scholarship-eligibility-ms.pdf",
            "kicker": "MAKLUMAT KELAYAKAN BIASISWA",
            "title": "Fahami yuran dan proses penilaian biasiswa.",
            "lead": "Yuran standard ialah RM10,000.00. Pemohon Malaysia yang layak boleh dipertimbangkan untuk biasiswa LIFE Innoversity; sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis.",
            "cta": "Tanya tentang penilaian biasiswa",
        },
    ),
    (
        "zh",
        {
            **GUIDES["zh"],
            "filename": "future-ready-scholarship-eligibility-zh.pdf",
            "kicker": "奖学金资格资料",
            "title": "了解课程费用及奖学金评估流程。",
            "lead": "标准课程费用为 RM10,000.00。符合资格的马来西亚申请者可接受 LIFE Innoversity 奖学金评估；任何奖学金金额及应付费用均会个别以书面确认。",
            "cta": "咨询奖学金评估流程",
        },
    ),
]

# NOTE: The decision, employer and scholarship guides (all languages) are now
# produced by generate-lead-magnet-pdfs.py with distinct, deeper content
# (comparison table, FAQ, per-document sections). This generator builds only the
# working-managers guide above, so the two do not overwrite each other.
# SUPPLEMENTAL_GUIDES is retained for reference and intentionally not built.
