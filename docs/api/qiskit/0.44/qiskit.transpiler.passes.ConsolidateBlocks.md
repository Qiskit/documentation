---
title: ConsolidateBlocks
description: API reference for qiskit.transpiler.passes.ConsolidateBlocks
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ConsolidateBlocks
---

# ConsolidateBlocks

<span id="qiskit.transpiler.passes.ConsolidateBlocks" />

`qiskit.transpiler.passes.ConsolidateBlocks(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/transpiler/passes/optimization/consolidate_blocks.py "view source code")

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Replace each block of consecutive gates by a single Unitary node.

Pass to consolidate sequences of uninterrupted gates acting on the same qubits into a Unitary node, to be resynthesized later, to a potentially more optimal subcircuit.

**Notes**

This pass assumes that the ‘blocks\_list’ property that it reads is given such that blocks are in topological order. The blocks are collected by a previous pass, such as Collect2qBlocks.

ConsolidateBlocks initializer.

If kak\_basis\_gate is not None it will be used as the basis gate for KAK decomposition. Otherwise, if basis\_gates is not None a basis gate will be chosen from this list. Otherwise the basis gate will be CXGate.

**Parameters**

*   **kak\_basis\_gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – Basis gate for KAK decomposition.
*   **force\_consolidate** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Force block consolidation.
*   **basis\_gates** (*List(*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*)*) – Basis gates from which to choose a KAK gate.
*   **approximation\_degree** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – a float between \[0.0, 1.0]. Lower approximates more.
*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The target object for the compilation target backend.

## Attributes

<span id="qiskit.transpiler.passes.ConsolidateBlocks.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ConsolidateBlocks.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.ConsolidateBlocks.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ConsolidateBlocks.run" />

`run(dag)`

Run the ConsolidateBlocks pass on dag.

Iterate over each block and replace it with an equivalent Unitary on the same wires.

