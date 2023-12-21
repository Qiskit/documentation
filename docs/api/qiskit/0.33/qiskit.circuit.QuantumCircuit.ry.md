# qiskit.circuit.QuantumCircuit.ry

`QuantumCircuit.ry(theta, qubit, label=None)`

Apply [`RYGate`](qiskit.circuit.library.RYGate#qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The rotation angle of the gate.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.
*   **label** (`Optional`\[`str`]) – The string label of the gate in the circuit.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
