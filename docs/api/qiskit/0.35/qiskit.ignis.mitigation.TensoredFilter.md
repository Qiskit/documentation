# TensoredFilter

<span id="undefined" />

`TensoredFilter(cal_matrices, substate_labels_list, mit_pattern)`

Bases: `object`

Tensored measurement error mitigation filter.

Produced from a tensored measurement calibration fitter and can be applied to data.

Initialize a tensored measurement error mitigation filter using the cal\_matrices from a tensored measurement calibration fitter. A simple usage this class is explained \[here] ([https://qiskit.org/documentation/tutorials/noise/3\_measurement\_error\_mitigation.html](https://qiskit.org/documentation/tutorials/noise/3_measurement_error_mitigation.html)).

**Parameters**

*   **cal\_matrices** (`matrix`) – the calibration matrices for applying the correction.
*   **substate\_labels\_list** (`list`) – for each calibration matrix a list of the states (as strings, states in the subspace)
*   **mit\_pattern** (`list`) – for each calibration matrix a list of the logical qubit indices (as int, states in the subspace)

## Methods

|                                                                                                                                                                                                                                 |                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`apply`](qiskit.ignis.mitigation.TensoredFilter.apply#qiskit.ignis.mitigation.TensoredFilter.apply "qiskit.ignis.mitigation.TensoredFilter.apply")                                                                             | Apply the calibration matrices to results.                                          |
| [`compute_index_of_cal_mat`](qiskit.ignis.mitigation.TensoredFilter.compute_index_of_cal_mat#qiskit.ignis.mitigation.TensoredFilter.compute_index_of_cal_mat "qiskit.ignis.mitigation.TensoredFilter.compute_index_of_cal_mat") | Return the index of (pseudo inverse) calibration matrix for the input quantum state |
| [`flip_state`](qiskit.ignis.mitigation.TensoredFilter.flip_state#qiskit.ignis.mitigation.TensoredFilter.flip_state "qiskit.ignis.mitigation.TensoredFilter.flip_state")                                                         | Flip the state according to the chosen qubit positions                              |

## Attributes

<span id="undefined" />

### cal\_matrices

Return cal\_matrices.

<span id="undefined" />

### nqubits

Return the number of qubits. See also MeasurementFilter.apply()

<span id="undefined" />

### qubit\_list\_sizes

Return \_qubit\_list\_sizes.

<span id="undefined" />

### substate\_labels\_list

Return \_substate\_labels\_list
