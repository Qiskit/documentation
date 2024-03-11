---
title: EnlargeWithAncilla
description: API reference for qiskit.transpiler.passes.EnlargeWithAncilla
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.EnlargeWithAncilla
---

# qiskit.transpiler.passes.EnlargeWithAncilla

<span id="qiskit.transpiler.passes.EnlargeWithAncilla" />

`EnlargeWithAncilla(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/transpiler/passes/layout/enlarge_with_ancilla.py "view source code")

Extend the dag with virtual qubits that are in layout but not in the circuit yet.

Extend the DAG circuit with new virtual qubits (ancilla) that are specified in the layout, but not present in the circuit. Which qubits to add are previously allocated in the `layout` property, by a previous pass.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.EnlargeWithAncilla.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                              |                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.EnlargeWithAncilla.__init__ "qiskit.transpiler.passes.EnlargeWithAncilla.__init__")() | Initialize self.                        |
| [`name`](#qiskit.transpiler.passes.EnlargeWithAncilla.name "qiskit.transpiler.passes.EnlargeWithAncilla.name")()             | Return the name of the pass.            |
| [`run`](#qiskit.transpiler.passes.EnlargeWithAncilla.run "qiskit.transpiler.passes.EnlargeWithAncilla.run")(dag)             | Run the EnlargeWithAncilla pass on dag. |

## Attributes

|                                                                                                                                                                      |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass "qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass "qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.EnlargeWithAncilla.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.EnlargeWithAncilla.run" />

`run(dag)`

Run the EnlargeWithAncilla pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to extend.

**Returns**

An extended DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If there is not layout in the property set or not set at init time.

