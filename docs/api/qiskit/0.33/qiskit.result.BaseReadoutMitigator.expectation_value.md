# qiskit.result.BaseReadoutMitigator.expectation\_value

`abstract BaseReadoutMitigator.expectation_value(data, diagonal, qubits=None, clbits=None, shots=None)`

Calculate the expectation value of a diagonal Hermitian operator.

**Parameters**

*   **data** (`Counts`) – Counts object to be mitigated.
*   **diagonal** (`Union`\[`Callable`, `dict`, `str`, `ndarray`]) – the diagonal operator. This may either be specified as a string containing I,Z,0,1 characters, or as a real valued 1D array\_like object supplying the full diagonal, or as a dictionary, or as Callable.
*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – the physical qubits measured to obtain the counts clbits. If None these are assumed to be qubits \[0, …, N-1] for N-bit counts.
*   **clbits** (`Optional`\[`List`\[`int`]]) – Optional, marginalize counts to just these bits.
*   **shots** (`Optional`\[`int`]) – Optional, the total number of shots, if None shots will be calculated as the sum of all counts.

**Return type**

`Tuple`\[`float`, `float`]

**Returns**

The mean and an upper bound of the standard deviation of operator expectation value calculated from the current counts.
