// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { load } from "cheerio";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import { last, first, without, initial, tail } from "lodash";
import { defaultHandlers, Handle, toMdast, all } from "hast-util-to-mdast";
import { toText } from "hast-util-to-text";
import remarkMath from "remark-math";
import remarkMdx from "remark-mdx";
import { SphinxToMdResult } from "./SphinxToMdResult";
import { PythonObjectMeta } from "./PythonObjectMeta";
import {
  getLastPartFromFullIdentifier,
  removePrefix,
  removeSuffix,
} from "../stringUtils";
import { remarkStringifyOptions } from "./unifiedParser";
import { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";
import { Root } from "mdast";

export async function sphinxHtmlToMarkdown(options: {
  html: string;
  url: string;
  imageDestination?: string;
  // url links to a fixed version and ending in /
  // https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/
  baseSourceUrl?: string;
  releaseNotesTitle?: string;
}): Promise<SphinxToMdResult> {
  const images: Array<{ src: string; dest: string }> = [];
  const {
    html,
    url,
    imageDestination = "/images/api/",
    baseSourceUrl,
    releaseNotesTitle,
  } = options;
  const meta: PythonObjectMeta = {};
  const isReleaseNotes = url.endsWith("release_notes.html") ? true : false;

  const $page = load(html);
  const main = $page(`[role='main']`);
  const $main = $page(main);

  // remove html extensions in relative links
  $main.find("a").each((_, link) => {
    const $link = $page(link);
    const href = $link.attr("href");
    if (href && !href.startsWith("http")) {
      $link.attr("href", href.replaceAll(".html", ""));
    }
  });

  if (isReleaseNotes && releaseNotesTitle) {
    // Replace heading with custom heading
    $page("h1").html(releaseNotesTitle);
  }

  $main
    .find("img")
    .toArray()
    .forEach((el) => {
      const $img = $page(el);

      const imageUrl = new URL($img.attr("src")!, url);
      const src = imageUrl.toString();

      const filename = last(src.split("/"));
      const dest = `${imageDestination}/${filename}`;

      $img.attr("src", dest);
      images.push({ src, dest: dest });
    });

  // remove permalink links
  $main.find('a[title="Permalink to this headline"]').remove();
  $main.find('a[title="Permalink to this heading"]').remove();
  $main.find('a[title="Permalink to this definition"]').remove();
  $main.find('a[title="Link to this heading"]').remove();
  $main.find('a[title="Link to this definition"]').remove();

  // remove download source code
  $main.find("p > a.reference.download.internal").closest("p").remove();

  // handle tabs, use heading for the summary and remove the blockquote
  $main.find(".sd-summary-title").each((_, quote) => {
    const $quote = $page(quote);
    $quote.replaceWith(`<h3>${$quote.html()}</h3>`);
  });

  $main.find(".sd-card-body blockquote").each((_, quote) => {
    const $quote = $page(quote);
    $quote.replaceWith($quote.children());
  });

  // add language class to code blocks
  $main.find("pre").each((_, pre) => {
    const $pre = $page(pre);
    $pre.replaceWith(
      `<pre><code class="language-python">${$pre.html()}</code></pre>`,
    );
  });

  // replace source links
  $main.find("a").each((_, a) => {
    const $a = $page(a);
    const href = $a.attr("href");
    if (href?.startsWith("http:")) return;
    if (href?.includes(`/_modules/`)) {
      //_modules/qiskit_ibm_runtime/ibm_backend
      const match = href?.match(/_modules\/(.*?)(#|$)/);
      if (match) {
        const newHref = `${baseSourceUrl ?? ""}${match[1]}.py`;
        $a.attr("href", newHref);
      }
    }
  });

  // use titles for method and attribute headers
  $main.find(".rubric").each((_, el) => {
    const $el = $page(el);
    $el.replaceWith(`<h2>${$el.html()}</h2>`);
  });

  // delete colons
  $main.find(".colon").remove();

  // translate type headings to titles
  function findByText(selector: string, text: string) {
    return $main
      .find(selector)
      .filter((i, el) => $page(el).text().trim() === text);
  }

  $main
    .find("dl.field-list.simple")
    .toArray()
    .map((dl) => {
      const $dl = $page(dl);

      $dl
        .find("dt")
        .toArray()
        .forEach((dt) => {
          const $dt = $page(dt);
          $dt.replaceWith(`<strong>${$dt.html()}</strong>`);
        });

      $dl
        .find("dd")
        .toArray()
        .forEach((dd) => {
          const $dd = $page(dd);
          $dd.replaceWith(`<div>${$dd.html()}</div>`);
        });

      $dl.replaceWith(`<div>${$dl.html()}</div>`);
    });

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

    const $dl = $page(dl);
    const replacement = $dl
      .children()
      .toArray()
      .map((child) => {
        const $child = $page(child);
        $child.find(".viewcode-link").closest("a").remove();
        const id = $dl.find("dt.sig-object").attr("id");

        if (child.name === "dt" && $dl.hasClass("class")) {
          if (!meta.python_api_type) {
            meta.python_api_type = "class";
            meta.python_api_name = id;
          }

          findByText("em.property", "class").remove();
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code></p>`;
        } else if (child.name === "dt" && $dl.hasClass("property")) {
          if (!meta.python_api_type) {
            meta.python_api_type = "property";
            meta.python_api_name = id;

            if (id) {
              $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
            }
          }

          findByText("em.property", "property").remove();
          const signature = $child.find("em").text()?.replace(/^:\s+/, "");
          if (signature.trim().length === 0) return;
          return `<span class="target" id='${id}'/><p><code>${signature}</code></p>`;
        } else if (child.name === "dt" && $dl.hasClass("method")) {
          if (!meta.python_api_type) {
            meta.python_api_type = "method";
            meta.python_api_name = id;
            if (id) {
              $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
            }
          } else {
            // Inline methods
            if (id) {
              $page(
                `<h3>${getLastPartFromFullIdentifier(id)}</h3>`,
              ).insertBefore($dl);
            }
          }

          findByText("em.property", "method").remove();
          return `<span class="target" id='${id}'/><p><code>${$child.html()}</code></p>`;
        } else if (child.name === "dt" && $dl.hasClass("attribute")) {
          if (!meta.python_api_type) {
            meta.python_api_type = "attribute";
            meta.python_api_name = id;

            if (id) {
              $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
            }

            findByText("em.property", "attribute").remove();
            const signature = $child.find("em").text()?.replace(/^:\s+/, "");
            if (signature.trim().length === 0) return;
            return `<span class="target" id='${id}'/><p><code>${signature}</code></p>`;
          } else {
            // The attribute is embedded on the class
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
            const output = [
              `<span class="target" id='${id}'/><h3>${name}</h3>`,
            ];
            if (type) {
              output.push(`<p><code>${type}</code></p>`);
            }
            if (value) {
              output.push(`<p><code>${value}</code></p>`);
            }
            return output.join("\n");
          }
        } else if (child.name === "dt" && $dl.hasClass("function")) {
          if (!meta.python_api_type) {
            meta.python_api_type = "function";
            meta.python_api_name = id;
          }
          findByText("em.property", "function").remove();
          return `<span class="target" id="${id}"/><p><code>${$child.html()}</code></p>`;
        } else if (child.name === "dt" && $dl.hasClass("exception")) {
          if (!meta.python_api_type) {
            meta.python_api_type = "exception";
            meta.python_api_name = id;
          }

          findByText("em.property", "exception").remove();
          return `<span class="target" id='${id}'/><p><code>${$child.html()}</code></p>`;
        }

        return `<div>${$child.html()}</div>`;
      })
      .join("\n");

    $dl.replaceWith(`<div>${replacement}</div>`);
  }

  // preserve math block whitespace
  $main
    .find("div.math")
    .toArray()
    .map((el) => {
      const $el = $page(el);
      $el.replaceWith(`<pre class="math">${$el.html()}</pre>`);
    });

  // extract module metadata
  const modulePrefix = "module-";
  const moduleIdWithPrefix = $main
    .find("span, section")
    .toArray()
    .map((el) => $page(el).attr("id"))
    .find((id) => id?.startsWith(modulePrefix));
  if (moduleIdWithPrefix) {
    meta.python_api_type = "module";
    meta.python_api_name = moduleIdWithPrefix.slice(modulePrefix.length);
  }

  // Update headings of modules
  if (meta.python_api_type === "module") {
    $main
      .find("h1,h2")
      .toArray()
      .forEach((el) => {
        const $el = $page(el);
        const $a = $page($el.find("a"));
        const signature = $a.text();
        $a.remove();

        let title = $el.text();
        title = title.replace("()", "");
        let replacement = `<${el.tagName}>${title}</${el.tagName}>`;
        if (signature.trim().length > 0) {
          replacement += `<span class="target" id="module-${meta.python_api_name}" /><p><code>${signature}</code></p>`;
        }
        $el.replaceWith(replacement);
      });
  }

  // convert to markdown
  const mainHtml = main.html()!;

  const handlers: Record<string, Handle> = {
    br(h, node: any) {
      return all(h, node);
    },
    section(h, node: any) {
      if (node.properties.id) {
        return [buildSpanId(node.properties.id), ...all(h, node)];
      }
      return all(h, node);
    },
    span(h, node: any) {
      if (node.properties.className?.includes("math")) {
        let value = node.children[0].value;
        const prefix = "\\(";
        const sufix = "\\)";
        if (value.startsWith(prefix) && value.endsWith(sufix)) {
          value = value.substring(prefix.length, value.length - sufix.length);
        }
        return { type: "inlineMath", value };
      }

      if (node.properties.id && node.properties.className?.includes("target")) {
        return [buildSpanId(node.properties.id), ...all(h, node)];
      }

      if (node.properties.id && node.children.length === 0) {
        return buildSpanId(node.properties.id);
      }

      return all(h, node);
    },
    pre(h, node: any) {
      if (node.properties.className?.includes("math")) {
        let value = node.children[0].value;
        const prefix = "\\[";
        const sufix = "\\]";
        if (value.startsWith(prefix) && value.endsWith(sufix)) {
          value = value.substring(prefix.length, value.length - sufix.length);
        }
        return { type: "math", value };
      }
      return defaultHandlers.pre(h, node);
    },
    dl(h, node: any) {
      return defaultHandlers.div(h, node);
    },
    dd(h, node: any) {
      return defaultHandlers.div(h, node);
    },
    dt(h, node: any) {
      if (
        meta.python_api_type === "class" ||
        meta.python_api_type === "module"
      ) {
        return [
          h(node, "strong", {
            type: "strong",
            children: all(h, node),
          }),
          { type: "text", value: " " },
        ];
      }
      return h(node, "heading", {
        type: "heading",
        depth: 2,
        children: all(h, node),
      });
    },
    div(h, node: any): any {
      const nodeClasses = node.properties.className ?? [];

      if (nodeClasses.includes("admonition")) {
        const titleNode = node.children.find(
          (child: any) =>
            child.properties.className?.includes("admonition-title"),
        );

        let type = "note";
        if (nodeClasses.includes("warning")) {
          type = "caution";
        } else if (nodeClasses.includes("important")) {
          type = "danger";
        }

        const otherChildren = without(node.children, titleNode);
        return buildAdmonition({
          title: toText(titleNode),
          type,
          children: otherChildren.map((node: any) =>
            toMdast(node, { handlers }),
          ),
        });
      } else if (nodeClasses.includes("deprecated")) {
        const root = node.children[0];
        const titleNode = root.children.find(
          (child: any) =>
            child.properties.className?.includes("versionmodified"),
        );
        let title = toText(titleNode).trim();
        if (title.endsWith(":")) {
          title = title.slice(0, -1);
        }
        const otherChildren = without(root.children, titleNode);
        return buildAdmonition({
          title,
          type: "danger",
          children: [
            {
              type: "paragraph",
              children: otherChildren.map((node: any) =>
                toMdast(node, { handlers }),
              ),
            },
          ],
        });
      }

      return defaultHandlers.div(h, node);
    },
  };

  const mdFile = await unified()
    .use(rehypeParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMdx)
    .use(rehypeRemark, {
      handlers,
    })
    .use(remarkStringify, remarkStringifyOptions)
    .use(() => {
      return (root: Root) => {
        // merge contiguous emphasis
        visit(root, "emphasis", (node, index, parent) => {
          if (index === null || parent === null) return;
          let nextIndex = index + 1;
          while (parent.children[nextIndex]?.type === "emphasis") {
            node.children.push(
              ...((parent.children[nextIndex] as any).children ?? []),
            );
            nextIndex++;
          }
          parent.children.splice(index + 1, nextIndex - (index + 1));
        });

        // remove initial and trailing spaces from emphasis
        visit(root, "emphasis", (node, index, parent) => {
          if (index === null || parent === null) return;
          const firstChild = first(node.children);
          if (firstChild?.type === "text") {
            const match = firstChild.value.match(/^\s+/);
            if (match) {
              if (match[0] === firstChild.value) {
                node.children = tail(node.children);
              } else {
                firstChild.value = removePrefix(firstChild.value, match[0]);
              }
              parent.children.splice(index, 0, {
                type: "text",
                value: match[0],
              });
            }
          }
          const lastChild = last(node.children);
          if (lastChild?.type === "text") {
            const match = lastChild.value.match(/\s+$/);
            if (match) {
              if (match[0] === lastChild.value) {
                node.children = initial(node.children);
              } else {
                lastChild.value = removeSuffix(lastChild.value, match[0]);
              }
              parent.children.splice(index + 1, 0, {
                type: "text",
                value: match[0],
              });
            }
          }
        });
      };
    })
    .process(mainHtml);

  let markdown = mdFile.toString();
  markdown = markdown.replaceAll(`<!---->`, "");

  return { markdown, meta, images, isReleaseNotes };
}

function buildAdmonition(options: {
  title: string;
  type: string;
  children: Array<any>;
}): MdxJsxFlowElement {
  const { title, type, children } = options;
  return {
    type: "mdxJsxFlowElement",
    name: "Admonition",
    attributes: [
      {
        type: "mdxJsxAttribute",
        name: "title",
        value: title,
      },
      {
        type: "mdxJsxAttribute",
        name: "type",
        value: type,
      },
    ],
    children,
  };
}

function buildSpanId(id: string): MdxJsxFlowElement {
  return {
    type: "mdxJsxFlowElement",
    name: "span",
    attributes: [
      {
        type: "mdxJsxAttribute",
        name: "id",
        value: id,
      },
    ],
    children: [],
  };
}
