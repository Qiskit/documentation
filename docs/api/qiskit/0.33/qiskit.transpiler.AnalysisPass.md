---
title: AnalysisPass
description: API reference for qiskit.transpiler.AnalysisPass
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.AnalysisPass
---

# AnalysisPass

<span id="qiskit.transpiler.AnalysisPass" />

`AnalysisPass(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/transpiler/basepasses.py "view source code")

Bases: `qiskit.transpiler.basepasses.BasePass`

An analysis pass: change property set, not DAG.

## Methods

### name

<span id="qiskit.transpiler.AnalysisPass.name" />

`AnalysisPass.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.AnalysisPass.run" />

`abstract AnalysisPass.run(dag)`

Run a pass on the DAGCircuit. This is implemented by the pass developer.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the dag on which the pass is run.

**Raises**

**NotImplementedError** – when this is left unimplemented for a pass.

## Attributes

<span id="qiskit.transpiler.AnalysisPass.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.AnalysisPass.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

