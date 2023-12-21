# qiskit.algorithms.AmplitudeEstimation.evaluate\_measurements

`AmplitudeEstimation.evaluate_measurements(circuit_results, threshold=1e-06)`

Evaluate the results from the circuit simulation.

Given the probabilities from statevector simulation of the QAE circuit, compute the probabilities that the measurements y/gridpoints a are the best estimate.

**Parameters**

*   **circuit\_results** (`Union`\[`Dict`\[`str`, `int`], `ndarray`]) – The circuit result from the QAE circuit. Can be either a counts dict or a statevector.
*   **threshold** (`float`) – Measurements with probabilities below the threshold are discarded.

**Return type**

`Tuple`\[`Dict`\[`int`, `float`], `Dict`\[`float`, `float`]]

**Returns**

**Dictionaries containing the a gridpoints with respective probabilities and**

y measurements with respective probabilities, in this order.
