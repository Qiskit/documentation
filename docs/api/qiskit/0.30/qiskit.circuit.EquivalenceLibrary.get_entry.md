# qiskit.circuit.EquivalenceLibrary.get\_entry

`EquivalenceLibrary.get_entry(gate)`

Gets the set of QuantumCircuits circuits from the library which equivalently implement the given Gate.

Parameterized circuits will have their parameters replaced with the corresponding entries from Gate.params.

**Parameters**

**gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.

**Returns**

**A list of equivalent QuantumCircuits. If empty,**

library contains no known decompositions of Gate.

Returned circuits will be ordered according to their insertion in the library, from earliest to latest, from top to base. The ordering of the StandardEquivalenceLibrary will not generally be consistent across Qiskit versions.

**Return type**

List\[[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]
