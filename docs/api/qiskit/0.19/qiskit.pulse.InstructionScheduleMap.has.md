---
title: has
description: API reference for qiskit.pulse.InstructionScheduleMap.has
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.has
---

# has

<span id="qiskit.pulse.InstructionScheduleMap.has" />

`InstructionScheduleMap.has(instruction, qubits)`

Is the instruction defined for the given qubits?

**Parameters**

*   **instruction** (`str`) – The instruction for which to look.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the instruction.

**Return type**

`bool`

**Returns**

True iff the instruction is defined.

