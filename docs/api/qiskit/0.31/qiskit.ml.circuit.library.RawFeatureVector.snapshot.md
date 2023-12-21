# qiskit.ml.circuit.library.RawFeatureVector.snapshot

`RawFeatureVector.snapshot(label, snapshot_type='statevector', qubits=None, params=None)`

Take a statevector snapshot of the internal simulator representation. Works on all qubits, and prevents reordering (like barrier). :param label: a snapshot label to report the result :type label: str :param snapshot\_type: the type of the snapshot. :type snapshot\_type: str :param qubits: the qubits to apply snapshot to \[Default: None]. :type qubits: list or None :param params: the parameters for snapshot\_type \[Default: None]. :type params: list or None

**Returns**

with attached command

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – malformed command
