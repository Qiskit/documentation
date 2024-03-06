---
title: LinearFunctionsSynthesis
description: API reference for qiskit.transpiler.passes.LinearFunctionsSynthesis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.LinearFunctionsSynthesis
---

# LinearFunctionsSynthesis

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis" />

`LinearFunctionsSynthesis(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/passes/synthesis/linear_functions_synthesis.py "view source code")

Bases: [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.synthesis.high_level_synthesis.HighLevelSynthesis")

DEPRECATED: Synthesize linear functions.

Under the hood, this runs the default high-level synthesis plugin for linear functions.

<Admonition title="Deprecated since version 0.23.0" type="danger">
  The class `qiskit.transpiler.passes.synthesis.linear_functions_synthesis.LinearFunctionsSynthesis` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. Instead, use [`HighLevelSynthesis`](qiskit.transpiler.passes.HighLevelSynthesis "qiskit.transpiler.passes.HighLevelSynthesis").
</Admonition>

## Methods

<span id="qiskit-transpiler-passes-linearfunctionssynthesis-name" />

### name

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.name" />

`LinearFunctionsSynthesis.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-linearfunctionssynthesis-run" />

### run

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.run" />

`LinearFunctionsSynthesis.run(dag)`

Run the HighLevelSynthesis pass on dag. :param dag: input dag.

**Returns**

Output dag with certain Operations synthesized (as specified by the hls\_config).

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – when the specified synthesis method is not available.

**Return type**

[*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

