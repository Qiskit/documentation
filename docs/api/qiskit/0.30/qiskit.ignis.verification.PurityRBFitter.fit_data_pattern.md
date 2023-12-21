# qiskit.ignis.verification.PurityRBFitter.fit\_data\_pattern

`PurityRBFitter.fit_data_pattern(patt_ind, fit_guess)`

Fit the RB results of a particular pattern to an exponential curve.

**Parameters**

*   **patt\_ind** (*int*) – index of the subsystem to fit.
*   **fit\_guess** (*list*) – guess values for the fit.

Puts the results into a list of fit dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `params` - three parameters of rb\_fit\_fun. The middle one is the exponent.
> *   `err` - the error limits of the parameters.
