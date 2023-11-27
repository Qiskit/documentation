# qiskit.providers.aer.library.set\_stabilizer[¶](#qiskit-providers-aer-library-set-stabilizer "Permalink to this headline")

<span id="undefined" />

`set_stabilizer(self, state)`

Set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the state is the incorrect size for the current circuit.
