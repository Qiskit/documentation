# SparsePauliOp

<span id="undefined" />

`SparsePauliOp(data, coeffs=None)`

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Sparse N-qubit operator in a Pauli basis representation.

This is a sparse representation of an N-qubit matrix [`Operator`](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") in terms of N-qubit [`PauliTable`](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") and complex coefficients.

It can be used for performing operator arithmetic for hundred of qubits if the number of non-zero Pauli basis terms is sufficiently small.

The Pauli basis components are stored as a [`PauliTable`](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") object and can be accessed using the [`table`](#qiskit.quantum_info.SparsePauliOp.table "qiskit.quantum_info.SparsePauliOp.table") attribute. The coefficients are stored as a complex Numpy array vector and can be accessed using the [`coeffs`](#qiskit.quantum_info.SparsePauliOp.coeffs "qiskit.quantum_info.SparsePauliOp.coeffs") attribute.

Initialize an operator object.

**Parameters**

*   **data** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – Pauli table of terms.
*   **coeffs** (*np.ndarray*) – complex coefficients for Pauli terms.

**Raises**

**QiskitError** – If the input data or coeffs are invalid.

## Methods

|                                                                                                                                                                      |                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.SparsePauliOp.adjoint#qiskit.quantum_info.SparsePauliOp.adjoint "qiskit.quantum_info.SparsePauliOp.adjoint")                         | Return the adjoint of the Operator.                                        |
| [`compose`](qiskit.quantum_info.SparsePauliOp.compose#qiskit.quantum_info.SparsePauliOp.compose "qiskit.quantum_info.SparsePauliOp.compose")                         | Return the operator composition with another SparsePauliOp.                |
| [`conjugate`](qiskit.quantum_info.SparsePauliOp.conjugate#qiskit.quantum_info.SparsePauliOp.conjugate "qiskit.quantum_info.SparsePauliOp.conjugate")                 | Return the conjugate of the SparsePauliOp.                                 |
| [`copy`](qiskit.quantum_info.SparsePauliOp.copy#qiskit.quantum_info.SparsePauliOp.copy "qiskit.quantum_info.SparsePauliOp.copy")                                     | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.SparsePauliOp.dot#qiskit.quantum_info.SparsePauliOp.dot "qiskit.quantum_info.SparsePauliOp.dot")                                         | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.SparsePauliOp.expand#qiskit.quantum_info.SparsePauliOp.expand "qiskit.quantum_info.SparsePauliOp.expand")                             | Return the reverse-order tensor product with another SparsePauliOp.        |
| [`from_list`](qiskit.quantum_info.SparsePauliOp.from_list#qiskit.quantum_info.SparsePauliOp.from_list "qiskit.quantum_info.SparsePauliOp.from_list")                 | Construct from a list \[(pauli\_str, coeffs)]                              |
| [`from_operator`](qiskit.quantum_info.SparsePauliOp.from_operator#qiskit.quantum_info.SparsePauliOp.from_operator "qiskit.quantum_info.SparsePauliOp.from_operator") | Construct from an Operator objector.                                       |
| [`input_dims`](qiskit.quantum_info.SparsePauliOp.input_dims#qiskit.quantum_info.SparsePauliOp.input_dims "qiskit.quantum_info.SparsePauliOp.input_dims")             | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](qiskit.quantum_info.SparsePauliOp.is_unitary#qiskit.quantum_info.SparsePauliOp.is_unitary "qiskit.quantum_info.SparsePauliOp.is_unitary")             | Return True if operator is a unitary matrix.                               |
| [`label_iter`](qiskit.quantum_info.SparsePauliOp.label_iter#qiskit.quantum_info.SparsePauliOp.label_iter "qiskit.quantum_info.SparsePauliOp.label_iter")             | Return a label representation iterator.                                    |
| [`matrix_iter`](qiskit.quantum_info.SparsePauliOp.matrix_iter#qiskit.quantum_info.SparsePauliOp.matrix_iter "qiskit.quantum_info.SparsePauliOp.matrix_iter")         | Return a matrix representation iterator.                                   |
| [`output_dims`](qiskit.quantum_info.SparsePauliOp.output_dims#qiskit.quantum_info.SparsePauliOp.output_dims "qiskit.quantum_info.SparsePauliOp.output_dims")         | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.SparsePauliOp.power#qiskit.quantum_info.SparsePauliOp.power "qiskit.quantum_info.SparsePauliOp.power")                                 | Return the compose of a operator with itself n times.                      |
| [`reshape`](qiskit.quantum_info.SparsePauliOp.reshape#qiskit.quantum_info.SparsePauliOp.reshape "qiskit.quantum_info.SparsePauliOp.reshape")                         | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`simplify`](qiskit.quantum_info.SparsePauliOp.simplify#qiskit.quantum_info.SparsePauliOp.simplify "qiskit.quantum_info.SparsePauliOp.simplify")                     | Simplify PauliTable by combining duplicates and removing zeros.            |
| [`tensor`](qiskit.quantum_info.SparsePauliOp.tensor#qiskit.quantum_info.SparsePauliOp.tensor "qiskit.quantum_info.SparsePauliOp.tensor")                             | Return the tensor product with another SparsePauliOp.                      |
| [`to_list`](qiskit.quantum_info.SparsePauliOp.to_list#qiskit.quantum_info.SparsePauliOp.to_list "qiskit.quantum_info.SparsePauliOp.to_list")                         | Convert to a list Pauli string labels and coefficients.                    |
| [`to_matrix`](qiskit.quantum_info.SparsePauliOp.to_matrix#qiskit.quantum_info.SparsePauliOp.to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix")                 | Convert to a dense or sparse matrix.                                       |
| [`to_operator`](qiskit.quantum_info.SparsePauliOp.to_operator#qiskit.quantum_info.SparsePauliOp.to_operator "qiskit.quantum_info.SparsePauliOp.to_operator")         | Convert to a matrix Operator object                                        |
| [`transpose`](qiskit.quantum_info.SparsePauliOp.transpose#qiskit.quantum_info.SparsePauliOp.transpose "qiskit.quantum_info.SparsePauliOp.transpose")                 | Return the transpose of the SparsePauliOp.                                 |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### coeffs

Return the Pauli coefficients.

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### rtol

`= 1e-05`

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`

<span id="undefined" />

### size

The number of Pauli of Pauli terms in the operator.

<span id="undefined" />

### table

Return the the PauliTable.
