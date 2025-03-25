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

import { ApiTypeName, ApiObjectName, API_OBJECTS } from "./Metadata.js";
import {
  getLastPartFromFullIdentifier,
  removeSuffix,
  APOSTROPHE_HEX_CODE,
} from "../stringUtils.js";

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

export async function processMdxComponent(
  $: CheerioAPI,
  signatures: Cheerio<Element>[],
  $dl: Cheerio<any>,
  priorApiType: ApiTypeName | undefined,
  apiType: ApiObjectName,
  id: string,
  headerLevel: number,
  options: { isCApi: boolean },
): Promise<[string, string]> {
  const tagName = API_OBJECTS[apiType].tagName;

  const $firstSignature = signatures.shift()!;
  const componentProps = prepareProps(
    $,
    $firstSignature,
    $dl,
    priorApiType,
    apiType,
    id,
    headerLevel,
    options,
  );

  const extraProps = signatures.flatMap(
    ($overloadedSignature) =>
      prepareProps(
        $,
        $overloadedSignature,
        $dl,
        apiType,
        apiType,
        id,
        headerLevel,
        options,
      ) ?? [],
  );
  addExtraSignatures(componentProps, extraProps);

  return [await createOpeningTag(tagName, componentProps), `</${tagName}>`];
}

// ------------------------------------------------------------------
// Prepare props for MDX components
// ------------------------------------------------------------------

function prepareProps(
  $: CheerioAPI,
  $child: Cheerio<Element>,
  $dl: Cheerio<any>,
  priorApiType: ApiTypeName | undefined,
  apiType: ApiObjectName,
  id: string,
  headerLevel: number,
  options: { isCApi: boolean },
): ComponentProps {
  const prepClassOrException = () =>
    prepareClassOrExceptionProps(
      $,
      $child,
      $dl,
      githubSourceLink,
      id,
      headerLevel,
      options,
    );
  const prepFunction = () =>
    prepareFunctionProps($, $child, $dl, githubSourceLink, id, headerLevel);
  const prepMethod = () =>
    prepareMethodProps(
      $,
      $child,
      $dl,
      priorApiType,
      githubSourceLink,
      id,
      headerLevel,
    );
  const prepAttributeOrProperty = () =>
    prepareAttributeOrPropertyProps(
      $,
      $child,
      $dl,
      githubSourceLink,
      id,
      headerLevel,
    );

  const preparePropsPerApiType: Record<ApiObjectName, () => ComponentProps> = {
    class: prepClassOrException,
    exception: prepClassOrException,
    property: prepAttributeOrProperty,
    attribute: prepAttributeOrProperty,
    method: prepMethod,
    function: prepFunction,
    cFunction: prepFunction,
    data: prepAttributeOrProperty,
    struct: prepClassOrException,
    typedef: prepClassOrException,
    enum: prepClassOrException,
    enumerator: prepAttributeOrProperty,
    structMember: prepAttributeOrProperty,
  };

  const githubSourceLink = prepareGitHubLink($child, apiType === "method");

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
  headerLevel: number,
  options: { isCApi: boolean },
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
  if (!options.isCApi && id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to the class
    return {
      ...props,
      isDedicatedPage: true,
    };
  }
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
  priorApiType: ApiTypeName | undefined,
  githubSourceLink: string | undefined,
  id: string,
  headerLevel: number,
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
  githubSourceLink: string | undefined,
  id: string,
  headerLevel: number,
): ComponentProps {
  // Properties/attributes have multiple `em.property` values to set:
  //
  //  - the modifiers, like `property` or `abstract property`
  //  - the type hint
  //  - the default value
  //
  // We need to remove the modifiers `em.property` to not mess up creating the heading, although
  // we must first extract any modifiers. Attributes will not have modifiers, whereas
  // properties will have `property` or possibly `abstract property`. If the modifier is simply
  // `property`, then we do not save its value because there is no practical difference for end-users
  // between an attribute and property. However, we preserve the full string if it's `abstract property`.
  //
  // Meanwhile, we preserve the non-modifier `em.property` elements to be processed below.
  const rawModifiers = $child
    .find("em.property")
    .filter((i, el) => $(el).text().includes("property"));
  const modifiersText = rawModifiers.text().trim();
  const filteredModifiers =
    modifiersText === "property" ? undefined : modifiersText;
  rawModifiers.remove();

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
    modifiers: filteredModifiers,
  };

  const pageHeading = $dl.siblings("h1").text();
  if (pageHeading && id.endsWith(pageHeading)) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    return {
      ...props,
      isDedicatedPage: true,
    };
  }

  // Else, the attribute is embedded on the class
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
  headerLevel: number,
): ComponentProps {
  const modifiers = getAndRemoveModifiers($child);
  const props = {
    id,
    rawSignature: $child.html()!,
    githubSourceLink,
    modifiers,
  };

  const pageHeading = $dl.siblings("h1").text();
  if (pageHeading && id.endsWith(pageHeading)) {
    // Page is already dedicated to apiType; no heading needed
    return {
      ...props,
      isDedicatedPage: true,
    };
  }
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
  originalLink.remove();
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
