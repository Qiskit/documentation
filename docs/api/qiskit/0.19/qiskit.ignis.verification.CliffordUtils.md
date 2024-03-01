---
title: CliffordUtils
description: API reference for qiskit.ignis.verification.CliffordUtils
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.CliffordUtils
---

# CliffordUtils

<span id="qiskit.ignis.verification.CliffordUtils" />

`CliffordUtils(num_qubits=2, group_tables=None, elmnt=None, gatelist=None, elmnt_key=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/clifford_utils.py "view source code")

Class for util functions for the Clifford group.

**Parameters**

*   **num\_qubits** (*int*) – number of qubits, dimension of the Clifford object.
*   **group\_tables** (*dict*) – table of all the Clifford objects of a given dimension.
*   **elmnt** ([*Clifford*](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")) – a Clifford group element.
*   **elmnt\_key** (*str*) – a unique index of a Clifford object.
*   **gatelist** (*list*) – a list of gates corresponding to a Clifford object.

## Methods

### clifford1\_gates

<span id="qiskit.ignis.verification.CliffordUtils.clifford1_gates" />

`CliffordUtils.clifford1_gates(idx)`

Make a single qubit Clifford gate.

**Parameters**

**idx** (`int`) – the index (modulo 24) of a single qubit Clifford.

**Returns**

A single qubit Clifford gate.

**Return type**

list

### clifford1\_gates\_table

<span id="qiskit.ignis.verification.CliffordUtils.clifford1_gates_table" />

`CliffordUtils.clifford1_gates_table()`

Generate a table of all 1-qubit Clifford gates.

**Returns**

A table of all 1-qubit Clifford gates.

**Return type**

dict

### clifford2\_gates

<span id="qiskit.ignis.verification.CliffordUtils.clifford2_gates" />

`CliffordUtils.clifford2_gates(idx)`

Make a 2-qubit Clifford gate.

**Parameters**

**idx** (`int`) – the index (modulo 11520) of a two-qubit Clifford.

**Returns**

A 2-qubit Clifford gate.

**Return type**

list

### clifford2\_gates\_table

<span id="qiskit.ignis.verification.CliffordUtils.clifford2_gates_table" />

`CliffordUtils.clifford2_gates_table()`

Generate a table of all 2-qubit Clifford gates.

**Returns**

A table of all 2-qubit Clifford gates.

**Return type**

dict

### clifford\_from\_gates

<span id="qiskit.ignis.verification.CliffordUtils.clifford_from_gates" />

`CliffordUtils.clifford_from_gates(num_qubits, gatelist)`

Generate a Clifford object from a list of gates.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the Clifford.
*   **gatelist** (*list*) – a list of gates.

**Returns**

A Clifford class object corresponding to composing the given list of gates.

**Return type**

[Clifford](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")

### compose\_gates

<span id="qiskit.ignis.verification.CliffordUtils.compose_gates" />

`CliffordUtils.compose_gates(cliff, gatelist)`

Add gates to a Clifford object from a list of gates.

**Parameters**

*   **cliff** ([*Clifford*](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")) – a Clifford class object.
*   **gatelist** (*list*) – a list of gates.

**Returns**

A Clifford class object, after composing cliff and the gates from gatelist.

**Return type**

[Clifford](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")

**Raises**

**ValueError** – unknown gate type.

### cx\_gates

<span id="qiskit.ignis.verification.CliffordUtils.cx_gates" />

`CliffordUtils.cx_gates(gatelist, ctrl, tgt)`

Adds a controlled-x gate on qubits ctrl and tgt to a given list of gates.

**Parameters**

*   **gatelist** (*list*) – a list of gates.
*   **ctrl** (*int*) – an index of the control qubit.
*   **tgt** (*int*) – an index of the target qubit.

**Returns**

A list of gates, after appending a controlled-x gate on two qubits.

**Return type**

list

### elmnt

<span id="qiskit.ignis.verification.CliffordUtils.elmnt" />

`CliffordUtils.elmnt()`

Return a Clifford object.

### elmnt\_key

<span id="qiskit.ignis.verification.CliffordUtils.elmnt_key" />

`CliffordUtils.elmnt_key()`

Return a unique index of a Clifford object.

### find\_inverse\_gates

<span id="qiskit.ignis.verification.CliffordUtils.find_inverse_gates" />

`CliffordUtils.find_inverse_gates(num_qubits, gatelist)`

Find the inverse of a Clifford gate.

**Parameters**

*   **num\_qubits** (*int*) – dimension of the Clifford object.
*   **gatelist** (*list*) – a Clifford gate.

**Returns**

An inverse Clifford gate.

**Return type**

list

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

### find\_key

<span id="qiskit.ignis.verification.CliffordUtils.find_key" />

`CliffordUtils.find_key(cliff, num_qubits)`

Find the Clifford index.

**Parameters**

*   **cliff** ([*Clifford*](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")) – a Clifford object.
*   **num\_qubits** (*int*) – dimension of the Clifford object.

**Returns**

An integer which is the Clifford index in the group table.

**Return type**

int

### gatelist

<span id="qiskit.ignis.verification.CliffordUtils.gatelist" />

`CliffordUtils.gatelist()`

Return a list of gates corresponding to a Clifford object.

### group\_tables

<span id="qiskit.ignis.verification.CliffordUtils.group_tables" />

`CliffordUtils.group_tables()`

Return the Clifford group tables.

### h\_gates

<span id="qiskit.ignis.verification.CliffordUtils.h_gates" />

`CliffordUtils.h_gates(gatelist, q, h)`

Append a hadamard gate on qubit q to a given list of gates.

**Parameters**

*   **gatelist** (*list*) – a list of gates.

*   **q** (*int*) – an index of the qubit.

*   **h** (*int*) –

    an integer indicating whether or not to apply a hadamard gate:

    *   1 - for H gate.
    *   0 - no H gate.

**Returns**

A list of gates, after appending a hadamard gate on qubit q.

**Return type**

list

### load\_clifford\_table

<span id="qiskit.ignis.verification.CliffordUtils.load_clifford_table" />

`CliffordUtils.load_clifford_table(picklefile='cliffords2.pickle')`

Load pickled files of the tables of 1 and 2 qubit Clifford group tables.

**Parameters**

**picklefile** (*str*) – pickle file name.

**Returns**

A table of all the 1 and 2 qubit Clifford objects.

**Return type**

dict

### load\_tables

<span id="qiskit.ignis.verification.CliffordUtils.load_tables" />

`CliffordUtils.load_tables(num_qubits)`

Return the Clifford group tables.

**Parameters**

**num\_qubits** (*int*) – number of qubits for the Clifford object.

**Returns**

A table of all the Clifford objects.

**Return type**

dict

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

### num\_qubits

<span id="qiskit.ignis.verification.CliffordUtils.num_qubits" />

`CliffordUtils.num_qubits()`

Return the number of qubits of the Clifford object.

### pauli\_gates

<span id="qiskit.ignis.verification.CliffordUtils.pauli_gates" />

`CliffordUtils.pauli_gates(gatelist, q, pauli)`

Append a pauli gate on qubit q to a given list of gates.

**Parameters**

*   **gatelist** (*list*) – a list of gates.

*   **q** (*int*) – an index of the qubit.

*   **pauli** (*int*) –

    an integer indicating the pauli gate:

    *   1 - for pauli-Z gate.
    *   2 - for pauli-X gate.
    *   3 - for pauli-Y gate.

**Returns**

A list of gates, after appending a given pauli gate on qubit q.

**Return type**

list

### pickle\_clifford\_table

<span id="qiskit.ignis.verification.CliffordUtils.pickle_clifford_table" />

`CliffordUtils.pickle_clifford_table(picklefile='cliffords2.pickle', num_qubits=2)`

Create pickled versions of the 1 or 2 qubit Clifford group tables.

**Parameters**

*   **picklefile** (*str*) – pickle file name.
*   **num\_qubits** (*int*) – number of qubits of the Clifford object.

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

### random\_gates

<span id="qiskit.ignis.verification.CliffordUtils.random_gates" />

`CliffordUtils.random_gates(num_qubits, rand_seed=None)`

Pick a random Clifford gate on num\_qubits.

**Parameters**

*   **num\_qubits** (*int*) – dimension of the Clifford.
*   **rand\_seed** (*int*) – seed for the random number generator

**Returns**

A 1 or 2 qubit random Clifford gate.

**Return type**

list

**Raises**

*   **ValueError** – number of qubits bigger than 2 is not supported.
*   **TypeError** – If rand\_seed is not an integer

### v\_gates

<span id="qiskit.ignis.verification.CliffordUtils.v_gates" />

`CliffordUtils.v_gates(gatelist, q, v)`

Adds an axis-swap gate V or W on qubit q to a given list of gates.

The V gate is defined as: V=HSHS = \[\[0,1],\[1,1]]. It makes a rotation of the paulis: Z->X->Y->Z V is of order 3, and two V-gates is a W-gate, so: W=VV and WV=I.

**Parameters**

*   **gatelist** (*list*) – a list of gates.

*   **q** (*int*) – an index of the qubit.

*   **v** (*int*) –

    an integer indicating the gate:

    *   1 - for V gate.
    *   2 - for W gate.

**Returns**

A list of gates, after appending a gate V or W on qubit q.

**Return type**

list

