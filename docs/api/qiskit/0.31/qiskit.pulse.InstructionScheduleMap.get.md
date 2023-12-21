# qiskit.pulse.InstructionScheduleMap.get

`InstructionScheduleMap.get(instruction, qubits, *params, **kwparams)`

Return the defined [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule") or [`ScheduleBlock`](qiskit.pulse.ScheduleBlock#qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") for the given instruction on the given qubits.

If all keys are not specified this method returns schedule with unbound parameters.

**Parameters**

*   **instruction** (`Union`\[`str`, `Instruction`]) – Name of the instruction or the instruction itself.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits for the instruction.
*   **\*params** – Command parameters for generating the output schedule.
*   **\*\*kwparams** – Keyworded command parameters for generating the schedule.

**Return type**

`Union`\[`Schedule`, `ScheduleBlock`]

**Returns**

The Schedule defined for the input.

**Raises**

[**PulseError**](qiskit.pulse.PulseError#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When invalid parameters are specified.
