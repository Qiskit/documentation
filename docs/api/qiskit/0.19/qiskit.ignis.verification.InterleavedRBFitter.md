---
title: InterleavedRBFitter
description: API reference for qiskit.ignis.verification.InterleavedRBFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.InterleavedRBFitter
---

# InterleavedRBFitter

<span id="qiskit.ignis.verification.InterleavedRBFitter" />

`InterleavedRBFitter(original_result, interleaved_result, cliff_lengths, rb_pattern=None)`

Class for fitters for interleaved RB, derived from RBFitterBase class.

Contains two RBFitter objects: the original RBFitter and the interleaved RBFitter.

**Parameters**

*   **original\_result** (*list*) – list of results of the original RB sequence (qiskit.Result).
*   **interleaved\_result** (*list*) – list of results of the interleaved RB sequence (qiskit.Result).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Attributes

|                                                                                                                                                                  |                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`InterleavedRBFitter.cliff_lengths`](qiskit.ignis.verification.InterleavedRBFitter.cliff_lengths "qiskit.ignis.verification.InterleavedRBFitter.cliff_lengths") | Return clifford lengths.                               |
| [`InterleavedRBFitter.fit`](qiskit.ignis.verification.InterleavedRBFitter.fit "qiskit.ignis.verification.InterleavedRBFitter.fit")                               | Return fit as a 2 element list.                        |
| [`InterleavedRBFitter.fit_int`](qiskit.ignis.verification.InterleavedRBFitter.fit_int "qiskit.ignis.verification.InterleavedRBFitter.fit_int")                   | Return interleaved fit parameters.                     |
| [`InterleavedRBFitter.raw_data`](qiskit.ignis.verification.InterleavedRBFitter.raw_data "qiskit.ignis.verification.InterleavedRBFitter.raw_data")                | Return raw\_data as a 2 element list.                  |
| [`InterleavedRBFitter.rb_fit_fun`](qiskit.ignis.verification.InterleavedRBFitter.rb_fit_fun "qiskit.ignis.verification.InterleavedRBFitter.rb_fit_fun")          | Return the fit function rb\_fit\_fun.                  |
| [`InterleavedRBFitter.rbfit_int`](qiskit.ignis.verification.InterleavedRBFitter.rbfit_int "qiskit.ignis.verification.InterleavedRBFitter.rbfit_int")             | Return the interleaved RB fitter.                      |
| [`InterleavedRBFitter.rbfit_std`](qiskit.ignis.verification.InterleavedRBFitter.rbfit_std "qiskit.ignis.verification.InterleavedRBFitter.rbfit_std")             | Return the original RB fitter.                         |
| [`InterleavedRBFitter.results`](qiskit.ignis.verification.InterleavedRBFitter.results "qiskit.ignis.verification.InterleavedRBFitter.results")                   | Return all the results as a 2 element list.            |
| [`InterleavedRBFitter.seeds`](qiskit.ignis.verification.InterleavedRBFitter.seeds "qiskit.ignis.verification.InterleavedRBFitter.seeds")                         | Return the number of loaded seeds as a 2 element list. |
| [`InterleavedRBFitter.ydata`](qiskit.ignis.verification.InterleavedRBFitter.ydata "qiskit.ignis.verification.InterleavedRBFitter.ydata")                         | Return ydata (means and std devs) as a 2 element list. |

## Methods

|                                                                                                                                                                                    |                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`InterleavedRBFitter.add_data`](qiskit.ignis.verification.InterleavedRBFitter.add_data "qiskit.ignis.verification.InterleavedRBFitter.add_data")(…\[, rerun\_fit])                | Add a new result.                                                   |
| [`InterleavedRBFitter.calc_data`](qiskit.ignis.verification.InterleavedRBFitter.calc_data "qiskit.ignis.verification.InterleavedRBFitter.calc_data")()                             | Retrieve probabilities of success from execution results.           |
| [`InterleavedRBFitter.calc_statistics`](qiskit.ignis.verification.InterleavedRBFitter.calc_statistics "qiskit.ignis.verification.InterleavedRBFitter.calc_statistics")()           | Extract averages and std dev.                                       |
| [`InterleavedRBFitter.fit_data`](qiskit.ignis.verification.InterleavedRBFitter.fit_data "qiskit.ignis.verification.InterleavedRBFitter.fit_data")()                                | Fit the interleaved RB results.                                     |
| [`InterleavedRBFitter.fit_data_pattern`](qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern "qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern")(…\[, …]) | Fit the RB results of a particular pattern to an exponential curve. |
| [`InterleavedRBFitter.plot_rb_data`](qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data "qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data")(\[…])                | Plot interleaved randomized benchmarking data of a single pattern.  |

