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

import { last } from "lodash";
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
  url: string;
  imageDestination: string;
  baseGitHubUrl: string;
  releaseNotesTitle: string;
}): ProcessedHtml {
  const { html, url, imageDestination, baseGitHubUrl, releaseNotesTitle } =
    options;
  const $ = load(html);
  const $main = $(`[role='main']`);

  const isReleaseNotes = url.endsWith("release_notes.html");
  const images = loadImages($, $main, url, imageDestination, isReleaseNotes);
  if (url.endsWith("release_notes.html")) {
    renameAllH1s($, releaseNotesTitle);
  }

  // Warning: the sequence of operations often matters.
  removeHtmlExtensionsInRelativeLinks($, $main);
  removePermalinks($main);
  removeDownloadSourceCode($main);
  handleSphinxDesignCards($, $main);
  addLanguageClassToCodeBlocks($, $main);
  replaceViewcodeLinksWithGitHub($, $main, baseGitHubUrl);
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
  url: string,
  imageDestination: string,
  isReleaseNotes: boolean,
): Image[] {
  return $main
    .find("img")
    .toArray()
    .map((img) => {
      const $img = $(img);

      const imageUrl = new URL($img.attr("src")!, url);
      const src = imageUrl.toString();

      const filename = last(src.split("/"));
      let dest = `${imageDestination}/${filename}`;
      if (isReleaseNotes) {
        // Release notes links should point to the current version
        dest = dest.replace(/[0-9].*\//, "");
      }

      $img.attr("src", dest);
      return { src, dest: dest };
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
 * Redirect URLS from sphinx.ext.viewcode to instead go to GitHub.
 *
 * These URLs will only go to the overall source code file, not the specific lines
 * of code. This function only changes the URLs; the DOM still needs to be modified
 * to remove the original `[source]` anchor element from Sphinx with our own `GitHub`
 * anchor element in the correct location.
 */
export function replaceViewcodeLinksWithGitHub(
  $: CheerioAPI,
  $main: Cheerio<any>,
  baseGitHubUrl: string,
): void {
  // Certain files do not map 1:1 between sphinx.ext.viewcode and GitHub.
  // When adding new entries, add a dedicated test case!
  const specialCases = new Map([
    ["qiskit_ibm_provider", "qiskit_ibm_provider/__init__"],
    ["qiskit/qasm2", "qiskit/qasm2/__init__"],
    ["qiskit/qasm3", "qiskit/qasm3/__init__"],
    [
      "qiskit/transpiler/preset_passmanagers",
      "qiskit/transpiler/preset_passmanagers/__init__",
    ],
  ]);
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
    let fullFileName = href.match(/_modules\/(.*?)(#|$)/)![1];
    if (specialCases.has(fullFileName)) {
      fullFileName = specialCases.get(fullFileName)!;
    }
    const newHref = `${baseGitHubUrl}${fullFileName}.py`;
    $a.attr("href", newHref);
  });
}

export function convertRubricsToHeaders(
  $: CheerioAPI,
  $main: Cheerio<any>,
): void {
  // Rubrics correspond to method and attribute headers.
  // TODO(#479): ensure our understanding of what .rubric corresponds to is correct and figure out
  //  if always using <h2> makes sense.
  $main.find(".rubric").each((_, el) => {
    const $el = $(el);
    $el.replaceWith(`<h2>${$el.html()}</h2>`);
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
    const replacement = $dl
      .children()
      .toArray()
      .map((child) => {
        const $child = $(child);
        const id = $dl.find("dt").attr("id") || "";
        const github = prepareGitHubLink($, $child);

        const apiType = getApiType($dl);

        if (child.name !== "dt" || !apiType) {
          return `<div>${$child.html()}</div>`;
        }

        const priorApiType = meta.apiType;
        if (!priorApiType) {
          meta.apiType = apiType;
          meta.apiName = id;
        }

        if (apiType == "class") {
          findByText($, $main, "em.property", "class").remove();
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code>${github}</p>`;
        }

        if (apiType == "property") {
          if (!priorApiType && id) {
            $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
          }

          findByText($, $main, "em.property", "property").remove();
          const signature = $child.find("em").text()?.replace(/^:\s+/, "");
          if (signature.trim().length === 0) return;
          return `<span class="target" id='${id}'/><p><code>${signature}</code>${github}</p>`;
        }

        if (apiType == "method") {
          if (id) {
            if (!priorApiType) {
              $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
            } else {
              // Inline methods
              $(`<h3>${getLastPartFromFullIdentifier(id)}</h3>`).insertBefore(
                $dl,
              );
            }
          }

          findByText($, $main, "em.property", "method").remove();
          return `<span class="target" id='${id}'/><p><code>${$child.html()}</code>${github}</p>`;
        }

        if (apiType == "attribute") {
          if (!priorApiType) {
            if (id) {
              $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
            }

            findByText($, $main, "em.property", "attribute").remove();
            const signature = $child.find("em").text()?.replace(/^:\s+/, "");
            if (signature.trim().length === 0) return;
            return `<span class="target" id='${id}'/><p><code>${signature}</code>${github}</p>`;
          }

          // Else, the attribute is embedded on the class
          const text = $child.text();
          const equalIndex = text.indexOf("=");
          const colonIndex = text.indexOf(":");
          let name = text;
          let type: string | undefined;
          let value: string | undefined;
          if (colonIndex > 0 && equalIndex > 0) {
            name = text.substring(0, colonIndex);
            type = text.substring(colonIndex + 1, equalIndex);
            value = text.substring(equalIndex);
          } else if (colonIndex > 0) {
            name = text.substring(0, colonIndex);
            type = text.substring(colonIndex + 1);
          } else if (equalIndex > 0) {
            name = text.substring(0, equalIndex);
            value = text.substring(equalIndex);
          }
          const output = [`<span class="target" id='${id}'/><h3>${name}</h3>`];
          if (type) {
            output.push(`<p><code>${type}</code></p>`);
          }
          if (value) {
            output.push(`<p><code>${value}</code></p>`);
          }
          return output.join("\n");
        }

        if (apiType === "function") {
          findByText($, $main, "em.property", "function").remove();
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code>${github}</p>`;
        }

        if (apiType === "exception") {
          findByText($, $main, "em.property", "exception").remove();
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code>${github}</p>`;
        }

        throw new Error(`Unhandled Python type: ${apiType}`);
      })
      .join("\n");

    $dl.replaceWith(`<div>${replacement}</div>`);
  }
}

/**
 * Removes the original link from sphinx.ext.viewcode and returns the HTML string for our own link.
 *
 * This returns the HTML string, rather than directly inserting into the HTML, because the insertion
 * logic is most easily handled by the calling code.
 */
export function prepareGitHubLink($: CheerioAPI, $child: Cheerio<any>): string {
  const originalLink = $child.find(".viewcode-link").closest("a");
  if (originalLink.length === 0) {
    return "";
  }
  const href = originalLink.attr("href")!;
  originalLink.remove();
  return `<a href="${href}" title="view source code">GitHub</a>`;
}

export function maybeSetModuleMetadata(
  $: CheerioAPI,
  $main: Cheerio<any>,
  meta: Metadata,
): void {
  const modulePrefix = "module-";
  const moduleIdWithPrefix = $main
    .find("span, section")
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
