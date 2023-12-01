<span id="qiskit-transpiler-passes-removeresetinzerostate" />

# qiskit.transpiler.passes.RemoveResetInZeroState

<span id="undefined" />

`RemoveResetInZeroState(*args, **kwargs)`

Remove reset gate when the qubit is in zero state.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                      |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.RemoveResetInZeroState.__init__ "qiskit.transpiler.passes.RemoveResetInZeroState.__init__")() | Initialize self.                            |
| [`name`](#qiskit.transpiler.passes.RemoveResetInZeroState.name "qiskit.transpiler.passes.RemoveResetInZeroState.name")()             | Return the name of the pass.                |
| [`run`](#qiskit.transpiler.passes.RemoveResetInZeroState.run "qiskit.transpiler.passes.RemoveResetInZeroState.run")(dag)             | Run the RemoveResetInZeroState pass on dag. |

## Attributes

|                                                                                                                                                                              |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.RemoveResetInZeroState.is_analysis_pass "qiskit.transpiler.passes.RemoveResetInZeroState.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.RemoveResetInZeroState.is_transformation_pass "qiskit.transpiler.passes.RemoveResetInZeroState.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the RemoveResetInZeroState pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")
