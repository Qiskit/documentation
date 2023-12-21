---
title: ConsolidateBlocks
description: API reference for qiskit.transpiler.passes.ConsolidateBlocks
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ConsolidateBlocks
---

# ConsolidateBlocks

<span id="qiskit.transpiler.passes.ConsolidateBlocks" />

`ConsolidateBlocks(*args, **kwargs)`

Replace each block of consecutive gates by a single Unitary node.

Pass to consolidate sequences of uninterrupted gates acting on the same qubits into a Unitary node, to be resynthesized later, to a potentially more optimal subcircuit.

## Notes

This pass assumes that the ‘blocks\_list’ property that it reads is given such that blocks are in topological order. The blocks are collected by a previous pass, such as Collect2qBlocks.

ConsolidateBlocks initializer.

**Parameters**

*   **kak\_basis\_gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – Basis gate for KAK decomposition.
*   **force\_consolidate** (*bool*) – Force block consolidation

## Attributes

|                                                                                                                                                                                     |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`ConsolidateBlocks.is_analysis_pass`](qiskit.transpiler.passes.ConsolidateBlocks.is_analysis_pass "qiskit.transpiler.passes.ConsolidateBlocks.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`ConsolidateBlocks.is_transformation_pass`](qiskit.transpiler.passes.ConsolidateBlocks.is_transformation_pass "qiskit.transpiler.passes.ConsolidateBlocks.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                 |                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`ConsolidateBlocks.name`](qiskit.transpiler.passes.ConsolidateBlocks.name "qiskit.transpiler.passes.ConsolidateBlocks.name")() | Return the name of the pass.           |
| [`ConsolidateBlocks.run`](qiskit.transpiler.passes.ConsolidateBlocks.run "qiskit.transpiler.passes.ConsolidateBlocks.run")(dag) | Run the ConsolidateBlocks pass on dag. |

