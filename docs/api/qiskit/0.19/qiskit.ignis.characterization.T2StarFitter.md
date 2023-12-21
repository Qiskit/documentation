---
title: T2StarFitter
description: API reference for qiskit.ignis.characterization.T2StarFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.T2StarFitter
---

# T2StarFitter

<span id="qiskit.ignis.characterization.T2StarFitter" />

`T2StarFitter(backend_result, xdata, qubits, fit_p0, fit_bounds, time_unit='micro-seconds')`

Estimate T2\*, based on experiments outcomes.

The experiments were created by t2star\_circuits, and executed on the device.

The probabilities of measuring 0 is assumed to be of the form

$$
f(t) = A\mathrm{e}^{-t / T_2^*}\cos(2\pi ft + \phi) + B
$$

for unknown parameters $A, B, f, \phi, T_2^*$.

**Parameters**

*   **backend\_result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – result of execution of t2star\_circuits on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the T2\* circuits.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T2:sup:\* ‘s are to be measured.
*   **fit\_p0** (`List`\[`float`]) – initial values to the fit parameters, where the order is $(A, T_2^*, f, \phi, B)$.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – bounds on the parameters to fit. The first tuple is the lower bounds, in the order $(A, T_2^*, f, \phi, B)$. The second tuple is the upper bounds.
*   **time\_unit** (`str`) – unit of delay times in xdata.

## Attributes

|                                                                                                                                                           |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`T2StarFitter.backend_result`](qiskit.ignis.characterization.T2StarFitter.backend_result "qiskit.ignis.characterization.T2StarFitter.backend_result")    | Return the execution results                                                          |
| [`T2StarFitter.description`](qiskit.ignis.characterization.T2StarFitter.description "qiskit.ignis.characterization.T2StarFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`T2StarFitter.fit_fun`](qiskit.ignis.characterization.T2StarFitter.fit_fun "qiskit.ignis.characterization.T2StarFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`T2StarFitter.measured_qubits`](qiskit.ignis.characterization.T2StarFitter.measured_qubits "qiskit.ignis.characterization.T2StarFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`T2StarFitter.params`](qiskit.ignis.characterization.T2StarFitter.params "qiskit.ignis.characterization.T2StarFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`T2StarFitter.params_err`](qiskit.ignis.characterization.T2StarFitter.params_err "qiskit.ignis.characterization.T2StarFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`T2StarFitter.series`](qiskit.ignis.characterization.T2StarFitter.series "qiskit.ignis.characterization.T2StarFitter.series")                            | Return the list of series for the data                                                |
| [`T2StarFitter.xdata`](qiskit.ignis.characterization.T2StarFitter.xdata "qiskit.ignis.characterization.T2StarFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`T2StarFitter.ydata`](qiskit.ignis.characterization.T2StarFitter.ydata "qiskit.ignis.characterization.T2StarFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                  |                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`T2StarFitter.add_data`](qiskit.ignis.characterization.T2StarFitter.add_data "qiskit.ignis.characterization.T2StarFitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results                |
| [`T2StarFitter.fit_data`](qiskit.ignis.characterization.T2StarFitter.fit_data "qiskit.ignis.characterization.T2StarFitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                                         |
| [`T2StarFitter.guess_params`](qiskit.ignis.characterization.T2StarFitter.guess_params "qiskit.ignis.characterization.T2StarFitter.guess_params")(\[qind])        | Guess fit parameters for oscillation data                              |
| [`T2StarFitter.plot`](qiskit.ignis.characterization.T2StarFitter.plot "qiskit.ignis.characterization.T2StarFitter.plot")(qind\[, series, ax, show\_plot])        | Plot coherence data.                                                   |
| [`T2StarFitter.time`](qiskit.ignis.characterization.T2StarFitter.time "qiskit.ignis.characterization.T2StarFitter.time")(\[qid, series])                         | Return the characteristic time for the given qubit and series          |
| [`T2StarFitter.time_err`](qiskit.ignis.characterization.T2StarFitter.time_err "qiskit.ignis.characterization.T2StarFitter.time_err")(\[qid, series])             | Return the error of characteristic time for the given qubit and series |

