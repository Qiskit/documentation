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

import { findImagesWithoutAltText } from "./extractMarkdownImages.js";

test("Test the extraction of the images", async () => {
  const markdown = `
# A header

![Our first image with alt text](/images/img1.png)

![](/images/invalid_img1.png)

![Here's another valid image](/images/img2.png)

![](/images/invalid_img2.png)

![](/images/invalid_img2.png)

![And now, our last link](https://ibm.com)
    `;
  const images = await findImagesWithoutAltText(markdown);
  const correct_images = new Set([
    "/images/invalid_img1.png",
    "/images/invalid_img2.png",
  ]);

  expect(images).toEqual(correct_images);
});
