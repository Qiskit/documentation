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

import path from "node:path";

import { extractFromFile } from "@qiskit/mdx-link-extract";

import { ObjectsInv } from "../api/objectsInv.js";
import { removePrefix, removeSuffix } from "../stringUtils.js";
import { partition } from "lodash-es";

export type ParsedFile = {
  /** Anchors that the file defines. These can be linked to from other files. */
  anchors: Set<string>;
  /** Internal links that this file has to other places. */
  internalLinks: Set<string>;
  /** External links that this file has to other places. */
  externalLinks: Set<string>;
};

async function parseObjectsInv(filePath: string): Promise<Set<string>> {
  const objinv = await ObjectsInv.fromFile(
    removeSuffix(filePath, "objects.inv"),
    "any",
  );
  // All URIs are relative to the objects.inv file
  const dirname = removePrefix(path.dirname(filePath), "public");
  return new Set(
    objinv.entries.map((entry) => path.posix.join(dirname, entry.uri)),
  );
}

export async function parseFile(filePath: string): Promise<ParsedFile> {
  if (filePath.endsWith(".inv")) {
    const links = await parseObjectsInv(filePath);
    return {
      internalLinks: links,
      externalLinks: new Set(),
      anchors: new Set(),
    };
  }

  if (filePath.endsWith(".json"))
    return {
      anchors: new Set(),
      internalLinks: new Set(),
      externalLinks: new Set(),
    };

  try {
    const [links, anchors] = await extractFromFile(filePath);
    const [externalLinks, internalLinks] = partition(
      // We can't check emails are valid
      links.filter((x) => !x.startsWith("mailto:")),
      (link) => link.startsWith("http"),
    );
    return {
      anchors: new Set(anchors),
      internalLinks: new Set(internalLinks),
      externalLinks: new Set(externalLinks),
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : `${err}`;
    throw new Error(`Problem parsing '${filePath}':\n` + msg);
  }
}
