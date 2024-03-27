---
title: Pauli
description: API reference for qiskit.quantum_info.Pauli
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Pauli
---

# Pauli

<span id="qiskit.quantum_info.Pauli" />

`Pauli(data=None, x=None, *, z=None, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Bases: `BasePauli`

N-qubit Pauli operator.

This class represents an operator $P$ from the full $n$-qubit *Pauli* group

$$
P = (-i)^{q} P_{n-1} \otimes ... \otimes P_{0}
$$

where $q\in \mathbb{Z}_4$ and $P_i \in \{I, X, Y, Z\}$ are single-qubit Pauli matrices:

$$
\begin{split}I = \begin{pmatrix} 1 & 0  \\ 0 & 1  \end{pmatrix},
X = \begin{pmatrix} 0 & 1  \\ 1 & 0  \end{pmatrix},
Y = \begin{pmatrix} 0 & -i \\ i & 0  \end{pmatrix},
Z = \begin{pmatrix} 1 & 0  \\ 0 & -1 \end{pmatrix}.\end{split}
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

In the string representation qubit-0 corresponds to the right-most Pauli character, and qubit-$(n-1)$ to the left-most Pauli character. For example `'XYZ'` represents $X\otimes Y \otimes Z$ with `'Z'` on qubit-0, `'Y'` on qubit-1, and `'X'` on qubit-3.

The string representation can be converted to a `Pauli` using the class initialization (`Pauli('-iXYZ')`). A `Pauli` object can be converted back to the string representation using the [`to_label()`](qiskit.quantum_info.Pauli#to_label "qiskit.quantum_info.Pauli.to_label") method or `str(pauli)`.

<Admonition title="Note" type="note">
  Using `str` to convert a `Pauli` to a string will truncate the returned string for large numbers of qubits while [`to_label()`](qiskit.quantum_info.Pauli#to_label "qiskit.quantum_info.Pauli.to_label") will return the full string with no truncation. The default truncation length is 50 characters. The default value can be changed by setting the class \_\_truncate\_\_ attribute to an integer value. If set to `0` no truncation will be performed.
</Admonition>

**Array Representation**

The internal data structure of an $n$-qubit Pauli is two length-$n$ boolean vectors $z \in \mathbb{Z}_2^N$, $x \in \mathbb{Z}_2^N$, and an integer $q \in \mathbb{Z}_4$ defining the Pauli operator

$$
P = (-i)^{q + z\cdot x} Z^z \cdot X^x.
$$

The $k`th qubit corresponds to the :math:`k`th entry in the :math:`z$ and $x$ arrays

$$
\begin{split}P &= P_{n-1} \otimes ... \otimes P_{0} \\
P_k &= (-i)^{z[k] * x[k]} Z^{z[k]}\cdot X^{x[k]}\end{split}
$$

where `z[k] = P.z[k]`, `x[k] = P.x[k]` respectively.

The $z$ and $x$ arrays can be accessed and updated using the [`z`](#qiskit.quantum_info.Pauli.z "qiskit.quantum_info.Pauli.z") and [`x`](#qiskit.quantum_info.Pauli.x "qiskit.quantum_info.Pauli.x") properties respectively. The phase integer $q$ can be accessed and updated using the [`phase`](#qiskit.quantum_info.Pauli.phase "qiskit.quantum_info.Pauli.phase") property.

**Matrix Operator Representation**

Pauli’s can be converted to $(2^n, 2^n)$ [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") using the `to_operator()` method, or to a dense or sparse complex matrix using the [`to_matrix()`](qiskit.quantum_info.Pauli#to_matrix "qiskit.quantum_info.Pauli.to_matrix") method.

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

**data** (*str or tuple or* [*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – input data for Pauli. If input is a tuple it must be of the form `(z, x)` or (z, x, phase)\`\` where `z` and `x` are boolean Numpy arrays, and phase is an integer from Z\_4. If input is a string, it must be a concatenation of a phase and a Pauli string (e.g. ‘XYZ’, ‘-iZIZ’) where a phase string is a combination of at most three characters from \[‘+’, ‘-’, ‘’], \[‘1’, ‘’], and \[‘i’, ‘j’, ‘’] in this order, e.g. ‘’, ‘-1j’ while a Pauli string is 1 or more characters of ‘I’, ‘X’, ‘Y’ or ‘Z’, e.g. ‘Z’, ‘XIYY’.

**Raises**

**QiskitError** – if input array is invalid shape.

## Methods

<span id="qiskit-quantum-info-pauli-adjoint" />

### adjoint

<span id="qiskit.quantum_info.Pauli.adjoint" />

`Pauli.adjoint()`

Return the adjoint of the Operator.

<span id="qiskit-quantum-info-pauli-anticommutes" />

### anticommutes

<span id="qiskit.quantum_info.Pauli.anticommutes" />

`Pauli.anticommutes(other, qargs=None)`

Return True if other Pauli anticommutes with self.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – another Pauli operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s anticommute, False if they commute.

**Return type**

bool

<span id="qiskit-quantum-info-pauli-commutes" />

### commutes

<span id="qiskit.quantum_info.Pauli.commutes" />

`Pauli.commutes(other, qargs=None)`

Return True if the Pauli commutes with other.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*PauliList*](qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another Pauli operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s commute, False if they anti-commute.

**Return type**

bool

<span id="qiskit-quantum-info-pauli-compose" />

### compose

<span id="qiskit.quantum_info.Pauli.compose" />

`Pauli.compose(other, qargs=None, front=False, inplace=False)`

Return the operator composition with another Pauli.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.
*   **qargs** (*list or None*) – Optional, qubits to apply dot product on (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

The composed Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](qiskit.quantum_info.Pauli#dot "qiskit.quantum_info.Pauli.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.Pauli#dot "qiskit.quantum_info.Pauli.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

<span id="qiskit-quantum-info-pauli-conjugate" />

### conjugate

<span id="qiskit.quantum_info.Pauli.conjugate" />

`Pauli.conjugate()`

Return the conjugate of each Pauli in the list.

<span id="qiskit-quantum-info-pauli-copy" />

### copy

<span id="qiskit.quantum_info.Pauli.copy" />

`Pauli.copy()`

Make a deep copy of current operator.

<span id="qiskit-quantum-info-pauli-delete" />

### delete

<span id="qiskit.quantum_info.Pauli.delete" />

`Pauli.delete(qubits)`

Return a Pauli with qubits deleted.

**Parameters**

**qubits** (*int or list*) – qubits to delete from Pauli.

**Returns**

the resulting Pauli with the specified qubits removed.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if ind is out of bounds for the array size or number of qubits.

<span id="qiskit-quantum-info-pauli-dot" />

### dot

<span id="qiskit.quantum_info.Pauli.dot" />

`Pauli.dot(other, qargs=None, inplace=False)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – an operator object.
*   **qargs** (*list or None*) – Optional, qubits to apply dot product on (default: None).
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

