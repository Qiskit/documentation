---
title: AmplitudeEstimator
description: API reference for qiskit.algorithms.AmplitudeEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimator
---

# qiskit.algorithms.AmplitudeEstimator

<span id="qiskit.algorithms.AmplitudeEstimator" />

`AmplitudeEstimator`

The Amplitude Estimation interface.

### \_\_init\_\_

<span id="qiskit.algorithms.AmplitudeEstimator.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### estimate

<span id="qiskit.algorithms.AmplitudeEstimator.estimate" />

`abstract estimate(estimation_problem)`

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** (`EstimationProblem`) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

`AmplitudeEstimatorResult`

