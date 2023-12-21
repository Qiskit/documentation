---
title: set_entry
description: API reference for qiskit.circuit.EquivalenceLibrary.set_entry
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.EquivalenceLibrary.set_entry
---

# set\_entry

<span id="qiskit.circuit.EquivalenceLibrary.set_entry" />

`EquivalenceLibrary.set_entry(gate, entry)`

Set the equivalence record for a Gate. Future queries for the Gate will return only the circuits provided.

Parameterized Gates (those including qiskit.circuit.Parameters in their Gate.params) can be marked equivalent to parameterized circuits, provided the parameters match.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.
*   **entry** (*List\['QuantumCircuit']*) – A list of QuantumCircuits, each equivalently implementing the given Gate.

