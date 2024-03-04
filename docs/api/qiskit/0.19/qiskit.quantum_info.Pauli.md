---
title: Pauli
description: API reference for qiskit.quantum_info.Pauli
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Pauli
---

# Pauli

<span id="qiskit.quantum_info.Pauli" />

`Pauli(z=None, x=None, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/quantum_info/operators/pauli.py "view source code")

A simple class representing Pauli Operators.

The form is P\_zx = (-i)^dot(z,x) Z^z X^x where z and x are elements of Z\_2^n. That is, there are 4^n elements (no phases in this group).

For example, for 1 qubit P\_00 = Z^0 X^0 = I P\_01 = X P\_10 = Z P\_11 = -iZX = (-i) iY = Y

The overload \_\_mul\_\_ does not track the sign: P1\*P2 = Z^(z1+z2) X^(x1+x2) but sgn\_prod does \_\_mul\_\_ and track the phase: P1\*P2 = (-i)^dot(z1+z2,x1+x2) Z^(z1+z2) X^(x1+x2) where the sums are taken modulo 2.

Pauli vectors z and x are supposed to be defined as boolean numpy arrays.

Ref. Jeroen Dehaene and Bart De Moor Clifford group, stabilizer states, and linear and quadratic operations over GF(2) Phys. Rev. A 68, 042318 – Published 20 October 2003

Make the Pauli object.

**Note that, for the qubit index:**

*   Order of z, x vectors is q\_0 … q\_\{n-1},
*   Order of pauli label is q\_\{n-1} … q\_0

**E.g.,**

*   z and x vectors: z = \[z\_0 … z\_\{n-1}], x = \[x\_0 … x\_\{n-1}]
*   a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

*   **z** (*numpy.ndarray*) – boolean, z vector
*   **x** (*numpy.ndarray*) – boolean, x vector
*   **label** (*str*) – pauli label

## Attributes

### num\_qubits

Number of qubits.

### numberofqubits

Deprecated, use `num_qubits` instead. Number of qubits.

### x

Getter of x.

### z

Getter of z.

## Methods

### \_\_len\_\_

<span id="qiskit.quantum_info.Pauli.__len__" />

`Pauli.__len__()`

Return number of qubits.

### \_\_mul\_\_

<span id="qiskit.quantum_info.Pauli.__mul__" />

`Pauli.__mul__(other)`

Multiply two Paulis.

**Returns**

the multiplied pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the number of qubits of two paulis are different.

### append\_paulis

<span id="qiskit.quantum_info.Pauli.append_paulis" />

`Pauli.append_paulis(paulis=None, pauli_labels=None)`

Append pauli at the end.

**Parameters**

*   **paulis** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### delete\_qubits

<span id="qiskit.quantum_info.Pauli.delete_qubits" />

`Pauli.delete_qubits(indices)`

Delete pauli at the indices.

**Parameters**

**indices** (*list\[int]*) – the indices of to-be-deleted paulis

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### from\_label

<span id="qiskit.quantum_info.Pauli.from_label" />

`classmethod Pauli.from_label(label)`

Take pauli string to construct pauli.

The qubit index of pauli label is q\_\{n-1} … q\_0. E.g., a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

**label** (*str*) – pauli label

**Returns**

the constructed pauli

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – invalid character in the label

### insert\_paulis

<span id="qiskit.quantum_info.Pauli.insert_paulis" />

`Pauli.insert_paulis(indices=None, paulis=None, pauli_labels=None)`

Insert or append pauli to the targeted indices.

If indices is None, it means append at the end.

**Parameters**

*   **indices** (*list\[int]*) – the qubit indices to be inserted
*   **paulis** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

<Admonition title="Note" type="note">
  the indices refers to the location of original paulis, e.g. if indices = \[0, 2], pauli\_labels = \[‘Z’, ‘I’] and original pauli = ‘ZYXI’ the pauli will be updated to ZY’I’XI’Z’ ‘Z’ and ‘I’ are inserted before the qubit at 0 and 2.
</Admonition>

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – provide both paulis and pauli\_labels at the same time

### kron

<span id="qiskit.quantum_info.Pauli.kron" />

`Pauli.kron(other)`

Kronecker product of two paulis.

Order is \$P\_2 (other) otimes P\_1 (self)\$

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – P2

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### pauli\_single

<span id="qiskit.quantum_info.Pauli.pauli_single" />

`classmethod Pauli.pauli_single(num_qubits, index, pauli_label)`

Generate single qubit pauli at index with pauli\_label with length num\_qubits.

**Parameters**

*   **num\_qubits** (*int*) – the length of pauli
*   **index** (*int*) – the qubit index to insert the single qubit
*   **pauli\_label** (*str*) – pauli

**Returns**

single qubit pauli

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### random

<span id="qiskit.quantum_info.Pauli.random" />

`classmethod Pauli.random(num_qubits, seed=None)`

Return a random Pauli on number of qubits.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits
*   **seed** (*int*) – Optional. To set a random seed.

**Returns**

the random pauli

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### sgn\_prod

<span id="qiskit.quantum_info.Pauli.sgn_prod" />

`static Pauli.sgn_prod(p1, p2)`

Multiply two Paulis and track the phase.

\$P\_3 = P\_1 otimes P\_2\$: X\*Y

**Parameters**

*   **p1** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 1
*   **p2** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 2

**Returns**

the multiplied pauli complex: the sign of the multiplication, 1, -1, 1j or -1j

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### to\_instruction

<span id="qiskit.quantum_info.Pauli.to_instruction" />

`Pauli.to_instruction()`

Convert to Pauli circuit instruction.

### to\_label

<span id="qiskit.quantum_info.Pauli.to_label" />

`Pauli.to_label()`

Present the pauli labels in I, X, Y, Z format.

Order is \$q\_\{n-1} …. q\_0\$

**Returns**

pauli label

**Return type**

str

### to\_matrix

<span id="qiskit.quantum_info.Pauli.to_matrix" />

`Pauli.to_matrix()`

Convert Pauli to a matrix representation.

Order is q\_\{n-1} …. q\_0, i.e., \$P\_\{n-1} otimes … P\_0\$

**Returns**

a matrix that represents the pauli.

**Return type**

numpy.array

### to\_operator

<span id="qiskit.quantum_info.Pauli.to_operator" />

`Pauli.to_operator()`

Convert to Operator object.

### to\_spmatrix

<span id="qiskit.quantum_info.Pauli.to_spmatrix" />

`Pauli.to_spmatrix()`

Convert Pauli to a sparse matrix representation (CSR format).

Order is q\_\{n-1} …. q\_0, i.e., \$P\_\{n-1} otimes … P\_0\$

**Returns**

a sparse matrix with CSR format that represents the pauli.

**Return type**

scipy.sparse.csr\_matrix

### update\_x

<span id="qiskit.quantum_info.Pauli.update_x" />

`Pauli.update_x(x, indices=None)`

Update partial or entire x.

**Parameters**

*   **x** (*numpy.ndarray or list*) – to-be-updated x
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole x, the number of qubits must be the same.

### update\_z

<span id="qiskit.quantum_info.Pauli.update_z" />

`Pauli.update_z(z, indices=None)`

Update partial or entire z.

**Parameters**

*   **z** (*numpy.ndarray or list*) – to-be-updated z
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole z, the number of qubits must be the same.

