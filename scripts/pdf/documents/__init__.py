"""Registry of the four document definitions, in a fixed, deterministic order.

Each module's DOCUMENT dict carries only structure (id, layout, filenames per
language, expected page count) — never literal copy strings. build.py and
check.py both import DOCUMENTS from here so the document list is declared
exactly once.
"""
from . import decision_guide, employer_funding_brief, scholarship_eligibility, working_managers_guide

DOCUMENTS = [
    working_managers_guide.DOCUMENT,
    decision_guide.DOCUMENT,
    employer_funding_brief.DOCUMENT,
    scholarship_eligibility.DOCUMENT,
]
