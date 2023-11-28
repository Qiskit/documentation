# Unroller

<span id="undefined" />

`Unroller(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Unroll a circuit to a given basis.

Unroll (expand) non-basis, non-opaque instructions recursively to a desired basis, using decomposition rules defined for each instruction.

Unroller initializer.

**Parameters**

**basis** (*list\[str] or None*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’] . If None, does not unroll any gate.

## Methods

|                                                                                                                                  |                               |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`name`](qiskit.transpiler.passes.Unroller.name#qiskit.transpiler.passes.Unroller.name "qiskit.transpiler.passes.Unroller.name") | Return the name of the pass.  |
| [`run`](qiskit.transpiler.passes.Unroller.run#qiskit.transpiler.passes.Unroller.run "qiskit.transpiler.passes.Unroller.run")     | Run the Unroller pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
