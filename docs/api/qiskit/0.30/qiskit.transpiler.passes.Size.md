# Size

<span id="undefined" />

`Size(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Calculate the size of a DAG circuit.

The result is saved in `property_set['size']` as an integer.

## Methods

|                                                                                                                      |                              |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`name`](qiskit.transpiler.passes.Size.name#qiskit.transpiler.passes.Size.name "qiskit.transpiler.passes.Size.name") | Return the name of the pass. |
| [`run`](qiskit.transpiler.passes.Size.run#qiskit.transpiler.passes.Size.run "qiskit.transpiler.passes.Size.run")     | Run the Size pass on dag.    |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
