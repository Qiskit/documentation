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

import { readFile } from "fs/promises";

import { load } from "cheerio";
import { globby } from "globby";

import { TocEntry } from "../api/generateToc.js";

export type SphinxToc = {
  title: string;
  children: TocEntry[];
  collapsed: boolean;
};

// Sphinx build artifact folders that are never prose content.
const SPHINX_INTERNAL_PREFIXES = ["_static/", "_sources/", "_downloads/"];

/**
 * Build a _toc.json by parsing the Sphinx sidebar nav, filtered to match
 * the same include/exclude config used for file selection.
 */
export async function generateSphinxToc(
  artifactPath: string,
  outputDir: string,
  pkgTitle: string,
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

    // Filter by whether this href was selected for this run.
    const hrefFile = href.split("#")[0];
    if (hrefFile && hrefFile !== "#" && !isHrefSelected(hrefFile, selectedFiles)) {
      return;
    }

    const title = l1Link.text().trim();
    const url = hrefToUrl(href, outputBase);

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
          url: hrefToUrl(l2Href, outputBase),
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

  return { title: pkgTitle, children, collapsed: true };
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

function hrefToUrl(href: string, outputBase: string): string {
  if (href === "#") return outputBase;
  const withoutAnchor = href.split("#")[0];
  const withoutExt = withoutAnchor.replace(/\.html$/, "");
  return `${outputBase}/${withoutExt}`;
}
