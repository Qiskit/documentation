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

// These files are not searched to see if their own links are valid.
const IGNORED_FILES: string[] = [];

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

async function loadFilesAndLinks(
  filePaths: string[],
): Promise<[File[], Map<string, Link>]> {
  /*
   * Return a list of File objects with all the files
   * in `filePaths` and a Map with all the links found
   * in those files.
   */

  const fileList: File[] = [];
  const linkMap = new Map<string, Link>();

  for (let filePath of filePaths) {
    const source = await readFile(filePath, { encoding: "utf8" });
    const markdown =
      path.extname(filePath) === ".ipynb"
        ? markdownFromNotebook(source)
        : source;

    fileList.push(new File(filePath));

    if (
      filePath.startsWith("docs/api/qiskit") ||
      filePath.startsWith("docs/api/qiskit-ibm-provider") ||
      filePath.startsWith("docs/api/qiskit-ibm-runtime")
    ) {
      continue;
    }

    if (IGNORED_FILES.includes(filePath)) {
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
                  link.addOrigin(filePath);
                } else {
                  linkMap.set(url, new Link(url, filePath));
                }
              },
            );
          });
          visit(tree, "link", (TreeNode) => {
            let link = linkMap.get(TreeNode.url);
            if (link != null) {
              link.addOrigin(filePath);
            } else {
              linkMap.set(TreeNode.url, new Link(TreeNode.url, filePath));
            }
          });
          visit(tree, "image", (TreeNode) => {
            let link = linkMap.get(TreeNode.url);
            if (link != null) {
              link.addOrigin(filePath);
            } else {
              linkMap.set(TreeNode.url, new Link(TreeNode.url, filePath));
            }
          });
        };
      })
      .use(remarkStringify)
      .process(markdown);
  }
  return [fileList, linkMap];
}

function loadFiles(existingPaths: string[]): File[] {
  /*
   * Return a list of File objects with all the files
   * in `existingPaths`
   */
  const fileList: File[] = [];
  for (let path of existingPaths) {
    fileList.push(new File(path));
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

  // Parse the files with links and get a Map with all the links
  // in all the files without duplications.
  const [docsFiles, linkMap] = await loadFilesAndLinks(pathsWithLinks);

  // Create an array with all the valid destinations for a link
  const otherFiles = loadFiles(pathsWithoutLinks);
  const existingFiles = docsFiles.concat(otherFiles);

  // Validate the links
  for (let [_, link] of linkMap) {
    link.checkLink(existingFiles);
  }

  // Print the results of the validation.
  let allGood = true;
  for (let [_, link] of linkMap) {
    for (let i = 0; i < link.status.length; i++) {
      if (!link.status[i]) {
        console.log(
          `❌ ${link.origin[i]}: Could not find link '${link.value}'`,
        );
        allGood = false;
      }
    }
  }

  if (!allGood) {
    console.log("\nSome links appear broken 💔\n");
    process.exit(1);
  }
  console.log("\nNo links appear broken ✅\n");
}

main();
