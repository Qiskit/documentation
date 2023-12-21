# qiskit.aqua.algorithms.VQC.construct\_circuit

`VQC.construct_circuit(x, theta, measurement=False)`

Construct circuit based on data and parameters in variational form.

**Parameters**

*   **x** (*numpy.ndarray*) – 1-D array with D dimension
*   **theta** (*list\[numpy.ndarray]*) – list of 1-D array, parameters sets for variational form
*   **measurement** (*bool*) – flag to add measurement

**Returns**

the circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If `x` and `theta` share parameters with the same name.
