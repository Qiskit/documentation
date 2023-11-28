# qiskit.transpiler.passes.Unroller

<span id="undefined" />

`Unroller(*args, **kwargs)`

Unroll a circuit to a given basis.

Unroll (expand) non-basis, non-opaque instructions recursively to a desired basis, using decomposition rules defined for each instruction.

Unroller initializer.

**Parameters**

**basis** (*list\[str] or None*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’] . If None, does not unroll any gate.

<span id="undefined" />

`__init__(basis)`

Unroller initializer.

**Parameters**

**basis** (*list\[str] or None*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’] . If None, does not unroll any gate.

## Methods

|                                                                                                               |                               |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Unroller.__init__ "qiskit.transpiler.passes.Unroller.__init__")(basis) | Unroller initializer.         |
| [`name`](#qiskit.transpiler.passes.Unroller.name "qiskit.transpiler.passes.Unroller.name")()                  | Return the name of the pass.  |
| [`run`](#qiskit.transpiler.passes.Unroller.run "qiskit.transpiler.passes.Unroller.run")(dag)                  | Run the Unroller pass on dag. |

## Attributes

|                                                                                                                                                  |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Unroller.is_analysis_pass "qiskit.transpiler.passes.Unroller.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Unroller.is_transformation_pass "qiskit.transpiler.passes.Unroller.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the Unroller pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Raises**

*   **QiskitError** – if unable to unroll given the basis due to undefined
*   **decomposition rules**\*\* (****such as a bad basis****) or \*\***excessive recursion.** –

**Returns**

output unrolled dag

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")
