---
title: Stinespring
description: API reference for qiskit.quantum_info.Stinespring
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Stinespring
---

# Stinespring

<span id="qiskit.quantum_info.Stinespring" />

`Stinespring(data, input_dims=None, output_dims=None)`

Stinespring representation of a quantum channel.

The Stinespring representation of a quantum channel $\mathcal{E}$ is a rectangular matrix $A$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(ρ) = \mbox{Tr}_2\left[A ρ A^\dagger\right]
$$

where $\mbox{Tr}_2$ is the [`partial_trace()`](qiskit.quantum_info.partial_trace "qiskit.quantum_info.partial_trace") over subsystem 2.

A general operator map $\mathcal{G}$ can also be written using the generalized Stinespring representation which is given by two matrices $A$, $B$ such that

$$
\mathcal{G}(ρ) = \mbox{Tr}_2\left[A ρ B^\dagger\right]
$$

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Stinespring operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. This can fail for the Stinespring operator if the output dimension cannot be automatically determined.

## Attributes

|                                                                                                                     |                                                                      |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Stinespring.atol`](qiskit.quantum_info.Stinespring.atol "qiskit.quantum_info.Stinespring.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`Stinespring.data`](qiskit.quantum_info.Stinespring.data "qiskit.quantum_info.Stinespring.data")                   | Return data.                                                         |
| [`Stinespring.dim`](qiskit.quantum_info.Stinespring.dim "qiskit.quantum_info.Stinespring.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`Stinespring.num_qubits`](qiskit.quantum_info.Stinespring.num_qubits "qiskit.quantum_info.Stinespring.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`Stinespring.qargs`](qiskit.quantum_info.Stinespring.qargs "qiskit.quantum_info.Stinespring.qargs")                | Return the qargs for the operator.                                   |
| [`Stinespring.rtol`](qiskit.quantum_info.Stinespring.rtol "qiskit.quantum_info.Stinespring.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                                          |                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Stinespring.__call__`](qiskit.quantum_info.Stinespring.__call__ "qiskit.quantum_info.Stinespring.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Stinespring.__mul__`](qiskit.quantum_info.Stinespring.__mul__ "qiskit.quantum_info.Stinespring.__mul__")(other)                        |                                                                            |
| [`Stinespring.add`](qiskit.quantum_info.Stinespring.add "qiskit.quantum_info.Stinespring.add")(other)                                    | Return the linear operator self + other.                                   |
| [`Stinespring.adjoint`](qiskit.quantum_info.Stinespring.adjoint "qiskit.quantum_info.Stinespring.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`Stinespring.compose`](qiskit.quantum_info.Stinespring.compose "qiskit.quantum_info.Stinespring.compose")(other\[, qargs, front])       | Return the composed quantum channel self @ other.                          |
| [`Stinespring.conjugate`](qiskit.quantum_info.Stinespring.conjugate "qiskit.quantum_info.Stinespring.conjugate")()                       | Return the conjugate of the QuantumChannel.                                |
| [`Stinespring.copy`](qiskit.quantum_info.Stinespring.copy "qiskit.quantum_info.Stinespring.copy")()                                      | Make a deep copy of current operator.                                      |
| [`Stinespring.dot`](qiskit.quantum_info.Stinespring.dot "qiskit.quantum_info.Stinespring.dot")(other\[, qargs])                          | Return the right multiplied quantum channel self \* other.                 |
| [`Stinespring.expand`](qiskit.quantum_info.Stinespring.expand "qiskit.quantum_info.Stinespring.expand")(other)                           | Return the tensor product channel other ⊗ self.                            |
| [`Stinespring.input_dims`](qiskit.quantum_info.Stinespring.input_dims "qiskit.quantum_info.Stinespring.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`Stinespring.is_cp`](qiskit.quantum_info.Stinespring.is_cp "qiskit.quantum_info.Stinespring.is_cp")(\[atol, rtol])                      | Test if Choi-matrix is completely-positive (CP)                            |
| [`Stinespring.is_cptp`](qiskit.quantum_info.Stinespring.is_cptp "qiskit.quantum_info.Stinespring.is_cptp")(\[atol, rtol])                | Return True if completely-positive trace-preserving.                       |
| [`Stinespring.is_tp`](qiskit.quantum_info.Stinespring.is_tp "qiskit.quantum_info.Stinespring.is_tp")(\[atol, rtol])                      | Test if a channel is completely-positive (CP)                              |
| [`Stinespring.is_unitary`](qiskit.quantum_info.Stinespring.is_unitary "qiskit.quantum_info.Stinespring.is_unitary")(\[atol, rtol])       | Return True if QuantumChannel is a unitary channel.                        |
| [`Stinespring.multiply`](qiskit.quantum_info.Stinespring.multiply "qiskit.quantum_info.Stinespring.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`Stinespring.output_dims`](qiskit.quantum_info.Stinespring.output_dims "qiskit.quantum_info.Stinespring.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`Stinespring.power`](qiskit.quantum_info.Stinespring.power "qiskit.quantum_info.Stinespring.power")(n)                                  | The matrix power of the channel.                                           |
| [`Stinespring.reshape`](qiskit.quantum_info.Stinespring.reshape "qiskit.quantum_info.Stinespring.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`Stinespring.set_atol`](qiskit.quantum_info.Stinespring.set_atol "qiskit.quantum_info.Stinespring.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`Stinespring.set_rtol`](qiskit.quantum_info.Stinespring.set_rtol "qiskit.quantum_info.Stinespring.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`Stinespring.subtract`](qiskit.quantum_info.Stinespring.subtract "qiskit.quantum_info.Stinespring.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`Stinespring.tensor`](qiskit.quantum_info.Stinespring.tensor "qiskit.quantum_info.Stinespring.tensor")(other)                           | Return the tensor product channel self ⊗ other.                            |
| [`Stinespring.to_instruction`](qiskit.quantum_info.Stinespring.to_instruction "qiskit.quantum_info.Stinespring.to_instruction")()        | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`Stinespring.to_operator`](qiskit.quantum_info.Stinespring.to_operator "qiskit.quantum_info.Stinespring.to_operator")()                 | Try to convert channel to a unitary representation Operator.               |
| [`Stinespring.transpose`](qiskit.quantum_info.Stinespring.transpose "qiskit.quantum_info.Stinespring.transpose")()                       | Return the transpose of the QuantumChannel.                                |
| [`Stinespring.__call__`](qiskit.quantum_info.Stinespring.__call__ "qiskit.quantum_info.Stinespring.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Stinespring.__mul__`](qiskit.quantum_info.Stinespring.__mul__ "qiskit.quantum_info.Stinespring.__mul__")(other)                        |                                                                            |

