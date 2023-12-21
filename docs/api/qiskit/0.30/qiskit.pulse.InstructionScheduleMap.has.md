# qiskit.pulse.InstructionScheduleMap.has

`InstructionScheduleMap.has(instruction, qubits)`

Is the instruction defined for the given qubits?

**Parameters**

*   **instruction** (`Union`\[`str`, `Instruction`]) – The instruction for which to look.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the instruction.

**Return type**

`bool`

**Returns**

True iff the instruction is defined.
