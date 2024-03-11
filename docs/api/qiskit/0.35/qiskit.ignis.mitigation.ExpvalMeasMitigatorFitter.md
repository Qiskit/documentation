---
title: ExpvalMeasMitigatorFitter
description: API reference for qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter
---

# ExpvalMeasMitigatorFitter

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter" />

`ExpvalMeasMitigatorFitter(result, metadata)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/mitigation/expval/fitter.py "view source code")

Bases: `object`

Expectation value measurement error mitigator calibration fitter.

See [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") for additional documentation.

Fit a measurement error mitigator object from experiment data.

**Parameters**

*   **result** (`Result`) – Qiskit result object.
*   **metadata** (`List`\[`Dict`\[`str`, `any`]]) – mitigation generator metadata.

## Methods

### fit

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit" />

`ExpvalMeasMitigatorFitter.fit(method=None, generators=None)`

Fit and return the Mitigator object from the calibration data.

**Return type**

`Union`\[`CompleteExpvalMeasMitigator`, `TensoredExpvalMeasMitigator`, `CTMPExpvalMeasMitigator`]

## Attributes

<span id="qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.mitigator" />

### mitigator

Return the fitted mitigator object

