# SparsePauliOp

<span id="undefined" />

`SparsePauliOp(data, coeffs=None, *, ignore_pauli_phase=False, copy=True)`

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Sparse N-qubit operator in a Pauli basis representation.

This is a sparse representation of an N-qubit matrix [`Operator`](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") in terms of N-qubit [`PauliList`](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList") and complex coefficients.

It can be used for performing operator arithmetic for hundred of qubits if the number of non-zero Pauli basis terms is sufficiently small.

The Pauli basis components are stored as a [`PauliList`](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList") object and can be accessed using the [`paulis`](#qiskit.quantum_info.SparsePauliOp.paulis "qiskit.quantum_info.SparsePauliOp.paulis") attribute. The coefficients are stored as a complex Numpy array vector and can be accessed using the [`coeffs`](#qiskit.quantum_info.SparsePauliOp.coeffs "qiskit.quantum_info.SparsePauliOp.coeffs") attribute.

Initialize an operator object.

**Parameters**

*   **data** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")  *or*[*SparsePauliOp*](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")  *or*[*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")  *or*[*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli") *or list or str*) – Pauli list of terms. A list of Pauli strings or a Pauli string is also allowed.

*   **coeffs** (*np.ndarray*) –

    complex coefficients for Pauli terms.

    <Admonition title="Note" type="note">
      If `data` is a [`SparsePauliOp`](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp") and `coeffs` is not `None`, the value of the `SparsePauliOp.coeffs` will be ignored, and only the passed keyword argument `coeffs` will be used.
    </Admonition>

*   **ignore\_pauli\_phase** (*bool*) – if true, any `phase` component of a given [`PauliList`](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList") will be assumed to be zero. This is more efficient in cases where a [`PauliList`](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList") has been constructed purely for this object, and it is already known that the phases in the ZX-convention are zero. It only makes sense to pass this option when giving [`PauliList`](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList") data. (Default: False)

*   **copy** (*bool*) – copy the input data if True, otherwise assign it directly, if possible. (Default: True)

**Raises**

**QiskitError** – If the input data or coeffs are invalid.

## Methods

|                                                                                                                                                                                  |                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`adjoint`](qiskit.quantum_info.SparsePauliOp.adjoint#qiskit.quantum_info.SparsePauliOp.adjoint "qiskit.quantum_info.SparsePauliOp.adjoint")                                     | Return the adjoint of the Operator.                                            |
| [`chop`](qiskit.quantum_info.SparsePauliOp.chop#qiskit.quantum_info.SparsePauliOp.chop "qiskit.quantum_info.SparsePauliOp.chop")                                                 | Set real and imaginary parts of the coefficients to 0 if `< tol` in magnitude. |
| [`compose`](qiskit.quantum_info.SparsePauliOp.compose#qiskit.quantum_info.SparsePauliOp.compose "qiskit.quantum_info.SparsePauliOp.compose")                                     | Return the operator composition with another SparsePauliOp.                    |
| [`conjugate`](qiskit.quantum_info.SparsePauliOp.conjugate#qiskit.quantum_info.SparsePauliOp.conjugate "qiskit.quantum_info.SparsePauliOp.conjugate")                             | Return the conjugate of the SparsePauliOp.                                     |
| [`copy`](qiskit.quantum_info.SparsePauliOp.copy#qiskit.quantum_info.SparsePauliOp.copy "qiskit.quantum_info.SparsePauliOp.copy")                                                 | Make a deep copy of current operator.                                          |
| [`dot`](qiskit.quantum_info.SparsePauliOp.dot#qiskit.quantum_info.SparsePauliOp.dot "qiskit.quantum_info.SparsePauliOp.dot")                                                     | Return the right multiplied operator self \* other.                            |
| [`equiv`](qiskit.quantum_info.SparsePauliOp.equiv#qiskit.quantum_info.SparsePauliOp.equiv "qiskit.quantum_info.SparsePauliOp.equiv")                                             | Check if two SparsePauliOp operators are equivalent.                           |
| [`expand`](qiskit.quantum_info.SparsePauliOp.expand#qiskit.quantum_info.SparsePauliOp.expand "qiskit.quantum_info.SparsePauliOp.expand")                                         | Return the reverse-order tensor product with another SparsePauliOp.            |
| [`from_list`](qiskit.quantum_info.SparsePauliOp.from_list#qiskit.quantum_info.SparsePauliOp.from_list "qiskit.quantum_info.SparsePauliOp.from_list")                             | Construct from a list of Pauli strings and coefficients.                       |
| [`from_operator`](qiskit.quantum_info.SparsePauliOp.from_operator#qiskit.quantum_info.SparsePauliOp.from_operator "qiskit.quantum_info.SparsePauliOp.from_operator")             | Construct from an Operator objector.                                           |
| [`from_sparse_list`](qiskit.quantum_info.SparsePauliOp.from_sparse_list#qiskit.quantum_info.SparsePauliOp.from_sparse_list "qiskit.quantum_info.SparsePauliOp.from_sparse_list") | Construct from a list of local Pauli strings and coefficients.                 |
| [`input_dims`](qiskit.quantum_info.SparsePauliOp.input_dims#qiskit.quantum_info.SparsePauliOp.input_dims "qiskit.quantum_info.SparsePauliOp.input_dims")                         | Return tuple of input dimension for specified subsystems.                      |
| [`is_unitary`](qiskit.quantum_info.SparsePauliOp.is_unitary#qiskit.quantum_info.SparsePauliOp.is_unitary "qiskit.quantum_info.SparsePauliOp.is_unitary")                         | Return True if operator is a unitary matrix.                                   |
| [`label_iter`](qiskit.quantum_info.SparsePauliOp.label_iter#qiskit.quantum_info.SparsePauliOp.label_iter "qiskit.quantum_info.SparsePauliOp.label_iter")                         | Return a label representation iterator.                                        |
| [`matrix_iter`](qiskit.quantum_info.SparsePauliOp.matrix_iter#qiskit.quantum_info.SparsePauliOp.matrix_iter "qiskit.quantum_info.SparsePauliOp.matrix_iter")                     | Return a matrix representation iterator.                                       |
| [`output_dims`](qiskit.quantum_info.SparsePauliOp.output_dims#qiskit.quantum_info.SparsePauliOp.output_dims "qiskit.quantum_info.SparsePauliOp.output_dims")                     | Return tuple of output dimension for specified subsystems.                     |
| [`power`](qiskit.quantum_info.SparsePauliOp.power#qiskit.quantum_info.SparsePauliOp.power "qiskit.quantum_info.SparsePauliOp.power")                                             | Return the compose of a operator with itself n times.                          |
| [`reshape`](qiskit.quantum_info.SparsePauliOp.reshape#qiskit.quantum_info.SparsePauliOp.reshape "qiskit.quantum_info.SparsePauliOp.reshape")                                     | Return a shallow copy with reshaped input and output subsystem dimensions.     |
| [`simplify`](qiskit.quantum_info.SparsePauliOp.simplify#qiskit.quantum_info.SparsePauliOp.simplify "qiskit.quantum_info.SparsePauliOp.simplify")                                 | Simplify PauliList by combining duplicates and removing zeros.                 |
| [`sum`](qiskit.quantum_info.SparsePauliOp.sum#qiskit.quantum_info.SparsePauliOp.sum "qiskit.quantum_info.SparsePauliOp.sum")                                                     | Sum of SparsePauliOps.                                                         |
| [`tensor`](qiskit.quantum_info.SparsePauliOp.tensor#qiskit.quantum_info.SparsePauliOp.tensor "qiskit.quantum_info.SparsePauliOp.tensor")                                         | Return the tensor product with another SparsePauliOp.                          |
| [`to_list`](qiskit.quantum_info.SparsePauliOp.to_list#qiskit.quantum_info.SparsePauliOp.to_list "qiskit.quantum_info.SparsePauliOp.to_list")                                     | Convert to a list Pauli string labels and coefficients.                        |
| [`to_matrix`](qiskit.quantum_info.SparsePauliOp.to_matrix#qiskit.quantum_info.SparsePauliOp.to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix")                             | Convert to a dense or sparse matrix.                                           |
| [`to_operator`](qiskit.quantum_info.SparsePauliOp.to_operator#qiskit.quantum_info.SparsePauliOp.to_operator "qiskit.quantum_info.SparsePauliOp.to_operator")                     | Convert to a matrix Operator object                                            |
| [`transpose`](qiskit.quantum_info.SparsePauliOp.transpose#qiskit.quantum_info.SparsePauliOp.transpose "qiskit.quantum_info.SparsePauliOp.transpose")                             | Return the transpose of the SparsePauliOp.                                     |

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

### paulis

Return the the PauliList.

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

DEPRECATED - Return the the PauliTable.
