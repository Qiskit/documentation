# qiskit.transpiler.passes.BasicSwap

<span id="undefined" />

`BasicSwap(*args, **kwargs)`

Map (with minimum effort) a DAGCircuit onto a coupling\_map adding swap gates.

The basic mapper is a minimum effort to insert swap gates to map the DAG onto a coupling map. When a cx is not in the coupling map possibilities, it inserts one or more swaps in front to make it compatible.

BasicSwap initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **fake\_run** (*bool*) – if true, it only pretend to do routing, i.e., no swap is effectively added.

<span id="undefined" />

`__init__(coupling_map, fake_run=False)`

BasicSwap initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **fake\_run** (*bool*) – if true, it only pretend to do routing, i.e., no swap is effectively added.

## Methods

|                                                                                                                                       |                                |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`__init__`](#qiskit.transpiler.passes.BasicSwap.__init__ "qiskit.transpiler.passes.BasicSwap.__init__")(coupling\_map\[, fake\_run]) | BasicSwap initializer.         |
| [`name`](#qiskit.transpiler.passes.BasicSwap.name "qiskit.transpiler.passes.BasicSwap.name")()                                        | Return the name of the pass.   |
| [`run`](#qiskit.transpiler.passes.BasicSwap.run "qiskit.transpiler.passes.BasicSwap.run")(dag)                                        | Run the BasicSwap pass on dag. |

## Attributes

|                                                                                                                                                    |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.BasicSwap.is_analysis_pass "qiskit.transpiler.passes.BasicSwap.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.BasicSwap.is_transformation_pass "qiskit.transpiler.passes.BasicSwap.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the BasicSwap pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the coupling map or the layout are not
*   **compatible with the DAG.** –
