---
title: FixedPoint
description: API reference for qiskit.transpiler.passes.FixedPoint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.FixedPoint
---

# FixedPoint

<span id="qiskit.transpiler.passes.FixedPoint" />

`FixedPoint(*args, **kwargs)`

Check if a property reached a fixed point.

A dummy analysis pass that checks if a property reached a fixed point. The results is saved in `property_set['<property>_fixed_point']` as a boolean.

FixedPoint initializer.

**Parameters**

**property\_to\_check** (*str*) – The property to check if a fixed point was reached.

## Attributes

|                                                                                                                                                                |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`FixedPoint.is_analysis_pass`](qiskit.transpiler.passes.FixedPoint.is_analysis_pass "qiskit.transpiler.passes.FixedPoint.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`FixedPoint.is_transformation_pass`](qiskit.transpiler.passes.FixedPoint.is_transformation_pass "qiskit.transpiler.passes.FixedPoint.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                            |                                 |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`FixedPoint.name`](qiskit.transpiler.passes.FixedPoint.name "qiskit.transpiler.passes.FixedPoint.name")() | Return the name of the pass.    |
| [`FixedPoint.run`](qiskit.transpiler.passes.FixedPoint.run "qiskit.transpiler.passes.FixedPoint.run")(dag) | Run the FixedPoint pass on dag. |

