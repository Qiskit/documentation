# qiskit.ml.circuit.library.RawFeatureVector.set\_statevector

`RawFeatureVector.set_statevector(state)`

Set the statevector state of the simulator.

**Parameters**

**state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – A state matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the state is the incorrect size for the current circuit.
