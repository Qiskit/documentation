---
title: ZZFitter
description: API reference for qiskit.ignis.characterization.ZZFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.ZZFitter
---

# ZZFitter

<span id="qiskit.ignis.characterization.ZZFitter" />

`ZZFitter(backend_result, xdata, qubits, spectators, fit_p0, fit_bounds, time_unit='micro-seconds')`

ZZ fitter

## Attributes

|                                                                                                                                               |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`ZZFitter.backend_result`](qiskit.ignis.characterization.ZZFitter.backend_result "qiskit.ignis.characterization.ZZFitter.backend_result")    | Return the execution results                                                          |
| [`ZZFitter.description`](qiskit.ignis.characterization.ZZFitter.description "qiskit.ignis.characterization.ZZFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`ZZFitter.fit_fun`](qiskit.ignis.characterization.ZZFitter.fit_fun "qiskit.ignis.characterization.ZZFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`ZZFitter.measured_qubits`](qiskit.ignis.characterization.ZZFitter.measured_qubits "qiskit.ignis.characterization.ZZFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`ZZFitter.params`](qiskit.ignis.characterization.ZZFitter.params "qiskit.ignis.characterization.ZZFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`ZZFitter.params_err`](qiskit.ignis.characterization.ZZFitter.params_err "qiskit.ignis.characterization.ZZFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`ZZFitter.series`](qiskit.ignis.characterization.ZZFitter.series "qiskit.ignis.characterization.ZZFitter.series")                            | Return the list of series for the data                                                |
| [`ZZFitter.xdata`](qiskit.ignis.characterization.ZZFitter.xdata "qiskit.ignis.characterization.ZZFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ZZFitter.ydata`](qiskit.ignis.characterization.ZZFitter.ydata "qiskit.ignis.characterization.ZZFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                      |                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`ZZFitter.ZZ_rate`](qiskit.ignis.characterization.ZZFitter.ZZ_rate "qiskit.ignis.characterization.ZZFitter.ZZ_rate")(\[qind])                       | Return the ZZ rate from the fit of the two curves                      |
| [`ZZFitter.add_data`](qiskit.ignis.characterization.ZZFitter.add_data "qiskit.ignis.characterization.ZZFitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results                |
| [`ZZFitter.fit_data`](qiskit.ignis.characterization.ZZFitter.fit_data "qiskit.ignis.characterization.ZZFitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                                         |
| [`ZZFitter.plot`](qiskit.ignis.characterization.ZZFitter.plot "qiskit.ignis.characterization.ZZFitter.plot")(qind, series\[, ax, show\_plot])        | Plot coherence data.                                                   |
| [`ZZFitter.plot_ZZ`](qiskit.ignis.characterization.ZZFitter.plot_ZZ "qiskit.ignis.characterization.ZZFitter.plot_ZZ")(qind\[, ax, show\_plot])       | Plot ZZ data.                                                          |
| [`ZZFitter.time`](qiskit.ignis.characterization.ZZFitter.time "qiskit.ignis.characterization.ZZFitter.time")(\[qid, series])                         | Return the characteristic time for the given qubit and series          |
| [`ZZFitter.time_err`](qiskit.ignis.characterization.ZZFitter.time_err "qiskit.ignis.characterization.ZZFitter.time_err")(\[qid, series])             | Return the error of characteristic time for the given qubit and series |

