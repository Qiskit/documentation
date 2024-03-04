---
title: ASAPSchedule
description: API reference for qiskit.transpiler.passes.ASAPSchedule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ASAPSchedule
---

# ASAPSchedule

<span id="qiskit.transpiler.passes.ASAPSchedule" />

`ASAPSchedule(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/transpiler/passes/scheduling/asap.py "view source code")

Bases: `qiskit.transpiler.basepasses.TransformationPass`

ASAP Scheduling.

ASAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

### name

<span id="qiskit.transpiler.passes.ASAPSchedule.name" />

`ASAPSchedule.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ASAPSchedule.run" />

`ASAPSchedule.run(dag)`

Run the ASAPSchedule pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.

## Attributes

<span id="qiskit.transpiler.passes.ASAPSchedule.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ASAPSchedule.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

