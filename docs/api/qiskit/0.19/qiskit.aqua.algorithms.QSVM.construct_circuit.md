---
title: construct_circuit
description: API reference for qiskit.aqua.algorithms.QSVM.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.QSVM.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.algorithms.QSVM.construct_circuit" />

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

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

