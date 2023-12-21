---
title: CNOTDihedralRBFitter
description: API reference for qiskit.ignis.verification.CNOTDihedralRBFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.CNOTDihedralRBFitter
---

# CNOTDihedralRBFitter

<span id="qiskit.ignis.verification.CNOTDihedralRBFitter" />

`CNOTDihedralRBFitter(cnotdihedral_Z_result, cnotdihedral_X_result, elmnts_lengths, rb_pattern=None)`

Class for fitters for non-Clifford CNOT-Dihedral RB.

Derived from RBFitterBase class. Contains two RBFitter objects.

**Parameters**

*   **cnotdihedral\_Z\_result** (*qiskit.Result*) – list of results of the RB sequence that measures the ground state.
*   **cnotdihedral\_X\_result** (*qiskit.Result*) – list of results of the RB sequence that measures the $|+...+>$ state.
*   **elmnts\_lengths** (*list*) – the group elements lengths, 2D list i x j where i is the number of patterns, j is the number of elements lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Attributes

|                                                                                                                                                                              |                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`CNOTDihedralRBFitter.cliff_lengths`](qiskit.ignis.verification.CNOTDihedralRBFitter.cliff_lengths "qiskit.ignis.verification.CNOTDihedralRBFitter.cliff_lengths")          | Return group elements lengths.                         |
| [`CNOTDihedralRBFitter.fit`](qiskit.ignis.verification.CNOTDihedralRBFitter.fit "qiskit.ignis.verification.CNOTDihedralRBFitter.fit")                                        | Return fit as a 2 element list.                        |
| [`CNOTDihedralRBFitter.fit_cnotdihedral`](qiskit.ignis.verification.CNOTDihedralRBFitter.fit_cnotdihedral "qiskit.ignis.verification.CNOTDihedralRBFitter.fit_cnotdihedral") | Return cnotdihedral fit parameters.                    |
| [`CNOTDihedralRBFitter.raw_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.raw_data "qiskit.ignis.verification.CNOTDihedralRBFitter.raw_data")                         | Return raw\_data as 2 element list.                    |
| [`CNOTDihedralRBFitter.rb_fit_fun`](qiskit.ignis.verification.CNOTDihedralRBFitter.rb_fit_fun "qiskit.ignis.verification.CNOTDihedralRBFitter.rb_fit_fun")                   | Return the fit function rb\_fit\_fun.                  |
| [`CNOTDihedralRBFitter.rbfit_X`](qiskit.ignis.verification.CNOTDihedralRBFitter.rbfit_X "qiskit.ignis.verification.CNOTDihedralRBFitter.rbfit_X")                            | Return the cnotdihedral X fitter.                      |
| [`CNOTDihedralRBFitter.rbfit_Z`](qiskit.ignis.verification.CNOTDihedralRBFitter.rbfit_Z "qiskit.ignis.verification.CNOTDihedralRBFitter.rbfit_Z")                            | Return the cnotdihedral Z fitter.                      |
| [`CNOTDihedralRBFitter.results`](qiskit.ignis.verification.CNOTDihedralRBFitter.results "qiskit.ignis.verification.CNOTDihedralRBFitter.results")                            | Return all the results as a 2 element list.            |
| [`CNOTDihedralRBFitter.seeds`](qiskit.ignis.verification.CNOTDihedralRBFitter.seeds "qiskit.ignis.verification.CNOTDihedralRBFitter.seeds")                                  | Return the number of loaded seeds as a 2 element list. |
| [`CNOTDihedralRBFitter.ydata`](qiskit.ignis.verification.CNOTDihedralRBFitter.ydata "qiskit.ignis.verification.CNOTDihedralRBFitter.ydata")                                  | Return ydata (means and std devs) as a 2 element list. |

## Methods

|                                                                                                                                                                                       |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`CNOTDihedralRBFitter.add_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.add_data "qiskit.ignis.verification.CNOTDihedralRBFitter.add_data")(…\[, rerun\_fit])                | Add a new result.                                                                 |
| [`CNOTDihedralRBFitter.calc_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.calc_data "qiskit.ignis.verification.CNOTDihedralRBFitter.calc_data")()                             | Retrieve probabilities of success from execution results.                         |
| [`CNOTDihedralRBFitter.calc_statistics`](qiskit.ignis.verification.CNOTDihedralRBFitter.calc_statistics "qiskit.ignis.verification.CNOTDihedralRBFitter.calc_statistics")()           | Extract averages and std dev.                                                     |
| [`CNOTDihedralRBFitter.fit_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data "qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data")()                                | Fit the non-Clifford cnot-dihedral RB results.                                    |
| [`CNOTDihedralRBFitter.fit_data_pattern`](qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data_pattern "qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data_pattern")(…\[, …]) | Fit the RB results of a particular pattern to an exponential curve.               |
| [`CNOTDihedralRBFitter.plot_rb_data`](qiskit.ignis.verification.CNOTDihedralRBFitter.plot_rb_data "qiskit.ignis.verification.CNOTDihedralRBFitter.plot_rb_data")(\[…])                | Plot non-Clifford cnot-dihedral randomized benchmarking data of a single pattern. |

