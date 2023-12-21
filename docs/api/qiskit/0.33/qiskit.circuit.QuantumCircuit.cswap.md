# qiskit.circuit.QuantumCircuit.cswap

`QuantumCircuit.cswap(control_qubit, target_qubit1, target_qubit2, label=None, ctrl_state=None)`

Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **control\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the control.
*   **target\_qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.
*   **target\_qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.
*   **label** (`Optional`\[`str`]) – The string label of the gate in the circuit.
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal, or as a bitstring (e.g. ‘1’). Defaults to controlling on the ‘1’ state.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
