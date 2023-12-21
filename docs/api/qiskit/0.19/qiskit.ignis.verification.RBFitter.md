---
title: RBFitter
description: API reference for qiskit.ignis.verification.RBFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.RBFitter
---

# RBFitter

<span id="qiskit.ignis.verification.RBFitter" />

`RBFitter(backend_result, cliff_lengths, rb_pattern=None)`

Class for fitters for randomized benchmarking.

**Parameters**

*   **backend\_result** ([*Result*](qiskit.result.Result "qiskit.result.Result")) – list of results (qiskit.Result).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Attributes

|                                                                                                                                 |                                       |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`RBFitter.cliff_lengths`](qiskit.ignis.verification.RBFitter.cliff_lengths "qiskit.ignis.verification.RBFitter.cliff_lengths") | Return clifford lengths.              |
| [`RBFitter.fit`](qiskit.ignis.verification.RBFitter.fit "qiskit.ignis.verification.RBFitter.fit")                               | Return fit.                           |
| [`RBFitter.raw_data`](qiskit.ignis.verification.RBFitter.raw_data "qiskit.ignis.verification.RBFitter.raw_data")                | Return raw data.                      |
| [`RBFitter.rb_fit_fun`](qiskit.ignis.verification.RBFitter.rb_fit_fun "qiskit.ignis.verification.RBFitter.rb_fit_fun")          | Return the fit function rb\_fit\_fun. |
| [`RBFitter.results`](qiskit.ignis.verification.RBFitter.results "qiskit.ignis.verification.RBFitter.results")                   | Return all the results.               |
| [`RBFitter.seeds`](qiskit.ignis.verification.RBFitter.seeds "qiskit.ignis.verification.RBFitter.seeds")                         | Return the number of loaded seeds.    |
| [`RBFitter.ydata`](qiskit.ignis.verification.RBFitter.ydata "qiskit.ignis.verification.RBFitter.ydata")                         | Return ydata (means and std devs).    |

## Methods

|                                                                                                                                                                 |                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`RBFitter.add_data`](qiskit.ignis.verification.RBFitter.add_data "qiskit.ignis.verification.RBFitter.add_data")(new\_backend\_result\[, …])                    | Add a new result.                                                   |
| [`RBFitter.calc_data`](qiskit.ignis.verification.RBFitter.calc_data "qiskit.ignis.verification.RBFitter.calc_data")()                                           | Retrieve probabilities of success from execution results.           |
| [`RBFitter.calc_statistics`](qiskit.ignis.verification.RBFitter.calc_statistics "qiskit.ignis.verification.RBFitter.calc_statistics")()                         | Extract averages and std dev from the raw data (self.\_raw\_data).  |
| [`RBFitter.fit_data`](qiskit.ignis.verification.RBFitter.fit_data "qiskit.ignis.verification.RBFitter.fit_data")()                                              | Fit the RB results to an exponential curve.                         |
| [`RBFitter.fit_data_pattern`](qiskit.ignis.verification.RBFitter.fit_data_pattern "qiskit.ignis.verification.RBFitter.fit_data_pattern")(patt\_ind, fit\_guess) | Fit the RB results of a particular pattern to an exponential curve. |
| [`RBFitter.plot_rb_data`](qiskit.ignis.verification.RBFitter.plot_rb_data "qiskit.ignis.verification.RBFitter.plot_rb_data")(\[pattern\_index, ax, …])          | Plot randomized benchmarking data of a single pattern.              |

