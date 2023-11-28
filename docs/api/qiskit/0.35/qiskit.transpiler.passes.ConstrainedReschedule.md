# ConstrainedReschedule

<span id="undefined" />

`ConstrainedReschedule(acquire_alignment=1, pulse_alignment=1)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Rescheduler pass that updates node start times to conform to the hardware alignments.

This pass shifts DAG node start times previously scheduled with one of the scheduling passes, e.g. [`ASAPSchedule`](qiskit.transpiler.passes.ASAPSchedule#qiskit.transpiler.passes.ASAPSchedule "qiskit.transpiler.passes.ASAPSchedule") or [`ALAPSchedule`](qiskit.transpiler.passes.ALAPSchedule#qiskit.transpiler.passes.ALAPSchedule "qiskit.transpiler.passes.ALAPSchedule"), so that every instruction start time satisfies alignment constraints.

## Examples

We assume executing the following circuit on a backend with 16 dt of acquire alignment.

```python
     ┌───┐┌────────────────┐┌─┐
q_0: ┤ X ├┤ Delay(100[dt]) ├┤M├
     └───┘└────────────────┘└╥┘
c: 1/════════════════════════╩═
                             0
```

Note that delay of 100 dt induces a misalignment of 4 dt at the measurement. This pass appends an extra 12 dt time shift to the input circuit.

```python
     ┌───┐┌────────────────┐┌─┐
q_0: ┤ X ├┤ Delay(112[dt]) ├┤M├
     └───┘└────────────────┘└╥┘
c: 1/════════════════════════╩═
                             0
```

## Notes

Your backend may execute circuits violating these alignment constraints. However, you may obtain erroneous measurement result because of the untracked phase originating in the instruction misalignment.

Create new rescheduler pass.

The alignment values depend on the control electronics of your quantum processor.

**Parameters**

*   **acquire\_alignment** (`int`) – Integer number representing the minimum time resolution to trigger acquisition instruction in units of `dt`.
*   **pulse\_alignment** (`int`) – Integer number representing the minimum time resolution to trigger gate instruction in units of `dt`.

## Methods

|                                                                                                                                                                         |                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`name`](qiskit.transpiler.passes.ConstrainedReschedule.name#qiskit.transpiler.passes.ConstrainedReschedule.name "qiskit.transpiler.passes.ConstrainedReschedule.name") | Return the name of the pass. |
| [`run`](qiskit.transpiler.passes.ConstrainedReschedule.run#qiskit.transpiler.passes.ConstrainedReschedule.run "qiskit.transpiler.passes.ConstrainedReschedule.run")     | Run rescheduler.             |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
