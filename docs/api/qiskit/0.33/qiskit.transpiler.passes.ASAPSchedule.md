# ASAPSchedule

<span id="undefined" />

`ASAPSchedule(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

ASAP Scheduling pass, which schedules the start time of instructions as early as possible..

For circuits with instructions writing or reading clbits (e.g. measurements, conditional gates), the scheduler assumes clbits I/O operations take no time, `measure` locks clbits to be written at its end and `c_if` locks clbits to be read at its beginning.

## Notes

The ASAP scheduler may not schedule a circuit exactly the same as any real backend does when the circuit contains control flows (e.g. conditional instructions).

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
