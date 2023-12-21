# qiskit.circuit.QuantumCircuit.r

`QuantumCircuit.r(theta, phi, qubit)`

Apply [`RGate`](qiskit.circuit.library.RGate#qiskit.circuit.library.RGate "qiskit.circuit.library.RGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The angle of the rotation.
*   **phi** (`Union`\[`ParameterExpression`, `float`]) – The angle of the axis of rotation in the x-y plane.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
