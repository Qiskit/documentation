# qiskit.chemistry.BosonicOperator.mapping

`BosonicOperator.mapping(qubit_mapping='direct', threshold=1e-08)`

Maps a bosonic operator into a qubit operator.

**Parameters**

*   **qubit\_mapping** (`str`) – a string giving the type of mapping (only the ‘direct’ mapping is implemented at this point)
*   **threshold** (`float`) – threshold to chop the low contribution paulis

**Return type**

`WeightedPauliOperator`

**Returns**

A qubit operator

**Raises**

**ValueError** – If requested mapping is not supported
