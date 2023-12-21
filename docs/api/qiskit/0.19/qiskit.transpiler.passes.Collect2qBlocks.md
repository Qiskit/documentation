---
title: Collect2qBlocks
description: API reference for qiskit.transpiler.passes.Collect2qBlocks
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Collect2qBlocks
---

# Collect2qBlocks

<span id="qiskit.transpiler.passes.Collect2qBlocks" />

`Collect2qBlocks(*args, **kwargs)`

Collect sequences of uninterrupted gates acting on 2 qubits.

Traverse the DAG and find blocks of gates that act consecutively on pairs of qubits. Write the blocks to propert\_set as a dictionary of the form:

```python
{(q0, q1): [[g0, g1, g2], [g5]],
 (q0, q2): [[g3, g4]]
 ..
 .
}
```

Based on implementation by Andrew Cross.

## Attributes

|                                                                                                                                                                               |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Collect2qBlocks.is_analysis_pass`](qiskit.transpiler.passes.Collect2qBlocks.is_analysis_pass "qiskit.transpiler.passes.Collect2qBlocks.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Collect2qBlocks.is_transformation_pass`](qiskit.transpiler.passes.Collect2qBlocks.is_transformation_pass "qiskit.transpiler.passes.Collect2qBlocks.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                           |                                      |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`Collect2qBlocks.name`](qiskit.transpiler.passes.Collect2qBlocks.name "qiskit.transpiler.passes.Collect2qBlocks.name")() | Return the name of the pass.         |
| [`Collect2qBlocks.run`](qiskit.transpiler.passes.Collect2qBlocks.run "qiskit.transpiler.passes.Collect2qBlocks.run")(dag) | Run the Collect2qBlocks pass on dag. |

