# qiskit.result.CorrelatedReadoutMitigator.quasi\_probabilities

`CorrelatedReadoutMitigator.quasi_probabilities(data, qubits=None, clbits=None, shots=False)`

Compute mitigated quasi probabilities value.

**Parameters**

*   **data** (`Counts`) – counts object
*   **qubits** (`Optional`\[`List`\[`int`]]) – qubits the count bitstrings correspond to.
*   **clbits** (`Optional`\[`List`\[`int`]]) – Optional, marginalize counts to just these bits.
*   **shots** (`Optional`\[`bool`]) – the number of shots.

**Returns**

**A dictionary containing pairs of \[output, mean] where “output”**

is the key in the dictionaries, which is the length-N bitstring of a measured standard basis state, and “mean” is the mean of non-zero quasi-probability estimates.

**Return type**

QuasiDistibution
