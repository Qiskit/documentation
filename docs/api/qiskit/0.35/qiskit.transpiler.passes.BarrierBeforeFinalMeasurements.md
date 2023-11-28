# BarrierBeforeFinalMeasurements

<span id="undefined" />

`BarrierBeforeFinalMeasurements(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Add a barrier before final measurements.

This pass adds a barrier before the set of final measurements. Measurements are considered final if they are followed by no other operations (aside from other measurements or barriers.)

## Methods

|                                                                                                                                                                                                    |                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`name`](qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name") | Return the name of the pass.                        |
| [`run`](qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run")     | Run the BarrierBeforeFinalMeasurements pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
