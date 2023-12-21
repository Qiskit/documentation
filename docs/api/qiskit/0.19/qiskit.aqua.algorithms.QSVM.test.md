---
title: test
description: API reference for qiskit.aqua.algorithms.QSVM.test
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.QSVM.test
---

# test

<span id="qiskit.aqua.algorithms.QSVM.test" />

`QSVM.test(data, labels, quantum_instance=None)`

Test the svm.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **labels** (*numpy.ndarray*) – Nx1 array, where N is the number of data
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting

**Returns**

accuracy

**Return type**

float

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Quantum instance is not present.

