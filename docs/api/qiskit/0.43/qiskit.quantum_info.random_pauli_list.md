---
title: random_pauli_list
description: API reference for qiskit.quantum_info.random_pauli_list
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.quantum_info.random_pauli_list
---

<span id="qiskit-quantum-info-random-pauli-list" />

# qiskit.quantum\_info.random\_pauli\_list

<span id="qiskit.quantum_info.random_pauli_list" />

`random_pauli_list(num_qubits, size=1, seed=None, phase=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/quantum_info/operators/symplectic/random.py "view source code")

Return a random PauliList.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits.
*   **size** (*int*) – Optional. The length of the Pauli list (Default: 1).
*   **seed** (*int or np.random.Generator*) – Optional. Set a fixed seed or generator for RNG.
*   **phase** (*bool*) – If True the Pauli phases are randomized, otherwise the phases are fixed to 0. \[Default: True]

**Returns**

a random PauliList.

**Return type**

[PauliList](qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

