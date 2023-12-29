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

import { describe, expect, test } from "@jest/globals";
import { ObjectsInv, ObjectsInvEntry } from "./objectsInv";
import { unlink, stat } from "fs/promises";

const TEST_FILE = "scripts/lib/sphinx/test/objects.inv";
const TEMP_FILE = TEST_FILE + ".written";

describe("objects.inv", () => {
  test("read file and decompress", async () => {
    const objectsInv = await ObjectsInv.fromFile(TEST_FILE);

    expect(objectsInv.preamble).toMatch(
      "# Sphinx inventory version 2\n" +
        "# Project: Qiskit\n" +
        "# Version: 0.45\n" +
        "# The remainder of this file is compressed using zlib.\n",
    );

    const expectedUris: [number, string][] = [
      [10, "stubs/qiskit.algorithms.AlgorithmJob.html#$"],
      [88, "stubs/qiskit.algorithms.FasterAmplitudeEstimation.html#$"],
      [107, "stubs/qiskit.algorithms.Grover.html#$"],
      [1419, "apidoc/assembler.html#$"],
      [24888, "index.html"],
    ];
    for (const [index, value] of expectedUris) {
      expect(objectsInv.entries[index].uri).toMatch(value);
    }
    const expectedNames: [number, string][] = [
      [24888, "Qiskit 0.45 documentation"],
      [25464, "Circuits Deprecations"],
    ];
    for (const [index, value] of expectedNames) {
      expect(objectsInv.entries[index].dispname).toMatch(value);
    }
  });

  test("write file and re-read matches original", async () => {
    const originalObjectsInv = await ObjectsInv.fromFile(TEST_FILE);
    await originalObjectsInv.write(TEMP_FILE);

    const newObjectsInv = await ObjectsInv.fromFile(TEMP_FILE);
    expect(originalObjectsInv.entries.length).toEqual(
      newObjectsInv.entries.length,
    );
    expect(originalObjectsInv.preamble).toMatch(newObjectsInv.preamble);
    expect(originalObjectsInv.entriesString()).toMatch(
      newObjectsInv.entriesString(),
    );
  });

  test("URI transform works correctly", () => {
    const preamble = `# Simple preamble\n`;
    const transformFunction = (x: string) => x.replaceAll("i", "a");
    const uris: [ObjectsInvEntry, string][] = [
      [
        {
          name: "qiskat_ibm_runtime.RuntimeJob.job_id",
          domainAndRole: "py:method",
          priority: "1",
          uri: "qiskit_ibm_runtime.RuntimeJob#$",
          dispname: "-",
        },
        "qaskat_abm_runtame.RuntameJob#qaskat_abm_runtame.RuntameJob.job_ad",
      ],
      [
        {
          name: "qaskat_abm_runtame.RuntameJob.job_ad",
          domainAndRole: "py:method",
          priority: "1",
          uri: "qiskit_ibm_runtime.RuntimeJob#$",
          dispname: "-",
        },
        "qaskat_abm_runtame.RuntameJob#$",
      ],
      [
        {
          name: "stubs/qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis.__call__",
          domainAndRole: "std:doc",
          priority: "-1",
          uri: "stubs/qiskit_ibm_provider.transpiler.passes.scheduling.ASAPScheduleAnalysis.__call__.html",
          dispname: "ASAPScheduleAnalysis.__call__",
        },
        "stubs/qaskat_abm_provader.transpaler.passes.schedulang.ASAPScheduleAnalysas.__call__",
      ],
      [
        {
          name: "search",
          domainAndRole: "std:label",
          priority: "-1",
          uri: "search.html",
          dispname: "Search Page",
        },
        "search",
      ],
      [
        {
          name: "release notes_ignis_0.5.0",
          domainAndRole: "std:label",
          priority: "-1",
          uri: "legacy_release_notes.html#release-notes-ignis-0-5-0",
          dispname: "Ignis 0.5.0",
        },
        "legacy_release_notes#release-notes-agnas-0-5-0",
      ],
      [
        {
          name: "index",
          domainAndRole: "std:doc",
          priority: "-1",
          uri: "index.html",
          dispname: "Qiskit IBM Quantum Provider API docs preview",
        },
        "andex",
      ],
    ];
    const objectsInv = new ObjectsInv(
      preamble,
      uris.map(([entry, _]) => entry),
    );
    objectsInv.updateUris(transformFunction);
    for (let i = 0; i < uris.length; i++) {
      expect(objectsInv.entries[i].uri).toMatch(uris[i][1]);
    }
  });

  afterAll(async () => {
    if (await stat(TEMP_FILE)) {
      await unlink(TEMP_FILE);
    }
  });
});
