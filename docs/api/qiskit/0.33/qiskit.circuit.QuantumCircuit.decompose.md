# qiskit.circuit.QuantumCircuit.decompose

`QuantumCircuit.decompose(gates_to_decompose=None)`

Call a decomposition pass on this circuit, to decompose one level (shallow decompose).

**Parameters**

**gates\_to\_decompose** (*str or list(str)*) – optional subset of gates to decompose. Defaults to all gates in circuit.

**Returns**

a circuit one level decomposed

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
