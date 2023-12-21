---
title: snapshot_expectation_value
description: API reference for qiskit.circuit.library.HiddenLinearFunction.snapshot_expectation_value
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.HiddenLinearFunction.snapshot_expectation_value
---

# snapshot\_expectation\_value

<span id="qiskit.circuit.library.HiddenLinearFunction.snapshot_expectation_value" />

`HiddenLinearFunction.snapshot_expectation_value(label, op, qubits, single_shot=False, variance=False)`

Take a snapshot of expectation value \<O> of an Operator.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot
*   **qubits** (*list*) – the qubits to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

