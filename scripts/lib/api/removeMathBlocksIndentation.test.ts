// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
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

test("removeMathBlocksIndentation()", async () => {
  const results = [
    {
      markdown: `
<Class>
    ## Methods

    ### decomp0
  
    <Admonition title="Note" type="note">
    In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_2 and q\_1. Thus a textbook matrix for this gate will be:

    \`\`\`python
         ┌───┐
    q_0: ┤ X ├
         └─┬─┘
    q_1: ──■──
           │
    q_2: ──■──
    \`\`\`

    $$
    \begin{split}CCX\ q_2, q_1, q_0 =
        I \otimes I \otimes |0 \rangle \langle 0| + CX \otimes |1 \rangle \langle 1| =
        \begin{pmatrix}
            1 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
            0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
            0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\
            0 & 0 & 0 & 1 & 0 & 0 & 0 & 0\\
            0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\
            0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
            0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\
            0 & 0 & 0 & 0 & 0 & 0 & 1 & 0
        \end{pmatrix}\end{split}
    $$
  </Admonition>
    
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
  
    <Admonition title="Note" type="note">
    In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_2 and q\_1. Thus a textbook matrix for this gate will be:

    \`\`\`python
         ┌───┐
    q_0: ┤ X ├
         └─┬─┘
    q_1: ──■──
           │
    q_2: ──■──
    \`\`\`

$$
\begin{split}CCX\ q_2, q_1, q_0 =
I \otimes I \otimes |0 \rangle \langle 0| + CX \otimes |1 \rangle \langle 1| =
\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0
\end{pmatrix}\end{split}
$$
  </Admonition>
    
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
