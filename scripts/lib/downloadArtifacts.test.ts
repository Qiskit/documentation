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
import { getArtifactID } from "./downloadArtifacts";

describe("Test the extraction of the artifact ID from a URL", () => {
  test("Pass the full URL of the artifact", () => {
    const artifactID = getArtifactID("https://github.com/Qiskit/qiskit/suites/17881600359/artifacts/1026798160");
    expect(artifactID).toEqual("1026798160");
  });

  test("Pass an artifact ID", () => {
    const artifactID = getArtifactID("1026798160");
    expect(artifactID).toEqual("1026798160");
  });
});