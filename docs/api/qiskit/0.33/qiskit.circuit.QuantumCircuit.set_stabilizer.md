# qiskit.circuit.QuantumCircuit.set\_stabilizer

`QuantumCircuit.set_stabilizer(state)`

Set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the state is the incorrect size for the current circuit.
