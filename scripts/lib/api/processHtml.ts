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

import { CheerioAPI, Cheerio, load } from "cheerio";

import { Image } from "./HtmlToMdResult";
import { Metadata, ApiType } from "./Metadata";
import { getLastPartFromFullIdentifier } from "../stringUtils";

export type ProcessedHtml = {
  html: string;
  meta: Metadata;
  images: Image[];
  isReleaseNotes: boolean;
};

export function processHtml(options: {
  html: string;
  fileName: string;
  imageDestination: string;
  determineGithubUrl: (fileName: string) => string;
  releaseNotesTitle: string;
}): ProcessedHtml {
  const {
    html,
    fileName,
    imageDestination,
    determineGithubUrl,
    releaseNotesTitle,
  } = options;
  const $ = load(html);
  const $main = $(`[role='main']`);

  const isReleaseNotes = fileName.endsWith("release_notes.html");
  const images = loadImages($, $main, imageDestination, isReleaseNotes);
  if (isReleaseNotes) {
    renameAllH1s($, releaseNotesTitle);
  }

  // Warning: the sequence of operations often matters.
  removeHtmlExtensionsInRelativeLinks($, $main);
  removePermalinks($main);
  removeDownloadSourceCode($main);
  removeMatplotlibFigCaptions($main);
  handleSphinxDesignCards($, $main);
  addLanguageClassToCodeBlocks($, $main);
  replaceViewcodeLinksWithGitHub($, $main, determineGithubUrl);
  convertRubricsToHeaders($, $main);
  processSimpleFieldLists($, $main);
  removeColonSpans($main);
  preserveMathBlockWhitespace($, $main);

  const meta: Metadata = {};
  processMembersAndSetMeta($, $main, meta);
  maybeSetModuleMetadata($, $main, meta);
  if (meta.apiType === "module") {
    updateModuleHeadings($, $main, meta);
  }
  return { html: $main.html()!, meta, images, isReleaseNotes };
}

