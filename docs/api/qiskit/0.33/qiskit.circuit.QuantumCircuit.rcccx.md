# qiskit.circuit.QuantumCircuit.rcccx

`QuantumCircuit.rcccx(control_qubit1, control_qubit2, control_qubit3, target_qubit)`

Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate#qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **control\_qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the first control.
*   **control\_qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the second control.
*   **control\_qubit3** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the third control.
*   **target\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
