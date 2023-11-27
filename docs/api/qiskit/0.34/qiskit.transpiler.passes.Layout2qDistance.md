# Layout2qDistance[¶](#layout2qdistance "Permalink to this headline")

<span id="undefined" />

`Layout2qDistance(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Evaluate how good the layout selection was.

Saves in property\_set\[‘layout\_score’] (or the property name in property\_name) the sum of distances for each circuit CX. The lower the number, the better the selection. Therefore, 0 is a perfect layout selection. No CX direction is considered.

Layout2qDistance initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **property\_name** (*str*) – The property name to save the score. Default: layout\_score

## Methods

|                                                                                                                                                          |                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`name`](qiskit.transpiler.passes.Layout2qDistance.name#qiskit.transpiler.passes.Layout2qDistance.name "qiskit.transpiler.passes.Layout2qDistance.name") | Return the name of the pass.          |
| [`run`](qiskit.transpiler.passes.Layout2qDistance.run#qiskit.transpiler.passes.Layout2qDistance.run "qiskit.transpiler.passes.Layout2qDistance.run")     | Run the Layout2qDistance pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
