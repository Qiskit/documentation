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
import { Root } from "mdast";

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
        let value = node.children[0].value;
        const prefix = "\\(";
        const sufix = "\\)";
        if (value.startsWith(prefix) && value.endsWith(sufix)) {
          value = value.substring(prefix.length, value.length - sufix.length);
          // We need to replace the single `|` characters for `\vert ` to avoid page crashes when
          // they are used inside a table. For more information: https://github.com/Qiskit/documentation/issues/488
          value = value.replace(/(?<!\\)\|/gm, "\\vert ");
        }
        return { type: "inlineMath", value };
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
        let value = node.children[0].value;
        const prefix = "\\[";
        const sufix = "\\]";
        if (value.startsWith(prefix) && value.endsWith(sufix)) {
          value = value.substring(prefix.length, value.length - sufix.length);
          // We need to replace the single `|` characters for `\vert ` to avoid page crashes when
          // they are used inside a table. For more information: https://github.com/Qiskit/documentation/issues/488
          value = value.replace(/(?<!\\)\|/gm, "\\vert ");
        }
        return { type: "math", value };
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
        let title = toText(titleNode).trim();
        if (title.endsWith(":")) {
          title = title.slice(0, -1);
        }
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
        const firstChild = first(node.children);
        if (firstChild?.type === "text") {
          const match = firstChild.value.match(/^\s+/);
          if (match) {
            if (match[0] === firstChild.value) {
              node.children = tail(node.children);
            } else {
              firstChild.value = removePrefix(firstChild.value, match[0]);
            }
            parent.children.splice(index, 0, {
              type: "text",
              value: match[0],
            });
          }
        }
        const lastChild = last(node.children);
        if (lastChild?.type === "text") {
          const match = lastChild.value.match(/\s+$/);
          if (match) {
            if (match[0] === lastChild.value) {
              node.children = initial(node.children);
            } else {
              lastChild.value = removeSuffix(lastChild.value, match[0]);
            }
            parent.children.splice(index + 1, 0, {
              type: "text",
              value: match[0],
            });
          }
        }
      });
    })
    .process(mainHtml);

  return mdFile.toString().replaceAll(`<!---->`, "");
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
