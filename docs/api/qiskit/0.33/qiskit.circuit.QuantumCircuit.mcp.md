# qiskit.circuit.QuantumCircuit.mcp

`QuantumCircuit.mcp(lam, control_qubits, target_qubit)`

Apply [`MCPhaseGate`](qiskit.circuit.library.MCPhaseGate#qiskit.circuit.library.MCPhaseGate "qiskit.circuit.library.MCPhaseGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **lam** (`Union`\[`ParameterExpression`, `float`]) – The angle of the rotation.
*   **control\_qubits** (`Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]]) – The qubits used as the controls.
*   **target\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
