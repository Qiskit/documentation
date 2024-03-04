---
title: CollectLinearFunctions
description: API reference for qiskit.transpiler.passes.CollectLinearFunctions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CollectLinearFunctions
---

# CollectLinearFunctions

<span id="qiskit.transpiler.passes.CollectLinearFunctions" />

`CollectLinearFunctions(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/passes/optimization/collect_linear_functions.py "view source code")

Bases: `CollectAndCollapse`

Collect blocks of linear gates ([`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate") and [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate") gates) and replaces them by linear functions ([`LinearFunction`](qiskit.circuit.library.LinearFunction "qiskit.circuit.library.LinearFunction")).

CollectLinearFunctions initializer.

**Parameters**

*   **do\_commutative\_analysis** (*bool*) – if True, exploits commutativity relations between nodes.
*   **split\_blocks** (*bool*) – if True, splits collected blocks into sub-blocks over disjoint qubit subsets.
*   **min\_block\_size** (*int*) – specifies the minimum number of gates in the block for the block to be collected.

## Methods

<span id="qiskit-transpiler-passes-collectlinearfunctions-name" />

### name

<span id="qiskit.transpiler.passes.CollectLinearFunctions.name" />

`CollectLinearFunctions.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-collectlinearfunctions-run" />

### run

<span id="qiskit.transpiler.passes.CollectLinearFunctions.run" />

`CollectLinearFunctions.run(dag)`

Run the CollectLinearFunctions pass on dag. :param dag: the DAG to be optimized. :type dag: DAGCircuit

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.CollectLinearFunctions.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CollectLinearFunctions.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

