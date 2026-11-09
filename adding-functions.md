# Add a new Qiskit Function

This checklist covers bringing a new Qiskit Function's documentation into this repo from the partner's private repo. A Function typically includes an API reference, a guide, one or more tutorials, and images. For a complete example, see the commit that added Orbit (`be9f5739ac`).

## 0. Intake

- [ ] Unzip the source into a scratch folder outside the repo (for example, `/tmp/functions-intake/<name>/`) and inventory the contents: API reference, guide, tutorials, images, and extras (`requirements.txt`, data files).
- [ ] Agree on the slug (for example, `provider-function-name`). It is used for every file name, URL, and image folder.
- [ ] Decide whether it is a **circuit** function or an **application** function. That decides its placement in each table of contents and table.

## 1. Content files

- [ ] API reference: `docs/api/functions/<slug>.mdx`. Functions API pages are hand-authored, unlike the rest of `docs/api/`. Start with the `<CardGroup>`/`<Card>` header that links to the guide, as in `docs/api/functions/quantum-elements-orbit.mdx`.
- [ ] Guide: `docs/guides/<slug>.ipynb` (a notebook if it has non-trivial code).
- [ ] Tutorials: `docs/tutorials/<descriptive-name>.ipynb`.
- [ ] Frontmatter on every page: `title`, plus a `description` of 50–160 characters with no colons, semicolons, backticks, or pipes.
- [ ] Matching titles: if a notebook also has `title` or `description` in its notebook metadata, make them match the frontmatter. The tutorial's title must also match its link text in `docs/tutorials/_toc.json` and `docs/tutorials/index.mdx`, or the checks fail.
- [ ] Version-info cell in guide notebooks: the notebook tester fills in a cell tagged `version-info` with the package versions used, and `tox -e lint` fails if a guide notebook has none, or more than one.
  - Put the frontmatter, the `cspell:ignore` comment, and the H1 heading in the first markdown cell. If that cell also contains body content, split the body into its own cell.
  - Insert an empty markdown cell immediately after the heading cell, and add `version-info` to its `tags` metadata.
- [ ] Internal links use `/docs/...` with no file extension. Rewrite any links to the partner's private repo or to relative files.
- [ ] Style pass against [style-guide.md](style-guide.md): sentence-case headings, no "please"/"may"/Latin abbreviations, &reg; on first use, and wording that machine-translates well.

## 2. Images

- [ ] Place each image in `public/docs/images/{guides|tutorials}/<page-name>/` and reference it as `/docs/images/...`.
- [ ] Convert raster images to AVIF (for example, with `avifenc` or ImageMagick). Keep vector diagrams as SVG.
- [ ] Swap in the design team's retouched images where they exist.
- [ ] Add an `@dark` variant for any image with a white background.
- [ ] Give every image meaningful alt text.
- [ ] Notebook output plots don't need manual work. `./fix` extracts them to `extracted-outputs/*.avif` automatically.

## 3. Registration

- [ ] `docs/guides/_toc.json`: add the guide under Circuit functions or Application functions, with `isNew` and `isNewDate`.
- [ ] `docs/api/functions/_toc.json`: add the API page, with `untranslatable: true`, `isNew`, and `isNewDate`.
- [ ] `docs/tutorials/_toc.json` and `docs/tutorials/index.mdx`: add each tutorial.
- [ ] `qiskit_bot.yaml`: add an entry for every new page (guide, API reference, and each tutorial), with the partner's GitHub handles.
- [ ] `scripts/config/notebook-testing.toml`: add the new notebooks to the `exclude` group ("not accessible in the test environment").
- [ ] `docs/guides/functions.mdx`: add a row to the correct table with links to the guide, API reference, and license. Add the provider to `cspell:ignore` if needed.
- [ ] `docs/guides/changelog-qiskit-functions.mdx`: add an announcement entry (optional, depending on release timing).

## 4. Checks

- [ ] `./fix` (normalizes notebooks and extracts output images)
- [ ] `npm run check:spelling` (add real terms to the dictionary or to a page's `cspell:ignore`)
- [ ] `npm run check:markdown`
- [ ] `npm run check:internal-links`
- [ ] `npm run check:orphan-pages`
- [ ] `npm run check:toc`
- [ ] `npm run check:qiskit-bot`
- [ ] `npm run check:stale-images`
- [ ] Optional: `npm run check:fmt` and the full `./check` before handoff

## 5. Commit

Keep the partner's original content separate from copyediting, so that reviewers can see exactly what changed from the source.

- [ ] First commit: the partner files as delivered, plus only the changes needed to integrate them (file renames, image paths, links to renamed pages, `cspell:ignore` lists, and registration in the files listed in step 3).
- [ ] Second commit: all copyediting and style changes, including heading and title changes, rewording, table conversions, and alt text.
