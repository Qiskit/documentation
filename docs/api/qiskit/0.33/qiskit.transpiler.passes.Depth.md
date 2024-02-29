---
title: Depth
description: API reference for qiskit.transpiler.passes.Depth
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Depth
---

# Depth

<span id="qiskit.transpiler.passes.Depth" />

`Depth(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/transpiler/passes/analysis/depth.py "view source code")

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Calculate the depth of a DAG circuit.

## Methods

### name

<span id="qiskit.transpiler.passes.Depth.name" />

`Depth.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Depth.run" />

`Depth.run(dag)`

Run the Depth pass on dag.

## Attributes

<span id="qiskit.transpiler.passes.Depth.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Depth.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

