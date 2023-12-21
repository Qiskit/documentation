# qiskit.quantum\_info.PauliList.tensor

`PauliList.tensor(other)`

Return the tensor product with each Pauli in the list.

**Parameters**

**other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another PauliList.

**Returns**

the list of tensor product Paulis.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

**Raises**

**QiskitError** – if other cannot be converted to a PauliList, does not have either 1 or the same number of Paulis as the current list.
