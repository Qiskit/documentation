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

import { expect, test } from "@playwright/test";

import { collectInvalidImageErrors } from "./markdownImages.js";

test("Test the finding of invalid images", async () => {
  const markdown = `
# A header

![Our first image with alt text](/docs/images/img1.png)

![](/docs/images/invalid_img1.png)

![Here's another valid image](/docs/images/img2.png)

![](/docs/images/invalid_img2.png)

![](/docs/images/invalid_img2.png)

![Here's an actual valid image](/docs/images/valid.avif)

![And a valid SVG](/docs/images/valid.svg)

<img src="/docs/images/HTMLexample1.jpg" alt="" width="200"/>

<img src="/docs/images/HTMLexample2.jpg" alt="Example" width="200"/>

![And now, our last link](https://ibm.com)

![../docs/\_images/invalid\_img3.png](/docs/images/invalid_img3.png)

![Here's an actual valid image](/learning/images/valid.avif)

![And a valid SVG](/learning/images/valid.svg)

<img src="/learning/images/HTMLexample1.jpg" alt="" width="200"/>
    `;
  const images = await collectInvalidImageErrors(markdown);
  const correct_images = new Set([
    "Convert 'img1.png' to AVIF. You can use the command `magick <path/to/image>.png <path/to/image>.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'img2.png' to AVIF. You can use the command `magick <path/to/image>.png <path/to/image>.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'invalid_img1.png' to AVIF. You can use the command `magick <path/to/image>.png <path/to/image>.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'invalid_img2.png' to AVIF. You can use the command `magick <path/to/image>.png <path/to/image>.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'invalid_img3.png' to AVIF. You can use the command `magick <path/to/image>.png <path/to/image>.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "The image '/docs/images/HTMLexample1.jpg' uses an HTML <img> tag instead of markdown syntax.",
    "The image '/docs/images/HTMLexample2.jpg' uses an HTML <img> tag instead of markdown syntax.",
    "The image '/docs/images/invalid_img1.png' does not have alt text.",
    "The image '/docs/images/invalid_img2.png' does not have alt text.",
    "The image '/docs/images/invalid_img3.png' does not have alt text.",
    "The image '/learning/images/HTMLexample1.jpg' uses an HTML <img> tag instead of markdown syntax.",
  ]);

  expect(images).toEqual(correct_images);
});
