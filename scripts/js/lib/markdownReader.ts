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

// export async function readMarkdown(
//   filePath: string,
//   options: { includeCodeCellSourceCode?: boolean } = {},
// ): Promise<string> {
//   if (path.extname(filePath) === ".ipynb") {
//     const notebook = await readJsonFile(filePath);
//     return markdownFromNotebook(notebook, options);
//   }
//   return await readFile(filePath, { encoding: "utf8" });
// }

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
    const content = await markdownFromNotebook(notebook, options);
    const metadata = notebook.metadata || {};
    return { content, metadata };
  }

  const rawContent = await readFile(filePath, "utf8");

  if (ext === ".md" || ext === ".mdx") {
    const parsed = grayMatter(rawContent);
    return { content: parsed.content, metadata: parsed.data };
  }

  // For other file types, return raw content with empty metadata
  return { content: rawContent, metadata: {} };
}
