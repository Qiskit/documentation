# ALAPScheduleAnalysis

<span id="undefined" />

`ALAPScheduleAnalysis(durations)`

Bases: `qiskit.transpiler.passes.scheduling.scheduling.base_scheduler.BaseScheduler`

ALAP Scheduling pass, which schedules the **stop** time of instructions as late as possible.

See `BaseScheduler` for the detailed behavior of the control flow operation, i.e. `c_if`.

Scheduler initializer.

**Parameters**

**durations** (`InstructionDurations`) – Durations of instructions to be used in scheduling

## Methods

|                                                                                                                                                                      |                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`name`](qiskit.transpiler.passes.ALAPScheduleAnalysis.name#qiskit.transpiler.passes.ALAPScheduleAnalysis.name "qiskit.transpiler.passes.ALAPScheduleAnalysis.name") | Return the name of the pass.      |
| [`run`](qiskit.transpiler.passes.ALAPScheduleAnalysis.run#qiskit.transpiler.passes.ALAPScheduleAnalysis.run "qiskit.transpiler.passes.ALAPScheduleAnalysis.run")     | Run the ALAPSchedule pass on dag. |

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
