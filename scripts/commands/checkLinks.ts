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

import { Link, File } from "../lib/links/LinkChecker";
import FILES_TO_IGNORES from "../lib/links/ignores";
import { getMarkdownAndAnchors, addLinksToMap } from "../lib/links/markdown";

const DOCS_GLOBS_TO_CHECK = [
  "docs/**/*.{ipynb,md,mdx}",
  // Ignore historical versions
  "!docs/api/{qiskit,qiskit-ibm-provider,qiskit-ibm-runtime}/[0-9]*/*",
  "!docs/api/qiskit/release-notes/*",
];

// These docs/ globs are only loaded so that we can
// validate that internal links to the files are valid.
// We don't check that their own links are valid.
const DOCS_GLOBS_TO_LOAD = [
  "docs/api/qiskit/0.44/{algorithms,opflow}.md",
  "docs/api/qiskit/0.44/qiskit.{algorithms,extensions,opflow}.*",
  "docs/api/qiskit/0.44/qiskit.utils.QuantumInstance.md",
  "docs/api/qiskit/release-notes/index.md",
];

// While these files don't exist in this repository, the link
// checker should assume that they exist in production.
const SYNTHETIC_FILES: string[] = [
  "docs/errors.mdx",
  "docs/api/runtime/index.mdx",
];

interface Arguments {
  [x: string]: unknown;
  external: boolean;
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
    .parseSync();
};

/**
 * Process the markdown and Jupyter notebook files.
 *
 * filePathsToLoad is for files that we only need to load
 * so that we can determine if links from other files to that
 * file are valid. We need to determine all of its anchors.
 *
 * filePathsToCheck is for files that we will actually end up
 * checking. We determine its internal and external links. Other
 * files might link to these files, too, so we also determine
 * the valid anchors to make sure those links are correct.
 *
 * Returns a triplet:
 *   1. A list of `File` objects with their anchors. These represent
 *      the universe of valid internal links, other than any additional
 *      we may add in main() for e.g. images.
 *   2. A list of Link objects with internal links we will validate.
 *   3. A list of Link objects with external links we will validate.
 */
async function processDocsFiles(
  filePathsToLoad: string[],
  filePathsToCheck: string[],
): Promise<[File[], Link[], Link[]]> {
  const files: File[] = [];
  for (let filePath of filePathsToLoad) {
    const [_, anchors] = await getMarkdownAndAnchors(filePath);
    files.push(new File(filePath, anchors, false));
  }

  const linksToOriginFiles = new Map<string, string[]>();
  for (const filePath of filePathsToCheck) {
    const [markdown, anchors] = await getMarkdownAndAnchors(filePath);
    files.push(new File(filePath, anchors, false));
    await addLinksToMap(filePath, markdown, linksToOriginFiles);
  }

  const internalLinks: Link[] = [];
  const externalLinks: Link[] = [];
  for (let [linkPath, originFiles] of linksToOriginFiles) {
    originFiles = originFiles.filter(
      (originFile) =>
        FILES_TO_IGNORES[originFile] == null ||
        !FILES_TO_IGNORES[originFile].includes(linkPath),
    );

    if (originFiles.length > 0) {
      const link = new Link(linkPath, originFiles);
      link.isExternal ? externalLinks.push(link) : internalLinks.push(link);
    }
  }

  return [files, internalLinks, externalLinks];
}

async function main() {
  const args = readArgs();

  const docsToLoad = await globby(DOCS_GLOBS_TO_LOAD);
  const docsToCheck = await globby(DOCS_GLOBS_TO_CHECK);

  // Parse the files with links and get a list with all the links
  // in all the files without duplications.
  const [docsFiles, internalLinkList, externalLinkList] =
    await processDocsFiles(docsToLoad, docsToCheck);

  // Define extra files that we don't want to parse
  const otherFiles = [
    ...(await globby("{public,docs}/**/*.{png,jpg,gif,svg}")).map(
      (fp) => new File(fp, [], false),
    ),
    ...SYNTHETIC_FILES.map((fp) => new File(fp, [], true)),
  ];

  // Create an array with all the valid destinations for a link
  const existingFiles = docsFiles.concat(otherFiles);

  // Validate internal links
  const results = await Promise.all(
    internalLinkList.map((link) => link.checkLink(existingFiles)),
  );

  // Validate external links
  // A for loop is used to reduce the risk of rate-limiting
  if (args["external"]) {
    for (let link of externalLinkList) {
      results.push(await link.checkLink(existingFiles));
    }
  }

  // Print the results
  let allGood = true;
  results.forEach((linkErrors) => {
    linkErrors.forEach((errorMessage) => {
      console.error(errorMessage);
      allGood = false;
    });
  });

  if (!allGood) {
    console.error("\nSome links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo links appear broken ✅\n");
}

main().then(() => process.exit());
