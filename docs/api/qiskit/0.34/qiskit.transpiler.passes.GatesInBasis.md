# GatesInBasis

<span id="undefined" />

`GatesInBasis(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Check if all gates in a DAG are in a given set of gates

Initialize the GatesInBasis pass.

**Parameters**

*   **basis\_gates** (*list*) – The list of strings representing the set of basis gates.
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – The target representing the backend. If specified this will be used instead of the `basis_gates` parameter

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If neither basis\_gates or target is set.

## Methods

|                                                                                                                                              |                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`name`](qiskit.transpiler.passes.GatesInBasis.name#qiskit.transpiler.passes.GatesInBasis.name "qiskit.transpiler.passes.GatesInBasis.name") | Return the name of the pass.      |
| [`run`](qiskit.transpiler.passes.GatesInBasis.run#qiskit.transpiler.passes.GatesInBasis.run "qiskit.transpiler.passes.GatesInBasis.run")     | Run the GatesInBasis pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
