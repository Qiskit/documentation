import { CheerioAPI, Cheerio, Element } from "cheerio";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

import { ApiType } from "./Metadata";
import { getLastPartFromFullIdentifier } from "../stringUtils";

export type componentProps = {
  id: string;
  name?: string;
  attributeType?: string;
  attributeValue?: string;
  githubSourceLink?: string;
  signature?: string;
  extraSignatures?: string[];
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
  findByText($, $main, "em.property", apiType).remove();

  const $firstSignature = signatures.shift()!;
  const githubSourceLink = prepareGitHubLink(
    $firstSignature,
    apiType === "method",
  );

  const componentProps = prepareProps(
    $,
    $firstSignature,
    $dl,
    priorApiType,
    apiType,
    githubSourceLink,
    id,
  );

  const extraProps = signatures
    .map(($overloadedSignature) =>
      prepareProps(
        $,
        $overloadedSignature,
        $dl,
        apiType,
        apiType,
        prepareGitHubLink($overloadedSignature, apiType === "method"),
        id,
      ),
    )
    .flatMap((prop) => (prop ? prop : []));

  if (componentProps) {
    mergeProps(componentProps, extraProps);
    return [
      await generateMdxComponent(apiType, componentProps),
      `</${apiType}>`,
    ];
  }
  return ["", ""];
}

// ------------------------------------------------------------------
// Prepare props for MDX components
// ------------------------------------------------------------------

function prepareProps(
  $: CheerioAPI,
  $child: Cheerio<Element>,
  $dl: Cheerio<any>,
  priorApiType: ApiType | undefined,
  apiType: ApiType,
  githubSourceLink: string,
  id: string,
): componentProps | undefined {
  const preparePropsPerApiType: Record<
    string,
    () => componentProps | undefined
  > = {
    class: () => prepareClassProps($child, githubSourceLink, id),
    property: () =>
      preparePropertyProps($child, $dl, priorApiType, githubSourceLink, id),
    method: () =>
      prepareMethodProps($, $child, $dl, priorApiType, githubSourceLink, id),
    attribute: () =>
      prepareAttributeProps($child, $dl, priorApiType, githubSourceLink, id),
    function: () =>
      prepareFunctionOrExceptionProps($child, $dl, id, githubSourceLink),
    exception: () =>
      prepareFunctionOrExceptionProps($child, $dl, id, githubSourceLink),
  };

  if (!(apiType in preparePropsPerApiType)) {
    throw new Error(`Unhandled Python type: ${apiType}`);
  }

  return preparePropsPerApiType[apiType]();
}

function prepareClassProps(
  $child: Cheerio<any>,
  githubSourceLink: string,
  id: string,
): componentProps {
  return {
    id,
    signature: $child.html()!,
    githubSourceLink,
  };
}

function preparePropertyProps(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string,
  id: string,
): componentProps | undefined {
  if (!priorApiType && id) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
  }

  const signature = $child.find("em").text()?.replace(/^:\s+/, "");
  if (signature.trim().length === 0) return;
  return {
    id,
    signature,
    githubSourceLink,
  };
}

function prepareMethodProps(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string,
  id: string,
): componentProps {
  if (id && !priorApiType) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
  }

  return {
    id,
    name: getLastPartFromFullIdentifier(id),
    signature: $child.html()!,
    githubSourceLink,
  };
}

function prepareAttributeProps(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string,
  id: string,
): componentProps | undefined {
  if (!priorApiType) {
    if (id) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    }

    const signature = $child.find("em").text()?.replace(/^:\s+/, "");
    if (signature.trim().length === 0) return;
    return {
      id,
      signature,
      githubSourceLink,
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
  const attributeType = text
    .slice(Math.min(colonIndex + 1, equalIndex), equalIndex)
    .trim();
  const attributeValue = text.slice(equalIndex, text.length).trim();

  return {
    id,
    name,
    attributeType,
    attributeValue,
  };
}

function prepareFunctionOrExceptionProps(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  id: string,
  githubSourceLink: string,
): componentProps {
  const props = {
    id,
    signature: $child.html()!,
    githubSourceLink,
  };

  const pageHeading = $dl.siblings("h1").text();
  if (id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to apiType; no heading needed
    return props;
  }

  return {
    ...props,
    name: id.split(".").slice(-1)[0],
  };
}

// ------------------------------------------------------------------
// Generate MDX components
// ------------------------------------------------------------------

export async function generateMdxComponent(
  apiType: ApiType,
  props: componentProps,
): Promise<string> {
  const type = props.attributeType
    ? props.attributeType.replaceAll("'", "&#x27;")
    : undefined;
  const value = props.attributeValue
    ? props.attributeValue.replaceAll("'", "&#x27;")
    : undefined;
  const signature = await htmlSignatureToMd(props.signature!);
  const extraSignatures: string[] = [];
  for (const sig of props.extraSignatures ?? []) {
    extraSignatures.push(`&#x27;${await htmlSignatureToMd(sig!)}&#x27;`);
  }

  return `<${apiType} 
    id='${props.id}'
    name='${props.name}'
    attributeType='${type}'
    attributeValue='${value}'
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
): string {
  const originalLink = $child.find(".viewcode-link").closest("a");
  if (originalLink.length === 0) {
    return "";
  }
  const href = originalLink.attr("href")!;
  originalLink.first().remove();
  return !isMethod || href.includes(".py#") ? href : "";
}

/**
 * Find the element that both matches the `selector` and whose content is the same as `text`
 */
function findByText(
  $: CheerioAPI,
  $main: Cheerio<any>,
  selector: string,
  text: string,
): Cheerio<any> {
  return $main.find(selector).filter((i, el) => $(el).text().trim() === text);
}

export function mergeProps(
  componentProps: componentProps,
  props: componentProps[],
): void {
  componentProps.extraSignatures = [];
  for (const prop of props) {
    if (props.length == 0 || !prop.signature) {
      continue;
    }
    componentProps.extraSignatures.push(prop.signature);
  }
}

/**
 * Converts a given HTML into markdown
 */
async function htmlSignatureToMd(signatureHtml: string): Promise<string> {
  if (!signatureHtml) {
    return "";
  }

  const html = `<span class="target" id=''/><p><code>${signatureHtml}</code></p>`;
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .process(html);

  return String(file).replaceAll("\n", "").replaceAll("'", "&#x27;");
}
