# qiskit.circuit.QuantumCircuit.fredkin

`QuantumCircuit.fredkin(control_qubit, target_qubit1, target_qubit2)`

Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **control\_qubit** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) used as the control.
*   **target\_qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.
*   **target\_qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubit(s) targeted by the gate.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.

<Admonition title="See also" type="note">
  QuantumCircuit.cswap: the same function with a different name.
</Admonition>
