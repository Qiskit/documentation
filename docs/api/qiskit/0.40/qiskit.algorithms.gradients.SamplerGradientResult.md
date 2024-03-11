---
title: SamplerGradientResult
description: API reference for qiskit.algorithms.gradients.SamplerGradientResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.SamplerGradientResult
---

# SamplerGradientResult

<span id="qiskit.algorithms.gradients.SamplerGradientResult" />

`SamplerGradientResult(gradients, metadata, options)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/gradients/sampler_gradient_result.py "view source code")

Bases: `object`

Result of SamplerGradient.

## Attributes

<span id="qiskit.algorithms.gradients.SamplerGradientResult.gradients" />

### gradients

`list[list[dict[int, float]]]`

The gradients of the sample probabilities.

<span id="qiskit.algorithms.gradients.SamplerGradientResult.metadata" />

### metadata

`list[dict[str, Any]]`

Additional information about the job.

<span id="qiskit.algorithms.gradients.SamplerGradientResult.options" />

### options

`Options`

Primitive runtime options for the execution of the job.

