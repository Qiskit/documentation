# qiskit.aqua.algorithms.QSVM.train

`QSVM.train(data, labels, quantum_instance=None)`

Train the svm.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, where N is the number of data, D is the feature dimension.
*   **labels** (*numpy.ndarray*) – Nx1 array, where N is the number of data
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Quantum instance is not present.
