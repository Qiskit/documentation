---
title: T2Fitter
description: API reference for qiskit.ignis.characterization.T2Fitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.T2Fitter
---

# T2Fitter

<span id="qiskit.ignis.characterization.T2Fitter" />

`T2Fitter(backend_result, xdata, qubits, fit_p0, fit_bounds, circbasename='t2', time_unit='micro-seconds')`

Estimate T2, based on experiments outcomes.

The experiments were created by t2\_circuits, and executed on the device.

The probabilities of measuring 0 is assumed to be of the form

$$
f(t) = A\mathrm{e}^{-t/T_2}+B,
$$

for unknown parameters A, B, and T2.

**Parameters**

*   **backend\_result** ([`Result`](qiskit.result.Result "qiskit.result.result.Result")) – result of execution of t2\_circuits on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the T2 circuits.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T2‘s are to be measured.
*   **fit\_p0** (`List`\[`float`]) – initial values to the fit parameters, where the order is $(A, T_2, B)$.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – bounds on the parameters to fit. The first tuple is the lower bounds, in the order $(A, T_2, B)$. The second tuple is the upper bounds.
*   **circbasename** (`str`) – prefix to all circuit names.
*   **time\_unit** (`str`) – unit of delay times in xdata.

## Attributes

|                                                                                                                                               |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`T2Fitter.backend_result`](qiskit.ignis.characterization.T2Fitter.backend_result "qiskit.ignis.characterization.T2Fitter.backend_result")    | Return the execution results                                                          |
| [`T2Fitter.description`](qiskit.ignis.characterization.T2Fitter.description "qiskit.ignis.characterization.T2Fitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`T2Fitter.fit_fun`](qiskit.ignis.characterization.T2Fitter.fit_fun "qiskit.ignis.characterization.T2Fitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`T2Fitter.measured_qubits`](qiskit.ignis.characterization.T2Fitter.measured_qubits "qiskit.ignis.characterization.T2Fitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`T2Fitter.params`](qiskit.ignis.characterization.T2Fitter.params "qiskit.ignis.characterization.T2Fitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`T2Fitter.params_err`](qiskit.ignis.characterization.T2Fitter.params_err "qiskit.ignis.characterization.T2Fitter.params_err")                | Return the error of the fit function parameters                                       |
| [`T2Fitter.series`](qiskit.ignis.characterization.T2Fitter.series "qiskit.ignis.characterization.T2Fitter.series")                            | Return the list of series for the data                                                |
| [`T2Fitter.xdata`](qiskit.ignis.characterization.T2Fitter.xdata "qiskit.ignis.characterization.T2Fitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`T2Fitter.ydata`](qiskit.ignis.characterization.T2Fitter.ydata "qiskit.ignis.characterization.T2Fitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                      |                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`T2Fitter.add_data`](qiskit.ignis.characterization.T2Fitter.add_data "qiskit.ignis.characterization.T2Fitter.add_data")(results\[, recalc, refit])  | Add new execution results to previous execution results                |
| [`T2Fitter.fit_data`](qiskit.ignis.characterization.T2Fitter.fit_data "qiskit.ignis.characterization.T2Fitter.fit_data")(\[qid, p0, bounds, series]) | Fit the curve.                                                         |
| [`T2Fitter.plot`](qiskit.ignis.characterization.T2Fitter.plot "qiskit.ignis.characterization.T2Fitter.plot")(qind\[, series, ax, show\_plot])        | Plot coherence data.                                                   |
| [`T2Fitter.time`](qiskit.ignis.characterization.T2Fitter.time "qiskit.ignis.characterization.T2Fitter.time")(\[qid, series])                         | Return the characteristic time for the given qubit and series          |
| [`T2Fitter.time_err`](qiskit.ignis.characterization.T2Fitter.time_err "qiskit.ignis.characterization.T2Fitter.time_err")(\[qid, series])             | Return the error of characteristic time for the given qubit and series |

