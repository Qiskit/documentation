# qiskit.algorithms.LinearSolverResult

<span id="undefined" />

`LinearSolverResult`

A base class for linear systems results.

The linear systems algorithms return an object of the type `LinearSystemsResult` with the information about the solution obtained.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                   |                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.LinearSolverResult.__init__ "qiskit.algorithms.LinearSolverResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.LinearSolverResult.combine "qiskit.algorithms.LinearSolverResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                   |                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`circuit_results`](#qiskit.algorithms.LinearSolverResult.circuit_results "qiskit.algorithms.LinearSolverResult.circuit_results") | return the results from the circuits                                             |
| [`euclidean_norm`](#qiskit.algorithms.LinearSolverResult.euclidean_norm "qiskit.algorithms.LinearSolverResult.euclidean_norm")    | return the euclidean norm if the algorithm knows how to calculate it             |
| [`observable`](#qiskit.algorithms.LinearSolverResult.observable "qiskit.algorithms.LinearSolverResult.observable")                | return the (list of) calculated observable(s)                                    |
| [`state`](#qiskit.algorithms.LinearSolverResult.state "qiskit.algorithms.LinearSolverResult.state")                               | return either the circuit that prepares the solution or the solution as a vector |

<span id="undefined" />

`property circuit_results`

return the results from the circuits

**Return type**

`Union`\[`List`\[`float`], `List`\[`Result`]]

<span id="undefined" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

<span id="undefined" />

`property euclidean_norm`

return the euclidean norm if the algorithm knows how to calculate it

**Return type**

`float`

<span id="undefined" />

`property observable`

return the (list of) calculated observable(s)

**Return type**

`Union`\[`float`, `List`\[`float`]]

<span id="undefined" />

`property state`

return either the circuit that prepares the solution or the solution as a vector

**Return type**

`Union`\[`QuantumCircuit`, `ndarray`]
