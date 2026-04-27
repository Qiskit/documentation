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

import { TocEntry } from "../api/generateToc.js";

export type AddonToc = {
  title: string;
  children: TocEntry[];
  collapsed: boolean;
};

// Sphinx artifact folders that belong to the API pipeline, not prose.
const EXCLUDED_HREF_PREFIXES = ["apidocs/", "stubs/", "release-notes"];

/** Build a _toc.json for addon content by parsing the Sphinx sidebar nav. */
export async function generateAddonToc(
  htmlPath: string,
  outputDir: string,
  pkgTitle: string,
  docsBaseFolder: string,
): Promise<AddonToc> {
  const indexHtml = await readFile(`${htmlPath}/index.html`, "utf-8");
  const $ = load(indexHtml);

  // Collect the set of URLs we actually wrote so we can filter out entries
  // that weren't included (e.g. apidocs children under a section we skip).
  const outputBase = `/${outputDir.startsWith(docsBaseFolder)
    ? outputDir
    : `${docsBaseFolder}/${outputDir}`}`;

  const children: TocEntry[] = [];

  $(".sidebar-tree .toctree-l1").each((_, l1) => {
    const l1Link = $(l1).children("a").first();
    const href = l1Link.attr("href") ?? "";

    // Skip external links, API reference, release notes.
    if (
      l1Link.hasClass("reference external") ||
      EXCLUDED_HREF_PREFIXES.some((prefix) => href.startsWith(prefix))
    ) {
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
        if (
          l2Link.hasClass("reference external") ||
          EXCLUDED_HREF_PREFIXES.some((prefix) => l2Href.startsWith(prefix))
        ) {
          return;
        }
        subChildren.push({
          title: l2Link.text().trim(),
          url: hrefToUrl(l2Href, outputBase),
        });
      });

      if (subChildren.length > 0) {
        // If the section index page exists as a converted file, link it;
        // otherwise emit a section header with no url.
        const sectionUrl = href === "#" ? undefined : url;
        const entry: TocEntry = { title, children: subChildren };
        if (sectionUrl) entry.url = sectionUrl;
        children.push(entry);
      }
    }
  });

  return { title: pkgTitle, children, collapsed: true };
}

function hrefToUrl(href: string, outputBase: string): string {
  if (href === "#") return outputBase;
  // Strip .html and anchor fragment, prepend output base path.
  const withoutAnchor = href.split("#")[0];
  const withoutExt = withoutAnchor.replace(/\.html$/, "");
  return `${outputBase}/${withoutExt}`;
}
