# qiskit.aqua.algorithms.QSVM.predict

`QSVM.predict(data, quantum_instance=None)`

Predict using the svm.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting

**Returns**

predicted labels, Nx1 array

**Return type**

numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Quantum instance is not present.
