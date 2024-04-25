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
import type { TocGroupingEntry } from "./TocGrouping";

const DEFAULT_ARGS = {
  markdown: "",
  images: [],
  isReleaseNotes: false,
};

describe("generateToc", () => {
  test("generate a basic toc", () => {
    const toc = generateToc(Pkg.mock({}), [
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime",
        },
        url: "/docs/runtime",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime.options",
        },
        url: "/docs/options",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime.options.submodule",
        },
        url: "/docs/qiskit_ibm_runtime.options.submodule",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Sampler" },
        url: "/docs/qiskit_ibm_runtime.Sampler",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "method", apiName: "Sampler.run" },
        url: "/docs/qiskit_ibm_runtime.Sampler.run",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Estimator" },
        url: "/docs/qiskit_ibm_runtime.Estimator",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class" },
        url: "/docs/qiskit_ibm_runtime.NoName",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Options" },
        url: "docs/qiskit_ibm_runtime.options.Options",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "function",
          apiName: "runSomething",
        },
        url: "docs/qiskit_ibm_runtime.runSomething",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "qiskit_ibm_runtime.single",
        },
        url: "/docs/single",
        ...DEFAULT_ARGS,
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
            "title": "qiskit_ibm_runtime.options.submodule",
            "url": "/docs/qiskit_ibm_runtime.options.submodule",
          },
          {
            "title": "qiskit_ibm_runtime.single",
            "url": "/docs/single",
          },
          {
            "title": "Release notes",
            "url": "/api/my-quantum-project/release-notes",
          },
        ],
        "collapsed": true,
        "title": "My Quantum Project",
      }
    `);
  });

  test("TOC with grouped modules", () => {
    // This ordering is intentional.
    const topLevelEntries: TocGroupingEntry[] = [
      { name: "my_project", kind: "module" },
      { name: "Group 2", kind: "section" },
      { name: "Group 1", kind: "section" },
      // Ensure we can handle unused entries.
      { name: "unused_module", kind: "module" },
      { name: "Unused section", kind: "section" },
    ];
    const tocGrouping = {
      entries: topLevelEntries,
      moduleToSection: (module: string) =>
        module == "my_project.module" ? "Group 1" : "Group 2",
    };

    const toc = generateToc(Pkg.mock({ tocGrouping }), [
      {
        meta: {
          apiType: "module",
          apiName: "my_project",
        },
        url: "/docs/my_project",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_project.module",
        },
        url: "/docs/my_project.module",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_project.module.submodule",
        },
        url: "/docs/my_project.module.submodule",
        ...DEFAULT_ARGS,
      },
    ]);
    expect(toc).toEqual({
      collapsed: true,
      title: "My Quantum Project",
      children: [
        {
          title: "my_project",
          url: "/docs/my_project",
        },
        {
          title: "Group 2",
          children: [
            {
              title: "my_project.module.submodule",
              url: "/docs/my_project.module.submodule",
            },
          ],
        },
        {
          title: "Group 1",
          children: [
            {
              title: "my_project.module",
              url: "/docs/my_project.module",
            },
          ],
        },
        {
          title: "Release notes",
          url: "/api/my-quantum-project/release-notes",
        },
      ],
    });
  });

  test("TOC with distinct release note files", () => {
    const toc = generateToc(
      Pkg.mock({
        releaseNoteEntries: [
          { title: "0.39", url: "/docs/runtime/release-notes/0.39" },
          { title: "0.38", url: "/docs/runtime/release-notes/0.38" },
        ],
      }),
      [
        {
          ...DEFAULT_ARGS,
          meta: {
            apiType: "module",
            apiName: "qiskit_ibm_runtime",
          },
          url: "/docs/runtime/qiskit_ibm_runtime",
          isReleaseNotes: true,
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
        "title": "My Quantum Project",
      }
    `);
  });

  test("generate a toc without modules", () => {
    const toc = generateToc(Pkg.mock({}), [
      {
        meta: { apiType: "class", apiName: "Sampler" },
        url: "/docs/qiskit_ibm_runtime.Sampler",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "method", apiName: "Sampler.run" },
        url: "/docs/qiskit_ibm_runtime.Sampler.run",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Estimator" },
        url: "/docs/qiskit_ibm_runtime.Estimator",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class" },
        url: "/docs/qiskit_ibm_runtime.NoName",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Options" },
        url: "docs/qiskit_ibm_runtime.options.Options",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "function",
          apiName: "runSomething",
        },
        url: "docs/qiskit_ibm_runtime.runSomething",
        ...DEFAULT_ARGS,
      },
    ]);

    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "title": "Release notes",
            "url": "/api/my-quantum-project/release-notes",
          },
        ],
        "collapsed": true,
        "title": "My Quantum Project",
      }
    `);
  });
});