export function loadImages(
  $: CheerioAPI,
  $main: Cheerio<any>,
  imageDestination: string,
  isReleaseNotes: boolean,
): Image[] {
  return $main
    .find("img")
    .toArray()
    .filter((img) => $(img).attr("src"))
    .map((img) => {
      const $img = $(img);

      const fileName = $img.attr("src")!.split("/").pop()!;

      let dest = `${imageDestination}/${fileName}`;
      if (isReleaseNotes) {
        // Release notes links should point to the current version
        dest = dest.replace(/[0-9].*\//, "");
      }

      $img.attr("src", dest);
      return { fileName, dest };
    });
}

export function removeHtmlExtensionsInRelativeLinks(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  $main.find("a").each((_, link) => {
    const $link = $(link);
    const href = $link.attr("href");
    if (href && !href.startsWith("http")) {
      $link.attr("href", href.replaceAll(".html", ""));
    }
  });
}

export function renameAllH1s($: CheerioAPI, releaseNotesTitle: string): void {
  $("h1").html(releaseNotesTitle);
}

export function removePermalinks($main: Cheerio<any>): void {
  for (const [prefix, suffix] of [
    ["Permalink", "headline"],
    ["Permalink", "heading"],
    ["Permalink", "definition"],
    ["Link", "heading"],
    ["Link", "definition"],
  ]) {
    $main.find(`a[title="${prefix} to this ${suffix}"]`).remove();
  }
}

export function removeDownloadSourceCode($main: Cheerio<any>): void {
  $main.find("p > a.reference.download.internal").closest("p").remove();
}

export function removeMatplotlibFigCaptions($main: Cheerio<any>): void {
  $main
    .find("figcaption, div.figure p.caption")
    .has("span.caption-text a.download.internal.reference")
    .remove();
}

/**
 * Flattens out sphinx-design cards, which are collapsible normally.
 *
 * Sets the card summary as a header and removes the blockquote from the body.
 *
 * This is only used by the historical API docs for qiskit-ibm-runtime. We disabled sphinx-design
 * for every project moving forward.
 */
export function handleSphinxDesignCards(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  $main.find(".sd-summary-title").each((_, quote) => {
    const $quote = $(quote);
    $quote.replaceWith(`<h3>${$quote.html()}</h3>`);
  });

  $main.find(".sd-card-body blockquote").each((_, quote) => {
    const $quote = $(quote);
    $quote.replaceWith($quote.children());
  });
}

export function addLanguageClassToCodeBlocks(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  $main.find("pre").each((_, pre) => {
    const $pre = $(pre);
    $pre.replaceWith(
      `<pre><code class="language-python">${$pre.html()}</code></pre>`,
    );
  });
}

/**
 * Redirect URLS from `sphinx.ext.viewcode` to instead go to GitHub.
 *
 * These URLs will only go to the overall source code file, not the specific lines
 * of code. This function only changes the URLs; the DOM still needs to be modified
 * to remove the original `[source]` anchor element from Sphinx with our own `GitHub`
 * anchor element in the correct location.
 *
 * This does not impact links from `sphinx.ext.linkcode`.
 */
export function replaceViewcodeLinksWithGitHub(
  $: CheerioAPI,
  $main: Cheerio<any>,
  determineGithubUrl: (fileName: string) => string,
): void {
  $main.find("a").each((_, a) => {
    const $a = $(a);
    const href = $a.attr("href");
    if (
      href === undefined ||
      href.startsWith("http:") ||
      !href.includes("_modules/")
    ) {
      return;
    }
    // E.g. `qiskit_ibm_runtime/ibm_backend`
    const fullFileName = href.match(/_modules\/(.*?)(#|$)/)![1];
    $a.attr("href", determineGithubUrl(fullFileName));
  });
}

export function convertRubricsToHeaders(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  // A rubric is "a paragraph heading that is not used to create a table
  // of contents node". Depending on the heading, this should be either <h2> or
  // <strong>
  function appropriateHtmlTag(html: string | null) {
    html = String(html);
    return html == "Methods" ||
      html == "Methods Defined Here" ||
      html == "Attributes"
      ? "h2"
      : "strong";
  }

  $main.find(".rubric").each((_, el) => {
    const $el = $(el);
    const tag = appropriateHtmlTag($el.html());
    $el.replaceWith(`<${tag}>${$el.html()}</${tag}>`);
  });
}

export function processSimpleFieldLists(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  // TODO(#479): Have a better understanding of what dl.field-list.simple corresponds to
  //   and confirm this behavior makes sense.
  $main
    .find("dl.field-list.simple")
    .toArray()
    .map((dl) => {
      const $dl = $(dl);

      $dl
        .find("dt")
        .toArray()
        .forEach((dt) => {
          const $dt = $(dt);
          $dt.replaceWith(`<strong>${$dt.html()}</strong>`);
        });

      $dl
        .find("dd")
        .toArray()
        .forEach((dd) => {
          const $dd = $(dd);
          $dd.replaceWith(`<div>${$dd.html()}</div>`);
        });

      $dl.replaceWith(`<div>${$dl.html()}</div>`);
    });
}

export function removeColonSpans($main: Cheerio<any>): void {
  $main.find(".colon").remove();
}

export function processMembersAndSetMeta(
  $: CheerioAPI,
  $main: Cheerio<any>,
  meta: Metadata,
): void {
  let continueMapMembers = true;
  while (continueMapMembers) {
    // members can be recursive, so we need to pick elements one by one
    const dl = $main
      .find(
        "dl.py.class, dl.py.property, dl.py.method, dl.py.attribute, dl.py.function, dl.py.exception",
      )
      .get(0);

    if (!dl) {
      continueMapMembers = false;
      continue;
    }

    const $dl = $(dl);
    const id = $dl.find("dt").attr("id") || "";
    const apiType = getApiType($dl);
    const priorApiType = meta.apiType;

    if (!priorApiType) {
      meta.apiType = apiType;
      meta.apiName = id;
    }

    const replacement = $dl
      .children()
      .toArray()
      .map((child) => {
        const $child = $(child);
        if (child.name !== "dt" || !apiType) {
          return `<div>${$child.html()}</div>`;
        }
        return processMember($, $main, $child, $dl, priorApiType, apiType, id);
      })
      .join("\n");

    $dl.replaceWith(`<div>${replacement}</div>`);
  }
}

function processMember(
  $: CheerioAPI,
  $main: Cheerio<any>,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  apiType: string,
  id: string,
) {
  const githubSourceLink = prepareGitHubLink($child, apiType === "method");

  findByText($, $main, "em.property", apiType).remove();

  if (apiType == "class") {
    return `<span class="target" id="${id}"/><p><code>${$child.html()}</code>${githubSourceLink}</p>`;
  }

  if (apiType == "property") {
    return processProperty($child, $dl, priorApiType, id, githubSourceLink);
  }

  if (apiType == "method") {
    return processMethod($, $child, $dl, priorApiType, id, githubSourceLink);
  }

  if (apiType == "attribute") {
    return processAttribute($child, $dl, priorApiType, id, githubSourceLink);
  }

  if (apiType === "function" || apiType === "exception") {
    return processFunctionOrException($child, $dl, id, githubSourceLink);
  }

  throw new Error(`Unhandled Python type: ${apiType}`);
}

function processProperty(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  id: string,
  githubSourceLink: string,
) {
  if (!priorApiType && id) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
  }

  const signature = $child.find("em").text()?.replace(/^:\s+/, "");
  if (signature.trim().length === 0) return;
  return `<span class="target" id='${id}'/><p><code>${signature}</code>${githubSourceLink}</p>`;
}

function processMethod(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  id: string,
  githubSourceLink: string,
) {
  if (id) {
    if (!priorApiType) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    } else if (!$child.attr("id")) {
      // Overload methods have more than one <dt> tag, but only the first one
      // contains an id.
      return `<p><code>${$child.html()}</code>${githubSourceLink}</p>`;
    } else {
      // Inline methods
      $(`<h3>${getLastPartFromFullIdentifier(id)}</h3>`).insertBefore($dl);
    }
  }

  return `<span class="target" id='${id}'/><p><code>${$child.html()}</code>${githubSourceLink}</p>`;
}

function processAttribute(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  id: string,
  githubSourceLink: string,
) {
  if (!priorApiType) {
    if (id) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    }

    const signature = $child.find("em").text()?.replace(/^:\s+/, "");
    if (signature.trim().length === 0) return;
    return `<span class="target" id='${id}'/><p><code>${signature}</code>${githubSourceLink}</p>`;
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
  const type = text
    .slice(Math.min(colonIndex + 1, equalIndex), equalIndex)
    .trim();
  const value = text.slice(equalIndex, text.length).trim();

  const output = [`<span class="target" id='${id}'/><h3>${name}</h3>`];
  if (type) {
    output.push(`<p><code>${type}</code></p>`);
  }
  if (value) {
    output.push(`<p><code>${value}</code></p>`);
  }
  return output.join("\n");
}

function processFunctionOrException(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  id: string,
  githubSourceLink: string,
) {
  const descriptionHtml = `<span class="target" id="${id}"/><p><code>${$child.html()}</code>${githubSourceLink}</p>`;

  const pageHeading = $dl.siblings("h1").text();
  if (id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to apiType; no heading needed
    return descriptionHtml;
  }

  const apiName = id.split(".").slice(-1)[0];
  return `<h3>${apiName}</h3>${descriptionHtml}`;
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
  return !isMethod || href.includes(".py#")
    ? ` <a href="${href}" title="view source code">GitHub</a>`
    : "";
}

export function maybeSetModuleMetadata(
  $: CheerioAPI,
  $main: Cheerio<any>,
  meta: Metadata,
): void {
  const modulePrefix = "module-";
  const moduleIdWithPrefix = $main
    .find("span, section, div.section")
    .toArray()
    .map((el) => $(el).attr("id"))
    .find((id) => id?.startsWith(modulePrefix));
  if (moduleIdWithPrefix) {
    meta.apiType = "module";
    meta.apiName = moduleIdWithPrefix.slice(modulePrefix.length);
  }
}

export function preserveMathBlockWhitespace(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  $main
    .find("div.math")
    .toArray()
    .map((el) => {
      const $el = $(el);
      $el.replaceWith(`<pre class="math">${$el.html()}</pre>`);
    });
}

export function updateModuleHeadings(
  $: CheerioAPI,
  $main: Cheerio<any>,
  meta: Metadata,
): void {
  $main
    .find("h1,h2")
    .toArray()
    .forEach((el) => {
      const $el = $(el);
      const $a = $($el.find("a"));
      const signature = $a.text();
      $a.remove();

      let title = $el.text();
      title = title.replace("()", "");
      let replacement = `<${el.tagName}>${title}</${el.tagName}>`;
      if (signature.trim().length > 0) {
        replacement += `<span class="target" id="module-${meta.apiName}" /><p><code>${signature}</code></p>`;
      }
      $el.replaceWith(replacement);
    });
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

function getApiType($dl: Cheerio<any>): ApiType | undefined {
  for (const className of [
    "function",
    "class",
    "exception",
    "method",
    "property",
    "attribute",
    "module",
  ]) {
    if ($dl.hasClass(className)) {
      return className as ApiType;
    }
  }

  return undefined;
}
