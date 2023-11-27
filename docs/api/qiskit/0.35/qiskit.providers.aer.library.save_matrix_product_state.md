# qiskit.providers.aer.library.save\_matrix\_product\_state[¶](#qiskit-providers-aer-library-save-matrix-product-state "Permalink to this headline")

<span id="undefined" />

`save_matrix_product_state(self, label='matrix_product_state', pershot=False, conditional=False)`

Save the current simulator quantum state as a matrix product state.

**Parameters**

*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save the mps for each shot of the simulation \[Default: False].
*   **conditional** (*bool*) – if True save pershot data conditional on the current classical register values \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
