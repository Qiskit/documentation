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
import { defaultHandlers, Handle, toMdast, all, H } from "hast-util-to-mdast";
import { toText } from "hast-util-to-text";
import remarkMath from "remark-math";
import remarkMdx from "remark-mdx";
import { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";
import { Emphasis, Root, Content } from "mdast";

import { processHtml } from "./processHtml";
import { HtmlToMdResult } from "./HtmlToMdResult";
import { Metadata } from "./Metadata";
import { removePrefix, removeSuffix, capitalize } from "../stringUtils";
import { remarkStringifyOptions } from "./commonParserConfig";

export async function sphinxHtmlToMarkdown(options: {
  html: string;
  fileName: string;
  imageDestination: string;
  determineGithubUrl: (fileName: string) => string;
  releaseNotesTitle: string;
}): Promise<HtmlToMdResult> {
  const processedHtml = await processHtml(options);
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
    .use(() => (root: Root) => visit(root, "emphasis", mergeContiguousEmphasis))
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

      if (
        node.properties.id &&
        (node.properties.className?.includes("target") ||
          node.children.length === 0)
      ) {
        return [buildSpanId(node.properties.id), ...all(h, node)];
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
      return buildDt(h, node, meta.apiType);
    },
    div(h, node: any): any {
      const nodeClasses = node.properties.className ?? [];
      if (nodeClasses.includes("admonition")) {
        return buildAdmonition(node, nodeClasses, handlers);
      }

      if (nodeClasses.includes("deprecated")) {
        return buildDeprecatedAdmonition(node, handlers);
      }

      return defaultHandlers.div(h, node);
    },
    class(h, node: any): any {
      return buildApiComponent(h, node);
    },
    function(h, node: any): any {
      return buildApiComponent(h, node);
    },
    attribute(h, node: any): any {
      return buildApiComponent(h, node);
    },
  };

  return handlers;
}

function mergeContiguousEmphasis(
  node: Emphasis,
  index: number | null,
  parent: any | null,
): void {
  if (index === null || parent === null) return;
  let nextIndex = index + 1;
  while (parent.children[nextIndex]?.type === "emphasis") {
    node.children.push(...((parent.children[nextIndex] as any).children ?? []));
    nextIndex++;
  }
  parent.children.splice(index + 1, nextIndex - (index + 1));

  removeEmphasisSpaces(node, index, parent, "initial");
  removeEmphasisSpaces(node, index, parent, "tail");
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

function findNodeWithProperty(nodeList: any[], propertyName: string) {
  return nodeList.find(
    (child: any) => child.properties.className?.includes(propertyName),
  );
}

function buildDt(
  h: H,
  node: any,
  apiType?: string,
): void | Content | Content[] {
  if (apiType === "class" || apiType === "module") {
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
}

function buildAdmonition(
  node: any,
  nodeClasses: string[],
  handlers: Record<string, Handle>,
): MdxJsxFlowElement {
  const titleNode = findNodeWithProperty(node.children, "admonition-title");
  const children: Array<any> = without(node.children, titleNode).map(
    (node: any) => toMdast(node, { handlers }),
  );

  let type = "note";
  if (nodeClasses.includes("warning")) {
    type = "caution";
  } else if (nodeClasses.includes("important")) {
    type = "danger";
  }

  return {
    type: "mdxJsxFlowElement",
    name: "Admonition",
    attributes: [
      {
        type: "mdxJsxAttribute",
        name: "title",
        value: toText(titleNode),
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

function buildDeprecatedAdmonition(
  node: any,
  handlers: Record<string, Handle>,
): MdxJsxFlowElement {
  const titleNode = findNodeWithProperty(
    node.children[0].children,
    "versionmodified",
  );
  const title = toText(titleNode).trim().replace(/:$/, "");
  const otherChildren: Array<any> = without(
    node.children[0].children,
    titleNode,
  ).map((node: any) => toMdast(node, { handlers }));

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
        value: "danger",
      },
    ],
    children: [
      {
        type: "paragraph",
        children: otherChildren,
      },
    ],
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

function buildApiComponent(h: H, node: any): any {
  const componentName = capitalize(node.tagName);

  const hastTree = {
    type: "mdxJsxFlowElement",
    name: componentName,
    attributes: [],
    children: all(h, node),
  };

  maybeAddAttribute(hastTree, "id", node.properties.id);
  maybeAddAttribute(
    hastTree,
    "attributeTypeHint",
    node.properties.attributetypehint,
  );
  maybeAddAttribute(hastTree, "attributeValue", node.properties.attributevalue);
  maybeAddExpressionAttribute(
    hastTree,
    "isDedicatedPage",
    node.properties.isdedicatedpage,
  );
  maybeAddAttribute(hastTree, "github", node.properties.github);
  maybeAddAttribute(hastTree, "signature", node.properties.signature);
  maybeAddAttribute(hastTree, "modifiers", node.properties.modifiers);
  maybeAddExpressionAttribute(
    hastTree,
    "extraSignatures",
    node.properties.extrasignatures,
  );

  return hastTree;
}

function maybeAddAttribute(hastTree: any, name: string, value: string): void {
  if (value && value.trim() && value != "undefined") {
    hastTree.attributes.push({
      type: "mdxJsxAttribute",
      name,
      value,
    });
  }
}

function maybeAddExpressionAttribute(
  hastTree: any,
  name: string,
  value: string,
): void {
  if (value && value != "undefined" && value != "[]") {
    hastTree.attributes.push({
      type: "mdxJsxAttribute",
      name,
      value: {
        type: "mdxJsxAttributeValueExpression",
        value,
      },
    });
  }
}
