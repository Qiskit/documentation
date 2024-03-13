---
title: Pauli
description: API reference for qiskit.quantum_info.Pauli
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Pauli
---

# Pauli

<span id="qiskit.quantum_info.Pauli" />

`qiskit.quantum_info.Pauli(data=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Bases: `BasePauli`

N-qubit Pauli operator.

This class represents an operator $P$ from the full $n$-qubit *Pauli* group

$$
P = (-i)^{q} P_{n-1} \otimes ... \otimes P_{0}
$$

where $q\in \mathbb{Z}_4$ and $P_i \in \{I, X, Y, Z\}$ are single-qubit Pauli matrices:

$$
I = \begin{pmatrix} 1 & 0  \\ 0 & 1  \end{pmatrix},
X = \begin{pmatrix} 0 & 1  \\ 1 & 0  \end{pmatrix},
Y = \begin{pmatrix} 0 & -i \\ i & 0  \end{pmatrix},
Z = \begin{pmatrix} 1 & 0  \\ 0 & -1 \end{pmatrix}.
$$

**Initialization**

A Pauli object can be initialized in several ways:

> **`Pauli(obj)`**
>
> where `obj` is a Pauli string, `Pauli` or [`ScalarOp`](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp") operator, or a Pauli gate or `QuantumCircuit` containing only Pauli gates.
>
> **`Pauli((z, x, phase))`**
>
> where `z` and `x` are boolean `numpy.ndarrays` and `phase` is an integer in `[0, 1, 2, 3]`.
>
> **`Pauli((z, x))`**
>
> equivalent to `Pauli((z, x, 0))` with trivial phase.

**String representation**

An $n$-qubit Pauli may be represented by a string consisting of $n$ characters from `['I', 'X', 'Y', 'Z']`, and optionally phase coefficient in $['', '-i', '-', 'i']$. For example: `XYZ` or `'-iZIZ'`.

In the string representation qubit-0 corresponds to the right-most Pauli character, and qubit-$(n-1)$ to the left-most Pauli character. For example `'XYZ'` represents $X\otimes Y \otimes Z$ with `'Z'` on qubit-0, `'Y'` on qubit-1, and `'X'` on qubit-2.

The string representation can be converted to a `Pauli` using the class initialization (`Pauli('-iXYZ')`). A `Pauli` object can be converted back to the string representation using the [`to_label()`](#qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label") method or `str(pauli)`.

<Admonition title="Note" type="note">
  Using `str` to convert a `Pauli` to a string will truncate the returned string for large numbers of qubits while [`to_label()`](#qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label") will return the full string with no truncation. The default truncation length is 50 characters. The default value can be changed by setting the class `__truncate__` attribute to an integer value. If set to `0` no truncation will be performed.
</Admonition>

**Array Representation**

The internal data structure of an $n$-qubit Pauli is two length-$n$ boolean vectors $z \in \mathbb{Z}_2^N$, $x \in \mathbb{Z}_2^N$, and an integer $q \in \mathbb{Z}_4$ defining the Pauli operator

$$
P = (-i)^{q + z\cdot x} Z^z \cdot X^x.
$$

The $k$-th qubit corresponds to the $k$-th entry in the $z$ and $x$ arrays

$$
\begin{aligned}
P &= P_{n-1} \otimes ... \otimes P_{0} \\
P_k &= (-i)^{z[k] * x[k]} Z^{z[k]}\cdot X^{x[k]}
\end{aligned}
$$

where `z[k] = P.z[k]`, `x[k] = P.x[k]` respectively.

The $z$ and $x$ arrays can be accessed and updated using the [`z`](#qiskit.quantum_info.Pauli.z "qiskit.quantum_info.Pauli.z") and [`x`](#qiskit.quantum_info.Pauli.x "qiskit.quantum_info.Pauli.x") properties respectively. The phase integer $q$ can be accessed and updated using the [`phase`](#qiskit.quantum_info.Pauli.phase "qiskit.quantum_info.Pauli.phase") property.

**Matrix Operator Representation**

Pauli’s can be converted to $(2^n, 2^n)$ [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") using the `to_operator()` method, or to a dense or sparse complex matrix using the [`to_matrix()`](#qiskit.quantum_info.Pauli.to_matrix "qiskit.quantum_info.Pauli.to_matrix") method.

**Data Access**

The individual qubit Paulis can be accessed and updated using the `[]` operator which accepts integer, lists, or slices for selecting subsets of Paulis. Note that selecting subsets of Pauli’s will discard the phase of the current Pauli.

For example

```python
p = Pauli('-iXYZ')

