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

import { expect, test } from "@playwright/test";

import {
  extractEndpoints,
  generateObservabilityTable,
} from "./observabilityPage";

test("extract end points", () => {
  const sampleJson1 = JSON.stringify({
    paths: {
      "/v1/jobs": {
        get: {
          summary: "List jobs",
          "x-ibm-events": {
            events: [
              { name: "quantum-computing.job.read" },
              { name: "quantum-computing.job.list" },
            ],
          },
        },
      },
    },
  });

  const sampleJson2 = JSON.stringify({
    paths: {
      "/v1/users": {
        post: {
          summary: "Create user",
        },
      },
    },
  });

  const expected1 = [
    ["quantum-computing.job.list", "List jobs (`GET /v1/jobs`)"],
    ["quantum-computing.job.read", "List jobs (`GET /v1/jobs`)"],
  ];

  const expected2: Array<[string, string]> = [];

  const actual1 = extractEndpoints(sampleJson1);
  const actual2 = extractEndpoints(sampleJson2);
  expect(expected1).toEqual(actual1);
  expect(expected2).toEqual(actual2);
});

test("generate observability table", () => {
  const input: Array<[string, string]> = [
    ["quantum-computing.job.read", "List jobs (`GET /v1/jobs`)"],
    ["quantum-computing.job.create", "Run a job (`POST /v1/jobs`)"],
    ["quantum-computing.job.read", "List job details (`GET /v1/jobs/{id}`)"],
    ["quantum-computing.job.delete", "Delete a job (`DELETE /v1/jobs/{id}`)"],
    [
      "quantum-computing.job.read",
      "List job results (`GET /v1/jobs/{id}/results`)",
    ],
  ];
  const actual = generateObservabilityTable(input);

  const expectedOutput =
    "| Action | Triggered by |\n" +
    "| -- | -- |\n" +
    "| `quantum-computing.job.read` | List jobs (`GET /v1/jobs`) |\n" +
    "| `quantum-computing.job.create` | Run a job (`POST /v1/jobs`) |\n" +
    "| `quantum-computing.job.read` | List job details (`GET /v1/jobs/{id}`) |\n" +
    "| `quantum-computing.job.delete` | Delete a job (`DELETE /v1/jobs/{id}`) |\n" +
    "| `quantum-computing.job.read` | List job results (`GET /v1/jobs/{id}/results`) |\n";

  expect(actual).toBe(expectedOutput);
});
