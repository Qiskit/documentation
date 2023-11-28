# RBFitter[¶](#rbfitter "Permalink to this headline")

<span id="undefined" />

`RBFitter(backend_result, cliff_lengths, rb_pattern=None)`

Bases: `qiskit.ignis.verification.randomized_benchmarking.fitters.RBFitterBase`

Class for fitters for randomized benchmarking.

**Parameters**

*   **backend\_result** ([*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")) – list of results (qiskit.Result).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Methods

|                                                                                                                                                                                     |                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.verification.RBFitter.add_data#qiskit.ignis.verification.RBFitter.add_data "qiskit.ignis.verification.RBFitter.add_data")                                 | Add a new result.                                                   |
| [`calc_data`](qiskit.ignis.verification.RBFitter.calc_data#qiskit.ignis.verification.RBFitter.calc_data "qiskit.ignis.verification.RBFitter.calc_data")                             | Retrieve probabilities of success from execution results.           |
| [`calc_statistics`](qiskit.ignis.verification.RBFitter.calc_statistics#qiskit.ignis.verification.RBFitter.calc_statistics "qiskit.ignis.verification.RBFitter.calc_statistics")     | Extract averages and std dev from the raw data (self.\_raw\_data).  |
| [`fit_data`](qiskit.ignis.verification.RBFitter.fit_data#qiskit.ignis.verification.RBFitter.fit_data "qiskit.ignis.verification.RBFitter.fit_data")                                 | Fit the RB results to an exponential curve.                         |
| [`fit_data_pattern`](qiskit.ignis.verification.RBFitter.fit_data_pattern#qiskit.ignis.verification.RBFitter.fit_data_pattern "qiskit.ignis.verification.RBFitter.fit_data_pattern") | Fit the RB results of a particular pattern to an exponential curve. |
| [`plot_rb_data`](qiskit.ignis.verification.RBFitter.plot_rb_data#qiskit.ignis.verification.RBFitter.plot_rb_data "qiskit.ignis.verification.RBFitter.plot_rb_data")                 | Plot randomized benchmarking data of a single pattern.              |

## Attributes

<span id="undefined" />

### cliff\_lengths

Return clifford lengths.

<span id="undefined" />

### fit

Return fit.

<span id="undefined" />

### raw\_data

Return raw data.

<span id="undefined" />

### rb\_fit\_fun

Return the fit function rb\_fit\_fun.

<span id="undefined" />

### results

Return all the results.

<span id="undefined" />

### seeds

Return the number of loaded seeds.

<span id="undefined" />

### ydata

Return ydata (means and std devs).
