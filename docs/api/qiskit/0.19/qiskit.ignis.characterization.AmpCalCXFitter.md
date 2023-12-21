---
title: AmpCalCXFitter
description: API reference for qiskit.ignis.characterization.AmpCalCXFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.AmpCalCXFitter
---

# AmpCalCXFitter

<span id="qiskit.ignis.characterization.AmpCalCXFitter" />

`AmpCalCXFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)`

Amplitude error fitter

See BaseFitter \_\_init\_\_

## Attributes

|                                                                                                                                                                 |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`AmpCalCXFitter.backend_result`](qiskit.ignis.characterization.AmpCalCXFitter.backend_result "qiskit.ignis.characterization.AmpCalCXFitter.backend_result")    | Return the execution results                                                          |
| [`AmpCalCXFitter.description`](qiskit.ignis.characterization.AmpCalCXFitter.description "qiskit.ignis.characterization.AmpCalCXFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`AmpCalCXFitter.fit_fun`](qiskit.ignis.characterization.AmpCalCXFitter.fit_fun "qiskit.ignis.characterization.AmpCalCXFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`AmpCalCXFitter.measured_qubits`](qiskit.ignis.characterization.AmpCalCXFitter.measured_qubits "qiskit.ignis.characterization.AmpCalCXFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`AmpCalCXFitter.params`](qiskit.ignis.characterization.AmpCalCXFitter.params "qiskit.ignis.characterization.AmpCalCXFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`AmpCalCXFitter.params_err`](qiskit.ignis.characterization.AmpCalCXFitter.params_err "qiskit.ignis.characterization.AmpCalCXFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`AmpCalCXFitter.series`](qiskit.ignis.characterization.AmpCalCXFitter.series "qiskit.ignis.characterization.AmpCalCXFitter.series")                            | Return the list of series for the data                                                |
| [`AmpCalCXFitter.xdata`](qiskit.ignis.characterization.AmpCalCXFitter.xdata "qiskit.ignis.characterization.AmpCalCXFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`AmpCalCXFitter.ydata`](qiskit.ignis.characterization.AmpCalCXFitter.ydata "qiskit.ignis.characterization.AmpCalCXFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                       |                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`AmpCalCXFitter.add_data`](qiskit.ignis.characterization.AmpCalCXFitter.add_data "qiskit.ignis.characterization.AmpCalCXFitter.add_data")(results\[, recalc, refit]) | Add new execution results to previous execution results |
| [`AmpCalCXFitter.angle_err`](qiskit.ignis.characterization.AmpCalCXFitter.angle_err "qiskit.ignis.characterization.AmpCalCXFitter.angle_err")(\[qind])                | Return the gate angle error                             |
| [`AmpCalCXFitter.fit_data`](qiskit.ignis.characterization.AmpCalCXFitter.fit_data "qiskit.ignis.characterization.AmpCalCXFitter.fit_data")(\[qid, p0, bounds, …])     | Fit the curve.                                          |
| [`AmpCalCXFitter.plot`](qiskit.ignis.characterization.AmpCalCXFitter.plot "qiskit.ignis.characterization.AmpCalCXFitter.plot")(qind\[, series, ax, …])                | Plot err data.                                          |

