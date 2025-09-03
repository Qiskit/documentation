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

import path from "node:path";
import { readFile } from "fs/promises";
import { readJsonFile } from "./fs";
import grayMatter from "gray-matter";

export async function readMarkdown(
  filePath: string,
  options: { includeCodeCellSourceCode?: boolean } = {},
): Promise<string> {
  const ext = path.extname(filePath);

  if (ext === ".ipynb") {
    const notebook = await readJsonFile(filePath);
    return markdownFromNotebook(notebook, options);
  }

  if (ext === ".md" || ext === ".mdx") {
    return await readFile(filePath, { encoding: "utf8" });
  }

  throw new Error(`Unsupported file type: ${ext} at path "${filePath}"`);
}

interface JupyterCell {
  cell_type: string;
  source: string[];
}

type Notebook = {
  cells: JupyterCell[];
};

export function markdownFromNotebook(
  notebook: Notebook,
  options: { includeCodeCellSourceCode?: boolean },
): string {
  const cells = notebook.cells as JupyterCell[];
  return cells
    .filter(
      (cell) =>
        cell.cell_type === "markdown" ||
        (options.includeCodeCellSourceCode && cell.cell_type === "code"),
    )
    .map((cell) => cell.source.join(""))
    .join("\n\n");
}

export async function readMarkdownAndMetadata(
  filePath: string,
  options: { includeCodeCellSourceCode?: boolean } = {},
): Promise<{ content: string; metadata: Record<string, any> }> {
  const ext = path.extname(filePath);

  if (ext === ".ipynb") {
    const notebook = await readJsonFile(filePath);
    const content = markdownFromNotebook(notebook, options);
    const metadata = notebook.metadata || {};
    return { content, metadata };
  }

  if (ext === ".md" || ext === ".mdx") {
    const rawContent = await readFile(filePath, "utf8");
    const parsed = grayMatter(rawContent);
    return { content: parsed.content, metadata: parsed.data };
  }

  throw new Error(`Unexpected file type: ${ext} at path "${filePath}"`);
}
