---
title: get_parameters
description: API reference for qiskit.pulse.InstructionScheduleMap.get_parameters
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.get_parameters
---

# get\_parameters

<span id="qiskit.pulse.InstructionScheduleMap.get_parameters" />

`InstructionScheduleMap.get_parameters(instruction, qubits)`

Return the list of parameters taken by the given instruction on the given qubits.

**Parameters**

*   **instruction** (`str`) – Name of the instruction.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits for the instruction.

**Return type**

`Tuple`\[`str`]

**Returns**

The names of the parameters required by the instruction.

