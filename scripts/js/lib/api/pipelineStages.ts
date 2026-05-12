// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

// Stages shared between the API docs pipeline (apiDocsPipeline.ts) and the
// addon docs pipeline (addonDocsPipeline.ts). Each pipeline orchestrates these
// stages differently; shared behavior lives here so the two pipelines do not
// drift.

import { dirname, join, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { load } from "cheerio";
import { mkdirp } from "mkdirp";
import { uniqBy } from "lodash-es";

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { ObjectsInv } from "./objectsInv.js";
import { Pkg } from "./Pkg.js";
import addFrontMatter from "./addFrontMatter.js";
import { dedupeHtmlIdsFromResults } from "./dedupeHtmlIds.js";
import { handleReleaseNotesFile } from "./releaseNotes.js";
import { mergeClassMembers } from "./mergeClassMembers.js";
import { normalizeResultUrls } from "./normalizeResultUrls.js";
import { DOCS_BASE_PATH } from "./paths.js";
import removeMathBlocksIndentation from "./removeMathBlocksIndentation.js";
import { saveImages } from "./saveImages.js";
import { specialCaseResults } from "./specialCaseResults.js";
import { sphinxHtmlToMarkdown } from "./htmlToMd.js";
import { updateLinks } from "./updateLinks.js";

// ---------------------------------------------------------------------------
// HTML → markdown conversion
// ---------------------------------------------------------------------------

export type FrontMatterSource = "api" | "html-meta";

/**
 * Convert each HTML file to a markdown result with an internal URL.
 *
 * `imageDestination` is the URL prefix embedded in the rendered `<img src>` of
 * each page (e.g. `/docs/images/api/qiskit` or `/docs/images/addons/qiskit-addon-obp`).
 * Each pipeline chooses the prefix appropriate to where it will copy images.
 *
 * When `frontMatterSource === "html-meta"`, the result's metadata is annotated
 * with `hardcodedFrontmatter` extracted from the HTML `<title>` and
 * `<meta name="description">` tags. This feeds the addon pipeline's frontmatter
 * writer, which emits YAML directly from these values (addon guides/tutorials
 * have no Sphinx-generated metadata to draw from).
 */
export async function convertHtmlToMarkdown(
  pkg: Pkg,
  artifactPath: string,
  docsBaseFolder: string,
  outputPath: string,
  filePaths: string[],
  imageDestination: string,
  frontMatterSource: FrontMatterSource,
): Promise<HtmlToMdResultWithUrl[]> {
  const results: HtmlToMdResultWithUrl[] = [];
  for (const file of filePaths) {
    const html = await readFile(join(artifactPath, file), "utf-8");
    const result = await sphinxHtmlToMarkdown({
      html,
      fileName: file,
      determineGithubUrl: pkg.determineGithubUrlFn(),
      imageDestination,
      releaseNotesTitle: pkg.releaseNotesTitle(),
      hasSeparateReleaseNotes: pkg.hasSeparateReleaseNotes(),
      isCApi: pkg.isCApi(),
      hasRootNamespaceFile: pkg.hasRootNamespaceFile,
    });

    // Skip empty markdown (HTML redirects, etc.).
    if (result.markdown == "") continue;

    if (frontMatterSource === "html-meta") {
      result.meta.hardcodedFrontmatter = extractHtmlFrontmatter(html);
    }

    const { dir, name } = parse(`${outputPath}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;
    results.push({ ...result, url });
  }
  return results;
}

function extractHtmlFrontmatter(html: string): string {
  const $ = load(html);
  const title = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim();
  const lines = [`title: "${title}"`];
  if (description) lines.push(`description: "${description}"`);
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Post-processing (runs on markdown results after HTML conversion)
// ---------------------------------------------------------------------------

export interface PostProcessOptions {
  /**
   * When true, rewrite markdown links of the form `](apidocs/foo)` (or
   * `apidoc/`, `stubs/`) into absolute `](/docs/api/{pkg}/foo)` paths before
   * running updateLinks. Used by the addon pipeline where non-API guides
   * reference API pages via the Sphinx artifact's relative `apidocs/...`
   * paths.
   */
  rewriteApidocsLinks: boolean;

  /**
   * Same-package inventory. May be undefined for packages where we
   * intentionally skip loading the inventory (e.g. problematic legacy Qiskit).
   */
  objectsInv: ObjectsInv | undefined;

  /**
   * Cross-package inventories for resolving `qiskit.github.io/{pkg}/stubs/...`
   * links to other packages' API docs. Used by the addon pipeline; pass
   * undefined for pure API runs.
   */
  allInvs?: Map<string, ObjectsInv>;

  /** Where the frontmatter should come from when `addFrontMatter` runs. */
  frontMatter: FrontMatterSource;
}

/**
 * Apply the shared post-processing pipeline to a set of results.
 * Order is load-bearing — both pipelines call the stages in this sequence.
 */
export async function postProcess(
  pkg: Pkg,
  initialResults: HtmlToMdResultWithUrl[],
  options: PostProcessOptions,
): Promise<HtmlToMdResultWithUrl[]> {
  const results = await mergeClassMembers(initialResults);

  normalizeResultUrls(results, {
    kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
    pkgName: pkg.name,
  });

  specialCaseResults(results);

  if (options.rewriteApidocsLinks) {
    const apiBase = pkg.apiOutputDir(DOCS_BASE_PATH);
    for (const result of results) {
      result.markdown = result.markdown.replace(
        /\]\((?:\.\.\/)*?(apidocs|apidoc|stubs)\/([^)]+)\)/g,
        `](${apiBase}/$2)`,
      );
    }
  }

  await updateLinks(
    results,
    {
      kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
      pkgName: pkg.name,
      pkgOutputDir: pkg.apiOutputDir(DOCS_BASE_PATH),
    },
    options.objectsInv,
    options.allInvs,
  );

  await dedupeHtmlIdsFromResults(results);

  if (options.frontMatter === "api") {
    addFrontMatter(results, pkg);
  } else {
    applyHtmlMetaFrontmatter(results);
  }

  removeMathBlocksIndentation(results);
  return results;
}

function applyHtmlMetaFrontmatter(results: HtmlToMdResultWithUrl[]): void {
  for (const result of results) {
    const markdown = result.markdown;
    result.markdown = `---
${result.meta.hardcodedFrontmatter}
---

${markdown}
`;
  }
}

// ---------------------------------------------------------------------------
// Writing outputs
// ---------------------------------------------------------------------------

/**
 * Write each markdown result to disk at `<docsBaseFolder>/<result.url>.mdx`.
 * Release notes are routed through `handleReleaseNotesFile` so the caller
 * doesn't have to special-case them; the pipelines that don't produce release
 * notes (addons excludes them via their glob) are unaffected.
 */
export async function writeMarkdownResults(
  pkg: Pkg,
  docsBaseFolder: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  for (const result of results) {
    const path = `${docsBaseFolder}${result.url}.mdx`;
    if (path.endsWith("release-notes.mdx")) {
      if (!pkg.releaseNotesConfig.enabled) continue;

      const shouldWriteResult = await handleReleaseNotesFile(result, pkg);
      if (!shouldWriteResult) continue;
    }

    await mkdirp(dirname(path));
    await writeFile(path, result.markdown);
  }
}

/**
 * Copy images referenced by the results from the artifact's `_images/` folder
 * into `destFolder`. The caller owns the destination path, which is how the
 * API pipeline and the addon pipeline route images to different locations
 * under `public/docs/images/`.
 */
export async function copyImages(
  pkg: Pkg,
  artifactPath: string,
  destFolder: string,
  results: HtmlToMdResultWithUrl[],
): Promise<void> {
  console.log("Saving images");
  const allImages = uniqBy(
    results.flatMap((result) => result.images),
    (image) => image.fileName,
  );
  await saveImages(allImages, `${artifactPath}/_images`, destFolder, pkg);
}
