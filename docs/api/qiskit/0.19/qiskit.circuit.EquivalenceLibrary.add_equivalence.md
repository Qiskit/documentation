---
title: add_equivalence
description: API reference for qiskit.circuit.EquivalenceLibrary.add_equivalence
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.EquivalenceLibrary.add_equivalence
---

# add\_equivalence

<span id="qiskit.circuit.EquivalenceLibrary.add_equivalence" />

`EquivalenceLibrary.add_equivalence(gate, equivalent_circuit)`

Add a new equivalence to the library. Future queries for the Gate will include the given circuit, in addition to all existing equivalences (including those from base).

Parameterized Gates (those including qiskit.circuit.Parameters in their Gate.params) can be marked equivalent to parameterized circuits, provided the parameters match.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.
*   **equivalent\_circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – A circuit equivalently implementing the given Gate.

