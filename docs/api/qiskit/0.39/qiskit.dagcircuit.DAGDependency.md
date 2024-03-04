---
title: DAGDependency
description: API reference for qiskit.dagcircuit.DAGDependency
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGDependency
---

# DAGDependency

<span id="qiskit.dagcircuit.DAGDependency" />

`DAGDependency` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/dagcircuit/dagdependency.py "view source code")

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

### add\_clbits

<span id="qiskit.dagcircuit.DAGDependency.add_clbits" />

`DAGDependency.add_clbits(clbits)`

Add individual clbit wires.

### add\_creg

<span id="qiskit.dagcircuit.DAGDependency.add_creg" />

`DAGDependency.add_creg(creg)`

Add clbits in a classical register.

### add\_op\_node

<span id="qiskit.dagcircuit.DAGDependency.add_op_node" />

`DAGDependency.add_op_node(operation, qargs, cargs)`

Add a DAGDepNode to the graph and update the edges.

**Parameters**

*   **operation** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – operation as a quantum gate.
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of qubits on which the operation acts
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – list of classical wires to attach to.

### add\_qreg

<span id="qiskit.dagcircuit.DAGDependency.add_qreg" />

`DAGDependency.add_qreg(qreg)`

Add qubits in a quantum register.

### add\_qubits

<span id="qiskit.dagcircuit.DAGDependency.add_qubits" />

`DAGDependency.add_qubits(qubits)`

Add individual qubit wires.

### copy

<span id="qiskit.dagcircuit.DAGDependency.copy" />

`DAGDependency.copy()`

Function to copy a DAGDependency object. :returns: a copy of a DAGDependency object. :rtype: DAGDependency

### depth

<span id="qiskit.dagcircuit.DAGDependency.depth" />

`DAGDependency.depth()`

Return the circuit depth. :returns: the circuit depth :rtype: int

### direct\_predecessors

<span id="qiskit.dagcircuit.DAGDependency.direct_predecessors" />

`DAGDependency.direct_predecessors(node_id)`

Direct predecessors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

direct predecessors id as a sorted list

**Return type**

List

### direct\_successors

<span id="qiskit.dagcircuit.DAGDependency.direct_successors" />

`DAGDependency.direct_successors(node_id)`

Direct successors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

direct successors id as a sorted list

**Return type**

List

### draw

<span id="qiskit.dagcircuit.DAGDependency.draw" />

`DAGDependency.draw(scale=0.7, filename=None, style='color')`

Draws the DAGDependency graph.

This function needs pydot \<[https://github.com/erocarrera/pydot](https://github.com/erocarrera/pydot)>, which in turn needs Graphviz \<[https://www.graphviz.org/](https://www.graphviz.org/)>\` to be installed.

**Parameters**

*   **scale** (*float*) – scaling factor
*   **filename** (*str*) – file path to save image to (format inferred from name)
*   **style** (*str*) – ‘plain’: B\&W graph ‘color’ (default): color input/output/op nodes

**Returns**

**if in Jupyter notebook and not saving to file,**

otherwise None.

**Return type**

Ipython.display.Image

### get\_all\_edges

<span id="qiskit.dagcircuit.DAGDependency.get_all_edges" />

`DAGDependency.get_all_edges()`

Enumeration of all edges.

**Returns**

corresponding to the label.

**Return type**

List

### get\_edges

<span id="qiskit.dagcircuit.DAGDependency.get_edges" />

`DAGDependency.get_edges(src_id, dest_id)`

Edge enumeration between two nodes through method get\_all\_edge\_data.

**Parameters**

*   **src\_id** (*int*) – label of the first node.
*   **dest\_id** (*int*) – label of the second node.

**Returns**

corresponding to all edges between the two nodes.

**Return type**

List

### get\_in\_edges

<span id="qiskit.dagcircuit.DAGDependency.get_in_edges" />

`DAGDependency.get_in_edges(node_id)`

Enumeration of all incoming edges for a given node.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

corresponding incoming edges data.

**Return type**

List

### get\_node

<span id="qiskit.dagcircuit.DAGDependency.get_node" />

`DAGDependency.get_node(node_id)`

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

corresponding to the label.

**Return type**

node

### get\_nodes

<span id="qiskit.dagcircuit.DAGDependency.get_nodes" />

`DAGDependency.get_nodes()`

**Returns**

iterator over all the nodes.

**Return type**

generator(dict)

### get\_out\_edges

<span id="qiskit.dagcircuit.DAGDependency.get_out_edges" />

`DAGDependency.get_out_edges(node_id)`

Enumeration of all outgoing edges for a given node.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

corresponding outgoing edges data.

**Return type**

List

### predecessors

<span id="qiskit.dagcircuit.DAGDependency.predecessors" />

`DAGDependency.predecessors(node_id)`

Predecessors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

all predecessors id as a sorted list

**Return type**

List

### size

<span id="qiskit.dagcircuit.DAGDependency.size" />

`DAGDependency.size()`

Returns the number of gates in the circuit

### successors

<span id="qiskit.dagcircuit.DAGDependency.successors" />

`DAGDependency.successors(node_id)`

Successors id of a given node as sorted list.

**Parameters**

**node\_id** (*int*) – label of considered node.

**Returns**

all successors id as a sorted list

**Return type**

List

### to\_networkx

<span id="qiskit.dagcircuit.DAGDependency.to_networkx" />

`DAGDependency.to_networkx()`

Returns a copy of the DAGDependency in networkx format.

### to\_retworkx

<span id="qiskit.dagcircuit.DAGDependency.to_retworkx" />

`DAGDependency.to_retworkx()`

Returns the DAGDependency in retworkx format.

### topological\_nodes

<span id="qiskit.dagcircuit.DAGDependency.topological_nodes" />

`DAGDependency.topological_nodes()`

Yield nodes in topological order.

**Returns**

node in topological order.

**Return type**

generator([DAGNode](qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode"))

## Attributes

<span id="qiskit.dagcircuit.DAGDependency.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.dagcircuit.DAGDependency.global_phase" />

### global\_phase

Return the global phase of the circuit.

