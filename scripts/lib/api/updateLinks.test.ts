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

import { updateLinks, normalizeUrl, relativizeLink } from "./updateLinks";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

describe("updateLinks", () => {
  test("update links", async () => {
    const data: HtmlToMdResultWithUrl[] = [
      {
        markdown: `
[link1](qiskit_ibm_runtime.RuntimeJob)
[link2](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob)
[link3](qiskit_ibm_runtime.RuntimeJob.job#wut)
[link4](../stubs/qiskit_ibm_runtime.RuntimeJob)
[link5](../apidocs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob)
[link6](qiskit_ibm_runtime.RuntimeJob)
[link7](#qiskit_ibm_runtime.RuntimeJob.job)
[link8](https://qiskit.org/documentation/apidoc/algorithms.html)
[link9](https://qiskit.org/documentation/stubs/qiskit.circuit.BreakLoopOp.html#assemble)
          `,
        meta: {
          apiType: "class",
          apiName: "qiskit_ibm_runtime.RuntimeJob",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
        images: [],
        isReleaseNotes: false,
      },
      {
        markdown: `
[run](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.run)
          `,
        meta: {
          apiType: "class",
          apiName: "qiskit_ibm_runtime.Sampler",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
        images: [],
        isReleaseNotes: false,
      },
    ];

    const objectsInvEntries = [
      "stubs/qiskit.algorithms.Eigensolver#qiskit.algorithms.Eigensolver",
      "stubs/qiskit.algorithms.EstimationProblem.html#qiskit.algorithms.EstimationProblem.state_preparation",
      "stubs/qiskit.algorithms.FasterAmplitudeEstimationResult.html#qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability",
      "stubs/qiskit_ibm_runtime.QiskitRuntimeService",
      "stubs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.submit",
      "stubs/qiskit_ibm_runtime.RuntimeEncoder#qiskit_ibm_runtime.RuntimeEncoder",
      "stubs/qiskit_ibm_runtime.options.Options#options",
      "tutorials/qaoa_with_primitives",
      "tutorials/vqe_with_estimator#Step-1:-Map-classical-inputs-to-a-quantum-problem",
      "qiskit.algorithms.gradients.LinCombEstimatorGradient#SUPPORTED_GATES",
      "stubs/qiskit_ibm_provider.transpiler.passes.scheduling.DynamicCircuitInstructionDurations#MEASURE_PATCH_CYCLES",
    ].map((uri) => {
      return {
        name: "-",
        domainAndRole: "-",
        priority: "-",
        uri,
        dispname: "-",
      };
    });
    const objectsInv = new ObjectsInv(
      "# Here's a simple preamble",
      objectsInvEntries,
    );

    await updateLinks(data, objectsInv);
    expect(data).toMatchInlineSnapshot(`
      [
        {
          "images": [],
          "isReleaseNotes": false,
          "markdown": "[link1](qiskit_ibm_runtime.RuntimeJob)
      [link2](qiskit_ibm_runtime.RuntimeJob)
      [link3](qiskit_ibm_runtime.RuntimeJob#job)
      [link4](qiskit_ibm_runtime.RuntimeJob)
      [link5](qiskit_ibm_runtime.RuntimeJob)
      [link6](qiskit_ibm_runtime.RuntimeJob)
      [link7](#qiskit_ibm_runtime.RuntimeJob.job)
      [link8](/api/qiskit/algorithms)
      [link9](/api/qiskit/qiskit.circuit.BreakLoopOp#assemble)
      ",
          "meta": {
            "apiName": "qiskit_ibm_runtime.RuntimeJob",
            "apiType": "class",
          },
          "url": "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
        },
        {
          "images": [],
          "isReleaseNotes": false,
          "markdown": "[run](qiskit_ibm_runtime.RuntimeJob#run)
      ",
          "meta": {
            "apiName": "qiskit_ibm_runtime.Sampler",
            "apiType": "class",
          },
          "url": "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
        },
      ]
    `);
    expect(objectsInv.entries.map((e) => e.uri)).toMatchInlineSnapshot(`
      [
        "qiskit.algorithms.Eigensolver#qiskit.algorithms.Eigensolver",
        "qiskit.algorithms.EstimationProblem#qiskit.algorithms.EstimationProblem.state_preparation",
        "qiskit.algorithms.FasterAmplitudeEstimationResult#qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability",
        "qiskit_ibm_runtime.QiskitRuntimeService",
        "qiskit_ibm_runtime.RuntimeJob#submit",
        "qiskit_ibm_runtime.RuntimeEncoder#qiskit_ibm_runtime.RuntimeEncoder",
        "qiskit_ibm_runtime.options.Options#options",
        "tutorials/qaoa_with_primitives",
        "tutorials/vqe_with_estimator#step-1:-map-classical-inputs-to-a-quantum-problem",
        "qiskit.algorithms.gradients.LinCombEstimatorGradient#supported_gates",
        "qiskit_ibm_provider.transpiler.passes.scheduling.DynamicCircuitInstructionDurations#measure_patch_cycles",
      ]
    `);
  });
});

test("normalizeUrl()", () => {
  const urls = [
    `qiskit_ibm_runtime.RuntimeJob`,
    `qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob`,
    `qiskit_ibm_runtime.RuntimeJob.job#wut`,
    `../stubs/qiskit_ibm_runtime.RuntimeJob`,
    `../apidocs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob`,
    `qiskit_ibm_runtime.RuntimeJob`,
    `#qiskit_ibm_runtime.RuntimeJob.job`,
    `qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.run`,
    `stubs/qiskit_ibm_runtime.RuntimeJob`,
  ];
  const resultsByName: { [key: string]: HtmlToMdResultWithUrl } = {
    "qiskit_ibm_runtime.RuntimeJob": {
      markdown: "",
      meta: {
        apiType: "class",
        apiName: "qiskit_ibm_runtime.RuntimeJob",
      },
      url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
      images: [],
      isReleaseNotes: false,
    },
    "qiskit_ibm_runtime.Sampler": {
      markdown: "",
      meta: {
        apiType: "class",
        apiName: "qiskit_ibm_runtime.Sampler",
      },
      url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
      images: [],
      isReleaseNotes: false,
    },
  };
  const itemNames = new Set(["qiskit_ibm_runtime.RuntimeJob"]);

  const newUrls = urls.map((url) =>
    normalizeUrl(url, resultsByName, itemNames),
  );
  expect(newUrls).toMatchInlineSnapshot(`
      [
        "qiskit_ibm_runtime.RuntimeJob",
        "qiskit_ibm_runtime.RuntimeJob",
        "qiskit_ibm_runtime.RuntimeJob#job",
        "qiskit_ibm_runtime.RuntimeJob",
        "qiskit_ibm_runtime.RuntimeJob",
        "qiskit_ibm_runtime.RuntimeJob",
        "#qiskit_ibm_runtime.RuntimeJob.job",
        "qiskit_ibm_runtime.RuntimeJob#run",
        "qiskit_ibm_runtime.RuntimeJob",
      ]
    `);
});

describe("relativizeLink()", () => {
  test.each([
    "https://ibm.com",
    "https://qiskit.org/ecosystem/nature",
    "https://qiskit.org/documentation/index.html",
    "https://docs.quantum.ibm.com", // Note there is no `/` at the end.
  ])("ignore irrelevant links", (input) => {
    expect(relativizeLink({ url: input })).toBeUndefined();
  });

  test.each([
    [
      "https://qiskit.org/documentation/apidoc/algorithms.html",
      "/api/qiskit/algorithms",
    ],
    [
      "https://qiskit.org/documentation/stubs/qiskit.circuit.BreakLoopOp.html",
      "/api/qiskit/qiskit.circuit.BreakLoopOp",
    ],
    [
      "https://qiskit.org/documentation/apidoc/qiskit.circuit.BreakLoopOp.html#method",
      "/api/qiskit/qiskit.circuit.BreakLoopOp#method",
    ],
    [
      "https://qiskit.org/documentation/apidoc/qiskit.circuit.BreakLoopOp.html#qiskit.circuit.BreakLoopOp",
      "/api/qiskit/qiskit.circuit.BreakLoopOp",
    ],
  ])("relativize qiskit.org Qiskit API links", (input, expected) => {
    expect(relativizeLink({ url: input })).toEqual({ url: expected });
  });

  test.each([
    ["https://docs.quantum.ibm.com/run", "/run"],
    ["https://docs.quantum.ibm.com/api/qiskit/utils", "/api/qiskit/utils"],
    ["https://docs.quantum-computing.ibm.com/run", "/run"],
  ])("relativize docs.quantum.ibm.com links", (input, expected) => {
    expect(relativizeLink({ url: input })).toEqual({ url: expected });
  });

  test("update link text when the same as the URL", () => {
    const url = "https://qiskit.org/documentation/apidoc/algorithms.html";
    expect(relativizeLink({ url, text: url })?.text).toEqual("algorithms");
    expect(relativizeLink({ url, text: "my text" })?.text).toBeUndefined();
  });
});
