# qiskit.algorithms.MaximumLikelihoodAmplitudeEstimation.compute\_mle

`MaximumLikelihoodAmplitudeEstimation.compute_mle(circuit_results, estimation_problem, num_state_qubits=None, return_counts=False)`

Compute the MLE via a grid-search.

This is a stable approach if sufficient gridpoints are used.

**Parameters**

*   **circuit\_results** (`Union`\[`List`\[`Dict`\[`str`, `int`]], `List`\[`ndarray`]]) – A list of circuit outcomes. Can be counts or statevectors.
*   **estimation\_problem** (`EstimationProblem`) – The estimation problem containing the evaluation schedule and the number of likelihood function evaluations used to find the minimum.
*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of state qubits, required for statevector simulations.
*   **return\_counts** (`bool`) – If True, returns the good counts.

**Return type**

`Union`\[`float`, `Tuple`\[`float`, `List`\[`float`]]]

**Returns**

The MLE for the provided result object.
