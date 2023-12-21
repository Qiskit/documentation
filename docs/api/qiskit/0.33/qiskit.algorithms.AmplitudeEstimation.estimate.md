# qiskit.algorithms.AmplitudeEstimation.estimate

`AmplitudeEstimation.estimate(estimation_problem)`

Run the amplitude estimation algorithm on provided estimation problem.

**Parameters**

**estimation\_problem** (`EstimationProblem`) – The estimation problem.

**Return type**

`AmplitudeEstimationResult`

**Returns**

An amplitude estimation results object.

**Raises**

**ValueError** – If state\_preparation or objective\_qubits are not set in the estimation\_problem.
