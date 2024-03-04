---
title: CheckMap
description: API reference for qiskit.transpiler.passes.CheckMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CheckMap
---

# qiskit.transpiler.passes.CheckMap

<span id="qiskit.transpiler.passes.CheckMap" />

`CheckMap(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/utils/check_map.py "view source code")

Check if a DAG circuit is already mapped to a coupling map.

Check if a DAGCircuit is mapped to coupling\_map by checking that all 2-qubit interactions are laid out to be physically close, setting the property `is_swap_mapped` to `True` or `False` accordingly.

CheckMap initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.CheckMap.__init__" />

`__init__(coupling_map)`

CheckMap initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

## Methods

|                                                                                                                       |                               |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CheckMap.__init__ "qiskit.transpiler.passes.CheckMap.__init__")(coupling\_map) | CheckMap initializer.         |
| [`name`](#qiskit.transpiler.passes.CheckMap.name "qiskit.transpiler.passes.CheckMap.name")()                          | Return the name of the pass.  |
| [`run`](#qiskit.transpiler.passes.CheckMap.run "qiskit.transpiler.passes.CheckMap.run")(dag)                          | Run the CheckMap pass on dag. |

## Attributes

|                                                                                                                                                  |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CheckMap.is_analysis_pass "qiskit.transpiler.passes.CheckMap.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CheckMap.is_transformation_pass "qiskit.transpiler.passes.CheckMap.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.CheckMap.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.CheckMap.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.CheckMap.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CheckMap.run" />

`run(dag)`

Run the CheckMap pass on dag.

If dag is mapped to coupling\_map, the property is\_swap\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

