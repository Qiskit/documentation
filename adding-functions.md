# Add a new IBM Quantum Function

This checklist covers bringing a new IBM Quantum Function's documentation into this repo from the partner's private repo. A Function typically includes a guide, an API reference, one or more tutorials, and images. Each Function gets its own subsite under `docs/functions/<slug>/`. For a complete example, see `docs/functions/quantum-elements-orbit/` and the files that link to it.

## 0. Intake

- [ ] Unzip the source into a scratch folder outside the repo (for example, `/tmp/functions-intake/<name>/`) and inventory the contents: API reference, guide, tutorials, images, and extras (`requirements.txt`, data files).
- [ ] Agree on the slug (for example, `provider-function-name`). It is used for the subsite folder, every URL, and the image folders.
- [ ] Decide whether it is a **circuit** function or an **application** function. That decides its parent landing page, its placement in each table of contents, and its row in the Functions table.
  - Circuit functions use `/docs/guides/circuit-functions` as their parent.
  - Application functions use the landing page for their domain: `/docs/guides/optimization`, `/docs/guides/hamiltonian-simulation`, `/docs/guides/machine-learning`, or `/docs/guides/differential-equations`.

## 1. Content files

- [ ] Guide: `docs/functions/<slug>/index.ipynb` (a notebook if it has non-trivial code). Its URL is `/docs/functions/<slug>`.
- [ ] API reference: `docs/functions/<slug>/api-reference.mdx`. Its URL is `/docs/functions/<slug>/api-reference`. Functions API pages are hand-authored, unlike the generated pages under `docs/api/`. The subsite's table of contents links the guide and the API reference, so the API page doesn't need a `<CardGroup>` header.
- [ ] Tutorials: `docs/tutorials/<descriptive-name>.ipynb`. Tutorials stay in the shared tutorials folder, not in the subsite.
- [ ] Subsite table of contents: `docs/functions/<slug>/_toc.json`. Copy one from an existing Function of the same type, and set:
  - `parentUrl` to the parent landing page from step 0, with `parentLabel` set to `"Documentation"`.
  - `title` to `"<Provider> <Function name>"`, as in `"Qedma QESEM"`.
  - The children: a "Documentation home" entry for the guide, a "Tutorials" section with each tutorial, and an "API reference" section with a "Python API reference" entry.
- [ ] Frontmatter on every page: `title`, plus a `description` of 50–160 characters with no colons, semicolons, backticks, or pipes.
- [ ] Matching titles: if a notebook also has `title` or `description` in its notebook metadata, make them match the frontmatter. The tutorial's title must also match its link text in `docs/tutorials/_toc.json`, `docs/tutorials/index.mdx`, and the subsite `_toc.json`, or the checks fail.
- [ ] Version-info cell in guide notebooks: the notebook tester fills in a cell tagged `version-info` with the package versions used, and `tox -e lint` fails if a guide notebook has none, or more than one.
  - Put the frontmatter, the `cspell:ignore` comment, and the H1 heading in the first markdown cell. If that cell also contains body content, split the body into its own cell.
  - Insert an empty markdown cell immediately after the heading cell, and add `version-info` to its `tags` metadata.
- [ ] Internal links use `/docs/...` with no file extension. Rewrite any links to the partner's private repo or to relative files. Common targets:
  - Guide and API reference: `/docs/functions/<slug>` and `/docs/functions/<slug>/api-reference`.
  - Setup steps: `/docs/ibm-quantum-platform/functions-get-started`, with anchors such as `#install-qiskit-functions-catalog-client`, `#check-job-status`, and `#retrieve-results`.
- [ ] Naming: match the wording that the other Function pages use.
  - Use "quantum function" in prose, not "Qiskit Function". Use "Quantum Functions Catalog", not "Qiskit Functions Catalog". Don't change the package name `qiskit-ibm-catalog` or code identifiers.
  - Use this exact beta note: "Quantum Functions are a beta feature available only to IBM Quantum&reg; Premium Plan, Flex Plan, and On-Prem (through the IBM Quantum Platform API) Plan users. Beta features are subject to change."
- [ ] Style pass against [style-guide.md](style-guide.md): sentence-case headings, no "please"/"may"/Latin abbreviations, &reg; on first use, and wording that machine-translates well.

## 2. Images

- [ ] Place each image in `public/docs/images/{guides|tutorials}/<page-name>/` and reference it as `/docs/images/...`. Guide images use the slug as the folder name (`public/docs/images/guides/<slug>/`), even though the guide itself lives under `docs/functions/`.
- [ ] Convert raster images to AVIF (for example, with `avifenc` or ImageMagick). Keep vector diagrams as SVG.
- [ ] Swap in the design team's retouched images where they exist.
- [ ] Add an `@dark` variant for any image with a white background.
- [ ] Give every image meaningful alt text.
- [ ] Notebook output plots don't need manual work. `./fix` extracts them to `extracted-outputs/*.avif` automatically.

## 3. Registration

Readers reach a Function subsite only through cards and links on other pages, so register the Function everywhere in this list. Use the launch date for `isNewDate`.

- [ ] Parent landing page from step 0 (for example, `docs/guides/circuit-functions.mdx`): add a `<Card>` that links to `/docs/functions/<slug>`. Without it, the subsite has no entry point.
- [ ] `docs/guides/tools-index.mdx`: add the same card. Cards are in alphabetical order by title.
- [ ] `docs/api/functions/_toc.json`: add the API page under Circuit functions or Application functions, with the URL `/docs/functions/<slug>/api-reference`, `untranslatable: true`, `isNew`, and `isNewDate`.
- [ ] `docs/tutorials/_toc.json` and `docs/tutorials/index.mdx`: add each tutorial under "IBM Quantum Functions", with `isNew` and `isNewDate` in the table of contents.
- [ ] `docs/guides/functions.mdx`: add a row to the correct table, with links to the guide, the API reference, and the license. Add the provider to `cspell:ignore` if needed.
- [ ] `qiskit_bot.yaml`: add an entry for every new page, with the partner's GitHub handles. The keys are `docs/functions/<slug>/index`, `docs/functions/<slug>/api-reference`, and `docs/tutorials/<name>` for each tutorial.
- [ ] `scripts/config/notebook-testing.toml`: add `docs/functions/<slug>/index.ipynb` and each tutorial notebook to the `exclude` group ("not accessible in the test environment").
- [ ] `docs/guides/changelog-qiskit-functions.mdx`: add an announcement entry (optional, depending on release timing).
- [ ] Don't add the Function to `docs/guides/_toc.json`. The subsite's own `_toc.json` replaces that entry.

## 4. Checks

- [ ] `./fix` (normalizes notebooks and extracts output images)
- [ ] `./check`, and fix anything it reports

## 5. Commit

Keep the partner's original content separate from copyediting, so that reviewers can see exactly what changed from the source.

- [ ] First commit: the partner files as delivered, plus only the changes needed to integrate them (file moves into the subsite, image paths, links to moved pages, `cspell:ignore` lists, and registration in the files listed in step 3).
- [ ] Second commit: all copyediting and style changes, including the naming changes in step 1, heading and title changes, rewording, table conversions, and alt text.
