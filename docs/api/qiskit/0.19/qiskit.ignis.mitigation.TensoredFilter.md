---
title: TensoredFilter
description: API reference for qiskit.ignis.mitigation.TensoredFilter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.TensoredFilter
---

# TensoredFilter

<span id="qiskit.ignis.mitigation.TensoredFilter" />

`TensoredFilter(cal_matrices, substate_labels_list)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/mitigation/measurement/filters.py "view source code")

Tensored measurement error mitigation filter.

Produced from a tensored measurement calibration fitter and can be applied to data.

Initialize a tensored measurement error mitigation filter using the cal\_matrices from a tensored measurement calibration fitter.

**Parameters**

*   **cal\_matrices** (`matrix`) – the calibration matrices for applying the correction.
*   **substate\_labels\_list** (`list`) – for each calibration matrix a list of the states (as strings, states in the subspace)

## Attributes

### cal\_matrices

Return cal\_matrices.

### nqubits

Return the number of qubits. See also MeasurementFilter.apply()

### qubit\_list\_sizes

Return \_qubit\_list\_sizes.

### substate\_labels\_list

Return \_substate\_labels\_list

## Methods

### apply

<span id="qiskit.ignis.mitigation.TensoredFilter.apply" />

`TensoredFilter.apply(raw_data, method='least_squares')`

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

