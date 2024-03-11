---
title: CouplingMap
description: API reference for qiskit.transpiler.CouplingMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.CouplingMap
---

# CouplingMap

<span id="qiskit.transpiler.CouplingMap" />

`CouplingMap(couplinglist=None, description=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/coupling.py "view source code")

Bases: `object`

Directed graph specifying fixed coupling.

Nodes correspond to physical qubits (integers) and directed edges correspond to permitted CNOT gates

Create coupling graph. By default, the generated coupling has no nodes.

**Parameters**

*   **couplinglist** (*list or None*) – An initial coupling graph, specified as an adjacency list containing couplings, e.g. \[\[0,1], \[0,2], \[1,2]].
*   **description** (*str*) – A string to describe the coupling map.

## Methods

### add\_edge

<span id="qiskit.transpiler.CouplingMap.add_edge" />

`CouplingMap.add_edge(src, dst)`

Add directed edge to coupling graph.

src (int): source physical qubit dst (int): destination physical qubit

### add\_physical\_qubit

<span id="qiskit.transpiler.CouplingMap.add_physical_qubit" />

`CouplingMap.add_physical_qubit(physical_qubit)`

Add a physical qubit to the coupling graph as a node.

physical\_qubit (int): An integer representing a physical qubit.

**Raises**

**CouplingError** – if trying to add duplicate qubit

### distance

<span id="qiskit.transpiler.CouplingMap.distance" />

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

### draw

<span id="qiskit.transpiler.CouplingMap.draw" />

`CouplingMap.draw()`

Draws the coupling map.

This function needs [pydot](https://github.com/erocarrera/pydot), which in turn needs [Graphviz](https://www.graphviz.org/) to be installed. Additionally, [pillow](https://python-pillow.org/) will need to be installed.

**Returns**

Drawn coupling map.

**Return type**

PIL.Image

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – when pydot or pillow are not installed.

### from\_full

<span id="qiskit.transpiler.CouplingMap.from_full" />

`classmethod CouplingMap.from_full(num_qubits, bidirectional=True)`

Return a fully connected coupling map on n qubits.

### from\_grid

<span id="qiskit.transpiler.CouplingMap.from_grid" />

`classmethod CouplingMap.from_grid(num_rows, num_columns, bidirectional=True)`

Return qubits connected on a grid of num\_rows x num\_columns.

### from\_line

<span id="qiskit.transpiler.CouplingMap.from_line" />

`classmethod CouplingMap.from_line(num_qubits, bidirectional=True)`

Return a fully connected coupling map on n qubits.

### from\_ring

<span id="qiskit.transpiler.CouplingMap.from_ring" />

`classmethod CouplingMap.from_ring(num_qubits, bidirectional=True)`

Return a fully connected coupling map on n qubits.

### get\_edges

<span id="qiskit.transpiler.CouplingMap.get_edges" />

`CouplingMap.get_edges()`

Gets the list of edges in the coupling graph.

**Returns**

Each edge is a pair of physical qubits.

**Return type**

Tuple(int,int)

### is\_connected

<span id="qiskit.transpiler.CouplingMap.is_connected" />

`CouplingMap.is_connected()`

Test if the graph is connected.

Return True if connected, False otherwise

### largest\_connected\_component

<span id="qiskit.transpiler.CouplingMap.largest_connected_component" />

`CouplingMap.largest_connected_component()`

Return a set of qubits in the largest connected component.

### make\_symmetric

<span id="qiskit.transpiler.CouplingMap.make_symmetric" />

`CouplingMap.make_symmetric()`

Convert uni-directional edges into bi-directional.

### neighbors

<span id="qiskit.transpiler.CouplingMap.neighbors" />

`CouplingMap.neighbors(physical_qubit)`

Return the nearest neighbors of a physical qubit.

Directionality matters, i.e. a neighbor must be reachable by going one hop in the direction of an edge.

### reduce

<span id="qiskit.transpiler.CouplingMap.reduce" />

`CouplingMap.reduce(mapping)`

Returns a reduced coupling map that corresponds to the subgraph of qubits selected in the mapping.

**Parameters**

**mapping** (*list*) – A mapping of reduced qubits to device qubits.

**Returns**

A reduced coupling\_map for the selected qubits.

**Return type**

[CouplingMap](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")

**Raises**

**CouplingError** – Reduced coupling map must be connected.

### shortest\_undirected\_path

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

### size

<span id="qiskit.transpiler.CouplingMap.size" />

`CouplingMap.size()`

Return the number of physical qubits in this graph.

### subgraph

<span id="qiskit.transpiler.CouplingMap.subgraph" />

`CouplingMap.subgraph(nodelist)`

Return a CouplingMap object for a subgraph of self.

nodelist (list): list of integer node labels

## Attributes

<span id="qiskit.transpiler.CouplingMap.distance_matrix" />

### distance\_matrix

Return the distance matrix for the coupling map.

<span id="qiskit.transpiler.CouplingMap.is_symmetric" />

### is\_symmetric

Test if the graph is symmetric.

Return True if symmetric, False otherwise

<span id="qiskit.transpiler.CouplingMap.physical_qubits" />

### physical\_qubits

Returns a sorted list of physical\_qubits

