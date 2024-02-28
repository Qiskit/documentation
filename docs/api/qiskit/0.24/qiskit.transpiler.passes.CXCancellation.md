---
title: CXCancellation
description: API reference for qiskit.transpiler.passes.CXCancellation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CXCancellation
---

<span id="qiskit-transpiler-passes-cxcancellation" />

# qiskit.transpiler.passes.CXCancellation

<span id="qiskit.transpiler.passes.CXCancellation" />

`CXCancellation(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/transpiler/passes/optimization/cx_cancellation.py "view source code")

Cancel back-to-back cx gates in dag.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.CXCancellation.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                      |                                     |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CXCancellation.__init__ "qiskit.transpiler.passes.CXCancellation.__init__")() | Initialize self.                    |
| [`name`](#qiskit.transpiler.passes.CXCancellation.name "qiskit.transpiler.passes.CXCancellation.name")()             | Return the name of the pass.        |
| [`run`](#qiskit.transpiler.passes.CXCancellation.run "qiskit.transpiler.passes.CXCancellation.run")(dag)             | Run the CXCancellation pass on dag. |

## Attributes

|                                                                                                                                                              |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CXCancellation.is_analysis_pass "qiskit.transpiler.passes.CXCancellation.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CXCancellation.is_transformation_pass "qiskit.transpiler.passes.CXCancellation.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.CXCancellation.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.CXCancellation.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.CXCancellation.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CXCancellation.run" />

`run(dag)`

Run the CXCancellation pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the directed acyclic graph to run on.

**Returns**

Transformed DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

