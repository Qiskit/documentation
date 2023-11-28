# CheckGateDirection[¶](#checkgatedirection "Permalink to this headline")

<span id="undefined" />

`CheckGateDirection(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Check if the two-qubit gates follow the right direction with respect to the coupling map.

CheckGateDirection initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – The backend target to use for this pass. If this is specified it will be used instead of the coupling map

## Methods

|                                                                                                                                                                |                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`name`](qiskit.transpiler.passes.CheckGateDirection.name#qiskit.transpiler.passes.CheckGateDirection.name "qiskit.transpiler.passes.CheckGateDirection.name") | Return the name of the pass.            |
| [`run`](qiskit.transpiler.passes.CheckGateDirection.run#qiskit.transpiler.passes.CheckGateDirection.run "qiskit.transpiler.passes.CheckGateDirection.run")     | Run the CheckGateDirection pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
