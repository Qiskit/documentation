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

import { load } from "cheerio";
import { unified } from "unified";
import { Root } from "remark-mdx";
import { visit } from "unist-util-visit";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { last, split } from "lodash-es";

export async function collectInvalidImageErrors(
  markdown: string,
): Promise<Set<string>> {
  const imagesErrors = new Set<string>();

  await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(() => (tree: Root) => {
      visit(tree, "image", (node) => {
        // Sphinx uses the image path as alt text if it wasn't defined using the
        // :alt: option.
        const imageName = last(split(node.url, "/"));
        if (!node.alt || node.alt.endsWith(imageName!)) {
          imagesErrors.add(`The image '${node.url}' does not have alt text.`);
        }

        // Ask to convert PNG and JPEG to AVIF
        if (node.url.match(/\.(png|jpe?g)$/)) {
          const urlWithAvifExtension = node.url.replace(
            /\.(png|jpe?g)$/,
            ".avif",
          );
          imagesErrors.add(
            `Convert '${imageName}' to AVIF. You can use the command \`magick public/docs${node.url} public/docs${urlWithAvifExtension}\`. ` +
              `If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. ` +
              `Then delete the old file and update the markdown to point to the new file.`,
          );
        }
      });
      visit(tree, "html", (node) => {
        const $ = load(node.value);
        if ($("img").length) {
          imagesErrors.add(
            `The image '${$("img").attr("src")}' uses an HTML <img> tag instead of markdown syntax.`,
          );
        }
      });
    })
    .use(remarkStringify)
    .process(markdown);

  return imagesErrors;
}
