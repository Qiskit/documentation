# qiskit.circuit.QuantumCircuit.ms

`QuantumCircuit.ms(theta, qubits)`

Apply `MSGate`.

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The angle of the rotation.
*   **qubits** (`Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]]) – The qubits to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
