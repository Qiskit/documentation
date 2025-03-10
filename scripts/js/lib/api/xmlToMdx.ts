// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.
import { XMLParser } from "fast-xml-parser";

export const xmlParser = new XMLParser({
  preserveOrder: true,
  alwaysCreateTextNode: true,
  trimValues: false,
});

// Extra whitespace in the XML can appear in the MDX output.
// This shouldn't affect how it renders on the site so we trim it to reduce noise.
export function collapseWhitespace(mdx: string): string {
  return mdx
    .replaceAll("&#x20;", " ")
    .replace(/\n(\s*\n)+/gm, "\n\n")
    .trim();
}
