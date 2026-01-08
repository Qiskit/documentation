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

import { readFile } from "fs/promises";
import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import grayMatter from "gray-matter";

import { readJsonFile } from "../lib/fs";

// List of all the required metadata fields that we want to ensure every
// notebook defines at the top of the first markdown cell
const REQUIRED_METADATA_FIELDS = ["title", "description"];

interface Arguments {
  [x: string]: unknown;
  fromFile?: string;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("from-file", {
      type: "string",
      normalize: true,
      description:
        "Read the file path for file paths and globs to check, like `docs/guides/index.mdx`. " +
        "Entries should be separated by a newline and should be valid file types (.mdx or .ipynb).",
    })
    .parseSync();
};

const main = async (): Promise<void> => {
  const args = readArgs();
  const notebookPaths = await determineNotebookPaths(args);

  let allGood = true;
  for (const notebookPath of notebookPaths) {
    const result = await checkNotebook(notebookPath);

    if (result.error) {
      allGood = false;
      console.error(result.error);
    }
  }

  if (!allGood) {
    console.error(`\nJupeter notebooks must contain the metadata in the first markdown block. You must also ensure the metadata includes the following required fields: ${REQUIRED_METADATA_FIELDS.join(", ")}. 

Example:

---
title: Metadata title
description: Metadata description
---
`);
    process.exit(1);
  }

  console.log("\nNo errors found ✅\n");
};

async function determineNotebookPaths(args: Arguments): Promise<string[]> {
  if (args.fromFile) {
    const content = await readFile(args.fromFile, "utf-8");
    return globby(
      content.split("\n").filter((entry) => entry && entry.endsWith(".ipynb")),
    );
  }

  return globby(["{docs,learning}/**/*.ipynb"]);
}

async function checkNotebook(
  path: string,
): Promise<{ error: string | undefined }> {
  const json = await readJsonFile(path);

  const firstMarkdownCell = json.cells.find(
    (cell: any) => cell.cell_type == "markdown",
  );
  if (!firstMarkdownCell) return { error: undefined };

  // Validate that the frontmatter is correct
  try {
    const metadata = grayMatter(firstMarkdownCell.source.join(""));
    const metadataKeys = Object.keys(metadata.data);
    if (metadataKeys.length == 0) {
      return {
        error: `❌ The Notebook '${path}' doesn't contain a metadata block.`,
      };
    }

    const isEveryFieldDefined = REQUIRED_METADATA_FIELDS.every((field) =>
      metadataKeys.includes(field),
    );
    if (!isEveryFieldDefined) {
      return {
        error: `❌ The Notebook '${path}' doesn't include all the required metadata fields.`,
      };
    }

    const metadataValues = Object.values(metadata.data);
    if (!metadataValues.every(Boolean)) {
      return {
        error: `❌ The Notebook '${path}' contains empty metadata fields.`,
      };
    }
  } catch {
    return { error: `❌ The Notebook '${path}' can't be correctly parsed.` };
  }

  return { error: undefined };
}

main().then(() => process.exit());
