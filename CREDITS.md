# Sources, licences and artwork

## OCR engine
Tesseract.js 6.0.1 — Naptha / Tesseract.js contributors. Apache License 2.0.
https://github.com/naptha/tesseract.js
Full licence: vendor/tesseract/LICENSE.

Tesseract.js-core 6.0.0 — Tesseract.js and Tesseract contributors. WebAssembly builds of the Tesseract OCR engine, with SIMD and non-SIMD / LSTM variants. Apache License 2.0. Full notice: vendor/core/LICENSE.
https://github.com/naptha/tesseract.js-core

English (eng), French (fra), German (deu) and Spanish (spa) integer LSTM models from Tesseract's tessdata_fast, retrieved 29 October 2026 and gzip-compressed for delivery. Apache License 2.0. Full licence: lang/LICENSE.
https://github.com/tesseract-ocr/tessdata_fast
Model files are not retrained or changed; only gzip packaging is applied. File hashes are recorded in ASSET-HASHES.json.

## PDFs
PDF.js / pdfjs-dist 5.4.624 — Mozilla and PDF.js contributors. Apache License 2.0.
https://github.com/mozilla/pdf.js
Full licence: vendor/pdfjs/LICENSE. Bundled character maps, standard fonts and WASM decoders retain their own notices in the corresponding directories. Those notices remain part of this distribution.

pdf-lib 1.17.1 — Andrew Dillon / Hopding and contributors. MIT licence.
https://github.com/Hopding/pdf-lib
Full licence: vendor/pdf-lib/LICENSE.
Used to combine Tesseract-generated searchable PDF pages. It does not recreate document layout or replace text from user edits.

All runtime assets are included locally. Published npm package files are used for the pinned library versions; no runtime CDN requests are required.

## Original application and artwork
Application interface, image preparation, workflow logic and sample/test documents were created for JengaCode. The sample page and two-page PDF are original demonstration material, not imported book pages.

images/reading-study.webp — original AI-generated illustration created for JengaCode, 29 October 2026, using the built-in image generation tool. Brief: a Victorian brass optical reading machine, magnifying lens, mechanical rollers, cream notebook, loose papers, letterpress types and dip pen; scientific engraving and restrained watercolour in copper, parchment, walnut and muted teal, portrait, no readable words or labels. Generated master preserved separately; web asset resized to 640×960 WebP.

The existing compass header follows the JengaCode application design. No third-party stock illustrations or external font services are used.
