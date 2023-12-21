# qiskit.algorithms.Grover.construct\_circuit

`Grover.construct_circuit(problem, power=None, measurement=False)`

Construct the circuit for Grover’s algorithm with `power` Grover operators.

**Parameters**

*   **problem** (`AmplificationProblem`) – The amplification problem for the algorithm.
*   **power** (`Optional`\[`int`]) – The number of times the Grover operator is repeated. If None, this argument is set to the first item in `iterations`.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ValueError** – If no power is passed and the iterations are not an integer.
