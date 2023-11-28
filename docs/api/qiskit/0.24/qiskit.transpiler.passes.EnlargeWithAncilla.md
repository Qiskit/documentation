<span id="qiskit-transpiler-passes-enlargewithancilla" />

# qiskit.transpiler.passes.EnlargeWithAncilla

<span id="undefined" />

`EnlargeWithAncilla(*args, **kwargs)`

Extend the dag with virtual qubits that are in layout but not in the circuit yet.

Extend the DAG circuit with new virtual qubits (ancilla) that are specified in the layout, but not present in the circuit. Which qubits to add are previously allocated in the `layout` property, by a previous pass.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                              |                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.EnlargeWithAncilla.__init__ "qiskit.transpiler.passes.EnlargeWithAncilla.__init__")() | Initialize self.                        |
| [`name`](#qiskit.transpiler.passes.EnlargeWithAncilla.name "qiskit.transpiler.passes.EnlargeWithAncilla.name")()             | Return the name of the pass.            |
| [`run`](#qiskit.transpiler.passes.EnlargeWithAncilla.run "qiskit.transpiler.passes.EnlargeWithAncilla.run")(dag)             | Run the EnlargeWithAncilla pass on dag. |

## Attributes

|                                                                                                                                                                      |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass "qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass "qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the EnlargeWithAncilla pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to extend.

**Returns**

An extended DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If there is not layout in the property set or not set at init time.
