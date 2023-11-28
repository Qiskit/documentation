<span id="qiskit-transpiler-passes-removefinalmeasurements" />

# qiskit.transpiler.passes.RemoveFinalMeasurements

<span id="undefined" />

`RemoveFinalMeasurements(*args, **kwargs)`

Remove final measurements and barriers at the end of a circuit.

This pass removes final barriers and final measurements, as well as the ClassicalRegisters they are connected to if the ClassicalRegister is unused. Measurements and barriers are considered final if they are followed by no other operations (aside from other measurements or barriers.)

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                        |                                              |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.RemoveFinalMeasurements.__init__ "qiskit.transpiler.passes.RemoveFinalMeasurements.__init__")() | Initialize self.                             |
| [`name`](#qiskit.transpiler.passes.RemoveFinalMeasurements.name "qiskit.transpiler.passes.RemoveFinalMeasurements.name")()             | Return the name of the pass.                 |
| [`run`](#qiskit.transpiler.passes.RemoveFinalMeasurements.run "qiskit.transpiler.passes.RemoveFinalMeasurements.run")(dag)             | Run the RemoveFinalMeasurements pass on dag. |

## Attributes

|                                                                                                                                                                                |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.RemoveFinalMeasurements.is_analysis_pass "qiskit.transpiler.passes.RemoveFinalMeasurements.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.RemoveFinalMeasurements.is_transformation_pass "qiskit.transpiler.passes.RemoveFinalMeasurements.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the RemoveFinalMeasurements pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")
