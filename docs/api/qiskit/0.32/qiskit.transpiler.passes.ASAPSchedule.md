# ASAPSchedule

<span id="undefined" />

`ASAPSchedule(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

ASAP Scheduling.

ASAPSchedule initializer.

**Parameters**

**durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

|                                                                                                                                              |                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`name`](qiskit.transpiler.passes.ASAPSchedule.name#qiskit.transpiler.passes.ASAPSchedule.name "qiskit.transpiler.passes.ASAPSchedule.name") | Return the name of the pass.      |
| [`run`](qiskit.transpiler.passes.ASAPSchedule.run#qiskit.transpiler.passes.ASAPSchedule.run "qiskit.transpiler.passes.ASAPSchedule.run")     | Run the ASAPSchedule pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
