---
title: SuperOp
description: API reference for qiskit.quantum_info.SuperOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.SuperOp
---

# SuperOp

<span id="qiskit.quantum_info.SuperOp" />

`SuperOp(data, input_dims=None, output_dims=None)`

Superoperator representation of a quantum channel.

The Superoperator representation of a quantum channel $\mathcal{E}$ is a matrix $S$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
|\mathcal{E}(\rho)\rangle\!\rangle = S |\rho\rangle\!\rangle
$$

where the double-ket notation $|A\rangle\!\rangle$ denotes a vector formed by stacking the columns of the matrix $A$ *(column-vectorization)*.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Superoperator operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a superoperator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (4\*\*N, 4\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Attributes

|                                                                                                         |                                                                      |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`SuperOp.atol`](qiskit.quantum_info.SuperOp.atol "qiskit.quantum_info.SuperOp.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`SuperOp.data`](qiskit.quantum_info.SuperOp.data "qiskit.quantum_info.SuperOp.data")                   | Return data.                                                         |
| [`SuperOp.dim`](qiskit.quantum_info.SuperOp.dim "qiskit.quantum_info.SuperOp.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`SuperOp.num_qubits`](qiskit.quantum_info.SuperOp.num_qubits "qiskit.quantum_info.SuperOp.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`SuperOp.qargs`](qiskit.quantum_info.SuperOp.qargs "qiskit.quantum_info.SuperOp.qargs")                | Return the qargs for the operator.                                   |
| [`SuperOp.rtol`](qiskit.quantum_info.SuperOp.rtol "qiskit.quantum_info.SuperOp.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                              |                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`SuperOp.__call__`](qiskit.quantum_info.SuperOp.__call__ "qiskit.quantum_info.SuperOp.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`SuperOp.__mul__`](qiskit.quantum_info.SuperOp.__mul__ "qiskit.quantum_info.SuperOp.__mul__")(other)                        |                                                                            |
| [`SuperOp.add`](qiskit.quantum_info.SuperOp.add "qiskit.quantum_info.SuperOp.add")(other)                                    | Return the linear operator self + other.                                   |
| [`SuperOp.adjoint`](qiskit.quantum_info.SuperOp.adjoint "qiskit.quantum_info.SuperOp.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`SuperOp.compose`](qiskit.quantum_info.SuperOp.compose "qiskit.quantum_info.SuperOp.compose")(other\[, qargs, front])       | Return the composed quantum channel self @ other.                          |
| [`SuperOp.conjugate`](qiskit.quantum_info.SuperOp.conjugate "qiskit.quantum_info.SuperOp.conjugate")()                       | Return the conjugate of the QuantumChannel.                                |
| [`SuperOp.copy`](qiskit.quantum_info.SuperOp.copy "qiskit.quantum_info.SuperOp.copy")()                                      | Make a deep copy of current operator.                                      |
| [`SuperOp.dot`](qiskit.quantum_info.SuperOp.dot "qiskit.quantum_info.SuperOp.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`SuperOp.expand`](qiskit.quantum_info.SuperOp.expand "qiskit.quantum_info.SuperOp.expand")(other)                           | Return the tensor product channel other ⊗ self.                            |
| [`SuperOp.input_dims`](qiskit.quantum_info.SuperOp.input_dims "qiskit.quantum_info.SuperOp.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`SuperOp.is_cp`](qiskit.quantum_info.SuperOp.is_cp "qiskit.quantum_info.SuperOp.is_cp")(\[atol, rtol])                      | Test if Choi-matrix is completely-positive (CP)                            |
| [`SuperOp.is_cptp`](qiskit.quantum_info.SuperOp.is_cptp "qiskit.quantum_info.SuperOp.is_cptp")(\[atol, rtol])                | Return True if completely-positive trace-preserving (CPTP).                |
| [`SuperOp.is_tp`](qiskit.quantum_info.SuperOp.is_tp "qiskit.quantum_info.SuperOp.is_tp")(\[atol, rtol])                      | Test if a channel is completely-positive (CP)                              |
| [`SuperOp.is_unitary`](qiskit.quantum_info.SuperOp.is_unitary "qiskit.quantum_info.SuperOp.is_unitary")(\[atol, rtol])       | Return True if QuantumChannel is a unitary channel.                        |
| [`SuperOp.multiply`](qiskit.quantum_info.SuperOp.multiply "qiskit.quantum_info.SuperOp.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`SuperOp.output_dims`](qiskit.quantum_info.SuperOp.output_dims "qiskit.quantum_info.SuperOp.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`SuperOp.power`](qiskit.quantum_info.SuperOp.power "qiskit.quantum_info.SuperOp.power")(n)                                  | Return the compose of a QuantumChannel with itself n times.                |
| [`SuperOp.reshape`](qiskit.quantum_info.SuperOp.reshape "qiskit.quantum_info.SuperOp.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`SuperOp.set_atol`](qiskit.quantum_info.SuperOp.set_atol "qiskit.quantum_info.SuperOp.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`SuperOp.set_rtol`](qiskit.quantum_info.SuperOp.set_rtol "qiskit.quantum_info.SuperOp.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`SuperOp.subtract`](qiskit.quantum_info.SuperOp.subtract "qiskit.quantum_info.SuperOp.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`SuperOp.tensor`](qiskit.quantum_info.SuperOp.tensor "qiskit.quantum_info.SuperOp.tensor")(other)                           | Return the tensor product channel self ⊗ other.                            |
| [`SuperOp.to_instruction`](qiskit.quantum_info.SuperOp.to_instruction "qiskit.quantum_info.SuperOp.to_instruction")()        | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`SuperOp.to_operator`](qiskit.quantum_info.SuperOp.to_operator "qiskit.quantum_info.SuperOp.to_operator")()                 | Try to convert channel to a unitary representation Operator.               |
| [`SuperOp.transpose`](qiskit.quantum_info.SuperOp.transpose "qiskit.quantum_info.SuperOp.transpose")()                       | Return the transpose of the QuantumChannel.                                |
| [`SuperOp.__call__`](qiskit.quantum_info.SuperOp.__call__ "qiskit.quantum_info.SuperOp.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`SuperOp.__mul__`](qiskit.quantum_info.SuperOp.__mul__ "qiskit.quantum_info.SuperOp.__mul__")(other)                        |                                                                            |

