<span id="qiskit-quantum-info-pauli-group" />

# qiskit.quantum\_info.pauli\_group

<span id="undefined" />

`pauli_group(number_of_qubits, case='weight')`

Return the Pauli group with 4^n elements.

The phases have been removed. case ‘weight’ is ordered by Pauli weights and case ‘tensor’ is ordered by I,X,Y,Z counting lowest qubit fastest.

**Parameters**

*   **number\_of\_qubits** (*int*) – number of qubits
*   **case** (*str*) – determines ordering of group elements (‘weight’ or ‘tensor’)

**Returns**

list of Pauli objects

**Return type**

list

**Raises**

*   **QiskitError** – case is not ‘weight’ or ‘tensor’
*   **QiskitError** – number\_of\_qubits is larger than 4
