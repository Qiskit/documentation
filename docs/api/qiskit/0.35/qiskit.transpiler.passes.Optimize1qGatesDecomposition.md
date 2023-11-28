# Optimize1qGatesDecomposition[¶](#optimize1qgatesdecomposition "Permalink to this headline")

<span id="undefined" />

`Optimize1qGatesDecomposition(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Optimize chains of single-qubit gates by combining them into a single gate.

Optimize1qGatesDecomposition initializer.

**Parameters**

**basis** (*list\[str]*) – Basis gates to consider, e.g. \[‘u3’, ‘cx’]. For the effects of this pass, the basis is the set intersection between the basis parameter and the Euler basis.

## Methods

|                                                                                                                                                                                              |                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`name`](qiskit.transpiler.passes.Optimize1qGatesDecomposition.name#qiskit.transpiler.passes.Optimize1qGatesDecomposition.name "qiskit.transpiler.passes.Optimize1qGatesDecomposition.name") | Return the name of the pass.                      |
| [`run`](qiskit.transpiler.passes.Optimize1qGatesDecomposition.run#qiskit.transpiler.passes.Optimize1qGatesDecomposition.run "qiskit.transpiler.passes.Optimize1qGatesDecomposition.run")     | Run the Optimize1qGatesDecomposition pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
