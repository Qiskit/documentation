---
title: BaseGateFitter
description: API reference for qiskit.ignis.characterization.BaseGateFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.BaseGateFitter
---

# BaseGateFitter

<span id="qiskit.ignis.characterization.BaseGateFitter" />

`BaseGateFitter(description, backend_result, xdata, qubits, fit_fun, fit_p0, fit_bounds, circuit_names, series=None, expected_state='0')`

Base class for fitters of gate errors

See BaseFitter \_\_init\_\_

## Attributes

|                                                                                                                                                                 |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`BaseGateFitter.backend_result`](qiskit.ignis.characterization.BaseGateFitter.backend_result "qiskit.ignis.characterization.BaseGateFitter.backend_result")    | Return the execution results                                                          |
| [`BaseGateFitter.description`](qiskit.ignis.characterization.BaseGateFitter.description "qiskit.ignis.characterization.BaseGateFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`BaseGateFitter.fit_fun`](qiskit.ignis.characterization.BaseGateFitter.fit_fun "qiskit.ignis.characterization.BaseGateFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`BaseGateFitter.measured_qubits`](qiskit.ignis.characterization.BaseGateFitter.measured_qubits "qiskit.ignis.characterization.BaseGateFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`BaseGateFitter.params`](qiskit.ignis.characterization.BaseGateFitter.params "qiskit.ignis.characterization.BaseGateFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`BaseGateFitter.params_err`](qiskit.ignis.characterization.BaseGateFitter.params_err "qiskit.ignis.characterization.BaseGateFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`BaseGateFitter.series`](qiskit.ignis.characterization.BaseGateFitter.series "qiskit.ignis.characterization.BaseGateFitter.series")                            | Return the list of series for the data                                                |
| [`BaseGateFitter.xdata`](qiskit.ignis.characterization.BaseGateFitter.xdata "qiskit.ignis.characterization.BaseGateFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`BaseGateFitter.ydata`](qiskit.ignis.characterization.BaseGateFitter.ydata "qiskit.ignis.characterization.BaseGateFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                       |                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`BaseGateFitter.add_data`](qiskit.ignis.characterization.BaseGateFitter.add_data "qiskit.ignis.characterization.BaseGateFitter.add_data")(results\[, recalc, refit]) | Add new execution results to previous execution results |
| [`BaseGateFitter.fit_data`](qiskit.ignis.characterization.BaseGateFitter.fit_data "qiskit.ignis.characterization.BaseGateFitter.fit_data")(\[qid, p0, bounds, …])     | Fit the curve.                                          |
| [`BaseGateFitter.plot`](qiskit.ignis.characterization.BaseGateFitter.plot "qiskit.ignis.characterization.BaseGateFitter.plot")(qind\[, series, ax, …])                | Plot err data.                                          |

