---
title: shortest_undirected_path
description: API reference for qiskit.transpiler.CouplingMap.shortest_undirected_path
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.CouplingMap.shortest_undirected_path
---

# shortest\_undirected\_path

<span id="qiskit.transpiler.CouplingMap.shortest_undirected_path" />

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

