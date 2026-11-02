# Document OCR Studio — JengaCode

## Install
Upload this entire document-ocr folder to public_html/apps/document-ocr/.
Open /apps/document-ocr/ on your website. No build, npm, API key, account or OCR server is required. Keep the index beside css/, js/, images/, lang/, vendor/ and credits.html.

The WASM engines and English, French, German and Spanish models are bundled locally. Recognition does not upload documents or use a third-party API. Your browser may cache language models in IndexedDB. Documents/transcriptions remain in memory until the page is closed or cleared. The app contains no analytics.

Serve over HTTP/HTTPS; do not open index.html with file://. Most static hosts serve .mjs, .js, .wasm, .png and .gz correctly. Traineddata.gz files must be delivered as raw gzip bytes (do not configure Content-Encoding: gzip on these model assets). JavaScript modules should have a JavaScript MIME type and WASM application/wasm. A local Windows Python launcher is included for preview.

## Use
1. Open images or a PDF, or try the sample.
2. Select a page from the left list (the page selector on small screens).
3. Rotate sideways pages, adjust straighten/contrast, or drag a crop and apply it. Restore original reverses preparation edits.
4. Choose a language and page layout. Recognise one page or all pages.
5. Review/correct text. Word regions are teal; regions with confidence below 70 are copper.
6. Copy one page, export all recognised transcriptions as TXT, or export a searchable PDF of recognised pages with current preparation.

TXT includes manual text edits. The searchable PDF uses each prepared page image and Tesseract's original OCR text layer. Manual text edits are NOT written into that PDF layer. Pages whose preparation changed are excluded from PDF export until recognised again. Re-recognising replaces the page transcription.

PDFs are rasterised with PDF.js and then OCR'd, including PDFs that already contain text. Password-protected PDFs are not supported. PNG/JPEG/WebP/BMP are supported according to the browser decoder. Maximum 20 loaded pages and 40 MB per input file; PDF imports stop at the 20-page limit. Working images are scaled down to a 2600-pixel maximum edge to limit memory; perspective correction and automatic full-page orientation are not included. Straightening is manual (-10 to +10 degrees), alongside 90-degree rotation. Cropping commits the current preparation as a new working image. Restoring the original remains possible.

Best for printed text, rather than handwriting or faithful table reconstruction. Confidence is an engine estimate, not a guarantee. Complex layouts and reading order need review. No DOCX layout export is claimed.

## Verification
Run node tests/core.test.cjs for image preparation, transparent pixel handling, crop bounds and block parsing. Browser QA covers the bundled sample, actual PDF page import, multi-page recognition, editable text, regions and PDF construction. tests/two-pages.pdf is an original test fixture. Source library versions and licences appear in CREDITS.md and vendor directories.

This package contains only the new app. It does not replace the homepage or applications directory.
