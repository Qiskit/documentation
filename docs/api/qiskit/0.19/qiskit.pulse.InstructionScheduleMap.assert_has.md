---
title: assert_has
description: API reference for qiskit.pulse.InstructionScheduleMap.assert_has
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.assert_has
---

# assert\_has

<span id="qiskit.pulse.InstructionScheduleMap.assert_has" />

`InstructionScheduleMap.assert_has(instruction, qubits)`

Error if the given instruction is not defined.

**Parameters**

*   **instruction** (`str`) – The instruction for which to look.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the instruction.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the instruction is not defined on the qubits.

**Return type**

`None`

