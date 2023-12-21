---
title: add
description: API reference for qiskit.pulse.InstructionScheduleMap.add
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.add
---

# add

<span id="qiskit.pulse.InstructionScheduleMap.add" />

`InstructionScheduleMap.add(instruction, qubits, schedule)`

Add a new known instruction for the given qubits and its mapping to a pulse schedule.

**Parameters**

*   **instruction** (`str`) – The name of the instruction to add.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits which the instruction applies to.
*   **schedule** (`Union`\[[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule"), `Callable`\[…, [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")]]) – The Schedule that implements the given instruction.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the qubits are provided as an empty iterable.

**Return type**

`None`

