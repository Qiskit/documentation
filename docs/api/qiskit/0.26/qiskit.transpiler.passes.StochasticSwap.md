# qiskit.transpiler.passes.StochasticSwap

<span id="undefined" />

`StochasticSwap(*args, **kwargs)`

Map a DAGCircuit onto a coupling\_map adding swap gates.

Uses a randomized algorithm.

## Notes

1.  Measurements may occur and be followed by swaps that result in repeated measurement of the same qubit. Near-term experiments cannot implement these circuits, so some care is required when using this mapper with experimental backend targets.
2.  We do not use the fact that the input state is zero to simplify the circuit.

StochasticSwap initializer.

The coupling map is a connected graph

If these are not satisfied, the behavior is undefined.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.
*   **trials** (*int*) – maximum number of iterations to attempt
*   **seed** (*int*) – seed for random number generator

<span id="undefined" />

`__init__(coupling_map, trials=20, seed=None)`

StochasticSwap initializer.

The coupling map is a connected graph

If these are not satisfied, the behavior is undefined.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.
*   **trials** (*int*) – maximum number of iterations to attempt
*   **seed** (*int*) – seed for random number generator

## Methods

|                                                                                                                                                    |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.StochasticSwap.__init__ "qiskit.transpiler.passes.StochasticSwap.__init__")(coupling\_map\[, trials, seed]) | StochasticSwap initializer.         |
| [`name`](#qiskit.transpiler.passes.StochasticSwap.name "qiskit.transpiler.passes.StochasticSwap.name")()                                           | Return the name of the pass.        |
| [`run`](#qiskit.transpiler.passes.StochasticSwap.run "qiskit.transpiler.passes.StochasticSwap.run")(dag)                                           | Run the StochasticSwap pass on dag. |

## Attributes

|                                                                                                                                                              |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.StochasticSwap.is_analysis_pass "qiskit.transpiler.passes.StochasticSwap.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.StochasticSwap.is_transformation_pass "qiskit.transpiler.passes.StochasticSwap.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the StochasticSwap pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the coupling map or the layout are not
*   **compatible with the DAG** –
