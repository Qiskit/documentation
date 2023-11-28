# PurityRBFitter

<span id="undefined" />

`PurityRBFitter(purity_result, npurity, cliff_lengths, rb_pattern=None)`

Bases: `qiskit.ignis.verification.randomized_benchmarking.fitters.RBFitterBase`

Class for fitter for purity RB.

Derived from RBFitterBase class.

**Parameters**

*   **purity\_result** (*list*) – list of results of the 3^n purity RB sequences per seed (qiskit.Result).
*   **npurity** (*int*) – equals 3^n (where n is the dimension).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Methods

|                                                                                                                                                                                                       |                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`F234`](qiskit.ignis.verification.PurityRBFitter.F234#qiskit.ignis.verification.PurityRBFitter.F234 "qiskit.ignis.verification.PurityRBFitter.F234")                                                 | Function than maps: 2^n x 3^n –> 4^n , namely: (a,b) –> c where a in 2^n, b in 3^n, c in 4^n |
| [`add_data`](qiskit.ignis.verification.PurityRBFitter.add_data#qiskit.ignis.verification.PurityRBFitter.add_data "qiskit.ignis.verification.PurityRBFitter.add_data")                                 | Add a new result.                                                                            |
| [`add_zdict_ops`](qiskit.ignis.verification.PurityRBFitter.add_zdict_ops#qiskit.ignis.verification.PurityRBFitter.add_zdict_ops "qiskit.ignis.verification.PurityRBFitter.add_zdict_ops")             | Creating all Z-correlators in order to compute the expectation values.                       |
| [`calc_data`](qiskit.ignis.verification.PurityRBFitter.calc_data#qiskit.ignis.verification.PurityRBFitter.calc_data "qiskit.ignis.verification.PurityRBFitter.calc_data")                             | Retrieve probabilities of success from execution results.                                    |
| [`calc_statistics`](qiskit.ignis.verification.PurityRBFitter.calc_statistics#qiskit.ignis.verification.PurityRBFitter.calc_statistics "qiskit.ignis.verification.PurityRBFitter.calc_statistics")     | Extract averages and std dev from the raw data (self.\_raw\_data).                           |
| [`fit_data`](qiskit.ignis.verification.PurityRBFitter.fit_data#qiskit.ignis.verification.PurityRBFitter.fit_data "qiskit.ignis.verification.PurityRBFitter.fit_data")                                 | Fit the Purity RB results to an exponential curve.                                           |
| [`fit_data_pattern`](qiskit.ignis.verification.PurityRBFitter.fit_data_pattern#qiskit.ignis.verification.PurityRBFitter.fit_data_pattern "qiskit.ignis.verification.PurityRBFitter.fit_data_pattern") | Fit the RB results of a particular pattern to an exponential curve.                          |
| [`plot_rb_data`](qiskit.ignis.verification.PurityRBFitter.plot_rb_data#qiskit.ignis.verification.PurityRBFitter.plot_rb_data "qiskit.ignis.verification.PurityRBFitter.plot_rb_data")                 | Plot purity RB data of a single pattern.                                                     |

## Attributes

<span id="undefined" />

### cliff\_lengths

Return clifford lengths.

<span id="undefined" />

### fit

Return the purity fit parameters.

<span id="undefined" />

### raw\_data

Return raw data.

<span id="undefined" />

### rb\_fit\_fun

Return the fit function rb\_fit\_fun.

<span id="undefined" />

### rbfit\_pur

Return the purity RB fitter.

<span id="undefined" />

### results

Return all the results.

<span id="undefined" />

### seeds

Return the number of loaded seeds.

<span id="undefined" />

### ydata

Return ydata (means and std devs).
