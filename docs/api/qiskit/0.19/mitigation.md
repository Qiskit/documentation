---
title: mitigation
description: API reference for qiskit.ignis.mitigation
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.ignis.mitigation
---

<span id="module-qiskit.ignis.mitigation" />

<span id="qiskit-ignis-mitigation" />

# Mitigation

<span id="module-qiskit.ignis.mitigation" />

`qiskit.ignis.mitigation`

## Measurement

The measurement calibration is used to mitigate measurement errors. The main idea is to prepare all $2^n$ basis input states and compute the probability of measuring counts in the other basis states. From these calibrations, it is possible to correct the average results of another experiment of interest.

|                                                                                                                                               |                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`complete_meas_cal`](qiskit.ignis.mitigation.complete_meas_cal "qiskit.ignis.mitigation.complete_meas_cal")(\[qubit\_list, qr, cr, …])       | Return a list of measurement calibration circuits for the full Hilbert space. |
| [`tensored_meas_cal`](qiskit.ignis.mitigation.tensored_meas_cal "qiskit.ignis.mitigation.tensored_meas_cal")(\[mit\_pattern, qr, cr, …])      | Return a list of calibration circuits                                         |
| [`MeasurementFilter`](qiskit.ignis.mitigation.MeasurementFilter "qiskit.ignis.mitigation.MeasurementFilter")(cal\_matrix, state\_labels)      | Measurement error mitigation filter.                                          |
| [`TensoredFilter`](qiskit.ignis.mitigation.TensoredFilter "qiskit.ignis.mitigation.TensoredFilter")(cal\_matrices, …)                         | Tensored measurement error mitigation filter.                                 |
| [`CompleteMeasFitter`](qiskit.ignis.mitigation.CompleteMeasFitter "qiskit.ignis.mitigation.CompleteMeasFitter")(results, state\_labels\[, …]) | Measurement correction fitter for a full calibration                          |
| [`TensoredMeasFitter`](qiskit.ignis.mitigation.TensoredMeasFitter "qiskit.ignis.mitigation.TensoredMeasFitter")(results, mit\_pattern\[, …])  | Measurement correction fitter for a tensored calibration.                     |

