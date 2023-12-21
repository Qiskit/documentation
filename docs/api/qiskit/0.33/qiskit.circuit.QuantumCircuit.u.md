# qiskit.circuit.QuantumCircuit.u

`QuantumCircuit.u(theta, phi, lam, qubit)`

Apply [`UGate`](qiskit.circuit.library.UGate#qiskit.circuit.library.UGate "qiskit.circuit.library.UGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The $\theta$ rotation angle of the gate.
*   **phi** (`Union`\[`ParameterExpression`, `float`]) – The $\phi$ rotation angle of the gate.
*   **lam** (`Union`\[`ParameterExpression`, `float`]) – The $\lambda$ rotation angle of the gate.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
