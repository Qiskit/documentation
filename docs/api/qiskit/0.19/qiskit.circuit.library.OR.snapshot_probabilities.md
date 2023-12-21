---
title: snapshot_probabilities
description: API reference for qiskit.circuit.library.OR.snapshot_probabilities
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.OR.snapshot_probabilities
---

# snapshot\_probabilities

<span id="qiskit.circuit.library.OR.snapshot_probabilities" />

`OR.snapshot_probabilities(label, qubits, variance=False)`

Take a probability snapshot of the simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list*) – the qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

