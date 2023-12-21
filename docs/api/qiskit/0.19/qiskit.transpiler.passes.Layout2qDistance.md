---
title: Layout2qDistance
description: API reference for qiskit.transpiler.passes.Layout2qDistance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Layout2qDistance
---

# Layout2qDistance

<span id="qiskit.transpiler.passes.Layout2qDistance" />

`Layout2qDistance(*args, **kwargs)`

Evaluate how good the layout selection was.

Saves in property\_set\[‘layout\_score’] (or the property name in property\_name) the sum of distances for each circuit CX. The lower the number, the better the selection. Therefore, 0 is a perfect layout selection. No CX direction is considered.

Layout2qDistance initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **property\_name** (*str*) – The property name to save the score. Default: layout\_score

## Attributes

|                                                                                                                                                                                  |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Layout2qDistance.is_analysis_pass`](qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass "qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Layout2qDistance.is_transformation_pass`](qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass "qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                              |                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`Layout2qDistance.name`](qiskit.transpiler.passes.Layout2qDistance.name "qiskit.transpiler.passes.Layout2qDistance.name")() | Return the name of the pass.          |
| [`Layout2qDistance.run`](qiskit.transpiler.passes.Layout2qDistance.run "qiskit.transpiler.passes.Layout2qDistance.run")(dag) | Run the Layout2qDistance pass on dag. |

