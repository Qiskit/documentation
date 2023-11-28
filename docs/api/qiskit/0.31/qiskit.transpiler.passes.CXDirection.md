# CXDirection

<span id="undefined" />

`CXDirection(*args, **kwargs)`

Bases: `qiskit.transpiler.passes.utils.gate_direction.GateDirection`

Deprecated: use [`qiskit.transpiler.passes.GateDirection`](qiskit.transpiler.passes.GateDirection#qiskit.transpiler.passes.GateDirection "qiskit.transpiler.passes.GateDirection") pass instead.

GateDirection pass.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

## Methods

|                                                                                                                                           |                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`name`](qiskit.transpiler.passes.CXDirection.name#qiskit.transpiler.passes.CXDirection.name "qiskit.transpiler.passes.CXDirection.name") | Return the name of the pass.       |
| [`run`](qiskit.transpiler.passes.CXDirection.run#qiskit.transpiler.passes.CXDirection.run "qiskit.transpiler.passes.CXDirection.run")     | Run the GateDirection pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
