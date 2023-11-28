# CommutativeCancellation

<span id="undefined" />

`CommutativeCancellation(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Cancel the redundant (self-adjoint) gates through commutation relations.

Pass for cancelling self-inverse gates/rotations. The cancellation utilizes the commutation relations in the circuit. Gates considered include:

```python
H, X, Y, Z, CX, CY, CZ
```

CommutativeCancellation initializer.

**Parameters**

**basis\_gates** (*list\[str]*) – Basis gates to consider, e.g. `['u3', 'cx']`. For the effects of this pass, the basis is the set intersection between the `basis_gates` parameter and the gates in the dag.

## Methods

|                                                                                                                                                                               |                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`name`](qiskit.transpiler.passes.CommutativeCancellation.name#qiskit.transpiler.passes.CommutativeCancellation.name "qiskit.transpiler.passes.CommutativeCancellation.name") | Return the name of the pass.                 |
| [`run`](qiskit.transpiler.passes.CommutativeCancellation.run#qiskit.transpiler.passes.CommutativeCancellation.run "qiskit.transpiler.passes.CommutativeCancellation.run")     | Run the CommutativeCancellation pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
