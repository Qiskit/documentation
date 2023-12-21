---
title: PurityRBFitter
description: API reference for qiskit.ignis.verification.PurityRBFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.PurityRBFitter
---

# PurityRBFitter

<span id="qiskit.ignis.verification.PurityRBFitter" />

`PurityRBFitter(purity_result, npurity, cliff_lengths, rb_pattern=None)`

Class for fitter for purity RB.

Derived from RBFitterBase class.

**Parameters**

*   **purity\_result** (*list*) – list of results of the 3^n purity RB sequences per seed (qiskit.Result).
*   **npurity** (*int*) – equals 3^n (where n is the dimension).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Attributes

|                                                                                                                                                   |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`PurityRBFitter.cliff_lengths`](qiskit.ignis.verification.PurityRBFitter.cliff_lengths "qiskit.ignis.verification.PurityRBFitter.cliff_lengths") | Return clifford lengths.              |
| [`PurityRBFitter.fit`](qiskit.ignis.verification.PurityRBFitter.fit "qiskit.ignis.verification.PurityRBFitter.fit")                               | Return the purity fit parameters.     |
| [`PurityRBFitter.raw_data`](qiskit.ignis.verification.PurityRBFitter.raw_data "qiskit.ignis.verification.PurityRBFitter.raw_data")                | Return raw data.                      |
| [`PurityRBFitter.rb_fit_fun`](qiskit.ignis.verification.PurityRBFitter.rb_fit_fun "qiskit.ignis.verification.PurityRBFitter.rb_fit_fun")          | Return the fit function rb\_fit\_fun. |
| [`PurityRBFitter.rbfit_pur`](qiskit.ignis.verification.PurityRBFitter.rbfit_pur "qiskit.ignis.verification.PurityRBFitter.rbfit_pur")             | Return the purity RB fitter.          |
| [`PurityRBFitter.results`](qiskit.ignis.verification.PurityRBFitter.results "qiskit.ignis.verification.PurityRBFitter.results")                   | Return all the results.               |
| [`PurityRBFitter.seeds`](qiskit.ignis.verification.PurityRBFitter.seeds "qiskit.ignis.verification.PurityRBFitter.seeds")                         | Return the number of loaded seeds.    |
| [`PurityRBFitter.ydata`](qiskit.ignis.verification.PurityRBFitter.ydata "qiskit.ignis.verification.PurityRBFitter.ydata")                         | Return ydata (means and std devs).    |

## Methods

|                                                                                                                                                                          |                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| [`PurityRBFitter.F234`](qiskit.ignis.verification.PurityRBFitter.F234 "qiskit.ignis.verification.PurityRBFitter.F234")(n, a, b)                                          | Function than maps: 2^n x 3^n –> 4^n , namely: (a,b) –> c where a in 2^n, b in 3^n, c in 4^n |
| [`PurityRBFitter.add_data`](qiskit.ignis.verification.PurityRBFitter.add_data "qiskit.ignis.verification.PurityRBFitter.add_data")(new\_purity\_result\[, …])            | Add a new result.                                                                            |
| [`PurityRBFitter.add_zdict_ops`](qiskit.ignis.verification.PurityRBFitter.add_zdict_ops "qiskit.ignis.verification.PurityRBFitter.add_zdict_ops")()                      | Creating all Z-correlators in order to compute the expectation values.                       |
| [`PurityRBFitter.calc_data`](qiskit.ignis.verification.PurityRBFitter.calc_data "qiskit.ignis.verification.PurityRBFitter.calc_data")()                                  | Retrieve probabilities of success from execution results.                                    |
| [`PurityRBFitter.calc_statistics`](qiskit.ignis.verification.PurityRBFitter.calc_statistics "qiskit.ignis.verification.PurityRBFitter.calc_statistics")()                | Extract averages and std dev from the raw data (self.\_raw\_data).                           |
| [`PurityRBFitter.fit_data`](qiskit.ignis.verification.PurityRBFitter.fit_data "qiskit.ignis.verification.PurityRBFitter.fit_data")()                                     | Fit the Purity RB results to an exponential curve.                                           |
| [`PurityRBFitter.fit_data_pattern`](qiskit.ignis.verification.PurityRBFitter.fit_data_pattern "qiskit.ignis.verification.PurityRBFitter.fit_data_pattern")(patt\_ind, …) | Fit the RB results of a particular pattern to an exponential curve.                          |
| [`PurityRBFitter.plot_rb_data`](qiskit.ignis.verification.PurityRBFitter.plot_rb_data "qiskit.ignis.verification.PurityRBFitter.plot_rb_data")(\[pattern\_index, …])     | Plot purity RB data of a single pattern.                                                     |

