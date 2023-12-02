# Pauli

<span id="undefined" />

`Pauli(data=None, x=None, *, z=None, label=None)`

Bases: `qiskit.quantum_info.operators.symplectic.base_pauli.BasePauli`

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
> where `obj` is a Pauli string, `Pauli` or [`ScalarOp`](qiskit.quantum_info.ScalarOp#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp") operator, or a Pauli gate or `QuantumCircuit` containing only Pauli gates.
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

The string representation can be converted to a `Pauli` using the class initialization (`Pauli('-iXYZ')`). A `Pauli` object can be converted back to the string representation using the [`to_label()`](qiskit.quantum_info.Pauli.to_label#qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label") method or `str(pauli)`.

<Admonition title="Note" type="note">
  Using `str` to convert a `Pauli` to a string will truncate the returned string for large numbers of qubits while [`to_label()`](qiskit.quantum_info.Pauli.to_label#qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label") will return the full string with no truncation. The default truncation length is 50 characters. The default value can be changed by setting the class \_\_truncate\_\_ attribute to an integer value. If set to `0` no truncation will be performed.
</Admonition>

**Array Representation**

The internal data structure of an $n$-qubit Pauli is two length-$n$ boolean vectors $z \in \mathbb{Z}_2^N$, $x \in \mathbb{Z}_2^N$, and an integer $q \in \mathbb{Z}_4$ defining the Pauli operator

$$
P &= (-i)^{q + z\cdot x} Z^z \cdot X^x.
$$

The $k$ and $x$ arrays

$$
\begin{split}P &= P_{n-1} \otimes ... \otimes P_{0} \\
P_k &= (-i)^{z[k] * x[k]} Z^{z[k]}\cdot X^{x[k]}\end{split}
$$

where `z[k] = P.z[k]`, `x[k] = P.x[k]` respectively.

The $z$ and $x$ arrays can be accessed and updated using the [`z`](#qiskit.quantum_info.Pauli.z "qiskit.quantum_info.Pauli.z") and [`x`](#qiskit.quantum_info.Pauli.x "qiskit.quantum_info.Pauli.x") properties respectively. The phase integer $q$ can be accessed and updated using the [`phase`](#qiskit.quantum_info.Pauli.phase "qiskit.quantum_info.Pauli.phase") property.

**Matrix Operator Representation**

Pauli’s can be converted to $(2^n, 2^n)$ [`Operator`](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") using the `to_operator()` method, or to a dense or sparse complex matrix using the [`to_matrix()`](qiskit.quantum_info.Pauli.to_matrix#qiskit.quantum_info.Pauli.to_matrix "qiskit.quantum_info.Pauli.to_matrix") method.

**Data Access**

The individual qubit Paulis can be accessed and updated using the `[]` operator which accepts integer, lists, or slices for selecting subsets of Paulis. Note that selecting subsets of Pauli’s will discard the phase of the current Pauli.

For example

Initialize the Pauli.

When using the symplectic array input data both z and x arguments must be provided, however the first (z) argument can be used alone for string label, Pauli operator, or ScalarOp input data.

**Parameters**

*   **data** (*str or tuple or* [*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*ScalarOp*](qiskit.quantum_info.ScalarOp#qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – input data for Pauli. If input is a tuple it must be of the form `(z, x)` or (z, x, phase)\`\` where `z` and `x` are boolean Numpy arrays, and phase is an integer from Z\_4. If input is a string, it must be a concatenation of a phase and a Pauli string (e.g. ‘XYZ’, ‘-iZIZ’) where a phase string is a combination of at most three characters from \[‘+’, ‘-‘, ‘’], \[‘1’, ‘’], and \[‘i’, ‘j’, ‘’] in this order, e.g. ‘’, ‘-1j’ while a Pauli string is 1 or more characters of ‘I’, ‘X’, ‘Y’ or ‘Z’, e.g. ‘Z’, ‘XIYY’.
*   **x** (*np.ndarray*) – DEPRECATED, symplectic x vector.
*   **z** (*np.ndarray*) – DEPRECATED, symplectic z vector.
*   **label** (*str*) – DEPRECATED, string label.

**Raises**

**QiskitError** – if input array is invalid shape.

## Methods

|                                                                                                                                                  |                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Pauli.adjoint#qiskit.quantum_info.Pauli.adjoint "qiskit.quantum_info.Pauli.adjoint")                             | Return the adjoint of the Operator.                                                         |
| [`anticommutes`](qiskit.quantum_info.Pauli.anticommutes#qiskit.quantum_info.Pauli.anticommutes "qiskit.quantum_info.Pauli.anticommutes")         | Return True if other Pauli anticommutes with self.                                          |
| [`append_paulis`](qiskit.quantum_info.Pauli.append_paulis#qiskit.quantum_info.Pauli.append_paulis "qiskit.quantum_info.Pauli.append_paulis")     | DEPRECATED: Append pauli at the end.                                                        |
| [`commutes`](qiskit.quantum_info.Pauli.commutes#qiskit.quantum_info.Pauli.commutes "qiskit.quantum_info.Pauli.commutes")                         | Return True if the Pauli commutes with other.                                               |
| [`compose`](qiskit.quantum_info.Pauli.compose#qiskit.quantum_info.Pauli.compose "qiskit.quantum_info.Pauli.compose")                             | Return the operator composition with another Pauli.                                         |
| [`conjugate`](qiskit.quantum_info.Pauli.conjugate#qiskit.quantum_info.Pauli.conjugate "qiskit.quantum_info.Pauli.conjugate")                     | Return the conjugate of each Pauli in the list.                                             |
| [`copy`](qiskit.quantum_info.Pauli.copy#qiskit.quantum_info.Pauli.copy "qiskit.quantum_info.Pauli.copy")                                         | Make a deep copy of current operator.                                                       |
| [`delete`](qiskit.quantum_info.Pauli.delete#qiskit.quantum_info.Pauli.delete "qiskit.quantum_info.Pauli.delete")                                 | Return a Pauli with qubits deleted.                                                         |
| [`delete_qubits`](qiskit.quantum_info.Pauli.delete_qubits#qiskit.quantum_info.Pauli.delete_qubits "qiskit.quantum_info.Pauli.delete_qubits")     | DEPRECATED: Delete pauli at the indices.                                                    |
| [`dot`](qiskit.quantum_info.Pauli.dot#qiskit.quantum_info.Pauli.dot "qiskit.quantum_info.Pauli.dot")                                             | Return the right multiplied operator self \* other.                                         |
| [`equiv`](qiskit.quantum_info.Pauli.equiv#qiskit.quantum_info.Pauli.equiv "qiskit.quantum_info.Pauli.equiv")                                     | Return True if Pauli’s are equivalent up to group phase.                                    |
| [`evolve`](qiskit.quantum_info.Pauli.evolve#qiskit.quantum_info.Pauli.evolve "qiskit.quantum_info.Pauli.evolve")                                 | Heisenberg picture evolution of a Pauli by a Clifford.                                      |
| [`expand`](qiskit.quantum_info.Pauli.expand#qiskit.quantum_info.Pauli.expand "qiskit.quantum_info.Pauli.expand")                                 | Return the reverse-order tensor product with another Pauli.                                 |
| [`from_label`](qiskit.quantum_info.Pauli.from_label#qiskit.quantum_info.Pauli.from_label "qiskit.quantum_info.Pauli.from_label")                 | DEPRECATED: Construct a Pauli from a string label.                                          |
| [`input_dims`](qiskit.quantum_info.Pauli.input_dims#qiskit.quantum_info.Pauli.input_dims "qiskit.quantum_info.Pauli.input_dims")                 | Return tuple of input dimension for specified subsystems.                                   |
| [`insert`](qiskit.quantum_info.Pauli.insert#qiskit.quantum_info.Pauli.insert "qiskit.quantum_info.Pauli.insert")                                 | Insert a Pauli at specific qubit value.                                                     |
| [`insert_paulis`](qiskit.quantum_info.Pauli.insert_paulis#qiskit.quantum_info.Pauli.insert_paulis "qiskit.quantum_info.Pauli.insert_paulis")     | DEPRECATED: Insert or append pauli to the targeted indices.                                 |
| [`inverse`](qiskit.quantum_info.Pauli.inverse#qiskit.quantum_info.Pauli.inverse "qiskit.quantum_info.Pauli.inverse")                             | Return the inverse of the Pauli.                                                            |
| [`kron`](qiskit.quantum_info.Pauli.kron#qiskit.quantum_info.Pauli.kron "qiskit.quantum_info.Pauli.kron")                                         | DEPRECATED: Kronecker product of two paulis.                                                |
| [`output_dims`](qiskit.quantum_info.Pauli.output_dims#qiskit.quantum_info.Pauli.output_dims "qiskit.quantum_info.Pauli.output_dims")             | Return tuple of output dimension for specified subsystems.                                  |
| [`pauli_single`](qiskit.quantum_info.Pauli.pauli_single#qiskit.quantum_info.Pauli.pauli_single "qiskit.quantum_info.Pauli.pauli_single")         | DEPRECATED: Generate single qubit pauli at index with pauli\_label with length num\_qubits. |
| [`power`](qiskit.quantum_info.Pauli.power#qiskit.quantum_info.Pauli.power "qiskit.quantum_info.Pauli.power")                                     | Return the compose of a operator with itself n times.                                       |
| [`random`](qiskit.quantum_info.Pauli.random#qiskit.quantum_info.Pauli.random "qiskit.quantum_info.Pauli.random")                                 | DEPRECATED: Return a random Pauli on number of qubits.                                      |
| [`reshape`](qiskit.quantum_info.Pauli.reshape#qiskit.quantum_info.Pauli.reshape "qiskit.quantum_info.Pauli.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions.                  |
| [`set_truncation`](qiskit.quantum_info.Pauli.set_truncation#qiskit.quantum_info.Pauli.set_truncation "qiskit.quantum_info.Pauli.set_truncation") | Set the max number of Pauli characters to display before truncation/                        |
| [`sgn_prod`](qiskit.quantum_info.Pauli.sgn_prod#qiskit.quantum_info.Pauli.sgn_prod "qiskit.quantum_info.Pauli.sgn_prod")                         | DEPRECATED: Multiply two Paulis and track the phase.                                        |
| [`tensor`](qiskit.quantum_info.Pauli.tensor#qiskit.quantum_info.Pauli.tensor "qiskit.quantum_info.Pauli.tensor")                                 | Return the tensor product with another Pauli.                                               |
| [`to_instruction`](qiskit.quantum_info.Pauli.to_instruction#qiskit.quantum_info.Pauli.to_instruction "qiskit.quantum_info.Pauli.to_instruction") | Convert to Pauli circuit instruction.                                                       |
| [`to_label`](qiskit.quantum_info.Pauli.to_label#qiskit.quantum_info.Pauli.to_label "qiskit.quantum_info.Pauli.to_label")                         | Convert a Pauli to a string label.                                                          |
| [`to_matrix`](qiskit.quantum_info.Pauli.to_matrix#qiskit.quantum_info.Pauli.to_matrix "qiskit.quantum_info.Pauli.to_matrix")                     | Convert to a Numpy array or sparse CSR matrix.                                              |
| [`to_spmatrix`](qiskit.quantum_info.Pauli.to_spmatrix#qiskit.quantum_info.Pauli.to_spmatrix "qiskit.quantum_info.Pauli.to_spmatrix")             | DEPRECATED Convert Pauli to a sparse matrix representation (CSR format).                    |
| [`transpose`](qiskit.quantum_info.Pauli.transpose#qiskit.quantum_info.Pauli.transpose "qiskit.quantum_info.Pauli.transpose")                     | Return the transpose of each Pauli in the list.                                             |
| [`update_x`](qiskit.quantum_info.Pauli.update_x#qiskit.quantum_info.Pauli.update_x "qiskit.quantum_info.Pauli.update_x")                         | DEPRECATED: Update partial or entire x.                                                     |
| [`update_z`](qiskit.quantum_info.Pauli.update_z#qiskit.quantum_info.Pauli.update_z "qiskit.quantum_info.Pauli.update_z")                         | DEPRECATED: Update partial or entire z.                                                     |

## Attributes

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### name

Unique string identifier for operation type.

<span id="undefined" />

### num\_clbits

Number of classical bits.

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

### phase

Return the group phase exponent for the Pauli.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`

<span id="undefined" />

### x

The x vector for the Pauli.

<span id="undefined" />

### z

The z vector for the Pauli.
