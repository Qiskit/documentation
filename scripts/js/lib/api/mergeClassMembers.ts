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

import { includes, isEmpty, orderBy } from "lodash-es";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkStringify from "remark-stringify";
import { Content, Root } from "mdast";
import { MdxJsxFlowElement, MdxJsxAttribute } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { remarkStringifyOptions } from "./commonParserConfig.js";

export async function mergeClassMembers(
  results: HtmlToMdResultWithUrl[],
): Promise<HtmlToMdResultWithUrl[]> {
  const resultsWithName = results.filter(
    (result) => !isEmpty(result.meta.apiName),
  );
  const classes = resultsWithName.filter(
    (result) => result.meta.apiType === "class",
  );
  const mergedMemberUrls = new Set();

  for (const clazz of classes) {
    const unsortedMembers = resultsWithName.filter(
      (result) =>
        includes(["method", "property", "attribute"], result.meta.apiType) &&
        result.meta.apiName?.startsWith(`${clazz.meta.apiName}.`),
    );
    unsortedMembers.forEach((result) => mergedMemberUrls.add(result.url));
    const members = orderBy(unsortedMembers, (result) => result.meta.apiName);

    const attributesAndProps = members.filter(
      (member) =>
        member.meta.apiType === "attribute" ||
        member.meta.apiType === "property",
    );
    const methods = members.filter(
      (member) => member.meta.apiType === "method",
    );

    clazz.images.push(...members.map((member) => member.images).flat());
    try {
      // inject members markdown
      clazz.markdown = (
        await unified()
          .use(remarkParse)
          .use(remarkMdx)
          .use(remarkGfm)
          .use(remarkMath)
          .use(() => {
            return async (root: Root) => {
              // The attribute and method's section can be found under the class component
              const mdxClassElement = root.children.find(
                (node): node is MdxJsxFlowElement =>
                  node.type == "mdxJsxFlowElement" && node.name == "Class",
              );

              if (!mdxClassElement) {
                return;
              }

              for (const node of mdxClassElement.children) {
                await replaceMembersAfterTitle(
                  mdxClassElement,
                  node,
                  "Attributes",
                  attributesAndProps,
                );
                await replaceMembersAfterTitle(
                  mdxClassElement,
                  node,
                  "Methods",
                  methods,
                );
                await replaceMembersAfterTitle(
                  mdxClassElement,
                  node,
                  "Methods Defined Here",
                  methods,
                );
              }
            };
          })
          .use(remarkStringify, remarkStringifyOptions)
          .process(clazz.markdown)
      ).toString();
    } catch (e) {
      console.log("Error found in", clazz.meta.apiName);
      console.log(clazz.markdown);
      throw e;
    }
  }

  return results.filter((result) => !mergedMemberUrls.has(result.url));
}

async function replaceMembersAfterTitle(
  tree: MdxJsxFlowElement,
  node: Content,
  title: string,
  members: HtmlToMdResultWithUrl[],
) {
  // Keep old content when no members to inline
  if (members.length == 0) return;

  if (node.type !== "heading") return;
  const nodeIndex = tree.children.indexOf(node);
  if (nodeIndex === -1) return;

  const nextNode = tree.children[nodeIndex + 1];
  const firstChild = node.children[0];

  if (
    firstChild?.type === "text" &&
    firstChild?.value === title &&
    nextNode?.type === "table"
  ) {
    const children: any[] = [];
    for (const member of members) {
      const updated = await parseMarkdownIncreasingHeading(member.markdown, 2);
      children.push(...updated.children);
    }
    tree.children.splice(nodeIndex + 1, 1, ...children);
  }
}

async function parseMarkdownIncreasingHeading(
  md: string,
  depthIncrease: number,
): Promise<Root> {
  const pipeline = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMdx)
    .use(() => (root) => {
      visit(root, "heading", (node: any) => {
        node.depth = node.depth + depthIncrease;
      });
      visit(root, "mdxJsxFlowElement", (node: any) => {
        // We are inlining functions and attributes and thus we need to remove
        // the `isDedicatedPage` prop
        if (node.name == "Attribute" || node.name == "Function") {
          node.attributes = node.attributes.filter(
            (attr: MdxJsxAttribute) => attr.name != "isDedicatedPage",
          );
        }
      });
    });

  const root = pipeline.parse(md);
  const changedTree = pipeline.run(root);
  return changedTree;
}
