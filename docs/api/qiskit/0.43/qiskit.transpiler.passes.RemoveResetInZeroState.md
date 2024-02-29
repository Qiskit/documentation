---
title: RemoveResetInZeroState
description: API reference for qiskit.transpiler.passes.RemoveResetInZeroState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RemoveResetInZeroState
---

# RemoveResetInZeroState

<span id="qiskit.transpiler.passes.RemoveResetInZeroState" />

`RemoveResetInZeroState(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/transpiler/passes/optimization/remove_reset_in_zero_state.py "view source code")

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Remove reset gate when the qubit is in zero state.

## Methods

<span id="qiskit-transpiler-passes-removeresetinzerostate-name" />

### name

<span id="qiskit.transpiler.passes.RemoveResetInZeroState.name" />

`RemoveResetInZeroState.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-removeresetinzerostate-run" />

### run

<span id="qiskit.transpiler.passes.RemoveResetInZeroState.run" />

`RemoveResetInZeroState.run(dag)`

Run the RemoveResetInZeroState pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.RemoveResetInZeroState.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.RemoveResetInZeroState.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

