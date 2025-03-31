// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { readFile, writeFile } from "fs/promises";
import { unzipSync, deflateSync } from "zlib";
import { join, dirname } from "path";
import { mkdirp } from "mkdirp";

import { removePrefix, removeSuffix } from "../stringUtils.js";
import { C_API_BASE_PATH } from "./conversionPipeline.js";
import { PackageLanguage } from "./Pkg";

/**
 * Some pages exist in the sphinx docs but not in our docs
 * If any URIs match these cases, we remove their entries.
 **/
const ENTRIES_TO_EXCLUDE = [
  /^genindex(\.html)?$/,
  /^py-modindex(\.html)?$/,
  /^search(\.html)?$/,
  /^explanation(\.html)?(?=\/|#|$)/,
  /^how_to(\.html)?(?=\/|#|$)/,
  /^tutorials(\.html)?(?=\/|#|$)/,
  /^migration_guides(\.html)?(?=\/|#|$)/,
  /^configuration(\.html)?(?=#|$)/,
  /^contributing_to_qiskit(\.html)?(?=#|$)/,
  /^deprecation_policy(\.html)?(?=#|$)/,
  /^faq(\.html)?(?=#|$)/,
  /^getting_started(\.html)?(?=#|$)/,
  /^intro_tutorial1(\.html)?(?=#|$)/,
  /^maintainers_guide(\.html)?(?=#|$)/,
  /^qc_intro(\.html)?(?=#|$)/,
  /^release[-_]notes(\.html)?(?=#|$)/,
  /^legacy_release_notes(\.html)?(?=#|$)/,
];

function shouldIncludeEntry(
  entry: ObjectsInvEntry,
  packageLanguage: "Python" | "C" | "any",
): boolean {
  if (ENTRIES_TO_EXCLUDE.some((condition) => entry.uri.match(condition))) {
    return false;
  }

  // `group__` and `struct_` entries are from doxygen and are not present in the final pages.
  if (entry.name.startsWith("group__")) return false;
  if (entry.name.startsWith("struct_")) return false;

  // This happens during link checking.
  if (packageLanguage === "any") return true;

  const isCPage = entry.uri.startsWith(C_API_BASE_PATH + "/");
  const isCApi = packageLanguage === "C";
  return isCApi === isCPage;
}

export type ObjectsInvEntry = {
  name: string;
  domainAndRole: string;
  priority: string;
  uri: string;
  dispname: string;
};

/**
 * Class to hold and operate on data from Sphinx's objects.inv file.
 * For information on the syntax, see:
 *   https://sphobjinv.readthedocs.io/en/stable/syntax.html
 */
export class ObjectsInv {
  readonly preamble: string;
  entries: ObjectsInvEntry[];

  constructor(preamble: string, entries: ObjectsInvEntry[]) {
    this.preamble = preamble;
    this.entries = entries;
  }

  /**
   * Decompress Sphinx's objects.inv.
   * This function follows the process from:
   *   https://github.com/bskinn/sphobjinv/blob/stable/src/sphobjinv/zlib.py
   */
  static async fromFile(
    directoryPath: string,
    packageLanguage: PackageLanguage | "any",
  ): Promise<ObjectsInv> {
    const path = join(directoryPath, "objects.inv");
    let buffer = await readFile(path);
    // Extract preamble (first 4 lines of file)
    let preamble = "";
    for (let line = 0; line < 4; line++) {
      let nextNewline = buffer.indexOf(10) + 1;
      preamble += buffer.toString("utf8", 0, nextNewline);
      buffer = buffer.subarray(nextNewline);
    }

    // Decompress the rest
    const lines = unzipSync(buffer).toString("utf8").trim().split("\n");

    // Sort the strings into their parts
    const entries: ObjectsInvEntry[] = [];
    for (const line of lines) {
      // Regex from sphinx source
      // https://github.com/sphinx-doc/sphinx/blob/2f60b44999d7e610d932529784f082fc1c6af989/sphinx/util/inventory.py#L115-L116
      const parts = line.match(/(.+?)\s+(\S+)\s+(-?\d+)\s+?(\S*)\s+(.*)/);
      if (parts == null || parts.length != 6) {
        console.warn(`Error parsing line of objects.inv: ${line}`);
        continue;
      }
      const entry = {
        name: parts[1],
        domainAndRole: parts[2],
        priority: parts[3],
        uri: parts[4],
        dispname: parts[5],
      };
      entry.uri = ObjectsInv.#expandUri(entry.uri, entry.name);
      if (!shouldIncludeEntry(entry, packageLanguage)) {
        continue;
      }
      if (packageLanguage === "C") {
        entry.uri = ObjectsInv.#transformCApiUri(entry.uri, entry.name);
      }

      entries.push(entry);
    }

    return new ObjectsInv(preamble, entries);
  }

  /**
   * The anchors from the C API artifact do not make it into the final page, so
   * we must manipulate the URI based on the object name.
   */
  static #transformCApiUri(uri: string, name: string): string {
    const uriWithoutPrefix = removePrefix(uri, C_API_BASE_PATH + "/");
    if (!uriWithoutPrefix.includes("#")) return uriWithoutPrefix;
    const [path, _anchor] = uriWithoutPrefix.split("#");

    // We have no way of working out the IDs of attributes (e.g.
    // `QkObsTerm::num_qubits`), so we instead just point to the parent object.
    // This is a best-effort attempt that should get users close to the right
    // place.
    const objectName = name.split("::")[0].toLowerCase();
    return `${path}#${objectName}`;
  }

  static #expandUri(uri: string, name: string): string {
    if (uri.includes("#") && uri.endsWith("$")) {
      // #$ is a shorthand for "anchor==name"; see "For illustration" in
      // https://sphobjinv.readthedocs.io/en/stable/syntax.html
      uri = removeSuffix(uri, "$") + name;
    }
    return uri;
  }

  static #compressUri(uri: string, name: string): string {
    if (uri.includes("#") && uri.endsWith(name)) {
      uri = removeSuffix(uri, name) + "$";
    }
    return uri;
  }

  updateUris(transformLink: (uri: string) => string): void {
    for (const entry of this.entries) {
      entry.uri = entry.uri.replace(/\.html/, "");
      entry.uri = transformLink(entry.uri);
    }
  }

  /**
   * Return all entries joined together as a single string
   * to be compressed before writing
   */
  entriesString(): string {
    const lines: string[] = [];
    for (const e of this.entries) {
      lines.push(
        [
          e.name,
          e.domainAndRole,
          e.priority,
          ObjectsInv.#compressUri(e.uri, e.name),
          e.dispname,
        ].join(" "),
      );
    }
    return lines.join("\n");
  }

  /**
   * Compress and write to file
   */
  async write(directoryPath: string): Promise<void> {
    const path = join(directoryPath, "objects.inv");
    const preamble = Buffer.from(this.preamble);
    const compressed = deflateSync(Buffer.from(this.entriesString(), "utf8"), {
      level: 9,
    });
    await mkdirp(dirname(path));
    await writeFile(path, Buffer.concat([preamble, compressed]));
  }
}
