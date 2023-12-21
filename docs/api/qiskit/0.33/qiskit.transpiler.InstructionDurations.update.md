# qiskit.transpiler.InstructionDurations.update

`InstructionDurations.update(inst_durations, dt=None)`

Update self with inst\_durations (inst\_durations overwrite self).

**Parameters**

*   **inst\_durations** (`Optional`\[`Union`\[`List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `float`, `str`]], `List`\[`Tuple`\[`str`, `Optional`\[`Iterable`\[`int`]], `float`]], `InstructionDurations`]]) – Instruction durations to be merged into self (overwriting self).
*   **dt** (`Optional`\[`float`]) – Sampling duration in seconds of the target backend.

**Returns**

The updated InstructionDurations.

**Return type**

[InstructionDurations](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the format of instruction\_durations is invalid.
