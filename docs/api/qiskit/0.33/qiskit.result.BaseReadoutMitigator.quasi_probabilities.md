# qiskit.result.BaseReadoutMitigator.quasi\_probabilities

`abstract BaseReadoutMitigator.quasi_probabilities(data, qubits=None, clbits=None, shots=None)`

Convert counts to a dictionary of quasi-probabilities

**Parameters**

*   **data** (`Counts`) – Counts to be mitigated.
*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – the physical qubits measured to obtain the counts clbits. If None these are assumed to be qubits \[0, …, N-1] for N-bit counts.
*   **clbits** (`Optional`\[`List`\[`int`]]) – Optional, marginalize counts to just these bits.
*   **shots** (`Optional`\[`int`]) – Optional, the total number of shots, if None shots will be calculated as the sum of all counts.

**Returns**

**A dictionary containing pairs of \[output, mean] where “output”**

is the key in the dictionaries, which is the length-N bitstring of a measured standard basis state, and “mean” is the mean of non-zero quasi-probability estimates.

**Return type**

QuasiDistibution
