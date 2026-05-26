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
//   1. A flat "main" section — top-level files (index, install, …) plus
//      subdirectory sections (how-tos, explanations), and a GitHub link.
//   2. An optional "Tutorials" section listing slugs from docs/tutorials/.
//   3. An "API reference" section linking to docs/api/{pkg}.
//
// Subdirectories whose DIR_LABELS entry is the same string are merged into a
// single section (e.g. both "how-tos" and "explanations" map to "Guides").
// Title text is read from each file's first h1/h2 heading.
//
// Called by addonDocsPipeline.ts; for API doc TOCs see generateToc.ts.

import { readFile } from "fs/promises";
import { join } from "path/posix";

import { globby } from "globby";

import { Pkg } from "./Pkg.js";
import { TocEntry } from "./generateToc.js";
import { DOCS_BASE_PATH } from "./paths.js";
import { capitalize } from "lodash-es";

// labels for known subdirectory names.
const DIR_LABELS: Record<string, string> = {
  "how-tos": "Guides",
  explanations: "Guides",
};

// Hardcoded titles for specific top-level slugs (overrides the file's h1).
const TOP_LEVEL_TITLES: Record<string, string> = {
  index: "Home",
  install: "Installation instructions",
};

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
): Promise<AddonToc> {
  const addonDocsPath = pkg.outputDir(docsBaseFolder);
  const addonUrlBase = `${DOCS_BASE_PATH}/addons/${pkg.name}`;

  // Discover top-level content files (e.g. index.mdx, install.mdx).
  const topLevelFiles = await globby(["*.mdx", "*.ipynb"], {
    cwd: addonDocsPath,
  });

  // Discover top-level subdirectories that contain content.
  const subdirNames = await globby(["*/"], {
    cwd: addonDocsPath,
    onlyDirectories: true,
  }).then((dirs) => dirs.map((d) => d.replace(/\/$/, "")).sort());

  const mainChildren: TocEntry[] = [];
  const topLevelSections: AddonTocSection[] = [];

  // Top-level files → entries in the main section, in filename order.
  for (const file of topLevelFiles.sort()) {
    const slug = file.replace(/\.(mdx|ipynb)$/, "");
    const isIndex = slug === "index";
    const url = isIndex ? addonUrlBase : `${addonUrlBase}/${slug}`;
    const title =
      TOP_LEVEL_TITLES[slug] ?? (await readTitle(join(addonDocsPath, file)));
    // ensure index is first in the toc
    isIndex
      ? mainChildren.unshift({ title, url })
      : mainChildren.push({ title, url });
  }

  // Subdirectories → either nested subsections or top-level sections.
  // Dirs that share the same label are merged into one section.
  const mergedSections = new Map<string, TocEntry>();
  for (const dir of subdirNames) {
    const entry = await buildSubdirEntry(dir, addonDocsPath, addonUrlBase);
    if (!entry) continue;

    const existingSection = mergedSections.get(entry.title);
    if (existingSection) {
      existingSection.children = [
        ...(existingSection.children ?? []),
        ...(entry.children ?? []),
      ];
    } else {
      mergedSections.set(entry.title, entry);
      mainChildren.push(entry);
    }
  }

  if (pkg.githubSlug) {
    mainChildren.push({
      title: "GitHub",
      url: `https://github.com/${pkg.githubSlug}`,
    });
  }

  const mainSection: AddonTocSection = {
    title: "",
    children: mainChildren,
    collapsible: false,
  };

  if (pkg.tutorials.length > 0) {
    const tutorialsDocsPath = join(docsBaseFolder, "..", "tutorials");
    const tutorialChildren: TocEntry[] = await Promise.all(
      pkg.tutorials.map(async (slug) => {
        const filePath = join(tutorialsDocsPath, `${slug}.ipynb`);
        const title = await readTitle(filePath);
        return { title, url: `${addonUrlBase}/tutorials/${slug}` };
      }),
    );
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
    children: [mainSection, ...topLevelSections],
  };
}

/**
 * Builds a TocEntry for a subdirectory.
 *
 * The section title uses the known label for the directory name, or falls back
 * to a capitalized version of the directory name. Content files (non-index)
 * become children, sorted by filename, with titles read from their h1 headings.
 * If an index.mdx exists, the section entry gets a url pointing to it.
 * Returns undefined if the directory has no content.
 */
async function buildSubdirEntry(
  dirName: string,
  addonDocsPath: string,
  addonUrlBase: string,
): Promise<TocEntry | undefined> {
  const dirPath = join(addonDocsPath, dirName);
  const files = await globby(["*.mdx", "*.ipynb"], { cwd: dirPath }).catch(
    (): string[] => [],
  );
  if (files.length === 0) return undefined;

  const hasIndex = files.includes("index.mdx");
  const contentFiles = files.filter((f) => f !== "index.mdx").sort();

  const sectionTitle = DIR_LABELS[dirName] ?? capitalize(dirName);

  const children: TocEntry[] = await Promise.all(
    contentFiles.map(async (file) => {
      const slug = file.replace(/\.(mdx|ipynb)$/, "");
      const title = await readTitle(join(dirPath, file));
      return { title, url: `${addonUrlBase}/${dirName}/${slug}` };
    }),
  );

  // When only an index page exists, include it as a child so the section
  // always renders as a dropdown rather than a bare link.
  if (hasIndex && children.length === 0) {
    const title = await readTitle(join(dirPath, "index.mdx"));
    children.push({ title, url: `${addonUrlBase}/${dirName}/index` });
  }

  return { title: sectionTitle, children };
}

/**
 * Reads the first h1 (or h2 as fallback) from an .mdx or .ipynb file.
 * Falls back to the filename stem if no heading is found.
 */
async function readTitle(filePath: string): Promise<string> {
  const content = await readFile(filePath, "utf-8");

  if (filePath.endsWith(".ipynb")) {
    return readNotebookTitle(content, filePath);
  }
  return readMdxTitle(content, filePath);
}

function readMdxTitle(content: string, filePath: string): string {
  const withoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n/, "");
  // Try h1 first, fall back to h2.
  const h1 = withoutFrontmatter.match(/^#\s+(.+)$/m);
  if (h1) return stripInlineCode(h1[1].trim());
  const h2 = withoutFrontmatter.match(/^##\s+(.+)$/m);
  if (h2) return stripInlineCode(h2[1].trim());
  return fileBasename(filePath);
}

function readNotebookTitle(content: string, filePath: string): string {
  let notebook: {
    cells: Array<{ id?: string; cell_type: string; source: string[] }>;
  };
  try {
    notebook = JSON.parse(content);
  } catch {
    return fileBasename(filePath);
  }

  for (const cell of notebook.cells) {
    if (cell.cell_type !== "markdown") continue;
    // Skip the frontmatter cell.
    if (cell.id === "frontmatter") continue;

    const src = Array.isArray(cell.source)
      ? cell.source.join("")
      : String(cell.source);

    const h1 = src.match(/^#\s+(.+)$/m);
    if (h1) return stripInlineCode(h1[1].trim());
    const h2 = src.match(/^##\s+(.+)$/m);
    if (h2) return stripInlineCode(h2[1].trim());
  }

  return fileBasename(filePath);
}

function stripInlineCode(text: string): string {
  return text.replace(/``([^`]+)``/g, "$1").replace(/`([^`]+)`/g, "$1");
}

function fileBasename(filePath: string): string {
  return (
    filePath
      .split("/")
      .pop()
      ?.replace(/\.(mdx|ipynb)$/, "") ?? filePath
  );
}
