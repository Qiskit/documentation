# qiskit.circuit.QuantumCircuit.u3

`QuantumCircuit.u3(theta, phi, lam, qubit)`

Apply [`U3Gate`](qiskit.circuit.library.U3Gate#qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").

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
