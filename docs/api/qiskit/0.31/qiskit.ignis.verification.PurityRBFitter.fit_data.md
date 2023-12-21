# qiskit.ignis.verification.PurityRBFitter.fit\_data

`PurityRBFitter.fit_data()`

Fit the Purity RB results to an exponential curve.

Use the data to construct guess values for the fits.

Puts the results into a list of fit dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `params` - three parameters of rb\_fit\_fun. The middle one is the exponent.
> *   `err` - the error limits of the parameters.
> *   `epc` - Error per Clifford.
> *   `pepc` - Purity Error per Clifford.
