---
title: RemoveDiagonalGatesBeforeMeasure
description: API reference for qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure
---

# RemoveDiagonalGatesBeforeMeasure

<span id="qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure" />

`RemoveDiagonalGatesBeforeMeasure(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/passes/optimization/remove_diagonal_gates_before_measure.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Remove diagonal gates (including diagonal 2Q gates) before a measurement.

Transpiler pass to remove diagonal gates (like RZ, T, Z, etc) before a measurement. Including diagonal 2Q gates.

## Methods

### name

<span id="qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.name" />

`RemoveDiagonalGatesBeforeMeasure.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.run" />

`RemoveDiagonalGatesBeforeMeasure.run(dag)`

Run the RemoveDiagonalGatesBeforeMeasure pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

