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

import { generateToc } from "./generateToc";
import { Pkg } from "./Pkg";

describe("generateToc", () => {
  test("generate a toc", () => {
    const toc = generateToc(pkg, [
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime",
        },
        url: "/docs/runtime",
      },
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime.options",
        },
        url: "/docs/options",
      },
      {
        meta: { apiType: "class", apiName: "Sampler" },
        url: "/docs/qiskit_ibm_runtime.Sampler",
      },
      {
        meta: { apiType: "method", apiName: "Sampler.run" },
        url: "/docs/qiskit_ibm_runtime.Sampler.run",
      },
      {
        meta: { apiType: "class", apiName: "Estimator" },
        url: "/docs/qiskit_ibm_runtime.Estimator",
      },
      {
        meta: { apiType: "class" },
        url: "/docs/qiskit_ibm_runtime.NoName",
      },
      {
        meta: { apiType: "class", apiName: "Options" },
        url: "docs/qiskit_ibm_runtime.options.Options",
      },
      {
        meta: {
          apiType: "function",
          apiName: "runSomething",
        },
        url: "docs/qiskit_ibm_runtime.runSomething",
      },
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime.single",
        },
        url: "/docs/single",
      },
    ]);

    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "title": "qiskit_ibm_runtime",
            "url": "/docs/runtime",
          },
          {
            "title": "qiskit_ibm_runtime.options",
            "url": "/docs/options",
          },
          {
            "title": "qiskit_ibm_runtime.single",
            "url": "/docs/single",
          },
          {
            "title": "Release notes",
            "url": "/api/qiskit_ibm_runtime/release-notes",
          },
        ],
        "collapsed": true,
        "title": "Qiskit Runtime IBM Client",
      }
    `);
  });

  test("TOC with distinct release note files", () => {
    const toc = generateToc(
      {
        ...pkg,
        releaseNoteEntries: [
          { title: "0.39", url: "/docs/runtime/release-notes/0.39" },
          { title: "0.38", url: "/docs/runtime/release-notes/0.38" },
        ],
      },
      [
        {
          meta: {
            apiType: "module",
            apiName: "qiskit_ibm_runtime",
          },
          url: "/docs/runtime/qiskit_ibm_runtime",
        },
      ],
    );

    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "title": "qiskit_ibm_runtime",
            "url": "/docs/runtime/qiskit_ibm_runtime",
          },
          {
            "children": [
              {
                "title": "0.39",
                "url": "/docs/runtime/release-notes/0.39",
              },
              {
                "title": "0.38",
                "url": "/docs/runtime/release-notes/0.38",
              },
            ],
            "title": "Release notes",
          },
        ],
        "collapsed": true,
        "title": "Qiskit Runtime IBM Client",
      }
    `);
  });
});

const pkg = {
  title: "Qiskit Runtime IBM Client",
  name: "qiskit_ibm_runtime",
  version: "1.0.0",
  versionWithoutPatch: "1.0",
  releaseNoteEntries: [],
  historical: false,
} as unknown as Pkg;
