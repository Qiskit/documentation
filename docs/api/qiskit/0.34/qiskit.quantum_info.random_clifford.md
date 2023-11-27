# qiskit.quantum\_info.random\_clifford[¶](#qiskit-quantum-info-random-clifford "Permalink to this headline")

<span id="undefined" />

`random_clifford(num_qubits, seed=None)`

Return a random Clifford operator.

The Clifford is sampled using the method of Reference \[1].

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the Clifford
*   **seed** (*int or np.random.Generator*) – Optional. Set a fixed seed or generator for RNG.

**Returns**

a random Clifford operator.

**Return type**

[Clifford](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

## Reference:

1.  S. Bravyi and D. Maslov, *Hadamard-free circuits expose the structure of the Clifford group*. [arXiv:2003.09412 \[quant-ph\]](https://arxiv.org/abs/2003.09412)
