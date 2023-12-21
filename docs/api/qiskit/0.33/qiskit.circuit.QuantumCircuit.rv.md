# qiskit.circuit.QuantumCircuit.rv

`QuantumCircuit.rv(vx, vy, vz, qubit)`

Apply [`RVGate`](qiskit.circuit.library.RVGate#qiskit.circuit.library.RVGate "qiskit.circuit.library.RVGate").

For the full matrix form of this gate, see the underlying gate documentation.

Rotation around an arbitrary rotation axis $v$, where $|v|$ is the angle of rotation in radians.

**Parameters**

*   **vx** (`Union`\[`ParameterExpression`, `float`]) – x-compenent of the rotation axis.
*   **vy** (`Union`\[`ParameterExpression`, `float`]) – y-compenent of the rotation axis.
*   **vz** (`Union`\[`ParameterExpression`, `float`]) – z-compenent of the rotation axis.
*   **qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
