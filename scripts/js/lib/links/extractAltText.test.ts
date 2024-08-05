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

import { expect, test } from "@jest/globals";
import { extractAlt, AltText } from "./extractAltText";

test("extractAlt()", async () => {
  const markdown = `
    # A header
    ![Our first image with alt text](/images/img1.png)

    ![](/images/invalid_img1.png)

    ![Here's another valid image](/images/img3.png)

    ![](/images/invalid_img2.png)

    ![And now, our last link](https://ibm.com)
    `;
  const{ imageName, altText } = await extractAlt(markdown);
  expect(imageName).toEqual(
    new Set(["/images/img1.png", "/images/invalid_img1.png", "/images/img3.png", "/images/invalid_img2.png", "https://ibm.com"]),
  );
  expect(altText).toEqual(
    new Set(["Our first image with alt text", null, "Here's another valid image", null, "And now, our last link"]),
  );
});
