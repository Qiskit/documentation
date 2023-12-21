---
title: snapshot_density_matrix
description: API reference for qiskit.circuit.library.OR.snapshot_density_matrix
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.OR.snapshot_density_matrix
---

# snapshot\_density\_matrix

<span id="qiskit.circuit.library.OR.snapshot_density_matrix" />

`OR.snapshot_density_matrix(label, qubits=None)`

Take a density matrix snapshot of simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list or None*) – the qubits to apply snapshot to. If None all qubits will be snapshot \[Default: None].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

