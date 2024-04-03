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

import { expect, test } from "@jest/globals";

import removeMathBlocksIndentation from "./removeMathBlocksIndentation";

test("dedupeHtmlIds()", async () => {
  const results = [
    {
      markdown: `
<Class>
    ## Methods

    ### decomp0
  
    <Function id="qiskit.synthesis.TwoQubitBasisDecomposer.decomp0" name="decomp0" signature="static decomp0(target)">
      Decompose target $\sim U_d(x, y, z)$ with $0$ uses of the basis gate. Result $U_r$ has trace:
  
      $$
        \\Big\\vert\\text{Tr}(U_r\\cdot U_\\text{target}^{\\dag})\\Big\\vert =
        4\\Big\vert (\\cos(x)\\cos(y)\\cos(z)+ j \\sin(x)\\sin(y)\\sin(z)\\Big\\vert
      $$
  
      which is optimal for all targets and bases
    </Function>

    <Function id="qiskit.synthesis.TwoQubitBasisDecomposer.num_basis_gates" name="num_basis_gates" signature="num_basis_gates(unitary)">
      Computes the number of basis gates needed in a decomposition of input unitary
    </Function>
</Class>
  `,
      meta: {},
      images: [],
      isReleaseNotes: false,
      url: "",
    },
  ];

  removeMathBlocksIndentation(results);

  expect(results).toEqual([
    {
      markdown: `
<Class>
    ## Methods

    ### decomp0
  
    <Function id="qiskit.synthesis.TwoQubitBasisDecomposer.decomp0" name="decomp0" signature="static decomp0(target)">
      Decompose target $\sim U_d(x, y, z)$ with $0$ uses of the basis gate. Result $U_r$ has trace:

$$
\\Big\\vert\\text{Tr}(U_r\\cdot U_\\text{target}^{\\dag})\\Big\\vert =
4\\Big\vert (\\cos(x)\\cos(y)\\cos(z)+ j \\sin(x)\\sin(y)\\sin(z)\\Big\\vert
$$
  
      which is optimal for all targets and bases
    </Function>

    <Function id="qiskit.synthesis.TwoQubitBasisDecomposer.num_basis_gates" name="num_basis_gates" signature="num_basis_gates(unitary)">
      Computes the number of basis gates needed in a decomposition of input unitary
    </Function>
</Class>
  `,
      meta: {},
      images: [],
      isReleaseNotes: false,
      url: "",
    },
  ]);
});
