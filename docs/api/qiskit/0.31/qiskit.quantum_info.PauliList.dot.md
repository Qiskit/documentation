# qiskit.quantum\_info.PauliList.dot

`PauliList.dot(other, qargs=None, inplace=False)`

Return the composition other∘self for each Pauli in the list.

**Parameters**

*   **other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another PauliList.
*   **qargs** (*None or list*) – qubits to apply dot product on (Default: None).
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

the list of composed Paulis.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

**Raises**

**QiskitError** – if other cannot be converted to a PauliList, does not have either 1 or the same number of Paulis as the current list, or has the wrong number of qubits for the specified qargs.
