---
title: AngleCalFitter
description: API reference for qiskit.ignis.characterization.AngleCalFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.AngleCalFitter
---

# AngleCalFitter

<span id="qiskit.ignis.characterization.AngleCalFitter" />

`AngleCalFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)`

Amplitude error fitter

See BaseFitter \_\_init\_\_

## Attributes

|                                                                                                                                                                 |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`AngleCalFitter.backend_result`](qiskit.ignis.characterization.AngleCalFitter.backend_result "qiskit.ignis.characterization.AngleCalFitter.backend_result")    | Return the execution results                                                          |
| [`AngleCalFitter.description`](qiskit.ignis.characterization.AngleCalFitter.description "qiskit.ignis.characterization.AngleCalFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`AngleCalFitter.fit_fun`](qiskit.ignis.characterization.AngleCalFitter.fit_fun "qiskit.ignis.characterization.AngleCalFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`AngleCalFitter.measured_qubits`](qiskit.ignis.characterization.AngleCalFitter.measured_qubits "qiskit.ignis.characterization.AngleCalFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`AngleCalFitter.params`](qiskit.ignis.characterization.AngleCalFitter.params "qiskit.ignis.characterization.AngleCalFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`AngleCalFitter.params_err`](qiskit.ignis.characterization.AngleCalFitter.params_err "qiskit.ignis.characterization.AngleCalFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`AngleCalFitter.series`](qiskit.ignis.characterization.AngleCalFitter.series "qiskit.ignis.characterization.AngleCalFitter.series")                            | Return the list of series for the data                                                |
| [`AngleCalFitter.xdata`](qiskit.ignis.characterization.AngleCalFitter.xdata "qiskit.ignis.characterization.AngleCalFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`AngleCalFitter.ydata`](qiskit.ignis.characterization.AngleCalFitter.ydata "qiskit.ignis.characterization.AngleCalFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                       |                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`AngleCalFitter.add_data`](qiskit.ignis.characterization.AngleCalFitter.add_data "qiskit.ignis.characterization.AngleCalFitter.add_data")(results\[, recalc, refit]) | Add new execution results to previous execution results |
| [`AngleCalFitter.angle_err`](qiskit.ignis.characterization.AngleCalFitter.angle_err "qiskit.ignis.characterization.AngleCalFitter.angle_err")(\[qind])                | Return the gate angle error                             |
| [`AngleCalFitter.fit_data`](qiskit.ignis.characterization.AngleCalFitter.fit_data "qiskit.ignis.characterization.AngleCalFitter.fit_data")(\[qid, p0, bounds, …])     | Fit the curve.                                          |
| [`AngleCalFitter.plot`](qiskit.ignis.characterization.AngleCalFitter.plot "qiskit.ignis.characterization.AngleCalFitter.plot")(qind\[, series, ax, …])                | Plot err data.                                          |

