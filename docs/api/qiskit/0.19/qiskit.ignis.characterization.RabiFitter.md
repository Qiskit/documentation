---
title: RabiFitter
description: API reference for qiskit.ignis.characterization.RabiFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.RabiFitter
---

# RabiFitter

<span id="qiskit.ignis.characterization.RabiFitter" />

`RabiFitter(backend_result, xdata, qubits, fit_p0, fit_bounds=None)`

Rabi Experiment fitter

See BaseCalibrationFitter \_\_init\_\_

fit\_po is \[amp, freq, phase, offset]

## Attributes

|                                                                                                                                                     |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`RabiFitter.backend_result`](qiskit.ignis.characterization.RabiFitter.backend_result "qiskit.ignis.characterization.RabiFitter.backend_result")    | Return the execution results                                                          |
| [`RabiFitter.description`](qiskit.ignis.characterization.RabiFitter.description "qiskit.ignis.characterization.RabiFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`RabiFitter.fit_fun`](qiskit.ignis.characterization.RabiFitter.fit_fun "qiskit.ignis.characterization.RabiFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`RabiFitter.measured_qubits`](qiskit.ignis.characterization.RabiFitter.measured_qubits "qiskit.ignis.characterization.RabiFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`RabiFitter.params`](qiskit.ignis.characterization.RabiFitter.params "qiskit.ignis.characterization.RabiFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`RabiFitter.params_err`](qiskit.ignis.characterization.RabiFitter.params_err "qiskit.ignis.characterization.RabiFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`RabiFitter.series`](qiskit.ignis.characterization.RabiFitter.series "qiskit.ignis.characterization.RabiFitter.series")                            | Return the list of series for the data                                                |
| [`RabiFitter.xdata`](qiskit.ignis.characterization.RabiFitter.xdata "qiskit.ignis.characterization.RabiFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`RabiFitter.ydata`](qiskit.ignis.characterization.RabiFitter.ydata "qiskit.ignis.characterization.RabiFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                            |                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`RabiFitter.add_data`](qiskit.ignis.characterization.RabiFitter.add_data "qiskit.ignis.characterization.RabiFitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results |
| [`RabiFitter.fit_data`](qiskit.ignis.characterization.RabiFitter.fit_data "qiskit.ignis.characterization.RabiFitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                          |
| [`RabiFitter.guess_params`](qiskit.ignis.characterization.RabiFitter.guess_params "qiskit.ignis.characterization.RabiFitter.guess_params")(\[qind])        | Guess fit parameters for rabi oscillation data          |
| [`RabiFitter.pi2_amplitude`](qiskit.ignis.characterization.RabiFitter.pi2_amplitude "qiskit.ignis.characterization.RabiFitter.pi2_amplitude")(\[qind])     | Return the pi/2 amplitude from the fit                  |
| [`RabiFitter.pi_amplitude`](qiskit.ignis.characterization.RabiFitter.pi_amplitude "qiskit.ignis.characterization.RabiFitter.pi_amplitude")(\[qind])        | Return the pi amplitude from the fit                    |
| [`RabiFitter.plot`](qiskit.ignis.characterization.RabiFitter.plot "qiskit.ignis.characterization.RabiFitter.plot")(qind\[, series, ax, show\_plot])        | Plot the data and fit                                   |

