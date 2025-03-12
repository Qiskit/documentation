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

// The core of this file is the `readXml` function, which parses a Doxygen
// XML file and returns a `PageData` object. `PageData` contains all the
// relevant information needed to render a C API page.

import { XMLParser } from "fast-xml-parser";

import {
  directMapXmlToMdx,
  extractText,
  XmlTextNode,
  MdxMappableXmlNode,
} from "./directMapXmlToMdx";
import { BlockContent } from "mdast";
import { BlockList } from "net";

// Only exported for testing
export const xmlParser = new XMLParser({
  preserveOrder: true,
  alwaysCreateTextNode: true,
  trimValues: false,
  ignoreAttributes: false,
});

// === XML Types ===
// The following types describe the Doxygen XML data.

/**
 * XML tags are an object of the form:
 * ```
 * { tagName: childTags[] }
 * ```
 * Every tag (except root) can have `#text` siblings due to whitespace.
 */
type XmlArray<T> = (XmlTextNode | T)[];

/**
 * Helper to get possible keys of child tags.
 * From https://stackoverflow.com/a/49402091/6441745
 */
type XmlChildKey<T> = T extends T ? keyof T : never;

type DocumentRoot = XmlArray<{ doxygen: DoxygenDocument }>;
type DoxygenDocument = XmlArray<{ compounddef: CompoundDef }>;
type CompoundDef = XmlArray<
  | { title: XmlTextNode[] }
  | { compoundname: XmlTextNode[] }
  | { detaileddescription: MdxMappableXmlNode[] }
  | { sectiondef: XmlArray<MemberDef> }
>;
type MemberDef = {
  memberdef: XmlArray<
    // TODO: Handle tag groups
    // Or even use `isArray`
    | { "@kind": "function" }
    | { "@static": "yes" | "no" }
    | { "@const": "yes" | "no" }
    | { name: XmlTextNode[] }
    | { definition: XmlTextNode[] }
    | { argsstring: XmlTextNode[] }
    | { detaileddescription: XmlArray<DetailedDescription> }
  >;
};
type DetailedDescription =
  | { para: MdxMappableXmlNode }
  | { para: XmlArray<{ simplesect: XmlArray<FunctionReturn> }> }
  | { para: XmlArray<FunctionParameters> }
  | { sect1: XmlArray<MdxMappableXmlNode> };
type FunctionReturn = { "@kind": "return" } | MdxMappableXmlNode;
type FunctionParameters = {
  parameterlist: XmlArray<{
    parameteritem: XmlArray<FunctionParameterItem>;
  }>;
};
type FunctionParameterItem =
  | { parameterdescription: MdxMappableXmlNode }
  | { parameternamelist: XmlArray<{ parametername: XmlTextNode[] }> };

// === PageData Type ===
/**
 * This is the type we return from `readXml`.
 * Its leaf nodes should only be either strings or mdast nodes.
 */
type PageData = {
  title: string;
  description: BlockContent[];
  functions: FunctionData[];
};

type FunctionData = {
  name: string;
  signature: string;
  description: BlockContent[];
  parameters: Array<{ name: string; description: BlockContent[] }>;
  returns: BlockContent[];
  extendedDescription: BlockContent[];
};

/**
 * Extract relevant information from Doxygen XML.
 */
export function readXml(xml: string): PageData {
  const document: DocumentRoot = xmlParser.parse(xml);
  const compoundDef = getCompoundDef(document);
  const pageData: PageData = {
    title: extractText(getChild(compoundDef, "title") as XmlTextNode[]).trim(),
    description: directMapXmlToMdx(
      getChild(compoundDef, "detaileddescription") as MdxMappableXmlNode[],
    ),
    functions: (getChild(compoundDef, "sectiondef") as XmlArray<MemberDef>)
      .filter((tag): tag is MemberDef => "memberdef" in tag)
      .map(readFunction),
  };
  return pageData;
}

