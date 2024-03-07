---
title: ResilienceOptionsV2
description: API reference for qiskit_ibm_runtime.options.ResilienceOptionsV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.options.ResilienceOptionsV2
---

# ResilienceOptionsV2

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2" />

`ResilienceOptionsV2(*args, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.21/qiskit_ibm_runtime/options/resilience_options.py#L38-L101 "view source code")

Resilience options for V2 Estimator.

**Parameters**

*   **measure\_mitigation** – Whether to enable measurement error mitigation method. Further suboptions are available in [`measure_noise_learning`](#qiskit_ibm_runtime.options.ResilienceOptionsV2.measure_noise_learning "qiskit_ibm_runtime.options.ResilienceOptionsV2.measure_noise_learning"). Default: True.
*   **measure\_noise\_learning** – Additional measurement noise learning options. See [`MeasureNoiseLearningOptions`](qiskit_ibm_runtime.options.MeasureNoiseLearningOptions "qiskit_ibm_runtime.options.MeasureNoiseLearningOptions") for all options.
*   **zne\_mitigation** – Whether to turn on Zero Noise Extrapolation error mitigation method. Further suboptions are available in [`zne`](#qiskit_ibm_runtime.options.ResilienceOptionsV2.zne "qiskit_ibm_runtime.options.ResilienceOptionsV2.zne"). Default: False.
*   **zne** – Additional zero noise extrapolation mitigation options. See [`ZneOptions`](qiskit_ibm_runtime.options.ZneOptions "qiskit_ibm_runtime.options.ZneOptions") for all options.
*   **pec\_mitigation** – Whether to turn on Probabilistic Error Cancellation error mitigation method. Further suboptions are available in [`pec`](#qiskit_ibm_runtime.options.ResilienceOptionsV2.pec "qiskit_ibm_runtime.options.ResilienceOptionsV2.pec"). Default: False.
*   **pec** – Additional probabalistic error cancellation mitigation options. See [`PecOptions`](qiskit_ibm_runtime.options.PecOptions "qiskit_ibm_runtime.options.PecOptions") for all options.
*   **layer\_noise\_learning** – Layer noise learning options. See [`LayerNoiseLearningOptions`](qiskit_ibm_runtime.options.LayerNoiseLearningOptions "qiskit_ibm_runtime.options.LayerNoiseLearningOptions") for all options.

## Attributes

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.layer_noise_learning" />

### layer\_noise\_learning

`LayerNoiseLearningOptions | Dict`

`= FieldInfo(annotation=Union[LayerNoiseLearningOptions, Dict], required=False, default_factory=LayerNoiseLearningOptions)`

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.measure_mitigation" />

### measure\_mitigation

`UnsetType | bool`

`= Unset`

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.measure_noise_learning" />

### measure\_noise\_learning

`MeasureNoiseLearningOptions | Dict`

`= FieldInfo(annotation=Union[MeasureNoiseLearningOptions, Dict], required=False, default_factory=MeasureNoiseLearningOptions)`

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.pec" />

### pec

`PecOptions | Dict`

`= FieldInfo(annotation=Union[PecOptions, Dict], required=False, default_factory=PecOptions)`

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.pec_mitigation" />

### pec\_mitigation

`UnsetType | bool`

`= Unset`

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.zne" />

### zne

`ZneOptions | Dict`

`= FieldInfo(annotation=Union[ZneOptions, Dict], required=False, default_factory=ZneOptions)`

<span id="qiskit_ibm_runtime.options.ResilienceOptionsV2.zne_mitigation" />

### zne\_mitigation

`UnsetType | bool`

`= Unset`

## Methods

