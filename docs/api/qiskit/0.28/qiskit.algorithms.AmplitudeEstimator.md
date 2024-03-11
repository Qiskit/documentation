---
title: AmplitudeEstimator
description: API reference for qiskit.algorithms.AmplitudeEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimator
---

# qiskit.algorithms.AmplitudeEstimator

<span id="qiskit.algorithms.AmplitudeEstimator" />

`AmplitudeEstimator` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/amplitude_estimators/amplitude_estimator.py "view source code")

The Amplitude Estimation interface.

### \_\_init\_\_

<span id="qiskit.algorithms.AmplitudeEstimator.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                   |                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`__init__`](#qiskit.algorithms.AmplitudeEstimator.__init__ "qiskit.algorithms.AmplitudeEstimator.__init__")()                    | Initialize self.                        |
| [`estimate`](#qiskit.algorithms.AmplitudeEstimator.estimate "qiskit.algorithms.AmplitudeEstimator.estimate")(estimation\_problem) | Run the amplitude estimation algorithm. |

### estimate

<span id="qiskit.algorithms.AmplitudeEstimator.estimate" />

`abstract estimate(estimation_problem)`

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** (`EstimationProblem`) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

`AmplitudeEstimatorResult`

