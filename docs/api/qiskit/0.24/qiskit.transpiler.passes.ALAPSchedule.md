---
title: ALAPSchedule
description: API reference for qiskit.transpiler.passes.ALAPSchedule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ALAPSchedule
---

<span id="qiskit-transpiler-passes-alapschedule" />

# qiskit.transpiler.passes.ALAPSchedule

<span id="qiskit.transpiler.passes.ALAPSchedule" />

`ALAPSchedule(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/transpiler/passes/scheduling/alap.py "view source code")

ALAP Scheduling.

ALAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

### \_\_init\_\_

<span id="qiskit.transpiler.passes.ALAPSchedule.__init__" />

`__init__(durations)`

ALAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

|                                                                                                                           |                                   |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.ALAPSchedule.__init__ "qiskit.transpiler.passes.ALAPSchedule.__init__")(durations) | ALAPSchedule initializer.         |
| [`name`](#qiskit.transpiler.passes.ALAPSchedule.name "qiskit.transpiler.passes.ALAPSchedule.name")()                      | Return the name of the pass.      |
| [`run`](#qiskit.transpiler.passes.ALAPSchedule.run "qiskit.transpiler.passes.ALAPSchedule.run")(dag\[, time\_unit])       | Run the ALAPSchedule pass on dag. |

## Attributes

|                                                                                                                                                          |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass "qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass "qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass") | Check if the pass is a transformation pass. |

### is\_analysis\_pass

<span id="qiskit.transpiler.passes.ALAPSchedule.is_analysis_pass" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

<span id="qiskit.transpiler.passes.ALAPSchedule.is_transformation_pass" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

### name

<span id="qiskit.transpiler.passes.ALAPSchedule.name" />

`name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ALAPSchedule.run" />

`run(dag, time_unit=None)`

Run the ALAPSchedule pass on dag.

**Parameters**

*   **dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.
*   **time\_unit** (*str*) – Time unit to be used in scheduling: ‘dt’ or ‘s’.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.

