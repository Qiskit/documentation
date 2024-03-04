---
title: BasicUtils
description: API reference for qiskit.ignis.verification.BasicUtils
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.BasicUtils
---

# BasicUtils

<span id="qiskit.ignis.verification.BasicUtils" />

`BasicUtils` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/verification/randomized_benchmarking/basic_utils.py "view source code")

Abstract base class (ABS) for utils for various groups and sets of gates for randomized benchmarking.

## Methods

### compose\_gates

<span id="qiskit.ignis.verification.BasicUtils.compose_gates" />

`abstract BasicUtils.compose_gates()`

Compose group elements.

### elmnt

<span id="qiskit.ignis.verification.BasicUtils.elmnt" />

`abstract BasicUtils.elmnt()`

Return a group element.

### elmnt\_key

<span id="qiskit.ignis.verification.BasicUtils.elmnt_key" />

`abstract BasicUtils.elmnt_key()`

Return a key of a group element in the table.

### find\_inverse\_gates

<span id="qiskit.ignis.verification.BasicUtils.find_inverse_gates" />

`abstract BasicUtils.find_inverse_gates()`

Compute an inverse of a group element.

### find\_key

<span id="qiskit.ignis.verification.BasicUtils.find_key" />

`abstract BasicUtils.find_key()`

Return a key to the group element.

### gatelist

<span id="qiskit.ignis.verification.BasicUtils.gatelist" />

`abstract BasicUtils.gatelist()`

Return a list of gates corresponding to a group element.

### group\_tables

<span id="qiskit.ignis.verification.BasicUtils.group_tables" />

`abstract BasicUtils.group_tables()`

Return the group tables.

### load\_tables

<span id="qiskit.ignis.verification.BasicUtils.load_tables" />

`abstract BasicUtils.load_tables()`

Load pickled group tables, or generate them if they do not exist.

### num\_qubits

<span id="qiskit.ignis.verification.BasicUtils.num_qubits" />

`abstract BasicUtils.num_qubits()`

Return the number of qubits.

### random\_gates

<span id="qiskit.ignis.verification.BasicUtils.random_gates" />

`abstract BasicUtils.random_gates()`

Pick a random group element.

