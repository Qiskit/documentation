---
title: Clifford
description: API reference for qiskit.ignis.verification.Clifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.Clifford
---

# Clifford

<span id="qiskit.ignis.verification.Clifford" />

`Clifford(num_qubits=None, table=None, phases=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Clifford Operator Class.

## Attributes

### num\_qubits

Return the number of qubits for the Clifford.

### phases

Return the Clifford phases.

### table

Return the Clifford table.

## Methods

### \_\_getitem\_\_

<span id="qiskit.ignis.verification.Clifford.__getitem__" />

`Clifford.__getitem__(index)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Get element from internal symplectic table.

### as\_dict

<span id="qiskit.ignis.verification.Clifford.as_dict" />

`Clifford.as_dict()` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Return dictionary (JSON) represenation of Clifford object

### cx

<span id="qiskit.ignis.verification.Clifford.cx" />

`Clifford.cx(qubit_ctrl, qubit_trgt)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply a Controlled-NOT “cx” gate.

### cz

<span id="qiskit.ignis.verification.Clifford.cz" />

`Clifford.cz(qubit_ctrl, qubit_trgt)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply a Controlled-z “cz” gate.

### destabilizer

<span id="qiskit.ignis.verification.Clifford.destabilizer" />

`Clifford.destabilizer(row)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Return the destabilizer as a Pauli object.

### from\_dict

<span id="qiskit.ignis.verification.Clifford.from_dict" />

`classmethod Clifford.from_dict(clifford_dict)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Load a Clifford from a dictionary.

### h

<span id="qiskit.ignis.verification.Clifford.h" />

`Clifford.h(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply an Hadamard “h” gate to qubit.

### index

<span id="qiskit.ignis.verification.Clifford.index" />

`Clifford.index()` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Returns a unique index for the Clifford.

**Returns**

A unique index (integer) for the Clifford object.

**Return type**

int

### s

<span id="qiskit.ignis.verification.Clifford.s" />

`Clifford.s(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply a phase “s” gate to qubit.

### sdg

<span id="qiskit.ignis.verification.Clifford.sdg" />

`Clifford.sdg(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply an adjoint phase “sdg” gate to qubit.

### stabilizer

<span id="qiskit.ignis.verification.Clifford.stabilizer" />

`Clifford.stabilizer(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Return the qubit stabilizer as a Pauli object.

### swap

<span id="qiskit.ignis.verification.Clifford.swap" />

`Clifford.swap(qubit0, qubit1)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply SWAP gate between two qubits.

### update\_destabilizer

<span id="qiskit.ignis.verification.Clifford.update_destabilizer" />

`Clifford.update_destabilizer(qubit, pauli)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Update the qubit destabilizer row from a Pauli object.

### update\_stabilizer

<span id="qiskit.ignis.verification.Clifford.update_stabilizer" />

`Clifford.update_stabilizer(qubit, pauli)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Update the qubit stabilizer row from a Pauli object.

### v

<span id="qiskit.ignis.verification.Clifford.v" />

`Clifford.v(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply v gate v = sdg.h .

### w

<span id="qiskit.ignis.verification.Clifford.w" />

`Clifford.w(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply w gate w = v.v .

### x

<span id="qiskit.ignis.verification.Clifford.x" />

`Clifford.x(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply a Pauli “x” gate to a qubit.

### y

<span id="qiskit.ignis.verification.Clifford.y" />

`Clifford.y(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply an Pauli “y” gate to a qubit.

### z

<span id="qiskit.ignis.verification.Clifford.z" />

`Clifford.z(qubit)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/Clifford.py "view source code")

Apply an Pauli “z” gate to qubit.

