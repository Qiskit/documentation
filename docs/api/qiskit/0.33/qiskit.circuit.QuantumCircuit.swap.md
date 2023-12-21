# qiskit.circuit.QuantumCircuit.swap

`QuantumCircuit.swap(qubit1, qubit2)`

Apply [`SwapGate`](qiskit.circuit.library.SwapGate#qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").

For the full matrix form of this gate, see the underlying gate documentation.

**Parameters**

*   **qubit1** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubits to apply the gate to.
*   **qubit2** (`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]) – The qubits to apply the gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
