# MeasurementFilter

<span id="undefined" />

`MeasurementFilter(cal_matrix, state_labels)`

Bases: `object`

Measurement error mitigation filter.

Produced from a measurement calibration fitter and can be applied to data.

Initialize a measurement error mitigation filter using the cal\_matrix from a measurement calibration fitter.

**Parameters**

*   **cal\_matrix** (`matrix`) – the calibration matrix for applying the correction
*   **state\_labels** (`list`) – the states for the ordering of the cal matrix

## Methods

|                                                                                                                                                              |                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [`apply`](qiskit.ignis.mitigation.MeasurementFilter.apply#qiskit.ignis.mitigation.MeasurementFilter.apply "qiskit.ignis.mitigation.MeasurementFilter.apply") | Apply the calibration matrix to results. |

## Attributes

<span id="undefined" />

### cal\_matrix

Return cal\_matrix.

<span id="undefined" />

### state\_labels

return the state label ordering of the cal matrix
