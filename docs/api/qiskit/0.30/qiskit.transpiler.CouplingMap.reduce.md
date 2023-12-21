# qiskit.transpiler.CouplingMap.reduce

`CouplingMap.reduce(mapping)`

Returns a reduced coupling map that corresponds to the subgraph of qubits selected in the mapping.

**Parameters**

**mapping** (*list*) – A mapping of reduced qubits to device qubits.

**Returns**

A reduced coupling\_map for the selected qubits.

**Return type**

[CouplingMap](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")

**Raises**

**CouplingError** – Reduced coupling map must be connected.
