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

import { join } from "path";
import { Text, Link, InlineCode } from "mdast";

interface Ref {
  name: string;
  path: string;
  isAbsolutePath?: boolean;
}
type CrossRefsByVersion = {
  [version: string]: {
    [objectName: string]: Ref;
  };
};
const CROSS_REFERENCES_BY_VERSION: CrossRefsByVersion = {
  "2.0": {
    SparseObservable: {
      name: "QkObs",
      path: "/qk-obs#qkobs-1",
    },
    CSparseTerm: {
      name: "QkObsTerm",
      path: "/qk-obs-term#qkobsterm-1",
    },
    BitTerm: {
      name: "QkBitTerm",
      path: "/qk-bit-term#qkbitterm-1",
    },
    Complex64: {
      name: "QkComplex64",
      path: "", // TODO
    },
    PySparseObservable: {
      name: "SparseObservable",
      path: "/api/qiskit/2.0/qiskit.quantum_info.SparseObservable#sparseobservable",
      isAbsolutePath: true,
    },
  },
} as const;

type ParsedOutput = Array<Text | Link | InlineCode>;
export function insertCrossReferences(
  textNode: Text,
  packageName: string,
  version: string,
): ParsedOutput {
  const crossRefs = CROSS_REFERENCES_BY_VERSION[version];
  if (!crossRefs) throw new Error(`Unrecognized C API version: '${version}'`);

  const nodes: ParsedOutput = [];
  const basePath = "/" + join("api", packageName, version);
  const regex = /(.*?)\[([A-z]+)\]/gm;

  let match: RegExpExecArray | null;
  let endOfLastMatch = 0;
  while ((match = regex.exec(textNode.value)) !== null) {
    nodes.push({ type: "text", value: match[1] });
    nodes.push(getCrossRef(match[2], crossRefs, basePath));
    endOfLastMatch = regex.lastIndex;
  }

  const remainingText = textNode.value.slice(endOfLastMatch);
  nodes.push({ type: "text", value: remainingText });
  return nodes;
}

function getCrossRef(
  objectName: string,
  crossRefs: { [name: string]: Ref },
  basePath: string,
): Link | InlineCode {
  const ref = crossRefs[objectName];
  if (!ref) {
    console.error(
      `Could not find cross reference for '${objectName}' in '${basePath}'.`,
    );
    return { type: "inlineCode", value: objectName };
  }
  const linkTextNode: Text = { type: "text", value: ref.name };
  const url = ref.isAbsolutePath ? ref.path : join(basePath, ref.path);
  return { type: "link", url, children: [linkTextNode] };
}

type TextVisitor = (node: Text, index: number, parent: any) => void;
export function insertCrossRefsVisitor(
  packageName: string,
  version: string,
): TextVisitor {
  return (node: Text, index: number, parent: any): void => {
    const newNodes = insertCrossReferences(node, packageName, version);
    parent.children = [
      ...parent.children.slice(0, index),
      ...newNodes,
      ...parent.children.slice(index + 1, parent.children.length),
    ];
  };
}
