# Optimize1qGates

<span id="undefined" />

`Optimize1qGates(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Optimize chains of single-qubit u1, u2, u3 gates by combining them into a single gate.

Optimize1qGates initializer.

**Parameters**

*   **basis** (*list\[str]*) – Basis gates to consider, e.g. \[‘u3’, ‘cx’]. For the effects of this pass, the basis is the set intersection between the basis parameter and the set \{‘u1’,’u2’,’u3’, ‘u’, ‘p’}.
*   **eps** (*float*) – EPS to check against

## Methods

|                                                                                                                                                                               |                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`compose_u3`](qiskit.transpiler.passes.Optimize1qGates.compose_u3#qiskit.transpiler.passes.Optimize1qGates.compose_u3 "qiskit.transpiler.passes.Optimize1qGates.compose_u3") | Return a triple theta, phi, lambda for the product. |
| [`name`](qiskit.transpiler.passes.Optimize1qGates.name#qiskit.transpiler.passes.Optimize1qGates.name "qiskit.transpiler.passes.Optimize1qGates.name")                         | Return the name of the pass.                        |
| [`run`](qiskit.transpiler.passes.Optimize1qGates.run#qiskit.transpiler.passes.Optimize1qGates.run "qiskit.transpiler.passes.Optimize1qGates.run")                             | Run the Optimize1qGates pass on dag.                |
| [`yzy_to_zyz`](qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz#qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz "qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz") | Express a Y.Z.Y single qubit gate as a Z.Y.Z gate.  |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
