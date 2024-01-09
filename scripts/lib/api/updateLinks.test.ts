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
import { last } from "lodash";

import { updateLinks, updateUrl } from "./updateLinks";
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

    await updateLinks(data);
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
  });

  test("update links using a transform function", async () => {
    const data: HtmlToMdResultWithUrl[] = [
      {
        markdown: `
[link1](algorithms)
[link2](../apidocs/algorithms)
[link3](qiskit.algorithms.minimum_eigensolvers.VQE#qiskit.algorithms.minimum_eigensolvers.VQE)
[link3](../stubs/qiskit.algorithms.minimum_eigensolvers.VQE#qiskit.algorithms.minimum_eigensolvers.VQE)
[link7](#qiskit_ibm_runtime.RuntimeJob.job)
          `,
        meta: {
          apiType: "class",
          apiName: "qiskit_ibm_runtime.RuntimeJob",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
        images: [],
        isReleaseNotes: false,
      },
    ];

    await updateLinks(data, (link) => {
      let path = last(link.url.split("/"))!;
      if (path.includes("#")) {
        path = path.split("#").join(".html#");
      } else {
        path += ".html";
      }

      if (path?.startsWith("algorithms"))
        return { url: `http://qiskit.org/documentation/apidoc/${path}` };
      if (path?.startsWith("qiskit.algorithms."))
        return { url: `http://qiskit.org/documentation/stubs/${path}` };
    });
    expect(data).toMatchInlineSnapshot(`
      [
        {
          "images": [],
          "isReleaseNotes": false,
          "markdown": "[link1](http://qiskit.org/documentation/apidoc/algorithms.html)
      [link2](http://qiskit.org/documentation/apidoc/algorithms.html)
      [link3](http://qiskit.org/documentation/stubs/qiskit.algorithms.minimum_eigensolvers.VQE.html#qiskit.algorithms.minimum_eigensolvers.VQE)
      [link3](http://qiskit.org/documentation/stubs/qiskit.algorithms.minimum_eigensolvers.VQE.html#qiskit.algorithms.minimum_eigensolvers.VQE)
      [link7](#qiskit_ibm_runtime.RuntimeJob.job)
      ",
          "meta": {
            "apiName": "qiskit_ibm_runtime.RuntimeJob",
            "apiType": "class",
          },
          "url": "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeJob",
        },
      ]
    `);
  });
});

describe("updateUrl", () => {
  test("update url", async () => {
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

    const newUrls = urls.map((url) => updateUrl(url, resultsByName, itemNames));
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
});
