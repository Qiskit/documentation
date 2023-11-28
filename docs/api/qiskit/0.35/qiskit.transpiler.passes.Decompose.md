# Decompose[¶](#decompose "Permalink to this headline")

<span id="undefined" />

`Decompose(gate=None, gates_to_decompose=None)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Expand a gate in a circuit using its decomposition rules.

Decompose initializer.

**Parameters**

*   **gate** (`Optional`\[`Type`\[`Gate`]]) – DEPRECATED gate to decompose.
*   **gates\_to\_decompose** (`Union`\[`Type`\[`Gate`], `List`\[`Type`\[`Gate`]], `List`\[`str`], `str`, `None`]) – optional subset of gates to be decomposed, identified by gate label, name or type. Defaults to all gates.

## Methods

|                                                                                                                                     |                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`name`](qiskit.transpiler.passes.Decompose.name#qiskit.transpiler.passes.Decompose.name "qiskit.transpiler.passes.Decompose.name") | Return the name of the pass.   |
| [`run`](qiskit.transpiler.passes.Decompose.run#qiskit.transpiler.passes.Decompose.run "qiskit.transpiler.passes.Decompose.run")     | Run the Decompose pass on dag. |

## Attributes

<span id="undefined" />

### gate

Returns the gate

**Return type**

`Gate`

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
