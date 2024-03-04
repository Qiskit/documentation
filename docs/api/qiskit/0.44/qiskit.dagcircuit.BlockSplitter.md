---
title: BlockSplitter
description: API reference for qiskit.dagcircuit.BlockSplitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.BlockSplitter
---

# BlockSplitter

<span id="qiskit.dagcircuit.BlockSplitter" />

`qiskit.dagcircuit.BlockSplitter` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/dagcircuit/collect_blocks.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

Splits a block of nodes into sub-blocks over disjoint qubits. The implementation is based on the Disjoint Set Union data structure.

## Methods

### find\_leader

<span id="qiskit.dagcircuit.BlockSplitter.find_leader" />

`find_leader(index)`

Find in DSU.

### run

<span id="qiskit.dagcircuit.BlockSplitter.run" />

`run(block)`

Splits block of nodes into sub-blocks over disjoint qubits.

### union\_leaders

<span id="qiskit.dagcircuit.BlockSplitter.union_leaders" />

`union_leaders(index1, index2)`

Union in DSU.

