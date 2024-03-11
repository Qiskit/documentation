---
title: AmplitudeAmplifier
description: API reference for qiskit.algorithms.AmplitudeAmplifier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeAmplifier
---

# AmplitudeAmplifier

<span id="qiskit.algorithms.AmplitudeAmplifier" />

`AmplitudeAmplifier` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/algorithms/amplitude_amplifiers/amplitude_amplifier.py "view source code")

Bases: `ABC`

The interface for amplification algorithms.

## Methods

<span id="qiskit-algorithms-amplitudeamplifier-amplify" />

### amplify

<span id="qiskit.algorithms.AmplitudeAmplifier.amplify" />

`abstract AmplitudeAmplifier.amplify(amplification_problem)`

Run the amplification algorithm.

**Parameters**

**amplification\_problem** ([*AmplificationProblem*](qiskit.algorithms.AmplificationProblem "qiskit.algorithms.amplitude_amplifiers.amplification_problem.AmplificationProblem")) – The amplification problem.

**Returns**

The result as a `AmplificationResult`, where e.g. the most likely state can be queried as `result.top_measurement`.

**Return type**

AmplitudeAmplifierResult