print('P[0] =', repr(P[0]))
print('P[1] =', repr(P[1]))
print('P[2] =', repr(P[2]))
print('P[:] =', repr(P[:]))
print('P[::-1] =, repr(P[::-1]))
```

Initialize the Pauli.

When using the symplectic array input data both z and x arguments must be provided, however the first (z) argument can be used alone for string label, Pauli operator, or ScalarOp input data.

**Parameters**

**data** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *or*[*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")  *or*[*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – input data for Pauli. If input is a tuple it must be of the form `(z, x)` or (z, x, phase)\`\` where `z` and `x` are boolean Numpy arrays, and phase is an integer from Z\_4. If input is a string, it must be a concatenation of a phase and a Pauli string (e.g. ‘XYZ’, ‘-iZIZ’) where a phase string is a combination of at most three characters from \[‘+’, ‘-’, ‘’], \[‘1’, ‘’], and \[‘i’, ‘j’, ‘’] in this order, e.g. ‘’, ‘-1j’ while a Pauli string is 1 or more characters of ‘I’, ‘X’, ‘Y’ or ‘Z’, e.g. ‘Z’, ‘XIYY’.

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if input array is invalid shape.

## Attributes

<span id="qiskit.quantum_info.Pauli.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit.quantum_info.Pauli.name" />

### name

Unique string identifier for operation type.

<span id="qiskit.quantum_info.Pauli.num_clbits" />

### num\_clbits

Number of classical bits.

<span id="qiskit.quantum_info.Pauli.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit.quantum_info.Pauli.phase" />

### phase

Return the group phase exponent for the Pauli.

<span id="qiskit.quantum_info.Pauli.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit.quantum_info.Pauli.settings" />

### settings

Return settings.

<span id="qiskit.quantum_info.Pauli.x" />

### x

The x vector for the Pauli.

<span id="qiskit.quantum_info.Pauli.z" />

### z

The z vector for the Pauli.

## Methods

### adjoint

<span id="qiskit.quantum_info.Pauli.adjoint" />

`adjoint()`

Return the adjoint of the Operator.

### anticommutes

<span id="qiskit.quantum_info.Pauli.anticommutes" />

`anticommutes(other, qargs=None)`

Return True if other Pauli anticommutes with self.

**Parameters**

*   **other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – another Pauli operator.
*   **qargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s anticommute, False if they commute.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### commutes

<span id="qiskit.quantum_info.Pauli.commutes" />

`commutes(other, qargs=None)`

Return True if the Pauli commutes with other.

**Parameters**

*   **other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*PauliList*](qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another Pauli operator.
*   **qargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s commute, False if they anti-commute.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### compose

<span id="qiskit.quantum_info.Pauli.compose" />

`compose(other, qargs=None, front=False, inplace=False)`

Return the operator composition with another Pauli.

**Parameters**

*   **other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.
*   **qargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)") *or None*) – Optional, qubits to apply dot product on (default: None).
*   **front** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True compose using right operator multiplication, instead of left multiplication \[default: False].
*   **inplace** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True update in-place (default: False).

**Returns**

The composed Pauli.

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](#qiskit.quantum_info.Pauli.dot "qiskit.quantum_info.Pauli.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](#qiskit.quantum_info.Pauli.dot "qiskit.quantum_info.Pauli.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### conjugate

<span id="qiskit.quantum_info.Pauli.conjugate" />

`conjugate()`

Return the conjugate of each Pauli in the list.

### copy

<span id="qiskit.quantum_info.Pauli.copy" />

`copy()`

Make a deep copy of current operator.

### delete

<span id="qiskit.quantum_info.Pauli.delete" />

`delete(qubits)`

Return a Pauli with qubits deleted.

**Parameters**

**qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – qubits to delete from Pauli.

**Returns**

the resulting Pauli with the specified qubits removed.

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if ind is out of bounds for the array size or number of qubits.

### dot

<span id="qiskit.quantum_info.Pauli.dot" />

`dot(other, qargs=None, inplace=False)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – an operator object.
*   **qargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)") *or None*) – Optional, qubits to apply dot product on (default: None).
*   **inplace** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True update in-place (default: False).

