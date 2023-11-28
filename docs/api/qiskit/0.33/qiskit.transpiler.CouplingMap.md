# CouplingMap

<span id="undefined" />

`CouplingMap(couplinglist=None, description=None)`

Bases: `object`

Directed graph specifying fixed coupling.

Nodes correspond to physical qubits (integers) and directed edges correspond to permitted CNOT gates

Create coupling graph. By default, the generated coupling has no nodes.

**Parameters**

*   **couplinglist** (*list or None*) – An initial coupling graph, specified as an adjacency list containing couplings, e.g. \[\[0,1], \[0,2], \[1,2]]. It is required that nodes are contiguously indexed starting at 0. Missed nodes will be added as isolated nodes in the coupling map.
*   **description** (*str*) – A string to describe the coupling map.

## Methods

|                                                                                                                                                                                                                  |                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`add_edge`](qiskit.transpiler.CouplingMap.add_edge#qiskit.transpiler.CouplingMap.add_edge "qiskit.transpiler.CouplingMap.add_edge")                                                                             | Add directed edge to coupling graph.                                                               |
| [`add_physical_qubit`](qiskit.transpiler.CouplingMap.add_physical_qubit#qiskit.transpiler.CouplingMap.add_physical_qubit "qiskit.transpiler.CouplingMap.add_physical_qubit")                                     | Add a physical qubit to the coupling graph as a node.                                              |
| [`compute_distance_matrix`](qiskit.transpiler.CouplingMap.compute_distance_matrix#qiskit.transpiler.CouplingMap.compute_distance_matrix "qiskit.transpiler.CouplingMap.compute_distance_matrix")                 | Compute the full distance matrix on pairs of nodes.                                                |
| [`distance`](qiskit.transpiler.CouplingMap.distance#qiskit.transpiler.CouplingMap.distance "qiskit.transpiler.CouplingMap.distance")                                                                             | Returns the undirected distance between physical\_qubit1 and physical\_qubit2.                     |
| [`draw`](qiskit.transpiler.CouplingMap.draw#qiskit.transpiler.CouplingMap.draw "qiskit.transpiler.CouplingMap.draw")                                                                                             | Draws the coupling map.                                                                            |
| [`from_full`](qiskit.transpiler.CouplingMap.from_full#qiskit.transpiler.CouplingMap.from_full "qiskit.transpiler.CouplingMap.from_full")                                                                         | Return a fully connected coupling map on n qubits.                                                 |
| [`from_grid`](qiskit.transpiler.CouplingMap.from_grid#qiskit.transpiler.CouplingMap.from_grid "qiskit.transpiler.CouplingMap.from_grid")                                                                         | Return a coupling map of qubits connected on a grid of num\_rows x num\_columns.                   |
| [`from_heavy_hex`](qiskit.transpiler.CouplingMap.from_heavy_hex#qiskit.transpiler.CouplingMap.from_heavy_hex "qiskit.transpiler.CouplingMap.from_heavy_hex")                                                     | Return a heavy hexagon graph coupling map.                                                         |
| [`from_heavy_square`](qiskit.transpiler.CouplingMap.from_heavy_square#qiskit.transpiler.CouplingMap.from_heavy_square "qiskit.transpiler.CouplingMap.from_heavy_square")                                         | Return a heavy square graph coupling map.                                                          |
| [`from_hexagonal_lattice`](qiskit.transpiler.CouplingMap.from_hexagonal_lattice#qiskit.transpiler.CouplingMap.from_hexagonal_lattice "qiskit.transpiler.CouplingMap.from_hexagonal_lattice")                     | Return a hexagonal lattice graph coupling map.                                                     |
| [`from_line`](qiskit.transpiler.CouplingMap.from_line#qiskit.transpiler.CouplingMap.from_line "qiskit.transpiler.CouplingMap.from_line")                                                                         | Return a coupling map of n qubits connected in a line.                                             |
| [`from_ring`](qiskit.transpiler.CouplingMap.from_ring#qiskit.transpiler.CouplingMap.from_ring "qiskit.transpiler.CouplingMap.from_ring")                                                                         | Return a coupling map of n qubits connected to each of their neighbors in a ring.                  |
| [`get_edges`](qiskit.transpiler.CouplingMap.get_edges#qiskit.transpiler.CouplingMap.get_edges "qiskit.transpiler.CouplingMap.get_edges")                                                                         | Gets the list of edges in the coupling graph.                                                      |
| [`is_connected`](qiskit.transpiler.CouplingMap.is_connected#qiskit.transpiler.CouplingMap.is_connected "qiskit.transpiler.CouplingMap.is_connected")                                                             | Test if the graph is connected.                                                                    |
| [`largest_connected_component`](qiskit.transpiler.CouplingMap.largest_connected_component#qiskit.transpiler.CouplingMap.largest_connected_component "qiskit.transpiler.CouplingMap.largest_connected_component") | Return a set of qubits in the largest connected component.                                         |
| [`make_symmetric`](qiskit.transpiler.CouplingMap.make_symmetric#qiskit.transpiler.CouplingMap.make_symmetric "qiskit.transpiler.CouplingMap.make_symmetric")                                                     | Convert uni-directional edges into bi-directional.                                                 |
| [`neighbors`](qiskit.transpiler.CouplingMap.neighbors#qiskit.transpiler.CouplingMap.neighbors "qiskit.transpiler.CouplingMap.neighbors")                                                                         | Return the nearest neighbors of a physical qubit.                                                  |
| [`reduce`](qiskit.transpiler.CouplingMap.reduce#qiskit.transpiler.CouplingMap.reduce "qiskit.transpiler.CouplingMap.reduce")                                                                                     | Returns a reduced coupling map that corresponds to the subgraph of qubits selected in the mapping. |
| [`shortest_undirected_path`](qiskit.transpiler.CouplingMap.shortest_undirected_path#qiskit.transpiler.CouplingMap.shortest_undirected_path "qiskit.transpiler.CouplingMap.shortest_undirected_path")             | Returns the shortest undirected path between physical\_qubit1 and physical\_qubit2.                |
| [`size`](qiskit.transpiler.CouplingMap.size#qiskit.transpiler.CouplingMap.size "qiskit.transpiler.CouplingMap.size")                                                                                             | Return the number of physical qubits in this graph.                                                |
| [`subgraph`](qiskit.transpiler.CouplingMap.subgraph#qiskit.transpiler.CouplingMap.subgraph "qiskit.transpiler.CouplingMap.subgraph")                                                                             | Return a CouplingMap object for a subgraph of self.                                                |

## Attributes

<span id="undefined" />

### description

<span id="undefined" />

### distance\_matrix

Return the distance matrix for the coupling map.

<span id="undefined" />

### graph

<span id="undefined" />

### is\_symmetric

Test if the graph is symmetric.

Return True if symmetric, False otherwise

<span id="undefined" />

### physical\_qubits

Returns a sorted list of physical\_qubits
