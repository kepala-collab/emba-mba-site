"""Deterministic builder for the twelve Future Ready lead-magnet PDFs.

Replaces the two legacy Windows-only generators
(generate-lead-magnet-pdfs.py, generate-working-manager-guides.py) with one
pipeline: document *structure* lives in scripts/pdf/documents/*.py, all
user-visible *copy* lives in scripts/pdf/copy/<lang>.json, and the bundled
OFL fonts live in scripts/pdf/fonts/. No literal PDF copy strings live in
this file — every piece of rendered text is read from the copy JSON (the
brand header / footer chrome is the one exception: it is locale-invariant
furniture that was already hardcoded, unchanged, across every language in
the legacy scripts, so it is ported as-is rather than duplicated three times
in copy.json).

Usage: node scripts/pdf/run.mjs scripts/pdf/build.py
"""
import json
import sys
from pathlib import Path

import reportlab.rl_config
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

sys.path.insert(0, str(Path(__file__).resolve().parent))
from documents import DOCUMENTS  # noqa: E402

# --------------------------------------------------------------------- PATHS
PDF_DIR = Path(__file__).resolve().parent
ROOT = PDF_DIR.parents[1]
COPY_DIR = PDF_DIR / "copy"
FONT_DIR = PDF_DIR / "fonts"
DEFAULT_OUT = ROOT / "public" / "downloads"

LOCALES = ("en", "ms", "zh")

# ---------------------------------------------------------------- DETERMINISM
# No timestamps, no UUIDs, no datetime.now() anywhere in this file. invariant=1
# makes ReportLab emit fixed IDs/dates instead of wall-clock-derived ones, so
# rebuilding produces byte-identical output.
reportlab.rl_config.invariant = 1

PDF_AUTHOR = "Future Ready Executive MBA"
PDF_SUBJECT = "Future Ready Executive MBA programme information"
PDF_CREATOR = "scripts/pdf/build.py"
PDF_PRODUCER = "ReportLab"

# ------------------------------------------------------------------- COLORS
NAVY = colors.HexColor("#102B52")
BLUE = colors.HexColor("#1B5FD1")
GOLD = colors.HexColor("#CF9B3C")
PALE = colors.HexColor("#EEF5FF")
INK = colors.HexColor("#1E3658")
MUTED = colors.HexColor("#526A89")
LINE = colors.HexColor("#D6E2F2")
FAINT = colors.HexColor("#F6F9FE")
WHITE = colors.white

# Page chrome (brand header, footer contact line) is locale-invariant English
# text, ported unchanged from generate-lead-magnet-pdfs.py's chrome() — it is
# not translated in the legacy PDFs for any language, so it stays here rather
# than being duplicated three times in copy.json.
EMAIL = "support@futurereadymba.com"
PHONE = "+60 12-981 8533"
SITE = "futurereadymba.com"

# ------------------------------------------------------------------- FONTS
FONT_FILES = {
    "NotoSans": "NotoSans-Regular.ttf",
    "NotoSansBold": "NotoSans-Bold.ttf",
    "NotoSerif": "NotoSerif-Regular.ttf",
    "NotoSerifBold": "NotoSerif-Bold.ttf",
    "NotoSansSC": "NotoSansSC-Regular.ttf",
    "NotoSansSCBold": "NotoSansSC-Bold.ttf",
}

# (sans, bold, serif) role mapping per language, mirroring the legacy FONTS
# dicts in both original scripts.
FONTS = {
    "en": ("NotoSans", "NotoSansBold", "NotoSerifBold"),
    "ms": ("NotoSans", "NotoSansBold", "NotoSerifBold"),
    "zh": ("NotoSansSC", "NotoSansSCBold", "NotoSansSCBold"),
}


def register_fonts():
    for name, filename in FONT_FILES.items():
        pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))


# ------------------------------------------------------------------- STYLES
def styles_blocks(loc):
    """Ported from generate-lead-magnet-pdfs.py's styles() — used by the
    decision guide, employer funding brief and scholarship eligibility
    documents."""
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


def styles_guide(loc):
    """Ported from generate-working-manager-guides.py's styles() — used by
    the working-manager's guide."""
    sans, bold, serif = FONTS[loc]
    zh = loc == "zh"
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


