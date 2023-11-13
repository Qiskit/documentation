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
import { readFile } from "fs/promises";
import path from "node:path";
import { Link, File } from "../lib/LinkChecker";
import markdownLinkExtractor from "markdown-link-extractor";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkStringify from "remark-stringify";
import { Root } from "remark-mdx";
import rehypeRemark from "rehype-remark";
import rehypeParse from "rehype-parse";
import remarkGfm from "remark-gfm";

// The links in the files are not searched to see if they are valid.
// The files need a list of links to be ignored, and when an asterisk
// (*) is used as a link, all the links in the file will be ignored.
const FILES_TO_IGNORES: { [id: string]: string[] } = {};

// While these files don't exist in this repository, the link
// checker should assume that they exist in production.
const SYNTHETIC_FILES: string[] = [
  "docs/errors.mdx",
  "docs/api/runtime/tags/programs.mdx",
];

function markdownFromNotebook(source: string): string {
  let markdown = "";
  for (let cell of JSON.parse(source).cells) {
    if (cell.cell_type === "markdown") {
      markdown += cell.source;
    }
  }
  return markdown;
}

/**
 * Return a list of File objects with all the files
 * in `filePaths` and a list of Link objects with all
 * the links found in those files.
 */
async function loadFilesAndLinks(
  filePaths: string[],
): Promise<[File[], Link[]]> {
  const fileList: File[] = [];
  const linkList: Link[] = [];

  // Auxiliary Map to avoid link duplications
  const linkMap = new Map<string, string[]>();

  for (let filePath of filePaths) {
    const source = await readFile(filePath, { encoding: "utf8" });
    const markdown =
      path.extname(filePath) === ".ipynb"
        ? markdownFromNotebook(source)
        : source;

    fileList.push(new File(filePath, []));

    if (
      filePath.startsWith("docs/api/qiskit") ||
      filePath.startsWith("docs/api/qiskit-ibm-provider") ||
      filePath.startsWith("docs/api/qiskit-ibm-runtime")
    ) {
      continue;
    }

    if (
      filePath in FILES_TO_IGNORES &&
      FILES_TO_IGNORES[filePath].includes("*")
    ) {
      continue;
    }

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

  for (let [link, originFiles] of linkMap) {
    originFiles = originFiles.filter(
      (originFile) =>
        FILES_TO_IGNORES[originFile] == null ||
        !FILES_TO_IGNORES[originFile].includes(link),
    );

    if (originFiles.length > 0) {
      linkList.push(new Link(link, originFiles));
    }
  }

  return [fileList, linkList];
}

/**
 * Return a list of File objects with all the files
 * in `existingPaths`
 */
function loadFiles(existingPaths: string[]): File[] {
  const fileList: File[] = [];
  for (let path of existingPaths) {
    fileList.push(new File(path, []));
  }

  return fileList;
}

async function main() {
  // Determine what files we have and separate them into files with links
  // to read and files we don't need to parse.
  const pathsWithLinks = await globby("docs/**/*.{ipynb,md,mdx}");
  const pathsWithoutLinks = [
    ...(await globby("{public,docs}/**/*.{png,jpg,gif,svg}")),
    ...SYNTHETIC_FILES,
  ];

  // Parse the files with links and get a list with all the links
  // in all the files without duplications.
  const [docsFiles, linkList] = await loadFilesAndLinks(pathsWithLinks);

  // Create an array with all the valid destinations for a link
  const otherFiles = loadFiles(pathsWithoutLinks);
  const existingFiles = docsFiles.concat(otherFiles);

  // Validate the links and print the results
  let allGood = true;
  linkList.forEach((link) => {
    const errorMessages = link.checkLink(existingFiles);
    errorMessages.forEach((errorMessage) => console.error(errorMessage));
    allGood &&= errorMessages.length == 0;
  });

  if (!allGood) {
    console.error("\nSome links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo links appear broken ✅\n");
}

main();
