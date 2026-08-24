"""Replace the superseded RM5,000 scholarship figures in released PDFs.

The source PDFs came from several authoring systems, so this script performs a
layout-preserving text replacement using each document's embedded font, size,
colour and baseline.  Replacement order is explicit because some documents
show both the scholarship amount (RM4,000) and the approved recipient fee
(RM6,000) on the same page.
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pymupdf


REPLACEMENTS = {
    "future-ready-decision-guide.pdf": ["RM4,000.00"],
    "future-ready-decision-guide-ms.pdf": ["RM4,000.00"],
    "future-ready-decision-guide-zh.pdf": ["RM4,000.00"],
    "future-ready-scholarship-eligibility.pdf": [
        "RM4,000", "RM4,000", "RM6,000", "RM4,000", "RM6,000", "RM6,000.00"
    ],
    "future-ready-scholarship-eligibility-zh.pdf": [
        "RM4,000", "RM4,000", "RM6,000", "RM4,000", "RM6,000", "RM6,000.00"
    ],
    "future-ready-scholarship-eligibility-ms.pdf": [
        "RM4,000", "RM4,000", "RM6,000", "RM4,000", "RM6,000", "RM6,000.00"
    ],
    "working-managers-guide-2026.pdf": ["RM4,000", "RM4,000.00 ", "RM6,000.00"],
    "panduan-pengurus-bekerja-2026.pdf": ["RM4,000", "RM4,000.00 ", "RM6,000.00"],
    "zaizhi-jingli-zhinan-2026.pdf": ["RM4,000", "RM4,000.00 ", "RM6,000.00"],
}


def rgb(colour: int) -> tuple[float, float, float]:
    return (
        ((colour >> 16) & 255) / 255,
        ((colour >> 8) & 255) / 255,
        (colour & 255) / 255,
    )


def occurrences(page: pymupdf.Page) -> list[pymupdf.Rect]:
    """Return longest, non-overlapping RM5,000 matches in reading order."""
    candidates: list[pymupdf.Rect] = []
    for needle in ("RM5,000.00", "RM5,000"):
        for rect in page.search_for(needle):
            if any(existing.contains(rect) or rect.contains(existing) for existing in candidates):
                continue
            candidates.append(rect)
    return sorted(candidates, key=lambda rect: (round(rect.y0, 1), round(rect.x0, 1)))


def span_for(page: pymupdf.Page, rect: pymupdf.Rect) -> dict:
    matches: list[dict] = []
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            for span in line.get("spans", []):
                span_rect = pymupdf.Rect(span["bbox"])
                if span_rect.intersects(rect) and "RM5,000" in span["text"]:
                    matches.append(span)
    if not matches:
        raise RuntimeError(f"No styled text span found for {rect}")
    return min(matches, key=lambda span: pymupdf.Rect(span["bbox"]).get_area())


def font_file(font_name: str) -> Path:
    """Use complete system fonts so the new 4 and 6 glyphs are available."""
    normalized = font_name.lower()
    windows_fonts = Path("C:/Windows/Fonts")
    if "fraunces" in normalized or "times" in normalized or "serif" in normalized:
        return windows_fonts / ("georgiab.ttf" if "bold" in normalized or "semibold" in normalized else "georgia.ttf")
    if "mono" in normalized:
        return windows_fonts / ("courbd.ttf" if "bold" in normalized or "medium" in normalized else "cour.ttf")
    return windows_fonts / ("arialbd.ttf" if "bold" in normalized or "semibold" in normalized else "arial.ttf")


def update_pdf(path: Path, replacements: list[str]) -> None:
    doc = pymupdf.open(path)
    found: list[tuple[int, pymupdf.Rect, dict]] = []
    for page_number, page in enumerate(doc):
        for rect in occurrences(page):
            found.append((page_number, rect, span_for(page, rect)))

    if len(found) != len(replacements):
        raise RuntimeError(
            f"{path.name}: expected {len(replacements)} old-price occurrences, found {len(found)}"
        )

    by_page: dict[int, list[tuple[pymupdf.Rect, dict, str]]] = {}
    for (page_number, rect, span), replacement in zip(found, replacements, strict=True):
        by_page.setdefault(page_number, []).append((rect, span, replacement))

    for page_number, edits in by_page.items():
        page = doc[page_number]
        for rect, _, _ in edits:
            page.add_redact_annot(rect, fill=False)
        page.apply_redactions(images=0, graphics=0, text=0)

        for index, (rect, span, replacement) in enumerate(edits):
            embedded = font_file(span["font"])
            alias = f"Price{page_number}_{index}"
            page.insert_font(fontname=alias, fontfile=str(embedded))
            page.insert_text(
                (rect.x0, span["origin"][1]),
                replacement,
                fontname=alias,
                fontfile=str(embedded),
                fontsize=span["size"],
                color=rgb(span["color"]),
                overlay=True,
            )

    temporary = path.with_suffix(".pricing-update.pdf")
    doc.save(temporary, garbage=4, deflate=True, clean=True)
    doc.close()
    temporary.replace(path)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path("public/downloads"))
    args = parser.parse_args()
    for filename, replacements in REPLACEMENTS.items():
        path = args.root / filename
        if not path.exists():
            raise FileNotFoundError(path)
        update_pdf(path, replacements)
        print(f"Updated {path}")


if __name__ == "__main__":
    main()
