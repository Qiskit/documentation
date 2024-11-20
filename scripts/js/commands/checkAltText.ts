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

import { globby } from "globby";
import { findImagesWithoutAltText } from "../lib/extractMarkdownImages.js";
import { readMarkdown } from "../lib/markdownReader.js";

async function main() {
  const files = await globby(["docs/**/*.{ipynb,mdx}", "!docs/api/**/*.mdx"]);
  const fileErrors: string[] = [];

  for (const file of files) {
    const markdown = await readMarkdown(file);
    const images = await findImagesWithoutAltText(markdown);
    const imageErrors = [...images].map(
      (image) => `The image '${image}' does not have an alt text defined.`,
    );

    if (imageErrors.length) {
      fileErrors.push(
        `Error in file '${file}':\n\t- ${imageErrors.join("\n\t- ")}`,
      );
    }
  }

  if (fileErrors.length) {
    fileErrors.forEach((error) => console.log(error));
    console.error("\nSome images are missing alt text 💔\n");
    process.exit(1);
  }
  console.log("\nAll images have alt text ✅\n");
}

main().then(() => process.exit());
