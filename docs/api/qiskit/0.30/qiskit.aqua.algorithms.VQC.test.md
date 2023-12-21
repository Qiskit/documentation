# qiskit.aqua.algorithms.VQC.test

`VQC.test(data, labels, quantum_instance=None, minibatch_size=- 1, params=None)`

Predict the labels for the data, and test against with ground truth labels.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, N is number of data and D is data dimension
*   **labels** (*numpy.ndarray*) – Nx1 array, N is number of data
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting
*   **minibatch\_size** (*int*) – the size of each minibatched accuracy evaluation
*   **params** (*list*) – list of parameters to populate in the variational form

**Returns**

classification accuracy

**Return type**

float
