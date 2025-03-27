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

import { test, expect } from "@playwright/test";

import { insertCrossReferences } from "./handleCrossRefs";
import { toMarkdown } from "mdast-util-to-markdown";

function transformString(input: string): string {
  const ast = insertCrossReferences(
    { type: "text", value: input },
    "qiskit-c",
    "2.0",
  );
  return toMarkdown({ type: "root", children: ast }).trim();
}

test.describe("insertCrossReferences()", () => {
  test("simple cross ref", async () => {
    expect(transformString("Ref to [SparseObservable]")).toEqual(
      "Ref to [QkObs](/api/qiskit-c/2.0/qk-obs#qkobs-1)",
    );
  });

  test("many refs in a single sentence", async () => {
    expect(
      transformString("Ref to [SparseObservable] and to [CSparseTerm]"),
    ).toEqual(
      "Ref to [QkObs](/api/qiskit-c/2.0/qk-obs#qkobs-1) and to [QkObsTerm](/api/qiskit-c/2.0/qk-obs-term#qkobsterm-1)",
    );
  });

  test("text after ref", async () => {
    expect(transformString("Ref to [SparseObservable]!!")).toEqual(
      "Ref to [QkObs](/api/qiskit-c/2.0/qk-obs#qkobs-1)!!",
    );
  });

  test("ref starts sentence", async () => {
    expect(transformString("[SparseObservable] is a struct")).toEqual(
      "[QkObs](/api/qiskit-c/2.0/qk-obs#qkobs-1) is a struct",
    );
  });

  test("unrecognised ref is escaped", async () => {
    expect(transformString("This [RefThing] is not a real struct")).toEqual(
      "This `RefThing` is not a real struct",
    );
  });

  test("no refs", async () => {
    expect(transformString("This string has no refs!")).toEqual(
      "This string has no refs!",
    );
  });
});
