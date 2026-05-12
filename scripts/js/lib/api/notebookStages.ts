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

import { ObjectsInv } from "./objectsInv.js";
import { Pkg } from "./Pkg.js";
import { kebabCaseAndShortenPage } from "./normalizeResultUrls.js";
import { relativizeLink } from "./updateLinks.js";
import { transformSpecialCaseUrl } from "./specialCaseResults.js";
import { parseMarkdown, extractHeadingText } from "../markdownUtils.js";
import { NotebookCell, NotebookWithUrl } from "../Notebooks.js";

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
): NotebookWithUrl[] {
  return notebooks.map((notebook) => {
    const processedCells = notebook.cells.map((cell) => {
      if (cell.cell_type !== "markdown") return cell;
      return {
        ...cell,
        source: rewriteNotebookLinks(cell.source, objectsInv, allInvs),
      };
    });

    const frontmatterCell = buildFrontmatterCell(processedCells);
    return {
      ...notebook,
      cells: frontmatterCell
        ? [frontmatterCell, ...processedCells]
        : processedCells,
    };
  });
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
): string | string[] {
  const rewrite = (line: string) => {
    return line.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (_match, text, url) => {
      const relativized = relativizeLink({ url, text });
      if (relativized) url = relativized.url;
      const stub = objectsInv.resolveStubUrl(url, allInvs);
      if (stub) url = stub;
      return `[${text}](${url})`;
    });
  };

  return Array.isArray(source) ? source.map(rewrite) : rewrite(source);
}

function buildFrontmatterCell(cells: NotebookCell[]): NotebookCell | undefined {
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
        source: `---\ntitle: "${title}"\n---`,
        metadata: {},
      };
    }
  }
  return undefined;
}
