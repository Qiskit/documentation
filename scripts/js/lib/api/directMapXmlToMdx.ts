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
  Root,
  BlockContent,
  Text,
  PhrasingContent,
  List,
  ListItem,
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
  | { computeroutput: XmlTextNode[] }
  | { verbatim: XmlTextNode[] };
type XmlTextNode = { "#text": string };
type XmlListNode = { itemizedlist: Array<{ listitem: MdxMappableXmlNode[] }> };

/**
 * The <sect1> nodes are the prose docstrings of the function and can be mapped to standard markdown.
 * TODO: Back this up with a source
 */
export function directMapXmlToMdx(nodes: MdxMappableXmlNode[]): Root {
  return {
    type: "root",
    children: nodes.map(directMapNode),
  };
}

function directMapNode(
  node: MdxMappableXmlNode,
): BlockContent | PhrasingContent | Text {
  if ("#text" in node) return { type: "text", value: node["#text"] };
  if ("para" in node)
    return { type: "paragraph", children: node.para.map(directMapNode) };
  if ("title" in node)
    return { type: "heading", children: node.title.map(directMapNode) };
  if ("verbatim" in node)
    return {
      type: "code",
      lang: "C",
      value: extractText(node.verbatim).trimRight(),
    };
  if ("computeroutput" in node)
    // TODO: Handle xrefs in computeroutput nodes
    return { type: "inlineCode", value: extractText(node.computeroutput) };
  if ("itemizedlist" in node) return parseList(node);
  throw new Error(`Can't map XML node: ${JSON.stringify(node)}`);
}

function parseList(node: XmlListNode): List {
  const children: ListItem[] = node.itemizedlist
    .filter((n) => !!n.listitem)
    .map((n) => ({
      type: "listItem",
      children: n.listitem.map(directMapNode),
    }));
  return { type: "list", children };
}

function extractText(textNodes: XmlTextNode[]): string {
  return textNodes.map((node) => node["#text"]).join();
}
