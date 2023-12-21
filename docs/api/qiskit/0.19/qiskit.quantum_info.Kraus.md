---
title: Kraus
description: API reference for qiskit.quantum_info.Kraus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Kraus
---

# Kraus

<span id="qiskit.quantum_info.Kraus" />

`Kraus(data, input_dims=None, output_dims=None)`

Kraus representation of a quantum channel.

The Kraus representation for a quantum channel $\mathcal{E}$ is a set of matrices $[A_0,...,A_{K-1}]$ such that

For a quantum channel $\mathcal{E}$, the Kraus representation is given by a set of matrices $[A_0,...,A_{K-1}]$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(\rho) = \sum_{i=0}^{K-1} A_i \rho A_i^\dagger
$$

A general operator map $\mathcal{G}$ can also be written using the generalized Kraus representation which is given by two sets of matrices $[A_0,...,A_{K-1}]$, $[B_0,...,A_{B-1}]$ such that

$$
\mathcal{G}(\rho) = \sum_{i=0}^{K-1} A_i \rho B_i^\dagger
$$

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Kraus operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a list of Numpy arrays of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input does not correspond to an N-qubit channel, it will assign a single subsystem with dimension specified by the shape of the input.

## Attributes

|                                                                                                   |                                                                      |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Kraus.atol`](qiskit.quantum_info.Kraus.atol "qiskit.quantum_info.Kraus.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`Kraus.data`](qiskit.quantum_info.Kraus.data "qiskit.quantum_info.Kraus.data")                   | Return list of Kraus matrices for channel.                           |
| [`Kraus.dim`](qiskit.quantum_info.Kraus.dim "qiskit.quantum_info.Kraus.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`Kraus.num_qubits`](qiskit.quantum_info.Kraus.num_qubits "qiskit.quantum_info.Kraus.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`Kraus.qargs`](qiskit.quantum_info.Kraus.qargs "qiskit.quantum_info.Kraus.qargs")                | Return the qargs for the operator.                                   |
| [`Kraus.rtol`](qiskit.quantum_info.Kraus.rtol "qiskit.quantum_info.Kraus.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                        |                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Kraus.__call__`](qiskit.quantum_info.Kraus.__call__ "qiskit.quantum_info.Kraus.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Kraus.__mul__`](qiskit.quantum_info.Kraus.__mul__ "qiskit.quantum_info.Kraus.__mul__")(other)                        |                                                                            |
| [`Kraus.add`](qiskit.quantum_info.Kraus.add "qiskit.quantum_info.Kraus.add")(other)                                    | Return the linear operator self + other.                                   |
| [`Kraus.adjoint`](qiskit.quantum_info.Kraus.adjoint "qiskit.quantum_info.Kraus.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`Kraus.compose`](qiskit.quantum_info.Kraus.compose "qiskit.quantum_info.Kraus.compose")(other\[, qargs, front])       | Return the composed quantum channel self @ other.                          |
| [`Kraus.conjugate`](qiskit.quantum_info.Kraus.conjugate "qiskit.quantum_info.Kraus.conjugate")()                       | Return the conjugate of the QuantumChannel.                                |
| [`Kraus.copy`](qiskit.quantum_info.Kraus.copy "qiskit.quantum_info.Kraus.copy")()                                      | Make a deep copy of current operator.                                      |
| [`Kraus.dot`](qiskit.quantum_info.Kraus.dot "qiskit.quantum_info.Kraus.dot")(other\[, qargs])                          | Return the right multiplied quantum channel self \* other.                 |
| [`Kraus.expand`](qiskit.quantum_info.Kraus.expand "qiskit.quantum_info.Kraus.expand")(other)                           | Return the tensor product channel other ⊗ self.                            |
| [`Kraus.input_dims`](qiskit.quantum_info.Kraus.input_dims "qiskit.quantum_info.Kraus.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`Kraus.is_cp`](qiskit.quantum_info.Kraus.is_cp "qiskit.quantum_info.Kraus.is_cp")(\[atol, rtol])                      | Test if Choi-matrix is completely-positive (CP)                            |
| [`Kraus.is_cptp`](qiskit.quantum_info.Kraus.is_cptp "qiskit.quantum_info.Kraus.is_cptp")(\[atol, rtol])                | Return True if completely-positive trace-preserving.                       |
| [`Kraus.is_tp`](qiskit.quantum_info.Kraus.is_tp "qiskit.quantum_info.Kraus.is_tp")(\[atol, rtol])                      | Test if a channel is completely-positive (CP)                              |
| [`Kraus.is_unitary`](qiskit.quantum_info.Kraus.is_unitary "qiskit.quantum_info.Kraus.is_unitary")(\[atol, rtol])       | Return True if QuantumChannel is a unitary channel.                        |
| [`Kraus.multiply`](qiskit.quantum_info.Kraus.multiply "qiskit.quantum_info.Kraus.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`Kraus.output_dims`](qiskit.quantum_info.Kraus.output_dims "qiskit.quantum_info.Kraus.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`Kraus.power`](qiskit.quantum_info.Kraus.power "qiskit.quantum_info.Kraus.power")(n)                                  | The matrix power of the channel.                                           |
| [`Kraus.reshape`](qiskit.quantum_info.Kraus.reshape "qiskit.quantum_info.Kraus.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`Kraus.set_atol`](qiskit.quantum_info.Kraus.set_atol "qiskit.quantum_info.Kraus.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`Kraus.set_rtol`](qiskit.quantum_info.Kraus.set_rtol "qiskit.quantum_info.Kraus.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`Kraus.subtract`](qiskit.quantum_info.Kraus.subtract "qiskit.quantum_info.Kraus.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`Kraus.tensor`](qiskit.quantum_info.Kraus.tensor "qiskit.quantum_info.Kraus.tensor")(other)                           | Return the tensor product channel self ⊗ other.                            |
| [`Kraus.to_instruction`](qiskit.quantum_info.Kraus.to_instruction "qiskit.quantum_info.Kraus.to_instruction")()        | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`Kraus.to_operator`](qiskit.quantum_info.Kraus.to_operator "qiskit.quantum_info.Kraus.to_operator")()                 | Try to convert channel to a unitary representation Operator.               |
| [`Kraus.transpose`](qiskit.quantum_info.Kraus.transpose "qiskit.quantum_info.Kraus.transpose")()                       | Return the transpose of the QuantumChannel.                                |
| [`Kraus.__call__`](qiskit.quantum_info.Kraus.__call__ "qiskit.quantum_info.Kraus.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Kraus.__mul__`](qiskit.quantum_info.Kraus.__mul__ "qiskit.quantum_info.Kraus.__mul__")(other)                        |                                                                            |

