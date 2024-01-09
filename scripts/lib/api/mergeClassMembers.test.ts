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

import { mergeClassMembers } from "./mergeClassMembers";

describe("mergeClassMembers", () => {
  test("merge class members", async () => {
    const results: Parameters<typeof mergeClassMembers>[0] = [
      {
        markdown: `## Attributes

|                                                                                                                                                                                                         |                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| [\`RuntimeOptions.backend\`](qiskit_ibm_runtime.RuntimeOptions.backend#qiskit_ibm_runtime.RuntimeOptions.backend "qiskit_ibm_runtime.RuntimeOptions.backend")                                             |                 |

## Methods

|                                                                                                                                                                          |                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [\`RuntimeOptions.validate\`](qiskit_ibm_runtime.RuntimeOptions.validate#qiskit_ibm_runtime.RuntimeOptions.validate "qiskit_ibm_runtime.RuntimeOptions.validate")(channel) | Validate options. |`,
        meta: {
          apiType: "class",
          apiName: "RuntimeOptions",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeOptions",
        images: [],
        isReleaseNotes: false,
      },
      {
        markdown: `# RuntimeOptions.backend

\`Optional[str] = None\`
`,
        meta: {
          apiType: "attribute",
          apiName: "RuntimeOptions.backend",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeOptions.backend",
        images: [],
        isReleaseNotes: false,
      },
      {
        markdown: `# RuntimeOptions.circuits

\`Optional[str] = None\`
`,
        meta: {
          apiType: "property",
          apiName: "RuntimeOptions.circuits",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeOptions.circuits",
        images: [],
        isReleaseNotes: false,
      },
      {
        markdown: `
# RuntimeOptions.validate

\`RuntimeOptions.validate(channel)\`

Validate options.

*   Parameters:

    **channel** (\`str\`) – channel type.

*   Raises:

    **IBMInputValueError** – If one or more option is invalid.

*   Return type:

    \`None\`
          `,
        meta: {
          apiType: "method",
          apiName: "RuntimeOptions.backend",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeOptions.validate",
        images: [],
        isReleaseNotes: false,
      },
    ];
    const merged = await mergeClassMembers(results);
    expect(merged.find((item) => item.meta.apiType === "class")?.markdown)
      .toMatchInlineSnapshot(`
        "## Attributes

        ### RuntimeOptions.backend

        \`Optional[str] = None\`

        ### RuntimeOptions.circuits

        \`Optional[str] = None\`

        ## Methods

        ### RuntimeOptions.validate

        \`RuntimeOptions.validate(channel)\`

        Validate options.

        *   Parameters:

            **channel** (\`str\`) – channel type.

        *   Raises:

            **IBMInputValueError** – If one or more option is invalid.

        *   Return type:

            \`None\`
        "
      `);
    expect(merged.length).toEqual(1);
  });
});
