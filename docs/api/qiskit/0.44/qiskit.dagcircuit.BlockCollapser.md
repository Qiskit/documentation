---
title: BlockCollapser
description: API reference for qiskit.dagcircuit.BlockCollapser
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.BlockCollapser
---

# BlockCollapser

<span id="qiskit.dagcircuit.BlockCollapser" />

`qiskit.dagcircuit.BlockCollapser(dag)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/dagcircuit/collect_blocks.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

This class implements various strategies of consolidating blocks of nodes in a DAG (direct acyclic graph). It works both with the [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") and [`DAGDependency`](qiskit.dagcircuit.DAGDependency "qiskit.dagcircuit.DAGDependency") DAG representations.

**Parameters**

**dag** (*Union\[*[*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")*,* [*DAGDependency*](qiskit.dagcircuit.DAGDependency "qiskit.dagcircuit.DAGDependency")*]*) – The input DAG.

**Raises**

[**DAGCircuitError**](dagcircuit#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – the input object is not a DAG.

## Methods

### collapse\_to\_operation

<span id="qiskit.dagcircuit.BlockCollapser.collapse_to_operation" />

`collapse_to_operation(blocks, collapse_fn)`

For each block, constructs a quantum circuit containing instructions in the block, then uses collapse\_fn to collapse this circuit into a single operation.

