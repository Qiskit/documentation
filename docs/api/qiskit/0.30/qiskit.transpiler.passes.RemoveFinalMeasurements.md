# RemoveFinalMeasurements

<span id="undefined" />

`RemoveFinalMeasurements(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Remove final measurements and barriers at the end of a circuit.

This pass removes final barriers and final measurements, as well as the ClassicalRegisters they are connected to if the ClassicalRegister is unused. Measurements and barriers are considered final if they are followed by no other operations (aside from other measurements or barriers.)

## Methods

|                                                                                                                                                                               |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`name`](qiskit.transpiler.passes.RemoveFinalMeasurements.name#qiskit.transpiler.passes.RemoveFinalMeasurements.name "qiskit.transpiler.passes.RemoveFinalMeasurements.name") | Return the name of the pass.                 |
| [`run`](qiskit.transpiler.passes.RemoveFinalMeasurements.run#qiskit.transpiler.passes.RemoveFinalMeasurements.run "qiskit.transpiler.passes.RemoveFinalMeasurements.run")     | Run the RemoveFinalMeasurements pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
