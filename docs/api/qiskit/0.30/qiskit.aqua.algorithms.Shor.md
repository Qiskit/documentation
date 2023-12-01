# Shor

<span id="undefined" />

`Shor(N=15, a=2, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

Shor’s factoring algorithm.

Shor’s Factoring algorithm is one of the most well-known quantum algorithms and finds the prime factors for input integer $N$ in polynomial time.

The input integer $N$ to be factored is expected to be odd and greater than 2. Even though this implementation is general, its capability will be limited by the capacity of the simulator/hardware. Another input integer $a$ can also be supplied, which needs to be a co-prime smaller than $N$ .

Adapted from [https://github.com/ttlion/ShorAlgQiskit](https://github.com/ttlion/ShorAlgQiskit)

See also [https://arxiv.org/abs/quant-ph/0205095](https://arxiv.org/abs/quant-ph/0205095)

**Parameters**

*   **N** (`int`) – The integer to be factored, has a min. value of 3.

*   **a** (`int`) – Any integer that satisfies 1 \< a \< N and gcd(a, N) = 1.

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) –

    Quantum Instance or Backend

    **Raises:**

    ValueError: Invalid input

## Methods

|                                                                                                                                                                    |                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [`construct_circuit`](qiskit.aqua.algorithms.Shor.construct_circuit#qiskit.aqua.algorithms.Shor.construct_circuit "qiskit.aqua.algorithms.Shor.construct_circuit") | Construct circuit.                                                             |
| [`modinv`](qiskit.aqua.algorithms.Shor.modinv#qiskit.aqua.algorithms.Shor.modinv "qiskit.aqua.algorithms.Shor.modinv")                                             | Returns the modular multiplicative inverse of a with respect to the modulus m. |
| [`run`](qiskit.aqua.algorithms.Shor.run#qiskit.aqua.algorithms.Shor.run "qiskit.aqua.algorithms.Shor.run")                                                         | Execute the algorithm with selected backend.                                   |
| [`set_backend`](qiskit.aqua.algorithms.Shor.set_backend#qiskit.aqua.algorithms.Shor.set_backend "qiskit.aqua.algorithms.Shor.set_backend")                         | Sets backend with configuration.                                               |

## Attributes

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.
