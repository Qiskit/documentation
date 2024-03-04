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
import { addLinksToMap } from "./FileBatch";

test("addLinksToMap()", () => {
  const linksToMap = new Map();

  addLinksToMap(
    "file1.md",
    new Set(["https://ibm.com", "./relative"]),
    linksToMap,
  );
  expect(linksToMap).toEqual(
    new Map([
      ["https://ibm.com", ["file1.md"]],
      ["./relative", ["file1.md"]],
    ]),
  );

  addLinksToMap(
    "file2.md",
    new Set(["./relative", "/images/my_image.png"]),
    linksToMap,
  );
  expect(linksToMap).toEqual(
    new Map([
      ["https://ibm.com", ["file1.md"]],
      ["./relative", ["file1.md", "file2.md"]],
      ["/images/my_image.png", ["file2.md"]],
    ]),
  );
});
