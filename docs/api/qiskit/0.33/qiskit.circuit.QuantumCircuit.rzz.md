# qiskit.circuit.QuantumCircuit.rzz

`QuantumCircuit.rzz(theta, qubit1, qubit2)`

Apply [`RZZGate`](qiskit.circuit.library.RZZGate#qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The rotation angle of the gate.
*   **qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.
*   **qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
