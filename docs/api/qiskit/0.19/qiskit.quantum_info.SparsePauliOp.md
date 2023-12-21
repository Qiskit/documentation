---
title: SparsePauliOp
description: API reference for qiskit.quantum_info.SparsePauliOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.SparsePauliOp
---

# SparsePauliOp

<span id="qiskit.quantum_info.SparsePauliOp" />

`SparsePauliOp(data, coeffs=None)`

Sparse N-qubit operator in a Pauli basis representation.

This is a sparse representation of an N-qubit matrix [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") in terms of N-qubit [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") and complex coefficients.

It can be used for performing operator arithmetic for hundred of qubits if the number of non-zero Pauli basis terms is sufficiently small.

The Pauli basis components are stored as a [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") object and can be accessed using the [`table`](qiskit.quantum_info.SparsePauliOp.table "qiskit.quantum_info.SparsePauliOp.table") attribute. The coefficients are stored as a complex Numpy array vector and can be accessed using the [`coeffs`](qiskit.quantum_info.SparsePauliOp.coeffs "qiskit.quantum_info.SparsePauliOp.coeffs") attribute.

Initialize an operator object.

**Parameters**

*   **data** ([*PauliTable*](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – Pauli table of terms.
*   **coeffs** (*np.ndarray*) – complex coefficients for Pauli terms.

**Raises**

**QiskitError** – If the input data or coeffs are invalid.

## Attributes

|                                                                                                                           |                                                                      |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`SparsePauliOp.atol`](qiskit.quantum_info.SparsePauliOp.atol "qiskit.quantum_info.SparsePauliOp.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`SparsePauliOp.coeffs`](qiskit.quantum_info.SparsePauliOp.coeffs "qiskit.quantum_info.SparsePauliOp.coeffs")             | Return the Pauli coefficients.                                       |
| [`SparsePauliOp.dim`](qiskit.quantum_info.SparsePauliOp.dim "qiskit.quantum_info.SparsePauliOp.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`SparsePauliOp.num_qubits`](qiskit.quantum_info.SparsePauliOp.num_qubits "qiskit.quantum_info.SparsePauliOp.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`SparsePauliOp.qargs`](qiskit.quantum_info.SparsePauliOp.qargs "qiskit.quantum_info.SparsePauliOp.qargs")                | Return the qargs for the operator.                                   |
| [`SparsePauliOp.rtol`](qiskit.quantum_info.SparsePauliOp.rtol "qiskit.quantum_info.SparsePauliOp.rtol")                   | The relative tolerance parameter for float comparisons.              |
| [`SparsePauliOp.size`](qiskit.quantum_info.SparsePauliOp.size "qiskit.quantum_info.SparsePauliOp.size")                   | The number of Pauli of Pauli terms in the operator.                  |
| [`SparsePauliOp.table`](qiskit.quantum_info.SparsePauliOp.table "qiskit.quantum_info.SparsePauliOp.table")                | Return the the PauliTable.                                           |

## Methods

|                                                                                                                                                        |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`SparsePauliOp.__call__`](qiskit.quantum_info.SparsePauliOp.__call__ "qiskit.quantum_info.SparsePauliOp.__call__")(qargs)                             | Return a clone with qargs set                                              |
| [`SparsePauliOp.__getitem__`](qiskit.quantum_info.SparsePauliOp.__getitem__ "qiskit.quantum_info.SparsePauliOp.__getitem__")(key)                      | Return a view of the SparsePauliOp.                                        |
| [`SparsePauliOp.__len__`](qiskit.quantum_info.SparsePauliOp.__len__ "qiskit.quantum_info.SparsePauliOp.__len__")()                                     | Return the size.                                                           |
| [`SparsePauliOp.__mul__`](qiskit.quantum_info.SparsePauliOp.__mul__ "qiskit.quantum_info.SparsePauliOp.__mul__")(other)                                |                                                                            |
| [`SparsePauliOp.add`](qiskit.quantum_info.SparsePauliOp.add "qiskit.quantum_info.SparsePauliOp.add")(other)                                            | Return the linear operator self + other.                                   |
| [`SparsePauliOp.adjoint`](qiskit.quantum_info.SparsePauliOp.adjoint "qiskit.quantum_info.SparsePauliOp.adjoint")()                                     | Return the adjoint of the operator.                                        |
| [`SparsePauliOp.compose`](qiskit.quantum_info.SparsePauliOp.compose "qiskit.quantum_info.SparsePauliOp.compose")(other\[, qargs, front])               | Return the composition channel self∘other.                                 |
| [`SparsePauliOp.conjugate`](qiskit.quantum_info.SparsePauliOp.conjugate "qiskit.quantum_info.SparsePauliOp.conjugate")()                               | Return the conjugate of the operator.                                      |
| [`SparsePauliOp.copy`](qiskit.quantum_info.SparsePauliOp.copy "qiskit.quantum_info.SparsePauliOp.copy")()                                              | Make a deep copy of current operator.                                      |
| [`SparsePauliOp.dot`](qiskit.quantum_info.SparsePauliOp.dot "qiskit.quantum_info.SparsePauliOp.dot")(other\[, qargs])                                  | Return the composition channel self∘other.                                 |
| [`SparsePauliOp.expand`](qiskit.quantum_info.SparsePauliOp.expand "qiskit.quantum_info.SparsePauliOp.expand")(other)                                   | Return the tensor product operator other ⊗ self.                           |
| [`SparsePauliOp.from_list`](qiskit.quantum_info.SparsePauliOp.from_list "qiskit.quantum_info.SparsePauliOp.from_list")(obj)                            | Construct from a list \[(pauli\_str, coeffs)]                              |
| [`SparsePauliOp.from_operator`](qiskit.quantum_info.SparsePauliOp.from_operator "qiskit.quantum_info.SparsePauliOp.from_operator")(obj\[, atol, rtol]) | Construct from an Operator objector.                                       |
| [`SparsePauliOp.input_dims`](qiskit.quantum_info.SparsePauliOp.input_dims "qiskit.quantum_info.SparsePauliOp.input_dims")(\[qargs])                    | Return tuple of input dimension for specified subsystems.                  |
| [`SparsePauliOp.is_unitary`](qiskit.quantum_info.SparsePauliOp.is_unitary "qiskit.quantum_info.SparsePauliOp.is_unitary")(\[atol, rtol])               | Return True if operator is a unitary matrix.                               |
| [`SparsePauliOp.label_iter`](qiskit.quantum_info.SparsePauliOp.label_iter "qiskit.quantum_info.SparsePauliOp.label_iter")()                            | Return a label representation iterator.                                    |
| [`SparsePauliOp.matrix_iter`](qiskit.quantum_info.SparsePauliOp.matrix_iter "qiskit.quantum_info.SparsePauliOp.matrix_iter")(\[sparse])                | Return a matrix representation iterator.                                   |
| [`SparsePauliOp.multiply`](qiskit.quantum_info.SparsePauliOp.multiply "qiskit.quantum_info.SparsePauliOp.multiply")(other)                             | Return the linear operator other \* self.                                  |
| [`SparsePauliOp.output_dims`](qiskit.quantum_info.SparsePauliOp.output_dims "qiskit.quantum_info.SparsePauliOp.output_dims")(\[qargs])                 | Return tuple of output dimension for specified subsystems.                 |
| [`SparsePauliOp.power`](qiskit.quantum_info.SparsePauliOp.power "qiskit.quantum_info.SparsePauliOp.power")(n)                                          | Return the compose of a operator with itself n times.                      |
| [`SparsePauliOp.reshape`](qiskit.quantum_info.SparsePauliOp.reshape "qiskit.quantum_info.SparsePauliOp.reshape")(\[input\_dims, output\_dims])         | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`SparsePauliOp.set_atol`](qiskit.quantum_info.SparsePauliOp.set_atol "qiskit.quantum_info.SparsePauliOp.set_atol")(value)                             | Set the class default absolute tolerance parameter for float comparisons.  |
| [`SparsePauliOp.set_rtol`](qiskit.quantum_info.SparsePauliOp.set_rtol "qiskit.quantum_info.SparsePauliOp.set_rtol")(value)                             | Set the class default relative tolerance parameter for float comparisons.  |
| [`SparsePauliOp.simplify`](qiskit.quantum_info.SparsePauliOp.simplify "qiskit.quantum_info.SparsePauliOp.simplify")(\[atol, rtol])                     | Simplify PauliTable by combining duplicaties and removing zeros.           |
| [`SparsePauliOp.subtract`](qiskit.quantum_info.SparsePauliOp.subtract "qiskit.quantum_info.SparsePauliOp.subtract")(other)                             | Return the linear operator self - other.                                   |
| [`SparsePauliOp.tensor`](qiskit.quantum_info.SparsePauliOp.tensor "qiskit.quantum_info.SparsePauliOp.tensor")(other)                                   | Return the tensor product operator self ⊗ other.                           |
| [`SparsePauliOp.to_list`](qiskit.quantum_info.SparsePauliOp.to_list "qiskit.quantum_info.SparsePauliOp.to_list")(\[array])                             | Convert to a list Pauli string labels and coefficients.                    |
| [`SparsePauliOp.to_matrix`](qiskit.quantum_info.SparsePauliOp.to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix")(\[sparse])                      | Convert to a dense or sparse matrix.                                       |
| [`SparsePauliOp.to_operator`](qiskit.quantum_info.SparsePauliOp.to_operator "qiskit.quantum_info.SparsePauliOp.to_operator")()                         | Convert to a matrix Operator object                                        |
| [`SparsePauliOp.transpose`](qiskit.quantum_info.SparsePauliOp.transpose "qiskit.quantum_info.SparsePauliOp.transpose")()                               | Return the transpose of the operator.                                      |
| [`SparsePauliOp.__call__`](qiskit.quantum_info.SparsePauliOp.__call__ "qiskit.quantum_info.SparsePauliOp.__call__")(qargs)                             | Return a clone with qargs set                                              |
| [`SparsePauliOp.__mul__`](qiskit.quantum_info.SparsePauliOp.__mul__ "qiskit.quantum_info.SparsePauliOp.__mul__")(other)                                |                                                                            |

