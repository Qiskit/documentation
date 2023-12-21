---
title: PTM
description: API reference for qiskit.quantum_info.PTM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.PTM
---

# PTM

<span id="qiskit.quantum_info.PTM" />

`PTM(data, input_dims=None, output_dims=None)`

Pauli Transfer Matrix (PTM) representation of a Quantum Channel.

The PTM representation of an $n$-qubit quantum channel $\mathcal{E}$ is an $n$-qubit [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") $R$ defined with respect to vectorization in the Pauli basis instead of column-vectorization. The elements of the PTM $R$ are given by

$$
R_{i,j} = \mbox{Tr}\left[P_i \mathcal{E}(P_j) \right]
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order.

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the PTM is given by

$$
|\mathcal{E}(\rho)\rangle\!\rangle_P = S_P |\rho\rangle\!\rangle_P
$$

where $|A\rangle\!\rangle_P$ denotes vectorization in the Pauli basis $\langle i | A\rangle\!\rangle_P = \mbox{Tr}[P_i A]$.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a PTM quantum channel operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a PTM.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The PTM representation is only valid for N-qubit channels.

## Attributes

|                                                                                             |                                                                      |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`PTM.atol`](qiskit.quantum_info.PTM.atol "qiskit.quantum_info.PTM.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`PTM.data`](qiskit.quantum_info.PTM.data "qiskit.quantum_info.PTM.data")                   | Return data.                                                         |
| [`PTM.dim`](qiskit.quantum_info.PTM.dim "qiskit.quantum_info.PTM.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`PTM.num_qubits`](qiskit.quantum_info.PTM.num_qubits "qiskit.quantum_info.PTM.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`PTM.qargs`](qiskit.quantum_info.PTM.qargs "qiskit.quantum_info.PTM.qargs")                | Return the qargs for the operator.                                   |
| [`PTM.rtol`](qiskit.quantum_info.PTM.rtol "qiskit.quantum_info.PTM.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                  |                                                                            |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`PTM.__call__`](qiskit.quantum_info.PTM.__call__ "qiskit.quantum_info.PTM.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`PTM.__mul__`](qiskit.quantum_info.PTM.__mul__ "qiskit.quantum_info.PTM.__mul__")(other)                        |                                                                            |
| [`PTM.add`](qiskit.quantum_info.PTM.add "qiskit.quantum_info.PTM.add")(other)                                    | Return the linear operator self + other.                                   |
| [`PTM.adjoint`](qiskit.quantum_info.PTM.adjoint "qiskit.quantum_info.PTM.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`PTM.compose`](qiskit.quantum_info.PTM.compose "qiskit.quantum_info.PTM.compose")(other\[, qargs, front])       | Return the composed quantum channel self @ other.                          |
| [`PTM.conjugate`](qiskit.quantum_info.PTM.conjugate "qiskit.quantum_info.PTM.conjugate")()                       | Return the conjugate of the QuantumChannel.                                |
| [`PTM.copy`](qiskit.quantum_info.PTM.copy "qiskit.quantum_info.PTM.copy")()                                      | Make a deep copy of current operator.                                      |
| [`PTM.dot`](qiskit.quantum_info.PTM.dot "qiskit.quantum_info.PTM.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`PTM.expand`](qiskit.quantum_info.PTM.expand "qiskit.quantum_info.PTM.expand")(other)                           | Return the tensor product channel other ⊗ self.                            |
| [`PTM.input_dims`](qiskit.quantum_info.PTM.input_dims "qiskit.quantum_info.PTM.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`PTM.is_cp`](qiskit.quantum_info.PTM.is_cp "qiskit.quantum_info.PTM.is_cp")(\[atol, rtol])                      | Test if Choi-matrix is completely-positive (CP)                            |
| [`PTM.is_cptp`](qiskit.quantum_info.PTM.is_cptp "qiskit.quantum_info.PTM.is_cptp")(\[atol, rtol])                | Return True if completely-positive trace-preserving (CPTP).                |
| [`PTM.is_tp`](qiskit.quantum_info.PTM.is_tp "qiskit.quantum_info.PTM.is_tp")(\[atol, rtol])                      | Test if a channel is completely-positive (CP)                              |
| [`PTM.is_unitary`](qiskit.quantum_info.PTM.is_unitary "qiskit.quantum_info.PTM.is_unitary")(\[atol, rtol])       | Return True if QuantumChannel is a unitary channel.                        |
| [`PTM.multiply`](qiskit.quantum_info.PTM.multiply "qiskit.quantum_info.PTM.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`PTM.output_dims`](qiskit.quantum_info.PTM.output_dims "qiskit.quantum_info.PTM.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`PTM.power`](qiskit.quantum_info.PTM.power "qiskit.quantum_info.PTM.power")(n)                                  | The matrix power of the channel.                                           |
| [`PTM.reshape`](qiskit.quantum_info.PTM.reshape "qiskit.quantum_info.PTM.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`PTM.set_atol`](qiskit.quantum_info.PTM.set_atol "qiskit.quantum_info.PTM.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`PTM.set_rtol`](qiskit.quantum_info.PTM.set_rtol "qiskit.quantum_info.PTM.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`PTM.subtract`](qiskit.quantum_info.PTM.subtract "qiskit.quantum_info.PTM.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`PTM.tensor`](qiskit.quantum_info.PTM.tensor "qiskit.quantum_info.PTM.tensor")(other)                           | Return the tensor product channel self ⊗ other.                            |
| [`PTM.to_instruction`](qiskit.quantum_info.PTM.to_instruction "qiskit.quantum_info.PTM.to_instruction")()        | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`PTM.to_operator`](qiskit.quantum_info.PTM.to_operator "qiskit.quantum_info.PTM.to_operator")()                 | Try to convert channel to a unitary representation Operator.               |
| [`PTM.transpose`](qiskit.quantum_info.PTM.transpose "qiskit.quantum_info.PTM.transpose")()                       | Return the transpose of the QuantumChannel.                                |
| [`PTM.__call__`](qiskit.quantum_info.PTM.__call__ "qiskit.quantum_info.PTM.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`PTM.__mul__`](qiskit.quantum_info.PTM.__mul__ "qiskit.quantum_info.PTM.__mul__")(other)                        |                                                                            |

