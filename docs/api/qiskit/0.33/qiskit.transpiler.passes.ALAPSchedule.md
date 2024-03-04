---
title: ALAPSchedule
description: API reference for qiskit.transpiler.passes.ALAPSchedule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ALAPSchedule
---

# ALAPSchedule

<span id="qiskit.transpiler.passes.ALAPSchedule" />

`ALAPSchedule(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/transpiler/passes/scheduling/alap.py "view source code")

Bases: `qiskit.transpiler.basepasses.TransformationPass`

ALAP Scheduling pass, which schedules the **stop** time of instructions as late as possible.

For circuits with instructions writing or reading clbits (e.g. measurements, conditional gates), the scheduler assumes clbits I/O operations take no time, `measure` locks clbits to be written at its end and `c_if` locks clbits to be read at its beginning.

**Notes**

The ALAP scheduler may not schedule a circuit exactly the same as any real backend does when the circuit contains control flows (e.g. conditional instructions).

ALAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

### name

<span id="qiskit.transpiler.passes.ALAPSchedule.name" />

`ALAPSchedule.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ALAPSchedule.run" />

`ALAPSchedule.run(dag)`

Run the ALAPSchedule pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.

## Attributes

<span id="qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

