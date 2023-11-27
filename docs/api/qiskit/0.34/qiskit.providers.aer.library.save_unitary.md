# qiskit.providers.aer.library.save\_unitary[¶](#qiskit-providers-aer-library-save-unitary "Permalink to this headline")

<span id="undefined" />

`save_unitary(self, label='unitary', pershot=False)`

Save the current state of the unitary simulator.

**Parameters**

*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of unitaries for each shot of the simulation \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<Admonition title="Note" type="note">
  This instruction is always defined across all qubits in a circuit.
</Admonition>
