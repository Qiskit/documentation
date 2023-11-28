---
title: check_full_edge_coverage
description: API reference for qiskit.optimization.applications.ising.vertex_cover.check_full_edge_coverage
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.optimization.applications.ising.vertex_cover.check_full_edge_coverage
---

<span id="qiskit-optimization-applications-ising-vertex-cover" />

# qiskit.optimization.applications.ising.vertex\_cover

Convert vertex cover instances into Pauli list Deal with Gset format. See [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/)

## Functions

|                                                                                                                                                                                                  |                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`check_full_edge_coverage`](#qiskit.optimization.applications.ising.vertex_cover.check_full_edge_coverage "qiskit.optimization.applications.ising.vertex_cover.check_full_edge_coverage")(x, w) | **param x**binary string as numpy array.                                           |
| [`get_graph_solution`](#qiskit.optimization.applications.ising.vertex_cover.get_graph_solution "qiskit.optimization.applications.ising.vertex_cover.get_graph_solution")(x)                      | Get graph solution from binary string.                                             |
| [`get_operator`](#qiskit.optimization.applications.ising.vertex_cover.get_operator "qiskit.optimization.applications.ising.vertex_cover.get_operator")(weight\_matrix)                           | Generate Hamiltonian for the vertex cover :param weight\_matrix: adjacency matrix. |

<span id="qiskit.optimization.applications.ising.vertex_cover.check_full_edge_coverage" />

`check_full_edge_coverage(x, w)`

**Parameters**

*   **x** (*numpy.ndarray*) – binary string as numpy array.
*   **w** (*numpy.ndarray*) – adjacency matrix.

**Returns**

value of the cut.

**Return type**

float

<span id="qiskit.optimization.applications.ising.vertex_cover.get_graph_solution" />

`get_graph_solution(x)`

Get graph solution from binary string.

**Parameters**

**x** (*numpy.ndarray*) – binary string as numpy array.

**Returns**

graph solution as binary numpy array.

**Return type**

numpy.ndarray

<span id="qiskit.optimization.applications.ising.vertex_cover.get_operator" />

`get_operator(weight_matrix)`

Generate Hamiltonian for the vertex cover :param weight\_matrix: adjacency matrix. :type weight\_matrix: numpy.ndarray

**Returns**

operator for the Hamiltonian and a constant shift for the obj function.

**Return type**

tuple([WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator"), float)

Goals: 1 color some vertices as red such that every edge is connected to some red vertex 2 minimize the vertices to be colored as red

Hamiltonian: H = A \* H\_A + H\_B H\_A = sum\_\{(i,j)in E}\{(1-Xi)(1-Xj)} H\_B = sum\_\{i}\{Zi}

H\_A is to achieve goal 1 while H\_b is to achieve goal 2. H\_A is hard constraint so we place a huge penality on it. A=5. Note Xi = (Zi+1)/2

