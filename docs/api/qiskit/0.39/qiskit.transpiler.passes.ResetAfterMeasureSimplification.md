---
title: ResetAfterMeasureSimplification
description: API reference for qiskit.transpiler.passes.ResetAfterMeasureSimplification
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ResetAfterMeasureSimplification
---

# ResetAfterMeasureSimplification

<span id="qiskit.transpiler.passes.ResetAfterMeasureSimplification" />

`ResetAfterMeasureSimplification(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/transpiler/passes/optimization/reset_after_measure_simplification.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

This pass replaces reset after measure with a conditional X gate.

This optimization is suitable for use on IBM Quantum systems where the reset operation is performed by a measurement followed by a conditional x-gate. It might not be desireable on other backends if reset is implemented differently.

## Methods

### name

<span id="qiskit.transpiler.passes.ResetAfterMeasureSimplification.name" />

`ResetAfterMeasureSimplification.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ResetAfterMeasureSimplification.run" />

`ResetAfterMeasureSimplification.run(dag)`

Run the pass on a dag.

## Attributes

<span id="qiskit.transpiler.passes.ResetAfterMeasureSimplification.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ResetAfterMeasureSimplification.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

