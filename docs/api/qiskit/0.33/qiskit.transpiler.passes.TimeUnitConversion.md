# TimeUnitConversion[¶](#timeunitconversion "Permalink to this headline")

<span id="undefined" />

`TimeUnitConversion(inst_durations)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Choose a time unit to be used in the following time-aware passes, and make all circuit time units consistent with that.

This pass will add a .duration metadata to each op whose duration is known, which will be used by subsequent scheduling passes for scheduling.

If dt (dt in seconds) is known to transpiler, the unit ‘dt’ is chosen. Otherwise, the unit to be selected depends on what units are used in delays and instruction durations:

*   ‘s’: if they are all in SI units.
*   ‘dt’: if they are all in the unit ‘dt’.
*   raise error: if they are a mix of SI units and ‘dt’.

TimeUnitAnalysis initializer.

**Parameters**

**inst\_durations** ([*InstructionDurations*](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")) – A dictionary of durations of instructions.

## Methods

|                                                                                                                                                                |                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`name`](qiskit.transpiler.passes.TimeUnitConversion.name#qiskit.transpiler.passes.TimeUnitConversion.name "qiskit.transpiler.passes.TimeUnitConversion.name") | Return the name of the pass.          |
| [`run`](qiskit.transpiler.passes.TimeUnitConversion.run#qiskit.transpiler.passes.TimeUnitConversion.run "qiskit.transpiler.passes.TimeUnitConversion.run")     | Run the TimeUnitAnalysis pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
