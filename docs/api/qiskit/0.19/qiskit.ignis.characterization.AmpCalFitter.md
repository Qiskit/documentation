---
title: AmpCalFitter
description: API reference for qiskit.ignis.characterization.AmpCalFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.AmpCalFitter
---

# AmpCalFitter

<span id="qiskit.ignis.characterization.AmpCalFitter" />

`AmpCalFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)`

Amplitude error fitter

See BaseFitter \_\_init\_\_

## Attributes

|                                                                                                                                                           |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`AmpCalFitter.backend_result`](qiskit.ignis.characterization.AmpCalFitter.backend_result "qiskit.ignis.characterization.AmpCalFitter.backend_result")    | Return the execution results                                                          |
| [`AmpCalFitter.description`](qiskit.ignis.characterization.AmpCalFitter.description "qiskit.ignis.characterization.AmpCalFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`AmpCalFitter.fit_fun`](qiskit.ignis.characterization.AmpCalFitter.fit_fun "qiskit.ignis.characterization.AmpCalFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`AmpCalFitter.measured_qubits`](qiskit.ignis.characterization.AmpCalFitter.measured_qubits "qiskit.ignis.characterization.AmpCalFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`AmpCalFitter.params`](qiskit.ignis.characterization.AmpCalFitter.params "qiskit.ignis.characterization.AmpCalFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`AmpCalFitter.params_err`](qiskit.ignis.characterization.AmpCalFitter.params_err "qiskit.ignis.characterization.AmpCalFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`AmpCalFitter.series`](qiskit.ignis.characterization.AmpCalFitter.series "qiskit.ignis.characterization.AmpCalFitter.series")                            | Return the list of series for the data                                                |
| [`AmpCalFitter.xdata`](qiskit.ignis.characterization.AmpCalFitter.xdata "qiskit.ignis.characterization.AmpCalFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`AmpCalFitter.ydata`](qiskit.ignis.characterization.AmpCalFitter.ydata "qiskit.ignis.characterization.AmpCalFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                  |                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`AmpCalFitter.add_data`](qiskit.ignis.characterization.AmpCalFitter.add_data "qiskit.ignis.characterization.AmpCalFitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results |
| [`AmpCalFitter.angle_err`](qiskit.ignis.characterization.AmpCalFitter.angle_err "qiskit.ignis.characterization.AmpCalFitter.angle_err")(\[qind])                 | Return the gate angle error                             |
| [`AmpCalFitter.fit_data`](qiskit.ignis.characterization.AmpCalFitter.fit_data "qiskit.ignis.characterization.AmpCalFitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                          |
| [`AmpCalFitter.guess_params`](qiskit.ignis.characterization.AmpCalFitter.guess_params "qiskit.ignis.characterization.AmpCalFitter.guess_params")(\[qind])        | Guess fit parameters for the amp cal                    |
| [`AmpCalFitter.plot`](qiskit.ignis.characterization.AmpCalFitter.plot "qiskit.ignis.characterization.AmpCalFitter.plot")(qind\[, series, ax, show\_plot])        | Plot err data.                                          |

