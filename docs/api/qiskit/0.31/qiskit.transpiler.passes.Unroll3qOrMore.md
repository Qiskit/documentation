# Unroll3qOrMore[¶](#unroll3qormore "Permalink to this headline")

<span id="undefined" />

`Unroll3qOrMore(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Recursively expands 3q+ gates until the circuit only contains 2q or 1q gates.

## Methods

|                                                                                                                                                    |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`name`](qiskit.transpiler.passes.Unroll3qOrMore.name#qiskit.transpiler.passes.Unroll3qOrMore.name "qiskit.transpiler.passes.Unroll3qOrMore.name") | Return the name of the pass.        |
| [`run`](qiskit.transpiler.passes.Unroll3qOrMore.run#qiskit.transpiler.passes.Unroll3qOrMore.run "qiskit.transpiler.passes.Unroll3qOrMore.run")     | Run the Unroll3qOrMore pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
