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

import { readFile } from "fs/promises";
import path from "node:path";

import { globby } from "globby";
import markdownLinkExtractor from "markdown-link-extractor";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkStringify from "remark-stringify";
import { Root } from "remark-mdx";
import rehypeRemark from "rehype-remark";
import rehypeParse from "rehype-parse";
import remarkGfm from "remark-gfm";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { Link, File } from "../lib/LinkChecker";
import FILES_TO_IGNORES from "../lib/linkCheckerIgnores";

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

function markdownFromNotebook(source: string): string {
  let markdown = "";
  for (let cell of JSON.parse(source).cells) {
    if (cell.cell_type === "markdown") {
      cell.source.forEach((s: string) => (markdown += s + "\n"));
    }
  }
  return markdown;
}

async function getMarkdownAndAnchors(
  filePath: string,
): Promise<[string, string[]]> {
  const source = await readFile(filePath, { encoding: "utf8" });
  const markdown =
    path.extname(filePath) === ".ipynb" ? markdownFromNotebook(source) : source;

  const anchors = markdownLinkExtractor(markdown).anchors;

  // Get the anchors from HTML ids.
  const id_anchors = markdown.match(/(?<=id=")(.*)(?=")/gm);
  if (id_anchors != null) {
    id_anchors.forEach((id) => anchors.push("#" + id));
  }
  return [markdown, anchors];
}

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
  const fileList: File[] = [];
  for (let filePath of filePathsToLoad) {
    const [_, anchors] = await getMarkdownAndAnchors(filePath);
    fileList.push(new File(filePath, anchors, false));
  }

  const internalLinkList: Link[] = [];
  const externalLinkList: Link[] = [];
  // This is a map to avoid link duplications.
  const linkMap = new Map<string, string[]>();

  for (let filePath of filePathsToCheck) {
    const [markdown, anchors] = await getMarkdownAndAnchors(filePath);
    fileList.push(new File(filePath, anchors, false));
    unified()
      .use(rehypeParse)
      .use(remarkGfm)
      .use(rehypeRemark)
      .use(() => {
        return function transform(tree: Root) {
          visit(tree, "text", (TreeNode) => {
            markdownLinkExtractor(String(TreeNode.value)).links.map(
              (url: string) => {
                let link = linkMap.get(url);
                if (link != null) {
                  link.push(filePath);
                } else {
                  linkMap.set(url, [filePath]);
                }
              },
            );
          });
          visit(tree, "link", (TreeNode) => {
            let link = linkMap.get(TreeNode.url);
            if (link != null) {
              link.push(filePath);
            } else {
              linkMap.set(TreeNode.url, [filePath]);
            }
          });
          visit(tree, "image", (TreeNode) => {
            let link = linkMap.get(TreeNode.url);
            if (link != null) {
              link.push(filePath);
            } else {
              linkMap.set(TreeNode.url, [filePath]);
            }
          });
        };
      })
      .use(remarkStringify)
      .process(markdown);
  }

  for (let [linkPath, originFiles] of linkMap) {
    originFiles = originFiles.filter(
      (originFile) =>
        FILES_TO_IGNORES[originFile] == null ||
        !FILES_TO_IGNORES[originFile].includes(linkPath),
    );

    if (originFiles.length > 0) {
      const link = new Link(linkPath, originFiles);
      link.isExternal
        ? externalLinkList.push(link)
        : internalLinkList.push(link);
    }
  }

  return [fileList, internalLinkList, externalLinkList];
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
