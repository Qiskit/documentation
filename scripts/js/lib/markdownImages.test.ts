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

![Our first image with alt text](/images/img1.png)

![](/images/invalid_img1.png)

![Here's another valid image](/images/img2.png)

![](/images/invalid_img2.png)

![](/images/invalid_img2.png)

![Here's an actual valid image](/images/valid.avif)

![And a valid SVG](/images/valid.svg)

<img src="/images/HTMLexample1.jpg" alt="" width="200"/>

<img src="/images/HTMLexample2.jpg" alt="Example" width="200"/>

![And now, our last link](https://ibm.com)

![../\_images/invalid\_img3.png](/images/invalid_img3.png)
    `;
  const images = await collectInvalidImageErrors(markdown);
  const correct_images = new Set([
    "Convert 'img1.png' to AVIF. You can use the command `magick public/docs/images/img1.png public/docs/images/img1.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'img2.png' to AVIF. You can use the command `magick public/docs/images/img2.png public/docs/images/img2.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'invalid_img1.png' to AVIF. You can use the command `magick public/docs/images/invalid_img1.png public/docs/images/invalid_img1.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'invalid_img2.png' to AVIF. You can use the command `magick public/docs/images/invalid_img2.png public/docs/images/invalid_img2.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "Convert 'invalid_img3.png' to AVIF. You can use the command `magick public/docs/images/invalid_img3.png public/docs/images/invalid_img3.avif`. If ImageMagick isn't preinstalled, you can get it from https://imagemagick.org/script/download.php. Then delete the old file and update the markdown to point to the new file.",
    "The image '/images/HTMLexample1.jpg' uses an HTML <img> tag instead of markdown syntax.",
    "The image '/images/HTMLexample2.jpg' uses an HTML <img> tag instead of markdown syntax.",
    "The image '/images/invalid_img1.png' does not have alt text.",
    "The image '/images/invalid_img2.png' does not have alt text.",
    "The image '/images/invalid_img3.png' does not have alt text.",
  ]);

  expect(images).toEqual(correct_images);
});
