# qiskit.circuit.QuantumCircuit.cp

`QuantumCircuit.cp(theta, control_qubit, target_qubit, label=None, ctrl_state=None)`

Apply [`CPhaseGate`](qiskit.circuit.library.CPhaseGate#qiskit.circuit.library.CPhaseGate "qiskit.circuit.library.CPhaseGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The angle of the rotation.
*   **control\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the control.
*   **target\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.
*   **label** (`Optional`\[`str`]) – The string label of the gate in the circuit.
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal, or as a bitstring (e.g. ‘1’). Defaults to controlling on the ‘1’ state.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