# ------------------------------------------------------------------- CHROME
def chrome(loc):
    """Ported from generate-lead-magnet-pdfs.py's chrome(). The brand name,
    footer contact line and "Page N" are locale-invariant in the legacy
    output (loc was accepted but unused there too), so they stay as fixed
    Latin text here."""

    def draw(canvas, doc):
        canvas.saveState()
        w, h = A4
        canvas.setFillColor(NAVY)
        canvas.rect(0, h - 18 * mm, w, 18 * mm, stroke=0, fill=1)
        canvas.setFillColor(WHITE)
        canvas.setFont("NotoSansBold", 9)
        canvas.drawString(17 * mm, h - 11 * mm, "FUTURE READY EXECUTIVE MBA")
        canvas.setFont("NotoSans", 7.3)
        canvas.setFillColor(colors.HexColor("#AFC6E8"))
        canvas.drawRightString(w - 17 * mm, h - 11 * mm, "RIGHT DOTS RESOURCES  |  PROGRAMME INFORMATION")
        canvas.setFillColor(GOLD)
        canvas.rect(17 * mm, h - 14.5 * mm, 18 * mm, 1.2 * mm, stroke=0, fill=1)
        canvas.setStrokeColor(LINE)
        canvas.line(17 * mm, 14 * mm, w - 17 * mm, 14 * mm)
        canvas.setFillColor(MUTED)
        canvas.setFont("NotoSans", 7.3)
        canvas.drawString(17 * mm, 8.5 * mm, f"{EMAIL}  |  {PHONE}  |  {SITE}")
        canvas.drawRightString(w - 17 * mm, 8.5 * mm, f"Page {doc.page}")
        canvas.linkURL(f"mailto:{EMAIL}", (17 * mm, 6 * mm, 70 * mm, 12 * mm), relative=0)
        canvas.restoreState()

    return draw


# ------------------------------------------------------------- BUILDING BLOCKS
def fact_band(s, facts):
    """facts: list of [value, label] pairs. Ported from both legacy
    fact_band() functions, which were identical."""
    cells = [[Paragraph(v, s["fact"]), Paragraph(l, s["fact_label"])] for v, l in facts]
    t = Table([cells], colWidths=[43.5 * mm] * 4)
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return t


def card(s, title, body):
    t = Table([[Paragraph(title, s["card_title"]), Paragraph(body, s["body"])]], colWidths=[47 * mm, 127 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
            ]
        )
    )
    return t


def compare_table(s, header, rows):
    data = [[Paragraph(header[0], s["th"]), Paragraph(header[1], s["th"]), Paragraph(header[2], s["th"])]]
    for a, ours, theirs in rows:
        data.append([Paragraph(a, s["card_title"]), Paragraph(ours, s["td"]), Paragraph(theirs, s["td_muted"])])
    t = Table(data, colWidths=[34 * mm, 74 * mm, 66 * mm])
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, LINE),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("BACKGROUND", (1, 1), (1, -1), PALE),
    ]
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
    t = Table(
        [[Paragraph(f'<link href="mailto:{EMAIL}"><font color="#FFFFFF">{label}</font></link>', s["cta"])]],
        colWidths=[174 * mm],
    )
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), NAVY),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 11),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
            ]
        )
    )
    return t


def notice(s, text):
    t = Table([[Paragraph(text, s["small"])]], colWidths=[174 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), FAINT),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return t


# ------------------------------------------------------------------ PDF WRITE
def write_pdf(story, loc, path, title):
    d = BaseDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=25 * mm,
        bottomMargin=21 * mm,
        title=title,
        author=PDF_AUTHOR,
        subject=PDF_SUBJECT,
        creator=PDF_CREATOR,
        producer=PDF_PRODUCER,
        invariant=1,
    )
    frame = Frame(d.leftMargin, d.bottomMargin, d.width, d.height, id="main")
    d.addPageTemplates([PageTemplate(id="page", frames=[frame], onPage=chrome(loc))])
    d.build(story)