**Returns**

The operator self \* other.

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### equiv

<span id="qiskit.quantum_info.Pauli.equiv" />

`equiv(other)`

Return True if Pauli’s are equivalent up to group phase.

**Parameters**

**other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – an operator object.

**Returns**

True if the Pauli’s are equivalent up to group phase.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### evolve

<span id="qiskit.quantum_info.Pauli.evolve" />

`evolve(other, qargs=None, frame='h')`

Performs either Heisenberg (default) or Schrödinger picture evolution of the Pauli by a Clifford and returns the evolved Pauli.

Schrödinger picture evolution can be chosen by passing parameter `frame='s'`. This option yields a faster calculation.

Heisenberg picture evolves the Pauli as $P^\prime = C^\dagger.P.C$.

Schrödinger picture evolves the Pauli as $P^\prime = C.P.C^\dagger$.

**Parameters**

*   **other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The Clifford operator to evolve by.
*   **qargs** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – a list of qubits to apply the Clifford to.
*   **frame** (*string*) – `'h'` for Heisenberg (default) or `'s'` for
*   **framework.** (*Schrödinger*) –

**Returns**

the Pauli $C^\dagger.P.C$ (Heisenberg picture) or the Pauli $C.P.C^\dagger$ (Schrödinger picture).

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if the Clifford number of qubits and qargs don’t match.

### expand

<span id="qiskit.quantum_info.Pauli.expand" />

`expand(other)`

Return the reverse-order tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### input\_dims

<span id="qiskit.quantum_info.Pauli.input_dims" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### insert

<span id="qiskit.quantum_info.Pauli.insert" />

`insert(qubits, value)`

Insert a Pauli at specific qubit value.

**Parameters**

*   **qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")) – qubits index to insert at.
*   **value** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – value to insert.

**Returns**

the resulting Pauli with the entries inserted.

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if the insertion qubits are invalid.

### inverse

<span id="qiskit.quantum_info.Pauli.inverse" />

`inverse()`

Return the inverse of the Pauli.

### output\_dims

<span id="qiskit.quantum_info.Pauli.output_dims" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Pauli.power" />

`power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

### reshape

<span id="qiskit.quantum_info.Pauli.reshape" />

`reshape(input_dims=None, output_dims=None, num_qubits=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Parameters**

*   **input\_dims** (*None or* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")) – new subsystem input dimensions. If None the original input dims will be preserved \[Default: None].
*   **output\_dims** (*None or* [*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")) – new subsystem output dimensions. If None the original output dims will be preserved \[Default: None].
*   **num\_qubits** (*None or* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – reshape to an N-qubit operator \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### set\_truncation

<span id="qiskit.quantum_info.Pauli.set_truncation" />

`classmethod set_truncation(val)`

Set the max number of Pauli characters to display before truncation/

**Parameters**

**val** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – the number of characters.

<Admonition title="Note" type="note">
  Truncation will be disabled if the truncation value is set to 0.
</Admonition>

### tensor

<span id="qiskit.quantum_info.Pauli.tensor" />

`tensor(other)`

Return the tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

### to\_instruction

<span id="qiskit.quantum_info.Pauli.to_instruction" />

`to_instruction()`

Convert to Pauli circuit instruction.

### to\_label

<span id="qiskit.quantum_info.Pauli.to_label" />

`to_label()`

Convert a Pauli to a string label.

<Admonition title="Note" type="note">
  The difference between to\_label and `__str__()` is that the later will truncate the output for large numbers of qubits.
</Admonition>

**Returns**

the Pauli string label.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### to\_matrix

<span id="qiskit.quantum_info.Pauli.to_matrix" />

`to_matrix(sparse=False)`

Convert to a Numpy array or sparse CSR matrix.

**Parameters**

**sparse** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – if True return sparse CSR matrices, otherwise return dense Numpy arrays (default: False).

**Returns**

The Pauli matrix.

**Return type**

array

### transpose

<span id="qiskit.quantum_info.Pauli.transpose" />

`transpose()`

Return the transpose of each Pauli in the list.

