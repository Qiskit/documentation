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

<img src="/images/HTMLexample1.jpg" alt="" width="200"/>

<img src="/images/HTMLexample2.jpg" alt="Example" width="200"/>

![And now, our last link](https://ibm.com)
    `;
  const images = await collectInvalidImageErrors(markdown);
  const correct_images = new Set([
    "The image '/images/HTMLexample1.jpg' uses an HTML tag instead of markdown syntax.",
    "The image '/images/HTMLexample2.jpg' uses an HTML tag instead of markdown syntax.",
    "The image '/images/invalid_img1.png' does not have alt text.",
    "The image '/images/invalid_img2.png' does not have alt text.",
  ]);

  expect(images).toEqual(correct_images);
});
