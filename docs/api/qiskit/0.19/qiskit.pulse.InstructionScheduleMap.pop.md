---
title: pop
description: API reference for qiskit.pulse.InstructionScheduleMap.pop
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.pop
---

# pop

<span id="qiskit.pulse.InstructionScheduleMap.pop" />

`InstructionScheduleMap.pop(instruction, qubits, *params, **kwparams)`

Remove and return the defined `Schedule` for the given instruction on the given qubits.

**Parameters**

*   **instruction** (`str`) – Name of the instruction.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits for the instruction.
*   **\*params** – Command parameters for generating the output schedule.
*   **\*\*kwparams** – Keyworded command parameters for generating the schedule.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

The Schedule defined for the input.

