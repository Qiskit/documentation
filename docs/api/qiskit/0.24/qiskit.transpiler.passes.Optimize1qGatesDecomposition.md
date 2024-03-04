---
title: Optimize1qGatesDecomposition
description: API reference for qiskit.transpiler.passes.Optimize1qGatesDecomposition
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Optimize1qGatesDecomposition
---

<span id="qiskit-transpiler-passes-optimize1qgatesdecomposition" />

# qiskit.transpiler.passes.Optimize1qGatesDecomposition

<span id="qiskit.transpiler.passes.Optimize1qGatesDecomposition" />

`Optimize1qGatesDecomposition(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/transpiler/passes/optimization/optimize_1q_decomposition.py "view source code")

Optimize chains of single-qubit gates by combining them into a single gate.

Optimize1qGatesDecomposition initializer.

**Parameters**

**basis** (*list\[str]*) – Basis gates to consider, e.g. \[‘u3’, ‘cx’]. For the effects of this pass, the basis is the set intersection between the basis parameter and the Euler basis.

### \_\_init\_\_

<span id="qiskit.transpiler.passes.Optimize1qGatesDecomposition.__init__" />

`__init__(basis=None)`

Optimize1qGatesDecomposition initializer.

**Parameters**

**basis** (*list\[str]*) – Basis gates to consider, e.g. \[‘u3’, ‘cx’]. For the effects of this pass, the basis is the set intersection between the basis parameter and the Euler basis.

## Methods

|                                                                                                                                                          |                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Optimize1qGatesDecomposition.__init__ "qiskit.transpiler.passes.Optimize1qGatesDecomposition.__init__")(\[basis]) | Optimize1qGatesDecomposition initializer.         |
| [`name`](#qiskit.transpiler.passes.Optimize1qGatesDecomposition.name "qiskit.transpiler.passes.Optimize1qGatesDecomposition.name")()                     | Return the name of the pass.                      |
| [`run`](#qiskit.transpiler.passes.Optimize1qGatesDecomposition.run "qiskit.transpiler.passes.Optimize1qGatesDecomposition.run")(dag)                     | Run the Optimize1qGatesDecomposition pass on dag. |

## Attributes

|                                                                                                                                                                                          |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Optimize1qGatesDecomposition.is_analysis_pass "qiskit.transpiler.passes.Optimize1qGatesDecomposition.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Optimize1qGatesDecomposition.is_transformation_pass "qiskit.transpiler.passes.Optimize1qGatesDecomposition.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.Optimize1qGatesDecomposition.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.Optimize1qGatesDecomposition.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.Optimize1qGatesDecomposition.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Optimize1qGatesDecomposition.run" />

`run(dag)`

Run the Optimize1qGatesDecomposition pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

