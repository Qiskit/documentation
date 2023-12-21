# qiskit.chemistry.FermionicOperator.mapping

`FermionicOperator.mapping(map_type, threshold=1e-08)`

Map fermionic operator to qubit operator.

Using multiprocess to speedup the mapping, the improvement can be observed when h2 is a non-sparse matrix.

**Parameters**

*   **map\_type** (*str*) – case-insensitive mapping type. “jordan\_wigner”, “parity”, “bravyi\_kitaev”, “bksf”
*   **threshold** (*float*) – threshold for Pauli simplification

**Returns**

create an Operator object in Paulis form.

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – if the map\_type can not be recognized.
