---
title: ASAPSchedule
description: API reference for qiskit.transpiler.passes.ASAPSchedule
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ASAPSchedule
---

# ASAPSchedule

<span id="qiskit.transpiler.passes.ASAPSchedule" />

`ASAPSchedule(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/transpiler/passes/scheduling/asap.py "view source code")

Bases: `qiskit.transpiler.passes.scheduling.base_scheduler.BaseSchedulerTransform`

ASAP Scheduling pass, which schedules the start time of instructions as early as possible..

See `BaseSchedulerTransform` for the detailed behavior of the control flow operation, i.e. `c_if`.

<Admonition title="Note" type="note">
  This base class has been superseded by [`ASAPScheduleAnalysis`](qiskit.transpiler.passes.ASAPScheduleAnalysis "qiskit.transpiler.passes.ASAPScheduleAnalysis") and the new scheduling workflow. It will be deprecated and subsequently removed in a future release.
</Admonition>

Scheduler initializer.

**Parameters**

*   **durations** – Durations of instructions to be used in scheduling
*   **clbit\_write\_latency** – A control flow constraints. Because standard superconducting quantum processor implement dispersive QND readout, the actual data transfer to the clbit happens after the round-trip stimulus signal is buffered and discriminated into quantum state. The interval `[t0, t0 + clbit_write_latency]` is regarded as idle time for clbits associated with the measure instruction. This defaults to 0 dt which is identical to Qiskit Pulse scheduler.
*   **conditional\_latency** – A control flow constraints. This value represents a latency of reading a classical register for the conditional operation. The gate operation occurs after this latency. This appears as a delay in front of the DAGOpNode of the gate. This defaults to 0 dt.

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

*   [**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.
*   [**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if conditional bit is added to non-supported instruction.

## Attributes

<span id="qiskit.transpiler.passes.ASAPSchedule.CONDITIONAL_SUPPORTED" />

### CONDITIONAL\_SUPPORTED

`= (, )`

<span id="qiskit.transpiler.passes.ASAPSchedule.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ASAPSchedule.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