The operator self \* other.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="qiskit-quantum-info-pauli-equiv" />

### equiv

<span id="qiskit.quantum_info.Pauli.equiv" />

`Pauli.equiv(other)`

Return True if Pauli’s are equivalent up to group phase.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – an operator object.

**Returns**

True if the Pauli’s are equivalent up to group phase.

**Return type**

bool

<span id="qiskit-quantum-info-pauli-evolve" />

### evolve

<span id="qiskit.quantum_info.Pauli.evolve" />

`Pauli.evolve(other, qargs=None, frame='h')`

Performs either Heisenberg (default) or Schrödinger picture evolution of the Pauli by a Clifford and returns the evolved Pauli.

Schrödinger picture evolution can be chosen by passing parameter `frame='s'`. This option yields a faster calculation.

Heisenberg picture evolves the Pauli as $P^\prime = C^\dagger.P.C$.

Schrödinger picture evolves the Pauli as $P^\prime = C.P.C^\dagger$.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The Clifford operator to evolve by.
*   **qargs** (*list*) – a list of qubits to apply the Clifford to.
*   **frame** (*string*) – `'h'` for Heisenberg (default) or `'s'` for
*   **framework.** (*Schrödinger*) –

**Returns**

the Pauli $C^\dagger.P.C$ (Heisenberg picture) or the Pauli $C.P.C^\dagger$ (Schrödinger picture).

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the Clifford number of qubits and qargs don’t match.

