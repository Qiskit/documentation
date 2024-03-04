---
title: SparsePauliOp
description: API reference for qiskit.quantum_info.SparsePauliOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.SparsePauliOp
---

# SparsePauliOp

<span id="qiskit.quantum_info.SparsePauliOp" />

`SparsePauliOp(data, coeffs=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/quantum_info/operators/symplectic/sparse_pauli_op.py "view source code")

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Sparse N-qubit operator in a Pauli basis representation.

This is a sparse representation of an N-qubit matrix [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") in terms of N-qubit [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") and complex coefficients.

It can be used for performing operator arithmetic for hundred of qubits if the number of non-zero Pauli basis terms is sufficiently small.

The Pauli basis components are stored as a [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") object and can be accessed using the [`table`](#qiskit.quantum_info.SparsePauliOp.table "qiskit.quantum_info.SparsePauliOp.table") attribute. The coefficients are stored as a complex Numpy array vector and can be accessed using the [`coeffs`](#qiskit.quantum_info.SparsePauliOp.coeffs "qiskit.quantum_info.SparsePauliOp.coeffs") attribute.

Initialize an operator object.

**Parameters**

*   **data** ([*PauliTable*](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – Pauli table of terms.
*   **coeffs** (*np.ndarray*) – complex coefficients for Pauli terms.

**Raises**

**QiskitError** – If the input data or coeffs are invalid.

## Methods

### adjoint

<span id="qiskit.quantum_info.SparsePauliOp.adjoint" />

`SparsePauliOp.adjoint()`

Return the adjoint of the Operator.

### compose

<span id="qiskit.quantum_info.SparsePauliOp.compose" />

`SparsePauliOp.compose(other, qargs=None, front=False)`

Return the operator composition with another SparsePauliOp.

**Parameters**

*   **other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – a SparsePauliOp object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed SparsePauliOp.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](qiskit.quantum_info.SparsePauliOp#dot "qiskit.quantum_info.SparsePauliOp.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.SparsePauliOp#dot "qiskit.quantum_info.SparsePauliOp.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### conjugate

<span id="qiskit.quantum_info.SparsePauliOp.conjugate" />

`SparsePauliOp.conjugate()`

Return the conjugate of the SparsePauliOp.

### copy

<span id="qiskit.quantum_info.SparsePauliOp.copy" />

`SparsePauliOp.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.SparsePauliOp.dot" />

`SparsePauliOp.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).

**Returns**

The right matrix multiplied Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

### expand

<span id="qiskit.quantum_info.SparsePauliOp.expand" />

`SparsePauliOp.expand(other)`

Return the reverse-order tensor product with another SparsePauliOp.

**Parameters**

**other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – a SparsePauliOp object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current SparsePauliOp, and $b$ is the other SparsePauliOp.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

### from\_list

<span id="qiskit.quantum_info.SparsePauliOp.from_list" />

`static SparsePauliOp.from_list(obj)`

Construct from a list \[(pauli\_str, coeffs)]

### from\_operator

<span id="qiskit.quantum_info.SparsePauliOp.from_operator" />

`static SparsePauliOp.from_operator(obj, atol=None, rtol=None)`

Construct from an Operator objector.

Note that the cost of this construction is exponential as it involves taking inner products with every element of the N-qubit Pauli basis.

**Parameters**

*   **obj** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an N-qubit operator.
*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optional. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the SparsePauliOp representation of the operator.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if the input operator is not an N-qubit operator.

### input\_dims

<span id="qiskit.quantum_info.SparsePauliOp.input_dims" />

`SparsePauliOp.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_unitary

<span id="qiskit.quantum_info.SparsePauliOp.is_unitary" />

`SparsePauliOp.is_unitary(atol=None, rtol=None)`

Return True if operator is a unitary matrix.

**Parameters**

*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optional. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

True if the operator is unitary, False otherwise.

**Return type**

bool

### label\_iter

<span id="qiskit.quantum_info.SparsePauliOp.label_iter" />

`SparsePauliOp.label_iter()`

Return a label representation iterator.

