# Shor

<span id="undefined" />

`Shor(quantum_instance=None)`

Bases: `object`

Shor’s factoring algorithm.

Shor’s Factoring algorithm is one of the most well-known quantum algorithms and finds the prime factors for input integer $N$ in polynomial time.

Adapted from [https://github.com/ttlion/ShorAlgQiskit](https://github.com/ttlion/ShorAlgQiskit)

See also [https://arxiv.org/abs/quant-ph/0205095](https://arxiv.org/abs/quant-ph/0205095)

**Parameters**

**quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                     |                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`construct_circuit`](qiskit.algorithms.Shor.construct_circuit#qiskit.algorithms.Shor.construct_circuit "qiskit.algorithms.Shor.construct_circuit") | Construct quantum part of the algorithm.                                       |
| [`factor`](qiskit.algorithms.Shor.factor#qiskit.algorithms.Shor.factor "qiskit.algorithms.Shor.factor")                                             | Execute the algorithm.                                                         |
| [`modinv`](qiskit.algorithms.Shor.modinv#qiskit.algorithms.Shor.modinv "qiskit.algorithms.Shor.modinv")                                             | Returns the modular multiplicative inverse of a with respect to the modulus m. |

## Attributes

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]
