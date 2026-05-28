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

// Generates the _toc.json for an addon's content pages.
//
// Addon TOCs have a fixed three-part shape:
//   1. A "main" section built from the Sphinx sidebar tree in index.html —
//      preserving the author's toctree order and titles exactly.
//   2. An optional "Tutorials" section listing slugs from docs/tutorials/.
//   3. An "API reference" section linking to docs/api/{pkg}.
//
// Called by addonDocsPipeline.ts; for API doc TOCs see generateToc.ts.

import { readFile } from "fs/promises";
import { join, parse } from "path/posix";

import { load } from "cheerio";

import { Pkg } from "./Pkg.js";
import { TocEntry } from "./generateToc.js";
import { DOCS_BASE_PATH } from "./paths.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";

type AddonTocSection = TocEntry & { collapsible?: boolean };

type AddonToc = {
  parentUrl: string;
  parentLabel: string;
  title: string;
  collapsed: true;
  children: AddonTocSection[];
};

export async function generateAddonToc(
  pkg: Pkg,
  docsBaseFolder: string,
  artifactPath: string,
): Promise<AddonToc> {
  const addonUrlBase = `${DOCS_BASE_PATH}/addons/${pkg.name}`;

  const mainChildren = await buildMainFromSidebar(
    artifactPath,
    pkg,
    addonUrlBase,
  );

  const topLevelSections: AddonTocSection[] = [];

  if (pkg.tutorials.length > 0) {
    const tutorialsToc = JSON.parse(
      await readFile(
        join(docsBaseFolder, "..", "tutorials", "_toc.json"),
        "utf-8",
      ),
    );
    const tutorialChildren: TocEntry[] = pkg.tutorials.map((slug) => ({
      title: findTutorialTitle(tutorialsToc, slug) ?? slug,
      url: `${DOCS_BASE_PATH}/tutorials/${slug}`,
    }));
    topLevelSections.push({
      title: "Tutorials",
      collapsible: false,
      children: tutorialChildren,
    });
  }

  topLevelSections.push({
    title: "API reference",
    collapsible: false,
    children: [
      {
        title: `${pkg.title} API reference`,
        url: `${DOCS_BASE_PATH}/api/${pkg.name}`,
      },
    ],
  });

  return {
    parentUrl: "/docs/guides/addons",
    parentLabel: "Documentation",
    title: `${pkg.title} ${pkg.version}`,
    collapsed: true,
    children: [
      { title: "", children: mainChildren, collapsible: false },
      ...topLevelSections,
    ],
  };
}

const SKIP_ITEMS = ["api reference", "release notes", "tutorials"];

/**
 * Builds the main TOC section from the sidebar tree in the Sphinx index.html.
 * Each toctree-l1 item becomes either a flat entry (top-level page) or a
 * section with children (subdirectory). Titles come directly from the sidebar
 * link text — exactly what the docs author wrote in their toctree.
 */
async function buildMainFromSidebar(
  artifactPath: string,
  pkg: Pkg,
  addonUrlBase: string,
): Promise<TocEntry[]> {
  const html = await readFile(join(artifactPath, "index.html"), "utf-8");
  const $ = load(html);
  const entries: TocEntry[] = [];

  $(".sidebar-tree > ul > li").each((_, l1) => {
    const $l1 = $(l1);
    const a = $l1.children("a").first();
    const href = a.attr("href") ?? "";
    const title = a.text().trim();

    if (SKIP_ITEMS.includes(title.toLowerCase())) return;

    // External link (e.g. GitHub)
    if (a.hasClass("external")) {
      entries.push({ title, url: href });
      return;
    }

    // href="#" means "this page" (index.html) in Sphinx when current-page is active
    if (href === "#") {
      entries.push({ title, url: addonUrlBase });
      return;
    }

    // Subdirectory section: has-children class with l2 items
    if ($l1.hasClass("has-children")) {
      const children: TocEntry[] = [];
      $l1.find("ul > li > a").each((_, a2) => {
        const childHref = $(a2).attr("href") ?? "";
        const dir = childHref.split("/")[0];
        const slug = hrefToSlug(childHref, pkg);
        children.push({
          title: $(a2).text().trim(),
          url: `${addonUrlBase}/${dir}/${slug}`,
        });
      });
      if (children.length > 0) entries.push({ title, children });
      return;
    }

    const slug = hrefToSlug(href, pkg);
    // Top-level page (may be a subdirectory index like "explanation/index.html")
    const path = href.includes("/") ? `${href.split("/")[0]}/${slug}` : slug;
    entries.push({ title, url: `${addonUrlBase}/${path}` });
  });

  return entries;
}

/** Converts a Sphinx HTML href filename to the kebab-case slug used in the output MDX. */
function hrefToSlug(href: string, pkg: Pkg): string {
  const name = parse(href).name;
  return pkg.kebabCaseAndShortenUrls
    ? kebabCaseAndShortenPage(name, pkg.name)
    : name;
}

type TocNode = { title?: string; url?: string; children?: TocNode[] };

/** Recursively searches a TOC tree for a node whose URL ends with the given slug. */
function findTutorialTitle(node: TocNode, slug: string): string | undefined {
  if (node.url?.endsWith(`/${slug}`) && node.title) return node.title;
  for (const child of node.children ?? []) {
    const found = findTutorialTitle(child, slug);
    if (found) return found;
  }
}