# ------------------------------------------------------------- RENDER: BLOCKS
def render_blocks_document(loc, copy_doc, path):
    """Ported from generate-lead-magnet-pdfs.py's render()."""
    s = styles_blocks(loc)
    story = [
        Spacer(1, 20 * mm),
        Paragraph(copy_doc["kicker"], s["kicker"]),
        Paragraph(copy_doc["title"], s["title"]),
        Paragraph(copy_doc["lead"], s["lead"]),
        Spacer(1, 6 * mm),
        fact_band(s, copy_doc["facts"]),
        Spacer(1, 9 * mm),
        card(s, copy_doc["promise_t"], copy_doc["promise"]),
        Spacer(1, 9 * mm),
        Paragraph(copy_doc["subhead"], s["h1"]),
        Paragraph(copy_doc["intro"], s["body"]),
        Spacer(1, 8 * mm),
        cta(s, copy_doc["cover_cta"]),
        Spacer(1, 5 * mm),
        notice(s, copy_doc["cover_notice"]),
        PageBreak(),
    ]
    for block in copy_doc["blocks"]:
        kind = block["kind"]
        if kind == "h1":
            story.append(Paragraph(block["text"], s["h1"]))
        elif kind == "h2":
            story.append(Paragraph(block["text"], s["h2"]))
        elif kind == "p":
            story.append(Paragraph(block["text"], s["body"]))
        elif kind == "card":
            story.append(card(s, block["title"], block["body"]))
            story.append(Spacer(1, 4 * mm))
        elif kind == "table":
            story.append(compare_table(s, block["header"], block["rows"]))
        elif kind == "faq":
            story.extend(faq(s, block["items"]))
        elif kind == "notice":
            story.append(notice(s, block["text"]))
        elif kind == "cta":
            story.append(cta(s, block["text"]))
        elif kind == "sp":
            story.append(Spacer(1, block["mm"] * mm))
        elif kind == "pb":
            story.append(PageBreak())
        else:
            raise ValueError(f"unknown block kind: {kind!r}")
    write_pdf(story, loc, path, copy_doc["title"])


# -------------------------------------------------------------- RENDER: GUIDE
def render_guide_document(loc, copy_doc, path):
    """Ported from generate-working-manager-guides.py's build()."""
    s = styles_guide(loc)
    story = [
        Spacer(1, 27 * mm),
        Paragraph(copy_doc["kicker"], s["kicker"]),
        Paragraph(copy_doc["title"], s["title"]),
        Paragraph(copy_doc["lead"], s["lead"]),
        Spacer(1, 8 * mm),
        fact_band(s, copy_doc["facts"]),
        Spacer(1, 16 * mm),
        Paragraph(copy_doc["cover_h1"], s["h1"]),
        Paragraph(copy_doc["sections"][0][1], s["body"]),
        PageBreak(),
    ]
    for title, body in copy_doc["sections"][1:]:
        story.extend([Paragraph(title, s["h1"]), Paragraph(body, s["body"]), Spacer(1, 7 * mm)])
    story.extend([PageBreak(), Paragraph(copy_doc["fit_title"], s["h1"])])
    for index, item in enumerate(copy_doc["checks"], start=1):
        box = Table(
            [[Paragraph(f"{index:02d}", s["h2"]), Paragraph(item, s["body"])]],
            colWidths=[18 * mm, 156 * mm],
        )
        box.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), PALE),
                    ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 9),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                    ("TOPPADDING", (0, 0), (-1, -1), 8),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
                ]
            )
        )
        story.extend([box, Spacer(1, 3.5 * mm)])
    cta_table = Table(
        [[Paragraph(f'<link href="mailto:{EMAIL}"><font color="#FFFFFF">{copy_doc["cta"]}</font></link>', s["h2"])]],
        colWidths=[174 * mm],
    )
    cta_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), NAVY),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 11),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
            ]
        )
    )
    story.extend([Spacer(1, 5 * mm), cta_table, Spacer(1, 4 * mm), Paragraph(copy_doc["notice"], s["small"])])
    write_pdf(story, loc, path, copy_doc["title"])


RENDERERS = {
    "blocks": render_blocks_document,
    "guide": render_guide_document,
}


# ----------------------------------------------------------------------- MAIN
def load_copy():
    return {loc: json.loads((COPY_DIR / f"{loc}.json").read_text(encoding="utf-8")) for loc in LOCALES}


def build_all(out_dir=DEFAULT_OUT):
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    register_fonts()
    copy = load_copy()
    written = []
    for document in DOCUMENTS:
        renderer = RENDERERS[document["layout"]]
        for loc in LOCALES:
            copy_doc = copy[loc][document["id"]]
            filename = document["filenames"][loc]
            path = out_dir / filename
            renderer(loc, copy_doc, path)
            written.append(path)
            print("  ", filename)
    return written


if __name__ == "__main__":
    print("Building PDFs:")
    build_all()
