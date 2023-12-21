# qiskit.circuit.QuantumCircuit.rxx

`QuantumCircuit.rxx(theta, qubit1, qubit2)`

Apply [`RXXGate`](qiskit.circuit.library.RXXGate#qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The angle of the rotation.
*   **qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.
*   **qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
