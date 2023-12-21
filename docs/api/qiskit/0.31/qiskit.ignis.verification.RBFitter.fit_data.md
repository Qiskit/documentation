# qiskit.ignis.verification.RBFitter.fit\_data

`RBFitter.fit_data()`

Fit the RB results to an exponential curve.

Fit each of the patterns. Use the data to construct guess values for the fits.

Puts the results into a list of fit dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `params` - three parameters of rb\_fit\_fun. The middle one is the exponent.
> *   `err` - the error limits of the parameters.
> *   `epc` - error per Clifford.
