---
title: CountOps
description: API reference for qiskit.transpiler.passes.CountOps
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CountOps
---

# CountOps

<span id="qiskit.transpiler.passes.CountOps" />

`CountOps(*args, **kwargs)`

Count the operations in a DAG circuit.

The result is saved in `property_set['count_ops']` as an integer.

## Attributes

|                                                                                                                                                          |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CountOps.is_analysis_pass`](qiskit.transpiler.passes.CountOps.is_analysis_pass "qiskit.transpiler.passes.CountOps.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CountOps.is_transformation_pass`](qiskit.transpiler.passes.CountOps.is_transformation_pass "qiskit.transpiler.passes.CountOps.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                      |                               |
| ---------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`CountOps.name`](qiskit.transpiler.passes.CountOps.name "qiskit.transpiler.passes.CountOps.name")() | Return the name of the pass.  |
| [`CountOps.run`](qiskit.transpiler.passes.CountOps.run "qiskit.transpiler.passes.CountOps.run")(dag) | Run the CountOps pass on dag. |

