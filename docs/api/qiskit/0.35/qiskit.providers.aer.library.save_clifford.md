# qiskit.providers.aer.library.save\_clifford

<span id="undefined" />

`save_clifford(self, label='clifford', pershot=False)`

Save the current stabilizer simulator quantum state as a Clifford.

**Parameters**

*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of Cliffords for each shot of the simulation \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<Admonition title="Note" type="note">
  This instruction is always defined across all qubits in a circuit.
</Admonition>