This is a lazy iterator that converts each term in the SparsePauliOp into a tuple (label, coeff). To convert the entire table to labels use the `to_labels()` method.

**Returns**

label iterator object for the PauliTable.

**Return type**

LabelIterator

### matrix\_iter

<span id="qiskit.quantum_info.SparsePauliOp.matrix_iter" />

`SparsePauliOp.matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each term in the SparsePauliOp into a matrix as it is used. To convert to a single matrix use the [`to_matrix()`](qiskit.quantum_info.SparsePauliOp#to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliTable.

**Return type**

MatrixIterator

### output\_dims

<span id="qiskit.quantum_info.SparsePauliOp.output_dims" />

`SparsePauliOp.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.SparsePauliOp.power" />

`SparsePauliOp.power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

### reshape

<span id="qiskit.quantum_info.SparsePauliOp.reshape" />

`SparsePauliOp.reshape(input_dims=None, output_dims=None, num_qubits=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Parameters**

*   **input\_dims** (*None or tuple*) – new subsystem input dimensions. If None the original input dims will be preserved \[Default: None].
*   **output\_dims** (*None or tuple*) – new subsystem output dimensions. If None the original output dims will be preserved \[Default: None].
*   **num\_qubits** (*None or int*) – reshape to an N-qubit operator \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### simplify

<span id="qiskit.quantum_info.SparsePauliOp.simplify" />

`SparsePauliOp.simplify(atol=None, rtol=None)`

Simplify PauliTable by combining duplicates and removing zeros.

**Parameters**

*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optional. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the simplified SparsePauliOp operator.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

### tensor

<span id="qiskit.quantum_info.SparsePauliOp.tensor" />

`SparsePauliOp.tensor(other)`

Return the tensor product with another SparsePauliOp.

**Parameters**

**other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – a SparsePauliOp object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current SparsePauliOp, and $b$ is the other SparsePauliOp.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

### to\_list

<span id="qiskit.quantum_info.SparsePauliOp.to_list" />

`SparsePauliOp.to_list(array=False)`

Convert to a list Pauli string labels and coefficients.

For operators with a lot of terms converting using the `array=True` kwarg will be more efficient since it allocates memory for the full Numpy array of labels in advance.

**Parameters**

**array** (*bool*) – return a Numpy array if True, otherwise return a list (Default: False).

**Returns**

List of pairs (label, coeff) for rows of the PauliTable.

**Return type**

list or array

### to\_matrix

<span id="qiskit.quantum_info.SparsePauliOp.to_matrix" />

`SparsePauliOp.to_matrix(sparse=False)`

Convert to a dense or sparse matrix.

**Parameters**

**sparse** (*bool*) – if True return a sparse CSR matrix, otherwise return dense Numpy array (Default: False).

**Returns**

A dense matrix if sparse=False. csr\_matrix: A sparse matrix in CSR format if sparse=True.

**Return type**

array

### to\_operator

<span id="qiskit.quantum_info.SparsePauliOp.to_operator" />

`SparsePauliOp.to_operator()`

Convert to a matrix Operator object

### transpose

<span id="qiskit.quantum_info.SparsePauliOp.transpose" />

`SparsePauliOp.transpose()`

Return the transpose of the SparsePauliOp.

## Attributes

<span id="qiskit.quantum_info.SparsePauliOp.atol" />

### atol

`= 1e-08`

<span id="qiskit.quantum_info.SparsePauliOp.coeffs" />

### coeffs

Return the Pauli coefficients.

<span id="qiskit.quantum_info.SparsePauliOp.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit.quantum_info.SparsePauliOp.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit.quantum_info.SparsePauliOp.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit.quantum_info.SparsePauliOp.rtol" />

### rtol

`= 1e-05`

<span id="qiskit.quantum_info.SparsePauliOp.settings" />

### settings

Return settings.

**Return type**

`Dict`

<span id="qiskit.quantum_info.SparsePauliOp.size" />

### size

The number of Pauli of Pauli terms in the operator.

<span id="qiskit.quantum_info.SparsePauliOp.table" />

### table

Return the the PauliTable.

