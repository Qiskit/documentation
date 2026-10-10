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

// Jupyter notebook stages used by the addon docs pipeline. The API pipeline
// does not process notebooks today, but these stages live alongside the other
// shared stages so that any future pipeline needing notebook handling can
// reuse them without duplication.

import { dirname, parse, posix, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { slug } from "github-slugger";
import isAbsoluteUrl from "is-absolute-url";
import { mkdirp } from "mkdirp";
import { visit, EXIT } from "unist-util-visit";

import { Image } from "./HtmlToMdResult.js";
import { ObjectsInv } from "./objectsInv.js";
import { Pkg } from "./Pkg.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";
import { normalizeUrl, relativizeLink } from "./updateLinks.js";
import { rewriteApiDocsLink } from "./pipelineStages.js";
import { C_API_BASE_PATH, DOCS_BASE_PATH } from "./paths.js";
import { transformSpecialCaseUrl } from "./specialCaseResults.js";
import { parseMarkdown, extractHeadingText } from "../markdownUtils.js";
import { NotebookCell, NotebookWithUrl } from "./Notebooks.js";

export async function readNotebooks(
  artifactPath: string,
  docsBaseFolder: string,
  outputPath: string,
  filePaths: string[],
): Promise<NotebookWithUrl[]> {
  const results: NotebookWithUrl[] = [];
  for (const file of filePaths) {
    const raw = await readFile(`${artifactPath}/${file}`, "utf-8");
    const notebook = JSON.parse(raw);
    const { dir, name } = parse(`${outputPath}/${file}`);
    const url = `/${relative(docsBaseFolder, dir)}/${name}`;
    results.push({ ...notebook, url, sourcePath: file });
  }
  return results;
}

/**
 * Rewrite markdown-cell links in each notebook: relativize old doc URLs,
 * resolve `qiskit.github.io/{pkg}/stubs/...` links via the published-API
 * inventories, and resolve relative links (e.g. `quickstart.ipynb`) to their
 * IQP URLs. Then prepend a frontmatter cell with a title extracted from the
 * first markdown h1.
 *
 * `ingestedFiles` lists the artifact-relative paths of every file the
 * pipeline publishes, so that relative links to unpublished pages can be
 * detected.
 */
export function processNotebooks(
  notebooks: NotebookWithUrl[],
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
  pkg: Pkg,
  imageDestination: string,
  ingestedFiles: string[],
): NotebookWithUrl[] {
  const ingestedPages = new Set(ingestedFiles.map(removeExtension));
  return notebooks.map((notebook) => {
    const processedCells = notebook.cells.map((cell) => {
      if (cell.cell_type !== "markdown") return cell;
      const linked = rewriteNotebookLinks(
        cell.source,
        objectsInv,
        allInvs,
        imageDestination,
        (url) =>
          resolveRelativeNotebookLink(
            url,
            notebook.sourcePath,
            pkg,
            ingestedPages,
          ),
      );
      const source = stripInlineStyles(linked);
      return { ...cell, source };
    });

    const frontmatterCell = buildFrontmatterCell(processedCells, pkg);
    return {
      ...notebook,
      cells: frontmatterCell
        ? [frontmatterCell, ...processedCells]
        : processedCells,
    };
  });
}

/**
 * Extract images referenced in notebook markdown cells as `Image` objects
 * so they can be passed to `copyImages` alongside HTML-derived images.
 */
export function collectNotebookImages(
  notebooks: NotebookWithUrl[],
  imageDestination: string,
): Image[] {
  const seen = new Set<string>();
  const images: Image[] = [];
  for (const notebook of notebooks) {
    for (const cell of notebook.cells) {
      if (cell.cell_type !== "markdown") continue;
      const text = Array.isArray(cell.source)
        ? cell.source.join("")
        : cell.source;
      for (const match of text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
        const src = match[1];
        if (src.startsWith("http://") || src.startsWith("https://")) continue;
        const fileName = src.split("/").pop()!;
        if (seen.has(fileName)) continue;
        seen.add(fileName);
        images.push({
          fileName,
          dest: `${imageDestination}/${fileName}`,
          originSrc: `_images/${fileName}`,
        });
      }
    }
  }
  return images;
}

export async function writeNotebooks(
  pkg: Pkg,
  docsBaseFolder: string,
  notebooks: NotebookWithUrl[],
): Promise<void> {
  for (const { url, sourcePath: _sourcePath, ...notebook } of notebooks) {
    const normalizedUrl = normalizeNotebookUrl(url, pkg);
    const path = `${docsBaseFolder}${normalizedUrl}.ipynb`;
    await mkdirp(dirname(path));
    await writeFile(path, JSON.stringify(notebook, null, 1));
  }
}

function normalizeNotebookUrl(url: string, pkg: Pkg): string {
  const parts = url.split("/");
  const filename = parts[parts.length - 1];
  const normalized = pkg.kebabCaseAndShortenUrls
    ? kebabCaseAndShortenPage(filename, pkg.name)
    : filename;
  return transformSpecialCaseUrl([...parts.slice(0, -1), normalized].join("/"));
}

function stripInlineStyles(source: string): string {
  return source.replace(/(<[a-zA-Z][^>]*?)\s+style="[^"]*"/g, "$1");
}

function rewriteNotebookLinks(
  source: string | string[],
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
  imageDestination: string,
  resolveRelative: (url: string) => string | undefined,
): string {
  const rewrite = (line: string) => {
    return line.replace(
      /(!?)\[([^\]]*)\]\(([^)]+)\)/g,
      (_match, bang, text, url) => {
        if (bang === "!") {
          return `![${text}](${rewriteNotebookImageSrc(url, imageDestination)})`;
        }
        const relativized = relativizeLink({ url, text });
        if (relativized) url = relativized.url;
        const stub = objectsInv.resolveStubUrl(url, allInvs);
        if (stub) url = stub;
        if (!relativized && !stub) url = resolveRelative(url) ?? url;
        return `[${text}](${url})`;
      },
    );
  };

  const rewritten = Array.isArray(source)
    ? source.map(rewrite)
    : rewrite(source);
  return Array.isArray(rewritten) ? rewritten.join("") : rewritten;
}

