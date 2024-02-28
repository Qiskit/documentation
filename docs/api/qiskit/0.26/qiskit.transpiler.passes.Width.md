---
title: Width
description: API reference for qiskit.transpiler.passes.Width
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Width
---

# qiskit.transpiler.passes.Width

<span id="qiskit.transpiler.passes.Width" />

`Width(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/transpiler/passes/analysis/width.py "view source code")

Calculate the width of a DAG circuit.

The result is saved in `property_set['width']` as an integer that contains the number of qubits + the number of clbits.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.Width.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                    |                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Width.__init__ "qiskit.transpiler.passes.Width.__init__")() | Initialize self.             |
| [`name`](#qiskit.transpiler.passes.Width.name "qiskit.transpiler.passes.Width.name")()             | Return the name of the pass. |
| [`run`](#qiskit.transpiler.passes.Width.run "qiskit.transpiler.passes.Width.run")(dag)             | Run the Width pass on dag.   |

## Attributes

|                                                                                                                                            |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Width.is_analysis_pass "qiskit.transpiler.passes.Width.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Width.is_transformation_pass "qiskit.transpiler.passes.Width.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.Width.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.Width.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.Width.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Width.run" />

`run(dag)`

Run the Width pass on dag.

