# qiskit.transpiler.passes.BarrierBeforeFinalMeasurements

<span id="undefined" />

`BarrierBeforeFinalMeasurements(*args, **kwargs)`

Add a barrier before final measurements.

This pass adds a barrier before the set of final measurements. Measurements are considered final if they are followed by no other operations (aside from other measurements or barriers.)

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                      |                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.__init__ "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.__init__")() | Initialize self.                                    |
| [`name`](#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name")()             | Return the name of the pass.                        |
| [`run`](#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run")(dag)             | Run the BarrierBeforeFinalMeasurements pass on dag. |

## Attributes

|                                                                                                                                                                                              |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_analysis_pass "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_transformation_pass "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`run(dag)`

Run the BarrierBeforeFinalMeasurements pass on dag.
