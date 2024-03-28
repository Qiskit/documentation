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
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

describe("mergeClassMembers", () => {
  test("merge class members", async () => {
    const results: HtmlToMdResultWithUrl[] = [
      {
        markdown: `<Class id='qiskit_ibm_runtime.RuntimeOptions'>
  ## Attributes

  |                                                                                                                                                                                                         |                 |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
  | [\`RuntimeOptions.backend\`](qiskit_ibm_runtime.RuntimeOptions.backend#qiskit_ibm_runtime.RuntimeOptions.backend "qiskit_ibm_runtime.RuntimeOptions.backend")                                             |                 |

  ## Methods

  |                                                                                                                                                                          |                   |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
  | [\`RuntimeOptions.validate\`](qiskit_ibm_runtime.RuntimeOptions.validate#qiskit_ibm_runtime.RuntimeOptions.validate "qiskit_ibm_runtime.RuntimeOptions.validate")(channel) | Validate options. |
</Class>`,
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
<Attribute id='qiskit_ibm_runtime.RuntimeOptions.backend' signature='Optional[str] = None' />
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

        <Attribute id='qiskit_ibm_runtime.RuntimeOptions.circuits' signature='Optional[str] = None' />
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

<Function id='qiskit_ibm_runtime.RuntimeOptions.validate' signature='RuntimeOptions.validate(channel)'>
  Validate options.

  *   Parameters:

      **channel** (\`str\`) – channel type.

  *   Raises:

      **IBMInputValueError** – If one or more option is invalid.

  *   Return type:

      \`None\`
</Function>
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
        "<Class id="qiskit_ibm_runtime.RuntimeOptions">
          ## Attributes

          ### RuntimeOptions.backend

          <Attribute id="qiskit_ibm_runtime.RuntimeOptions.backend" signature="Optional[str] = None" />

          ### RuntimeOptions.circuits

          <Attribute id="qiskit_ibm_runtime.RuntimeOptions.circuits" signature="Optional[str] = None" />

          ## Methods

          ### RuntimeOptions.validate

          <Function id="qiskit_ibm_runtime.RuntimeOptions.validate" signature="RuntimeOptions.validate(channel)">
            Validate options.

            *   Parameters:

                **channel** (\`str\`) – channel type.

            *   Raises:

                **IBMInputValueError** – If one or more option is invalid.

            *   Return type:

                \`None\`
          </Function>
        </Class>
        "
      `);
    expect(merged.length).toEqual(1);
  });

  test("merge class with methods already inlined", async () => {
    const results: HtmlToMdResultWithUrl[] = [
      {
        markdown: `## Attributes

|                                                                                                                                                                                                         |                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| [\`RuntimeOptions.backend\`](#qiskit_ibm_runtime.RuntimeOptions.backend "qiskit_ibm_runtime.RuntimeOptions.backend")                                             |                 |

## Methods

|                                                                                                                                                                          |                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [\`RuntimeOptions.validate\`](#qiskit_ibm_runtime.RuntimeOptions.validate "qiskit_ibm_runtime.RuntimeOptions.validate")(channel) | Validate options. |

\`property backend\`

Inlined attribute

\`validate()\`

Inlined method
`,
        meta: {
          apiType: "class",
          apiName: "RuntimeOptions",
        },
        url: "/docs/api/qiskit-ibm-runtime/stubs/qiskit_ibm_runtime.RuntimeOptions",
        images: [],
        isReleaseNotes: false,
      },
    ];
    const merged = await mergeClassMembers(results);
    expect(merged.find((item) => item.meta.apiType === "class")?.markdown)
      .toEqual(`## Attributes

|                                                                                                                    |   |
| ------------------------------------------------------------------------------------------------------------------ | - |
| [\`RuntimeOptions.backend\`](#qiskit_ibm_runtime.RuntimeOptions.backend "qiskit_ibm_runtime.RuntimeOptions.backend") |   |

## Methods

|                                                                                                                                |                   |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [\`RuntimeOptions.validate\`](#qiskit_ibm_runtime.RuntimeOptions.validate "qiskit_ibm_runtime.RuntimeOptions.validate")(channel) | Validate options. |

\`property backend\`

Inlined attribute

\`validate()\`

Inlined method
`);
    expect(merged.length).toEqual(1);
  });

  test("keep members without an owning class", async () => {
    // Regression test for https://github.com/Qiskit/documentation/issues/814.
    const results: HtmlToMdResultWithUrl[] = [
      {
        markdown:
          '<span id="baseestimator" />\n\n# BaseEstimator\n\nalias of `BaseEstimatorV1`\n',
        meta: {
          apiType: "attribute",
          apiName: "qiskit.primitives.BaseEstimator",
        },
        images: [],
        isReleaseNotes: false,
        url: "/docs/api/qiskit/qiskit.primitives.BaseEstimator",
      },
    ];
    const merged = await mergeClassMembers(results);
    expect(merged).toEqual(results);
  });
});
