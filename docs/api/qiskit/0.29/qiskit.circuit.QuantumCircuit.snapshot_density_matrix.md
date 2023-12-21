# qiskit.circuit.QuantumCircuit.snapshot\_density\_matrix

`QuantumCircuit.snapshot_density_matrix(label, qubits=None)`

Take a density matrix snapshot of simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list or None*) – the qubits to apply snapshot to. If None all qubits will be snapshot \[Default: None].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Note" type="note">
  This method will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.save_density_matrix()`](qiskit.providers.aer.library.save_density_matrix#qiskit.providers.aer.library.save_density_matrix "qiskit.providers.aer.library.save_density_matrix") circuit method.
</Admonition>
