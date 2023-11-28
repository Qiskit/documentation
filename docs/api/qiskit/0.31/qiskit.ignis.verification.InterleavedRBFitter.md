# InterleavedRBFitter[¶](#interleavedrbfitter "Permalink to this headline")

<span id="undefined" />

`InterleavedRBFitter(original_result, interleaved_result, cliff_lengths, rb_pattern=None)`

Bases: `qiskit.ignis.verification.randomized_benchmarking.fitters.RBFitterBase`

Class for fitters for interleaved RB, derived from RBFitterBase class.

Contains two RBFitter objects: the original RBFitter and the interleaved RBFitter.

**Parameters**

*   **original\_result** (*list*) – list of results of the original RB sequence (qiskit.Result).
*   **interleaved\_result** (*list*) – list of results of the interleaved RB sequence (qiskit.Result).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Methods

|                                                                                                                                                                                                                      |                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.verification.InterleavedRBFitter.add_data#qiskit.ignis.verification.InterleavedRBFitter.add_data "qiskit.ignis.verification.InterleavedRBFitter.add_data")                                 | Add a new result.                                                   |
| [`calc_data`](qiskit.ignis.verification.InterleavedRBFitter.calc_data#qiskit.ignis.verification.InterleavedRBFitter.calc_data "qiskit.ignis.verification.InterleavedRBFitter.calc_data")                             | Retrieve probabilities of success from execution results.           |
| [`calc_statistics`](qiskit.ignis.verification.InterleavedRBFitter.calc_statistics#qiskit.ignis.verification.InterleavedRBFitter.calc_statistics "qiskit.ignis.verification.InterleavedRBFitter.calc_statistics")     | Extract averages and std dev.                                       |
| [`fit_data`](qiskit.ignis.verification.InterleavedRBFitter.fit_data#qiskit.ignis.verification.InterleavedRBFitter.fit_data "qiskit.ignis.verification.InterleavedRBFitter.fit_data")                                 | Fit the interleaved RB results.                                     |
| [`fit_data_pattern`](qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern#qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern "qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern") | Fit the RB results of a particular pattern to an exponential curve. |
| [`plot_rb_data`](qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data#qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data "qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data")                 | Plot interleaved randomized benchmarking data of a single pattern.  |

## Attributes

<span id="undefined" />

### cliff\_lengths

Return clifford lengths.

<span id="undefined" />

### fit

Return fit as a 2 element list.

<span id="undefined" />

### fit\_int

Return interleaved fit parameters.

<span id="undefined" />

### raw\_data

Return raw\_data as a 2 element list.

<span id="undefined" />

### rb\_fit\_fun

Return the fit function rb\_fit\_fun.

<span id="undefined" />

### rbfit\_int

Return the interleaved RB fitter.

<span id="undefined" />

### rbfit\_std

Return the original RB fitter.

<span id="undefined" />

### results

Return all the results as a 2 element list.

<span id="undefined" />

### seeds

Return the number of loaded seeds as a 2 element list.

<span id="undefined" />

### ydata

Return ydata (means and std devs) as a 2 element list.
