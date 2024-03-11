---
title: InterleavedRBFitter
description: API reference for qiskit.ignis.verification.InterleavedRBFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.InterleavedRBFitter
---

# qiskit.ignis.verification.InterleavedRBFitter

<span id="qiskit.ignis.verification.InterleavedRBFitter" />

`InterleavedRBFitter(original_result, interleaved_result, cliff_lengths, rb_pattern=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.6/qiskit/ignis/verification/randomized_benchmarking/fitters.py "view source code")

Class for fitters for interleaved RB, derived from RBFitterBase class.

Contains two RBFitter objects: the original RBFitter and the interleaved RBFitter.

**Parameters**

*   **original\_result** (*list*) – list of results of the original RB sequence (qiskit.Result).
*   **interleaved\_result** (*list*) – list of results of the interleaved RB sequence (qiskit.Result).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

### \_\_init\_\_

<span id="qiskit.ignis.verification.InterleavedRBFitter.__init__" />

`__init__(original_result, interleaved_result, cliff_lengths, rb_pattern=None)`

**Parameters**

*   **original\_result** (*list*) – list of results of the original RB sequence (qiskit.Result).
*   **interleaved\_result** (*list*) – list of results of the interleaved RB sequence (qiskit.Result).
*   **cliff\_lengths** (*list*) – the Clifford lengths, 2D list i x j where i is the number of patterns, j is the number of cliffords lengths.
*   **rb\_pattern** (*list*) – the pattern for the RB sequences.

## Methods

|                                                                                                                                                                                     |                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.verification.InterleavedRBFitter.__init__ "qiskit.ignis.verification.InterleavedRBFitter.__init__")(original\_result, …\[, rb\_pattern])                 | **param original\_result**list of results of the                    |
| [`add_data`](#qiskit.ignis.verification.InterleavedRBFitter.add_data "qiskit.ignis.verification.InterleavedRBFitter.add_data")(new\_original\_result, …\[, rerun\_fit])             | Add a new result.                                                   |
| [`calc_data`](#qiskit.ignis.verification.InterleavedRBFitter.calc_data "qiskit.ignis.verification.InterleavedRBFitter.calc_data")()                                                 | Retrieve probabilities of success from execution results.           |
| [`calc_statistics`](#qiskit.ignis.verification.InterleavedRBFitter.calc_statistics "qiskit.ignis.verification.InterleavedRBFitter.calc_statistics")()                               | Extract averages and std dev.                                       |
| [`fit_data`](#qiskit.ignis.verification.InterleavedRBFitter.fit_data "qiskit.ignis.verification.InterleavedRBFitter.fit_data")()                                                    | Fit the interleaved RB results.                                     |
| [`fit_data_pattern`](#qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern "qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern")(patt\_ind, fit\_guess\[, …]) | Fit the RB results of a particular pattern to an exponential curve. |
| [`plot_rb_data`](#qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data "qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data")(\[pattern\_index, ax, add\_label, …])    | Plot interleaved randomized benchmarking data of a single pattern.  |

## Attributes

|                                                                                                                                               |                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [`cliff_lengths`](#qiskit.ignis.verification.InterleavedRBFitter.cliff_lengths "qiskit.ignis.verification.InterleavedRBFitter.cliff_lengths") | Return clifford lengths.                               |
| [`fit`](#qiskit.ignis.verification.InterleavedRBFitter.fit "qiskit.ignis.verification.InterleavedRBFitter.fit")                               | Return fit as a 2 element list.                        |
| [`fit_int`](#qiskit.ignis.verification.InterleavedRBFitter.fit_int "qiskit.ignis.verification.InterleavedRBFitter.fit_int")                   | Return interleaved fit parameters.                     |
| [`raw_data`](#qiskit.ignis.verification.InterleavedRBFitter.raw_data "qiskit.ignis.verification.InterleavedRBFitter.raw_data")                | Return raw\_data as a 2 element list.                  |
| [`rb_fit_fun`](#qiskit.ignis.verification.InterleavedRBFitter.rb_fit_fun "qiskit.ignis.verification.InterleavedRBFitter.rb_fit_fun")          | Return the fit function rb\_fit\_fun.                  |
| [`rbfit_int`](#qiskit.ignis.verification.InterleavedRBFitter.rbfit_int "qiskit.ignis.verification.InterleavedRBFitter.rbfit_int")             | Return the interleaved RB fitter.                      |
| [`rbfit_std`](#qiskit.ignis.verification.InterleavedRBFitter.rbfit_std "qiskit.ignis.verification.InterleavedRBFitter.rbfit_std")             | Return the original RB fitter.                         |
| [`results`](#qiskit.ignis.verification.InterleavedRBFitter.results "qiskit.ignis.verification.InterleavedRBFitter.results")                   | Return all the results as a 2 element list.            |
| [`seeds`](#qiskit.ignis.verification.InterleavedRBFitter.seeds "qiskit.ignis.verification.InterleavedRBFitter.seeds")                         | Return the number of loaded seeds as a 2 element list. |
| [`ydata`](#qiskit.ignis.verification.InterleavedRBFitter.ydata "qiskit.ignis.verification.InterleavedRBFitter.ydata")                         | Return ydata (means and std devs) as a 2 element list. |

### add\_data

<span id="qiskit.ignis.verification.InterleavedRBFitter.add_data" />

`add_data(new_original_result, new_interleaved_result, rerun_fit=True)`

Add a new result.

**Parameters**

*   **new\_original\_result** (*list*) – list of RB results of the original circuits.
*   **new\_interleaved\_result** (*list*) – list of RB results of the interleaved circuits.
*   **rerun\_fit** (*bool*) – re-calculate the means and fit the result.

**Additional information:**

Assumes that the executed ‘result’ is the output of circuits generated by randomized\_benchmarking\_seq.

### calc\_data

<span id="qiskit.ignis.verification.InterleavedRBFitter.calc_data" />

`calc_data()`

Retrieve probabilities of success from execution results.

Outputs results into an internal variables: \_raw\_original\_data and \_raw\_interleaved\_data

### calc\_statistics

<span id="qiskit.ignis.verification.InterleavedRBFitter.calc_statistics" />

`calc_statistics()`

Extract averages and std dev.

Output \[ydata\_original, ydata\_interleaved]

### cliff\_lengths

<span id="qiskit.ignis.verification.InterleavedRBFitter.cliff_lengths" />

`property cliff_lengths`

Return clifford lengths.

### fit

<span id="qiskit.ignis.verification.InterleavedRBFitter.fit" />

`property fit`

Return fit as a 2 element list.

### fit\_data

<span id="qiskit.ignis.verification.InterleavedRBFitter.fit_data" />

`fit_data()`

Fit the interleaved RB results. Fit each of the patterns.

According to the paper: “Efficient measurement of quantum gate error by interleaved randomized benchmarking” (arXiv:1203.4550) - Equations (4) and (5).

Puts the results into a list of fit dictionaries: where each dictionary corresponds to a pattern and has fields:

> *   ‘epc\_est’ - the estimated error per the interleaved Clifford.
> *   ‘epc\_est\_error’ - the estimated error derived from the params\_err.
> *   ‘systematic\_err’ - systematic error bound of epc\_est.
> *   ‘systematic\_err\_L’ = epc\_est - systematic\_err (left error bound).
> *   ‘systematic\_err\_R’ = epc\_est + systematic\_err (right error bound).

### fit\_data\_pattern

<span id="qiskit.ignis.verification.InterleavedRBFitter.fit_data_pattern" />

`fit_data_pattern(patt_ind, fit_guess, fit_index=0)`

Fit the RB results of a particular pattern to an exponential curve.

**Parameters**

*   **patt\_ind** (*int*) – index of the data to fit.
*   **fit\_guess** (*list*) – guess values for the fit.
*   **fit\_index** (*int*) – 0 fit the standard data, 1 fit the interleaved data.

### fit\_int

<span id="qiskit.ignis.verification.InterleavedRBFitter.fit_int" />

`property fit_int`

Return interleaved fit parameters.

### plot\_rb\_data

<span id="qiskit.ignis.verification.InterleavedRBFitter.plot_rb_data" />

`plot_rb_data(pattern_index=0, ax=None, add_label=True, show_plt=True)`

Plot interleaved randomized benchmarking data of a single pattern.

**Parameters**

*   **pattern\_index** (*int*) – which RB pattern to plot.
*   **ax** (*Axes*) – plot axis (if passed in).
*   **add\_label** (*bool*) – Add an EPC label.
*   **show\_plt** (*bool*) – display the plot.

**Raises**

**ImportError** – if matplotlib is not installed.

### raw\_data

<span id="qiskit.ignis.verification.InterleavedRBFitter.raw_data" />

`property raw_data`

Return raw\_data as a 2 element list.

### rb\_fit\_fun

<span id="qiskit.ignis.verification.InterleavedRBFitter.rb_fit_fun" />

`property rb_fit_fun`

Return the fit function rb\_fit\_fun.

### rbfit\_int

<span id="qiskit.ignis.verification.InterleavedRBFitter.rbfit_int" />

`property rbfit_int`

Return the interleaved RB fitter.

### rbfit\_std

<span id="qiskit.ignis.verification.InterleavedRBFitter.rbfit_std" />

`property rbfit_std`

Return the original RB fitter.

### results

<span id="qiskit.ignis.verification.InterleavedRBFitter.results" />

`property results`

Return all the results as a 2 element list.

### seeds

<span id="qiskit.ignis.verification.InterleavedRBFitter.seeds" />

`property seeds`

Return the number of loaded seeds as a 2 element list.

### ydata

<span id="qiskit.ignis.verification.InterleavedRBFitter.ydata" />

`property ydata`

Return ydata (means and std devs) as a 2 element list.

