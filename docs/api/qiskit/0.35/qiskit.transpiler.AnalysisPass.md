# AnalysisPass

<span id="undefined" />

`AnalysisPass(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.BasePass`

An analysis pass: change property set, not DAG.

## Methods

|                                                                                                                         |                               |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`name`](qiskit.transpiler.AnalysisPass.name#qiskit.transpiler.AnalysisPass.name "qiskit.transpiler.AnalysisPass.name") | Return the name of the pass.  |
| [`run`](qiskit.transpiler.AnalysisPass.run#qiskit.transpiler.AnalysisPass.run "qiskit.transpiler.AnalysisPass.run")     | Run a pass on the DAGCircuit. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
