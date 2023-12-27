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

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { File } from "../lib/links/LinkChecker";
import { FileBatch } from "../lib/links/FileBatch";

// While these files don't exist in this repository, the link
// checker should assume that they exist in production.
const SYNTHETIC_FILES: string[] = [
  "docs/errors.mdx",
  "docs/api/runtime/index.mdx",
];

interface Arguments {
  [x: string]: unknown;
  external: boolean;
  currentApis: boolean;
  qiskitReleaseNotes: boolean;
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .option("external", {
      type: "boolean",
      default: false,
      description:
        "Should external links be checked? This slows down the script, but is useful to check.",
    })
    .option("current-apis", {
      type: "boolean",
      default: false,
      description: "Check the links in the current API docs.",
    })
    .option("qiskit-release-notes", {
      type: "boolean",
      default: false,
      description: "Check the links in the `api/qiskit/release-notes` folder.",
    })
    .parseSync();
};

async function main() {
  const args = readArgs();

  const fileBatch = await determineFileBatch(args);
  const otherFiles = [
    ...(await globby("{public,docs}/**/*.{png,jpg,gif,svg}")).map(
      (fp) => new File(fp, []),
    ),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, [], true)),
  ];

  const allGood = await fileBatch.check(args.external, otherFiles);
  if (!allGood) {
    console.error("\nSome links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo links appear broken ✅\n");
}

async function determineFileBatch(args: Arguments): Promise<FileBatch> {
  const toCheck = [
    "docs/**/*.{ipynb,md,mdx}",
    // Ignore historical versions
    "!docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/*",
  ];
  const toLoad = [
    "docs/api/qiskit/0.44/{algorithms,opflow}.md",
    "docs/api/qiskit/0.44/qiskit.{algorithms,extensions,opflow}.*",
    "docs/api/qiskit/0.44/qiskit.utils.QuantumInstance.md",
  ];

  if (!args.currentApis) {
    toCheck.push("!docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/*");
    toLoad.push("docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/*");
  }

  if (!args.qiskitReleaseNotes) {
    toCheck.push("!docs/api/qiskit/release-notes/*");
    toLoad.push("docs/api/qiskit/release-notes/index.md");
  }

  return FileBatch.fromGlobs(toCheck, toLoad);
}

main().then(() => process.exit());
