# qiskit.dagcircuit.DAGCircuit.layers

`DAGCircuit.layers()`

Yield a shallow view on a layer of this DAGCircuit for all d layers of this circuit.

A layer is a circuit whose gates act on disjoint qubits, i.e., a layer has depth 1. The total number of layers equals the circuit depth d. The layers are indexed from 0 to d-1 with the earliest layer at index 0. The layers are constructed using a greedy algorithm. Each returned layer is a dict containing \{“graph”: circuit graph, “partition”: list of qubit lists}.

The returned layer contains new (but semantically equivalent) DAGNodes. These are not the same as nodes of the original dag, but are equivalent via DAGNode.semantic\_eq(node1, node2).

TODO: Gates that use the same cbits will end up in different layers as this is currently implemented. This may not be the desired behavior.
