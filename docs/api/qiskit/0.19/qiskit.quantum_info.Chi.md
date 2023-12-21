---
title: Chi
description: API reference for qiskit.quantum_info.Chi
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Chi
---

# Chi

<span id="qiskit.quantum_info.Chi" />

`Chi(data, input_dims=None, output_dims=None)`

Pauli basis Chi-matrix representation of a quantum channel.

The Chi-matrix representation of an $n$-qubit quantum channel $\mathcal{E}$ is a matrix $\chi$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(ρ) = \sum_{i, j} \chi_{i,j} P_i ρ P_j
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order. It is related to the [`Choi`](qiskit.quantum_info.Choi "qiskit.quantum_info.Choi") representation by a change of basis of the Choi-matrix into the Pauli basis.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Chi-matrix operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a Chi-matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The Chi matrix representation is only valid for N-qubit channels.

## Attributes

|                                                                                             |                                                                      |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Chi.atol`](qiskit.quantum_info.Chi.atol "qiskit.quantum_info.Chi.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`Chi.data`](qiskit.quantum_info.Chi.data "qiskit.quantum_info.Chi.data")                   | Return data.                                                         |
| [`Chi.dim`](qiskit.quantum_info.Chi.dim "qiskit.quantum_info.Chi.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`Chi.num_qubits`](qiskit.quantum_info.Chi.num_qubits "qiskit.quantum_info.Chi.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`Chi.qargs`](qiskit.quantum_info.Chi.qargs "qiskit.quantum_info.Chi.qargs")                | Return the qargs for the operator.                                   |
| [`Chi.rtol`](qiskit.quantum_info.Chi.rtol "qiskit.quantum_info.Chi.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                  |                                                                            |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Chi.__call__`](qiskit.quantum_info.Chi.__call__ "qiskit.quantum_info.Chi.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Chi.__mul__`](qiskit.quantum_info.Chi.__mul__ "qiskit.quantum_info.Chi.__mul__")(other)                        |                                                                            |
| [`Chi.add`](qiskit.quantum_info.Chi.add "qiskit.quantum_info.Chi.add")(other)                                    | Return the linear operator self + other.                                   |
| [`Chi.adjoint`](qiskit.quantum_info.Chi.adjoint "qiskit.quantum_info.Chi.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`Chi.compose`](qiskit.quantum_info.Chi.compose "qiskit.quantum_info.Chi.compose")(other\[, qargs, front])       | Return the composed quantum channel self @ other.                          |
| [`Chi.conjugate`](qiskit.quantum_info.Chi.conjugate "qiskit.quantum_info.Chi.conjugate")()                       | Return the conjugate of the QuantumChannel.                                |
| [`Chi.copy`](qiskit.quantum_info.Chi.copy "qiskit.quantum_info.Chi.copy")()                                      | Make a deep copy of current operator.                                      |
| [`Chi.dot`](qiskit.quantum_info.Chi.dot "qiskit.quantum_info.Chi.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`Chi.expand`](qiskit.quantum_info.Chi.expand "qiskit.quantum_info.Chi.expand")(other)                           | Return the tensor product channel other ⊗ self.                            |
| [`Chi.input_dims`](qiskit.quantum_info.Chi.input_dims "qiskit.quantum_info.Chi.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`Chi.is_cp`](qiskit.quantum_info.Chi.is_cp "qiskit.quantum_info.Chi.is_cp")(\[atol, rtol])                      | Test if Choi-matrix is completely-positive (CP)                            |
| [`Chi.is_cptp`](qiskit.quantum_info.Chi.is_cptp "qiskit.quantum_info.Chi.is_cptp")(\[atol, rtol])                | Return True if completely-positive trace-preserving (CPTP).                |
| [`Chi.is_tp`](qiskit.quantum_info.Chi.is_tp "qiskit.quantum_info.Chi.is_tp")(\[atol, rtol])                      | Test if a channel is completely-positive (CP)                              |
| [`Chi.is_unitary`](qiskit.quantum_info.Chi.is_unitary "qiskit.quantum_info.Chi.is_unitary")(\[atol, rtol])       | Return True if QuantumChannel is a unitary channel.                        |
| [`Chi.multiply`](qiskit.quantum_info.Chi.multiply "qiskit.quantum_info.Chi.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`Chi.output_dims`](qiskit.quantum_info.Chi.output_dims "qiskit.quantum_info.Chi.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`Chi.power`](qiskit.quantum_info.Chi.power "qiskit.quantum_info.Chi.power")(n)                                  | The matrix power of the channel.                                           |
| [`Chi.reshape`](qiskit.quantum_info.Chi.reshape "qiskit.quantum_info.Chi.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`Chi.set_atol`](qiskit.quantum_info.Chi.set_atol "qiskit.quantum_info.Chi.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`Chi.set_rtol`](qiskit.quantum_info.Chi.set_rtol "qiskit.quantum_info.Chi.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`Chi.subtract`](qiskit.quantum_info.Chi.subtract "qiskit.quantum_info.Chi.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`Chi.tensor`](qiskit.quantum_info.Chi.tensor "qiskit.quantum_info.Chi.tensor")(other)                           | Return the tensor product channel self ⊗ other.                            |
| [`Chi.to_instruction`](qiskit.quantum_info.Chi.to_instruction "qiskit.quantum_info.Chi.to_instruction")()        | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`Chi.to_operator`](qiskit.quantum_info.Chi.to_operator "qiskit.quantum_info.Chi.to_operator")()                 | Try to convert channel to a unitary representation Operator.               |
| [`Chi.transpose`](qiskit.quantum_info.Chi.transpose "qiskit.quantum_info.Chi.transpose")()                       | Return the transpose of the QuantumChannel.                                |
| [`Chi.__call__`](qiskit.quantum_info.Chi.__call__ "qiskit.quantum_info.Chi.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Chi.__mul__`](qiskit.quantum_info.Chi.__mul__ "qiskit.quantum_info.Chi.__mul__")(other)                        |                                                                            |

