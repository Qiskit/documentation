# qiskit.pulse.InstructionScheduleMap.pop

`InstructionScheduleMap.pop(instruction, qubits, *params, **kwparams)`

Remove and return the defined schedule for the given instruction on the given qubits.

**Parameters**

*   **instruction** (`Union`\[`str`, `Instruction`]) – Name of the instruction.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits for the instruction.
*   **\*params** – Command parameters for generating the output schedule.
*   **\*\*kwparams** – Keyworded command parameters for generating the schedule.

**Return type**

`Union`\[`Schedule`, `ScheduleBlock`]

**Returns**

The Schedule defined for the input.
