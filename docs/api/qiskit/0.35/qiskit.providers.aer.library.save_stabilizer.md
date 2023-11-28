# qiskit.providers.aer.library.save\_stabilizer

<span id="undefined" />

`save_stabilizer(self, label='stabilizer', pershot=False, conditional=False)`

Save the current stabilizer simulator quantum state as a StabilizerState.

**Parameters**

*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of StabilizerStates for each shot of the simulation \[Default: False].
*   **conditional** (*bool*) – if True save pershot data conditional on the current classical register values \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<Admonition title="Note" type="note">
  This instruction is always defined across all qubits in a circuit.
</Admonition>
