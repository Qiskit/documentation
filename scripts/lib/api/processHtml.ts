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
  baseSourceUrl: string;
  releaseNotesTitle: string;
}): ProcessedHtml {
  const { html, url, imageDestination, baseSourceUrl, releaseNotesTitle } =
    options;
  const $ = load(html);
  const $main = $(`[role='main']`);

  const isReleaseNotes = url.endsWith("release_notes.html");
  const images = loadImages($, $main, url, imageDestination, isReleaseNotes);
  if (url.endsWith("release_notes.html")) {
    setReleaseNotesHeading($, releaseNotesTitle);
  }

  // Warning: the sequence of operations often matters.
  removeHtmlExtensionsInRelativeLinks($, $main);
  removePermalinks($main);
  removeDownloadSourceCode($main);
  handleTabs($, $main);
  addLanguageClassToCodeBlocks($, $main);
  replaceSourceLinksWithGitHub($, $main, baseSourceUrl);
  convertRubricsToHeaders($, $main);
  processSimpleFieldLists($, $main);
  removeColons($main);
  preserveMathBlockWhitespace($, $main);

  const meta: Metadata = {};
  processMembersAndSetMeta($, $main, meta);
  maybeExtractAndSetModuleMetadata($, $main, meta);
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
  const images: Image[] = [];
  $main
    .find("img")
    .toArray()
    .forEach((img) => {
      const $img = $(img);

      const imageUrl = new URL($img.attr("src")!, url);
      const src = imageUrl.toString();

      const filename = last(src.split("/"));
      const dest = `${imageDestination}/${filename}`;

      $img.attr("src", dest);

      if (isReleaseNotes) {
        // Release notes links should point to the current version
        $img.attr("src", dest.replace(/[0-9].*\//, ""));
      }

      images.push({ src, dest: dest });
    });

  return images;
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

export function setReleaseNotesHeading(
  $: CheerioAPI,
  releaseNotesTitle: string,
): void {
  $("h1").html(releaseNotesTitle);
}

export function removePermalinks($main: Cheerio<any>): void {
  $main.find('a[title="Permalink to this headline"]').remove();
  $main.find('a[title="Permalink to this heading"]').remove();
  $main.find('a[title="Permalink to this definition"]').remove();
  $main.find('a[title="Link to this heading"]').remove();
  $main.find('a[title="Link to this definition"]').remove();
}

export function removeDownloadSourceCode($main: Cheerio<any>): void {
  $main.find("p > a.reference.download.internal").closest("p").remove();
}

/**
 * Convert sphinx-design tabs.
 *
 * Uses the heading for the summary and removes the blockquote.
 */
export function handleTabs($: CheerioAPI, $main: Cheerio<any>): void {
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

// TODO(#519): figure out if this is working.
export function replaceSourceLinksWithGitHub(
  $: CheerioAPI,
  $main: Cheerio<any>,
  baseSourceUrl: string,
): void {
  $main.find("a").each((_, a) => {
    const $a = $(a);
    const href = $a.attr("href");
    if (href?.startsWith("http:")) return;
    if (href?.includes(`/_modules/`)) {
      //_modules/qiskit_ibm_runtime/ibm_backend
      const match = href?.match(/_modules\/(.*?)(#|$)/);
      if (match) {
        const newHref = `${baseSourceUrl}${match[1]}.py`;
        $a.attr("href", newHref);
      }
    }
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

export function removeColons($main: Cheerio<any>): void {
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
        $child.find(".viewcode-link").closest("a").remove();
        const id = $dl.find("dt").attr("id") || "";

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
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code></p>`;
        }

        if (apiType == "property") {
          if (!priorApiType && id) {
            $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
          }

          findByText($, $main, "em.property", "property").remove();
          const signature = $child.find("em").text()?.replace(/^:\s+/, "");
          if (signature.trim().length === 0) return;
          return `<span class="target" id='${id}'/><p><code>${signature}</code></p>`;
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
          return `<span class="target" id='${id}'/><p><code>${$child.html()}</code></p>`;
        }

        if (apiType == "attribute") {
          if (!priorApiType) {
            if (id) {
              $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
            }

            findByText($, $main, "em.property", "attribute").remove();
            const signature = $child.find("em").text()?.replace(/^:\s+/, "");
            if (signature.trim().length === 0) return;
            return `<span class="target" id='${id}'/><p><code>${signature}</code></p>`;
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
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code></p>`;
        }

        if (apiType === "exception") {
          findByText($, $main, "em.property", "exception").remove();
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code></p>`;
        }

        throw new Error(`Unhandled Python type: ${apiType}`);
      })
      .join("\n");

    $dl.replaceWith(`<div>${replacement}</div>`);
  }
}

export function maybeExtractAndSetModuleMetadata(
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
