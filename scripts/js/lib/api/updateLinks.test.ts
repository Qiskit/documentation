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
import { ObjectsInv } from "./objectsInv";

import {
  updateLinks,
  normalizeUrl,
  relativizeLink,
  updateSignatureLinks,
} from "./updateLinks.js";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";
import { SIGNATURE_PLACEHOLDER } from "./generateApiComponents";

const RESULTS_BY_NAME: { [key: string]: HtmlToMdResultWithUrl } = {
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
const ITEM_NAMES = new Set(["qiskit_ibm_runtime.RuntimeJob"]);

test.describe("updateLinks", () => {
  const data: HtmlToMdResultWithUrl[] = [
    {
      markdown: `
[link0](qiskit_ibm_runtime)
[link1](qiskit_ibm_runtime.RuntimeJob)
[link2](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob)
[link3](qiskit_ibm_runtime.RuntimeJob.job#wut)
[link4](../stubs/qiskit_ibm_runtime.RuntimeJob)
[link5](../apidocs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob)
[link6](../apidocs/qiskit_ibm_runtime.RuntimeJob#SOME_VAR)
[link7](qiskit_ibm_runtime.RuntimeJob)
[link8](#qiskit_ibm_runtime.RuntimeJob.job)
[link9](https://qiskit.org/documentation/apidoc/algorithms.html)
[link10](https://qiskit.org/documentation/stubs/qiskit.circuit.BreakLoopOp.html#assemble)
[link11](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.a_method)
[link12](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.InlineClass.another_method)
        `,
      meta: {
        apiType: "class",
        apiName: "qiskit_ibm_runtime.RuntimeJob",
      },
      url: "/docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeJob",
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
      url: "/docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeJob",
      images: [],
      isReleaseNotes: false,
    },
  ];
  const objectsInvEntries = [
    "stubs/qiskit.algorithms.Eigensolver#qiskit.algorithms.Eigensolver",
    "stubs/qiskit.algorithms.EstimationProblem.html#qiskit.algorithms.EstimationProblem.state_preparation",
    "stubs/qiskit.algorithms.FasterAmplitudeEstimationResult.html#qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability",
    "apidoc/qiskit_ibm_runtime#index",
    "stubs/qiskit_ibm_runtime.QiskitRuntimeService",
    "stubs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.submit",
    "stubs/qiskit_ibm_runtime.RuntimeEncoder#qiskit_ibm_runtime.RuntimeEncoder",
    "stubs/qiskit_ibm_runtime.options.Options#options",
    "qiskit.algorithms.gradients.LinCombEstimatorGradient#SUPPORTED_GATES",
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

  test("no kebab-case", async () => {
    await updateLinks(
      data,
      { kebabCaseAndShorten: false, pkgName: "qiskit-ibm-runtime" },
      objectsInv,
    );
    expect(data).toEqual([
      {
        images: [],
        isReleaseNotes: false,
        markdown: `[link0](qiskit_ibm_runtime)
[link1](qiskit_ibm_runtime.RuntimeJob)
[link2](qiskit_ibm_runtime.RuntimeJob)
[link3](qiskit_ibm_runtime.RuntimeJob#job)
[link4](qiskit_ibm_runtime.RuntimeJob)
[link5](qiskit_ibm_runtime.RuntimeJob)
[link6](qiskit_ibm_runtime.RuntimeJob#some_var)
[link7](qiskit_ibm_runtime.RuntimeJob)
[link8](#qiskit_ibm_runtime.RuntimeJob.job)
[link9](/api/qiskit/algorithms)
[link10](/api/qiskit/qiskit.circuit.BreakLoopOp#assemble)
[link11](qiskit_ibm_runtime.RuntimeJob#a_method)
[link12](qiskit_ibm_runtime.RuntimeJob#another_method)\n`,
        meta: {
          apiName: "qiskit_ibm_runtime.RuntimeJob",
          apiType: "class",
        },
        url: "/docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeJob",
      },
      {
        images: [],
        isReleaseNotes: false,
        markdown: "[run](qiskit_ibm_runtime.RuntimeJob#run)\n",
        meta: {
          apiName: "qiskit_ibm_runtime.Sampler",
          apiType: "class",
        },
        url: "/docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeJob",
      },
    ]);

    expect(objectsInv.entries.map((e) => e.uri)).toEqual([
      "qiskit.algorithms.Eigensolver#qiskit.algorithms.Eigensolver",
      "qiskit.algorithms.EstimationProblem#qiskit.algorithms.EstimationProblem.state_preparation",
      "qiskit.algorithms.FasterAmplitudeEstimationResult#qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability",
      "qiskit_ibm_runtime#index",
      "qiskit_ibm_runtime.QiskitRuntimeService",
      "qiskit_ibm_runtime.RuntimeJob#submit",
      "qiskit_ibm_runtime.RuntimeEncoder#qiskit_ibm_runtime.RuntimeEncoder",
      "qiskit_ibm_runtime.options.Options#options",
      "qiskit.algorithms.gradients.LinCombEstimatorGradient#supported_gates",
    ]);
  });

  test("kebab-case", async () => {
    await updateLinks(
      data,
      { kebabCaseAndShorten: true, pkgName: "qiskit-ibm-runtime" },
      objectsInv,
    );
    expect(data).toEqual([
      {
        images: [],
        isReleaseNotes: false,
        markdown: `[link0](qiskit-ibm-runtime)
[link1](runtime-job)
[link2](runtime-job)
[link3](runtime-job#job)
[link4](runtime-job)
[link5](runtime-job)
[link6](runtime-job#some_var)
[link7](runtime-job)
[link8](#qiskit_ibm_runtime.RuntimeJob.job)
[link9](/api/qiskit/algorithms)
[link10](/api/qiskit/qiskit.circuit.BreakLoopOp#assemble)
[link11](runtime-job#a_method)
[link12](runtime-job#another_method)\n`,
        meta: {
          apiName: "qiskit_ibm_runtime.RuntimeJob",
          apiType: "class",
        },
        url: "/docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeJob",
      },
      {
        images: [],
        isReleaseNotes: false,
        markdown: "[run](runtime-job#run)\n",
        meta: {
          apiName: "qiskit_ibm_runtime.Sampler",
          apiType: "class",
        },
        url: "/docs/api/qiskit-ibm-runtime/qiskit_ibm_runtime.RuntimeJob",
      },
    ]);

    expect(objectsInv.entries.map((e) => e.uri)).toEqual([
      "qiskit-algorithms-eigensolver#qiskit.algorithms.Eigensolver",
      "qiskit-algorithms-estimation-problem#qiskit.algorithms.EstimationProblem.state_preparation",
      "qiskit-algorithms-faster-amplitude-estimation-result#qiskit.algorithms.FasterAmplitudeEstimationResult.success_probability",
      "qiskit-ibm-runtime#index",
      "qiskit-runtime-service",
      "runtime-job#submit",
      "runtime-encoder#qiskit_ibm_runtime.RuntimeEncoder",
      "options-options#options",
      "qiskit-algorithms-gradients-lin-comb-estimator-gradient#supported_gates",
    ]);
  });
});

test("normalizeUrl()", () => {
  const urls = [
    `qiskit_ibm_runtime`,
    `qiskit_ibm_runtime.RuntimeJob`,
    `qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob`,
    `qiskit_ibm_runtime.RuntimeJob.job#wut`,
    `../stubs/qiskit_ibm_runtime.RuntimeJob`,
    `../apidocs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob`,
    `qiskit_ibm_runtime.RuntimeJob`,
    `#qiskit_ibm_runtime.RuntimeJob.job`,
    `qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob.run`,
    `stubs/qiskit_ibm_runtime.RuntimeJob`,
    `#_CPPv415qk_obs_identity8uint32_t`,
  ];

  const newUrls = urls.map((url) =>
    normalizeUrl(url, RESULTS_BY_NAME, ITEM_NAMES, {
      kebabCaseAndShorten: false,
      pkgName: "qiskit-ibm-runtime",
    }),
  );
  expect(newUrls).toEqual([
    "qiskit_ibm_runtime",
    "qiskit_ibm_runtime.RuntimeJob",
    "qiskit_ibm_runtime.RuntimeJob",
    "qiskit_ibm_runtime.RuntimeJob#job",
    "qiskit_ibm_runtime.RuntimeJob",
    "qiskit_ibm_runtime.RuntimeJob",
    "qiskit_ibm_runtime.RuntimeJob",
    "#qiskit_ibm_runtime.RuntimeJob.job",
    "qiskit_ibm_runtime.RuntimeJob#run",
    "qiskit_ibm_runtime.RuntimeJob",
    "#_cppv415qk_obs_identity8uint32_t",
  ]);

  const kebabResults = urls.map((url) =>
    normalizeUrl(url, RESULTS_BY_NAME, ITEM_NAMES, {
      kebabCaseAndShorten: true,
      pkgName: "qiskit-ibm-runtime",
    }),
  );
  expect(kebabResults).toEqual([
    "qiskit-ibm-runtime",
    "runtime-job",
    "runtime-job",
    "runtime-job#job",
    "runtime-job",
    "runtime-job",
    "runtime-job",
    "#qiskit_ibm_runtime.RuntimeJob.job",
    "runtime-job#run",
    "runtime-job",
    "#_cppv415qk_obs_identity8uint32_t",
  ]);
});

test.describe("relativizeLink()", () => {
  [
    "https://ibm.com",
    "https://qiskit.org/ecosystem/nature",
    "https://qiskit.org/documentation/index.html",
    "https://docs.quantum.ibm.com", // Note there is no `/` at the end.
  ].forEach((link) =>
    test(`ignore irrelevant links - ${link}`, () => {
      expect(relativizeLink({ url: link })).toBeUndefined();
    }),
  );

  [
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
  ].forEach(([input, expected]) =>
    test(`relativize qiskit.org Qiskit API links - ${input}`, () => {
      expect(relativizeLink({ url: input })).toEqual({ url: expected });
    }),
  );

  [
    ["https://docs.quantum.ibm.com/run", "/run"],
    ["https://docs.quantum.ibm.com/api/qiskit/utils", "/api/qiskit/utils"],
    ["https://docs.quantum-computing.ibm.com/run", "/run"],
  ].forEach(([input, expected]) =>
    test(`relativize docs.quantum.ibm.com links - ${input}`, () => {
      expect(relativizeLink({ url: input })).toEqual({ url: expected });
    }),
  );

  test("update link text when the same as the URL", () => {
    const url = "https://qiskit.org/documentation/apidoc/algorithms.html";
    expect(relativizeLink({ url, text: url })?.text).toEqual("algorithms");
    expect(relativizeLink({ url, text: "my text" })?.text).toBeUndefined();
  });
});

test.describe("updateSignatureLinks()", () => {
  const signaturesInput = (runtimeJobLink: string) => [
    {
      type: "mdxJsxAttribute",
      name: "signature",
      value: `method_with_links(arg1: [tuple[int, int]]([[SignatureLinkPlaceholder]]#anchor[[SignatureLinkPlaceholder]]), arg2: [My-arg]([[SignatureLinkPlaceholder]]${runtimeJobLink}[[SignatureLinkPlaceholder]]))`,
    },
    {
      type: "mdxJsxAttributeValueExpression",
      value:
        '["overloaded_func2(arg1: tuple[int, int], arg2: list[int], arg3: bool, arg4: set[[Electron]([[SignatureLinkPlaceholder]]#api_example.Electron[[SignatureLinkPlaceholder]])]) → None", "overloaded_func2(arg1: tuple[int, int], arg2: list[int], arg3: bool, arg4: set[[Electron]([[SignatureLinkPlaceholder]]#api_example.Electron[[SignatureLinkPlaceholder]])]) → None"]',
    },
  ];

  const signaturesExpected = (runtimeJobLink: string) => {
    return signaturesInput(runtimeJobLink).map((signature) => ({
      ...signature,
      value: signature.value.replaceAll(SIGNATURE_PLACEHOLDER, ""),
    }));
  };

  test("update signature links with `resultsByName` defined", () => {
    const signatures = signaturesInput("qiskit_ibm_runtime.RuntimeJob.job#wut");
    updateSignatureLinks(signatures, RESULTS_BY_NAME, ITEM_NAMES, {
      kebabCaseAndShorten: false,
      pkgName: "qiskit-ibm-runtime",
    });

    expect(signatures).toEqual(
      signaturesExpected("qiskit_ibm_runtime.RuntimeJob#job"),
    );
  });
  test("update signature links with `resultsByName` undefined", () => {
    const signatures = signaturesInput("qiskit_ibm_runtime.RuntimeJob.job#wut");
    updateSignatureLinks(signatures, {}, new Set<string>(), {
      kebabCaseAndShorten: false,
      pkgName: "qiskit-ibm-runtime",
    });

    expect(signatures).toEqual(
      signaturesExpected("qiskit_ibm_runtime.RuntimeJob.job#wut"),
    );
  });
});
