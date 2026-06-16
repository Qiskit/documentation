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
// Addon TOCs have a fixed shape built from the Sphinx sidebar tree in index.html:
//   1. A "main" section (unnamed) from the primary <ul class="current"> toctree.
//   2. Optional captioned sections (e.g. "Tutorials") from <p class="caption"> groups.
//   3. An "API reference" section: external items from the sphinx caption's <ul>
//      (excluding "release notes") are replaced by a local /docs/api/{pkg} link,
//      plus any release-notes entry from the sphinx caption.
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
  artifactPath: string,
): Promise<AddonToc> {
  const addonUrlBase = `${DOCS_BASE_PATH}/addons/${pkg.name}`;

  const { mainChildren, captionedSections } = await buildSectionsFromSidebar(
    artifactPath,
    pkg,
    addonUrlBase,
  );

  const children: AddonTocSection[] = [
    { title: "", children: mainChildren, collapsible: false },
    ...captionedSections.map((section) => ({
      title: section.title,
      collapsible: false as const,
      children: section.children,
    })),
  ];

  return {
    parentUrl: "/docs/guides/addons",
    parentLabel: "Documentation",
    title: `${pkg.title} ${pkg.version}`,
    collapsed: true,
    children,
  };
}

type SidebarSections = {
  mainChildren: TocEntry[];
  captionedSections: Array<{ title: string; children: TocEntry[] }>;
};

/**
 * Parses the Sphinx sidebar tree from index.html into the main (uncaptioned)
 * section and any captioned sections (e.g. "Tutorials", "API reference").
 *
 * The main section comes from the primary <ul class="current"> toctree.
 * Captioned sections come from <p class="caption"> + sibling <ul> pairs.
 */
async function buildSectionsFromSidebar(
  artifactPath: string,
  pkg: Pkg,
  addonUrlBase: string,
): Promise<SidebarSections> {
  const html = await readFile(join(artifactPath, "index.html"), "utf-8");
  const $ = load(html);

  const mainChildren = parseTocUl(
    $,
    $(".sidebar-tree > ul.current"),
    pkg,
    addonUrlBase,
  );

  const captionedSections: Array<{ title: string; children: TocEntry[] }> = [];
  $(".sidebar-tree > p.caption").each((_, caption) => {
    const title = $(caption).find(".caption-text").text().trim();
    const ul = $(caption).next("ul");
    const children = parseTocUl($, ul, pkg, addonUrlBase);
    if (title && children.length > 0) {
      captionedSections.push({ title, children });
    }
  });

  return { mainChildren, captionedSections };
}

/**
 * Converts a <ul> of toctree-l1 items into TocEntry objects.
 * Top-level pages become flat entries; has-children items become sections.
 */
function parseTocUl(
  $: ReturnType<typeof load>,
  ul: ReturnType<ReturnType<typeof load>>,
  pkg: Pkg,
  addonUrlBase: string,
): TocEntry[] {
  const entries: TocEntry[] = [];

  ul.children("li").each((_, l1) => {
    const $l1 = $(l1);
    const a = $l1.children("a").first();
    const href = a.attr("href") ?? "";
    const title = a.text().trim();

    // External link (e.g. GitHub, tutorial links)
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
