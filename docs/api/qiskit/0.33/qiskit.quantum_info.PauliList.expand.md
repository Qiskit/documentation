# qiskit.quantum\_info.PauliList.expand

`PauliList.expand(other)`

Return the expand product of each Pauli in the list.

**Parameters**

**other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another PauliList.

**Returns**

the list of tensor product Paulis.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

**Raises**

**QiskitError** – if other cannot be converted to a PauliList, does not have either 1 or the same number of Paulis as the current list.
