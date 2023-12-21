---
title: measure
description: API reference for qiskit.circuit.library.IntegerComparator.measure
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.IntegerComparator.measure
---

# measure

<span id="qiskit.circuit.library.IntegerComparator.measure" />

`IntegerComparator.measure(qubit, cbit)`

Measure quantum bit into classical bit (tuples).

**Parameters**

*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list|tuple*) – quantum register
*   **cbit** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")*|list|tuple*) – classical register

**Returns**

the attached measure instruction.

**Return type**

qiskit.Instruction

**Raises**

**CircuitError** – if qubit is not in this circuit or bad format; if cbit is not in this circuit or not creg.

