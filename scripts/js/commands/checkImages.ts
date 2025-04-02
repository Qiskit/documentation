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
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { collectInvalidImageErrors } from "../lib/markdownImages.js";
import { readMarkdown } from "../lib/markdownReader.js";

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
        "Check the images in the current and dev versions of the API docs have alt text.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  const files = await determineContentFiles(args);
  const fileErrors: string[] = [];

  for (const file of files) {
    const markdown = await readMarkdown(file);
    const imageErrors = await collectInvalidImageErrors(markdown);

    if (imageErrors.size) {
      fileErrors.push(
        `Error in file '${file}':\n\t- ${[...imageErrors].join("\n\t- ")}\n`,
      );
    }
  }

  if (fileErrors.length) {
    fileErrors.forEach((error) => console.log(error));
    console.error(
      "💔 Some images have problems. See https://github.com/Qiskit/documentation#images for instructions.\n",
    );
    process.exit(1);
  }
  console.log("✅ All images are valid.\n");
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
    "docs/**/*.{ipynb,mdx}",
    args.apis ? "!docs/api/*/([0-9]*)/*.mdx" : "!docs/api/**/*.mdx",
    // Remove when https://github.com/Qiskit/documentation/issues/2564 is fixed
    `!docs/api/qiskit/release-notes/*.mdx`,
  ];

  return await globby(globs);
}

main().then(() => process.exit());
