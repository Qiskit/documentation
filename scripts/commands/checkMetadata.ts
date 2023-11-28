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

import grayMatter from "gray-matter";
import fs from "fs/promises";
import { globby } from "globby";

const IGNORED_FILES = new Set([
  "docs/api/qiskit-ibm-provider/ibm-provider.md",
  "docs/api/qiskit/transpiler_builtin_plugins.md",
  "docs/api/qiskit-ibm-runtime/ibm-runtime.md",
  "docs/api/qiskit-ibm-runtime/0.14/ibm-runtime.md",
  "docs/start/__migration-guide-algorithms.md",
  "docs/start/__migration-guide-opflow.md",
  "docs/start/__migration-guide-qi.md",
]);

const readMetadata = async (filePath: string): Promise<Record<string, any>> => {
  const ext = filePath.split(".").pop();
  if (ext === "md" || ext === "mdx") {
    const content = await fs.readFile(filePath, "utf-8");
    return grayMatter(content).data;
  } else if (ext === "ipynb") {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content).metadata;
  } else {
    throw new Error(`Unknown extension for ${filePath}: ${ext}`);
  }
};

const isValidMetadata = (metadata: Record<string, any>): boolean =>
  metadata.title && metadata.description;

const main = async (): Promise<void> => {
  const mdErrors = [];
  const mdFiles = await globby("docs/**/*.{md,mdx}");
  for (const file of mdFiles) {
    if (IGNORED_FILES.has(file)) {
      continue;
    }

    // Ignore all historical API version files.
    if (/.*\/[0-9].*\//.test(file)) {
      continue;
    }

    const metadata = await readMetadata(file);
    if (!isValidMetadata(metadata)) {
      mdErrors.push(file);
    }
  }

  const notebookErrors = [];
  const notebookFiles = await globby("docs/**/*.ipynb");
  for (const file of notebookFiles) {
    if (IGNORED_FILES.has(file)) {
      continue;
    }
    const metadata = await readMetadata(file);
    if (!isValidMetadata(metadata)) {
      notebookErrors.push(file);
    }
  }

  if (mdErrors.length > 0) {
    console.error(`
      Invalid markdown file metadata. Every .md and .mdx file should start with a metadata block like this:

      ---
      title: OpenQASM 3 feature table
      description: A list of the OpenQASM 3 language features
      ---


      Please fix these files: ${mdErrors}
    `);
  }
  if (notebookErrors.length > 0) {
    console.error(`
      Invalid Jupyter notebook metadata. Every .ipynb file needs to 
      set 'title' and 'description' in the file metadata.

      Please fix these files: ${notebookErrors}
    `);
  }
  if (mdErrors.length > 0 || notebookErrors.length > 0) {
    process.exit(1);
  }
};

main();
