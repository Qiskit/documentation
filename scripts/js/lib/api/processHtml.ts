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

import path from "node:path";

import { CheerioAPI, Cheerio, load, Element } from "cheerio";
import { escapeRegExp } from "lodash-es";

import { Image } from "./HtmlToMdResult.js";
import { Metadata, ApiObjectName, API_OBJECTS } from "./Metadata.js";
import { createMdxComponent } from "./generateApiComponents.js";
import { externalRedirects } from "../../../config/external-redirects.js";

export type ProcessedHtml = {
  html: string;
  meta: Metadata;
  images: Image[];
  isReleaseNotes: boolean;
};

interface ProcessHtmlOptions {
  html: string;
  fileName: string;
  imageDestination: string;
  determineGithubUrl: (fileName: string) => string;
  releaseNotesTitle: string;
  hasSeparateReleaseNotes: boolean;
  isCApi: boolean;
}

export async function processHtml(
  options: ProcessHtmlOptions,
): Promise<ProcessedHtml> {
  const {
    html,
    fileName,
    imageDestination,
    determineGithubUrl,
    releaseNotesTitle,
    hasSeparateReleaseNotes,
  } = options;
  const $ = load(html);
  const $main = $(`[role='main']`);

  const isReleaseNotes =
    fileName.endsWith("release_notes.html") ||
    fileName.endsWith("release-notes.html");
  const isIndex = fileName.endsWith("index.html");
  const images = loadImages(
    $,
    $main,
    imageDestination,
    isReleaseNotes,
    hasSeparateReleaseNotes,
  );
  if (isReleaseNotes) {
    renameAllH1s($, releaseNotesTitle);
  }

  // Warning: the sequence of operations often matters.
  removeHtmlExtensionsInRelativeLinks($, $main);
  removePermalinks($main);
  removeDownloadSourceCode($main);
  removePublicMembersRubric($main);
  removeMatplotlibFigCaptions($main);
  handleSphinxDesignCards($, $main);
  addLanguageClassToCodeBlocks($, $main, options);
  replaceViewcodeLinksWithGitHub($, $main, determineGithubUrl);
  updateRedirectedExternalLinks($, $main, externalRedirects);
  convertRubricsToHeaders($, $main);
  processSimpleFieldLists($, $main);
  removeColonSpans($main);
  handleFootnotes($, $main);
  preserveMathBlockWhitespace($, $main);

  const meta: Metadata = {};
  await processMembersAndSetMeta($, $main, meta, options);
  if (options.isCApi) maybeSetCMetadata($main, meta, isReleaseNotes, isIndex);
  else maybeSetPythonModuleMetadata($, $main, meta);

  if (meta.apiType === "module") {
    updateModuleHeadings($, $main);
  }
  return { html: $main.html()!, meta, images, isReleaseNotes };
}

