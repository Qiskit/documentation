---
title: qubits_with_instruction
description: API reference for qiskit.pulse.InstructionScheduleMap.qubits_with_instruction
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.pulse.InstructionScheduleMap.qubits_with_instruction
---

# qubits\_with\_instruction

<span id="qiskit.pulse.InstructionScheduleMap.qubits_with_instruction" />

`InstructionScheduleMap.qubits_with_instruction(instruction)`

Return a list of the qubits for which the given instruction is defined. Single qubit instructions return a flat list, and multiqubit instructions return a list of ordered tuples.

**Parameters**

**instruction** (`str`) – The name of the circuit instruction.

**Return type**

`List`\[`Union`\[`int`, `Tuple`\[`int`]]]

**Returns**

Qubit indices which have the given instruction defined. This is a list of tuples if the instruction has an arity greater than 1, or a flat list of ints otherwise.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the instruction is not found.

