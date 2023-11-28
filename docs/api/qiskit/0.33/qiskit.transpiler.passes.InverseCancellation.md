# InverseCancellation

<span id="undefined" />

`InverseCancellation(gates_to_cancel)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Cancel specific Gates which are inverses of each other when they occur back-to- back.

Initialize InverseCancellation pass.

**Parameters**

**gates\_to\_cancel** (`List`\[`Union`\[`Gate`, `Tuple`\[`Gate`, `Gate`]]]) – list of gates to cancel

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – Initalization raises an error when the input is not a self-inverse gate or a two-tuple of inverse gates.

## Methods

|                                                                                                                                                                   |                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`name`](qiskit.transpiler.passes.InverseCancellation.name#qiskit.transpiler.passes.InverseCancellation.name "qiskit.transpiler.passes.InverseCancellation.name") | Return the name of the pass.             |
| [`run`](qiskit.transpiler.passes.InverseCancellation.run#qiskit.transpiler.passes.InverseCancellation.run "qiskit.transpiler.passes.InverseCancellation.run")     | Run the InverseCancellation pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
