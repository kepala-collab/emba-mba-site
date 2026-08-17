from pathlib import Path

import pypdfium2 as pdfium

output = Path("tmp/pdfs/render")
output.mkdir(parents=True, exist_ok=True)

for pdf_path in Path("public/downloads").glob("*.pdf"):
    document = pdfium.PdfDocument(str(pdf_path))
    for index in range(len(document)):
        image = document[index].render(scale=1.5).to_pil()
        image.save(output / f"{pdf_path.stem}-p{index + 1}.png")
