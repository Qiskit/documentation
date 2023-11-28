# FixedPoint

<span id="undefined" />

`FixedPoint(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Check if a property reached a fixed point.

A dummy analysis pass that checks if a property reached a fixed point. The results is saved in `property_set['<property>_fixed_point']` as a boolean.

FixedPoint initializer.

**Parameters**

**property\_to\_check** (*str*) – The property to check if a fixed point was reached.

## Methods

|                                                                                                                                        |                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`name`](qiskit.transpiler.passes.FixedPoint.name#qiskit.transpiler.passes.FixedPoint.name "qiskit.transpiler.passes.FixedPoint.name") | Return the name of the pass.    |
| [`run`](qiskit.transpiler.passes.FixedPoint.run#qiskit.transpiler.passes.FixedPoint.run "qiskit.transpiler.passes.FixedPoint.run")     | Run the FixedPoint pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
