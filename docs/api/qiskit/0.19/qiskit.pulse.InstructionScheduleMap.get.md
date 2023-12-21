---
title: get
description: API reference for qiskit.pulse.InstructionScheduleMap.get
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.get
---

# get

<span id="qiskit.pulse.InstructionScheduleMap.get" />

`InstructionScheduleMap.get(instruction, qubits, *params, **kwparams)`

Return the defined [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") for the given instruction on the given qubits.

**Parameters**

*   **instruction** (`str`) – Name of the instruction.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits for the instruction.
*   **\*params** – Command parameters for generating the output schedule.
*   **\*\*kwparams** – Keyworded command parameters for generating the schedule.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

The Schedule defined for the input.

