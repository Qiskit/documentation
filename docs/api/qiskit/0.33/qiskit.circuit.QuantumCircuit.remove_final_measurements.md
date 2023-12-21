# qiskit.circuit.QuantumCircuit.remove\_final\_measurements

`QuantumCircuit.remove_final_measurements(inplace=True)`

Removes final measurements and barriers on all qubits if they are present. Deletes the classical registers that were used to store the values from these measurements that become idle as a result of this operation, and deletes classical bits that are referenced only by removed registers, or that aren’t referenced at all but have become idle as a result of this operation.

Measurements and barriers are considered final if they are followed by no other operations (aside from other measurements or barriers.)

**Parameters**

**inplace** (*bool*) – All measurements removed inplace or return new circuit.

**Returns**

Returns the resulting circuit when `inplace=False`, else None.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
