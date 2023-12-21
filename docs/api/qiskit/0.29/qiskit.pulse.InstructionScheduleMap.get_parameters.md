# qiskit.pulse.InstructionScheduleMap.get\_parameters

`InstructionScheduleMap.get_parameters(instruction, qubits)`

Return the list of parameters taken by the given instruction on the given qubits.

**Parameters**

*   **instruction** (`Union`\[`str`, `Instruction`]) – Name of the instruction.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits for the instruction.

**Return type**

`Tuple`\[`str`]

**Returns**

The names of the parameters required by the instruction.
