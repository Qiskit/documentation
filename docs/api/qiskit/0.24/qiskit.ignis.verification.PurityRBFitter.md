---
title: PurityRBFitter
description: API reference for qiskit.ignis.verification.PurityRBFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.PurityRBFitter
---

<span id="qiskit-ignis-verification-purityrbfitter" />

# qiskit.ignis.verification.PurityRBFitter

<span id="qiskit.ignis.verification.PurityRBFitter" />

`PurityRBFitter(purity_result, npurity, cliff_lengths, rb_pattern=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.5/qiskit/ignis/verification/randomized_benchmarking/fitters.py "view source code")

Class for fitter for purity RB.

Derived from RBFitterBase class.

**Parameters**

*   **purity\_result** (*list*) – list of results of the 3^n purity RB sequences per seed (qiskit.Result).
*   **npurity** (*int*) – equals 3^n (where n is the dimension).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

### \_\_init\_\_

<span id="qiskit.ignis.verification.PurityRBFitter.__init__" />

`__init__(purity_result, npurity, cliff_lengths, rb_pattern=None)`

**Parameters**

*   **purity\_result** (*list*) – list of results of the 3^n purity RB sequences per seed (qiskit.Result).
*   **npurity** (*int*) – equals 3^n (where n is the dimension).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Methods

|                                                                                                                                                                        |                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`F234`](#qiskit.ignis.verification.PurityRBFitter.F234 "qiskit.ignis.verification.PurityRBFitter.F234")(n, a, b)                                                      | Function than maps: 2^n x 3^n –> 4^n , namely: (a,b) –> c where a in 2^n, b in 3^n, c in 4^n |
| [`__init__`](#qiskit.ignis.verification.PurityRBFitter.__init__ "qiskit.ignis.verification.PurityRBFitter.__init__")(purity\_result, npurity, cliff\_lengths)          | **param purity\_result**list of results of the                                               |
| [`add_data`](#qiskit.ignis.verification.PurityRBFitter.add_data "qiskit.ignis.verification.PurityRBFitter.add_data")(new\_purity\_result\[, rerun\_fit])               | Add a new result.                                                                            |
| [`add_zdict_ops`](#qiskit.ignis.verification.PurityRBFitter.add_zdict_ops "qiskit.ignis.verification.PurityRBFitter.add_zdict_ops")()                                  | Creating all Z-correlators in order to compute the expectation values.                       |
| [`calc_data`](#qiskit.ignis.verification.PurityRBFitter.calc_data "qiskit.ignis.verification.PurityRBFitter.calc_data")()                                              | Retrieve probabilities of success from execution results.                                    |
| [`calc_statistics`](#qiskit.ignis.verification.PurityRBFitter.calc_statistics "qiskit.ignis.verification.PurityRBFitter.calc_statistics")()                            | Extract averages and std dev from the raw data (self.\_raw\_data).                           |
| [`fit_data`](#qiskit.ignis.verification.PurityRBFitter.fit_data "qiskit.ignis.verification.PurityRBFitter.fit_data")()                                                 | Fit the Purity RB results to an exponential curve.                                           |
| [`fit_data_pattern`](#qiskit.ignis.verification.PurityRBFitter.fit_data_pattern "qiskit.ignis.verification.PurityRBFitter.fit_data_pattern")(patt\_ind, fit\_guess)    | Fit the RB results of a particular pattern to an exponential curve.                          |
| [`plot_rb_data`](#qiskit.ignis.verification.PurityRBFitter.plot_rb_data "qiskit.ignis.verification.PurityRBFitter.plot_rb_data")(\[pattern\_index, ax, add\_label, …]) | Plot purity RB data of a single pattern.                                                     |

## Attributes

|                                                                                                                                     |                                       |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`cliff_lengths`](#qiskit.ignis.verification.PurityRBFitter.cliff_lengths "qiskit.ignis.verification.PurityRBFitter.cliff_lengths") | Return clifford lengths.              |
| [`fit`](#qiskit.ignis.verification.PurityRBFitter.fit "qiskit.ignis.verification.PurityRBFitter.fit")                               | Return the purity fit parameters.     |
| [`raw_data`](#qiskit.ignis.verification.PurityRBFitter.raw_data "qiskit.ignis.verification.PurityRBFitter.raw_data")                | Return raw data.                      |
| [`rb_fit_fun`](#qiskit.ignis.verification.PurityRBFitter.rb_fit_fun "qiskit.ignis.verification.PurityRBFitter.rb_fit_fun")          | Return the fit function rb\_fit\_fun. |
| [`rbfit_pur`](#qiskit.ignis.verification.PurityRBFitter.rbfit_pur "qiskit.ignis.verification.PurityRBFitter.rbfit_pur")             | Return the purity RB fitter.          |
| [`results`](#qiskit.ignis.verification.PurityRBFitter.results "qiskit.ignis.verification.PurityRBFitter.results")                   | Return all the results.               |
| [`seeds`](#qiskit.ignis.verification.PurityRBFitter.seeds "qiskit.ignis.verification.PurityRBFitter.seeds")                         | Return the number of loaded seeds.    |
| [`ydata`](#qiskit.ignis.verification.PurityRBFitter.ydata "qiskit.ignis.verification.PurityRBFitter.ydata")                         | Return ydata (means and std devs).    |

### F234

<span id="qiskit.ignis.verification.PurityRBFitter.F234" />

`static F234(n, a, b)`

Function than maps: 2^n x 3^n –> 4^n , namely: (a,b) –> c where a in 2^n, b in 3^n, c in 4^n

### add\_data

<span id="qiskit.ignis.verification.PurityRBFitter.add_data" />

`add_data(new_purity_result, rerun_fit=True)`

Add a new result.

**Parameters**

*   **new\_purity\_result** (*list*) – list of RB results of the purity RB circuits.
*   **rerun\_fit** (*bool*) – re-calculate the means and fit the result.

**Additional information:**

Assumes that the executed ‘result’ is the output of circuits generated by randomized\_benchmarking\_seq where is\_purity = True.

### add\_zdict\_ops

<span id="qiskit.ignis.verification.PurityRBFitter.add_zdict_ops" />

`add_zdict_ops()`

Creating all Z-correlators in order to compute the expectation values.

### calc\_data

<span id="qiskit.ignis.verification.PurityRBFitter.calc_data" />

`calc_data()`

Retrieve probabilities of success from execution results.

Measure the purity calculation into an internal variable \_raw\_data which is a 3-dimensional list, where item (i,j,k) is the purity of the set of qubits in pattern “i” for seed no. j and vector length self.\_cliff\_lengths\[i]\[k].

**Additional information:**

Assumes that the executed ‘result’ is the output of circuits generated by randomized\_benchmarking\_seq,

### calc\_statistics

<span id="qiskit.ignis.verification.PurityRBFitter.calc_statistics" />

`calc_statistics()`

Extract averages and std dev from the raw data (self.\_raw\_data).

Assumes that self.\_calc\_data has been run. Output into internal \_ydata variable. ydata is a list of dictionaries (length number of patterns):

Dictionary ydata\[i]:

> *   ydata\[i]\[‘mean’] is a numpy\_array of length n; entry j of this array contains the mean probability of success over seeds, for vector length self.\_cliff\_lengths\[i]\[j].
> *   ydata\[i]\[‘std’] is a numpy\_array of length n; entry j of this array contains the std of the probability of success over seeds, for vector length self.\_cliff\_lengths\[i]\[j].

### cliff\_lengths

<span id="qiskit.ignis.verification.PurityRBFitter.cliff_lengths" />

`property cliff_lengths`

Return clifford lengths.

### fit

<span id="qiskit.ignis.verification.PurityRBFitter.fit" />

`property fit`

Return the purity fit parameters.

### fit\_data

<span id="qiskit.ignis.verification.PurityRBFitter.fit_data" />

`fit_data()`

Fit the Purity RB results to an exponential curve.

Use the data to construct guess values for the fits.

Puts the results into a list of fit dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `params` - three parameters of rb\_fit\_fun. The middle one is the exponent.
> *   `err` - the error limits of the parameters.
> *   `epc` - Error per Clifford.
> *   `pepc` - Purity Error per Clifford.

### fit\_data\_pattern

<span id="qiskit.ignis.verification.PurityRBFitter.fit_data_pattern" />

`fit_data_pattern(patt_ind, fit_guess)`

Fit the RB results of a particular pattern to an exponential curve.

**Parameters**

*   **patt\_ind** (*int*) – index of the subsystem to fit.
*   **fit\_guess** (*list*) – guess values for the fit.

Puts the results into a list of fit dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `params` - three parameters of rb\_fit\_fun. The middle one is the exponent.
> *   `err` - the error limits of the parameters.

### plot\_rb\_data

<span id="qiskit.ignis.verification.PurityRBFitter.plot_rb_data" />

`plot_rb_data(pattern_index=0, ax=None, add_label=True, show_plt=True)`

Plot purity RB data of a single pattern.

### raw\_data

<span id="qiskit.ignis.verification.PurityRBFitter.raw_data" />

`property raw_data`

Return raw data.

### rb\_fit\_fun

<span id="qiskit.ignis.verification.PurityRBFitter.rb_fit_fun" />

`property rb_fit_fun`

Return the fit function rb\_fit\_fun.

### rbfit\_pur

<span id="qiskit.ignis.verification.PurityRBFitter.rbfit_pur" />

`property rbfit_pur`

Return the purity RB fitter.

### results

<span id="qiskit.ignis.verification.PurityRBFitter.results" />

`property results`

Return all the results.

### seeds

<span id="qiskit.ignis.verification.PurityRBFitter.seeds" />

`property seeds`

Return the number of loaded seeds.

### ydata

<span id="qiskit.ignis.verification.PurityRBFitter.ydata" />

`property ydata`

Return ydata (means and std devs).

