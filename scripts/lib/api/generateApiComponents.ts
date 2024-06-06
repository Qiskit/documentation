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
  removeSuffix,
  APOSTROPHE_HEX_CODE,
} from "../stringUtils";

export type ComponentProps = {
  id?: string;
  attributeTypeHint?: string;
  attributeValue?: string;
  githubSourceLink?: string;
  rawSignature?: string;
  modifiers?: string;
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
  const prepClassOrException = () =>
    prepareClassOrExceptionProps($, $child, $dl, githubSourceLink, id);
  const prepFunction = () =>
    prepareFunctionProps($, $child, $dl, githubSourceLink, id);
  const prepMethod = () =>
    prepareMethodProps($, $child, $dl, priorApiType, githubSourceLink, id);
  const prepAttributeOrProperty = () =>
    prepareAttributeOrPropertyProps(
      $,
      $child,
      $dl,
      priorApiType,
      githubSourceLink,
      id,
    );

  const preparePropsPerApiType: Record<string, () => ComponentProps> = {
    class: prepClassOrException,
    exception: prepClassOrException,
    property: prepAttributeOrProperty,
    attribute: prepAttributeOrProperty,
    method: prepMethod,
    function: prepFunction,
  };

  const githubSourceLink = prepareGitHubLink($child, apiType === "method");

  // Remove the attributes and properties modifiers as we don't show their signatures,
  // but we still use them to create their headers
  if (apiType == "attribute" || apiType == "property") {
    findByText($, $child, "em.property", apiType).remove();
  }

  if (!(apiType in preparePropsPerApiType)) {
    throw new Error(`Unhandled Python type: ${apiType}`);
  }

  return preparePropsPerApiType[apiType]();
}

function prepareClassOrExceptionProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
  const modifiers = getAndRemoveModifiers($child);
  const props = {
    id,
    rawSignature: $child.html()!,
    githubSourceLink,
    modifiers,
  };

  let pageHeading = $dl.siblings("h1").text();
  // Manually created class pages like Qiskit 1.1+'s `QuantumCircuit`
  // sometimes have ' class' in their h1.
  pageHeading = removeSuffix(pageHeading, " class");
  if (id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to the class
    return {
      ...props,
      isDedicatedPage: true,
    };
  }
  const headerLevel = getHeaderLevel($, $dl);
  const name = getLastPartFromFullIdentifier(id);
  const htag = `h${headerLevel}`;
  $(`<${htag} data-header-type="class-header">${name}</${htag}>`).insertBefore(
    $dl,
  );
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
  const modifiers = getAndRemoveModifiers($child);
  const props = {
    id,
    rawSignature: $child.html()!,
    githubSourceLink,
    modifiers,
  };

  const name = getLastPartFromFullIdentifier(id);
  if (id) {
    if (!priorApiType) {
      $dl.siblings("h1").text(name);
      return {
        ...props,
        isDedicatedPage: true,
      };
    } else if ($child.attr("id")) {
      const headerLevel = getHeaderLevel($, $dl);
      const htag = `h${headerLevel}`;
      $(
        `<${htag} data-header-type="method-header">${name}</${htag}>`,
      ).insertBefore($dl);
    }
  }
  return props;
}

function prepareAttributeOrPropertyProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
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
  // We skip the first character to leave off the `:` and the `=` in
  // both type hint and default value
  const name = text.slice(0, Math.min(colonIndex, equalIndex)).trim();
  const attributeTypeHint = text
    .slice(Math.min(colonIndex + 1, equalIndex), equalIndex)
    .trim();
  const attributeValue = text.slice(equalIndex + 1, text.length).trim();

  const props = {
    id,
    attributeTypeHint,
    attributeValue,
    githubSourceLink,
  };

  if (!priorApiType && id) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    return {
      ...props,
      isDedicatedPage: true,
    };
  }

  // Else, the attribute is embedded on the class
  const headerLevel = getHeaderLevel($, $dl);
  const htag = `h${headerLevel}`;
  $(
    `<${htag} data-header-type="attribute-header">${name}</${htag}>`,
  ).insertBefore($dl);

  return props;
}

function prepareFunctionProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  githubSourceLink: string | undefined,
  id: string,
): ComponentProps {
  const modifiers = getAndRemoveModifiers($child);
  const props = {
    id,
    rawSignature: $child.html()!,
    githubSourceLink,
    modifiers,
  };

  const pageHeading = $dl.siblings("h1").text();
  if (id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to apiType; no heading needed
    return {
      ...props,
      isDedicatedPage: true,
    };
  }
  const headerLevel = getHeaderLevel($, $dl);
  const name = getLastPartFromFullIdentifier(id);
  const htag = `h${headerLevel}`;
  $(`<${htag} data-header-type="method-header">${name}</${htag}>`).insertBefore(
    $dl,
  );

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
    attributeTypeHint='${attributeTypeHint}'
    attributeValue='${attributeValue}'
    isDedicatedPage='${props.isDedicatedPage}'
    github='${props.githubSourceLink}'
    signature='${signature}'
    modifiers='${props.modifiers}'
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

function getAndRemoveModifiers($child: Cheerio<any>): string {
  const rawModifiers = $child.find("em.property");
  const modifiers = rawModifiers.text().trim();
  rawModifiers.remove();
  return modifiers;
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

function getHeaderLevel($: CheerioAPI, $dl: Cheerio<any>): number {
  // We don't allow the header to be h1 or h2 because it's too large design-wise for API components.
  // We try to ensure that the API docs are set up so there is always at least an h2 above the API
  // component, but this is not always the case, especially with historical API docs. That means that
  // we sometimes jump from h1 to h3. That's bad, but the tradeoff we're making to avoid using h2 for
  // API components.
  const minLevel = 3;
  const priorHeaderLevel = getPriorHeaderLevel($, $dl);
  if (priorHeaderLevel) {
    if (+priorHeaderLevel == 6) {
      throw new Error("API component cannot set non-existent header: <h7>");
    }

    return Math.max(minLevel, +priorHeaderLevel + 1);
  }

  return minLevel;
}

function getPriorHeaderLevel(
  $: CheerioAPI,
  $dl: Cheerio<any>,
): string | undefined {
  const siblings = $dl.siblings();
  for (const sibling of siblings) {
    const $sibling = $(sibling);
    if ($sibling.data("header-type")) {
      // A component usually has other components as siblings in the API docs with their respective
      // headers previously created by this script. We need to skip the generated headers to avoid cases
      // where we have multiple methods, attributes, or classes at the same level. Components nested in
      // a class should search for the previous header in a parent node.
      continue;
    }
    const tagName = $sibling.get(0)?.tagName;
    if (tagName?.match(/h[1-6]/)) {
      return tagName.substring(1);
    }
  }

  // If there's no header among the siblings, we look for the closest inline class in some ancestor node.
  // The parent of a component is always a <div>, and the previous element of that <div> is the header
  // we are looking for.
  return $dl.closest("class").parent().prev().get(0)?.tagName.substring(1);
}
