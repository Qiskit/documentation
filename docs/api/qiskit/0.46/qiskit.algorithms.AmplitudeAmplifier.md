---
title: AmplitudeAmplifier
description: API reference for qiskit.algorithms.AmplitudeAmplifier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeAmplifier
---

# AmplitudeAmplifier

<span id="qiskit.algorithms.AmplitudeAmplifier" />

`qiskit.algorithms.AmplitudeAmplifier` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/algorithms/amplitude_amplifiers/amplitude_amplifier.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

The interface for amplification algorithms.

## Methods

### amplify

<span id="qiskit.algorithms.AmplitudeAmplifier.amplify" />

`abstract amplify(amplification_problem)`

Run the amplification algorithm.

**Parameters**

**amplification\_problem** ([*AmplificationProblem*](qiskit.algorithms.AmplificationProblem "qiskit.algorithms.amplitude_amplifiers.amplification_problem.AmplificationProblem")) – The amplification problem.

**Returns**

The result as a `AmplificationResult`, where e.g. the most likely state can be queried as `result.top_measurement`.

**Return type**

*AmplitudeAmplifierResult*

