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

import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import { last, first, without, initial, tail } from "lodash";
import { defaultHandlers, Handle, toMdast, all } from "hast-util-to-mdast";
import { toText } from "hast-util-to-text";
import remarkMath from "remark-math";
import remarkMdx from "remark-mdx";
import { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";
import { Emphasis, Root } from "mdast";

import { processHtml } from "./processHtml";
import { HtmlToMdResult } from "./HtmlToMdResult";
import { Metadata } from "./Metadata";
import { removePrefix, removeSuffix } from "../stringUtils";
import { remarkStringifyOptions } from "./commonParserConfig";

export async function sphinxHtmlToMarkdown(options: {
  html: string;
  fileName: string;
  imageDestination: string;
  determineGithubUrl: (fileName: string) => string;
  releaseNotesTitle: string;
}): Promise<HtmlToMdResult> {
  const processedHtml = processHtml(options);
  const markdown = await generateMarkdownFile(
    processedHtml.html,
    processedHtml.meta,
  );
  return {
    markdown,
    meta: processedHtml.meta,
    images: processedHtml.images,
    isReleaseNotes: processedHtml.isReleaseNotes,
  };
}

async function generateMarkdownFile(
  mainHtml: string,
  meta: Metadata,
): Promise<string> {
  const handlers = prepareHandlers(meta);
  const mdFile = await unified()
    .use(rehypeParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMdx)
    .use(rehypeRemark, {
      handlers,
    })
    .use(remarkStringify, remarkStringifyOptions)
    .use(() => (root: Root) => {
      // merge contiguous emphasis
      visit(root, "emphasis", (node, index, parent) => {
        if (index === null || parent === null) return;
        let nextIndex = index + 1;
        while (parent.children[nextIndex]?.type === "emphasis") {
          node.children.push(
            ...((parent.children[nextIndex] as any).children ?? []),
          );
          nextIndex++;
        }
        parent.children.splice(index + 1, nextIndex - (index + 1));

        // remove initial and trailing spaces from emphasis
        removeEmphasisSpaces(node, index, parent, "initial");
        removeEmphasisSpaces(node, index, parent, "tail");
      });
    })
    .process(mainHtml);

  return mdFile.toString().replaceAll(`<!---->`, "");
}

function prepareHandlers(meta: Metadata): Record<string, Handle> {
  const handlers: Record<string, Handle> = {
    br(h, node: any) {
      return all(h, node);
    },
    section(h, node: any) {
      if (node.properties.id) {
        return [buildSpanId(node.properties.id), ...all(h, node)];
      }
      return all(h, node);
    },
    span(h, node: any) {
      if (node.properties.className?.includes("math")) {
        return buildMathExpression(node, "inlineMath");
      }

      if (node.properties.id && node.properties.className?.includes("target")) {
        return [buildSpanId(node.properties.id), ...all(h, node)];
      }

      if (node.properties.id && node.children.length === 0) {
        return buildSpanId(node.properties.id);
      }

      return all(h, node);
    },
    pre(h, node: any) {
      if (node.properties.className?.includes("math")) {
        return buildMathExpression(node, "math");
      }
      return defaultHandlers.pre(h, node);
    },
    dl(h, node: any) {
      return defaultHandlers.div(h, node);
    },
    dd(h, node: any) {
      return defaultHandlers.div(h, node);
    },
    dt(h, node: any) {
      if (meta.apiType === "class" || meta.apiType === "module") {
        return [
          h(node, "strong", {
            type: "strong",
            children: all(h, node),
          }),
          { type: "text", value: " " },
        ];
      }
      return h(node, "heading", {
        type: "heading",
        depth: 2,
        children: all(h, node),
      });
    },
    div(h, node: any): any {
      const nodeClasses = node.properties.className ?? [];

      if (nodeClasses.includes("admonition")) {
        const titleNode = node.children.find(
          (child: any) =>
            child.properties.className?.includes("admonition-title"),
        );

        let type = "note";
        if (nodeClasses.includes("warning")) {
          type = "caution";
        } else if (nodeClasses.includes("important")) {
          type = "danger";
        }

        const otherChildren = without(node.children, titleNode);
        return buildAdmonition({
          title: toText(titleNode),
          type,
          children: otherChildren.map((node: any) =>
            toMdast(node, { handlers }),
          ),
        });
      } else if (nodeClasses.includes("deprecated")) {
        const root = node.children[0];
        const titleNode = root.children.find(
          (child: any) =>
            child.properties.className?.includes("versionmodified"),
        );
        const title = toText(titleNode).trim().replace(/:$/, "");

        const otherChildren = without(root.children, titleNode);
        return buildAdmonition({
          title,
          type: "danger",
          children: [
            {
              type: "paragraph",
              children: otherChildren.map((node: any) =>
                toMdast(node, { handlers }),
              ),
            },
          ],
        });
      }

      return defaultHandlers.div(h, node);
    },
  };

  return handlers;
}

function removeEmphasisSpaces(
  node: Emphasis,
  index: number,
  parent: any,
  position: "initial" | "tail",
): void {
  const child =
    position == "initial" ? first(node.children) : last(node.children);
  const reg = position == "initial" ? /^\s+/ : /\s+$/;
  const idx = position == "initial" ? index : index + 1;

  if (child?.type === "text") {
    const match = child.value.match(reg);
    if (match) {
      if (match[0] === child.value) {
        node.children =
          position == "initial" ? tail(node.children) : initial(node.children);
      } else {
        child.value =
          position == "initial"
            ? removePrefix(child.value, match[0])
            : removeSuffix(child.value, match[0]);
      }
      parent.children.splice(idx, 0, {
        type: "text",
        value: match[0],
      });
    }
  }
}

function buildAdmonition(options: {
  title: string;
  type: string;
  children: Array<any>;
}): MdxJsxFlowElement {
  const { title, type, children } = options;
  return {
    type: "mdxJsxFlowElement",
    name: "Admonition",
    attributes: [
      {
        type: "mdxJsxAttribute",
        name: "title",
        value: title,
      },
      {
        type: "mdxJsxAttribute",
        name: "type",
        value: type,
      },
    ],
    children,
  };
}

function buildSpanId(id: string): MdxJsxFlowElement {
  return {
    type: "mdxJsxFlowElement",
    name: "span",
    attributes: [
      {
        type: "mdxJsxAttribute",
        name: "id",
        value: id,
      },
    ],
    children: [],
  };
}

function buildMathExpression(node: any, type: "math" | "inlineMath"): any {
  let value = node.children[0].value;
  const prefix = type == "math" ? "\\[" : "\\(";
  const sufix = type == "math" ? "\\]" : "\\)";
  if (value.startsWith(prefix) && value.endsWith(sufix)) {
    value = value.substring(prefix.length, value.length - sufix.length);
  }
  return { type: type, value };
}
