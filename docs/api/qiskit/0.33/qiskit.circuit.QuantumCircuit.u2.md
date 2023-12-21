# qiskit.circuit.QuantumCircuit.u2

`QuantumCircuit.u2(phi, lam, qubit)`

Apply [`U2Gate`](qiskit.circuit.library.U2Gate#qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **phi** (`Union`\[`ParameterExpression`, `float`]) – The $\phi$ rotation angle of the gate.
*   **lam** (`Union`\[`ParameterExpression`, `float`]) – The $\lambda$ rotation angle of the gate.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
