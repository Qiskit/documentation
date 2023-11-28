# Collect1qRuns

<span id="undefined" />

`Collect1qRuns(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Collect one-qubit subcircuits.

## Methods

|                                                                                                                                                 |                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`name`](qiskit.transpiler.passes.Collect1qRuns.name#qiskit.transpiler.passes.Collect1qRuns.name "qiskit.transpiler.passes.Collect1qRuns.name") | Return the name of the pass.         |
| [`run`](qiskit.transpiler.passes.Collect1qRuns.run#qiskit.transpiler.passes.Collect1qRuns.run "qiskit.transpiler.passes.Collect1qRuns.run")     | Run the Collect1qBlocks pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
