# StochasticSwap[¶](#stochasticswap "Permalink to this headline")

<span id="undefined" />

`StochasticSwap(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

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
*   **fake\_run** (*bool*) – if true, it only pretend to do routing, i.e., no swap is effectively added.

## Methods

|                                                                                                                                                    |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`name`](qiskit.transpiler.passes.StochasticSwap.name#qiskit.transpiler.passes.StochasticSwap.name "qiskit.transpiler.passes.StochasticSwap.name") | Return the name of the pass.        |
| [`run`](qiskit.transpiler.passes.StochasticSwap.run#qiskit.transpiler.passes.StochasticSwap.run "qiskit.transpiler.passes.StochasticSwap.run")     | Run the StochasticSwap pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