/**
 * Helper function for XML data.
 * Rather than an object, the XML tags are in arrays:
 * ```
 * [ { compoundname: ... }, { title: ... }, etc. ]
 * ```
 * This fetches the first tag with a matching property.
 * Unfortunately, TS can't infer the output type so
 * you'll have to add that manually, that is:
 * ```
 * getChild(...) as Type
 * ````
 */
function getChild<XmlArrayType extends object>(
  array: XmlArrayType[],
  propertyName: XmlChildKey<XmlArrayType>,
): undefined | XmlArrayType[typeof propertyName] {
  const item = array.find((item) => propertyName in item);
  if (!item) return undefined;
  return item[propertyName];
}

function getCompoundDef(document: DocumentRoot): CompoundDef {
  const doxygenDoc = getChild(document, "doxygen") as
    | DoxygenDocument
    | undefined;
  if (!doxygenDoc) throw new Error(`Could not find top-level <doxygen> tag.`);
  const compoundDef = getChild(doxygenDoc, "compounddef") as
    | CompoundDef
    | undefined;
  if (!compoundDef)
    throw new Error(
      `Could not find <compounddef> tag as child of <doxygen> tag.`,
    );
  return compoundDef;
}

function readFunction(memberDef: MemberDef): FunctionData {
  const func = memberDef.memberdef;
  const detailedDescription = getChild(
    func,
    "detaileddescription",
  ) as XmlArray<DetailedDescription>;
  return {
    name: extractText(getChild(func, "name") as XmlTextNode[]),
    signature:
      extractText(getChild(func, "definition") as XmlTextNode[]) +
      extractText(getChild(func, "argsstring") as XmlTextNode[]),
    description: directMapXmlToMdx(
      detailedDescription
        .filter((tag): tag is any => "para" in tag)
        .filter(
          (tag): tag is MdxMappableXmlNode =>
            !(
              getChild(tag.para, "simplesect") ||
              getChild(tag.para, "parameterlist")
            ),
        ),
    ),
    parameters: detailedDescription
      .filter((tag) => "para" in tag)
      .flatMap((tag: any) => {
        const parameterList = getChild(tag.para, "parameterlist") as
          | FunctionParameters["parameterlist"]
          | undefined;
        if (!parameterList) return [];
        return parameterList
          .filter((tag) => "parameteritem" in tag)
          .map((tag: any) => tag.parameteritem);
      })
      .map(getParameters),
    returns: detailedDescription
      .filter((tag: any) => "para" in tag && !!getChild(tag.para, "simplesect"))
      // TODO: Check for @kind="return"
      // and remove `as MdxMappableXmlNode[]`
      .flatMap((tag: any) => {
        const simplesect = getChild(
          tag.para,
          "simplesect",
        ) as XmlArray<FunctionReturn>;
        return directMapXmlToMdx(simplesect as MdxMappableXmlNode[]);
      }),
    extendedDescription: directMapXmlToMdx(
      getChild(detailedDescription, "sect1") as MdxMappableXmlNode[],
    ),
  };
}

function getParameters(item: XmlArray<FunctionParameterItem>): {
  name: string;
  description: BlockContent[];
} {
  const nameList = getChild(item, "parameternamelist") as
    | XmlArray<{ parametername: XmlTextNode[] }>
    | undefined;
  const nameTag =
    nameList && (getChild(nameList, "parametername") as XmlTextNode[]);
  if (!nameTag)
    throw new Error(`Could not get parameter name: ${JSON.stringify(item)}`);
  const name = extractText(nameTag);
  const description = directMapXmlToMdx(
    getChild(item, "parameterdescription") as MdxMappableXmlNode[],
  );
  return { name, description };
}

/**
 * Extra whitespace in the XML can appear in the MDX output.
 * This shouldn't affect how it renders on the site so we trim it to reduce noise.
 */
export function collapseWhitespace(mdx: string): string {
  return mdx
    .replaceAll("&#x20;", " ")
    .replace(/\n(\s*\n)+/gm, "\n\n")
    .trim();
}
