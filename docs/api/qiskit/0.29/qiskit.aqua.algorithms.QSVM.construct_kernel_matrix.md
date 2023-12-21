# qiskit.aqua.algorithms.QSVM.construct\_kernel\_matrix

`QSVM.construct_kernel_matrix(x1_vec, x2_vec=None, quantum_instance=None)`

Construct kernel matrix, if x2\_vec is None, self-innerproduct is conducted.

## Notes

When using statevector\_simulator, we only build the circuits for Psi(x1)|0> rather than Psi(x2)^dagger Psi(x1)|0>, and then we perform the inner product classically. That is, for statevector\_simulator, the total number of circuits will be O(N) rather than O(N^2) for qasm\_simulator.

**Parameters**

*   **x1\_vec** (*numpy.ndarray*) – data points, 2-D array, N1xD, where N1 is the number of data, D is the feature dimension
*   **x2\_vec** (*numpy.ndarray*) – data points, 2-D array, N2xD, where N2 is the number of data, D is the feature dimension
*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all settings

**Returns**

2-D matrix, N1xN2

**Return type**

numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Quantum instance is not present.
