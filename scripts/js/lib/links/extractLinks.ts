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

import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkStringify from "remark-stringify";
import remarkMdx, { Root } from "remark-mdx";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import frontmatter from "remark-frontmatter";
import remarkMath from "remark-math";

import { ObjectsInv } from "../api/objectsInv.js";
import { readMarkdown } from "../markdownReader.js";
import { removePrefix, removeSuffix } from "../stringUtils.js";

export type ParsedFile = {
  /** Anchors that the file defines. These can be linked to from other files. */
  anchors: Set<string>;
  /** Internal links that this file has to other places. */
  internalLinks: Set<string>;
  /** External links that this file has to other places. */
  externalLinks: Set<string>;
};

// Keep in sync with the function `getHeadingAnchorId` in closed source"
export function parseAnchors(markdown: string): Set<string> {
  const lines = markdown.split("\n");
  const anchors = new Set<string>();
  for (const line of lines) {
    const heading = line.match(/^\s*#{1,6}\s+(.+?)\s*$/);
    if (heading) {
      const normalized = heading[1]
        .toLowerCase()
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(/[\.,;:!?`\\\(\)"']/g, "");
      let deduplicated = normalized;
      let i = 1;
      while (anchors.has(`#${deduplicated}`)) {
        deduplicated = `${normalized}-${i}`;
        i += 1;
      }
      anchors.add(`#${deduplicated}`);
    }
    const id = line.match(/(?<=id=")(.+?)(?=")/);
    if (id) anchors.add(`#${id[1]}`);
  }
  return anchors;
}

export async function parseLinks(
  markdown: string,
): Promise<[Set<string>, Set<string>]> {
  const internalLinks = new Set<string>();
  const externalLinks = new Set<string>();

  const addLink = (link: string): void => {
    // We cannot check that email addresses are valid.
    if (link.startsWith("mailto:")) return;

    if (link.startsWith("http")) {
      externalLinks.add(link);
    } else {
      internalLinks.add(link);
    }
  };

  await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMdx)
    .use(frontmatter)
    .use(() => (tree: Root) => {
      visit(tree, { type: "mdxJsxTextElement", name: "a" }, (TreeNode: any) => {
        const href = TreeNode.attributes.find(
          (attr: any) => attr.name == "href",
        );
        if (href) {
          addLink(href.value);
        }
      });
      visit(tree, "link", (TreeNode) => addLink(TreeNode.url));
      visit(tree, "image", (TreeNode) => addLink(TreeNode.url));
    })
    .use(remarkStringify)
    .process(markdown);

  return [internalLinks, externalLinks];
}

async function parseObjectsInv(filePath: string): Promise<Set<string>> {
  const objinv = await ObjectsInv.fromFile(
    removeSuffix(filePath, "objects.inv"),
    "any",
  );
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

  if (filePath.endsWith(".json"))
    return {
      anchors: new Set(),
      internalLinks: new Set(),
      externalLinks: new Set(),
    };

  const markdown = await readMarkdown(filePath);
  try {
    const [internalLinks, externalLinks] = await parseLinks(markdown);
    return { anchors: parseAnchors(markdown), internalLinks, externalLinks };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : `${err}`;
    throw new Error(`Problem parsing '${filePath}':\n` + msg);
  }
}
