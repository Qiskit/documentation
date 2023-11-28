# qiskit.transpiler.passes.CXDirection

<span id="undefined" />

`CXDirection(*args, **kwargs)`

Deprecated: use [`qiskit.transpiler.passes.GateDirection`](qiskit.transpiler.passes.GateDirection#qiskit.transpiler.passes.GateDirection "qiskit.transpiler.passes.GateDirection") pass instead.

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

<span id="undefined" />

`__init__(coupling_map)`

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

## Methods

|                                                                                                                             |                                    |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CXDirection.__init__ "qiskit.transpiler.passes.CXDirection.__init__")(coupling\_map) | GateDirection pass.                |
| [`name`](#qiskit.transpiler.passes.CXDirection.name "qiskit.transpiler.passes.CXDirection.name")()                          | Return the name of the pass.       |
| [`run`](#qiskit.transpiler.passes.CXDirection.run "qiskit.transpiler.passes.CXDirection.run")(dag)                          | Run the GateDirection pass on dag. |

## Attributes

|                                                                                                                                                        |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CXDirection.is_analysis_pass "qiskit.transpiler.passes.CXDirection.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CXDirection.is_transformation_pass "qiskit.transpiler.passes.CXDirection.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the GateDirection pass on dag.

Flips the cx nodes to match the directed coupling map. Modifies the input dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

The rearranged dag for the coupling map

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the circuit cannot be mapped just by flipping the cx nodes.
