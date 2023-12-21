# qiskit.aqua.components.variational\_forms.VariationalForm.construct\_circuit

`abstract VariationalForm.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`List`\[`float`], `ndarray`]) – circuit parameters.
*   **q** (`Optional`\[`QuantumRegister`]) – Quantum Register for the circuit.

**Returns**

A quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
