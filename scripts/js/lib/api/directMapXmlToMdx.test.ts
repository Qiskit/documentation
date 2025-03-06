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

import { expect, test } from "@playwright/test";
import { toMarkdown } from "mdast-util-to-markdown";

import { directMapXmlToMdx } from "./directMapXmlToMdx.js";
import { xmlParser, collapseWhitespace } from "./xmlToMdx.js";

// Helper function to parse string input and stringify output
// This is easier than writing and reading the XML and MDX ASTs.
function directMapXmlToMdxString(xml: string): string {
  const parsedXml = xmlParser.parse(xml);
  // console.log(JSON.stringify(parsedXml));
  const mdastRoot = directMapXmlToMdx(parsedXml);
  // console.log(JSON.stringify(mdastRoot, null, 2));
  return collapseWhitespace(toMarkdown(mdastRoot));
}

function dedentAndTrim(s: string): string {
  return s.replaceAll("\n        ", "\n").trim();
}

test.describe("directMapXmlToMdx", () => {
  test("plain text", async () => {
    const xmlString = `<para>Hello, world!</para>`;
    const result = directMapXmlToMdxString(xmlString);
    expect(result).toEqual(`Hello, world!`);
  });

  test("title and code block (no nesting)", async () => {
    const xmlString = dedentAndTrim(`
        <title>Example</title><para><verbatim>QkSparseObservable *zero = qk_obs_zero(100);
        </verbatim> </para>
      `);
    const result = directMapXmlToMdxString(xmlString);
    expect(result).toEqual(
      dedentAndTrim(`
        # Example

        \`\`\`C
        QkSparseObservable *zero = qk_obs_zero(100);
        \`\`\`
      `),
    );
  });

  test("title, paragraph, and list (no nesting)", async () => {
    const xmlString = `
      <title>List example</title><para>Here's a simple list:</para>
      <para><itemizedlist>
      <listitem><para>Item one</para>
      </listitem><listitem><para>Item two</para>
      </listitem><listitem><para>Item three</para>
      </listitem></itemizedlist>
      </para>
    `;
    const result = directMapXmlToMdxString(xmlString);
    expect(result).toEqual(
      dedentAndTrim(`
        # List example

        Here's a simple list:

        *   Item one

        *   Item two

        *   Item three
        `),
    );
  });

  test("list with nesting", async () => {
    const xmlString = `
      <title>Safety</title><para>Behavior is undefined if any of the following conditions are violated:</para>
      <para><itemizedlist>
      <listitem><para><computeroutput>coeffs</computeroutput> is a pointer to a <computeroutput>complex double</computeroutput> array of length <computeroutput>num_terms</computeroutput></para>
      </listitem><listitem><para><computeroutput>bit_terms</computeroutput> is a pointer to a <computeroutput>QkBitTerm</computeroutput> array of length <computeroutput>num_bits</computeroutput></para>
      </listitem><listitem><para><computeroutput>indices</computeroutput> is a pointer to a <computeroutput>uint32_t</computeroutput> array of length <computeroutput>num_bits</computeroutput>, which is term-wise sorted in strict ascending order, and every element is smaller than <computeroutput>num_qubits</computeroutput></para>
      </listitem><listitem><para><computeroutput>boundaries</computeroutput> is a pointer to a <computeroutput>size_t</computeroutput> array of length <computeroutput>num_terms + 1</computeroutput>, which is sorted in ascending order, the first element is 0 and the last element is smaller than <computeroutput>num_terms</computeroutput> </para>
      </listitem></itemizedlist>
      </para>
    `;
    const result = directMapXmlToMdxString(xmlString);
    expect(result).toEqual(
      dedentAndTrim(`
        # Safety

        Behavior is undefined if any of the following conditions are violated:

        *   \`coeffs\` is a pointer to a \`complex double\` array of length \`num_terms\`

        *   \`bit_terms\` is a pointer to a \`QkBitTerm\` array of length \`num_bits\`

        *   \`indices\` is a pointer to a \`uint32_t\` array of length \`num_bits\`, which is term-wise sorted in strict ascending order, and every element is smaller than \`num_qubits\`

        *   \`boundaries\` is a pointer to a \`size_t\` array of length \`num_terms + 1\`, which is sorted in ascending order, the first element is 0 and the last element is smaller than \`num_terms\`
      `),
    );
  });
});
