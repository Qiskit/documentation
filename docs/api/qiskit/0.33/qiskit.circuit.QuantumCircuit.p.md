# qiskit.circuit.QuantumCircuit.p

`QuantumCircuit.p(theta, qubit)`

Apply [`PhaseGate`](qiskit.circuit.library.PhaseGate#qiskit.circuit.library.PhaseGate "qiskit.circuit.library.PhaseGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – THe angle of the rotation.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