export function loadImages(
  $: CheerioAPI,
  $main: Cheerio<any>,
  imageDestination: string,
  isReleaseNotes: boolean,
  hasSeparateReleaseNotes: boolean,
): Image[] {
  return $main
    .find("img")
    .toArray()
    .filter((img) => $(img).attr("src"))
    .map((img) => {
      const $img = $(img);

      const fileName = $img.attr("src")!.split("/").pop()!;
      const fileExtension = path.extname(fileName);

      // We convert PNG and JPG to AVIF for reduced file size. The image-copying
      // logic detects changed extensions and converts the files.
      let dest = [".png", ".jpg", ".jpeg"].includes(fileExtension)
        ? `${imageDestination}/${path.basename(fileName, fileExtension)}.avif`
        : `${imageDestination}/${fileName}`;

      if (isReleaseNotes && !hasSeparateReleaseNotes) {
        // If the Pkg only has a single release notes file for all versions,
        // then the images should point to the current version.
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

/**
 * This is because the rubric appears to have the same level at the fields
 * themselves. We decided the best solution to avoid a confusing information
 * hierarcy is to remove the rubric.
 *
 * A better solution is to implement https://github.com/Qiskit/documentation/issues/1395.
 * Once implemented, we should rename "Public members" to "Fields" as C does not
 * have methods and all fields are public (breathe is more targeted towards C++).
 */
function removePublicMembersRubric($main: Cheerio<any>): void {
  $main
    .find("p.breathe-sectiondef-title.rubric")
    .filter((i, el) => load(el).text() === "Public members")
    .remove();
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

function detectLanguage(
  $pre: Cheerio<any>,
  options: { isCApi: boolean },
): string | null {
  const defaultLanguage = options.isCApi ? "c" : "python";
  // Two levels up from `pre` should have class `highlight-<language>`
  const detectedLanguage = $pre
    .parent()
    .parent()[0]
    .attribs.class.match(/(?<=highlight-)\w+/);
  if (!detectedLanguage) return defaultLanguage;
  const langName = detectedLanguage[0];
  if (langName === "none") return null;
  if (langName === "default") return defaultLanguage;
  if (langName === "ipython3") return "python";
  return langName;
}

export function addLanguageClassToCodeBlocks(
  $: CheerioAPI,
  $main: Cheerio<any>,
  options: { isCApi: boolean },
): void {
  $main.find("pre").each((_, pre) => {
    const $pre = $(pre);
    const language = detectLanguage($pre, options);
    const languageClass = language ? `language-${language}` : "";
    $pre.replaceWith(
      `<pre><code class="${languageClass}">${$pre.html()}</code></pre>`,
    );
  });
}

export function updateRedirectedExternalLinks(
  $: CheerioAPI,
  $main: Cheerio<any>,
  redirects: { [old: string]: string },
): void {
  $main.find("a").each((_, a) => {
    const $a = $(a);
    const href = $a.attr("href");
    const replacement = href && redirects[href];
    if (replacement) {
      $a.attr("href", replacement);
      const regexp = new RegExp(`${escapeRegExp(href)}(?=$|[\\s<'"])`, "g");
      $a.text($a.text().replaceAll(regexp, replacement));
    }
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
    const id = $el.attr("id");
    const span = id ? `<span id="${id}" class="target"></span>` : "";
    $el.replaceWith(`${span}<${tag}>${$el.html()}</${tag}>`);
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

export function handleFootnotes($: CheerioAPI, $main: Cheerio<any>): void {
  $main
    .find(".footnote, .footnote-reference, .footnote dt.label")
    .toArray()
    .forEach((footnote) => {
      const $footnote = $(footnote);
      const id = $footnote.attr("id");
      if (id) {
        $footnote.before(`<span id="${id}" class="target"></span>`);
      }
    });
}

export async function processMembersAndSetMeta(
  $: CheerioAPI,
  $main: Cheerio<any>,
  meta: Metadata,
  options: { isCApi: boolean },
): Promise<void> {
  let continueMapMembers = true;
  while (continueMapMembers) {
    // members can be recursive, so we need to pick elements one by one
    const dl = $main
      .find(
        Object.values(API_OBJECTS)
          .map((x) => x.htmlSelector)
          .join(", "),
      )
      // Components inside tables will not work properly. This happened with `dl.py.data` in /api/qiskit/utils.
      .not("td > dl")
      .get(0);

    if (!dl) {
      continueMapMembers = false;
      continue;
    }

    const $dl = $(dl);
    const id =
      (options.isCApi
        ? // IDs in the C API have a bunch of extra information (e.g.
          // `_CPPv415qk_obs_free8uint32_t`) whereas we just want to display the
          // function name (e.g. `qk_obs_free`). This is safe because C does not
          // have function overloading so the function name is unique.
          $dl.find("span.sig-name.descname").first().text()
        : $dl.find("dt").attr("id")) || "";
    const apiType = getApiType($dl);

    if (!apiType) {
      throw new Error(`Could not determine apiType for '${$dl}'`);
    }

    const priorApiType = meta.apiType;
    if (!priorApiType) {
      meta.apiType = apiType;
      meta.apiName = id;
    }

    const bodyElements: string[] = [];
    const signatures: Cheerio<Element>[] = [];

    for (const child of $dl.children().toArray()) {
      const $child = $(child);
      if (child.name !== "dt" || !apiType) {
        bodyElements.push(`<div>${$child.html()}</div>`);
        continue;
      }
      signatures.push($child);
    }

    if (signatures.length == 0) {
      $dl.replaceWith(`<div>${bodyElements.join("\n")}</div>`);
    } else {
      const mdxComponent = await createMdxComponent(
        $,
        signatures,
        $dl,
        bodyElements,
        priorApiType,
        apiType,
        id,
        options,
      );
      $dl.replaceWith(`<div>${mdxComponent}</div>`);
    }
  }
}

function maybeSetCMetadata(
  $main: Cheerio<any>,
  meta: Metadata,
  isReleaseNotes: boolean,
  isIndex: boolean,
): void {
  // Every page in the C API should be displayed as a module except the index
  // and the release notes.
  if (isIndex || isReleaseNotes) return;
  const topHeadingText = $main.find("h1").first().text();
  meta.apiType = "module";
  meta.apiName = topHeadingText;
}

export function maybeSetPythonModuleMetadata(
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

export function updateModuleHeadings($: CheerioAPI, $main: Cheerio<any>): void {
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
        replacement += `<p><code>${signature}</code></p>`;
      }
      $el.replaceWith(replacement);
    });
}

function getApiType($dl: Cheerio<any>): ApiObjectName | undefined {
  // Historical versions were generating properties incorrectly as methods.
  // We can fix this by looking at the modifier before the signature.
  // See https://github.com/Qiskit/documentation/issues/1352 for more information.
  if (hasPropertyModifier($dl)) {
    return "property";
  }

  for (const [apiTypeName, apiType] of Object.entries(API_OBJECTS)) {
    const className = apiType.htmlSelector.split(".").pop();
    if (!className)
      throw new Error(
        `'htmlSelector' attribute must be of form '<tag>.<lang>.<apiType>' (e.g. 'dl.py.function'), found '${apiType}'.`,
      );
    if ($dl.hasClass(className)) return apiTypeName as ApiObjectName;
  }

  return undefined;
}

function hasPropertyModifier($dl: Cheerio<any>): boolean {
  const rawModifiers = $dl.find("dt").find("em.property");
  const modifiers = rawModifiers.text().trim();
  return modifiers == "property";
}
