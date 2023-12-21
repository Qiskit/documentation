# qiskit.circuit.QuantumCircuit.rz

`QuantumCircuit.rz(phi, qubit)`

Apply [`RYGate`](qiskit.circuit.library.RYGate#qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **phi** (`Union`\[`ParameterExpression`, `float`]) – The rotation angle of the gate.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
