---
title: MeasureNoiseLearningOptions
description: API reference for qiskit_ibm_runtime.options.MeasureNoiseLearningOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.MeasureNoiseLearningOptions
---

# MeasureNoiseLearningOptions

<span id="qiskit_ibm_runtime.options.MeasureNoiseLearningOptions" />

`MeasureNoiseLearningOptions(*args, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/main/qiskit_ibm_runtime/options/measure_noise_learning_options.py#L20-L40 "view source code")

Options for measurement noise learning.

<Admonition title="Note" type="note">
  These options are only used when the resilience level or options specify a technique that requires measurement noise learning.
</Admonition>

**Parameters**

*   **num\_randomizations** – The number of random circuits to draw for the measurement learning experiment. Default: 32.
*   **shots\_per\_randomization** – The number of shots to use for the learning experiment per random circuit. If “auto”, the value will be chosen automatically based on the input PUBs. Default: “auto”.

## Attributes

<span id="qiskit_ibm_runtime.options.MeasureNoiseLearningOptions.num_randomizations" />

### num\_randomizations

`UnsetType | int`

`= Unset`

<span id="qiskit_ibm_runtime.options.MeasureNoiseLearningOptions.shots_per_randomization" />

### shots\_per\_randomization

`UnsetType | int | Literal['auto']`

`= Unset`

## Methods

