# qiskit.algorithms.Shor.construct\_circuit

`Shor.construct_circuit(N, a=2, measurement=False)`

Construct quantum part of the algorithm.

**Parameters**

*   **N** (`int`) – The odd integer to be factored, has a min. value of 3.
*   **a** (`int`) – Any integer that satisfies 1 \< a \< N and gcd(a, N) = 1.
*   **measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Return type**

`QuantumCircuit`

**Returns**

Quantum circuit.
