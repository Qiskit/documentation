# qiskit.aqua.algorithms.QSVM.get\_kernel\_matrix

`static QSVM.get_kernel_matrix(quantum_instance, feature_map, x1_vec, x2_vec=None, enforce_psd=True)`

Construct kernel matrix, if x2\_vec is None, self-innerproduct is conducted.

## Notes

When using statevector\_simulator, we only build the circuits for Psi(x1)|0> rather than Psi(x2)^dagger Psi(x1)|0>, and then we perform the inner product classically. That is, for statevector\_simulator, the total number of circuits will be O(N) rather than O(N^2) for qasm\_simulator.

**Parameters**

*   **quantum\_instance** ([*QuantumInstance*](qiskit.aqua.QuantumInstance#qiskit.aqua.QuantumInstance "qiskit.aqua.QuantumInstance")) – quantum backend with all settings
*   **feature\_map** ([*FeatureMap*](qiskit.aqua.components.feature_maps.FeatureMap#qiskit.aqua.components.feature_maps.FeatureMap "qiskit.aqua.components.feature_maps.FeatureMap")) – a feature map that maps data to feature space
*   **x1\_vec** (*numpy.ndarray*) – data points, 2-D array, N1xD, where N1 is the number of data, D is the feature dimension
*   **x2\_vec** (*numpy.ndarray*) – data points, 2-D array, N2xD, where N2 is the number of data, D is the feature dimension
*   **enforce\_psd** (*bool*) – enforces that the kernel matrix is positive semi-definite by setting negative eigenvalues to zero. This is only applied in the symmetric case, i.e., if x2\_vec == None.

**Returns**

2-D matrix, N1xN2

**Return type**

numpy.ndarray
