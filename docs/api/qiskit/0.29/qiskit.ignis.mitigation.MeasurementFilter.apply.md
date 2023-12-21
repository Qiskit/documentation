# qiskit.ignis.mitigation.MeasurementFilter.apply

`MeasurementFilter.apply(raw_data, method='least_squares')`

Apply the calibration matrix to results.

**Parameters**

*   **raw\_data** (*dict or list*) –

    The data to be corrected. Can be in a number of forms:

    Form 1: a counts dictionary from results.get\_counts

    Form 2: a list of counts of length==len(state\_labels)

    Form 3: a list of counts of length==M\*len(state\_labels) where M is an integer (e.g. for use with the tomography data)

    Form 4: a qiskit Result

*   **method** (*str*) –

    fitting method. If None, then least\_squares is used.

    `pseudo_inverse`: direct inversion of the A matrix

    `least_squares`: constrained to have physical probabilities

**Returns**

The corrected data in the same form as raw\_data

**Return type**

dict or list

**Raises**

**QiskitError** – if raw\_data is not an integer multiple of the number of calibrated states.
