# qiskit.transpiler.CouplingMap.from\_heavy\_square

`classmethod CouplingMap.from_heavy_square(distance, bidirectional=True)`

Return a heavy square graph coupling map.

A heavy square graph is described in:

[https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.011022](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.011022)

**Parameters**

*   **distance** (*int*) – The code distance for the generated heavy square graph. The value for distance can be any odd positive integer. The distance relates to the number of qubits by: $n = 3d^2 - 2d$ where $n$ is the number of qubits and $d$ is the `distance` parameter.
*   **bidirectional** (*bool*) – Whether the edges in the output coupling graph are bidirectional or not. By default this is set to `True`

**Returns**

A heavy square coupling graph

**Return type**

[CouplingMap](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")
