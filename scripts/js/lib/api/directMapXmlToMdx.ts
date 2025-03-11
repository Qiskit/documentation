// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import type {
  Root as MdastRoot,
  BlockContent as MdastBlockContent,
  Heading as MdastHeading,
  Text as MdastText,
  PhrasingContent as MdastPhrasingContent,
  List as MdastList,
  ListItem as MdastListItem,
  Paragraph as MdastParagraph,
} from "mdast";

// This type represents a node where all descendents have a 1:1 mapping with an mdx
// node. For example:
// * The XML '<title>' maps directly to MDX's `# title`. Therefore, a
//   <title> node can be a descendent of the MdxMappableXmlNode.
// * The XML `<parameterlist>` does NOT have a 1:1 mapping in MDX (we could map
//   to a list, but how would we map back?). Therefore, MdxMappableXmlNodes can't
//   have this as a descendent.
type MdxMappableXmlNode =
  | XmlTextNode
  | XmlListNode
  | { title: MdxMappableXmlNode[] }
  | { para: MdxMappableXmlNode[] }
  | { computeroutput: MdxMappableXmlNode[] }
  | { verbatim: XmlTextNode[] };
type XmlTextNode = { "#text": string };
type XmlListNode = { itemizedlist: Array<{ listitem: MdxMappableXmlNode[] }> };

/**
 * Try to map the XML tree to a markdown AST (mdast) as closely as possible.
 */
export function directMapXmlToMdx(nodes: MdxMappableXmlNode[]): MdastRoot {
  return {
    type: "root",
    children: nodes.flatMap((n) => xmlToBlockNodes(n, 1)),
  };
}

/*
 * Map an XML node (and it's children) to an array of mdast `Block` nodes
 */
function xmlToBlockNodes(
  node: MdxMappableXmlNode,
  headingDepth: MdastHeading["depth"],
): MdastBlockContent[] {
  if ("title" in node)
    return [
      {
        type: "heading",
        depth: headingDepth,
        children: node.title.map(xmlToPhrasingNode),
      },
    ];
  if ("para" in node) return xmlParagraphToBlockNode(node, headingDepth);
  if ("verbatim" in node)
    return [
      {
        type: "code",
        lang: "C",
        value: extractText(node.verbatim).trimEnd(),
      },
    ];
  if ("itemizedlist" in node) return [xmlListToMdx(node)];
  // If the node isn't a recognised block node, try wrapping in a paragraph and
  // converting to a phrasing node.
  return [{ type: "paragraph", children: [xmlToPhrasingNode(node)] }];
}

/**
 * Map an XML node (and it's children) to an array of mdast `Phrasing` nodes
 */
function xmlToPhrasingNode(
  node: MdxMappableXmlNode,
): MdastPhrasingContent | MdastText {
  if ("#text" in node) return { type: "text", value: node["#text"] };
  if ("computeroutput" in node) {
    // TODO: Handle xrefs in computeroutput nodes
    if (isTextOnly(node.computeroutput))
      return { type: "inlineCode", value: extractText(node.computeroutput) };
    else
      throw new Error(
        "Can't yet handle markup inside <computeroutput> tags. " +
          `Problem tag: ${JSON.stringify(node)}`,
      );
  }
  throw new Error(`Can't map XML node: ${JSON.stringify(node)}`);
}

function xmlParagraphToBlockNode(
  node: { para: MdxMappableXmlNode[] },
  headingDepth: MdastHeading["depth"],
): MdastBlockContent[] {
  // Doxygen XML sometimes nests block nodes (such as lists) in paragraphs, which
  // markdown doesn't allow. If we encounter a When processing a block node in a
  // paragraph's children, we close the paragraph, add the block node, then start a
  // new paragraph.
  const blocks: MdastBlockContent[] = [];
  let currentParagraph: MdastParagraph = { type: "paragraph", children: [] };
  for (const child of node.para) {
    try {
      currentParagraph.children.push(xmlToPhrasingNode(child));
    } catch {
      if (currentParagraph.children.length > 0) blocks.push(currentParagraph);
      blocks.push(...xmlToBlockNodes(child, headingDepth));
      currentParagraph = { type: "paragraph", children: [] };
    }
  }
  if (currentParagraph.children.length > 0) blocks.push(currentParagraph);
  return blocks;
}

function xmlListToMdx(node: XmlListNode): MdastList {
  const children: MdastListItem[] = node.itemizedlist
    .filter((n) => !!n.listitem)
    .map((n) => ({
      type: "listItem",
      children: n.listitem.flatMap((n) => xmlToBlockNodes(n, 1)),
    }));
  return { type: "list", children };
}

function extractText(textNodes: XmlTextNode[]): string {
  return textNodes.map((node) => node["#text"]).join();
}

function isTextOnly(node: MdxMappableXmlNode[]): node is XmlTextNode[] {
  return node.every((child) => "#text" in child);
}
