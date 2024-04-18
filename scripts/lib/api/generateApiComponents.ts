// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { CheerioAPI, Cheerio, Element } from "cheerio";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

import { ApiType } from "./Metadata";
import {
  getLastPartFromFullIdentifier,
  APOSTROPHE_HEX_CODE,
} from "../stringUtils";

export type ComponentProps = {
  id?: string;
  name?: string;
  attributeTypeHint?: string;
  attributeValue?: string;
  githubSourceLink?: string;
  rawSignature?: string;
  extraRawSignatures?: string[];
  isDedicatedPage?: boolean;
};

const APITYPE_TO_TAG: Record<string, string> = {
  class: "class",
  exception: "class",
  attribute: "attribute",
  property: "attribute",
  function: "function",
  method: "function",
};

export async function processMdxComponent(
  $: CheerioAPI,
  $main: Cheerio<any>,
  signatures: Cheerio<Element>[],
  $dl: Cheerio<any>,
  priorApiType: ApiType | undefined,
  apiType: ApiType,
  id: string,
): Promise<[string, string]> {
  const tagName = APITYPE_TO_TAG[apiType];

  const $firstSignature = signatures.shift()!;
  const componentProps = prepareProps(
    $,
    $main,
    $firstSignature,
    $dl,
    priorApiType,
    apiType,
    id,
  );

  const extraProps = signatures.flatMap(
    ($overloadedSignature) =>
      prepareProps($, $main, $overloadedSignature, $dl, apiType, apiType, id) ??
      [],
  );
  addExtraSignatures(componentProps, extraProps);

  return [await createOpeningTag(tagName, componentProps), `</${tagName}>`];
}

// ------------------------------------------------------------------
// Prepare props for MDX components
// ------------------------------------------------------------------

function prepareProps(
  $: CheerioAPI,
  $main: Cheerio<any>,
  $child: Cheerio<Element>,
  $dl: Cheerio<any>,
  priorApiType: ApiType | undefined,
  apiType: ApiType,
  id: string,
): ComponentProps {
  const preparePropsPerApiType: Record<string, () => ComponentProps> = {
    class: () => prepareClassProps($child, githubSourceLink, id),
    property: () =>
      preparePropertyProps($child, $dl, priorApiType, githubSourceLink, id),
    method: () =>
      prepareMethodProps($, $child, $dl, priorApiType, githubSourceLink, id),
    attribute: () =>
      prepareAttributeProps($, $child, $dl, priorApiType, githubSourceLink, id),
    function: () =>
      prepareFunctionOrExceptionProps($, $child, $dl, id, githubSourceLink),
    exception: () =>
      prepareFunctionOrExceptionProps($, $child, $dl, id, githubSourceLink),
  };

  const githubSourceLink = prepareGitHubLink($child, apiType === "method");
  findByText($, $main, "em.property", apiType).remove();

  if (!(apiType in preparePropsPerApiType)) {
    throw new Error(`Unhandled Python type: ${apiType}`);
  }

  return preparePropsPerApiType[apiType]();
}

function prepareClassProps(
  $child: Cheerio<any>,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
  return {
    id,
    rawSignature: $child.html()!,
    githubSourceLink,
  };
}

function preparePropertyProps(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
  const rawSignature = $child.find("em").text()?.replace(/^:\s+/, "");
  const props = {
    id,
    name: getLastPartFromFullIdentifier(id),
    rawSignature,
    githubSourceLink,
  };

  if (!priorApiType && id) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    return {
      ...props,
      isDedicatedPage: true,
    };
  }

  return props;
}

function prepareMethodProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
  const props = {
    id,
    name: getLastPartFromFullIdentifier(id),
    rawSignature: $child.html()!,
    githubSourceLink,
  };

  if (id) {
    if (!priorApiType) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
      return {
        ...props,
        isDedicatedPage: true,
      };
    } else if ($child.attr("id")) {
      $(`<h3>${getLastPartFromFullIdentifier(id)}</h3>`).insertBefore($dl);
    }
  }
  return props;
}

function prepareAttributeProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
  if (!priorApiType) {
    if (id) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    }
    const rawSignature = $child.find("em").text()?.replace(/^:\s+/, "");
    return {
      id,
      rawSignature,
      githubSourceLink,
      isDedicatedPage: true,
    };
  }

  // Else, the attribute is embedded on the class
  const text = $child.text();

  // Index of the default value of the attribute
  let equalIndex = text.indexOf("=");
  if (equalIndex == -1) {
    equalIndex = text.length;
  }
  // Index of the attribute's type. The type should be
  // found before the default value
  let colonIndex = text.slice(0, equalIndex).indexOf(":");
  if (colonIndex == -1) {
    colonIndex = text.length;
  }

  // The attributes have the following shape: name [: type] [= value]
  const name = text.slice(0, Math.min(colonIndex, equalIndex)).trim();
  const attributeTypeHint = text
    .slice(Math.min(colonIndex + 1, equalIndex), equalIndex)
    .trim();
  const attributeValue = text.slice(equalIndex, text.length).trim();

  $(`<h3>${name}</h3>`).insertBefore($dl);

  return {
    id,
    name,
    attributeTypeHint,
    attributeValue,
  };
}

function prepareFunctionOrExceptionProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  id: string,
  githubSourceLink: string | undefined,
): ComponentProps {
  const props = {
    id,
    name: getLastPartFromFullIdentifier(id),
    rawSignature: $child.html()!,
    githubSourceLink,
  };

  const pageHeading = $dl.siblings("h1").text();
  if (id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to apiType; no heading needed
    return {
      ...props,
      isDedicatedPage: true,
    };
  }
  $(`<h3>${getLastPartFromFullIdentifier(id)}</h3>`).insertBefore($dl);

  return props;
}

// ------------------------------------------------------------------
// Generate MDX components
// ------------------------------------------------------------------

/**
 * Creates the opening tag of the API components. The function sets all possible
 * props values even if they are empty or undefined. All the props without value
 * will be removed when generating the markdown file in `htmlToMd.ts`.
 */
export async function createOpeningTag(
  tagName: string,
  props: ComponentProps,
): Promise<string> {
  const attributeTypeHint = props.attributeTypeHint?.replaceAll(
    "'",
    APOSTROPHE_HEX_CODE,
  );
  const attributeValue = props.attributeValue?.replaceAll(
    "'",
    APOSTROPHE_HEX_CODE,
  );
  const signature = await htmlSignatureToMd(props.rawSignature!);
  const extraSignatures: string[] = [];
  for (const sig of props.extraRawSignatures ?? []) {
    extraSignatures.push(`"${await htmlSignatureToMd(sig!)}"`);
  }

  return `<${tagName} 
    id='${props.id}'
    name='${props.name}'
    attributeTypeHint='${attributeTypeHint}'
    attributeValue='${attributeValue}'
    isDedicatedPage='${props.isDedicatedPage}'
    github='${props.githubSourceLink}'
    signature='${signature}'
    extraSignatures='[${extraSignatures.join(", ")}]'
    >
  `;
}

/**
 * Removes the original link from sphinx.ext.viewcode and returns the HTML string for our own link.
 *
 * This returns the HTML string, rather than directly inserting into the HTML, because the insertion
 * logic is most easily handled by the calling code.
 *
 * This function works the same regardless of whether the Sphinx build used `sphinx.ext.viewcode`
 * or `sphinx.ext.linkcode` because they have the same HTML structure.
 *
 * If the link corresponds to a method, we only return a link if it has line numbers included,
 * which implies that the link came from `sphinx.ext.linkcode` rather than `sphinx.ext.viewcode`.
 * That's because the owning class will already have a link to the relevant file; it's
 * noisy and not helpful to repeat the same link without line numbers for the individual methods.
 */
export function prepareGitHubLink(
  $child: Cheerio<any>,
  isMethod: boolean,
): string | undefined {
  const originalLink = $child.find(".viewcode-link").closest("a");
  if (originalLink.length === 0) {
    return undefined;
  }
  const href = originalLink.attr("href")!;
  originalLink.first().remove();
  return !isMethod || href.includes(".py#") ? href : undefined;
}

/**
 * Find the element that both matches the `selector` and whose content is the same as `text`
 */
export function findByText(
  $: CheerioAPI,
  $main: Cheerio<any>,
  selector: string,
  text: string,
): Cheerio<any> {
  return $main.find(selector).filter((i, el) => $(el).text().trim() === text);
}

export function addExtraSignatures(
  componentProps: ComponentProps,
  extraRawSignatures: ComponentProps[],
): void {
  componentProps.extraRawSignatures = [
    ...extraRawSignatures.flatMap((sigProps) => sigProps.rawSignature ?? []),
  ];
}

/**
 * Converts a given HTML into markdown
 */
export async function htmlSignatureToMd(
  signatureHtml: string,
): Promise<string> {
  if (!signatureHtml) {
    return "";
  }

  const html = `<code>${signatureHtml}</code>`;
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .process(html);

  return String(file)
    .replaceAll("\n", "")
    .replaceAll("'", APOSTROPHE_HEX_CODE)
    .replaceAll('"', '\\"')
    .replace(/^`/, "")
    .replace(/`$/, "");
}
