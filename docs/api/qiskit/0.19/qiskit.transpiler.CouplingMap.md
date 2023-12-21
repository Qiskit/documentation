---
title: CouplingMap
description: API reference for qiskit.transpiler.CouplingMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.CouplingMap
---

# CouplingMap

<span id="qiskit.transpiler.CouplingMap" />

`CouplingMap(couplinglist=None, description=None)`

Directed graph specifying fixed coupling.

Nodes correspond to physical qubits (integers) and directed edges correspond to permitted CNOT gates

Create coupling graph. By default, the generated coupling has no nodes.

**Parameters**

*   **couplinglist** (*list or None*) – An initial coupling graph, specified as an adjacency list containing couplings, e.g. \[\[0,1], \[0,2], \[1,2]].
*   **description** (*str*) – A string to describe the coupling map.

## Attributes

|                                                                                                                                |                                           |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| [`CouplingMap.is_symmetric`](qiskit.transpiler.CouplingMap.is_symmetric "qiskit.transpiler.CouplingMap.is_symmetric")          | Test if the graph is symmetric.           |
| [`CouplingMap.physical_qubits`](qiskit.transpiler.CouplingMap.physical_qubits "qiskit.transpiler.CouplingMap.physical_qubits") | Returns a sorted list of physical\_qubits |

## Methods

|                                                                                                                                                              |                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| [`CouplingMap.add_edge`](qiskit.transpiler.CouplingMap.add_edge "qiskit.transpiler.CouplingMap.add_edge")(src, dst)                                          | Add directed edge to coupling graph.                                                               |
| [`CouplingMap.add_physical_qubit`](qiskit.transpiler.CouplingMap.add_physical_qubit "qiskit.transpiler.CouplingMap.add_physical_qubit")(physical\_qubit)     | Add a physical qubit to the coupling graph as a node.                                              |
| [`CouplingMap.distance`](qiskit.transpiler.CouplingMap.distance "qiskit.transpiler.CouplingMap.distance")(physical\_qubit1, …)                               | Returns the undirected distance between physical\_qubit1 and physical\_qubit2.                     |
| [`CouplingMap.draw`](qiskit.transpiler.CouplingMap.draw "qiskit.transpiler.CouplingMap.draw")()                                                              | Draws the coupling map.                                                                            |
| [`CouplingMap.from_full`](qiskit.transpiler.CouplingMap.from_full "qiskit.transpiler.CouplingMap.from_full")(num\_qubits\[, …])                              | Return a fully connected coupling map on n qubits.                                                 |
| [`CouplingMap.from_grid`](qiskit.transpiler.CouplingMap.from_grid "qiskit.transpiler.CouplingMap.from_grid")(num\_rows, num\_columns)                        | Return qubits connected on a grid of num\_rows x num\_columns.                                     |
| [`CouplingMap.from_line`](qiskit.transpiler.CouplingMap.from_line "qiskit.transpiler.CouplingMap.from_line")(num\_qubits\[, …])                              | Return a fully connected coupling map on n qubits.                                                 |
| [`CouplingMap.from_ring`](qiskit.transpiler.CouplingMap.from_ring "qiskit.transpiler.CouplingMap.from_ring")(num\_qubits\[, …])                              | Return a fully connected coupling map on n qubits.                                                 |
| [`CouplingMap.get_edges`](qiskit.transpiler.CouplingMap.get_edges "qiskit.transpiler.CouplingMap.get_edges")()                                               | Gets the list of edges in the coupling graph.                                                      |
| [`CouplingMap.is_connected`](qiskit.transpiler.CouplingMap.is_connected "qiskit.transpiler.CouplingMap.is_connected")()                                      | Test if the graph is connected.                                                                    |
| [`CouplingMap.reduce`](qiskit.transpiler.CouplingMap.reduce "qiskit.transpiler.CouplingMap.reduce")(mapping)                                                 | Returns a reduced coupling map that corresponds to the subgraph of qubits selected in the mapping. |
| [`CouplingMap.shortest_undirected_path`](qiskit.transpiler.CouplingMap.shortest_undirected_path "qiskit.transpiler.CouplingMap.shortest_undirected_path")(…) | Returns the shortest undirected path between physical\_qubit1 and physical\_qubit2.                |
| [`CouplingMap.size`](qiskit.transpiler.CouplingMap.size "qiskit.transpiler.CouplingMap.size")()                                                              | Return the number of physical qubits in this graph.                                                |
| [`CouplingMap.subgraph`](qiskit.transpiler.CouplingMap.subgraph "qiskit.transpiler.CouplingMap.subgraph")(nodelist)                                          | Return a CouplingMap object for a subgraph of self.                                                |

