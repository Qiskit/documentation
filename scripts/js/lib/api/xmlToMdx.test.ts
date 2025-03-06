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
import { toMarkdown } from "mdast-util-to-markdown";

import { directMapXmlToMdx, parser } from "./xmlToMdx.js";

// Helper function to parse string input and stringify output
// This is easier than writing and reading the XML and MDX ASTs.
function directMapXmlToMdxString(xml: string): string {
  const parsedXml = parser.parse(xml);
  const mdastRoot = directMapXmlToMdx(parsedXml);
  return toMarkdown(mdastRoot);
}

test.describe("direct xml -> mdx", () => {
  test("plain text", async () => {
    const xmlString = `
        <para>
          Hello, world!
        </para>
      `;
    const result = directMapXmlToMdxString(xmlString);
    expect(result).toEqual(`Hello, world!\n`);
  });

  test("title and code block (no nesting)", async () => {
    const xmlString = `
          <title>Example</title><para><verbatim>QkSparseObservable *zero = qk_obs_zero(100);
          </verbatim> </para>
        `;
    const result = directMapXmlToMdxString(xmlString);
    expect(result).toEqual(`
        # Example

        \`\`\`
        QkSparseObservable *zero = qk_obs_zero(100);
        \`\`\`
      `);
  });
});
