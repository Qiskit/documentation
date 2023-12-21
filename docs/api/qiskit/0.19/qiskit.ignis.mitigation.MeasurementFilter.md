---
title: MeasurementFilter
description: API reference for qiskit.ignis.mitigation.MeasurementFilter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.MeasurementFilter
---

# MeasurementFilter

<span id="qiskit.ignis.mitigation.MeasurementFilter" />

`MeasurementFilter(cal_matrix, state_labels)`

Measurement error mitigation filter.

Produced from a measurement calibration fitter and can be applied to data.

Initialize a measurement error mitigation filter using the cal\_matrix from a measurement calibration fitter.

**Parameters**

*   **cal\_matrix** (`matrix`) – the calibration matrix for applying the correction
*   **state\_labels** (`list`) – the states for the ordering of the cal matrix

## Attributes

|                                                                                                                                                     |                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`MeasurementFilter.cal_matrix`](qiskit.ignis.mitigation.MeasurementFilter.cal_matrix "qiskit.ignis.mitigation.MeasurementFilter.cal_matrix")       | Return cal\_matrix.                               |
| [`MeasurementFilter.state_labels`](qiskit.ignis.mitigation.MeasurementFilter.state_labels "qiskit.ignis.mitigation.MeasurementFilter.state_labels") | return the state label ordering of the cal matrix |

## Methods

|                                                                                                                                                      |                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`MeasurementFilter.apply`](qiskit.ignis.mitigation.MeasurementFilter.apply "qiskit.ignis.mitigation.MeasurementFilter.apply")(raw\_data\[, method]) | Apply the calibration matrix to results. |

