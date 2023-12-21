---
title: qubit_instructions
description: API reference for qiskit.pulse.InstructionScheduleMap.qubit_instructions
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.qubit_instructions
---

# qubit\_instructions

<span id="qiskit.pulse.InstructionScheduleMap.qubit_instructions" />

`InstructionScheduleMap.qubit_instructions(qubits)`

Return a list of the instruction names that are defined by the backend for the given qubit or qubits.

**Parameters**

**qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – A qubit index, or a list or tuple of indices.

**Return type**

`List`\[`str`]

**Returns**

All the instructions which are defined on the qubits.

For 1 qubit, all the 1Q instructions defined. For multiple qubits, all the instructions which apply to that whole set of qubits (e.g. `qubits=[0, 1]` may return `['cx']`).

