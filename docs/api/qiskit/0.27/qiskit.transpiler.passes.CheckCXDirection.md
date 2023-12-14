# qiskit.transpiler.passes.CheckCXDirection



`CheckCXDirection(*args, **kwargs)`

Deprecated: use [`qiskit.transpiler.passes.CheckGateDirection`](qiskit.transpiler.passes.CheckGateDirection#qiskit.transpiler.passes.CheckGateDirection "qiskit.transpiler.passes.CheckGateDirection") pass instead.

CheckGateDirection initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.



`__init__(coupling_map)`

CheckGateDirection initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

## Methods

|                                                                                                                                       |                                         |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CheckCXDirection.__init__ "qiskit.transpiler.passes.CheckCXDirection.__init__")(coupling\_map) | CheckGateDirection initializer.         |
| [`name`](#qiskit.transpiler.passes.CheckCXDirection.name "qiskit.transpiler.passes.CheckCXDirection.name")()                          | Return the name of the pass.            |
| [`run`](#qiskit.transpiler.passes.CheckCXDirection.run "qiskit.transpiler.passes.CheckCXDirection.run")(dag)                          | Run the CheckGateDirection pass on dag. |

## Attributes

|                                                                                                                                                                  |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CheckCXDirection.is_analysis_pass "qiskit.transpiler.passes.CheckCXDirection.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CheckCXDirection.is_transformation_pass "qiskit.transpiler.passes.CheckCXDirection.is_transformation_pass") | Check if the pass is a transformation pass. |



`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.



`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).



`name()`

Return the name of the pass.



`run(dag)`

Run the CheckGateDirection pass on dag.

If dag is mapped and the direction is correct the property is\_direction\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to check.
