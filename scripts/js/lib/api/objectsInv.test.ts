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

import { expect, test } from "@playwright/test";
import { unlink, stat } from "fs/promises";

import { ObjectsInv, ObjectsInvEntry } from "./objectsInv.js";

const TEST_FOLDER = "scripts/js/lib/api/testdata/";
const TEMP_FOLDER = "scripts/js/lib/api/testdata/temp/";

test.describe("objects.inv", () => {
  test.afterAll(async () => {
    if (await stat(TEMP_FOLDER + "objects.inv")) {
      await unlink(TEMP_FOLDER + "objects.inv");
    }
  });

  test("read file and decompress", async () => {
    const objectsInv = await ObjectsInv.fromFile(TEST_FOLDER, "Python");

    expect(objectsInv.preamble).toEqual(
      "# Sphinx inventory version 2\n" +
        "# Project: Qiskit\n" +
        "# Version: 0.45\n" +
        "# The remainder of this file is compressed using zlib.\n",
    );

    const uriIndices = [10, 88, 107, 1419, 23575];
    // This test fails when you include / exclude entries, which shifts some array indices.
    // Use the following code to find the new indices.
    // console.log(objectsInv.entries.findLastIndex( e => { return e.uri.includes("index") }))
    expect(uriIndices.map((i) => objectsInv.entries[i].uri)).toEqual([
      "stubs/qiskit.algorithms.AlgorithmJob.html#qiskit.algorithms.AlgorithmJob.job_id",
      "stubs/qiskit.algorithms.FasterAmplitudeEstimation.html#qiskit.algorithms.FasterAmplitudeEstimation.sampler",
      "stubs/qiskit.algorithms.Grover.html#qiskit.algorithms.Grover.quantum_instance",
      "apidoc/assembler.html#qiskit.assembler.disassemble",
      "index.html",
    ]);
    const nameIndices = [23575, 24146];
    expect(nameIndices.map((i) => objectsInv.entries[i].dispname)).toEqual([
      "Qiskit 0.45 documentation",
      "FakeOslo",
    ]);
  });

  test("write file and re-read matches original", async () => {
    const originalObjectsInv = await ObjectsInv.fromFile(TEST_FOLDER, "Python");
    await originalObjectsInv.write(TEMP_FOLDER);

    const newObjectsInv = await ObjectsInv.fromFile(TEMP_FOLDER, "Python");
    expect(originalObjectsInv.entries.length).toEqual(
      newObjectsInv.entries.length,
    );
    expect(originalObjectsInv.preamble).toEqual(newObjectsInv.preamble);
    expect(originalObjectsInv.entriesString()).toEqual(
      newObjectsInv.entriesString(),
    );
  });

  test("URI transform works correctly", () => {
    const preamble = `# Simple preamble\n`;
    // Use nonsense transform function to check things are actually changing
    const transformFunction = (x: string) => x.replaceAll("i", "a");
    const entries: ObjectsInvEntry[] = [
      {
        name: "qiskit_ibm_runtime.RuntimeJob.job_id",
        domainAndRole: "py:method",
        priority: "1",
        uri: "qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.job_id",
        dispname: "-",
      },
      {
        name: "search",
        domainAndRole: "std:label",
        priority: "-1",
        uri: "search.html",
        dispname: "Search Page",
      },
      {
        name: "release notes_ignis_0.5.0",
        domainAndRole: "std:label",
        priority: "-1",
        uri: "legacy_release_notes.html#release-notes-ignis-0-5-0",
        dispname: "Ignis 0.5.0",
      },
    ];

    const objectsInv = new ObjectsInv(preamble, entries);
    objectsInv.updateUris(transformFunction);
    expect(objectsInv.entries.map((i) => i.uri)).toEqual([
      "qaskat_abm_runtame.RuntameJob#qaskat_abm_runtame.RuntameJob.job_ad",
      "search",
      "legacy_release_notes#release-notes-agnas-0-5-0",
    ]);
  });
});
