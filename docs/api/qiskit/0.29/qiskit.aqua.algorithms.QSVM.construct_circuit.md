# qiskit.aqua.algorithms.QSVM.construct\_circuit

`QSVM.construct_circuit(x1, x2, measurement=False)`

Generate inner product of x1 and x2 with the given feature map.

The dimension of x1 and x2 must be the same.

**Parameters**

*   **x1** (*numpy.ndarray*) – data points, 1-D array, dimension is D
*   **x2** (*numpy.ndarray*) – data points, 1-D array, dimension is D
*   **measurement** (*bool*) – add measurement gates at the end

**Returns**

constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
