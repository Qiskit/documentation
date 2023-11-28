# DAGFixedPoint

<span id="undefined" />

`DAGFixedPoint(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Check if the DAG has reached a fixed point.

A dummy analysis pass that checks if the DAG a fixed point (the DAG is not modified anymore). The results is saved in `property_set['dag_fixed_point']` as a boolean.

## Methods

|                                                                                                                                                 |                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`name`](qiskit.transpiler.passes.DAGFixedPoint.name#qiskit.transpiler.passes.DAGFixedPoint.name "qiskit.transpiler.passes.DAGFixedPoint.name") | Return the name of the pass.       |
| [`run`](qiskit.transpiler.passes.DAGFixedPoint.run#qiskit.transpiler.passes.DAGFixedPoint.run "qiskit.transpiler.passes.DAGFixedPoint.run")     | Run the DAGFixedPoint pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
