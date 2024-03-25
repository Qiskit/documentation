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

import { CheerioAPI, Cheerio } from "cheerio";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

import { APOSTROPHE_HEX_CODE } from "../stringUtils";

export type ComponentProps = {
  id: string;
  name?: string;
  attributeTypeHint?: string;
  attributeValue?: string;
  githubSourceLink?: string;
  rawSignature?: string;
  extraRawSignatures?: string[];
};

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
    extraSignatures.push(
      `${APOSTROPHE_HEX_CODE}${await htmlSignatureToMd(
        sig!,
      )}${APOSTROPHE_HEX_CODE}`,
    );
  }

  return `<${tagName} 
    id='${props.id}'
    name='${props.name}'
    attributeTypeHint='${attributeTypeHint}'
    attributeValue='${attributeValue}'
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
    .replace(/^`/, "")
    .replace(/`$/, "");
}