<span id="qiskit-quantum-info-pauli-expand" />

### expand

<span id="qiskit.quantum_info.Pauli.expand" />

`Pauli.expand(other)`

Return the reverse-order tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<span id="qiskit-quantum-info-pauli-input-dims" />

### input\_dims

<span id="qiskit.quantum_info.Pauli.input_dims" />

`Pauli.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="qiskit-quantum-info-pauli-insert" />

### insert

<span id="qiskit.quantum_info.Pauli.insert" />

`Pauli.insert(qubits, value)`

Insert a Pauli at specific qubit value.

**Parameters**

*   **qubits** (*int or list*) – qubits index to insert at.
*   **value** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – value to insert.

**Returns**

the resulting Pauli with the entries inserted.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the insertion qubits are invalid.

<span id="qiskit-quantum-info-pauli-inverse" />

### inverse

<span id="qiskit.quantum_info.Pauli.inverse" />

`Pauli.inverse()`

Return the inverse of the Pauli.

<span id="qiskit-quantum-info-pauli-output-dims" />

### output\_dims

<span id="qiskit.quantum_info.Pauli.output_dims" />

`Pauli.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

<span id="qiskit-quantum-info-pauli-power" />

### power

<span id="qiskit.quantum_info.Pauli.power" />

`Pauli.power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

<span id="qiskit-quantum-info-pauli-reshape" />

### reshape

<span id="qiskit.quantum_info.Pauli.reshape" />

`Pauli.reshape(input_dims=None, output_dims=None, num_qubits=None)`

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

<span id="qiskit-quantum-info-pauli-set-truncation" />

### set\_truncation

<span id="qiskit.quantum_info.Pauli.set_truncation" />

`classmethod Pauli.set_truncation(val)`

Set the max number of Pauli characters to display before truncation/

**Parameters**

**val** (*int*) – the number of characters.

<Admonition title="Note" type="note">
  Truncation will be disabled if the truncation value is set to 0.
</Admonition>

<span id="qiskit-quantum-info-pauli-tensor" />

### tensor

<span id="qiskit.quantum_info.Pauli.tensor" />

`Pauli.tensor(other)`

Return the tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

<span id="qiskit-quantum-info-pauli-to-instruction" />

### to\_instruction

<span id="qiskit.quantum_info.Pauli.to_instruction" />

`Pauli.to_instruction()`

Convert to Pauli circuit instruction.

<span id="qiskit-quantum-info-pauli-to-label" />

### to\_label

<span id="qiskit.quantum_info.Pauli.to_label" />

`Pauli.to_label()`

Convert a Pauli to a string label.

<Admonition title="Note" type="note">
  The difference between to\_label and `__str__()` is that the later will truncate the output for large numbers of qubits.
</Admonition>

**Returns**

the Pauli string label.

**Return type**

str

<span id="qiskit-quantum-info-pauli-to-matrix" />

### to\_matrix

<span id="qiskit.quantum_info.Pauli.to_matrix" />

`Pauli.to_matrix(sparse=False)`

Convert to a Numpy array or sparse CSR matrix.

**Parameters**

**sparse** (*bool*) – if True return sparse CSR matrices, otherwise return dense Numpy arrays (default: False).

**Returns**

The Pauli matrix.

**Return type**

array

<span id="qiskit-quantum-info-pauli-transpose" />

### transpose

<span id="qiskit.quantum_info.Pauli.transpose" />

`Pauli.transpose()`

Return the transpose of each Pauli in the list.

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

