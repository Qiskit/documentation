---
title: BaseCoherenceFitter
description: API reference for qiskit.ignis.characterization.BaseCoherenceFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.BaseCoherenceFitter
---

# BaseCoherenceFitter

<span id="qiskit.ignis.characterization.BaseCoherenceFitter" />

`BaseCoherenceFitter(description, backend_result, xdata, qubits, fit_fun, fit_p0, fit_bounds, circuit_names, series=None, expected_state='0', time_index=0, time_unit='micro-seconds')`

Base class for fitters of characteristic times

**Parameters**

*   **description** (`str`) – description of the fitter’s purpose, e.g. ‘T1’.
*   **backend\_result** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – result of execution on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the circuits.
*   **qubits** (`List`\[`int`]) – the qubits to be characterized.
*   **fit\_fun** (`Callable`\[…, `float`]) – equivalent to parameter f of scipy.curve\_fit.
*   **fit\_p0** (`List`\[`float`]) – equivalent to parameter p0 of scipy.curve\_fit.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – equivalent to parameter bounds of scipy.curve\_fit.
*   **circuit\_names** (`List`\[`str`]) – names of the circuits, should be the same length as xdata. Full circuit name will be these plus the series name.
*   **series** (`Optional`\[`List`\[`str`]]) – list of circuit name tags
*   **expected\_state** (`str`) – is the circuit supposed to end up in ‘0’ or ‘1’?
*   **time\_index** (`int`) – among parameters of fit\_fun, which one is the characteristic time.
*   **time\_unit** (`str`) – unit of delay times in xdata.

## Attributes

|                                                                                                                                                                                |                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [`BaseCoherenceFitter.backend_result`](qiskit.ignis.characterization.BaseCoherenceFitter.backend_result "qiskit.ignis.characterization.BaseCoherenceFitter.backend_result")    | Return the execution results                                                          |
| [`BaseCoherenceFitter.description`](qiskit.ignis.characterization.BaseCoherenceFitter.description "qiskit.ignis.characterization.BaseCoherenceFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`BaseCoherenceFitter.fit_fun`](qiskit.ignis.characterization.BaseCoherenceFitter.fit_fun "qiskit.ignis.characterization.BaseCoherenceFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`BaseCoherenceFitter.measured_qubits`](qiskit.ignis.characterization.BaseCoherenceFitter.measured_qubits "qiskit.ignis.characterization.BaseCoherenceFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`BaseCoherenceFitter.params`](qiskit.ignis.characterization.BaseCoherenceFitter.params "qiskit.ignis.characterization.BaseCoherenceFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`BaseCoherenceFitter.params_err`](qiskit.ignis.characterization.BaseCoherenceFitter.params_err "qiskit.ignis.characterization.BaseCoherenceFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`BaseCoherenceFitter.series`](qiskit.ignis.characterization.BaseCoherenceFitter.series "qiskit.ignis.characterization.BaseCoherenceFitter.series")                            | Return the list of series for the data                                                |
| [`BaseCoherenceFitter.xdata`](qiskit.ignis.characterization.BaseCoherenceFitter.xdata "qiskit.ignis.characterization.BaseCoherenceFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`BaseCoherenceFitter.ydata`](qiskit.ignis.characterization.BaseCoherenceFitter.ydata "qiskit.ignis.characterization.BaseCoherenceFitter.ydata")                               | Return the data points on the y-axis                                                  |

## Methods

|                                                                                                                                                                           |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`BaseCoherenceFitter.add_data`](qiskit.ignis.characterization.BaseCoherenceFitter.add_data "qiskit.ignis.characterization.BaseCoherenceFitter.add_data")(results\[, …])  | Add new execution results to previous execution results                |
| [`BaseCoherenceFitter.fit_data`](qiskit.ignis.characterization.BaseCoherenceFitter.fit_data "qiskit.ignis.characterization.BaseCoherenceFitter.fit_data")(\[qid, p0, …])  | Fit the curve.                                                         |
| [`BaseCoherenceFitter.plot`](qiskit.ignis.characterization.BaseCoherenceFitter.plot "qiskit.ignis.characterization.BaseCoherenceFitter.plot")(qind, series\[, ax, …])     | Plot coherence data.                                                   |
| [`BaseCoherenceFitter.time`](qiskit.ignis.characterization.BaseCoherenceFitter.time "qiskit.ignis.characterization.BaseCoherenceFitter.time")(\[qid, series])             | Return the characteristic time for the given qubit and series          |
| [`BaseCoherenceFitter.time_err`](qiskit.ignis.characterization.BaseCoherenceFitter.time_err "qiskit.ignis.characterization.BaseCoherenceFitter.time_err")(\[qid, series]) | Return the error of characteristic time for the given qubit and series |

