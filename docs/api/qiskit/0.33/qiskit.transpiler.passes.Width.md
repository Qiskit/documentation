# Width[¶](#width "Permalink to this headline")

<span id="undefined" />

`Width(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Calculate the width of a DAG circuit.

The result is saved in `property_set['width']` as an integer that contains the number of qubits + the number of clbits.

## Methods

|                                                                                                                         |                              |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`name`](qiskit.transpiler.passes.Width.name#qiskit.transpiler.passes.Width.name "qiskit.transpiler.passes.Width.name") | Return the name of the pass. |
| [`run`](qiskit.transpiler.passes.Width.run#qiskit.transpiler.passes.Width.run "qiskit.transpiler.passes.Width.run")     | Run the Width pass on dag.   |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
