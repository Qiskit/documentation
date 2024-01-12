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

import markdownLinkExtractor from "markdown-link-extractor";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkStringify from "remark-stringify";
import { Root } from "remark-mdx";
import rehypeRemark from "rehype-remark";
import rehypeParse from "rehype-parse";
import remarkGfm from "remark-gfm";
import { ObjectsInv } from "../api/objectsInv";
import { removePrefix } from "../stringUtils";
import { getRoot } from "../fs";

interface JupyterCell {
  cell_type: string;
  source: string[];
}

export function markdownFromNotebook(rawContent: string): string {
  const cells = JSON.parse(rawContent).cells as JupyterCell[];
  return cells
    .filter((cell) => cell.cell_type === "markdown")
    .map((cell) => cell.source.join(""))
    .join("\n");
}

export function parseAnchors(markdown: string): string[] {
  // Anchors generated from markdown titles:
  const mdAnchors = markdownLinkExtractor(markdown).anchors;
  // Anchors from HTML id tags:
  const idAnchors = markdown.match(/(?<=id=")(.*)(?=")/gm) || [];
  return [...mdAnchors, ...idAnchors.map((id) => `#${id}`)];
}

export async function getMarkdownAndAnchors(
  filePath: string,
): Promise<[string, string[]]> {
  const source = await readFile(filePath, { encoding: "utf8" });
  const markdown =
    path.extname(filePath) === ".ipynb" ? markdownFromNotebook(source) : source;
  return [markdown, parseAnchors(markdown)];
}

export async function addLinksToMap(
  filePath: string,
  markdown: string,
  linksToOriginFiles: Map<string, string[]>,
): Promise<void> {
  const addLink = (link: string): void => {
    const entry = linksToOriginFiles.get(link);
    if (entry === undefined) {
      linksToOriginFiles.set(link, [filePath]);
    } else {
      entry.push(filePath);
    }
  };

  if (filePath.endsWith(".inv")) {
    // This is disabled for now; re-enable after fixing #616
    const absoluteFilePath = path.join(getRoot(), filePath);
    const objinv = await ObjectsInv.fromFile(absoluteFilePath);
    for (let entry of objinv.entries) {
      // All URIs are relative to the objects.inv file
      const dirname = removePrefix(path.dirname(filePath), "public");
      const link = path.join(dirname, entry.uri);
      addLink(link);
    }
    return;
  }

  unified()
    .use(rehypeParse)
    .use(remarkGfm)
    .use(rehypeRemark)
    .use(() => (tree: Root) => {
      visit(tree, "text", (TreeNode) => {
        markdownLinkExtractor(String(TreeNode.value)).links.forEach((url) =>
          addLink(url),
        );
      });
      visit(tree, "link", (TreeNode) => addLink(TreeNode.url));
      visit(tree, "image", (TreeNode) => addLink(TreeNode.url));
    })
    .use(remarkStringify)
    .process(markdown);
}
