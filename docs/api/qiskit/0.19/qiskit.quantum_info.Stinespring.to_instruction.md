---
title: to_instruction
description: API reference for qiskit.quantum_info.Stinespring.to_instruction
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Stinespring.to_instruction
---

# to\_instruction

<span id="qiskit.quantum_info.Stinespring.to_instruction" />

`Stinespring.to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

