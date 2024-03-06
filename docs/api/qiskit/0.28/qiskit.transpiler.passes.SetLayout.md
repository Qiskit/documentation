---
title: SetLayout
description: API reference for qiskit.transpiler.passes.SetLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.SetLayout
---

# qiskit.transpiler.passes.SetLayout

<span id="qiskit.transpiler.passes.SetLayout" />

`SetLayout(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/layout/set_layout.py "view source code")

Set the `layout` property to the given layout.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

SetLayout initializer.

**Parameters**

**layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – the layout to set.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.SetLayout.__init__" />

`__init__(layout)`

SetLayout initializer.

**Parameters**

**layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – the layout to set.

## Methods

|                                                                                                                  |                                |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`__init__`](#qiskit.transpiler.passes.SetLayout.__init__ "qiskit.transpiler.passes.SetLayout.__init__")(layout) | SetLayout initializer.         |
| [`name`](#qiskit.transpiler.passes.SetLayout.name "qiskit.transpiler.passes.SetLayout.name")()                   | Return the name of the pass.   |
| [`run`](#qiskit.transpiler.passes.SetLayout.run "qiskit.transpiler.passes.SetLayout.run")(dag)                   | Run the SetLayout pass on dag. |

## Attributes

|                                                                                                                                                    |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.SetLayout.is_analysis_pass "qiskit.transpiler.passes.SetLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.SetLayout.is_transformation_pass "qiskit.transpiler.passes.SetLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.SetLayout.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.SetLayout.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.SetLayout.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.SetLayout.run" />

`run(dag)`

Run the SetLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

the original DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

