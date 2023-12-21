# qiskit.algorithms.Shor.factor

`Shor.factor(N, a=2)`

Execute the algorithm.

The input integer $N$ to be factored is expected to be odd and greater than 2. Even though this implementation is general, its capability will be limited by the capacity of the simulator/hardware. Another input integer $a$ can also be supplied, which needs to be a co-prime smaller than $N$ .

**Parameters**

*   **N** (`int`) – The odd integer to be factored, has a min. value of 3.
*   **a** (`int`) – Any integer that satisfies 1 \< a \< N and gcd(a, N) = 1.

**Returns**

results of the algorithm.

**Return type**

[ShorResult](qiskit.algorithms.ShorResult#qiskit.algorithms.ShorResult "qiskit.algorithms.ShorResult")

**Raises**

*   **ValueError** – Invalid input
*   [**AlgorithmError**](qiskit.algorithms.AlgorithmError#qiskit.algorithms.AlgorithmError "qiskit.algorithms.AlgorithmError") – If a quantum instance or backend has not been provided
