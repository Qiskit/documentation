# qiskit.quantum\_info.PauliList.anticommutes\_with\_all

`PauliList.anticommutes_with_all(other)`

Return indexes of rows that commute other.

If other is a multi-row Pauli list the returned vector indexes rows of the current PauliList that anti-commute with *all* Pauli’s in other. If no rows satisfy the condition the returned array will be empty.

**Parameters**

**other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – a single Pauli or multi-row PauliList.

**Returns**

index array of the anti-commuting rows.

**Return type**

array
