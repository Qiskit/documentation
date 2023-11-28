# qiskit.dagcircuit.DAGNode

<span id="undefined" />

`DAGNode(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)`

Object to represent the information at a node in the DAGCircuit.

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

Create a node

<span id="undefined" />

`__init__(type=None, op=None, name=None, qargs=None, cargs=None, wire=None, nid=- 1)`

Create a node

## Methods

|                                                                                                                                    |                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.dagcircuit.DAGNode.__init__ "qiskit.dagcircuit.DAGNode.__init__")(\[type, op, name, qargs, cargs, …])         | Create a node                                                                               |
| [`semantic_eq`](#qiskit.dagcircuit.DAGNode.semantic_eq "qiskit.dagcircuit.DAGNode.semantic_eq")(node1, node2\[, bit\_indices1, …]) | Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic. |

## Attributes

|                                                                                           |                                                                                |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `cargs`                                                                                   |                                                                                |
| [`condition`](#qiskit.dagcircuit.DAGNode.condition "qiskit.dagcircuit.DAGNode.condition") | Returns the condition of the node.op                                           |
| `name`                                                                                    |                                                                                |
| [`op`](#qiskit.dagcircuit.DAGNode.op "qiskit.dagcircuit.DAGNode.op")                      | Returns the Instruction object corresponding to the op for the node, else None |
| [`qargs`](#qiskit.dagcircuit.DAGNode.qargs "qiskit.dagcircuit.DAGNode.qargs")             | Returns list of Qubit, else an empty list.                                     |
| `sort_key`                                                                                |                                                                                |
| `type`                                                                                    |                                                                                |
| [`wire`](#qiskit.dagcircuit.DAGNode.wire "qiskit.dagcircuit.DAGNode.wire")                | Returns the Bit object, else None.                                             |

<span id="undefined" />

`property condition`

Returns the condition of the node.op

<span id="undefined" />

`property op`

Returns the Instruction object corresponding to the op for the node, else None

<span id="undefined" />

`property qargs`

Returns list of Qubit, else an empty list.

<span id="undefined" />

`static semantic_eq(node1, node2, bit_indices1=None, bit_indices2=None)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGNode*](#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – A node to compare.
*   **node2** ([*DAGNode*](#qiskit.dagcircuit.DAGNode "qiskit.dagcircuit.DAGNode")) – The other node to compare.
*   **bit\_indices1** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node1
*   **bit\_indices2** (*dict*) – Dictionary mapping Bit instances to their index within the circuit containing node2

**Returns**

If node1 == node2

**Return type**

Bool

<span id="undefined" />

`property wire`

Returns the Bit object, else None.
