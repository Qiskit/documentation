// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { collectInvalidImageErrors } from "../lib/markdownImages.js";
import { readMarkdownAndMetadata } from "../lib/markdownReader.js";
import { collectHeadingTitleMismatch } from "../lib/markdownTitles.js";
import { parseMarkdown } from "../lib/markdownUtils";
import { checkMetadata } from "../lib/metadataChecker.js";
import {
  IGNORE_TITLE_MISMATCHES,
  METADATA_ALLOWLIST,
} from "../../config/allowLists.js";

const allErrors: string[] = [];

interface Arguments {
  [x: string]: unknown;
  apis: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("apis", {
      type: "boolean",
      default: false,
      description:
        "Check files in the current and dev versions of the API docs.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();
  const files = await determineContentFiles(args);

  for (const file of files) {
    const { content, metadata } = await readMarkdownAndMetadata(file);
    const tree = parseMarkdown(content);
    const imageErrors = collectInvalidImageErrors(tree);
    const mismatchedTitleHeadingErrors =
      IGNORE_TITLE_MISMATCHES.includes(file) || file.startsWith("docs/api")
        ? new Set<string>()
        : collectHeadingTitleMismatch(tree, metadata);

    const metadataErrors =
      METADATA_ALLOWLIST.has(file) || file.startsWith("docs/api")
        ? new Set<string>()
        : checkMetadata(metadata);

    // Collect all errors for this file
    const errorsInFile: string[] = [
      ...imageErrors,
      ...mismatchedTitleHeadingErrors,
      ...metadataErrors,
    ];

    if (errorsInFile.length) {
      allErrors.push(
        `Error in file '${file}':\n\t- ${errorsInFile.join("\n\t- ")}\n`,
      );
    }
  }

  // Final error report
  if (allErrors.length) {
    allErrors.forEach((error) => console.log(error));
    console.error(
      "💔 Some issues were found in your Markdown files. Please fix them before proceeding.\n" +
        "Image help: https://github.com/Qiskit/documentation#images\n" +
        "Metadata issues: https://github.com/Qiskit/documentation/blob/main/mdx-guide.md#page-metadata\n" +
        "Title/Heading help: https://github.com/Qiskit/documentation#titles-and-headings\n",
    );
    process.exit(1);
  }

  console.log("✅ All files passed validation.\n");
}

async function determineContentFiles(args: Arguments): Promise<string[]> {
  // We always skip historical versions to simplify the code and to have a faster script.
  // Even though it is possible for someone to add a new image without alt text to a
  // historical version that wasn't in the original release, that's very unlikely.
  // If it happens, it would probably be a backport from latest or dev, and the linter in
  // the API repo should catch it.
  //
  // If an image is missed by the API repo's linter, it will still have an alt text defined,
  // although it won't be very useful. That's because Sphinx auto-generates alt text.
  const globs = [
    "{docs,learning}/**/*.{ipynb,mdx}",
    args.apis ? "!docs/api/*/([0-9]*)/*.mdx" : "!docs/api/**/*.mdx",
    // Remove when https://github.com/Qiskit/documentation/issues/2564 is fixed
    `!docs/api/qiskit/release-notes/*.mdx`,
  ];

  return await globby(globs);
}

main().then(() => process.exit());
