# CheckCXDirection

<span id="undefined" />

`CheckCXDirection(*args, **kwargs)`

Bases: `qiskit.transpiler.passes.utils.check_gate_direction.CheckGateDirection`

Deprecated: use [`qiskit.transpiler.passes.CheckGateDirection`](qiskit.transpiler.passes.CheckGateDirection#qiskit.transpiler.passes.CheckGateDirection "qiskit.transpiler.passes.CheckGateDirection") pass instead.

CheckGateDirection initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

## Methods

|                                                                                                                                                          |                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`name`](qiskit.transpiler.passes.CheckCXDirection.name#qiskit.transpiler.passes.CheckCXDirection.name "qiskit.transpiler.passes.CheckCXDirection.name") | Return the name of the pass.            |
| [`run`](qiskit.transpiler.passes.CheckCXDirection.run#qiskit.transpiler.passes.CheckCXDirection.run "qiskit.transpiler.passes.CheckCXDirection.run")     | Run the CheckGateDirection pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
