# qiskit.dagcircuit.DAGCircuit.edges

`DAGCircuit.edges(nodes=None)`

Iterator for edge values and source and dest node

This works by returning the output edges from the specified nodes. If no nodes are specified all edges from the graph are returned.

## Parameters

**nodes** ([*DAGOpNode*](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")*,* [*DAGInNode*](qiskit.dagcircuit.DAGInNode#qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode")*, or DAGOutNode|list(*[*DAGOpNode*](qiskit.dagcircuit.DAGOpNode#qiskit.dagcircuit.DAGOpNode "qiskit.dagcircuit.DAGOpNode")*,* [*DAGInNode*](qiskit.dagcircuit.DAGInNode#qiskit.dagcircuit.DAGInNode "qiskit.dagcircuit.DAGInNode")*, or* [*DAGOutNode*](qiskit.dagcircuit.DAGOutNode#qiskit.dagcircuit.DAGOutNode "qiskit.dagcircuit.DAGOutNode")) – Either a list of nodes or a single input node. If none is specified, all edges are returned from the graph.

## Yields

*edge* –

## the edge in the same format as out\_edges the tuple

(source node, destination node, edge data)
