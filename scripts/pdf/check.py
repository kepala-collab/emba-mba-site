"""Verify the PDF pipeline matches the committed output.

Builds all twelve PDFs into a temporary directory, then compares each one
against the corresponding committed file in public/downloads/. Two modes:

  - semantic (default): compares, per file, (1) page count, (2) per-page
    extracted text with whitespace normalised, and (3) the sorted set of
    embedded font base names, between the committed PDF and the fresh
    build. This is what CI runs. Raw PDF bytes are NOT portable across
    platforms -- ReportLab's zlib-compressed streams differ between
    Windows and Linux even from byte-identical input, so a strict byte
    comparison reliably fails in CI while passing locally. These three
    properties are what a PDF's *content* actually consists of, and they
    are stable across platforms for the same copy.json + fonts + code.

  - --bytes: the original byte-identical + page-count check. Only
    meaningful when comparing two builds made on the same platform (e.g.
    proving local determinism before committing regenerated PDFs) -- do
    not rely on it across OSes.

Exits non-zero on any mismatch. The failure message names exactly which
of the three semantic properties differed (or, in --bytes mode, the sha256
hashes and page counts).

Usage:
  node scripts/pdf/run.mjs scripts/pdf/check.py            # semantic (default, CI)
  node scripts/pdf/run.mjs scripts/pdf/check.py --bytes    # byte-identical (same platform only)
"""
import hashlib
import re
import sys
import tempfile
from pathlib import Path

import pypdfium2 as pdfium

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build import DEFAULT_OUT, LOCALES, build_all  # noqa: E402
from documents import DOCUMENTS  # noqa: E402

WHITESPACE_RE = re.compile(r"\s+")


def sha256_of(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def normalize_text(text):
    return WHITESPACE_RE.sub(" ", text).strip()


def page_count_of(path):
    doc = pdfium.PdfDocument(str(path))
    try:
        return len(doc)
    finally:
        # Explicitly release the file handle: on Windows, an open PdfDocument
        # keeps the underlying file locked, which would otherwise make the
        # TemporaryDirectory cleanup in main() fail with a PermissionError.
        doc.close()


def extract_semantic(path):
    """Returns (page_count, [normalised text per page], sorted embedded font base names)."""
    doc = pdfium.PdfDocument(str(path))
    try:
        page_texts = []
        font_names = set()
        for page in doc:
            textpage = page.get_textpage()
            try:
                page_texts.append(normalize_text(textpage.get_text_range()))
            finally:
                textpage.close()
            for obj in page.get_objects():
                if type(obj).__name__ == "PdfTextObj":
                    font = obj.get_font()
                    try:
                        font_names.add(font.get_base_name())
                    finally:
                        font.close()
        return len(doc), page_texts, sorted(font_names)
    finally:
        doc.close()


def check_bytes_mode(filename, committed, fresh, expected_pages, failures):
    if not committed.exists():
        failures.append(f"{filename}: no committed file at {committed}")
        return

    committed_hash = sha256_of(committed)
    fresh_hash = sha256_of(fresh)
    if committed_hash != fresh_hash:
        failures.append(
            f"{filename}: byte mismatch\n"
            f"    committed sha256: {committed_hash}\n"
            f"    rebuilt   sha256: {fresh_hash}"
        )

    committed_pages = page_count_of(committed)
    fresh_pages = page_count_of(fresh)
    if committed_pages != expected_pages:
        failures.append(f"{filename}: committed page count {committed_pages} != expected baseline {expected_pages}")
    if fresh_pages != expected_pages:
        failures.append(f"{filename}: rebuilt page count {fresh_pages} != expected baseline {expected_pages}")


def check_semantic_mode(filename, committed, fresh, expected_pages, failures):
    if not committed.exists():
        failures.append(f"{filename}: no committed file at {committed}")
        return

    committed_pages, committed_texts, committed_fonts = extract_semantic(committed)
    fresh_pages, fresh_texts, fresh_fonts = extract_semantic(fresh)

    differed = []

    if committed_pages != fresh_pages or committed_pages != expected_pages:
        differed.append(
            f"page count (committed={committed_pages}, rebuilt={fresh_pages}, expected baseline={expected_pages})"
        )

    if committed_texts != fresh_texts:
        detail = "page text"
        for index, (committed_page_text, fresh_page_text) in enumerate(zip(committed_texts, fresh_texts), start=1):
            if committed_page_text != fresh_page_text:
                detail += f" (first mismatch on page {index})"
                break
        else:
            detail += " (page count mismatch prevented a full comparison)"
        differed.append(detail)

    if committed_fonts != fresh_fonts:
        differed.append(f"embedded fonts (committed={committed_fonts}, rebuilt={fresh_fonts})")

    if differed:
        failures.append(f"{filename}: {'; '.join(differed)}")


def main():
    bytes_mode = "--bytes" in sys.argv[1:]

    with tempfile.TemporaryDirectory(prefix="pdf-check-") as tmp:
        tmp_dir = Path(tmp)
        build_all(out_dir=tmp_dir)

        failures = []
        checked = 0
        for document in DOCUMENTS:
            expected_pages = document["page_count"]
            for loc in LOCALES:
                filename = document["filenames"][loc]
                committed = DEFAULT_OUT / filename
                fresh = tmp_dir / filename
                checked += 1

                if bytes_mode:
                    check_bytes_mode(filename, committed, fresh, expected_pages, failures)
                else:
                    check_semantic_mode(filename, committed, fresh, expected_pages, failures)

        mode_label = "byte-identical" if bytes_mode else "semantic: page count / page text / embedded fonts"
        if failures:
            print(f"pdfs:check FAILED [{mode_label}] ({len(failures)} issue(s) across {checked} files):")
            for f in failures:
                print(" -", f)
            sys.exit(1)

        print(f"pdfs:check OK [{mode_label}] - {checked} files match public/downloads.")


if __name__ == "__main__":
    main()
