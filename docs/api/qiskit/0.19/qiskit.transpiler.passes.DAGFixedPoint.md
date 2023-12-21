---
title: DAGFixedPoint
description: API reference for qiskit.transpiler.passes.DAGFixedPoint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.DAGFixedPoint
---

# DAGFixedPoint

<span id="qiskit.transpiler.passes.DAGFixedPoint" />

`DAGFixedPoint(*args, **kwargs)`

Check if the DAG has reached a fixed point.

A dummy analysis pass that checks if the DAG a fixed point (the DAG is not modified anymore). The results is saved in `property_set['dag_fixed_point']` as a boolean.

## Attributes

|                                                                                                                                                                         |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`DAGFixedPoint.is_analysis_pass`](qiskit.transpiler.passes.DAGFixedPoint.is_analysis_pass "qiskit.transpiler.passes.DAGFixedPoint.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`DAGFixedPoint.is_transformation_pass`](qiskit.transpiler.passes.DAGFixedPoint.is_transformation_pass "qiskit.transpiler.passes.DAGFixedPoint.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                     |                                    |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`DAGFixedPoint.name`](qiskit.transpiler.passes.DAGFixedPoint.name "qiskit.transpiler.passes.DAGFixedPoint.name")() | Return the name of the pass.       |
| [`DAGFixedPoint.run`](qiskit.transpiler.passes.DAGFixedPoint.run "qiskit.transpiler.passes.DAGFixedPoint.run")(dag) | Run the DAGFixedPoint pass on dag. |

