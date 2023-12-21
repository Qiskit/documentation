# qiskit.circuit.QuantumCircuit.ccx

`QuantumCircuit.ccx(control_qubit1, control_qubit2, target_qubit, ctrl_state=None)`

Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **control\_qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the first control.
*   **control\_qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the second control.
*   **target\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal, or as a bitstring (e.g. ‘1’). Defaults to controlling on the ‘1’ state.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
