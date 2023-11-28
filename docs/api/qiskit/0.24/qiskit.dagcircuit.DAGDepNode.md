<span id="qiskit-dagcircuit-dagdepnode" />

# qiskit.dagcircuit.DAGDepNode

<span id="undefined" />

`DAGDepNode(type=None, op=None, name=None, qargs=None, cargs=None, condition=None, successors=None, predecessors=None, reachable=None, matchedwith=None, successorstovisit=None, isblocked=None, qindices=None, cindices=None, nid=- 1)`

Object to represent the information at a node in the DAGDependency().

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

<span id="undefined" />

`__init__(type=None, op=None, name=None, qargs=None, cargs=None, condition=None, successors=None, predecessors=None, reachable=None, matchedwith=None, successorstovisit=None, isblocked=None, qindices=None, cindices=None, nid=- 1)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                  |                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.dagcircuit.DAGDepNode.__init__ "qiskit.dagcircuit.DAGDepNode.__init__")(\[type, op, name, qargs, cargs, …]) | Initialize self.                                                                            |
| [`copy`](#qiskit.dagcircuit.DAGDepNode.copy "qiskit.dagcircuit.DAGDepNode.copy")()                                               | Function to copy a DAGDepNode object.                                                       |
| [`semantic_eq`](#qiskit.dagcircuit.DAGDepNode.semantic_eq "qiskit.dagcircuit.DAGDepNode.semantic_eq")(node1, node2)              | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

|                                                                                     |                                                                                |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `cargs`                                                                             |                                                                                |
| `cindices`                                                                          |                                                                                |
| `condition`                                                                         |                                                                                |
| `isblocked`                                                                         |                                                                                |
| `matchedwith`                                                                       |                                                                                |
| `name`                                                                              |                                                                                |
| `node_id`                                                                           |                                                                                |
| [`op`](#qiskit.dagcircuit.DAGDepNode.op "qiskit.dagcircuit.DAGDepNode.op")          | Returns the Instruction object corresponding to the op for the node, else None |
| `predecessors`                                                                      |                                                                                |
| [`qargs`](#qiskit.dagcircuit.DAGDepNode.qargs "qiskit.dagcircuit.DAGDepNode.qargs") | Returns list of Qubit, else an empty list.                                     |
| `qindices`                                                                          |                                                                                |
| `reachable`                                                                         |                                                                                |
| `sort_key`                                                                          |                                                                                |
| `successors`                                                                        |                                                                                |
| `successorstovisit`                                                                 |                                                                                |
| `type`                                                                              |                                                                                |

<span id="undefined" />

`copy()`

Function to copy a DAGDepNode object. :returns: a copy of a DAGDepNode objectto. :rtype: DAGDepNode

<span id="undefined" />

`property op`

Returns the Instruction object corresponding to the op for the node, else None

<span id="undefined" />

`property qargs`

Returns list of Qubit, else an empty list.

<span id="undefined" />

`static semantic_eq(node1, node2)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGDepNode*](#qiskit.dagcircuit.DAGDepNode "qiskit.dagcircuit.DAGDepNode")) – A node to compare.
*   **node2** ([*DAGDepNode*](#qiskit.dagcircuit.DAGDepNode "qiskit.dagcircuit.DAGDepNode")) – The other node to compare.

**Returns**

If node1 == node2

**Return type**

Bool
