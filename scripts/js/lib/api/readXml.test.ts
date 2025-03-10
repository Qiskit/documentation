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

function dedentAndTrim(s: string): string {
  return s.replaceAll("\n        ", "\n").trim();
}

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
});
