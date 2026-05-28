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

import { Image, HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
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

export async function convertHtmlToMarkdown(
  pkg: Pkg,
  artifactPath: string,
  docsBaseFolder: string,
  outputPath: string,
  filePaths: string[],
  imageDestination: string,
  extractfrontMatter?: boolean,
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

    const { dir, name } = parse(`${outputPath}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;

    if (extractfrontMatter) {
      // extracts front matter from html source rather than generating it in addFrontMatter.js
      result.meta.hardcodedFrontmatter = extractHtmlFrontmatter(html, pkg, url);
    }
    results.push({ ...result, url });
  }
  return results;
}

/**
 * Extract title/description frontmatter directly from the Sphinx HTML <h1>.
 * Used by the addon pipeline (extractfrontMatter=true) so addon pages get
 * human-readable titles rather than the auto-generated slugs that addFrontMatter.ts
 * would derive from the URL.
 */
function extractHtmlFrontmatter(html: string, pkg: Pkg, url: string): string {
  const $ = load(html);
  const h1 = $("h1")
    .first()
    .clone()
    .find("a.headerlink")
    .remove()
    .end()
    .text()
    .trim();
  const isRootIndex = url.endsWith(`/${pkg.name}/index`);
  const description = isRootIndex
    ? `Documentation for the latest version of ${pkg.title}`
    : `${h1} for the latest version of ${pkg.title}`;
  return [`title: "${h1}"`, `description: "${description}"`].join("\n");
}

/**
 * Apply the shared post-processing pipeline to a set of results.
 * Order is load-bearing — both pipelines call the stages in this sequence.
 */
export async function postProcess(
  pkg: Pkg,
  initialResults: HtmlToMdResultWithUrl[],
  objectsInv: ObjectsInv | undefined,
  allInvs?: Map<string, ObjectsInv>,
): Promise<HtmlToMdResultWithUrl[]> {
  const results = await mergeClassMembers(initialResults);

  normalizeResultUrls(results, {
    kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
    pkgName: pkg.name,
  });

  specialCaseResults(results);
  rewriteApiDocsLinks(results, pkg);

  await updateLinks(
    results,
    {
      kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
      pkgName: pkg.name,
      pkgOutputDir: pkg.apiOutputDir(DOCS_BASE_PATH),
    },
    objectsInv,
    allInvs,
  );

  await dedupeHtmlIdsFromResults(results);
  removeMathBlocksIndentation(results);
  addFrontMatter(results, pkg);
  return results;
}

function rewriteApiDocsLinks(results: HtmlToMdResultWithUrl[], pkg: Pkg) {
  const apiBase = pkg.apiOutputDir(DOCS_BASE_PATH);
  const githubIo = `https://qiskit.github.io/${pkg.name}`;
  for (const result of results) {
    result.markdown = result.markdown
      .replace(
        /\]\((?:\.\.\/)*?(apidocs|apidoc|stubs)\/([^)]+)\)/g,
        `](${apiBase}/$2)`,
      )
      // Release notes live under the API pipeline's output, even when
      // referenced from addon guides/tutorials. Catches relative
      // `release-notes.html`, github.io-absolute, and .html-less forms.
      .replace(
        new RegExp(
          `\\]\\((?:${githubIo}/|(?:\\.\\./)*?)release[_-]notes(?:\\.html)?(#[^)]*)?\\)`,
          "g",
        ),
        `](${apiBase}/release-notes$1)`,
      );
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
) {
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
  extraImages: Image[] = [],
) {
  console.log("Saving images");
  const allImages = uniqBy(
    [...results.flatMap((result) => result.images), ...extraImages],
    (image) => image.fileName,
  );
  await saveImages(
    allImages,
    `${artifactPath}/_images`,
    destFolder,
    pkg,
    artifactPath,
  );
}
