---
title: Layout2qDistance
description: API reference for qiskit.transpiler.passes.Layout2qDistance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Layout2qDistance
---

# qiskit.transpiler.passes.Layout2qDistance

<span id="qiskit.transpiler.passes.Layout2qDistance" />

`Layout2qDistance(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/layout/layout_2q_distance.py "view source code")

Evaluate how good the layout selection was.

Saves in property\_set\[‘layout\_score’] (or the property name in property\_name) the sum of distances for each circuit CX. The lower the number, the better the selection. Therefore, 0 is a perfect layout selection. No CX direction is considered.

Layout2qDistance initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **property\_name** (*str*) – The property name to save the score. Default: layout\_score

### \_\_init\_\_

<span id="qiskit.transpiler.passes.Layout2qDistance.__init__" />

`__init__(coupling_map, property_name='layout_score')`

Layout2qDistance initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **property\_name** (*str*) – The property name to save the score. Default: layout\_score

## Methods

|                                                                                                                                                          |                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Layout2qDistance.__init__ "qiskit.transpiler.passes.Layout2qDistance.__init__")(coupling\_map\[, property\_name]) | Layout2qDistance initializer.         |
| [`name`](#qiskit.transpiler.passes.Layout2qDistance.name "qiskit.transpiler.passes.Layout2qDistance.name")()                                             | Return the name of the pass.          |
| [`run`](#qiskit.transpiler.passes.Layout2qDistance.run "qiskit.transpiler.passes.Layout2qDistance.run")(dag)                                             | Run the Layout2qDistance pass on dag. |

## Attributes

|                                                                                                                                                                  |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass "qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass "qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.Layout2qDistance.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Layout2qDistance.run" />

`run(dag)`

Run the Layout2qDistance pass on dag. :param dag: DAG to evaluate. :type dag: DAGCircuit

