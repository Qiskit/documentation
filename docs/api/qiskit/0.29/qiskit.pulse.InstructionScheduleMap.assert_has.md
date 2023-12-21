# qiskit.pulse.InstructionScheduleMap.assert\_has

`InstructionScheduleMap.assert_has(instruction, qubits)`

Error if the given instruction is not defined.

**Parameters**

*   **instruction** (`Union`\[`str`, `Instruction`]) – The instruction for which to look.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the instruction.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the instruction is not defined on the qubits.

**Return type**

`None`
