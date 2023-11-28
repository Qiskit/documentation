# CollectLinearFunctions

<span id="undefined" />

`CollectLinearFunctions(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Collect blocks of linear gates ([`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate") and [`SwapGate`](qiskit.circuit.library.SwapGate#qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate") gates) and replaces them by linear functions ([`LinearFunction`](qiskit.circuit.library.LinearFunction#qiskit.circuit.library.LinearFunction "qiskit.circuit.library.LinearFunction")).

## Methods

|                                                                                                                                                                            |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`name`](qiskit.transpiler.passes.CollectLinearFunctions.name#qiskit.transpiler.passes.CollectLinearFunctions.name "qiskit.transpiler.passes.CollectLinearFunctions.name") | Return the name of the pass.                |
| [`run`](qiskit.transpiler.passes.CollectLinearFunctions.run#qiskit.transpiler.passes.CollectLinearFunctions.run "qiskit.transpiler.passes.CollectLinearFunctions.run")     | Run the CollectLinearFunctions pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
