---
title: fit_data_pattern
description: API reference for qiskit.ignis.verification.RBFitter.fit_data_pattern
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.RBFitter.fit_data_pattern
---

# fit\_data\_pattern

<span id="qiskit.ignis.verification.RBFitter.fit_data_pattern" />

`RBFitter.fit_data_pattern(patt_ind, fit_guess)`

Fit the RB results of a particular pattern to an exponential curve.

**Parameters**

*   **patt\_ind** (*int*) – index of the data pattern to fit.
*   **fit\_guess** (*list*) – guess values for the fit.

Puts the results into a list of fit dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `params` - three parameters of rb\_fit\_fun. The middle one is the exponent.
> *   `err` - the error limits of the parameters.
> *   `epc` - error per Clifford.

