# qiskit.ml.circuit.library.RawFeatureVector.snapshot\_expectation\_value

`RawFeatureVector.snapshot_expectation_value(label, op, qubits, single_shot=False, variance=False)`

Take a snapshot of expectation value \<O> of an Operator.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **op** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot
*   **qubits** (*list*) – the qubits to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of values \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Deprecated since version 0.9.0" type="danger">
  This instruction has been deprecated and will be removed no earlier than 3 months from the 0.9.0 release date. It has been superseded by the [`qiskit.providers.aer.library.save_expectation_value()`](qiskit.providers.aer.library.save_expectation_value#qiskit.providers.aer.library.save_expectation_value "qiskit.providers.aer.library.save_expectation_value") and [`qiskit.providers.aer.library.save_expectation_value_variance()`](qiskit.providers.aer.library.save_expectation_value_variance#qiskit.providers.aer.library.save_expectation_value_variance "qiskit.providers.aer.library.save_expectation_value_variance") circuit methods.
</Admonition>
