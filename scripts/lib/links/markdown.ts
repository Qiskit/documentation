// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { readFile } from "fs/promises";
import path from "node:path";

import markdownLinkExtractor from "markdown-link-extractor";

interface JupyterCell {
  cell_type: string;
  source: string[];
}

export function markdownFromNotebook(rawContent: string): string {
  const cells = JSON.parse(rawContent).cells as JupyterCell[];
  return cells
    .filter((cell) => cell.cell_type === "markdown")
    .map((cell) => cell.source.join(""))
    .join("\n");
}

export function parseAnchors(markdown: string): string[] {
  const result = markdownLinkExtractor(markdown).anchors;
  const idAnchors = markdown.match(/(?<=id=")(.*)(?=")/gm);
  if (idAnchors !== null) {
    result.push(...idAnchors.map((id) => `#${id}`));
  }
  return result;
}

export async function getMarkdownAndAnchors(
  filePath: string,
): Promise<[string, string[]]> {
  const source = await readFile(filePath, { encoding: "utf8" });
  const markdown =
    path.extname(filePath) === ".ipynb" ? markdownFromNotebook(source) : source;
  return [markdown, parseAnchors(markdown)];
}
