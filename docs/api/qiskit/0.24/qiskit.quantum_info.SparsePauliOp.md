<span id="qiskit-quantum-info-sparsepauliop" />

# qiskit.quantum\_info.SparsePauliOp

<span id="undefined" />

`SparsePauliOp(data, coeffs=None)`

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

<span id="undefined" />

`__init__(data, coeffs=None)`

Initialize an operator object.

**Parameters**

*   **data** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – Pauli table of terms.
*   **coeffs** (*np.ndarray*) – complex coefficients for Pauli terms.

**Raises**

**QiskitError** – If the input data or coeffs are invalid.

## Methods

|                                                                                                                                           |                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.SparsePauliOp.__init__ "qiskit.quantum_info.SparsePauliOp.__init__")(data\[, coeffs])                   | Initialize an operator object.                                             |
| [`add`](#qiskit.quantum_info.SparsePauliOp.add "qiskit.quantum_info.SparsePauliOp.add")(other)                                            | Return the linear operator self + other.                                   |
| [`adjoint`](#qiskit.quantum_info.SparsePauliOp.adjoint "qiskit.quantum_info.SparsePauliOp.adjoint")()                                     | Return the adjoint of the operator.                                        |
| [`compose`](#qiskit.quantum_info.SparsePauliOp.compose "qiskit.quantum_info.SparsePauliOp.compose")(other\[, qargs, front])               | Return the composition channel self∘other.                                 |
| [`conjugate`](#qiskit.quantum_info.SparsePauliOp.conjugate "qiskit.quantum_info.SparsePauliOp.conjugate")()                               | Return the conjugate of the operator.                                      |
| [`copy`](#qiskit.quantum_info.SparsePauliOp.copy "qiskit.quantum_info.SparsePauliOp.copy")()                                              | Make a deep copy of current operator.                                      |
| [`dot`](#qiskit.quantum_info.SparsePauliOp.dot "qiskit.quantum_info.SparsePauliOp.dot")(other\[, qargs])                                  | Return the composition channel self∘other.                                 |
| [`expand`](#qiskit.quantum_info.SparsePauliOp.expand "qiskit.quantum_info.SparsePauliOp.expand")(other)                                   | Return the tensor product operator other ⊗ self.                           |
| [`from_list`](#qiskit.quantum_info.SparsePauliOp.from_list "qiskit.quantum_info.SparsePauliOp.from_list")(obj)                            | Construct from a list \[(pauli\_str, coeffs)]                              |
| [`from_operator`](#qiskit.quantum_info.SparsePauliOp.from_operator "qiskit.quantum_info.SparsePauliOp.from_operator")(obj\[, atol, rtol]) | Construct from an Operator objector.                                       |
| [`input_dims`](#qiskit.quantum_info.SparsePauliOp.input_dims "qiskit.quantum_info.SparsePauliOp.input_dims")(\[qargs])                    | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](#qiskit.quantum_info.SparsePauliOp.is_unitary "qiskit.quantum_info.SparsePauliOp.is_unitary")(\[atol, rtol])               | Return True if operator is a unitary matrix.                               |
| [`label_iter`](#qiskit.quantum_info.SparsePauliOp.label_iter "qiskit.quantum_info.SparsePauliOp.label_iter")()                            | Return a label representation iterator.                                    |
| [`matrix_iter`](#qiskit.quantum_info.SparsePauliOp.matrix_iter "qiskit.quantum_info.SparsePauliOp.matrix_iter")(\[sparse])                | Return a matrix representation iterator.                                   |
| [`multiply`](#qiskit.quantum_info.SparsePauliOp.multiply "qiskit.quantum_info.SparsePauliOp.multiply")(other)                             | Return the linear operator other \* self.                                  |
| [`output_dims`](#qiskit.quantum_info.SparsePauliOp.output_dims "qiskit.quantum_info.SparsePauliOp.output_dims")(\[qargs])                 | Return tuple of output dimension for specified subsystems.                 |
| [`power`](#qiskit.quantum_info.SparsePauliOp.power "qiskit.quantum_info.SparsePauliOp.power")(n)                                          | Return the compose of a operator with itself n times.                      |
| [`reshape`](#qiskit.quantum_info.SparsePauliOp.reshape "qiskit.quantum_info.SparsePauliOp.reshape")(\[input\_dims, output\_dims])         | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`set_atol`](#qiskit.quantum_info.SparsePauliOp.set_atol "qiskit.quantum_info.SparsePauliOp.set_atol")(value)                             | Set the class default absolute tolerance parameter for float comparisons.  |
| [`set_rtol`](#qiskit.quantum_info.SparsePauliOp.set_rtol "qiskit.quantum_info.SparsePauliOp.set_rtol")(value)                             | Set the class default relative tolerance parameter for float comparisons.  |
| [`simplify`](#qiskit.quantum_info.SparsePauliOp.simplify "qiskit.quantum_info.SparsePauliOp.simplify")(\[atol, rtol])                     | Simplify PauliTable by combining duplicaties and removing zeros.           |
| [`subtract`](#qiskit.quantum_info.SparsePauliOp.subtract "qiskit.quantum_info.SparsePauliOp.subtract")(other)                             | Return the linear operator self - other.                                   |
| [`tensor`](#qiskit.quantum_info.SparsePauliOp.tensor "qiskit.quantum_info.SparsePauliOp.tensor")(other)                                   | Return the tensor product operator self ⊗ other.                           |
| [`to_list`](#qiskit.quantum_info.SparsePauliOp.to_list "qiskit.quantum_info.SparsePauliOp.to_list")(\[array])                             | Convert to a list Pauli string labels and coefficients.                    |
| [`to_matrix`](#qiskit.quantum_info.SparsePauliOp.to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix")(\[sparse])                      | Convert to a dense or sparse matrix.                                       |
| [`to_operator`](#qiskit.quantum_info.SparsePauliOp.to_operator "qiskit.quantum_info.SparsePauliOp.to_operator")()                         | Convert to a matrix Operator object                                        |
| [`transpose`](#qiskit.quantum_info.SparsePauliOp.transpose "qiskit.quantum_info.SparsePauliOp.transpose")()                               | Return the transpose of the operator.                                      |

## Attributes

|                                                                                                              |                                                                      |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.SparsePauliOp.atol "qiskit.quantum_info.SparsePauliOp.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`coeffs`](#qiskit.quantum_info.SparsePauliOp.coeffs "qiskit.quantum_info.SparsePauliOp.coeffs")             | Return the Pauli coefficients.                                       |
| [`dim`](#qiskit.quantum_info.SparsePauliOp.dim "qiskit.quantum_info.SparsePauliOp.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`num_qubits`](#qiskit.quantum_info.SparsePauliOp.num_qubits "qiskit.quantum_info.SparsePauliOp.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`qargs`](#qiskit.quantum_info.SparsePauliOp.qargs "qiskit.quantum_info.SparsePauliOp.qargs")                | Return the qargs for the operator.                                   |
| [`rtol`](#qiskit.quantum_info.SparsePauliOp.rtol "qiskit.quantum_info.SparsePauliOp.rtol")                   | The relative tolerance parameter for float comparisons.              |
| [`size`](#qiskit.quantum_info.SparsePauliOp.size "qiskit.quantum_info.SparsePauliOp.size")                   | The number of Pauli of Pauli terms in the operator.                  |
| [`table`](#qiskit.quantum_info.SparsePauliOp.table "qiskit.quantum_info.SparsePauliOp.table")                | Return the the PauliTable.                                           |

<span id="undefined" />

`add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

<span id="undefined" />

`adjoint()`

Return the adjoint of the operator.

<span id="undefined" />

`property atol`

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`property coeffs`

Return the Pauli coefficients.

<span id="undefined" />

`compose(other, qargs=None, front=False)`

Return the composition channel self∘other.

**Parameters**

*   **other** ([*SparsePauliOp*](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to compose other on.
*   **front** (*bool or None*) – If False compose in standard order other(self(input)) otherwise compose in reverse order self(other(input)) \[default: False]

**Returns**

The composed operator.

**Return type**

[SparsePauliOp](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

*   **QiskitError** – if other cannot be converted to an Operator or has
*   **incompatible dimensions.** –

<span id="undefined" />

`conjugate()`

Return the conjugate of the operator.

<span id="undefined" />

`copy()`

Make a deep copy of current operator.

<span id="undefined" />

`property dim`

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

`dot(other, qargs=None)`

Return the composition channel self∘other.

**Parameters**

*   **other** ([*SparsePauliOp*](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to compose other on.

**Returns**

The composed operator.

**Return type**

[SparsePauliOp](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

*   **QiskitError** – if other cannot be converted to an Operator or has
*   **incompatible dimensions.** –

<span id="undefined" />

`expand(other)`

Return the tensor product operator other ⊗ self.

**Parameters**

**other** ([*SparsePauliOp*](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – an operator object.

**Returns**

the tensor product operator other ⊗ self.

**Return type**

[SparsePauliOp](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if other cannot be converted to a SparsePauliOp operator.

<span id="undefined" />

`static from_list(obj)`

Construct from a list \[(pauli\_str, coeffs)]

<span id="undefined" />

`static from_operator(obj, atol=None, rtol=None)`

Construct from an Operator objector.

Note that the cost of this contruction is exponential as it involves taking inner products with every element of the N-qubit Pauli basis.

**Parameters**

*   **obj** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an N-qubit operator.
*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optinoal. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the SparsePauliOp representation of the operator.

**Return type**

[SparsePauliOp](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if the input operator is not an N-qubit operator.

<span id="undefined" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="undefined" />

`is_unitary(atol=None, rtol=None)`

Return True if operator is a unitary matrix.

**Parameters**

*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optinoal. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

True if the operator is unitary, False otherwise.

**Return type**

bool

<span id="undefined" />

`label_iter()`

Return a label representation iterator.

This is a lazy iterator that converts each term in the SparsePauliOp into a tuple (label, coeff). To convert the entire table to labels use the `to_labels()` method.

**Returns**

label iterator object for the PauliTable.

**Return type**

LabelIterator

<span id="undefined" />

`matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each term in the SparsePauliOp into a matrix as it is used. To convert to a single matrix use the [`to_matrix()`](#qiskit.quantum_info.SparsePauliOp.to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliTable.

**Return type**

MatrixIterator

<span id="undefined" />

`multiply(other)`

Return the linear operator other \* self.

DEPRECATED: use `other * operator` instead.

**Parameters**

**other** (*complex*) – a complex number.

**Returns**

the linear operator other \* self.

**Return type**

BaseOperator

**Raises**

**NotImplementedError** – if subclass does not support multiplication.

<span id="undefined" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

<span id="undefined" />

`power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

<span id="undefined" />

`property qargs`

Return the qargs for the operator.

<span id="undefined" />

`reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Arg:**

**input\_dims (None or tuple): new subsystem input dimensions.**

If None the original input dims will be preserved \[Default: None].

**output\_dims (None or tuple): new subsystem output dimensions.**

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

<span id="undefined" />

`property rtol`

The relative tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

DEPRECATED: use operator.atol = value instead

<span id="undefined" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

DEPRECATED: use operator.rtol = value instead

<span id="undefined" />

`simplify(atol=None, rtol=None)`

Simplify PauliTable by combining duplicaties and removing zeros.

**Parameters**

*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optinoal. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the simplified SparsePauliOp operator.

**Return type**

[SparsePauliOp](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

<span id="undefined" />

`property size`

The number of Pauli of Pauli terms in the operator.

<span id="undefined" />

`subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

<span id="undefined" />

`property table`

Return the the PauliTable.

<span id="undefined" />

`tensor(other)`

Return the tensor product operator self ⊗ other.

**Parameters**

**other** ([*SparsePauliOp*](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – a operator subclass object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[SparsePauliOp](#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if other cannot be converted to a SparsePauliOp operator.

<span id="undefined" />

`to_list(array=False)`

Convert to a list Pauli string labels and coefficients.

For operators with a lot of terms converting using the `array=True` kwarg will be more efficient since it allocates memory for the full Numpy array of labels in advance.

**Parameters**

**array** (*bool*) – return a Numpy array if True, otherwise return a list (Default: False).

**Returns**

List of pairs (label, coeff) for rows of the PauliTable.

**Return type**

list or array

<span id="undefined" />

`to_matrix(sparse=False)`

Convert to a dense or sparse matrix.

**Parameters**

**sparse** (*bool*) – if True return a sparse CSR matrix, otherwise return dense Numpy array (Default: False).

**Returns**

A dense matrix if sparse=False. csr\_matrix: A sparse matrix in CSR format if sparse=True.

**Return type**

array

<span id="undefined" />

`to_operator()`

Convert to a matrix Operator object

<span id="undefined" />

`transpose()`

Return the transpose of the operator.
