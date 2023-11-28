# CommutationAnalysis[¶](#commutationanalysis "Permalink to this headline")

<span id="undefined" />

`CommutationAnalysis(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Analysis pass to find commutation relations between DAG nodes.

Property\_set\[‘commutation\_set’] is a dictionary that describes the commutation relations on a given wire, all the gates on a wire are grouped into a set of gates that commute.

TODO: the current pass determines commutativity through matrix multiplication. A rule-based analysis would be potentially faster, but more limited.

## Methods

|                                                                                                                                                                   |                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`name`](qiskit.transpiler.passes.CommutationAnalysis.name#qiskit.transpiler.passes.CommutationAnalysis.name "qiskit.transpiler.passes.CommutationAnalysis.name") | Return the name of the pass.             |
| [`run`](qiskit.transpiler.passes.CommutationAnalysis.run#qiskit.transpiler.passes.CommutationAnalysis.run "qiskit.transpiler.passes.CommutationAnalysis.run")     | Run the CommutationAnalysis pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
