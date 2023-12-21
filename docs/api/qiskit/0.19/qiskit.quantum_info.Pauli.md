---
title: Pauli
description: API reference for qiskit.quantum_info.Pauli
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Pauli
---

# Pauli

<span id="qiskit.quantum_info.Pauli" />

`Pauli(z=None, x=None, label=None)`

A simple class representing Pauli Operators.

The form is P\_zx = (-i)^dot(z,x) Z^z X^x where z and x are elements of Z\_2^n. That is, there are 4^n elements (no phases in this group).

For example, for 1 qubit P\_00 = Z^0 X^0 = I P\_01 = X P\_10 = Z P\_11 = -iZX = (-i) iY = Y

The overload \_\_mul\_\_ does not track the sign: P1\*P2 = Z^(z1+z2) X^(x1+x2) but sgn\_prod does \_\_mul\_\_ and track the phase: P1\*P2 = (-i)^dot(z1+z2,x1+x2) Z^(z1+z2) X^(x1+x2) where the sums are taken modulo 2.

Pauli vectors z and x are supposed to be defined as boolean numpy arrays.

Ref. Jeroen Dehaene and Bart De Moor Clifford group, stabilizer states, and linear and quadratic operations over GF(2) Phys. Rev. A 68, 042318 – Published 20 October 2003

Make the Pauli object.

**Note that, for the qubit index:**

*   Order of z, x vectors is q\_0 … q\_\{n-1},
*   Order of pauli label is q\_\{n-1} … q\_0

**E.g.,**

*   z and x vectors: z = \[z\_0 … z\_\{n-1}], x = \[x\_0 … x\_\{n-1}]
*   a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

*   **z** (*numpy.ndarray*) – boolean, z vector
*   **x** (*numpy.ndarray*) – boolean, x vector
*   **label** (*str*) – pauli label

## Attributes

|                                                                                                               |                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`Pauli.num_qubits`](qiskit.quantum_info.Pauli.num_qubits "qiskit.quantum_info.Pauli.num_qubits")             | Number of qubits.                     |
| [`Pauli.numberofqubits`](qiskit.quantum_info.Pauli.numberofqubits "qiskit.quantum_info.Pauli.numberofqubits") | Deprecated, use `num_qubits` instead. |
| [`Pauli.x`](qiskit.quantum_info.Pauli.x "qiskit.quantum_info.Pauli.x")                                        | Getter of x.                          |
| [`Pauli.z`](qiskit.quantum_info.Pauli.z "qiskit.quantum_info.Pauli.z")                                        | Getter of z.                          |

## Methods

|                                                                                                                                      |                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| [`Pauli.__len__`](qiskit.quantum_info.Pauli.__len__ "qiskit.quantum_info.Pauli.__len__")()                                           | Return number of qubits.                                                        |
| [`Pauli.__mul__`](qiskit.quantum_info.Pauli.__mul__ "qiskit.quantum_info.Pauli.__mul__")(other)                                      | Multiply two Paulis.                                                            |
| [`Pauli.append_paulis`](qiskit.quantum_info.Pauli.append_paulis "qiskit.quantum_info.Pauli.append_paulis")(\[paulis, pauli\_labels]) | Append pauli at the end.                                                        |
| [`Pauli.delete_qubits`](qiskit.quantum_info.Pauli.delete_qubits "qiskit.quantum_info.Pauli.delete_qubits")(indices)                  | Delete pauli at the indices.                                                    |
| [`Pauli.from_label`](qiskit.quantum_info.Pauli.from_label "qiskit.quantum_info.Pauli.from_label")(label)                             | Take pauli string to construct pauli.                                           |
| [`Pauli.insert_paulis`](qiskit.quantum_info.Pauli.insert_paulis "qiskit.quantum_info.Pauli.insert_paulis")(\[indices, paulis, …])    | Insert or append pauli to the targeted indices.                                 |
| [`Pauli.kron`](qiskit.quantum_info.Pauli.kron "qiskit.quantum_info.Pauli.kron")(other)                                               | Kronecker product of two paulis.                                                |
| [`Pauli.pauli_single`](qiskit.quantum_info.Pauli.pauli_single "qiskit.quantum_info.Pauli.pauli_single")(num\_qubits, index, …)       | Generate single qubit pauli at index with pauli\_label with length num\_qubits. |
| [`Pauli.random`](qiskit.quantum_info.Pauli.random "qiskit.quantum_info.Pauli.random")(num\_qubits\[, seed])                          | Return a random Pauli on number of qubits.                                      |
| [`Pauli.sgn_prod`](qiskit.quantum_info.Pauli.sgn_prod "qiskit.quantum_info.Pauli.sgn_prod")(p1, p2)                                  | Multiply two Paulis and track the phase.                                        |
| [`Pauli.to_instruction`](qiskit.quantum_info.Pauli.to_instruction "qiskit.quantum_info.Pauli.to_instruction")()                      | Convert to Pauli circuit instruction.                                           |
| [`Pauli.to_label`](qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label")()                                        | Present the pauli labels in I, X, Y, Z format.                                  |
| [`Pauli.to_matrix`](qiskit.quantum_info.Pauli.to_matrix "qiskit.quantum_info.Pauli.to_matrix")()                                     | Convert Pauli to a matrix representation.                                       |
| [`Pauli.to_operator`](qiskit.quantum_info.Pauli.to_operator "qiskit.quantum_info.Pauli.to_operator")()                               | Convert to Operator object.                                                     |
| [`Pauli.to_spmatrix`](qiskit.quantum_info.Pauli.to_spmatrix "qiskit.quantum_info.Pauli.to_spmatrix")()                               | Convert Pauli to a sparse matrix representation (CSR format).                   |
| [`Pauli.update_x`](qiskit.quantum_info.Pauli.update_x "qiskit.quantum_info.Pauli.update_x")(x\[, indices])                           | Update partial or entire x.                                                     |
| [`Pauli.update_z`](qiskit.quantum_info.Pauli.update_z "qiskit.quantum_info.Pauli.update_z")(z\[, indices])                           | Update partial or entire z.                                                     |

