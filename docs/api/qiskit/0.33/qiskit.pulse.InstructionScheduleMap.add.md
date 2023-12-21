# qiskit.pulse.InstructionScheduleMap.add

`InstructionScheduleMap.add(instruction, qubits, schedule, arguments=None)`

Add a new known instruction for the given qubits and its mapping to a pulse schedule.

**Parameters**

*   **instruction** (`Union`\[`str`, `Instruction`]) – The name of the instruction to add.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The qubits which the instruction applies to.
*   **schedule** (`Union`\[`Schedule`, `ScheduleBlock`, `Callable`\[…, `Union`\[`Schedule`, `ScheduleBlock`]]]) – The Schedule that implements the given instruction.
*   **arguments** (`Optional`\[`List`\[`str`]]) – List of parameter names to create a parameter-bound schedule from the associated gate instruction. If [`get()`](qiskit.pulse.InstructionScheduleMap.get#qiskit.pulse.InstructionScheduleMap.get "qiskit.pulse.InstructionScheduleMap.get") is called with arguments rather than keyword arguments, this parameter list is used to map the input arguments to parameter objects stored in the target schedule.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the qubits are provided as an empty iterable.

**Return type**

`None`
