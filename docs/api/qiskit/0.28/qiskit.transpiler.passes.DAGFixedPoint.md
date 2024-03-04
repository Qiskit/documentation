---
title: DAGFixedPoint
description: API reference for qiskit.transpiler.passes.DAGFixedPoint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.DAGFixedPoint
---

# qiskit.transpiler.passes.DAGFixedPoint

<span id="qiskit.transpiler.passes.DAGFixedPoint" />

`DAGFixedPoint(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/utils/dag_fixed_point.py "view source code")

Check if the DAG has reached a fixed point.

A dummy analysis pass that checks if the DAG a fixed point (the DAG is not modified anymore). The results is saved in `property_set['dag_fixed_point']` as a boolean.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.DAGFixedPoint.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                    |                                    |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.DAGFixedPoint.__init__ "qiskit.transpiler.passes.DAGFixedPoint.__init__")() | Initialize self.                   |
| [`name`](#qiskit.transpiler.passes.DAGFixedPoint.name "qiskit.transpiler.passes.DAGFixedPoint.name")()             | Return the name of the pass.       |
| [`run`](#qiskit.transpiler.passes.DAGFixedPoint.run "qiskit.transpiler.passes.DAGFixedPoint.run")(dag)             | Run the DAGFixedPoint pass on dag. |

## Attributes

|                                                                                                                                                            |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.DAGFixedPoint.is_analysis_pass "qiskit.transpiler.passes.DAGFixedPoint.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.DAGFixedPoint.is_transformation_pass "qiskit.transpiler.passes.DAGFixedPoint.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.DAGFixedPoint.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.DAGFixedPoint.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.DAGFixedPoint.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.DAGFixedPoint.run" />

`run(dag)`

Run the DAGFixedPoint pass on dag.

