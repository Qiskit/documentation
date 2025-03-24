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

export type ApiTypeName =
  // Python API types
  | "class"
  | "method"
  | "property"
  | "attribute"
  | "function"
  | "exception"
  | "data"
  // C API types
  | "struct"
  | "cFunction"
  | "typedef"
  | "enum"
  | "enumerator";

interface ApiType {
  cssSelector: string;
  tagName: "class" | "function" | "attribute";
}

/**
 * This object defines every API type we support. The key is the name we use to
 * refer to the API type in this script, the `cssSelector` is the CSS selector
 * in the Sphinx HTML, and the `tagName` is the tag we transform it to (and how
 * it'll be displayed on the website).
 */
export const API_TYPES: { [K in ApiTypeName]: ApiType } = {
  class: { cssSelector: "dl.py.class", tagName: "class" },
  exception: { cssSelector: "dl.py.exception", tagName: "class" },
  attribute: { cssSelector: "dl.py.attribute", tagName: "attribute" },
  property: { cssSelector: "dl.py.property", tagName: "attribute" },
  function: { cssSelector: "dl.py.function", tagName: "function" },
  cFunction: { cssSelector: "dl.cpp.function", tagName: "function" },
  method: { cssSelector: "dl.py.method", tagName: "function" },
  data: { cssSelector: "dl.py.data", tagName: "attribute" },
  struct: { cssSelector: "dl.cpp.struct", tagName: "class" },
  typedef: { cssSelector: "dl.cpp.type", tagName: "class" },
  enum: { cssSelector: "dl.cpp.enum", tagName: "class" },
  enumerator: { cssSelector: "dl.cpp.enumerator", tagName: "attribute" },
} as const;

export type Metadata = {
  apiName?: string;
  apiType?: ApiTypeName | "module";
  hardcodedFrontmatter?: string;
};