// nbsphinx lets notebooks link to other notebooks and to .rst pages; MyST
// projects may also link to .md pages. Sphinx replaces all of them with .html
// links in its rendered output.
const PAGE_LINK_EXTENSIONS = [".ipynb", ".html", ".rst", ".md"];

/**
 * Map a relative link in a notebook (e.g. `quickstart.ipynb` or
 * `../how_tos/foo.html#Some-heading`) to its IQP URL. The link is resolved
 * against the notebook's location in the artifact, like Sphinx does.
 *
 * Pure fragments (`#Some-heading`) link to a heading in the same notebook, so
 * only their anchor is converted.
 *
 * Returns undefined for links to leave unchanged: absolute URLs, site-absolute
 * paths, links to files that aren't pages, and links to pages that the
 * pipeline doesn't publish.
 */
export function resolveRelativeNotebookLink(
  url: string,
  notebookPath: string,
  pkg: Pkg,
  ingestedPages: Set<string>,
): string | undefined {
  if (isAbsoluteUrl(url) || url.startsWith("/")) return undefined;
  if (url.startsWith("#")) return `#${nbsphinxAnchorToIqp(url.slice(1))}`;
  const hashIndex = url.indexOf("#");
  const target = hashIndex === -1 ? url : url.slice(0, hashIndex);
  const anchor = hashIndex === -1 ? undefined : url.slice(hashIndex + 1);
  const { ext } = posix.parse(target);
  if (!PAGE_LINK_EXTENSIONS.includes(ext)) return undefined;

  const resolved = posix.join(posix.dirname(notebookPath), target);
  if (resolved.startsWith("../")) {
    console.warn(
      `Leaving link ${url} in ${notebookPath} unchanged: it points outside the artifact.`,
    );
    return undefined;
  }
  const page = removeExtension(resolved);

  // Links into the API reference or release notes get the same mapping as
  // links in HTML pages: rewriteApiDocsLinks, then normalizeUrl (which also
  // handles the C API's `cdoc/` folder).
  const pageWithAnchor = anchor ? `${page}#${anchor}` : page;
  const apiUrl = page.startsWith(`${C_API_BASE_PATH}/`)
    ? pageWithAnchor
    : rewriteApiDocsLink(pageWithAnchor, pkg);
  if (apiUrl) {
    return normalizeUrl(apiUrl, {}, new Set(), {
      kebabCaseAndShorten: pkg.kebabCaseAndShortenUrls,
      pkgName: pkg.name,
      pkgOutputDir: pkg.apiOutputDir(DOCS_BASE_PATH),
    });
  }

  if (!ingestedPages.has(page)) {
    console.warn(
      `Leaving link ${url} in ${notebookPath} unchanged: ${page} is not published as part of ${pkg.name}.`,
    );
    return undefined;
  }

  // Normalize the same way as when the page is written (normalizeNotebookUrl
  // for notebooks; normalizeResultUrls and specialCaseResults do the same for
  // HTML pages). An index page is served at its directory's URL.
  const pageUrl = normalizeNotebookUrl(
    `${pkg.outputDir(`${DOCS_BASE_PATH}/addons`)}/${page}`,
    pkg,
  ).replace(/\/index$/, "");
  return anchor ? `${pageUrl}#${nbsphinxAnchorToIqp(anchor)}` : pageUrl;
}

/**
 * nbsphinx heading anchors keep the heading's case and punctuation
 * (`1.-Prepare-the-inputs`), but IQP slugs headings (`1-prepare-the-inputs`).
 * Slugging the nbsphinx anchor gives the IQP one.
 */
function nbsphinxAnchorToIqp(anchor: string): string {
  return slug(anchor);
}

function removeExtension(path: string): string {
  const { ext } = posix.parse(path);
  return ext ? path.slice(0, -ext.length) : path;
}

/**
 * Rewrite Sphinx artifact-relative image paths (e.g. `../_static/images/foo.png`)
 * to the public docs image destination. External URLs are left unchanged.
 */
function rewriteNotebookImageSrc(
  src: string,
  imageDestination: string,
): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${imageDestination}/${src.split("/").pop()!}`;
}

function buildFrontmatterCell(
  cells: NotebookCell[],
  pkg: Pkg,
): NotebookCell | undefined {
  for (const cell of cells) {
    if (cell.cell_type !== "markdown") continue;
    const text = Array.isArray(cell.source)
      ? cell.source.join("")
      : cell.source;
    const tree = parseMarkdown(text);
    let title: string | undefined;
    visit(tree, "heading", (node: any) => {
      if (node.depth === 1 && !title) {
        title = extractHeadingText(node).trim();
        return EXIT;
      }
    });
    if (title) {
      return {
        id: "frontmatter", // hardcoded so the id doesn't change across runs
        cell_type: "markdown",
        source: `---\ntitle: "${title}"\ndescription: "${title} for the latest version of ${pkg.title}"\n---`,
        metadata: {},
      };
    }
  }
  return undefined;
}
