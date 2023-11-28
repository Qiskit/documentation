<span id="qiskit-transpiler-passes-applylayout" />

# qiskit.transpiler.passes.ApplyLayout

<span id="undefined" />

`ApplyLayout(*args, **kwargs)`

Transform a circuit with virtual qubits into a circuit with physical qubits.

Transforms a DAGCircuit with virtual qubits into a DAGCircuit with physical qubits by applying the Layout given in property\_set. Requires either of passes to set/select Layout, e.g. SetLayout, TrivialLayout. Assumes the Layout has full physical qubits.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                |                                  |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.ApplyLayout.__init__ "qiskit.transpiler.passes.ApplyLayout.__init__")() | Initialize self.                 |
| [`name`](#qiskit.transpiler.passes.ApplyLayout.name "qiskit.transpiler.passes.ApplyLayout.name")()             | Return the name of the pass.     |
| [`run`](#qiskit.transpiler.passes.ApplyLayout.run "qiskit.transpiler.passes.ApplyLayout.run")(dag)             | Run the ApplyLayout pass on dag. |

## Attributes

|                                                                                                                                                        |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.ApplyLayout.is_analysis_pass "qiskit.transpiler.passes.ApplyLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.ApplyLayout.is_transformation_pass "qiskit.transpiler.passes.ApplyLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the ApplyLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG (with physical qubits).

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if no layout is found in property\_set or no full physical qubits.
