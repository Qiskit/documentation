import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";
import type { Root } from "mdast";

export const parser = new XMLParser({
  preserveOrder: true,
  alwaysCreateTextNode: true,
});

// This type represents a node where all descendents have a 1:1 mapping with an mdx
// node. For example:
// * The XML '<title>' maps directly to MDX's `# title`. Therefore, a
//   <title> node can be a descendent of the MdxMappableXmlNode.
// * The XML `<parameterlist>` does NOT have a 1:1 mapping in MDX (we could map
//   to a list, but how would we map back?). Therefore, MdxMappableXmlNodes can't
//   have this as a descendent.
type MdxMappableXmlNode =
  | { "#text": string }
  | { title: MdxMappableXmlNode[] }
  | { para: MdxMappableXmlNode[] }
  | { computeroutput: MdxMappableXmlNode[] }
  | { verbatim: MdxMappableXmlNode[] };

/**
 * The <sect1> nodes are the prose docstrings of the function and can be mapped to standard markdown.
 * TODO: Back this up with a source
 */
export function directMapXmlToMdx(node: MdxMappableXmlNode[]): Root {
  return {
    type: "root",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", value: "Hello, world!" }],
      },
    ],
  };
}
