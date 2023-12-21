# qiskit.circuit.QuantumCircuit.pauli

`QuantumCircuit.pauli(pauli_string, qubits)`

Apply [`PauliGate`](qiskit.circuit.library.PauliGate#qiskit.circuit.library.PauliGate "qiskit.circuit.library.PauliGate").

**Parameters**

*   **pauli\_string** (`str`) – A string representing the Pauli operator to apply, e.g. ‘XX’.
*   **qubits** (`Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]]) – The qubits to apply this gate to.

**Return type**

`InstructionSet`

**Returns**

A handle to the instructions created.
