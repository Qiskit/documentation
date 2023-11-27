# LinearFunctionsSynthesis[¶](#linearfunctionssynthesis "Permalink to this headline")

<span id="undefined" />

`LinearFunctionsSynthesis(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Synthesize linear functions. Under the hood, this runs cnot\_synth which implements the Patel–Markov–Hayes algorithm.

## Methods

|                                                                                                                                                                                  |                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`name`](qiskit.transpiler.passes.LinearFunctionsSynthesis.name#qiskit.transpiler.passes.LinearFunctionsSynthesis.name "qiskit.transpiler.passes.LinearFunctionsSynthesis.name") | Return the name of the pass.                  |
| [`run`](qiskit.transpiler.passes.LinearFunctionsSynthesis.run#qiskit.transpiler.passes.LinearFunctionsSynthesis.run "qiskit.transpiler.passes.LinearFunctionsSynthesis.run")     | Run the LinearFunctionsSynthesis pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
