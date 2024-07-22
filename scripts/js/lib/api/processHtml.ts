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

import { CheerioAPI, Cheerio, load, Element } from "cheerio";

import { Image } from "./HtmlToMdResult";
import { Metadata, ApiType } from "./Metadata";
import { processMdxComponent } from "./generateApiComponents";

export type ProcessedHtml = {
  html: string;
  meta: Metadata;
  images: Image[];
  isReleaseNotes: boolean;
};

export async function processHtml(options: {
  html: string;
  fileName: string;
  imageDestination: string;
  determineGithubUrl: (fileName: string) => string;
  releaseNotesTitle: string;
}): Promise<ProcessedHtml> {
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
  await processMembersAndSetMeta($, $main, meta);
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

export async function processMembersAndSetMeta(
  $: CheerioAPI,
  $main: Cheerio<any>,
  meta: Metadata,
): Promise<void> {
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
      const [openTag, closeTag] = await processMdxComponent(
        $,
        $main,
        signatures,
        $dl,
        priorApiType,
        apiType!,
        id,
      );
      $dl.replaceWith(
        `<div>${openTag}\n${bodyElements.join("\n")}\n${closeTag}</div>`,
      );
    }
  }
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

function getApiType($dl: Cheerio<any>): ApiType | undefined {
  // Historical versions were generating properties incorrectly as methods.
  // We can fix this by looking at the modifier before the signature.
  // See https://github.com/Qiskit/documentation/issues/1352 for more information.
  if (hasPropertyModifier($dl)) {
    return "property";
  }

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

function hasPropertyModifier($dl: Cheerio<any>): boolean {
  const rawModifiers = $dl.find("dt").find("em.property");
  const modifiers = rawModifiers.text().trim();
  return modifiers == "property";
}
