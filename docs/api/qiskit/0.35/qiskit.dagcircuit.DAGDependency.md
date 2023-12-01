# DAGDependency

<span id="undefined" />

`DAGDependency`

Bases: `object`

Object to represent a quantum circuit as a directed acyclic graph via operation dependencies (i.e. lack of commutation).

The nodes in the graph are operations represented by quantum gates. The edges correspond to non-commutation between two operations (i.e. a dependency). A directed edge from node A to node B means that operation A does not commute with operation B. The object’s methods allow circuits to be constructed.

The nodes in the graph have the following attributes: ‘operation’, ‘successors’, ‘predecessors’.

**Example:**

Bell circuit with no measurement.

```python
      ┌───┐
qr_0: ┤ H ├──■──
      └───┘┌─┴─┐
qr_1: ─────┤ X ├
           └───┘
```

The dependency DAG for the above circuit is represented by two nodes. The first one corresponds to Hadamard gate, the second one to the CNOT gate as the gates do not commute there is an edge between the two nodes.

**Reference:**

\[1] Iten, R., Moyard, R., Metger, T., Sutter, D. and Woerner, S., 2020. Exact and practical pattern matching for quantum circuit optimization. [arXiv:1909.05270](https://arxiv.org/abs/1909.05270)

Create an empty DAGDependency.

## Methods

|                                                                                                                                                                                        |                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`add_clbits`](qiskit.dagcircuit.DAGDependency.add_clbits#qiskit.dagcircuit.DAGDependency.add_clbits "qiskit.dagcircuit.DAGDependency.add_clbits")                                     | Add individual clbit wires.                                             |
| [`add_creg`](qiskit.dagcircuit.DAGDependency.add_creg#qiskit.dagcircuit.DAGDependency.add_creg "qiskit.dagcircuit.DAGDependency.add_creg")                                             | Add clbits in a classical register.                                     |
| [`add_op_node`](qiskit.dagcircuit.DAGDependency.add_op_node#qiskit.dagcircuit.DAGDependency.add_op_node "qiskit.dagcircuit.DAGDependency.add_op_node")                                 | Add a DAGDepNode to the graph and update the edges.                     |
| [`add_qreg`](qiskit.dagcircuit.DAGDependency.add_qreg#qiskit.dagcircuit.DAGDependency.add_qreg "qiskit.dagcircuit.DAGDependency.add_qreg")                                             | Add qubits in a quantum register.                                       |
| [`add_qubits`](qiskit.dagcircuit.DAGDependency.add_qubits#qiskit.dagcircuit.DAGDependency.add_qubits "qiskit.dagcircuit.DAGDependency.add_qubits")                                     | Add individual qubit wires.                                             |
| [`copy`](qiskit.dagcircuit.DAGDependency.copy#qiskit.dagcircuit.DAGDependency.copy "qiskit.dagcircuit.DAGDependency.copy")                                                             | Function to copy a DAGDependency object.                                |
| [`depth`](qiskit.dagcircuit.DAGDependency.depth#qiskit.dagcircuit.DAGDependency.depth "qiskit.dagcircuit.DAGDependency.depth")                                                         | Return the circuit depth.                                               |
| [`direct_predecessors`](qiskit.dagcircuit.DAGDependency.direct_predecessors#qiskit.dagcircuit.DAGDependency.direct_predecessors "qiskit.dagcircuit.DAGDependency.direct_predecessors") | Direct predecessors id of a given node as sorted list.                  |
| [`direct_successors`](qiskit.dagcircuit.DAGDependency.direct_successors#qiskit.dagcircuit.DAGDependency.direct_successors "qiskit.dagcircuit.DAGDependency.direct_successors")         | Direct successors id of a given node as sorted list.                    |
| [`draw`](qiskit.dagcircuit.DAGDependency.draw#qiskit.dagcircuit.DAGDependency.draw "qiskit.dagcircuit.DAGDependency.draw")                                                             | Draws the DAGDependency graph.                                          |
| [`get_all_edges`](qiskit.dagcircuit.DAGDependency.get_all_edges#qiskit.dagcircuit.DAGDependency.get_all_edges "qiskit.dagcircuit.DAGDependency.get_all_edges")                         | Enumeration of all edges.                                               |
| [`get_edges`](qiskit.dagcircuit.DAGDependency.get_edges#qiskit.dagcircuit.DAGDependency.get_edges "qiskit.dagcircuit.DAGDependency.get_edges")                                         | Edge enumeration between two nodes through method get\_all\_edge\_data. |
| [`get_in_edges`](qiskit.dagcircuit.DAGDependency.get_in_edges#qiskit.dagcircuit.DAGDependency.get_in_edges "qiskit.dagcircuit.DAGDependency.get_in_edges")                             | Enumeration of all incoming edges for a given node.                     |
| [`get_node`](qiskit.dagcircuit.DAGDependency.get_node#qiskit.dagcircuit.DAGDependency.get_node "qiskit.dagcircuit.DAGDependency.get_node")                                             | **param node\_id**label of considered node.                             |
| [`get_nodes`](qiskit.dagcircuit.DAGDependency.get_nodes#qiskit.dagcircuit.DAGDependency.get_nodes "qiskit.dagcircuit.DAGDependency.get_nodes")                                         | **returns**iterator over all the nodes.                                 |
| [`get_out_edges`](qiskit.dagcircuit.DAGDependency.get_out_edges#qiskit.dagcircuit.DAGDependency.get_out_edges "qiskit.dagcircuit.DAGDependency.get_out_edges")                         | Enumeration of all outgoing edges for a given node.                     |
| [`predecessors`](qiskit.dagcircuit.DAGDependency.predecessors#qiskit.dagcircuit.DAGDependency.predecessors "qiskit.dagcircuit.DAGDependency.predecessors")                             | Predecessors id of a given node as sorted list.                         |
| [`size`](qiskit.dagcircuit.DAGDependency.size#qiskit.dagcircuit.DAGDependency.size "qiskit.dagcircuit.DAGDependency.size")                                                             | Returns the number of gates in the circuit                              |
| [`successors`](qiskit.dagcircuit.DAGDependency.successors#qiskit.dagcircuit.DAGDependency.successors "qiskit.dagcircuit.DAGDependency.successors")                                     | Successors id of a given node as sorted list.                           |
| [`to_networkx`](qiskit.dagcircuit.DAGDependency.to_networkx#qiskit.dagcircuit.DAGDependency.to_networkx "qiskit.dagcircuit.DAGDependency.to_networkx")                                 | Returns a copy of the DAGDependency in networkx format.                 |
| [`to_retworkx`](qiskit.dagcircuit.DAGDependency.to_retworkx#qiskit.dagcircuit.DAGDependency.to_retworkx "qiskit.dagcircuit.DAGDependency.to_retworkx")                                 | Returns the DAGDependency in retworkx format.                           |
| [`topological_nodes`](qiskit.dagcircuit.DAGDependency.topological_nodes#qiskit.dagcircuit.DAGDependency.topological_nodes "qiskit.dagcircuit.DAGDependency.topological_nodes")         | Yield nodes in topological order.                                       |

## Attributes

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

### global\_phase

Return the global phase of the circuit.
