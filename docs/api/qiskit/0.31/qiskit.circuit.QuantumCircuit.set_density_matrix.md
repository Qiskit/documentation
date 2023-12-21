# qiskit.circuit.QuantumCircuit.set\_density\_matrix

`QuantumCircuit.set_density_matrix(state)`

Set the density matrix state of the simulator.

**Parameters**

**state** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a density matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the density matrix is the incorrect size for the current circuit.
