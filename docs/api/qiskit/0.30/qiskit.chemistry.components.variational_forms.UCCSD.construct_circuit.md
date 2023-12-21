# qiskit.chemistry.components.variational\_forms.UCCSD.construct\_circuit

`UCCSD.construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (*Union(numpy.ndarray, list\[*[*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*],* [*ParameterVector*](qiskit.circuit.ParameterVector#qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector")*)*) – circuit parameters
*   **q** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*, optional*) – Quantum Register for the circuit.

**Returns**

a quantum circuit with given parameters

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ValueError** – the number of parameters is incorrect.
