---
title: ResilienceOptions
description: API reference for qiskit_ibm_runtime.options.ResilienceOptions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.ResilienceOptions
---

# ResilienceOptions

<span id="qiskit_ibm_runtime.options.ResilienceOptions" />

`ResilienceOptions(noise_amplifier='TwoQubitAmplifier', noise_factors=(1, 3, 5), extrapolator='LinearExtrapolator')`

Resilience options.

**Parameters**

*   **noise\_factors** (`Sequence`\[`float`]) – An list of real valued noise factors that determine by what amount the circuits’ noise is amplified. Only applicable for `resilience_level=2`. Default: (1, 3, 5).
*   **noise\_amplifier** (`Literal`\[‘TwoQubitAmplifier’, ‘GlobalFoldingAmplifier’, ‘LocalFoldingAmplifier’, ‘CxAmplifier’]) – A noise amplification strategy. One of `"TwoQubitAmplifier"`, `"GlobalFoldingAmplifier"`, `"LocalFoldingAmplifier"`, `"CxAmplifier"`. Only applicable for `resilience_level=2`. Default: “TwoQubitAmplifier”.
*   **extrapolator** (`Literal`\[‘LinearExtrapolator’, ‘QuadraticExtrapolator’, ‘CubicExtrapolator’, ‘QuarticExtrapolator’]) – An extrapolation strategy. One of `"LinearExtrapolator"`, `"QuadraticExtrapolator"`, `"CubicExtrapolator"`, `"QuarticExtrapolator"`. Note that `"CubicExtrapolator"` and `"QuarticExtrapolator"` require more noise factors than the default. Only applicable for `resilience_level=2`. Default: “LinearExtrapolator”.

## Attributes

<span id="resilienceoptions-extrapolator" />

### extrapolator

<span id="qiskit_ibm_runtime.options.ResilienceOptions.extrapolator" />

`Literal['LinearExtrapolator', 'QuadraticExtrapolator', 'CubicExtrapolator', 'QuarticExtrapolator'] = 'LinearExtrapolator'`

<span id="resilienceoptions-noise-amplifier" />

### noise\_amplifier

<span id="qiskit_ibm_runtime.options.ResilienceOptions.noise_amplifier" />

`Literal['TwoQubitAmplifier', 'GlobalFoldingAmplifier', 'LocalFoldingAmplifier', 'CxAmplifier'] = 'TwoQubitAmplifier'`

<span id="resilienceoptions-noise-factors" />

### noise\_factors

<span id="qiskit_ibm_runtime.options.ResilienceOptions.noise_factors" />

`Sequence[float] = (1, 3, 5)`

## Methods

<span id="resilienceoptions-validate-resilience-options" />

### validate\_resilience\_options

<span id="qiskit_ibm_runtime.options.ResilienceOptions.validate_resilience_options" />

`static ResilienceOptions.validate_resilience_options(resilience_options)`

Validate that resilience options are legal. :raises ValueError: if noise\_amplifier is not in NoiseAmplifierType. :raises ValueError: if extrapolator is not in ExtrapolatorType. :raises ValueError: if extrapolator == “QuarticExtrapolator” and number of noise\_factors \< 5. :raises ValueError: if extrapolator == “CubicExtrapolator” and number of noise\_factors \< 4.

**Return type**

`None`

