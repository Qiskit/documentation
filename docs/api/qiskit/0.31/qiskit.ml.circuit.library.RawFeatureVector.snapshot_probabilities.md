# qiskit.ml.circuit.library.RawFeatureVector.snapshot\_probabilities

`RawFeatureVector.snapshot_probabilities(label, qubits, variance=False)`

Take a probability snapshot of the simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list*) – the qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.save_probabilities()`](qiskit.providers.aer.library.save_probabilities#qiskit.providers.aer.library.save_probabilities "qiskit.providers.aer.library.save_probabilities") and [`qiskit.providers.aer.library.save_probabilities_dict()`](qiskit.providers.aer.library.save_probabilities_dict#qiskit.providers.aer.library.save_probabilities_dict "qiskit.providers.aer.library.save_probabilities_dict") circuit methods.
</Admonition>
