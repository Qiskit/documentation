---
title: snapshot_statevector
description: API reference for qiskit.circuit.library.IQP.snapshot_statevector
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.IQP.snapshot_statevector
---

# snapshot\_statevector

<span id="qiskit.circuit.library.IQP.snapshot_statevector" />

`IQP.snapshot_statevector(label)`

Take a statevector snapshot of the simulator state.

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

