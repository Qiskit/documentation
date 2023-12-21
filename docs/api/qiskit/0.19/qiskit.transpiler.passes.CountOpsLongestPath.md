---
title: CountOpsLongestPath
description: API reference for qiskit.transpiler.passes.CountOpsLongestPath
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CountOpsLongestPath
---

# CountOpsLongestPath

<span id="qiskit.transpiler.passes.CountOpsLongestPath" />

`CountOpsLongestPath(*args, **kwargs)`

Count the operations on the longest path in a DAGcircuit.

The result is saved in `property_set['count_ops_longest_path']` as an integer.

## Attributes

|                                                                                                                                                                                           |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CountOpsLongestPath.is_analysis_pass`](qiskit.transpiler.passes.CountOpsLongestPath.is_analysis_pass "qiskit.transpiler.passes.CountOpsLongestPath.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CountOpsLongestPath.is_transformation_pass`](qiskit.transpiler.passes.CountOpsLongestPath.is_transformation_pass "qiskit.transpiler.passes.CountOpsLongestPath.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                       |                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`CountOpsLongestPath.name`](qiskit.transpiler.passes.CountOpsLongestPath.name "qiskit.transpiler.passes.CountOpsLongestPath.name")() | Return the name of the pass.             |
| [`CountOpsLongestPath.run`](qiskit.transpiler.passes.CountOpsLongestPath.run "qiskit.transpiler.passes.CountOpsLongestPath.run")(dag) | Run the CountOpsLongestPath pass on dag. |

