---
title: T1Fitter
description: API reference for qiskit.ignis.characterization.T1Fitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.T1Fitter
---

# T1Fitter

<span id="qiskit.ignis.characterization.T1Fitter" />

`T1Fitter(backend_result, xdata, qubits, fit_p0, fit_bounds, time_unit='micro-seconds')`

Estimate T1, based on experiments outcomes,

The experiments were created by t1\_circuits, and executed on the device.

The probabilities of measuring 1 is assumed to be of the form

$$
f(t) = A\mathrm{e}^{-t/T_1}+B,
$$

for unknown parameters A, B, and T1.

**Parameters**

*   **backend\_result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – result of execution of t1\_circuits on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the T1 circuits.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T1‘s are to be measured.
*   **fit\_p0** (`List`\[`float`]) – initial values to the fit parameters, where the order is $(A, T_1, B)$.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – bounds on the parameters to fit. The first tuple is the lower bounds, in the order $(A, T_1, B)$. The second tuple is the upper bounds.
*   **time\_unit** (`str`) – unit of delay times in xdata.

## Attributes

|                                                                                                                                               |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`T1Fitter.backend_result`](qiskit.ignis.characterization.T1Fitter.backend_result "qiskit.ignis.characterization.T1Fitter.backend_result")    | Return the execution results                                                          |
| [`T1Fitter.description`](qiskit.ignis.characterization.T1Fitter.description "qiskit.ignis.characterization.T1Fitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`T1Fitter.fit_fun`](qiskit.ignis.characterization.T1Fitter.fit_fun "qiskit.ignis.characterization.T1Fitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`T1Fitter.measured_qubits`](qiskit.ignis.characterization.T1Fitter.measured_qubits "qiskit.ignis.characterization.T1Fitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`T1Fitter.params`](qiskit.ignis.characterization.T1Fitter.params "qiskit.ignis.characterization.T1Fitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`T1Fitter.params_err`](qiskit.ignis.characterization.T1Fitter.params_err "qiskit.ignis.characterization.T1Fitter.params_err")                | Return the error of the fit function parameters                                       |
| [`T1Fitter.series`](qiskit.ignis.characterization.T1Fitter.series "qiskit.ignis.characterization.T1Fitter.series")                            | Return the list of series for the data                                                |
| [`T1Fitter.xdata`](qiskit.ignis.characterization.T1Fitter.xdata "qiskit.ignis.characterization.T1Fitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`T1Fitter.ydata`](qiskit.ignis.characterization.T1Fitter.ydata "qiskit.ignis.characterization.T1Fitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                      |                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`T1Fitter.add_data`](qiskit.ignis.characterization.T1Fitter.add_data "qiskit.ignis.characterization.T1Fitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results                |
| [`T1Fitter.fit_data`](qiskit.ignis.characterization.T1Fitter.fit_data "qiskit.ignis.characterization.T1Fitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                                         |
| [`T1Fitter.plot`](qiskit.ignis.characterization.T1Fitter.plot "qiskit.ignis.characterization.T1Fitter.plot")(qind\[, series, ax, show\_plot])        | Plot coherence data.                                                   |
| [`T1Fitter.time`](qiskit.ignis.characterization.T1Fitter.time "qiskit.ignis.characterization.T1Fitter.time")(\[qid, series])                         | Return the characteristic time for the given qubit and series          |
| [`T1Fitter.time_err`](qiskit.ignis.characterization.T1Fitter.time_err "qiskit.ignis.characterization.T1Fitter.time_err")(\[qid, series])             | Return the error of characteristic time for the given qubit and series |

