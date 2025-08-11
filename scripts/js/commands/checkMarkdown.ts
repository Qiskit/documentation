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
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import { collectInvalidImageErrors } from "../lib/markdownImages.js";
import { readMarkdown } from "../lib/markdownReader.js";
import { collectHeadingTitleMismatch } from "../lib/markdownTitles.js";

const IGNORE_TITLE_MISMATCHES: string[] = [
  "docs/migration-guides/external-providers-primitives-v2.mdx",
  "docs/migration-guides/local-simulators.mdx",
  "docs/migration-guides/metapackage-migration.mdx",
  "docs/migration-guides/qiskit-1.0-features.mdx",
  "docs/migration-guides/qiskit-1.0-installation.mdx",
  "docs/migration-guides/qiskit-algorithms-module.mdx",
  "docs/migration-guides/qiskit-backend-primitives.mdx",
  "docs/migration-guides/qiskit-backendv1-to-v2.mdx",
  "docs/migration-guides/qiskit-opflow-module.mdx",
  "docs/migration-guides/qiskit-runtime-from-ibm-provider.mdx",
  "docs/migration-guides/qiskit-runtime-from-ibmq-provider.mdx",
  "docs/migration-guides/qiskit-runtime-options.mdx",
  "docs/guides/access-groups.mdx",
  "docs/migration-guides/v2-primitives.mdx",
  "docs/guides/execution-modes.mdx",
  "docs/guides/install-qiskit-source.mdx",
  "docs/guides/manage-cost.mdx",
  "docs/guides/plans-overview.mdx",
  "docs/guides/qiskit-addons-aqc.mdx",
  "docs/guides/qiskit-addons-sqd.mdx",
  "docs/guides/qiskit-code-assistant-vscode.mdx",
  "docs/guides/qiskit-function-templates.mdx",
  "docs/guides/serverless.mdx",
  "docs/open-source/code-of-conduct.mdx",
  "docs/open-source/create-a-provider.mdx",
  "docs/support/execution-modes-faq.mdx",
  "docs/support/faq.mdx",
  "learning/index.mdx",
  "learning/courses/basics-of-quantum-information/exam.mdx",
  "learning/courses/basics-of-quantum-information/index.mdx",
  "learning/courses/foundations-of-quantum-error-correction/index.mdx",
  "learning/courses/fundamentals-of-quantum-algorithms/exam.mdx",
  "learning/courses/fundamentals-of-quantum-algorithms/index.mdx",
  "learning/courses/quantum-business-foundations/business-impacts.mdx",
  "learning/courses/quantum-business-foundations/exam.mdx",
  "learning/courses/quantum-business-foundations/quantum-computing-fundamentals.mdx",
  "learning/courses/quantum-business-foundations/quantum-technology.mdx",
  "learning/courses/quantum-business-foundations/start-your-quantum-journey.mdx",
  "learning/courses/quantum-chem-with-vqe/exam.mdx",
  "learning/courses/quantum-diagonalization-algorithms/exam.mdx",
  "learning/courses/quantum-machine-learning/exam.mdx",
  "learning/courses/quantum-safe-cryptography/exam.mdx",
  "learning/courses/utility-scale-quantum-computing/classical-simulation.mdx",
  "learning/courses/variational-algorithm-design/exam.mdx",
];

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
        "Check the images in the current and dev versions of the API docs have alt text.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();
  const files = await determineContentFiles(args);

  for (const file of files) {
    const markdown = await readMarkdown(file);
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkFrontmatter, ["yaml"]);

    const tree = processor.parse(markdown);

    const imageErrors = await collectInvalidImageErrors(tree);
    const mismatchedTitleHeadingErrors =
      IGNORE_TITLE_MISMATCHES.includes(file) || file.startsWith("docs/api")
        ? new Set<string>()
        : await collectHeadingTitleMismatch(tree);

    //Collect all errors for this file
    const errorsInFile: string[] = [
      ...imageErrors,
      ...mismatchedTitleHeadingErrors,
    ];

    if (errorsInFile.length) {
      allErrors.push(
        // `Error in file '${file}':\n\t- ${[...imageErrors].join("\n\t- ")}\n`,
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
