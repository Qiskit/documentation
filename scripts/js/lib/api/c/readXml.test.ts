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
import { toMarkdown as rootToMarkdown } from "mdast-util-to-markdown";

import { readXml, collapseWhitespace } from "./readXml";

function toMarkdown(mdast: any): string {
  return collapseWhitespace(rootToMarkdown({ type: "root", children: mdast }));
}

test.describe("directMapXmlToMdx", () => {
  test("page with no members", async () => {
    const xmlString = `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
      <doxygen xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="compound.xsd" version="1.12.0" xml:lang="en-US">
        <compounddef id="group__QkSparseObservable" kind="group">
          <compoundname>QkSparseObservable</compoundname>
          <title>QkSparseObservable</title>
          <sectiondef kind="func">
          </sectiondef>
          <briefdescription>
          </briefdescription>
          <detaileddescription>
            <para>This is a group of functions for interacting with an opaque (Rust-space) SparseObservable instance. </para>
          </detaileddescription>
        </compounddef>
      </doxygen>
      `;
    const result = readXml(xmlString);
    expect(result.title).toEqual("QkSparseObservable");
    expect(toMarkdown(result.description)).toEqual(
      "This is a group of functions for interacting with an opaque (Rust-space) SparseObservable instance.",
    );
  });

  test("page with a function", async () => {
    const xmlString = `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
      <doxygen xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="compound.xsd" version="1.12.0" xml:lang="en-US">
        <compounddef id="group__QkSparseObservable" kind="group">
          <compoundname>Page title</compoundname>
          <title>Page title</title>
          <detaileddescription>Page description.</detaileddescription>
          <sectiondef kind="func">
            <memberdef kind="function" id="group__QkSparseObservable_1gaf6fff59681bd7c1dd6fc1164b5b1568d" prot="public" static="no" const="no" explicit="no" inline="no" virt="non-virtual">
              <type><ref refid="qiskit_8h_1aa11cd87e227f80467b3ba34cf41904e6" kindref="member">QkSparseObservable</ref> *</type>
              <definition>QkSparseObservable * qk_obs_zero</definition>
              <argsstring>(uint32_t num_qubits)</argsstring>
              <name>qk_obs_zero</name>
              <param>
                <type>uint32_t</type>
                <declname>num_qubits</declname>
              </param>
              <briefdescription>
              </briefdescription>
              <detaileddescription>
                <para>Construct the zero observable (without any terms).</para>
                <para>
                  <parameterlist kind="param">
                    <parameteritem>
                      <parameternamelist>
                        <parametername>num_qubits</parametername>
                      </parameternamelist>
                      <parameterdescription>
                        <para>The number of qubits the observable is defined on.</para>
                      </parameterdescription>
                    </parameteritem>
                  </parameterlist>
                  <simplesect kind="return">
                    <para>A pointer to the created observable.</para>
                  </simplesect>
                </para>
                <sect1 id="group__QkSparseObservable_1autotoc_md3">
                  <title>Example</title><para><verbatim>QkSparseObservable *zero = qk_obs_zero(100);
                  </verbatim> </para>
                </sect1>
              </detaileddescription>
              <inbodydescription>
              </inbodydescription>
              <location file="dist/c/include/qiskit.h" line="149" column="20" declfile="dist/c/include/qiskit.h" declline="149" declcolumn="20"/>
            </memberdef>
          </sectiondef>
        </compounddef>
      </doxygen>
      `;
    const result = readXml(xmlString);
    expect(result.title).toEqual("Page title");
    expect(toMarkdown(result.description)).toEqual("Page description.");
    const func = result.functions.pop();
    expect(func).toBeDefined();
    expect(func?.name).toEqual("qk_obs_zero");
    expect(func?.signature).toEqual(
      "QkSparseObservable * qk_obs_zero(uint32_t num_qubits)",
    );
    expect(toMarkdown(func?.description)).toEqual(
      "Construct the zero observable (without any terms).",
    );
    const parameter = func?.parameters.pop();
    expect(parameter).toBeDefined();
    expect(parameter?.name).toEqual("num_qubits");
    expect(toMarkdown(parameter?.description)).toEqual(
      "The number of qubits the observable is defined on.",
    );
    expect(toMarkdown(func?.returns)).toEqual(
      "A pointer to the created observable.",
    );
    expect(toMarkdown(func?.extendedDescription)).toEqual(
      "# Example\n\n```C\nQkSparseObservable *zero = qk_obs_zero(100);\n```",
    );
  });

  test("function with two parameters", async () => {
    const xmlString = `<?xml version='1.0' encoding='UTF-8' standalone='no'?>
      <doxygen xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="compound.xsd" version="1.12.0" xml:lang="en-US">
        <compounddef id="group__QkSparseObservable" kind="group">
          <compoundname>Page title</compoundname>
          <title>Page title</title>
          <detaileddescription>Page description.</detaileddescription>
          <sectiondef kind="func">
            <memberdef kind="function" id="group__QkSparseObservable_1gaf6fff59681bd7c1dd6fc1164b5b1568d" prot="public" static="no" const="no" explicit="no" inline="no" virt="non-virtual">
              <type><ref refid="qiskit_8h_1aa11cd87e227f80467b3ba34cf41904e6" kindref="member">QkSparseObservable</ref> *</type>
              <definition>QkSparseObservable * qk_obs_zero</definition>
              <argsstring>(uint32_t num_qubits)</argsstring>
              <name>qk_obs_zero</name>
              <param>
                <type>uint32_t</type>
                <declname>num_qubits</declname>
              </param>
              <briefdescription>
              </briefdescription>
              <detaileddescription>
                <para>Construct the zero observable (without any terms).</para>
                <para>
                  <parameterlist kind="param">
                    <parameteritem>
                      <parameternamelist>
                        <parametername>num_qubits</parametername>
                      </parameternamelist>
                      <parameterdescription>
                        <para>The number of qubits the observable is defined on.</para>
                      </parameterdescription>
                    </parameteritem>
                    <parameteritem>
                      <parameternamelist>
                        <parametername>num_qubits</parametername>
                      </parameternamelist>
                      <parameterdescription>
                        <para>The number of qubits the observable is defined on.</para>
                      </parameterdescription>
                    </parameteritem>
                  </parameterlist>
                  <simplesect kind="return">
                    <para>A pointer to the created observable.</para>
                  </simplesect>
                </para>
                <sect1 id="group__QkSparseObservable_1autotoc_md3">
                  <title>Example</title><para><verbatim>QkSparseObservable *zero = qk_obs_zero(100);
                  </verbatim> </para>
                </sect1>
              </detaileddescription>
              <inbodydescription>
              </inbodydescription>
              <location file="dist/c/include/qiskit.h" line="149" column="20" declfile="dist/c/include/qiskit.h" declline="149" declcolumn="20"/>
            </memberdef>
          </sectiondef>
        </compounddef>
      </doxygen>
      `;
    const result = readXml(xmlString);
    expect(result.title).toEqual("Page title");
    expect(toMarkdown(result.description)).toEqual("Page description.");
    const func = result.functions.pop();
    expect(func).toBeDefined();
    expect(func?.name).toEqual("qk_obs_zero");
    expect(func?.signature).toEqual(
      "QkSparseObservable * qk_obs_zero(uint32_t num_qubits)",
    );
    expect(toMarkdown(func?.description)).toEqual(
      "Construct the zero observable (without any terms).",
    );
    const parameter = func?.parameters[1];
    expect(parameter).toBeDefined();
    expect(parameter?.name).toEqual("num_qubits");
    expect(toMarkdown(parameter?.description)).toEqual(
      "The number of qubits the observable is defined on.",
    );
    expect(toMarkdown(func?.returns)).toEqual(
      "A pointer to the created observable.",
    );
    expect(toMarkdown(func?.extendedDescription)).toEqual(
      "# Example\n\n```C\nQkSparseObservable *zero = qk_obs_zero(100);\n```",
    );
  });
});
