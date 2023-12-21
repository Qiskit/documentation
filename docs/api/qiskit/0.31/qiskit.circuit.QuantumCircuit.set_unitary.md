# qiskit.circuit.QuantumCircuit.set\_unitary

`QuantumCircuit.set_unitary(state)`

Set the state state of the simulator.

**Parameters**

**state** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – A state matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **ExtensionError** – If the state is the incorrect size for the current circuit.
*   **ExtensionError** – if the input matrix is not unitary.
