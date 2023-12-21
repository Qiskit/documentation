---
title: layers
description: API reference for qiskit.dagcircuit.DAGCircuit.layers
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.dagcircuit.DAGCircuit.layers
---

# layers

<span id="qiskit.dagcircuit.DAGCircuit.layers" />

`DAGCircuit.layers()`

Yield a shallow view on a layer of this DAGCircuit for all d layers of this circuit.

A layer is a circuit whose gates act on disjoint qubits, i.e., a layer has depth 1. The total number of layers equals the circuit depth d. The layers are indexed from 0 to d-1 with the earliest layer at index 0. The layers are constructed using a greedy algorithm. Each returned layer is a dict containing \{“graph”: circuit graph, “partition”: list of qubit lists}.

New but semantically equivalent DAGNodes will be included in the returned layers, NOT the DAGNodes from the original DAG. The original vs. new nodes can be compared using DAGNode.semantic\_eq(node1, node2).

TODO: Gates that use the same cbits will end up in different layers as this is currently implemented. This may not be the desired behavior.

