# EnlargeWithAncilla[¶](#enlargewithancilla "Permalink to this headline")

<span id="undefined" />

`EnlargeWithAncilla(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Extend the dag with virtual qubits that are in layout but not in the circuit yet.

Extend the DAG circuit with new virtual qubits (ancilla) that are specified in the layout, but not present in the circuit. Which qubits to add are previously allocated in the `layout` property, by a previous pass.

## Methods

|                                                                                                                                                                |                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`name`](qiskit.transpiler.passes.EnlargeWithAncilla.name#qiskit.transpiler.passes.EnlargeWithAncilla.name "qiskit.transpiler.passes.EnlargeWithAncilla.name") | Return the name of the pass.            |
| [`run`](qiskit.transpiler.passes.EnlargeWithAncilla.run#qiskit.transpiler.passes.EnlargeWithAncilla.run "qiskit.transpiler.passes.EnlargeWithAncilla.run")     | Run the EnlargeWithAncilla pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
