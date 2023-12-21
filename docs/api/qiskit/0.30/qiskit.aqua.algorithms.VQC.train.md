# qiskit.aqua.algorithms.VQC.train

`VQC.train(data, labels, quantum_instance=None, minibatch_size=- 1)`

Train the models, and save results.

**Parameters**

*   **data** (*numpy.ndarray*) – NxD array, N is number of data and D is dimension
*   **labels** (*numpy.ndarray*) – Nx1 array, N is number of data
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all setting
*   **minibatch\_size** (*int*) – the size of each minibatched accuracy evaluation
