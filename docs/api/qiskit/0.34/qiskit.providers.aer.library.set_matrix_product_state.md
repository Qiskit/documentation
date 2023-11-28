# qiskit.providers.aer.library.set\_matrix\_product\_state[¶](#qiskit-providers-aer-library-set-matrix-product-state "Permalink to this headline")

<span id="undefined" />

`set_matrix_product_state(self, state)`

Set the matrix product state of the simulator.

**Parameters**

**state** (*Tuple\[List\[Tuple\[np.array\[complex\_t]]]], List\[List\[float]]*) – A matrix\_product\_state.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the structure of the state is incorrect
