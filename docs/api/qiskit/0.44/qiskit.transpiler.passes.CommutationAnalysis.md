---
title: CommutationAnalysis
description: API reference for qiskit.transpiler.passes.CommutationAnalysis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CommutationAnalysis
---

# CommutationAnalysis

<span id="qiskit.transpiler.passes.CommutationAnalysis" />

`qiskit.transpiler.passes.CommutationAnalysis(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/transpiler/passes/optimization/commutation_analysis.py "view source code")

Bases: [`AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Analysis pass to find commutation relations between DAG nodes.

Property\_set\[‘commutation\_set’] is a dictionary that describes the commutation relations on a given wire, all the gates on a wire are grouped into a set of gates that commute.

TODO: the current pass determines commutativity through matrix multiplication. A rule-based analysis would be potentially faster, but more limited.

## Attributes

<span id="qiskit.transpiler.passes.CommutationAnalysis.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CommutationAnalysis.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.CommutationAnalysis.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CommutationAnalysis.run" />

`run(dag)`

Run the CommutationAnalysis pass on dag.

Run the pass on the DAG, and write the discovered commutation relations into the property\_set.

