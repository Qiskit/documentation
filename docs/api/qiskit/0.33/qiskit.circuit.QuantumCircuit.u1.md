# qiskit.circuit.QuantumCircuit.u1

`QuantumCircuit.u1(theta, qubit)`

Apply [`U1Gate`](qiskit.circuit.library.U1Gate#qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The $\theta$ rotation angle of the gate.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
