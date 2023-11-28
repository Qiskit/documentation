# qiskit.aqua.algorithms.Shor

<span id="undefined" />

`Shor(N=15, a=2, quantum_instance=None)`

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

<span id="undefined" />

`__init__(N=15, a=2, quantum_instance=None)`

**Parameters**

*   **N** (`int`) – The integer to be factored, has a min. value of 3.

*   **a** (`int`) – Any integer that satisfies 1 \< a \< N and gcd(a, N) = 1.

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) –

    Quantum Instance or Backend

    **Raises:**

    ValueError: Invalid input

## Methods

|                                                                                                                                       |                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.algorithms.Shor.__init__ "qiskit.aqua.algorithms.Shor.__init__")(\[N, a, quantum\_instance])                | **type N**`int`                                                                |
| [`construct_circuit`](#qiskit.aqua.algorithms.Shor.construct_circuit "qiskit.aqua.algorithms.Shor.construct_circuit")(\[measurement]) | Construct circuit.                                                             |
| [`modinv`](#qiskit.aqua.algorithms.Shor.modinv "qiskit.aqua.algorithms.Shor.modinv")(a, m)                                            | Returns the modular multiplicative inverse of a with respect to the modulus m. |
| [`run`](#qiskit.aqua.algorithms.Shor.run "qiskit.aqua.algorithms.Shor.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend.                                   |
| [`set_backend`](#qiskit.aqua.algorithms.Shor.set_backend "qiskit.aqua.algorithms.Shor.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.                                               |

## Attributes

|                                                                                                                    |                           |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| [`backend`](#qiskit.aqua.algorithms.Shor.backend "qiskit.aqua.algorithms.Shor.backend")                            | Returns backend.          |
| [`quantum_instance`](#qiskit.aqua.algorithms.Shor.quantum_instance "qiskit.aqua.algorithms.Shor.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.Shor.random "qiskit.aqua.algorithms.Shor.random")                               | Return a numpy random.    |

<span id="undefined" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

`construct_circuit(measurement=False)`

Construct circuit.

**Parameters**

**measurement** (`bool`) – Boolean flag to indicate if measurement should be included in the circuit.

**Return type**

`QuantumCircuit`

**Returns**

Quantum circuit.

<span id="undefined" />

`static modinv(a, m)`

Returns the modular multiplicative inverse of a with respect to the modulus m.

**Return type**

`int`

<span id="undefined" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

<span id="undefined" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`
