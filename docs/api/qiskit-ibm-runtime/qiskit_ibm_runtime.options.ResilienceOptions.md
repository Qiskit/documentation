---
title: ResilienceOptions
description: API reference for qiskit_ibm_runtime.options.ResilienceOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.ResilienceOptions
---

# ResilienceOptions

<span id="qiskit_ibm_runtime.options.ResilienceOptions" />

`ResilienceOptions(noise_amplifier=None, noise_factors=None, extrapolator=None)`[GitHub](https://github.com/qiskit/qiskit-ibm-runtime/tree/stable/0.17/qiskit_ibm_runtime/options/resilience_options.py "view source code")

Resilience options.

**Parameters**

*   **noise\_factors** (`Optional`\[`Sequence`\[`float`]]) – An list of real valued noise factors that determine by what amount the circuits’ noise is amplified. Only applicable for `resilience_level=2`. Default: `None`, and (1, 3, 5) if resilience level is 2.
*   **noise\_amplifier** (*DEPRECATED*) – A noise amplification strategy. Currently only
*   **resilience\_level=2.** (*"LocalFoldingAmplifier" is supported Only applicable for*) – Default: “LocalFoldingAmplifier”.
*   **extrapolator** (`Optional`\[`Literal`\[‘LinearExtrapolator’, ‘QuadraticExtrapolator’, ‘CubicExtrapolator’, ‘QuarticExtrapolator’]]) – An extrapolation strategy. One of `"LinearExtrapolator"`, `"QuadraticExtrapolator"`, `"CubicExtrapolator"`, `"QuarticExtrapolator"`. Note that `"CubicExtrapolator"` and `"QuarticExtrapolator"` require more noise factors than the default. Only applicable for `resilience_level=2`. Default: `None`, and `LinearExtrapolator` if resilience level is 2.

## Attributes

<span id="qiskit_ibm_runtime.options.ResilienceOptions.extrapolator" />

### extrapolator

`Literal['LinearExtrapolator', 'QuadraticExtrapolator', 'CubicExtrapolator', 'QuarticExtrapolator']`

`= None`

<span id="qiskit_ibm_runtime.options.ResilienceOptions.noise_amplifier" />

### noise\_amplifier

`Literal['LocalFoldingAmplifier']`

`= None`

<span id="qiskit_ibm_runtime.options.ResilienceOptions.noise_factors" />

### noise\_factors

`Sequence[float]`

`= None`

## Methods

### validate\_resilience\_options

<span id="qiskit_ibm_runtime.options.ResilienceOptions.validate_resilience_options" />

`static validate_resilience_options(resilience_options)`

Validate that resilience options are legal. :raises ValueError: if any resilience option is not supported :raises ValueError: if noise\_amplifier is not in NoiseAmplifierType. :raises ValueError: if extrapolator is not in ExtrapolatorType. :raises ValueError: if extrapolator == “QuarticExtrapolator” and number of noise\_factors \< 5. :raises ValueError: if extrapolator == “CubicExtrapolator” and number of noise\_factors \< 4.

**Return type**

`None`

