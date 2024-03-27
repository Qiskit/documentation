---
title: Z2Symmetries
description: API reference for qiskit.quantum_info.Z2Symmetries
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Z2Symmetries
---

# Z2Symmetries

<span id="qiskit.quantum_info.Z2Symmetries" />

`qiskit.quantum_info.Z2Symmetries(symmetries, sq_paulis, sq_list, tapering_values=None, *, tol=1e-14)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/quantum_info/analysis/z2_symmetries.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

The \$Z\_2\$ symmetry converter identifies symmetries from the problem hamiltonian and uses them to provide a tapered - more efficient - representation of operators as Paulis for this problem. For each identified symmetry, one qubit can be eliminated in the Pauli representation at the cost of having to test two symmetry sectors (for the two possible eigenvalues - tapering values - of the symmetry). In certain problems such as the finding of the main operator’s ground state, one can a priori identify the symmetry sector of the solution and thus effectively reduce the computational overhead.

The following attributes can be read and updated once the `Z2Symmetries` object has been constructed.

<span id="qiskit.quantum_info.Z2Symmetries.tapering_values" />

### tapering\_values

Values determining the sector.

**Type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")\[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")] or None

<span id="qiskit.quantum_info.Z2Symmetries.tol" />

### tol

The tolerance threshold for ignoring real and complex parts of a coefficient.

**Type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")

**References**

**\[1]: Bravyi, S., et al, “Tapering off qubits to simulate fermionic Hamiltonians”**

[arXiv:1701.08213](https://arxiv.org/abs/1701.08213)

**Parameters**

*   **symmetries** (*Iterable\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]*) – Object representing the list of \$Z\_2\$ symmetries. These correspond to the generators of the symmetry group \$langle tau\_1, tau\_2dots rangle>\$.
*   **sq\_paulis** (*Iterable\[*[*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]*) – Object representing the list of single-qubit Pauli \$sigma^x\_\{q(i)}\$ anti-commuting with the symmetry \$tau\_i\$ and commuting with all the other symmetries \$tau\_\{jneq i}\$. These operators are used to construct the unitary Clifford operators.
*   **sq\_list** (*Iterable\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – The list of indices \$q(i)\$ of the single-qubit Pauli operators used to build the Clifford operators.
*   **tapering\_values** (*Iterable\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*] | None*) – List of eigenvalues determining the symmetry sector for each symmetry.
*   **tol** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Tolerance threshold for ignoring real and complex parts of a coefficient.

**Raises**

[**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – Invalid paulis. The lists of symmetries, single-qubit paulis support paulis and tapering values must be of equal length. This length is the number of applied symmetries and translates directly to the number of eliminated qubits.

## Attributes

<span id="qiskit.quantum_info.Z2Symmetries.cliffords" />

### cliffords

Get clifford operators, built based on symmetries and single-qubit X.

**Returns**

A list of unitaries used to diagonalize the Hamiltonian.

<span id="qiskit.quantum_info.Z2Symmetries.settings" />

### settings

Return operator settings.

<span id="qiskit.quantum_info.Z2Symmetries.sq_list" />

### sq\_list

Return sq list.

<span id="qiskit.quantum_info.Z2Symmetries.sq_paulis" />

### sq\_paulis

Return sq paulis.

<span id="qiskit.quantum_info.Z2Symmetries.symmetries" />

### symmetries

Return symmetries.

## Methods

### convert\_clifford

<span id="qiskit.quantum_info.Z2Symmetries.convert_clifford" />

`convert_clifford(operator)`

This method operates the first part of the tapering. It converts the operator by composing it with the clifford unitaries defined in the current symmetry.

**Parameters**

**operator** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp")) – The to-be-tapered operator.

**Returns**

`SparsePauliOp` corresponding to the converted operator.

**Return type**

[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp")

### find\_z2\_symmetries

<span id="qiskit.quantum_info.Z2Symmetries.find_z2_symmetries" />

`classmethod find_z2_symmetries(operator)`

Finds Z2 Pauli-type symmetries of a [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp").

**Returns**

A `Z2Symmetries` instance.

**Return type**

[*Z2Symmetries*](#qiskit.quantum_info.Z2Symmetries "qiskit.quantum_info.analysis.z2_symmetries.Z2Symmetries")

### is\_empty

<span id="qiskit.quantum_info.Z2Symmetries.is_empty" />

`is_empty()`

Check the z2\_symmetries is empty or not.

**Returns**

Empty or not.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### taper

<span id="qiskit.quantum_info.Z2Symmetries.taper" />

`taper(operator)`

Taper an operator based on the z2\_symmetries info and sector defined by tapering\_values. Returns operator if the symmetry object is empty.

The tapering is a two-step algorithm which first converts the operator into a [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp") with same eigenvalues but where some qubits are only acted upon with the Pauli operators I or X. The number M of these redundant qubits is equal to the number M of identified symmetries.

The second step of the reduction consists in replacing these qubits with the possible eigenvalues of the corresponding Pauli X, giving 2^M new operators with M less qubits. If an eigenvalue sector was previously identified for the solution, then this reduces to 1 new operator with M less qubits.

**Parameters**

**operator** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp")) – The to-be-tapered operator.

**Returns**

\[[`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")]; otherwise, [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp").

**Return type**

If tapering\_values is None

### taper\_clifford

<span id="qiskit.quantum_info.Z2Symmetries.taper_clifford" />

`taper_clifford(operator)`

Operate the second part of the tapering. This function assumes that the input operators have already been transformed using [`convert_clifford()`](#qiskit.quantum_info.Z2Symmetries.convert_clifford "qiskit.quantum_info.Z2Symmetries.convert_clifford"). The redundant qubits due to the symmetries are dropped and replaced by their two possible eigenvalues.

**Parameters**

**operator** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp")) – Partially tapered operator resulting from a call to [`convert_clifford()`](#qiskit.quantum_info.Z2Symmetries.convert_clifford "qiskit.quantum_info.Z2Symmetries.convert_clifford").

**Returns**

\[[`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")]; otherwise, [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp").

**Return type**

If tapering\_values is None

