# qiskit.algorithms.Grover.amplify

`Grover.amplify(amplification_problem)`

Run the Grover algorithm.

**Parameters**

**amplification\_problem** (`AmplificationProblem`) – The amplification problem.

**Return type**

`GroverResult`

**Returns**

The result as a `GroverResult`, where e.g. the most likely state can be queried as `result.top_measurement`.
