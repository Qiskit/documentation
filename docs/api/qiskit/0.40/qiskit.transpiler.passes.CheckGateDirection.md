---
title: CheckGateDirection
description: API reference for qiskit.transpiler.passes.CheckGateDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CheckGateDirection
---

# CheckGateDirection

<span id="qiskit.transpiler.passes.CheckGateDirection" />

`CheckGateDirection(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/transpiler/passes/utils/check_gate_direction.py "view source code")

Bases: [`qiskit.transpiler.basepasses.AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Check if the two-qubit gates follow the right direction with respect to the coupling map.

CheckGateDirection initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.
*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The backend target to use for this pass. If this is specified it will be used instead of the coupling map

## Methods

### name

<span id="qiskit.transpiler.passes.CheckGateDirection.name" />

`CheckGateDirection.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CheckGateDirection.run" />

`CheckGateDirection.run(dag)`

Run the CheckGateDirection pass on dag.

If dag is mapped and the direction is correct the property is\_direction\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to check.

## Attributes

<span id="qiskit.transpiler.passes.CheckGateDirection.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CheckGateDirection.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

