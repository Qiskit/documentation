# qiskit.transpiler.InstructionDurations.get

`InstructionDurations.get(inst, qubits, unit='dt')`

Get the duration of the instruction with the name and the qubits.

**Parameters**

*   **inst** (`Union`\[`str`, `Instruction`]) – An instruction or its name to be queried.
*   **qubits** (`Union`\[`int`, `List`\[`int`], `Qubit`, `List`\[`Qubit`]]) – Qubits or its indices that the instruction acts on.
*   **unit** (`str`) – The unit of duration to be returned. It must be ‘s’ or ‘dt’.

**Returns**

The duration of the instruction on the qubits.

**Return type**

float|int

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – No duration is defined for the instruction.
