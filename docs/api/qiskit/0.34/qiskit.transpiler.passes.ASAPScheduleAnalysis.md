# ASAPScheduleAnalysis

<span id="undefined" />

`ASAPScheduleAnalysis(durations)`

Bases: `qiskit.transpiler.passes.scheduling.scheduling.base_scheduler.BaseScheduler`

ASAP Scheduling pass, which schedules the start time of instructions as early as possible..

See `BaseScheduler` for the detailed behavior of the control flow operation, i.e. `c_if`.

Scheduler initializer.

**Parameters**

**durations** (`InstructionDurations`) – Durations of instructions to be used in scheduling

## Methods

|                                                                                                                                                                      |                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`name`](qiskit.transpiler.passes.ASAPScheduleAnalysis.name#qiskit.transpiler.passes.ASAPScheduleAnalysis.name "qiskit.transpiler.passes.ASAPScheduleAnalysis.name") | Return the name of the pass.      |
| [`run`](qiskit.transpiler.passes.ASAPScheduleAnalysis.run#qiskit.transpiler.passes.ASAPScheduleAnalysis.run "qiskit.transpiler.passes.ASAPScheduleAnalysis.run")     | Run the ASAPSchedule pass on dag. |

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
