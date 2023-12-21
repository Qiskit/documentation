---
title: snapshot_stabilizer
description: API reference for qiskit.circuit.library.NLocal.snapshot_stabilizer
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.NLocal.snapshot_stabilizer
---

# snapshot\_stabilizer

<span id="qiskit.circuit.library.NLocal.snapshot_stabilizer" />

`NLocal.snapshot_stabilizer(label)`

Take a stabilizer snapshot of the simulator state.

**Parameters**

**label** (*str*) – a snapshot label to report the result.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

## Additional Information:

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

