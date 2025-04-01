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

export type ApiTypeName = ApiObjectName | "module";
export type ApiObjectName =
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
  | "enumerator"
  | "structMember";

interface ApiObjectInfo {
  htmlSelector: string;
  tagName: "class" | "function" | "attribute";
}

/**
 * This object defines every API type we support. The key is the name we use to
 * refer to the API type in this script, the `htmlSelector` is the HTML selector
 * in the Sphinx HTML, and the `tagName` is the tag we transform it to (and how
 * it'll be displayed on the website).
 */
export const API_OBJECTS: { [K in ApiObjectName]: ApiObjectInfo } = {
  class: { htmlSelector: "dl.py.class", tagName: "class" },
  exception: { htmlSelector: "dl.py.exception", tagName: "class" },
  attribute: { htmlSelector: "dl.py.attribute", tagName: "attribute" },
  property: { htmlSelector: "dl.py.property", tagName: "attribute" },
  function: { htmlSelector: "dl.py.function", tagName: "function" },
  cFunction: { htmlSelector: "dl.cpp.function", tagName: "function" },
  method: { htmlSelector: "dl.py.method", tagName: "function" },
  data: { htmlSelector: "dl.py.data", tagName: "attribute" },
  struct: { htmlSelector: "dl.cpp.struct", tagName: "class" },
  typedef: { htmlSelector: "dl.cpp.type", tagName: "class" },
  enum: { htmlSelector: "dl.cpp.enum", tagName: "class" },
  enumerator: { htmlSelector: "dl.cpp.enumerator", tagName: "attribute" },
  structMember: { htmlSelector: "dl.cpp.var", tagName: "attribute" },
} as const;

export type Metadata = {
  apiName?: string;
  apiType?: ApiTypeName;
  hardcodedFrontmatter?: string;
};
