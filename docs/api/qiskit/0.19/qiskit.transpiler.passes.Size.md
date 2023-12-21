---
title: Size
description: API reference for qiskit.transpiler.passes.Size
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Size
---

# Size

<span id="qiskit.transpiler.passes.Size" />

`Size(*args, **kwargs)`

Calculate the size of a DAG circuit.

The result is saved in `property_set['size']` as an integer.

## Attributes

|                                                                                                                                              |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Size.is_analysis_pass`](qiskit.transpiler.passes.Size.is_analysis_pass "qiskit.transpiler.passes.Size.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Size.is_transformation_pass`](qiskit.transpiler.passes.Size.is_transformation_pass "qiskit.transpiler.passes.Size.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                          |                              |
| ---------------------------------------------------------------------------------------- | ---------------------------- |
| [`Size.name`](qiskit.transpiler.passes.Size.name "qiskit.transpiler.passes.Size.name")() | Return the name of the pass. |
| [`Size.run`](qiskit.transpiler.passes.Size.run "qiskit.transpiler.passes.Size.run")(dag) | Run the Size pass on dag.    |

