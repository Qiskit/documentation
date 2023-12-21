---
title: snapshot
description: API reference for qiskit.circuit.library.FourierChecking.snapshot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.FourierChecking.snapshot
---

# snapshot

<span id="qiskit.circuit.library.FourierChecking.snapshot" />

`FourierChecking.snapshot(label, snapshot_type='statevector', qubits=None, params=None)`

Take a statevector snapshot of the internal simulator representation. Works on all qubits, and prevents reordering (like barrier). :param label: a snapshot label to report the result :type label: str :param snapshot\_type: the type of the snapshot. :type snapshot\_type: str :param qubits: the qubits to apply snapshot to \[Default: None]. :type qubits: list or None :param params: the parameters for snapshot\_type \[Default: None]. :type params: list or None

**Returns**

with attached command

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – malformed command

