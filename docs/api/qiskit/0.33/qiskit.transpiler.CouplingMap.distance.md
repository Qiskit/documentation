# qiskit.transpiler.CouplingMap.distance

`CouplingMap.distance(physical_qubit1, physical_qubit2)`

Returns the undirected distance between physical\_qubit1 and physical\_qubit2.

**Parameters**

*   **physical\_qubit1** (*int*) – A physical qubit
*   **physical\_qubit2** (*int*) – Another physical qubit

**Returns**

The undirected distance

**Return type**

int

**Raises**

**CouplingError** – if the qubits do not exist in the CouplingMap
