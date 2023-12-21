# qiskit.transpiler.InstructionDurations.from\_backend

`classmethod InstructionDurations.from_backend(backend)`

Construct an [`InstructionDurations`](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object from the backend.

**Parameters**

**backend** (`BaseBackend`) – backend from which durations (gate lengths) and dt are extracted.

**Returns**

The InstructionDurations constructed from backend.

**Return type**

[InstructionDurations](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If dt and dtm is different in the backend.
