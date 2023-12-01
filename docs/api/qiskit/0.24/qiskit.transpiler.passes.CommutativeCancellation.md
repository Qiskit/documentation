<span id="qiskit-transpiler-passes-commutativecancellation" />

# qiskit.transpiler.passes.CommutativeCancellation

<span id="undefined" />

`CommutativeCancellation(*args, **kwargs)`

Cancel the redundant (self-adjoint) gates through commutation relations.

Pass for cancelling self-inverse gates/rotations. The cancellation utilizes the commutation relations in the circuit. Gates considered include:

```python
H, X, Y, Z, CX, CY, CZ
```

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                        |                                              |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CommutativeCancellation.__init__ "qiskit.transpiler.passes.CommutativeCancellation.__init__")() | Initialize self.                             |
| [`name`](#qiskit.transpiler.passes.CommutativeCancellation.name "qiskit.transpiler.passes.CommutativeCancellation.name")()             | Return the name of the pass.                 |
| [`run`](#qiskit.transpiler.passes.CommutativeCancellation.run "qiskit.transpiler.passes.CommutativeCancellation.run")(dag)             | Run the CommutativeCancellation pass on dag. |

## Attributes

|                                                                                                                                                                                |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CommutativeCancellation.is_analysis_pass "qiskit.transpiler.passes.CommutativeCancellation.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CommutativeCancellation.is_transformation_pass "qiskit.transpiler.passes.CommutativeCancellation.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`run(dag)`

Run the CommutativeCancellation pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – when the 1-qubit rotation gates are not found
