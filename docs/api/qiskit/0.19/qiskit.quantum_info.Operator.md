---
title: Operator
description: API reference for qiskit.quantum_info.Operator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Operator
---

# Operator

<span id="qiskit.quantum_info.Operator" />

`Operator(data, input_dims=None, output_dims=None)`

Matrix operator class

This represents a matrix operator $M$ that will [`evolve()`](qiskit.quantum_info.Statevector.evolve "qiskit.quantum_info.Statevector.evolve") a [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") $|\psi\rangle$ by matrix-vector multiplication

$$
|\psi\rangle \mapsto M|\psi\rangle,
$$

and will [`evolve()`](qiskit.quantum_info.DensityMatrix.evolve "qiskit.quantum_info.DensityMatrix.evolve") a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ by left and right multiplication

$$
\rho \mapsto M \rho M^\dagger.
$$

Initialize an operator object.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize operator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as an operator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Attributes

|                                                                                                            |                                                                      |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Operator.atol`](qiskit.quantum_info.Operator.atol "qiskit.quantum_info.Operator.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`Operator.data`](qiskit.quantum_info.Operator.data "qiskit.quantum_info.Operator.data")                   | Return data.                                                         |
| [`Operator.dim`](qiskit.quantum_info.Operator.dim "qiskit.quantum_info.Operator.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`Operator.num_qubits`](qiskit.quantum_info.Operator.num_qubits "qiskit.quantum_info.Operator.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`Operator.qargs`](qiskit.quantum_info.Operator.qargs "qiskit.quantum_info.Operator.qargs")                | Return the qargs for the operator.                                   |
| [`Operator.rtol`](qiskit.quantum_info.Operator.rtol "qiskit.quantum_info.Operator.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                                 |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Operator.__call__`](qiskit.quantum_info.Operator.__call__ "qiskit.quantum_info.Operator.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Operator.__mul__`](qiskit.quantum_info.Operator.__mul__ "qiskit.quantum_info.Operator.__mul__")(other)                        |                                                                            |
| [`Operator.add`](qiskit.quantum_info.Operator.add "qiskit.quantum_info.Operator.add")(other)                                    | Return the linear operator self + other.                                   |
| [`Operator.adjoint`](qiskit.quantum_info.Operator.adjoint "qiskit.quantum_info.Operator.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`Operator.compose`](qiskit.quantum_info.Operator.compose "qiskit.quantum_info.Operator.compose")(other\[, qargs, front])       | Return the composed operator.                                              |
| [`Operator.conjugate`](qiskit.quantum_info.Operator.conjugate "qiskit.quantum_info.Operator.conjugate")()                       | Return the conjugate of the operator.                                      |
| [`Operator.copy`](qiskit.quantum_info.Operator.copy "qiskit.quantum_info.Operator.copy")()                                      | Make a deep copy of current operator.                                      |
| [`Operator.dot`](qiskit.quantum_info.Operator.dot "qiskit.quantum_info.Operator.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`Operator.equiv`](qiskit.quantum_info.Operator.equiv "qiskit.quantum_info.Operator.equiv")(other\[, rtol, atol])               | Return True if operators are equivalent up to global phase.                |
| [`Operator.expand`](qiskit.quantum_info.Operator.expand "qiskit.quantum_info.Operator.expand")(other)                           | Return the tensor product operator other ⊗ self.                           |
| [`Operator.from_label`](qiskit.quantum_info.Operator.from_label "qiskit.quantum_info.Operator.from_label")(label)               | Return a tensor product of single-qubit operators.                         |
| [`Operator.input_dims`](qiskit.quantum_info.Operator.input_dims "qiskit.quantum_info.Operator.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`Operator.is_unitary`](qiskit.quantum_info.Operator.is_unitary "qiskit.quantum_info.Operator.is_unitary")(\[atol, rtol])       | Return True if operator is a unitary matrix.                               |
| [`Operator.multiply`](qiskit.quantum_info.Operator.multiply "qiskit.quantum_info.Operator.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`Operator.output_dims`](qiskit.quantum_info.Operator.output_dims "qiskit.quantum_info.Operator.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`Operator.power`](qiskit.quantum_info.Operator.power "qiskit.quantum_info.Operator.power")(n)                                  | Return the matrix power of the operator.                                   |
| [`Operator.reshape`](qiskit.quantum_info.Operator.reshape "qiskit.quantum_info.Operator.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`Operator.set_atol`](qiskit.quantum_info.Operator.set_atol "qiskit.quantum_info.Operator.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`Operator.set_rtol`](qiskit.quantum_info.Operator.set_rtol "qiskit.quantum_info.Operator.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`Operator.subtract`](qiskit.quantum_info.Operator.subtract "qiskit.quantum_info.Operator.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`Operator.tensor`](qiskit.quantum_info.Operator.tensor "qiskit.quantum_info.Operator.tensor")(other)                           | Return the tensor product operator self ⊗ other.                           |
| [`Operator.to_instruction`](qiskit.quantum_info.Operator.to_instruction "qiskit.quantum_info.Operator.to_instruction")()        | Convert to a UnitaryGate instruction.                                      |
| [`Operator.to_operator`](qiskit.quantum_info.Operator.to_operator "qiskit.quantum_info.Operator.to_operator")()                 | Convert operator to matrix operator class                                  |
| [`Operator.transpose`](qiskit.quantum_info.Operator.transpose "qiskit.quantum_info.Operator.transpose")()                       | Return the transpose of the operator.                                      |
| [`Operator.__call__`](qiskit.quantum_info.Operator.__call__ "qiskit.quantum_info.Operator.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Operator.__mul__`](qiskit.quantum_info.Operator.__mul__ "qiskit.quantum_info.Operator.__mul__")(other)                        |                                                                            |

