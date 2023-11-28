# qiskit.dagcircuit.DAGCircuit

<span id="undefined" />

`DAGCircuit`

Quantum circuit as a directed acyclic graph.

There are 3 types of nodes in the graph: inputs, outputs, and operations. The nodes are connected by directed edges that correspond to qubits and bits.

Create an empty circuit.

<span id="undefined" />

`__init__()`

Create an empty circuit.

## Methods

|                                                                                                                                                                      |                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.dagcircuit.DAGCircuit.__init__ "qiskit.dagcircuit.DAGCircuit.__init__")()                                                                       | Create an empty circuit.                                                                                                                     |
| [`add_calibration`](#qiskit.dagcircuit.DAGCircuit.add_calibration "qiskit.dagcircuit.DAGCircuit.add_calibration")(gate, qubits, schedule\[, params])                 | Register a low-level, custom pulse definition for the given gate.                                                                            |
| [`add_clbits`](#qiskit.dagcircuit.DAGCircuit.add_clbits "qiskit.dagcircuit.DAGCircuit.add_clbits")(clbits)                                                           | Add individual clbit wires.                                                                                                                  |
| [`add_creg`](#qiskit.dagcircuit.DAGCircuit.add_creg "qiskit.dagcircuit.DAGCircuit.add_creg")(creg)                                                                   | Add all wires in a classical register.                                                                                                       |
| [`add_qreg`](#qiskit.dagcircuit.DAGCircuit.add_qreg "qiskit.dagcircuit.DAGCircuit.add_qreg")(qreg)                                                                   | Add all wires in a quantum register.                                                                                                         |
| [`add_qubits`](#qiskit.dagcircuit.DAGCircuit.add_qubits "qiskit.dagcircuit.DAGCircuit.add_qubits")(qubits)                                                           | Add individual qubit wires.                                                                                                                  |
| [`ancestors`](#qiskit.dagcircuit.DAGCircuit.ancestors "qiskit.dagcircuit.DAGCircuit.ancestors")(node)                                                                | Returns set of the ancestors of a node as DAGNodes.                                                                                          |
| [`apply_operation_back`](#qiskit.dagcircuit.DAGCircuit.apply_operation_back "qiskit.dagcircuit.DAGCircuit.apply_operation_back")(op\[, qargs, cargs, …])             | Apply an operation to the output of the circuit.                                                                                             |
| [`apply_operation_front`](#qiskit.dagcircuit.DAGCircuit.apply_operation_front "qiskit.dagcircuit.DAGCircuit.apply_operation_front")(op, qargs, cargs\[, …])          | Apply an operation to the input of the circuit.                                                                                              |
| [`bfs_successors`](#qiskit.dagcircuit.DAGCircuit.bfs_successors "qiskit.dagcircuit.DAGCircuit.bfs_successors")(node)                                                 | Returns an iterator of tuples of (DAGNode, \[DAGNodes]) where the DAGNode is the current node and \[DAGNode] is its successors in BFS order. |
| [`collect_1q_runs`](#qiskit.dagcircuit.DAGCircuit.collect_1q_runs "qiskit.dagcircuit.DAGCircuit.collect_1q_runs")()                                                  | Return a set of non-conditional runs of 1q “op” nodes.                                                                                       |
| [`collect_runs`](#qiskit.dagcircuit.DAGCircuit.collect_runs "qiskit.dagcircuit.DAGCircuit.collect_runs")(namelist)                                                   | Return a set of non-conditional runs of “op” nodes with the given names.                                                                     |
| [`compose`](#qiskit.dagcircuit.DAGCircuit.compose "qiskit.dagcircuit.DAGCircuit.compose")(other\[, edge\_map, qubits, clbits, …])                                    | Compose the `other` circuit onto the output of this circuit.                                                                                 |
| [`compose_back`](#qiskit.dagcircuit.DAGCircuit.compose_back "qiskit.dagcircuit.DAGCircuit.compose_back")(input\_circuit\[, edge\_map])                               | DEPRECATED: use DAGCircuit.compose() instead.                                                                                                |
| [`count_ops`](#qiskit.dagcircuit.DAGCircuit.count_ops "qiskit.dagcircuit.DAGCircuit.count_ops")()                                                                    | Count the occurrences of operation names.                                                                                                    |
| [`count_ops_longest_path`](#qiskit.dagcircuit.DAGCircuit.count_ops_longest_path "qiskit.dagcircuit.DAGCircuit.count_ops_longest_path")()                             | Count the occurrences of operation names on the longest path.                                                                                |
| [`depth`](#qiskit.dagcircuit.DAGCircuit.depth "qiskit.dagcircuit.DAGCircuit.depth")()                                                                                | Return the circuit depth.                                                                                                                    |
| [`descendants`](#qiskit.dagcircuit.DAGCircuit.descendants "qiskit.dagcircuit.DAGCircuit.descendants")(node)                                                          | Returns set of the descendants of a node as DAGNodes.                                                                                        |
| [`draw`](#qiskit.dagcircuit.DAGCircuit.draw "qiskit.dagcircuit.DAGCircuit.draw")(\[scale, filename, style])                                                          | Draws the dag circuit.                                                                                                                       |
| [`edges`](#qiskit.dagcircuit.DAGCircuit.edges "qiskit.dagcircuit.DAGCircuit.edges")(\[nodes])                                                                        | Iterator for edge values and source and dest node                                                                                            |
| [`extend_back`](#qiskit.dagcircuit.DAGCircuit.extend_back "qiskit.dagcircuit.DAGCircuit.extend_back")(dag\[, edge\_map])                                             | DEPRECATED: Add dag at the end of self, using edge\_map.                                                                                     |
| [`from_networkx`](#qiskit.dagcircuit.DAGCircuit.from_networkx "qiskit.dagcircuit.DAGCircuit.from_networkx")(graph)                                                   | Take a networkx MultiDigraph and create a new DAGCircuit.                                                                                    |
| [`front_layer`](#qiskit.dagcircuit.DAGCircuit.front_layer "qiskit.dagcircuit.DAGCircuit.front_layer")()                                                              | Return a list of op nodes in the first layer of this dag.                                                                                    |
| [`gate_nodes`](#qiskit.dagcircuit.DAGCircuit.gate_nodes "qiskit.dagcircuit.DAGCircuit.gate_nodes")()                                                                 | Get the list of gate nodes in the dag.                                                                                                       |
| [`has_calibration_for`](#qiskit.dagcircuit.DAGCircuit.has_calibration_for "qiskit.dagcircuit.DAGCircuit.has_calibration_for")(node)                                  | Return True if the dag has a calibration defined for the node operation.                                                                     |
| [`idle_wires`](#qiskit.dagcircuit.DAGCircuit.idle_wires "qiskit.dagcircuit.DAGCircuit.idle_wires")(\[ignore])                                                        | Return idle wires.                                                                                                                           |
| [`layers`](#qiskit.dagcircuit.DAGCircuit.layers "qiskit.dagcircuit.DAGCircuit.layers")()                                                                             | Yield a shallow view on a layer of this DAGCircuit for all d layers of this circuit.                                                         |
| [`longest_path`](#qiskit.dagcircuit.DAGCircuit.longest_path "qiskit.dagcircuit.DAGCircuit.longest_path")()                                                           | Returns the longest path in the dag as a list of DAGNodes.                                                                                   |
| [`multi_qubit_ops`](#qiskit.dagcircuit.DAGCircuit.multi_qubit_ops "qiskit.dagcircuit.DAGCircuit.multi_qubit_ops")()                                                  | Get list of 3+ qubit operations.                                                                                                             |
| [`multigraph_layers`](#qiskit.dagcircuit.DAGCircuit.multigraph_layers "qiskit.dagcircuit.DAGCircuit.multigraph_layers")()                                            | Yield layers of the multigraph.                                                                                                              |
| [`named_nodes`](#qiskit.dagcircuit.DAGCircuit.named_nodes "qiskit.dagcircuit.DAGCircuit.named_nodes")(\*names)                                                       | Get the set of “op” nodes with the given name.                                                                                               |
| [`node`](#qiskit.dagcircuit.DAGCircuit.node "qiskit.dagcircuit.DAGCircuit.node")(node\_id)                                                                           | Get the node in the dag.                                                                                                                     |
| [`nodes`](#qiskit.dagcircuit.DAGCircuit.nodes "qiskit.dagcircuit.DAGCircuit.nodes")()                                                                                | Iterator for node values.                                                                                                                    |
| [`nodes_on_wire`](#qiskit.dagcircuit.DAGCircuit.nodes_on_wire "qiskit.dagcircuit.DAGCircuit.nodes_on_wire")(wire\[, only\_ops])                                      | Iterator for nodes that affect a given wire.                                                                                                 |
| [`num_clbits`](#qiskit.dagcircuit.DAGCircuit.num_clbits "qiskit.dagcircuit.DAGCircuit.num_clbits")()                                                                 | Return the total number of classical bits used by the circuit.                                                                               |
| [`num_qubits`](#qiskit.dagcircuit.DAGCircuit.num_qubits "qiskit.dagcircuit.DAGCircuit.num_qubits")()                                                                 | Return the total number of qubits used by the circuit.                                                                                       |
| [`num_tensor_factors`](#qiskit.dagcircuit.DAGCircuit.num_tensor_factors "qiskit.dagcircuit.DAGCircuit.num_tensor_factors")()                                         | Compute how many components the circuit can decompose into.                                                                                  |
| [`op_nodes`](#qiskit.dagcircuit.DAGCircuit.op_nodes "qiskit.dagcircuit.DAGCircuit.op_nodes")(\[op, include\_directives])                                             | Get the list of “op” nodes in the dag.                                                                                                       |
| [`predecessors`](#qiskit.dagcircuit.DAGCircuit.predecessors "qiskit.dagcircuit.DAGCircuit.predecessors")(node)                                                       | Returns iterator of the predecessors of a node as DAGNodes.                                                                                  |
| [`properties`](#qiskit.dagcircuit.DAGCircuit.properties "qiskit.dagcircuit.DAGCircuit.properties")()                                                                 | Return a dictionary of circuit properties.                                                                                                   |
| [`quantum_predecessors`](#qiskit.dagcircuit.DAGCircuit.quantum_predecessors "qiskit.dagcircuit.DAGCircuit.quantum_predecessors")(node)                               | Returns iterator of the predecessors of a node that are connected by a quantum edge as DAGNodes.                                             |
| [`quantum_successors`](#qiskit.dagcircuit.DAGCircuit.quantum_successors "qiskit.dagcircuit.DAGCircuit.quantum_successors")(node)                                     | Returns iterator of the successors of a node that are connected by a quantum edge as DAGNodes.                                               |
| [`remove_all_ops_named`](#qiskit.dagcircuit.DAGCircuit.remove_all_ops_named "qiskit.dagcircuit.DAGCircuit.remove_all_ops_named")(opname)                             | Remove all operation nodes with the given name.                                                                                              |
| [`remove_ancestors_of`](#qiskit.dagcircuit.DAGCircuit.remove_ancestors_of "qiskit.dagcircuit.DAGCircuit.remove_ancestors_of")(node)                                  | Remove all of the ancestor operation nodes of node.                                                                                          |
| [`remove_descendants_of`](#qiskit.dagcircuit.DAGCircuit.remove_descendants_of "qiskit.dagcircuit.DAGCircuit.remove_descendants_of")(node)                            | Remove all of the descendant operation nodes of node.                                                                                        |
| [`remove_nonancestors_of`](#qiskit.dagcircuit.DAGCircuit.remove_nonancestors_of "qiskit.dagcircuit.DAGCircuit.remove_nonancestors_of")(node)                         | Remove all of the non-ancestors operation nodes of node.                                                                                     |
| [`remove_nondescendants_of`](#qiskit.dagcircuit.DAGCircuit.remove_nondescendants_of "qiskit.dagcircuit.DAGCircuit.remove_nondescendants_of")(node)                   | Remove all of the non-descendants operation nodes of node.                                                                                   |
| [`remove_op_node`](#qiskit.dagcircuit.DAGCircuit.remove_op_node "qiskit.dagcircuit.DAGCircuit.remove_op_node")(node)                                                 | Remove an operation node n.                                                                                                                  |
| [`reverse_ops`](#qiskit.dagcircuit.DAGCircuit.reverse_ops "qiskit.dagcircuit.DAGCircuit.reverse_ops")()                                                              | Reverse the operations in the `self` circuit.                                                                                                |
| [`serial_layers`](#qiskit.dagcircuit.DAGCircuit.serial_layers "qiskit.dagcircuit.DAGCircuit.serial_layers")()                                                        | Yield a layer for all gates of this circuit.                                                                                                 |
| [`size`](#qiskit.dagcircuit.DAGCircuit.size "qiskit.dagcircuit.DAGCircuit.size")()                                                                                   | Return the number of operations.                                                                                                             |
| [`substitute_node`](#qiskit.dagcircuit.DAGCircuit.substitute_node "qiskit.dagcircuit.DAGCircuit.substitute_node")(node, op\[, inplace])                              | Replace a DAGNode with a single instruction.                                                                                                 |
| [`substitute_node_with_dag`](#qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag "qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag")(node, input\_dag\[, …]) | Replace one node with dag.                                                                                                                   |
| [`successors`](#qiskit.dagcircuit.DAGCircuit.successors "qiskit.dagcircuit.DAGCircuit.successors")(node)                                                             | Returns iterator of the successors of a node as DAGNodes.                                                                                    |
| [`threeQ_or_more_gates`](#qiskit.dagcircuit.DAGCircuit.threeQ_or_more_gates "qiskit.dagcircuit.DAGCircuit.threeQ_or_more_gates")()                                   | Get list of 3-or-more-qubit gates: (id, data).                                                                                               |
| [`to_networkx`](#qiskit.dagcircuit.DAGCircuit.to_networkx "qiskit.dagcircuit.DAGCircuit.to_networkx")()                                                              | Returns a copy of the DAGCircuit in networkx format.                                                                                         |
| [`topological_nodes`](#qiskit.dagcircuit.DAGCircuit.topological_nodes "qiskit.dagcircuit.DAGCircuit.topological_nodes")()                                            | Yield nodes in topological order.                                                                                                            |
| [`topological_op_nodes`](#qiskit.dagcircuit.DAGCircuit.topological_op_nodes "qiskit.dagcircuit.DAGCircuit.topological_op_nodes")()                                   | Yield op nodes in topological order.                                                                                                         |
| [`twoQ_gates`](#qiskit.dagcircuit.DAGCircuit.twoQ_gates "qiskit.dagcircuit.DAGCircuit.twoQ_gates")()                                                                 | Get list of 2-qubit gates.                                                                                                                   |
| [`two_qubit_ops`](#qiskit.dagcircuit.DAGCircuit.two_qubit_ops "qiskit.dagcircuit.DAGCircuit.two_qubit_ops")()                                                        | Get list of 2 qubit operations.                                                                                                              |
| [`width`](#qiskit.dagcircuit.DAGCircuit.width "qiskit.dagcircuit.DAGCircuit.width")()                                                                                | Return the total number of qubits + clbits used by the circuit.                                                                              |

## Attributes

|                                                                                                          |                                         |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`calibrations`](#qiskit.dagcircuit.DAGCircuit.calibrations "qiskit.dagcircuit.DAGCircuit.calibrations") | Return calibration dictionary.          |
| [`global_phase`](#qiskit.dagcircuit.DAGCircuit.global_phase "qiskit.dagcircuit.DAGCircuit.global_phase") | Return the global phase of the circuit. |
| [`node_counter`](#qiskit.dagcircuit.DAGCircuit.node_counter "qiskit.dagcircuit.DAGCircuit.node_counter") | Returns the number of nodes in the dag. |
| [`wires`](#qiskit.dagcircuit.DAGCircuit.wires "qiskit.dagcircuit.DAGCircuit.wires")                      | Return a list of the wires in order.    |

<span id="undefined" />

`add_calibration(gate, qubits, schedule, params=None)`

Register a low-level, custom pulse definition for the given gate.

**Parameters**

*   **gate** (*Union\[*[*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")*, str]*) – Gate information.
*   **qubits** (*Union\[int, Tuple\[int]]*) – List of qubits to be measured.
*   **schedule** ([*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")) – Schedule information.
*   **params** (*Optional\[List\[Union\[float,* [*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*]]]*) – A list of parameters.

**Raises**

**Exception** – if the gate is of type string and params is None.

<span id="undefined" />

`add_clbits(clbits)`

Add individual clbit wires.

<span id="undefined" />

`add_creg(creg)`

Add all wires in a classical register.

<span id="undefined" />

`add_qreg(qreg)`

Add all wires in a quantum register.

<span id="undefined" />

`add_qubits(qubits)`

Add individual qubit wires.

<span id="undefined" />

`ancestors(node)`

Returns set of the ancestors of a node as DAGNodes.

<span id="undefined" />

`apply_operation_back(op, qargs=None, cargs=None, condition=None)`

Apply an operation to the output of the circuit.

**Parameters**

*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – the operation associated with the DAG node
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – qubits that op will be applied to
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – cbits that op will be applied to
*   **condition** (*tuple or None*) – DEPRACTED optional condition (ClassicalRegister, int)

**Returns**

the current max node

**Return type**

[DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if a leaf node is connected to multiple outputs

<span id="undefined" />

`apply_operation_front(op, qargs, cargs, condition=None)`

Apply an operation to the input of the circuit.

**Parameters**

*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – the operation associated with the DAG node
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – qubits that op will be applied to
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – cbits that op will be applied to
*   **condition** (*tuple or None*) – DEPRACTED optional condition (ClassicalRegister, int)

**Returns**

the current max node

**Return type**

[DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if initial nodes connected to multiple out edges

<span id="undefined" />

`bfs_successors(node)`

Returns an iterator of tuples of (DAGNode, \[DAGNodes]) where the DAGNode is the current node and \[DAGNode] is its successors in BFS order.

<span id="undefined" />

`property calibrations`

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

`collect_1q_runs()`

Return a set of non-conditional runs of 1q “op” nodes.

<span id="undefined" />

`collect_runs(namelist)`

Return a set of non-conditional runs of “op” nodes with the given names.

For example, “… h q\[0]; cx q\[0],q\[1]; cx q\[0],q\[1]; h q\[1]; ..” would produce the tuple of cx nodes as an element of the set returned from a call to collect\_runs(\[“cx”]). If instead the cx nodes were “cx q\[0],q\[1]; cx q\[1],q\[0];”, the method would still return the pair in a tuple. The namelist can contain names that are not in the circuit’s basis.

Nodes must have only one successor to continue the run.

<span id="undefined" />

`compose(other, edge_map=None, qubits=None, clbits=None, front=False, inplace=True)`

Compose the `other` circuit onto the output of this circuit.

A subset of input wires of `other` are mapped to a subset of output wires of this circuit.

`other` can be narrower or of equal width to `self`.

**Parameters**

*   **other** ([*DAGCircuit*](#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – circuit to compose with self
*   **edge\_map** (*dict*) – DEPRECATED - a \{Bit: Bit} map from input wires of other to output wires of self (i.e. rhs->lhs). The key, value pairs can be either Qubit or Clbit mappings.
*   **qubits** (*list\[Qubit|int]*) – qubits of self to compose onto.
*   **clbits** (*list\[Clbit|int]*) – clbits of self to compose onto.
*   **front** (*bool*) – If True, front composition will be performed (not implemented yet)
*   **inplace** (*bool*) – If True, modify the object. Otherwise return composed circuit.

**Returns**

the composed dag (returns None if inplace==True).

**Return type**

[DAGCircuit](#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if `other` is wider or there are duplicate edge mappings.

<span id="undefined" />

`compose_back(input_circuit, edge_map=None)`

DEPRECATED: use DAGCircuit.compose() instead.

<span id="undefined" />

`count_ops()`

Count the occurrences of operation names.

Returns a dictionary of counts keyed on the operation name.

<span id="undefined" />

`count_ops_longest_path()`

Count the occurrences of operation names on the longest path.

Returns a dictionary of counts keyed on the operation name.

<span id="undefined" />

`depth()`

Return the circuit depth. :returns: the circuit depth :rtype: int

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if not a directed acyclic graph

<span id="undefined" />

`descendants(node)`

Returns set of the descendants of a node as DAGNodes.

<span id="undefined" />

`draw(scale=0.7, filename=None, style='color')`

Draws the dag circuit.

This function needs [pydot](https://github.com/erocarrera/pydot), which in turn needs [Graphviz](https://www.graphviz.org/) to be installed.

**Parameters**

*   **scale** (*float*) – scaling factor
*   **filename** (*str*) – file path to save image to (format inferred from name)
*   **style** (*str*) – ‘plain’: B\&W graph; ‘color’ (default): color input/output/op nodes

**Returns**

if in Jupyter notebook and not saving to file, otherwise None.

**Return type**

Ipython.display.Image

<span id="undefined" />

`edges(nodes=None)`

Iterator for edge values and source and dest node

This works by returning the output edges from the specified nodes. If no nodes are specified all edges from the graph are returned.

**Parameters**

**nodes** (*DAGNode|list(*[*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – Either a list of nodes or a single input node. If none is specified all edges are returned from the graph.

**Yields**

*edge* –

**the edge in the same format as out\_edges the tuple**

(source node, destination node, edge data)

<span id="undefined" />

`extend_back(dag, edge_map=None)`

DEPRECATED: Add dag at the end of self, using edge\_map.

<span id="undefined" />

`classmethod from_networkx(graph)`

Take a networkx MultiDigraph and create a new DAGCircuit.

**Parameters**

**graph** (*networkx.MultiDiGraph*) – The graph to create a DAGCircuit object from. The format of this MultiDiGraph format must be in the same format as returned by to\_networkx.

**Returns**

**The dagcircuit object created from the networkx**

MultiDiGraph.

**Return type**

[DAGCircuit](#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   **ImportError** – If networkx is not installed
*   [**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – If input networkx graph is malformed

<span id="undefined" />

`front_layer()`

Return a list of op nodes in the first layer of this dag.

<span id="undefined" />

`gate_nodes()`

Get the list of gate nodes in the dag.

**Returns**

the list of DAGNodes that represent gates.

**Return type**

list\[[DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")]

<span id="undefined" />

`property global_phase`

Return the global phase of the circuit.

<span id="undefined" />

`has_calibration_for(node)`

Return True if the dag has a calibration defined for the node operation. In this case, the operation does not need to be translated to the device basis.

<span id="undefined" />

`idle_wires(ignore=None)`

Return idle wires.

**Parameters**

**ignore** (*list(str)*) – List of node names to ignore. Default: \[]

**Yields**

*Bit* – Bit in idle wire.

<span id="undefined" />

`layers()`

Yield a shallow view on a layer of this DAGCircuit for all d layers of this circuit.

A layer is a circuit whose gates act on disjoint qubits, i.e., a layer has depth 1. The total number of layers equals the circuit depth d. The layers are indexed from 0 to d-1 with the earliest layer at index 0. The layers are constructed using a greedy algorithm. Each returned layer is a dict containing \{“graph”: circuit graph, “partition”: list of qubit lists}.

The returned layer contains new (but semantically equivalent) DAGNodes. These are not the same as nodes of the original dag, but are equivalent via DAGNode.semantic\_eq(node1, node2).

TODO: Gates that use the same cbits will end up in different layers as this is currently implemented. This may not be the desired behavior.

<span id="undefined" />

`longest_path()`

Returns the longest path in the dag as a list of DAGNodes.

<span id="undefined" />

`multi_qubit_ops()`

Get list of 3+ qubit operations. Ignore directives like snapshot and barrier.

<span id="undefined" />

`multigraph_layers()`

Yield layers of the multigraph.

<span id="undefined" />

`named_nodes(*names)`

Get the set of “op” nodes with the given name.

<span id="undefined" />

`node(node_id)`

Get the node in the dag.

**Parameters**

**node\_id** (*int*) – Node identifier.

**Returns**

the node.

**Return type**

node

<span id="undefined" />

`property node_counter`

Returns the number of nodes in the dag.

<span id="undefined" />

`nodes()`

Iterator for node values.

**Yields**

*node* – the node.

<span id="undefined" />

`nodes_on_wire(wire, only_ops=False)`

Iterator for nodes that affect a given wire.

**Parameters**

*   **wire** (*Bit*) – the wire to be looked at.
*   **only\_ops** (*bool*) – True if only the ops nodes are wanted; otherwise, all nodes are returned.

**Yields**

*DAGNode* – the successive ops on the given wire

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if the given wire doesn’t exist in the DAG

<span id="undefined" />

`num_clbits()`

Return the total number of classical bits used by the circuit.

<span id="undefined" />

`num_qubits()`

Return the total number of qubits used by the circuit. num\_qubits() replaces former use of width(). DAGCircuit.width() now returns qubits + clbits for consistency with Circuit.width() \[qiskit-terra #2564].

<span id="undefined" />

`num_tensor_factors()`

Compute how many components the circuit can decompose into.

<span id="undefined" />

`op_nodes(op=None, include_directives=True)`

Get the list of “op” nodes in the dag.

**Parameters**

*   **op** (*Type*) – [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") subclass op nodes to return. If None, return all op nodes.
*   **include\_directives** (*bool*) – include barrier, snapshot etc.

**Returns**

the list of node ids containing the given op.

**Return type**

list\[[DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")]

<span id="undefined" />

`predecessors(node)`

Returns iterator of the predecessors of a node as DAGNodes.

<span id="undefined" />

`properties()`

Return a dictionary of circuit properties.

<span id="undefined" />

`quantum_predecessors(node)`

Returns iterator of the predecessors of a node that are connected by a quantum edge as DAGNodes.

<span id="undefined" />

`quantum_successors(node)`

Returns iterator of the successors of a node that are connected by a quantum edge as DAGNodes.

<span id="undefined" />

`remove_all_ops_named(opname)`

Remove all operation nodes with the given name.

<span id="undefined" />

`remove_ancestors_of(node)`

Remove all of the ancestor operation nodes of node.

<span id="undefined" />

`remove_descendants_of(node)`

Remove all of the descendant operation nodes of node.

<span id="undefined" />

`remove_nonancestors_of(node)`

Remove all of the non-ancestors operation nodes of node.

<span id="undefined" />

`remove_nondescendants_of(node)`

Remove all of the non-descendants operation nodes of node.

<span id="undefined" />

`remove_op_node(node)`

Remove an operation node n.

Add edges from predecessors to successors.

<span id="undefined" />

`reverse_ops()`

Reverse the operations in the `self` circuit.

**Returns**

the reversed dag.

**Return type**

[DAGCircuit](#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

<span id="undefined" />

`serial_layers()`

Yield a layer for all gates of this circuit.

A serial layer is a circuit with one gate. The layers have the same structure as in layers().

<span id="undefined" />

`size()`

Return the number of operations.

<span id="undefined" />

`substitute_node(node, op, inplace=False)`

Replace a DAGNode with a single instruction. qargs, cargs and conditions for the new instruction will be inferred from the node to be replaced. The new instruction will be checked to match the shape of the replaced instruction.

**Parameters**

*   **node** ([*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – Node to be replaced
*   **op** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") instance to be added to the DAG
*   **inplace** (*bool*) – Optional, default False. If True, existing DAG node will be modified to include op. Otherwise, a new DAG node will be used.

**Returns**

the new node containing the added instruction.

**Return type**

[DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")

**Raises**

*   [**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – If replacement instruction was incompatible with
*   **location of target node.** –

<span id="undefined" />

`substitute_node_with_dag(node, input_dag, wires=None)`

Replace one node with dag.

**Parameters**

*   **node** ([*DAGNode*](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – node to substitute
*   **input\_dag** ([*DAGCircuit*](#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – circuit that will substitute the node
*   **wires** (*list\[Bit]*) – gives an order for (qu)bits in the input circuit. This order gets matched to the node wires by qargs first, then cargs, then conditions.

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if met with unexpected predecessor/successors

<span id="undefined" />

`successors(node)`

Returns iterator of the successors of a node as DAGNodes.

<span id="undefined" />

`threeQ_or_more_gates()`

Get list of 3-or-more-qubit gates: (id, data).

<span id="undefined" />

`to_networkx()`

Returns a copy of the DAGCircuit in networkx format.

<span id="undefined" />

`topological_nodes()`

Yield nodes in topological order.

**Returns**

node in topological order

**Return type**

generator([DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode"))

<span id="undefined" />

`topological_op_nodes()`

Yield op nodes in topological order.

**Returns**

op node in topological order

**Return type**

generator([DAGNode](qiskit.dagcircuit.DAGNode#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode"))

<span id="undefined" />

`twoQ_gates()`

Get list of 2-qubit gates. Ignore snapshot, barriers, and the like.

<span id="undefined" />

`two_qubit_ops()`

Get list of 2 qubit operations. Ignore directives like snapshot and barrier.

<span id="undefined" />

`width()`

Return the total number of qubits + clbits used by the circuit. This function formerly returned the number of qubits by the calculation return len(self.\_wires) - self.num\_clbits() but was changed by issue #2564 to return number of qubits + clbits with the new function DAGCircuit.num\_qubits replacing the former semantic of DAGCircuit.width().

<span id="undefined" />

`property wires`

Return a list of the wires in order.
