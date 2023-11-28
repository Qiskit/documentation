# qiskit.providers.aer.library.set\_statevector[¶](#qiskit-providers-aer-library-set-statevector "Permalink to this headline")

<span id="undefined" />

`set_statevector(self, state)`

Set the statevector state of the simulator.

**Parameters**

**state** ([*Statevector*](qiskit.quantum_info.Statevector#qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – A state matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the state is the incorrect size for the current circuit.
