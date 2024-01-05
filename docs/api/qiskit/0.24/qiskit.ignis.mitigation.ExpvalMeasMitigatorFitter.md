---
title: ExpvalMeasMitigatorFitter
description: API reference for qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter
---

<span id="qiskit-ignis-mitigation-expvalmeasmitigatorfitter" />

# qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter" />

`ExpvalMeasMitigatorFitter(result, metadata)`

Expectation value measurement error mitigator calibration fitter.

See [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") for additional documentation.

Fit a measurement error mitigator object from experiment data.

**Parameters**

*   **result** (`Result`) – Qiskit result object.
*   **metadata** (`List`\[`Dict`\[`str`, `any`]]) – mitigation generator metadata.

### \_\_init\_\_

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.__init__" />

`__init__(result, metadata)`

Fit a measurement error mitigator object from experiment data.

**Parameters**

*   **result** (`Result`) – Qiskit result object.
*   **metadata** (`List`\[`Dict`\[`str`, `any`]]) – mitigation generator metadata.

## Methods

## Attributes

### fit

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit" />

`fit(method=None, generators=None)`

Fit and return the Mitigator object from the calibration data.

**Return type**

`Union`\[`CompleteExpvalMeasMitigator`, `TensoredExpvalMeasMitigator`, `CTMPExpvalMeasMitigator`]

### mitigator

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.mitigator" />

`property mitigator`

Return the fitted mitigator object

