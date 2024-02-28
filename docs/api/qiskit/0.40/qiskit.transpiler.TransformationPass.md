---
title: TransformationPass
description: API reference for qiskit.transpiler.TransformationPass
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.TransformationPass
---

# TransformationPass

<span id="qiskit.transpiler.TransformationPass" />

`TransformationPass(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/basepasses.py "view source code")

Bases: `qiskit.transpiler.basepasses.BasePass`

A transformation pass: change DAG, not property set.

## Methods

### name

<span id="qiskit.transpiler.TransformationPass.name" />

`TransformationPass.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.TransformationPass.run" />

`abstract TransformationPass.run(dag)`

Run a pass on the DAGCircuit. This is implemented by the pass developer.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the dag on which the pass is run.

**Raises**

**NotImplementedError** – when this is left unimplemented for a pass.

## Attributes

<span id="qiskit.transpiler.TransformationPass.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.TransformationPass.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

