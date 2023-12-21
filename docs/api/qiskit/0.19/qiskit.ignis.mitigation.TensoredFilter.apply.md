---
title: apply
description: API reference for qiskit.ignis.mitigation.TensoredFilter.apply
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.mitigation.TensoredFilter.apply
---

# apply

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

