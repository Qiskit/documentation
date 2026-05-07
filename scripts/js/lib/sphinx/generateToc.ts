// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { readFile, writeFile } from "fs/promises";
import { dirname } from "path";

import { load } from "cheerio";
import { globby } from "globby";
import { mkdirp } from "mkdirp";

import { TocEntry } from "../api/generateToc.js";
import { Pkg } from "../api/Pkg.js";
import { kebabCaseAndShortenPage } from "../api/normalizeResultUrls.js";
import { transformSpecialCaseUrl } from "../api/specialCaseResults.js";
import { DOCS_BASE_PATH } from "./conversionPipeline.js";

export type SphinxToc = {
  title: string;
  children: TocEntry[];
  collapsed: boolean;
};

// Sphinx build artifact folders and API content that are never prose content.
const SPHINX_INTERNAL_PREFIXES = ["_static/", "_sources/", "_downloads/"];
const API_HREF_PREFIXES = ["apidocs/", "apidoc/", "stubs/", "release-notes", "release_notes"];

/**
 * Build a _toc.json by parsing the Sphinx sidebar nav, filtered to match
 * the same include/exclude config used for file selection.
 */
export async function generateSphinxToc(
  artifactPath: string,
  outputDir: string,
  pkg: Pkg,
  docsBaseFolder: string,
  include?: string[],
  exclude?: string[],
): Promise<SphinxToc> {
  const indexHtml = await readFile(`${artifactPath}/index.html`, "utf-8");
  const $ = load(indexHtml);

  // Build set of files that were actually selected for this run so we can
  // filter TOC entries to only those included.
  const selectedFiles = new Set(
    await globby(include ?? ["**"], {
      cwd: artifactPath,
      ignore: [...SPHINX_INTERNAL_PREFIXES.map((p) => `${p}**`), ...(exclude ?? [])],
    }),
  );

  const outputBase = `/${outputDir.startsWith(docsBaseFolder)
    ? outputDir
    : `${docsBaseFolder}/${outputDir}`}`;

  const children: TocEntry[] = [];

  $(".sidebar-tree .toctree-l1").each((_, l1) => {
    const l1Link = $(l1).children("a").first();
    const href = l1Link.attr("href") ?? "";

    if (l1Link.hasClass("reference external")) return;
    if (SPHINX_INTERNAL_PREFIXES.some((p) => href.startsWith(p))) return;
    if (API_HREF_PREFIXES.some((p) => href.startsWith(p))) return;

    // Filter by whether this href was selected for this run.
    const hrefFile = href.split("#")[0];
    if (hrefFile && hrefFile !== "#" && !isHrefSelected(hrefFile, selectedFiles)) {
      return;
    }

    const title = l1Link.text().trim();
    const url = hrefToUrl(href, outputBase, pkg);

    const l2Items = $(l1).find(".toctree-l2");
    if (l2Items.length === 0) {
      children.push({ title, url });
    } else {
      const subChildren: TocEntry[] = [];
      l2Items.each((_, l2) => {
        const l2Link = $(l2).children("a").first();
        const l2Href = l2Link.attr("href") ?? "";
        if (l2Link.hasClass("reference external")) return;
        if (SPHINX_INTERNAL_PREFIXES.some((p) => l2Href.startsWith(p))) return;
        const l2HrefFile = l2Href.split("#")[0];
        if (l2HrefFile && l2HrefFile !== "#" && !isHrefSelected(l2HrefFile, selectedFiles)) {
          return;
        }
        subChildren.push({
          title: l2Link.text().trim(),
          url: hrefToUrl(l2Href, outputBase, pkg),
        });
      });

      if (subChildren.length > 0) {
        const sectionUrl = href === "#" ? undefined : url;
        const entry: TocEntry = { title, children: subChildren };
        if (sectionUrl) entry.url = sectionUrl;
        children.push(entry);
      }
    }
  });

  if (pkg.githubSlug) {
    children.push({
      title: "GitHub",
      url: `https://github.com/${pkg.githubSlug}`,
    });
  }

  children.push({
    title: "API reference",
    children: [
      {
        title: `${pkg.title} API reference`,
        url: pkg.apiOutputDir(DOCS_BASE_PATH),
      },
    ],
  });

  return { title: pkg.title, children, collapsed: true };
}

export async function writeTocFile(
  artifactPath: string,
  outputDir: string,
  pkg: Pkg,
  docsBaseFolder: string,
  include?: string[],
  exclude?: string[],
): Promise<void> {
  console.log(`Generating TOC for ${outputDir}`);
  const toc = await generateSphinxToc(
    artifactPath,
    outputDir,
    pkg,
    docsBaseFolder,
    include,
    exclude,
  );
  const tocPath = `${outputDir}/_toc.json`;
  await mkdirp(dirname(tocPath));
  await writeFile(tocPath, JSON.stringify(toc, null, 2) + "\n");
}

/**
 * Check whether a sidebar href corresponds to a file that was selected
 * for this pipeline run.
 */
function isHrefSelected(href: string, selectedFiles: Set<string>): boolean {
  const normalized = href.replace(/\.html$/, "");
  // Check both with and without .html extension, and also .ipynb
  return (
    selectedFiles.has(`${normalized}.html`) ||
    selectedFiles.has(`${normalized}.ipynb`) ||
    selectedFiles.has(href)
  );
}

function hrefToUrl(href: string, outputBase: string, pkg: Pkg): string {
  if (href === "#") return outputBase;
  const withoutAnchor = href.split("#")[0];
  const withoutExt = withoutAnchor.replace(/\.html$/, "");
  // Apply the same normalization as the content pipeline:
  // kebab-case the filename, then transformSpecialCaseUrl for directory renames.
  const parts = withoutExt.split("/");
  const filename = parts[parts.length - 1];
  const normalizedFilename = pkg.kebabCaseAndShortenUrls
    ? kebabCaseAndShortenPage(filename, pkg.name)
    : filename;
  const normalizedPath = transformSpecialCaseUrl(
    [...parts.slice(0, -1), normalizedFilename].join("/"),
  );
  return `${outputBase}/${normalizedPath}`;
}
