# qiskit.quantum\_info.random\_density\_matrix

<span id="undefined" />

`random_density_matrix(dims, rank=None, method='Hilbert-Schmidt', seed=None)`

Generator a random DensityMatrix.

**Parameters**

*   **dims** (*int or tuple*) – the dimensions of the DensityMatrix.
*   **rank** (*int or None*) – Optional, the rank of the density matrix. The default value is full-rank.
*   **method** (*string*) – Optional. The method to use. ‘Hilbert-Schmidt’: (Default) sample from the Hilbert-Schmidt metric. ‘Bures’: sample from the Bures metric.
*   **seed** (*int or np.random.Generator*) – Optional. Set a fixed seed or generator for RNG.

**Returns**

the random density matrix.

**Return type**

[DensityMatrix](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")

**Raises**

**QiskitError** – if the method is not valid.
