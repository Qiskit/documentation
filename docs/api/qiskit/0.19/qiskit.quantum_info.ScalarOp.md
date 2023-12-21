---
title: ScalarOp
description: API reference for qiskit.quantum_info.ScalarOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.ScalarOp
---

# ScalarOp

<span id="qiskit.quantum_info.ScalarOp" />

`ScalarOp(dims, coeff=1)`

Scalar identity operator class.

This is a symbolic representation of an scalar identity operator on multiple subsystems. It may be used to initialize a symbolic scalar multiplication of an identity and then be implicitly converted to other kinds of operator subclasses by using the [`compose()`](qiskit.quantum_info.ScalarOp.compose "qiskit.quantum_info.ScalarOp.compose"), [`dot()`](qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot"), [`tensor()`](qiskit.quantum_info.ScalarOp.tensor "qiskit.quantum_info.ScalarOp.tensor"), [`expand()`](qiskit.quantum_info.ScalarOp.expand "qiskit.quantum_info.ScalarOp.expand") methods.

Initialize an operator object.

**Parameters**

*   **dims** (*int or tuple*) – subsystem dimensions.
*   **coeff** (*Number*) – scalar coefficient for the identity operator (Default: 1).

**Raises**

**QiskitError** – If the optional coefficient is invalid.

## Attributes

|                                                                                                            |                                                                      |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`ScalarOp.atol`](qiskit.quantum_info.ScalarOp.atol "qiskit.quantum_info.ScalarOp.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`ScalarOp.coeff`](qiskit.quantum_info.ScalarOp.coeff "qiskit.quantum_info.ScalarOp.coeff")                | Return the coefficient                                               |
| [`ScalarOp.dim`](qiskit.quantum_info.ScalarOp.dim "qiskit.quantum_info.ScalarOp.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`ScalarOp.num_qubits`](qiskit.quantum_info.ScalarOp.num_qubits "qiskit.quantum_info.ScalarOp.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`ScalarOp.qargs`](qiskit.quantum_info.ScalarOp.qargs "qiskit.quantum_info.ScalarOp.qargs")                | Return the qargs for the operator.                                   |
| [`ScalarOp.rtol`](qiskit.quantum_info.ScalarOp.rtol "qiskit.quantum_info.ScalarOp.rtol")                   | The relative tolerance parameter for float comparisons.              |

## Methods

|                                                                                                                                 |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`ScalarOp.__call__`](qiskit.quantum_info.ScalarOp.__call__ "qiskit.quantum_info.ScalarOp.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`ScalarOp.__mul__`](qiskit.quantum_info.ScalarOp.__mul__ "qiskit.quantum_info.ScalarOp.__mul__")(other)                        |                                                                            |
| [`ScalarOp.add`](qiskit.quantum_info.ScalarOp.add "qiskit.quantum_info.ScalarOp.add")(other)                                    | Return the linear operator self + other.                                   |
| [`ScalarOp.adjoint`](qiskit.quantum_info.ScalarOp.adjoint "qiskit.quantum_info.ScalarOp.adjoint")()                             | Return the adjoint of the operator.                                        |
| [`ScalarOp.compose`](qiskit.quantum_info.ScalarOp.compose "qiskit.quantum_info.ScalarOp.compose")(other\[, qargs, front])       | Return the composed operator.                                              |
| [`ScalarOp.conjugate`](qiskit.quantum_info.ScalarOp.conjugate "qiskit.quantum_info.ScalarOp.conjugate")()                       | Return the conjugate of the operator.                                      |
| [`ScalarOp.copy`](qiskit.quantum_info.ScalarOp.copy "qiskit.quantum_info.ScalarOp.copy")()                                      | Make a deep copy of current operator.                                      |
| [`ScalarOp.dot`](qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`ScalarOp.expand`](qiskit.quantum_info.ScalarOp.expand "qiskit.quantum_info.ScalarOp.expand")(other)                           | Return the tensor product operator other ⊗ self.                           |
| [`ScalarOp.input_dims`](qiskit.quantum_info.ScalarOp.input_dims "qiskit.quantum_info.ScalarOp.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`ScalarOp.is_unitary`](qiskit.quantum_info.ScalarOp.is_unitary "qiskit.quantum_info.ScalarOp.is_unitary")(\[atol, rtol])       | Return True if operator is a unitary matrix.                               |
| [`ScalarOp.multiply`](qiskit.quantum_info.ScalarOp.multiply "qiskit.quantum_info.ScalarOp.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`ScalarOp.output_dims`](qiskit.quantum_info.ScalarOp.output_dims "qiskit.quantum_info.ScalarOp.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`ScalarOp.power`](qiskit.quantum_info.ScalarOp.power "qiskit.quantum_info.ScalarOp.power")(n)                                  | Return the power of the ScalarOp.                                          |
| [`ScalarOp.reshape`](qiskit.quantum_info.ScalarOp.reshape "qiskit.quantum_info.ScalarOp.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`ScalarOp.set_atol`](qiskit.quantum_info.ScalarOp.set_atol "qiskit.quantum_info.ScalarOp.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`ScalarOp.set_rtol`](qiskit.quantum_info.ScalarOp.set_rtol "qiskit.quantum_info.ScalarOp.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`ScalarOp.subtract`](qiskit.quantum_info.ScalarOp.subtract "qiskit.quantum_info.ScalarOp.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`ScalarOp.tensor`](qiskit.quantum_info.ScalarOp.tensor "qiskit.quantum_info.ScalarOp.tensor")(other)                           | Return the tensor product operator self ⊗ other.                           |
| [`ScalarOp.to_matrix`](qiskit.quantum_info.ScalarOp.to_matrix "qiskit.quantum_info.ScalarOp.to_matrix")()                       | Convert to a Numpy matrix.                                                 |
| [`ScalarOp.to_operator`](qiskit.quantum_info.ScalarOp.to_operator "qiskit.quantum_info.ScalarOp.to_operator")()                 | Convert to an Operator object.                                             |
| [`ScalarOp.transpose`](qiskit.quantum_info.ScalarOp.transpose "qiskit.quantum_info.ScalarOp.transpose")()                       | Return the transpose of the operator.                                      |
| [`ScalarOp.__call__`](qiskit.quantum_info.ScalarOp.__call__ "qiskit.quantum_info.ScalarOp.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`ScalarOp.__mul__`](qiskit.quantum_info.ScalarOp.__mul__ "qiskit.quantum_info.ScalarOp.__mul__")(other)                        |                                                                            |

