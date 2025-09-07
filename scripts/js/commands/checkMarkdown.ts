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

import {
  checkMarkdown,
  readArgs,
  determineContentFiles,
} from "../lib/markdownChecker";
import { readMarkdownAndMetadata } from "../lib/markdownReader";

async function main() {
  const args = readArgs();
  const files = await determineContentFiles(args);
  for (const file of files) {
    const { metadata } = await readMarkdownAndMetadata(file);
    const errors = checkMarkdown(metadata);
    if (errors) {
      console.log(`Error in file '${file}':\n\t- ${errors}`);
      console.error(
        "Metadata issues: https://github.com/Qiskit/documentation/blob/main/mdx-guide.md#page-metadata",
      );
    }
  }
}
main().then(() => process.exit());
