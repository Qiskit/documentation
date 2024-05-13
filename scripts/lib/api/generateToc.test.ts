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
import { Pkg, ReleaseNotesConfig } from "./Pkg";
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
          apiName: "my_quantum_project",
        },
        url: "/api/my-quantum-project",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project.options",
        },
        url: "/api/my-quantum-project/options",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project.options.submodule",
        },
        url: "/api/my-quantum-project/my_quantum_project.options.submodule",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Sampler" },
        url: "/api/my-quantum-project/my_quantum_project.Sampler",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "method", apiName: "Sampler.run" },
        url: "/api/my-quantum-project/my_quantum_project.Sampler.run",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Estimator" },
        url: "/api/my-quantum-project/my_quantum_project.Estimator",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class" },
        url: "/api/my-quantum-project/my_quantum_project.NoName",
        ...DEFAULT_ARGS,
      },
      {
        meta: { apiType: "class", apiName: "Options" },
        url: "docs/my-quantum-project/my_quantum_project.options.Options",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "function",
          apiName: "runSomething",
        },
        url: "docs/my-quantum-project/my_quantum_project.runSomething",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project.single",
        },
        url: "/api/my-quantum-project/single",
        ...DEFAULT_ARGS,
      },
    ]);

    expect(toc).toEqual({
      children: [
        {
          title: "my_quantum_project",
          url: "/api/my-quantum-project",
        },
        {
          title: "my_quantum_project.options",
          url: "/api/my-quantum-project/options",
        },
        {
          title: "my_quantum_project.options.submodule",
          url: "/api/my-quantum-project/my_quantum_project.options.submodule",
        },
        {
          title: "my_quantum_project.single",
          url: "/api/my-quantum-project/single",
        },
        {
          title: "Release notes",
          url: "/api/my-quantum-project/release-notes",
        },
      ],
      collapsed: true,
      title: "My Quantum Project",
    });
  });

  test("TOC with grouped modules", () => {
    // This ordering is intentional.
    const topLevelEntries: TocGroupingEntry[] = [
      {
        moduleId: "my_quantum_project",
        title: "API index (custom)",
        kind: "module",
      },
      { name: "Group 2", kind: "section" },
      { name: "Group 1", kind: "section" },
      {
        moduleId: "my_quantum_project.another",
        title: "dedicated module",
        kind: "module",
      },
      // Ensure we can handle unused entries.
      { moduleId: "unused_module", title: "unused", kind: "module" },
      { name: "Unused section", kind: "section" },
    ];
    const tocGrouping = {
      entries: topLevelEntries,
      moduleToSection: (module: string) =>
        module == "my_quantum_project.module" ? "Group 1" : "Group 2",
    };

    const toc = generateToc(Pkg.mock({ tocGrouping }), [
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project",
        },
        url: "/api/my-quantum-project",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project.module",
        },
        url: "/api/my-quantum-project/my_quantum_project.module",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project.module.submodule",
        },
        url: "/api/my-quantum-project/my_quantum_project.module.submodule",
        ...DEFAULT_ARGS,
      },
      {
        meta: {
          apiType: "module",
          apiName: "my_quantum_project.another",
        },
        url: "/api/my-quantum-project/my_quantum_project.another",
        ...DEFAULT_ARGS,
      },
    ]);
    expect(toc).toEqual({
      collapsed: true,
      title: "My Quantum Project",
      children: [
        {
          title: "API index (custom)",
          url: "/api/my-quantum-project",
        },
        {
          title: "Group 2",
          children: [
            {
              title: "my_quantum_project.module.submodule",
              url: "/api/my-quantum-project/my_quantum_project.module.submodule",
            },
          ],
        },
        {
          title: "Group 1",
          children: [
            {
              title: "my_quantum_project.module",
              url: "/api/my-quantum-project/my_quantum_project.module",
            },
          ],
        },
        {
          title: "dedicated module",
          url: "/api/my-quantum-project/my_quantum_project.another",
        },
        {
          title: "Release notes",
          url: "/api/my-quantum-project/release-notes",
        },
      ],
    });
  });

  test("TOC with separate release note files", () => {
    const toc = generateToc(
      Pkg.mock({
        releaseNotesConfig: new ReleaseNotesConfig({
          separatePagesVersions: ["0.39", "0.38"],
        }),
      }),
      [
        {
          ...DEFAULT_ARGS,
          meta: {
            apiType: "module",
            apiName: "my_quantum_project",
          },
          url: "/api/my-quantum-project",
          isReleaseNotes: true,
        },
      ],
    );

    expect(toc).toEqual({
      children: [
        {
          title: "my_quantum_project",
          url: "/api/my-quantum-project",
        },
        {
          children: [
            {
              title: "0.39",
              url: "/api/my-quantum-project/release-notes/0.39",
            },
            {
              title: "0.38",
              url: "/api/my-quantum-project/release-notes/0.38",
            },
          ],
          title: "Release notes",
        },
      ],
      collapsed: true,
      title: "My Quantum Project",
    });
  });

  test("generate a toc without modules and releaes notes", () => {
    const toc = generateToc(
      Pkg.mock({
        releaseNotesConfig: new ReleaseNotesConfig({ enabled: false }),
      }),
      [
        {
          meta: { apiType: "class", apiName: "Sampler" },
          url: "/api/my-quantum-project/my_quantum_project.Sampler",
          ...DEFAULT_ARGS,
        },
        {
          meta: { apiType: "method", apiName: "Sampler.run" },
          url: "/api/my-quantum-project/my_quantum_project.Sampler.run",
          ...DEFAULT_ARGS,
        },
        {
          meta: { apiType: "class", apiName: "Estimator" },
          url: "/api/my-quantum-project/my_quantum_project.Estimator",
          ...DEFAULT_ARGS,
        },
        {
          meta: { apiType: "class" },
          url: "/api/my-quantum-project/my_quantum_project.NoName",
          ...DEFAULT_ARGS,
        },
        {
          meta: { apiType: "class", apiName: "Options" },
          url: "docs/my_quantum_project.options.Options",
          ...DEFAULT_ARGS,
        },
        {
          meta: {
            apiType: "function",
            apiName: "runSomething",
          },
          url: "docs/my_quantum_project.runSomething",
          ...DEFAULT_ARGS,
        },
      ],
    );

    expect(toc).toEqual({
      children: [
        {
          title: "API index",
          url: "/api/my-quantum-project",
        },
      ],
      collapsed: true,
      title: "My Quantum Project",
    });
  });
});
