---
title: add_layer
description: API reference for qiskit.circuit.library.ZFeatureMap.add_layer
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.ZFeatureMap.add_layer
---

# add\_layer

<span id="qiskit.circuit.library.ZFeatureMap.add_layer" />

`ZFeatureMap.add_layer(other, entanglement=None, front=False)`

Append another layer to the NLocal.

**Parameters**

*   **other** (`Union`\[[`NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.n_local.n_local.NLocal"), [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – The layer to compose, can be another NLocal, an Instruction or Gate, or a QuantumCircuit.
*   **entanglement** (`Union`\[`List`\[`int`], `str`, `List`\[`List`\[`int`]], `None`]) – The entanglement or qubit indices.
*   **front** (`bool`) – If True, `other` is appended to the front, else to the back.

**Return type**

[`NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.n_local.n_local.NLocal")

**Returns**

self, such that chained composes are possible.

**Raises**

**TypeError** – If other is not compatible, i.e. is no Instruction and does not have a to\_instruction method.

