---
title: AngleCalCXFitter
description: API reference for qiskit.ignis.characterization.AngleCalCXFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.AngleCalCXFitter
---

# AngleCalCXFitter

<span id="qiskit.ignis.characterization.AngleCalCXFitter" />

`AngleCalCXFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)`

Amplitude error fitter

See BaseFitter \_\_init\_\_

## Attributes

|                                                                                                                                                                       |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`AngleCalCXFitter.backend_result`](qiskit.ignis.characterization.AngleCalCXFitter.backend_result "qiskit.ignis.characterization.AngleCalCXFitter.backend_result")    | Return the execution results                                                          |
| [`AngleCalCXFitter.description`](qiskit.ignis.characterization.AngleCalCXFitter.description "qiskit.ignis.characterization.AngleCalCXFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`AngleCalCXFitter.fit_fun`](qiskit.ignis.characterization.AngleCalCXFitter.fit_fun "qiskit.ignis.characterization.AngleCalCXFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`AngleCalCXFitter.measured_qubits`](qiskit.ignis.characterization.AngleCalCXFitter.measured_qubits "qiskit.ignis.characterization.AngleCalCXFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`AngleCalCXFitter.params`](qiskit.ignis.characterization.AngleCalCXFitter.params "qiskit.ignis.characterization.AngleCalCXFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`AngleCalCXFitter.params_err`](qiskit.ignis.characterization.AngleCalCXFitter.params_err "qiskit.ignis.characterization.AngleCalCXFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`AngleCalCXFitter.series`](qiskit.ignis.characterization.AngleCalCXFitter.series "qiskit.ignis.characterization.AngleCalCXFitter.series")                            | Return the list of series for the data                                                |
| [`AngleCalCXFitter.xdata`](qiskit.ignis.characterization.AngleCalCXFitter.xdata "qiskit.ignis.characterization.AngleCalCXFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`AngleCalCXFitter.ydata`](qiskit.ignis.characterization.AngleCalCXFitter.ydata "qiskit.ignis.characterization.AngleCalCXFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                         |                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`AngleCalCXFitter.add_data`](qiskit.ignis.characterization.AngleCalCXFitter.add_data "qiskit.ignis.characterization.AngleCalCXFitter.add_data")(results\[, recalc, …]) | Add new execution results to previous execution results |
| [`AngleCalCXFitter.angle_err`](qiskit.ignis.characterization.AngleCalCXFitter.angle_err "qiskit.ignis.characterization.AngleCalCXFitter.angle_err")(\[qind])            | Return the gate angle error                             |
| [`AngleCalCXFitter.fit_data`](qiskit.ignis.characterization.AngleCalCXFitter.fit_data "qiskit.ignis.characterization.AngleCalCXFitter.fit_data")(\[qid, p0, bounds, …]) | Fit the curve.                                          |
| [`AngleCalCXFitter.plot`](qiskit.ignis.characterization.AngleCalCXFitter.plot "qiskit.ignis.characterization.AngleCalCXFitter.plot")(qind\[, series, ax, …])            | Plot err data.                                          |

