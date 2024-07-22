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
import { readMarkdown } from "../markdownReader";
import { removePrefix, removeSuffix } from "../stringUtils";
import { getRoot } from "../fs";

export type ParsedFile = {
  /** Anchors that the file defines. These can be linked to from other files. */
  anchors: Set<string>;
  /** Internal links that this file has to other places. */
  internalLinks: Set<string>;
  /** External links that this file has to other places. */
  externalLinks: Set<string>;
};

export function parseAnchors(markdown: string): Set<string> {
  // Anchors generated from markdown titles.
  const mdAnchors = markdownLinkExtractor(markdown).anchors;
  // Anchors from HTML id tags.
  const idAnchors = markdown.match(/(?<=id=")(.+?)(?=")/gm) || [];
  return new Set([...mdAnchors, ...idAnchors.map((id) => `#${id}`)]);
}

export async function parseLinks(
  markdown: string,
): Promise<[Set<string>, Set<string>]> {
  const internalLinks = new Set<string>();
  const externalLinks = new Set<string>();

  const addLink = (link: string): void => {
    if (link.startsWith("http")) {
      externalLinks.add(link);
    } else {
      internalLinks.add(link);
    }
  };

  await unified()
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

  return [internalLinks, externalLinks];
}

async function parseObjectsInv(filePath: string): Promise<Set<string>> {
  const absoluteFilePath = path.join(
    getRoot(),
    removeSuffix(filePath, "objects.inv"),
  );
  const objinv = await ObjectsInv.fromFile(absoluteFilePath);
  // All URIs are relative to the objects.inv file
  const dirname = removePrefix(path.dirname(filePath), "public");
  return new Set(objinv.entries.map((entry) => path.join(dirname, entry.uri)));
}

export async function parseFile(filePath: string): Promise<ParsedFile> {
  if (filePath.endsWith(".inv")) {
    const links = await parseObjectsInv(filePath);
    return {
      internalLinks: links,
      externalLinks: new Set(),
      anchors: new Set(),
    };
  }

  const markdown = await readMarkdown(filePath);
  const [internalLinks, externalLinks] = await parseLinks(markdown);
  return { anchors: parseAnchors(markdown), internalLinks, externalLinks };
}
