# qiskit.algorithms.AmplitudeEstimator

<span id="undefined" />

`AmplitudeEstimator`

The Amplitude Estimation interface.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                   |                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`__init__`](#qiskit.algorithms.AmplitudeEstimator.__init__ "qiskit.algorithms.AmplitudeEstimator.__init__")()                    | Initialize self.                        |
| [`estimate`](#qiskit.algorithms.AmplitudeEstimator.estimate "qiskit.algorithms.AmplitudeEstimator.estimate")(estimation\_problem) | Run the amplitude estimation algorithm. |

<span id="undefined" />

`abstract estimate(estimation_problem)`

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** (`EstimationProblem`) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

`AmplitudeEstimatorResult`
