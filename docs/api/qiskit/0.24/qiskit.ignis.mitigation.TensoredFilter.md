---
title: TensoredFilter
description: API reference for qiskit.ignis.mitigation.TensoredFilter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.TensoredFilter
---

<span id="qiskit-ignis-mitigation-tensoredfilter" />

# qiskit.ignis.mitigation.TensoredFilter

<span id="qiskit.ignis.mitigation.TensoredFilter" />

`TensoredFilter(cal_matrices, substate_labels_list)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.5/qiskit/ignis/mitigation/measurement/filters.py "view source code")

Tensored measurement error mitigation filter.

Produced from a tensored measurement calibration fitter and can be applied to data.

Initialize a tensored measurement error mitigation filter using the cal\_matrices from a tensored measurement calibration fitter.

**Parameters**

*   **cal\_matrices** (`matrix`) – the calibration matrices for applying the correction.
*   **substate\_labels\_list** (`list`) – for each calibration matrix a list of the states (as strings, states in the subspace)

### \_\_init\_\_

<span id="qiskit.ignis.mitigation.TensoredFilter.__init__" />

`__init__(cal_matrices, substate_labels_list)`

Initialize a tensored measurement error mitigation filter using the cal\_matrices from a tensored measurement calibration fitter.

**Parameters**

*   **cal\_matrices** (`matrix`) – the calibration matrices for applying the correction.
*   **substate\_labels\_list** (`list`) – for each calibration matrix a list of the states (as strings, states in the subspace)

## Methods

|                                                                                                                                                         |                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.mitigation.TensoredFilter.__init__ "qiskit.ignis.mitigation.TensoredFilter.__init__")(cal\_matrices, substate\_labels\_list) | Initialize a tensored measurement error mitigation filter using the cal\_matrices from a tensored measurement calibration fitter. |
| [`apply`](#qiskit.ignis.mitigation.TensoredFilter.apply "qiskit.ignis.mitigation.TensoredFilter.apply")(raw\_data\[, method])                           | Apply the calibration matrices to results.                                                                                        |

## Attributes

|                                                                                                                                                      |                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`cal_matrices`](#qiskit.ignis.mitigation.TensoredFilter.cal_matrices "qiskit.ignis.mitigation.TensoredFilter.cal_matrices")                         | Return cal\_matrices.           |
| [`nqubits`](#qiskit.ignis.mitigation.TensoredFilter.nqubits "qiskit.ignis.mitigation.TensoredFilter.nqubits")                                        | Return the number of qubits.    |
| [`qubit_list_sizes`](#qiskit.ignis.mitigation.TensoredFilter.qubit_list_sizes "qiskit.ignis.mitigation.TensoredFilter.qubit_list_sizes")             | Return \_qubit\_list\_sizes.    |
| [`substate_labels_list`](#qiskit.ignis.mitigation.TensoredFilter.substate_labels_list "qiskit.ignis.mitigation.TensoredFilter.substate_labels_list") | Return \_substate\_labels\_list |

### apply

<span id="qiskit.ignis.mitigation.TensoredFilter.apply" />

`apply(raw_data, method='least_squares')`

Apply the calibration matrices to results.

**Parameters**

*   **raw\_data** (*dict or* [*Result*](qiskit.result.Result "qiskit.result.Result")) –

    The data to be corrected. Can be in one of two forms:

    *   A counts dictionary from results.get\_counts
    *   A Qiskit Result

*   **method** (*str*) –

    fitting method. The following methods are supported:

    *   ’pseudo\_inverse’: direct inversion of the cal matrices.
    *   ’least\_squares’: constrained to have physical probabilities.
    *   If None, ‘least\_squares’ is used.

**Returns**

The corrected data in the same form as raw\_data

**Return type**

dict or [Result](qiskit.result.Result "qiskit.result.Result")

**Raises**

**QiskitError** – if raw\_data is not in a one of the defined forms.

### cal\_matrices

<span id="qiskit.ignis.mitigation.TensoredFilter.cal_matrices" />

`property cal_matrices`

Return cal\_matrices.

### nqubits

<span id="qiskit.ignis.mitigation.TensoredFilter.nqubits" />

`property nqubits`

Return the number of qubits. See also MeasurementFilter.apply()

### qubit\_list\_sizes

<span id="qiskit.ignis.mitigation.TensoredFilter.qubit_list_sizes" />

`property qubit_list_sizes`

Return \_qubit\_list\_sizes.

### substate\_labels\_list

<span id="qiskit.ignis.mitigation.TensoredFilter.substate_labels_list" />

`property substate_labels_list`

Return \_substate\_labels\_list

