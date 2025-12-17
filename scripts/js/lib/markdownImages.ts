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
import { Root } from "mdast";
import { visit } from "unist-util-visit";
import { last, split } from "lodash-es";

export function collectInvalidImageErrors(tree: Root): Set<string> {
  const imagesErrors = new Set<string>();

  visit(tree, "image", (node) => {
    const imageName = last(split(node.url, "/"));
    if (!node.alt || node.alt.endsWith(imageName!)) {
      imagesErrors.add(`The image '${node.url}' does not have alt text.`);
    }

    if (node.url.match(/\.(png|jpe?g)$/)) {
      const urlWithAvifExtension = node.url.replace(/\.(png|jpe?g)$/, ".avif");
      imagesErrors.add(
        `Convert '${imageName}' to AVIF. You can use the command \`magick <path/to/image>.png <path/to/image>.avif\`. ` +
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

  return imagesErrors;
}
