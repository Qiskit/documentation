# qiskit.quantum\_info.random\_quantum\_channel[¶](#qiskit-quantum-info-random-quantum-channel "Permalink to this headline")

<span id="undefined" />

`random_quantum_channel(input_dims=None, output_dims=None, rank=None, seed=None)`

Return a random CPTP quantum channel.

This constructs the Stinespring operator for the quantum channel by sampling a random isometry from the unitary Haar measure.

**Parameters**

*   **input\_dims** (*int or tuple*) – the input dimension of the channel.
*   **output\_dims** (*int or tuple*) – the input dimension of the channel.
*   **rank** (*int*) – Optional. The rank of the quantum channel Choi-matrix.
*   **seed** (*int or np.random.Generator*) – Optional. Set a fixed seed or generator for RNG.

**Returns**

a quantum channel operator.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring#qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if rank or dimensions are invalid.
