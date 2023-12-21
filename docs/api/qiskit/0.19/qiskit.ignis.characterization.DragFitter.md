---
title: DragFitter
description: API reference for qiskit.ignis.characterization.DragFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.DragFitter
---

# DragFitter

<span id="qiskit.ignis.characterization.DragFitter" />

`DragFitter(backend_result, xdata, qubits, fit_p0, fit_bounds=None)`

Drag Experiment fitter

See IQFitter \_\_init\_\_

fit\_p0 is \[a, x0, c] where the fit is a\*(x-x0)^2+c

## Attributes

|                                                                                                                                                     |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`DragFitter.backend_result`](qiskit.ignis.characterization.DragFitter.backend_result "qiskit.ignis.characterization.DragFitter.backend_result")    | Return the execution results                                                          |
| [`DragFitter.description`](qiskit.ignis.characterization.DragFitter.description "qiskit.ignis.characterization.DragFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`DragFitter.fit_fun`](qiskit.ignis.characterization.DragFitter.fit_fun "qiskit.ignis.characterization.DragFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`DragFitter.measured_qubits`](qiskit.ignis.characterization.DragFitter.measured_qubits "qiskit.ignis.characterization.DragFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`DragFitter.params`](qiskit.ignis.characterization.DragFitter.params "qiskit.ignis.characterization.DragFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`DragFitter.params_err`](qiskit.ignis.characterization.DragFitter.params_err "qiskit.ignis.characterization.DragFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`DragFitter.series`](qiskit.ignis.characterization.DragFitter.series "qiskit.ignis.characterization.DragFitter.series")                            | Return the list of series for the data                                                |
| [`DragFitter.xdata`](qiskit.ignis.characterization.DragFitter.xdata "qiskit.ignis.characterization.DragFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`DragFitter.ydata`](qiskit.ignis.characterization.DragFitter.ydata "qiskit.ignis.characterization.DragFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                            |                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`DragFitter.add_data`](qiskit.ignis.characterization.DragFitter.add_data "qiskit.ignis.characterization.DragFitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results |
| [`DragFitter.drag_amplitude`](qiskit.ignis.characterization.DragFitter.drag_amplitude "qiskit.ignis.characterization.DragFitter.drag_amplitude")(\[qind])  | Return the drag amplitude from the fit                  |
| [`DragFitter.fit_data`](qiskit.ignis.characterization.DragFitter.fit_data "qiskit.ignis.characterization.DragFitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                          |
| [`DragFitter.guess_params`](qiskit.ignis.characterization.DragFitter.guess_params "qiskit.ignis.characterization.DragFitter.guess_params")(\[qind])        | Guess parameters for the drag fit                       |
| [`DragFitter.plot`](qiskit.ignis.characterization.DragFitter.plot "qiskit.ignis.characterization.DragFitter.plot")(qind\[, series, ax, show\_plot])        | Plot the data and fit                                   |

