# ApplyLayout[¶](#applylayout "Permalink to this headline")

<span id="undefined" />

`ApplyLayout(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Transform a circuit with virtual qubits into a circuit with physical qubits.

Transforms a DAGCircuit with virtual qubits into a DAGCircuit with physical qubits by applying the Layout given in property\_set. Requires either of passes to set/select Layout, e.g. SetLayout, TrivialLayout. Assumes the Layout has full physical qubits.

## Methods

|                                                                                                                                           |                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`name`](qiskit.transpiler.passes.ApplyLayout.name#qiskit.transpiler.passes.ApplyLayout.name "qiskit.transpiler.passes.ApplyLayout.name") | Return the name of the pass.     |
| [`run`](qiskit.transpiler.passes.ApplyLayout.run#qiskit.transpiler.passes.ApplyLayout.run "qiskit.transpiler.passes.ApplyLayout.run")     | Run the ApplyLayout pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
