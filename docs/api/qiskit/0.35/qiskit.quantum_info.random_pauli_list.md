# qiskit.quantum\_info.random\_pauli\_list[¶](#qiskit-quantum-info-random-pauli-list "Permalink to this headline")

<span id="undefined" />

`random_pauli_list(num_qubits, size=1, seed=None, phase=True)`

Return a random PauliList.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits.
*   **size** (*int*) – Optional. The length of the Pauli list (Default: 1).
*   **seed** (*int or np.random.Generator*) – Optional. Set a fixed seed or generator for RNG.
*   **phase** (*bool*) – If True the Pauli phases are randomized, otherwise the phases are fixed to 0. \[Default: True]

**Returns**

a random PauliList.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")
