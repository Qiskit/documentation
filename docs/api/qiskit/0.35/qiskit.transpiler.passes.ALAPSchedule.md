# ALAPSchedule

<span id="undefined" />

`ALAPSchedule(*args, **kwargs)`

Bases: `qiskit.transpiler.passes.scheduling.base_scheduler.BaseSchedulerTransform`

ALAP Scheduling pass, which schedules the **stop** time of instructions as late as possible.

See `BaseSchedulerTransform` for the detailed behavior of the control flow operation, i.e. `c_if`.

<Admonition title="Note" type="note">
  This base class has been superseded by [`ALAPScheduleAnalysis`](qiskit.transpiler.passes.ALAPScheduleAnalysis#qiskit.transpiler.passes.ALAPScheduleAnalysis "qiskit.transpiler.passes.ALAPScheduleAnalysis") and the new scheduling workflow. It will be deprecated and subsequently removed in a future release.
</Admonition>

Scheduler initializer.

**Parameters**

*   **durations** – Durations of instructions to be used in scheduling
*   **clbit\_write\_latency** – A control flow constraints. Because standard superconducting quantum processor implement dispersive QND readout, the actual data transfer to the clbit happens after the round-trip stimulus signal is buffered and discriminated into quantum state. The interval `[t0, t0 + clbit_write_latency]` is regarded as idle time for clbits associated with the measure instruction. This defaults to 0 dt which is identical to Qiskit Pulse scheduler.
*   **conditional\_latency** – A control flow constraints. This value represents a latency of reading a classical register for the conditional operation. The gate operation occurs after this latency. This appears as a delay in front of the DAGOpNode of the gate. This defaults to 0 dt.

## Methods

|                                                                                                                                              |                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`name`](qiskit.transpiler.passes.ALAPSchedule.name#qiskit.transpiler.passes.ALAPSchedule.name "qiskit.transpiler.passes.ALAPSchedule.name") | Return the name of the pass.      |
| [`run`](qiskit.transpiler.passes.ALAPSchedule.run#qiskit.transpiler.passes.ALAPSchedule.run "qiskit.transpiler.passes.ALAPSchedule.run")     | Run the ALAPSchedule pass on dag. |

## Attributes

<span id="undefined" />

### CONDITIONAL\_SUPPORTED

`= (, )`

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
