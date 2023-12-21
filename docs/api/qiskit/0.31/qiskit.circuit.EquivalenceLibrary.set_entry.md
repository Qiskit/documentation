# qiskit.circuit.EquivalenceLibrary.set\_entry

`EquivalenceLibrary.set_entry(gate, entry)`

Set the equivalence record for a Gate. Future queries for the Gate will return only the circuits provided.

Parameterized Gates (those including qiskit.circuit.Parameters in their Gate.params) can be marked equivalent to parameterized circuits, provided the parameters match.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.
*   **entry** (*List\['QuantumCircuit']*) – A list of QuantumCircuits, each equivalently implementing the given Gate.
