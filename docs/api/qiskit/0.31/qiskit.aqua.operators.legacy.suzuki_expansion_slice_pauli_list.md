# qiskit.aqua.operators.legacy.suzuki\_expansion\_slice\_pauli\_list

<span id="undefined" />

`suzuki_expansion_slice_pauli_list(pauli_list, lam_coef, expansion_order)`

Compute the list of pauli terms for a single slice of the suzuki expansion following the paper [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **pauli\_list** (*list\[list\[complex,* [*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*]]*) – The slice’s weighted Pauli list for the suzuki expansion
*   **lam\_coef** (*float*) – The parameter lambda as defined in said paper, adjusted for the evolution time and the number of time slices
*   **expansion\_order** (*int*) – The order for suzuki expansion

**Returns**

slice pauli list

**Return type**

list
