# qiskit.quantum\_info.PauliTable.anticommutes\_with\_all

`PauliTable.anticommutes_with_all(other)`

Return indexes of rows that commute other.

If other is a multi-row Pauli table the returned vector indexes rows of the current PauliTable that anti-commute with *all* Pauli’s in other. If no rows satisfy the condition the returned array will be empty.

**Parameters**

**other** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – a single Pauli or multi-row PauliTable.

**Returns**

index array of the anti-commuting rows.

**Return type**

array
