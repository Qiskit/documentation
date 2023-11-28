# qiskit.quantum\_info.random\_hermitian[¶](#qiskit-quantum-info-random-hermitian "Permalink to this headline")

<span id="undefined" />

`random_hermitian(dims, traceless=False, seed=None)`

Return a random hermitian Operator.

The operator is sampled from Gaussian Unitary Ensemble.

**Parameters**

*   **dims** (*int or tuple*) – the input dimension of the Operator.
*   **traceless** (*bool*) – Optional. If True subtract diagonal entries to return a traceless hermitian operator (Default: False).
*   **seed** (*int or np.random.Generator*) – Optional. Set a fixed seed or generator for RNG.

**Returns**

a Hermitian operator.

**Return type**

[Operator](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")
