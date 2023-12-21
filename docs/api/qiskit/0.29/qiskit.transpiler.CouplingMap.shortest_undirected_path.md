# qiskit.transpiler.CouplingMap.shortest\_undirected\_path

`CouplingMap.shortest_undirected_path(physical_qubit1, physical_qubit2)`

Returns the shortest undirected path between physical\_qubit1 and physical\_qubit2.

**Parameters**

*   **physical\_qubit1** (*int*) – A physical qubit
*   **physical\_qubit2** (*int*) – Another physical qubit

**Returns**

The shortest undirected path

**Return type**

List

**Raises**

**CouplingError** – When there is no path between physical\_qubit1, physical\_qubit2.
