---
title: Choi
description: API reference for qiskit.quantum_info.Choi
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Choi
---

# Choi

<span id="qiskit.quantum_info.Choi" />

`Choi(data, input_dims=None, output_dims=None)`

Choi-matrix representation of a Quantum Channel.

The Choi-matrix representation of a quantum channel $\mathcal{E}$ is a matrix

$$
\Lambda = \sum_{i,j} |i\rangle\!\langle j|\otimes
            \mathcal{E}\left(|i\rangle\!\langle j|\right)
$$

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the Choi-matrix is given by

$$
\mathcal{E}(\rho) = \mbox{Tr}_{1}\left[\Lambda
                    (\rho^T \otimes \mathbb{I})\right]
$$

where $\mbox{Tr}_1$ is the [`partial_trace()`](qiskit.quantum_info.partial_trace "qiskit.quantum_info.partial_trace") over subsystem 1.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Choi matrix operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a Choi matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (4\*\*N, 4\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Attributes

|                                                                                                |                                                                      |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Choi.atol`](qiskit.quantum_info.Choi.atol "qiskit.quantum_info.Choi.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`Choi.data`](qiskit.quantum_info.Choi.data "qiskit.quantum_info.Choi.data")                   | Return data.                                                         |
| [`Choi.dim`](qiskit.quantum_info.Choi.dim "qiskit.quantum_info.Choi.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`Choi.num_qubits`](qiskit.quantum_info.Choi.num_qubits "qiskit.quantum_info.Choi.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`Choi.qargs`](qiskit.quantum_info.Choi.qargs "qiskit.quantum_info.Choi.qargs")                | Return the qargs for the operator.                                   |
| [`Choi.rtol`](qiskit.quantum_info.Choi.rtol "qiskit.quantum_info.Choi.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                     |                                                                            |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Choi.__call__`](qiskit.quantum_info.Choi.__call__ "qiskit.quantum_info.Choi.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Choi.__mul__`](qiskit.quantum_info.Choi.__mul__ "qiskit.quantum_info.Choi.__mul__")(other)                        |                                                                            |
| [`Choi.add`](qiskit.quantum_info.Choi.add "qiskit.quantum_info.Choi.add")(other)                                    | Return the linear operator self + other.                                   |
| [`Choi.adjoint`](qiskit.quantum_info.Choi.adjoint "qiskit.quantum_info.Choi.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`Choi.compose`](qiskit.quantum_info.Choi.compose "qiskit.quantum_info.Choi.compose")(other\[, qargs, front])       | Return the composed quantum channel self @ other.                          |
| [`Choi.conjugate`](qiskit.quantum_info.Choi.conjugate "qiskit.quantum_info.Choi.conjugate")()                       | Return the conjugate of the QuantumChannel.                                |
| [`Choi.copy`](qiskit.quantum_info.Choi.copy "qiskit.quantum_info.Choi.copy")()                                      | Make a deep copy of current operator.                                      |
| [`Choi.dot`](qiskit.quantum_info.Choi.dot "qiskit.quantum_info.Choi.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`Choi.expand`](qiskit.quantum_info.Choi.expand "qiskit.quantum_info.Choi.expand")(other)                           | Return the tensor product channel other ⊗ self.                            |
| [`Choi.input_dims`](qiskit.quantum_info.Choi.input_dims "qiskit.quantum_info.Choi.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`Choi.is_cp`](qiskit.quantum_info.Choi.is_cp "qiskit.quantum_info.Choi.is_cp")(\[atol, rtol])                      | Test if Choi-matrix is completely-positive (CP)                            |
| [`Choi.is_cptp`](qiskit.quantum_info.Choi.is_cptp "qiskit.quantum_info.Choi.is_cptp")(\[atol, rtol])                | Return True if completely-positive trace-preserving (CPTP).                |
| [`Choi.is_tp`](qiskit.quantum_info.Choi.is_tp "qiskit.quantum_info.Choi.is_tp")(\[atol, rtol])                      | Test if a channel is completely-positive (CP)                              |
| [`Choi.is_unitary`](qiskit.quantum_info.Choi.is_unitary "qiskit.quantum_info.Choi.is_unitary")(\[atol, rtol])       | Return True if QuantumChannel is a unitary channel.                        |
| [`Choi.multiply`](qiskit.quantum_info.Choi.multiply "qiskit.quantum_info.Choi.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`Choi.output_dims`](qiskit.quantum_info.Choi.output_dims "qiskit.quantum_info.Choi.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`Choi.power`](qiskit.quantum_info.Choi.power "qiskit.quantum_info.Choi.power")(n)                                  | The matrix power of the channel.                                           |
| [`Choi.reshape`](qiskit.quantum_info.Choi.reshape "qiskit.quantum_info.Choi.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`Choi.set_atol`](qiskit.quantum_info.Choi.set_atol "qiskit.quantum_info.Choi.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`Choi.set_rtol`](qiskit.quantum_info.Choi.set_rtol "qiskit.quantum_info.Choi.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`Choi.subtract`](qiskit.quantum_info.Choi.subtract "qiskit.quantum_info.Choi.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`Choi.tensor`](qiskit.quantum_info.Choi.tensor "qiskit.quantum_info.Choi.tensor")(other)                           | Return the tensor product channel self ⊗ other.                            |
| [`Choi.to_instruction`](qiskit.quantum_info.Choi.to_instruction "qiskit.quantum_info.Choi.to_instruction")()        | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`Choi.to_operator`](qiskit.quantum_info.Choi.to_operator "qiskit.quantum_info.Choi.to_operator")()                 | Try to convert channel to a unitary representation Operator.               |
| [`Choi.transpose`](qiskit.quantum_info.Choi.transpose "qiskit.quantum_info.Choi.transpose")()                       | Return the transpose of the QuantumChannel.                                |
| [`Choi.__call__`](qiskit.quantum_info.Choi.__call__ "qiskit.quantum_info.Choi.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Choi.__mul__`](qiskit.quantum_info.Choi.__mul__ "qiskit.quantum_info.Choi.__mul__")(other)                        |                                                                            |

