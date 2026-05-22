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

import { dirname, parse, relative } from "path";
import { readFile, writeFile } from "fs/promises";

import { mkdirp } from "mkdirp";
import { visit, EXIT } from "unist-util-visit";

import { Image } from "./HtmlToMdResult.js";
import { ObjectsInv } from "./objectsInv.js";
import { Pkg } from "./Pkg.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";
import { relativizeLink } from "./updateLinks.js";
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
    results.push({ ...notebook, url });
  }
  return results;
}

/**
 * Rewrite markdown-cell links in each notebook: relativize old doc URLs and
 * resolve `qiskit.github.io/{pkg}/stubs/...` links via the published-API
 * inventories. Then prepend a frontmatter cell with a title extracted from
 * the first markdown h1.
 */
export function processNotebooks(
  notebooks: NotebookWithUrl[],
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
  pkg: Pkg,
  imageDestination: string,
): NotebookWithUrl[] {
  return notebooks.map((notebook) => {
    const processedCells = notebook.cells.map((cell) => {
      if (cell.cell_type !== "markdown") return cell;
      return {
        ...cell,
        source: rewriteNotebookLinks(
          cell.source,
          objectsInv,
          allInvs,
          imageDestination,
        ),
      };
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
  for (const { url, ...notebook } of notebooks) {
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

function rewriteNotebookLinks(
  source: string | string[],
  objectsInv: ObjectsInv,
  allInvs: Map<string, ObjectsInv>,
  imageDestination: string,
): string | string[] {
  const rewrite = (line: string) => {
    return line.replace(/(!?)\[([^\]]*)\]\(([^)]+)\)/g, (_match, bang, text, url) => {
      if (bang === "!") {
        return `![${text}](${rewriteNotebookImageSrc(url, imageDestination)})`;
      }
      const relativized = relativizeLink({ url, text });
      if (relativized) url = relativized.url;
      const stub = objectsInv.resolveStubUrl(url, allInvs);
      if (stub) url = stub;
      return `[${text}](${url})`;
    });
  };

  const rewritten = Array.isArray(source) ? source.map(rewrite) : rewrite(source);
  const joined = Array.isArray(rewritten) ? rewritten.join("") : rewritten;
  return escapeMdxSpecialChars(joined);
}

/**
 * Escape `<` outside code spans/fences/math so the MDX parser does not
 * interpret it as a JSX tag opening.
 */
function escapeMdxSpecialChars(source: string): string {
  const parts = source.split(/(```[\s\S]*?```|\$\$[\s\S]*?\$\$|`[^`]*`)/g);
  return parts
    .map((part) => {
      // Plain text: escape < to prevent MDX from treating it as a JSX tag.
      return part.replace(/</g, "\\<");
    })
    .join("");
}

/**
 * Rewrite Sphinx artifact-relative image paths (e.g. `../_static/images/foo.png`)
 * to the public docs image destination. External URLs are left unchanged.
 */
function rewriteNotebookImageSrc(src: string, imageDestination: string): string {
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
