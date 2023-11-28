# LinearSolverResult

<span id="undefined" />

`LinearSolverResult`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

A base class for linear systems results.

The linear systems algorithms return an object of the type `LinearSystemsResult` with the information about the solution obtained.

## Methods

|                                                                                                                                                       |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.LinearSolverResult.combine#qiskit.algorithms.LinearSolverResult.combine "qiskit.algorithms.LinearSolverResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

<span id="undefined" />

### circuit\_results

return the results from the circuits

**Return type**

`Union`\[`List`\[`float`], `List`\[`Result`]]

<span id="undefined" />

### euclidean\_norm

return the euclidean norm if the algorithm knows how to calculate it

**Return type**

`float`

<span id="undefined" />

### observable

return the (list of) calculated observable(s)

**Return type**

`Union`\[`float`, `List`\[`float`]]

<span id="undefined" />

### state

return either the circuit that prepares the solution or the solution as a vector

**Return type**

`Union`\[`QuantumCircuit`, `ndarray`]
