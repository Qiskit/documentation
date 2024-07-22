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

import { readFile, readdir } from "fs/promises";

import { expect, describe, test } from "@jest/globals";

import { QISKIT_TOC_GROUPING } from "./TocGrouping";
import type { TocEntry } from "./generateToc";

/**
 * The module names belonging to a section, e.g.
 * `['qiskit.circuit', 'qiskit.circuit.library']`.
 *
 * For top-level modules, like `qiskit.quantum_info`, there will only
 * be a single element.
 * */
type ModuleGroup = string[];

/**
 * Ensure our assumptions about Qiskit's TocGrouping are correct.
 *
 * These assumptions are what allow us to infer what is a top-level module
 * (like 'qiskit.quantum_info') vs. a section (like 'Circuit construction').
 *
 * If these assumptions are getting in the way, you can rewrite these tests.
 * A more robust approach would be to read the front-matter/metadata for the
 * URLs to see if `python_api_type: module` is set. This is complicated by
 * module pages sometimes being in 'Module overview' vs being on a standalone page
 * like 'qiskit.circuit.singleton'.
 */
function validateTopLevelModuleAssumptions(): void {
  for (const entry of QISKIT_TOC_GROUPING.entries) {
    if (
      entry.kind === "module" &&
      !entry.title.includes("qiskit.") &&
      entry.title !== "API index"
    ) {
      throw new Error(
        "Expected every top-level module of QISKIT_TOC_GROUPING to have the module name in " +
          "its title, e.g. 'Quantum information (qiskit.quantum_info)'. This will break the " +
          "tests in this file. Either add the module name to the title or rewrite these tests. " +
          `Bad entry: ${entry.title}`,
      );
    } else if (entry.kind === "section" && entry.name.includes("qiskit.")) {
      throw new Error(
        "Expected every `section` of QISKIT_TOC_GROUPING.entries to not have 'qiskit.' in the " +
          "name. This will break the tests in this file. Either remove the module name or " +
          `rewrite these tests. Bad entry: ${entry.name}`,
      );
    }
  }
}

function extractModuleName(text: string): string {
  const re = /qiskit\.[a-zA-Z._0-9]+/;
  // Ex: 'Quantum information (qiskit.quantum_info)'.
  // Ex: '*   [Quantum Circuits (`qiskit.circuit`)](circuit)'
  const match = text.match(re);
  if (!match) {
    throw new Error(`Could not extract module from ${text}`);
  }
  return match[0];
}

/**
 * Finds all groups of modules from the index page.
 *
 * Each group has a list of page titles with the module name in parantheses.
 */
async function getIndexModuleGroups(fp: string): Promise<ModuleGroup[]> {
  const rawIndex = await readFile(fp, "utf-8");
  const result: ModuleGroup[] = [];
  let currentGroup: ModuleGroup = [];
  for (const line of rawIndex.split("\n")) {
    // Each ModuleGroup represents an unordered list of entries starting with `*`.
    // So, when we stop encountering `*`, we need to start a new ModuleGroup.
    if (!line.startsWith("* ")) {
      if (currentGroup.length) {
        result.push(currentGroup);
        currentGroup = [];
      }
      continue;
    }

    // Certain classes like QuantumCircuit in Qiskit 1.1+ have manually
    // created pages. Those pages show up in index.mdx as top-level entries,
    // but they are not top-level entries in the left ToC. This is expected.
    // So, we allow the index to diverge from the left ToC.
    //
    // This is looking for e.g. '[`QuantumCircuit` class](qiskit.circuit.QuantumCircuit)'
    const isDedicatedClassPage = line.includes(" class](");
    if (isDedicatedClassPage) continue;

    const module = extractModuleName(line);
    currentGroup.push(module);
  }
  return result;
}

async function getTocModuleGroups(fp: string): Promise<ModuleGroup[]> {
  const rawToc = await readFile(fp, "utf-8");
  const entries = JSON.parse(rawToc).children as TocEntry[];
  const result: ModuleGroup[] = [];
  for (const entry of entries) {
    const isTopLevelModule = entry.title.includes("qiskit.");
    if (isTopLevelModule) {
      const moduleName = extractModuleName(entry.title);
      result.push([moduleName]);
    } else if (entry.children) {
      // The modules inside a custom Section cannot be renamed, so they
      // will have their title set as the module, e.g. `qiskit.circuit`.
      const childrenModules = Array.from(
        entry.children
          .filter((child) => child.title.startsWith("qiskit."))
          .map((child) => child.title),
      );
      if (childrenModules.length) {
        result.push(childrenModules);
      }
    }
  }
  return result;
}

async function checkFolder(dirName: string): Promise<void> {
  const indexModuleGroups = await getIndexModuleGroups(
    `docs/api/qiskit${dirName}/index.mdx`,
  );
  const tocModuleGroups = await getTocModuleGroups(
    `docs/api/qiskit${dirName}/_toc.json`,
  );
  expect(indexModuleGroups).toEqual(tocModuleGroups);
}

describe("Qiskit ToC mirrors index page sections", () => {
  test("validate assumptions", () => {
    validateTopLevelModuleAssumptions();
  });

  test("dev", async () => {
    await checkFolder("/dev");
  });

  test("latest", async () => {
    await checkFolder("");
  });

  test("historical releases (1.1+)", async () => {
    const folders = (
      await readdir("docs/api/qiskit", { withFileTypes: true })
    ).filter(
      (file) =>
        file.isDirectory() && file.name.match(/[0-9].*/) && +file.name >= 1.1,
    );
    for (const folder of folders) {
      await checkFolder(`/${folder.name}`);
    }
  });
});
