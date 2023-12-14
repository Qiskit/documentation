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
import { ObjectsInv } from "./objectsInv";
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

    const expectedLines: [number, string][] = [
      [10, "stubs/qiskit.algorithms.AlgorithmJob.html#$"],
      [88, "stubs/qiskit.algorithms.FasterAmplitudeEstimation.html#$"],
      [107, "stubs/qiskit.algorithms.Grover.html#$"],
      [1419, "apidoc/assembler.html#$"],
    ];
    for (const [index, value] of expectedLines) {
      expect(objectsInv.entries[index].uri).toMatch(value);
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

  afterAll(async () => {
    if (await stat(TEMP_FILE)) {
      await unlink(TEMP_FILE);
    }
  });
});
