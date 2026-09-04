"""Verify the PDF pipeline is deterministic and byte-identical to the
committed output.

Builds all twelve PDFs into a temporary directory, then asserts each one is
byte-identical to the corresponding committed file in public/downloads/ and
that its page count matches the expected baseline (3 / 4 / 3 / 3 pages for
the working-manager's guide, decision guide, employer funding brief and
scholarship eligibility documents respectively, across all three languages).

Exits non-zero on any mismatch, printing the filename and both sha256
hashes (and both page counts, if those differ too).

Usage: node scripts/pdf/run.mjs scripts/pdf/check.py
"""
import hashlib
import sys
import tempfile
from pathlib import Path

import pypdfium2 as pdfium

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build import DEFAULT_OUT, LOCALES, build_all  # noqa: E402
from documents import DOCUMENTS  # noqa: E402


def sha256_of(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def page_count_of(path):
    doc = pdfium.PdfDocument(str(path))
    try:
        return len(doc)
    finally:
        # Explicitly release the file handle: on Windows, an open PdfDocument
        # keeps the underlying file locked, which would otherwise make the
        # TemporaryDirectory cleanup in main() fail with a PermissionError.
        doc.close()


def main():
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

                if not committed.exists():
                    failures.append(f"{filename}: no committed file at {committed}")
                    continue

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
                    failures.append(
                        f"{filename}: committed page count {committed_pages} != expected baseline {expected_pages}"
                    )
                if fresh_pages != expected_pages:
                    failures.append(
                        f"{filename}: rebuilt page count {fresh_pages} != expected baseline {expected_pages}"
                    )

        if failures:
            print(f"pdfs:check FAILED ({len(failures)} issue(s) across {checked} files):")
            for f in failures:
                print(" -", f)
            sys.exit(1)

        print(f"pdfs:check OK - {checked} files byte-identical to public/downloads, page counts match baseline.")


if __name__ == "__main__":
    main()
