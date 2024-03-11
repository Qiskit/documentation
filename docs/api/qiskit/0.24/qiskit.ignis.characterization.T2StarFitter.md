---
title: T2StarFitter
description: API reference for qiskit.ignis.characterization.T2StarFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.T2StarFitter
---

<span id="qiskit-ignis-characterization-t2starfitter" />

# qiskit.ignis.characterization.T2StarFitter

<span id="qiskit.ignis.characterization.T2StarFitter" />

`T2StarFitter(backend_result, xdata, qubits, fit_p0, fit_bounds, time_unit='micro-seconds')` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.5/qiskit/ignis/characterization/coherence/fitters.py "view source code")

Estimate T2\*, based on experiments outcomes.

The experiments were created by t2star\_circuits, and executed on the device.

The probabilities of measuring 0 is assumed to be of the form

$$
f(t) = A\mathrm{e}^{-t / T_2^*}\cos(2\pi ft + \phi) + B
$$

for unknown parameters $A, B, f, \phi, T_2^*$.

**Parameters**

*   **backend\_result** (`Result`) – result of execution of t2star\_circuits on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the T2\* circuits.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T2:sup:\* ‘s are to be measured.
*   **fit\_p0** (`List`\[`float`]) – initial values to the fit parameters, where the order is $(A, T_2^*, f, \phi, B)$.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – bounds on the parameters to fit. The first tuple is the lower bounds, in the order $(A, T_2^*, f, \phi, B)$. The second tuple is the upper bounds.
*   **time\_unit** (`str`) – unit of delay times in xdata.

### \_\_init\_\_

<span id="qiskit.ignis.characterization.T2StarFitter.__init__" />

`__init__(backend_result, xdata, qubits, fit_p0, fit_bounds, time_unit='micro-seconds')`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                             |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.characterization.T2StarFitter.__init__ "qiskit.ignis.characterization.T2StarFitter.__init__")(backend\_result, xdata, qubits, …) | Initialize self.                                                       |
| [`add_data`](#qiskit.ignis.characterization.T2StarFitter.add_data "qiskit.ignis.characterization.T2StarFitter.add_data")(results\[, recalc, refit])         | Add new execution results to previous execution results                |
| [`fit_data`](#qiskit.ignis.characterization.T2StarFitter.fit_data "qiskit.ignis.characterization.T2StarFitter.fit_data")(\[qid, p0, bounds, series])        | Fit the curve.                                                         |
| [`guess_params`](#qiskit.ignis.characterization.T2StarFitter.guess_params "qiskit.ignis.characterization.T2StarFitter.guess_params")(\[qind])               | Guess fit parameters for oscillation data                              |
| [`plot`](#qiskit.ignis.characterization.T2StarFitter.plot "qiskit.ignis.characterization.T2StarFitter.plot")(qind\[, series, ax, show\_plot])               | Plot coherence data.                                                   |
| [`time`](#qiskit.ignis.characterization.T2StarFitter.time "qiskit.ignis.characterization.T2StarFitter.time")(\[qid, series])                                | Return the characteristic time for the given qubit and series          |
| [`time_err`](#qiskit.ignis.characterization.T2StarFitter.time_err "qiskit.ignis.characterization.T2StarFitter.time_err")(\[qid, series])                    | Return the error of characteristic time for the given qubit and series |

## Attributes

|                                                                                                                                               |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`backend_result`](#qiskit.ignis.characterization.T2StarFitter.backend_result "qiskit.ignis.characterization.T2StarFitter.backend_result")    | Return the execution results                                                          |
| [`description`](#qiskit.ignis.characterization.T2StarFitter.description "qiskit.ignis.characterization.T2StarFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`fit_fun`](#qiskit.ignis.characterization.T2StarFitter.fit_fun "qiskit.ignis.characterization.T2StarFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`measured_qubits`](#qiskit.ignis.characterization.T2StarFitter.measured_qubits "qiskit.ignis.characterization.T2StarFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`params`](#qiskit.ignis.characterization.T2StarFitter.params "qiskit.ignis.characterization.T2StarFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`params_err`](#qiskit.ignis.characterization.T2StarFitter.params_err "qiskit.ignis.characterization.T2StarFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`series`](#qiskit.ignis.characterization.T2StarFitter.series "qiskit.ignis.characterization.T2StarFitter.series")                            | Return the list of series for the data                                                |
| [`xdata`](#qiskit.ignis.characterization.T2StarFitter.xdata "qiskit.ignis.characterization.T2StarFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ydata`](#qiskit.ignis.characterization.T2StarFitter.ydata "qiskit.ignis.characterization.T2StarFitter.ydata")                               | Return the data points on the y-axis                                                  |

### add\_data

<span id="qiskit.ignis.characterization.T2StarFitter.add_data" />

`add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### backend\_result

<span id="qiskit.ignis.characterization.T2StarFitter.backend_result" />

`property backend_result`

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

### description

<span id="qiskit.ignis.characterization.T2StarFitter.description" />

`property description`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_data

<span id="qiskit.ignis.characterization.T2StarFitter.fit_data" />

`fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### fit\_fun

<span id="qiskit.ignis.characterization.T2StarFitter.fit_fun" />

`property fit_fun`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### guess\_params

<span id="qiskit.ignis.characterization.T2StarFitter.guess_params" />

`guess_params(qind=0)`

Guess fit parameters for oscillation data

**Parameters**

**qind** (`int`) – qubit index to guess fit parameters for

**Return type**

`List`\[`float`]

**Returns**

Fit guessed parameters

### measured\_qubits

<span id="qiskit.ignis.characterization.T2StarFitter.measured_qubits" />

`property measured_qubits`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.T2StarFitter.params" />

`property params`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.T2StarFitter.params_err" />

`property params_err`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### plot

<span id="qiskit.ignis.characterization.T2StarFitter.plot" />

`plot(qind, series='0', ax=None, show_plot=False)`

Plot coherence data.

**Parameters**

*   **qind** – qubit index to plot
*   **series** – which series to plot (if list then plot multiple)
*   **ax** – plot axes
*   **show\_plot** – whether to call plt.show()

**Returns**

The axes object

**Return type**

Axes

**Raises**

**ImportError** – if matplotlib is not installed

### series

<span id="qiskit.ignis.characterization.T2StarFitter.series" />

`property series`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### time

<span id="qiskit.ignis.characterization.T2StarFitter.time" />

`time(qid=- 1, series='0')`

Return the characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The characteristic time of the qubit, or all qubits

### time\_err

<span id="qiskit.ignis.characterization.T2StarFitter.time_err" />

`time_err(qid=- 1, series='0')`

Return the error of characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The error of the characteristic time of the qubit, or all qubits

### xdata

<span id="qiskit.ignis.characterization.T2StarFitter.xdata" />

`property xdata`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.T2StarFitter.ydata" />

`property ydata`

Return the data points on the y-axis

The data points are returning in the form of a list of dictionaries:

> *   **ydata\[i]\[‘mean’] is a list, where item**
>
>     no. j is the probability of success of qubit i for a circuit that lasts xdata\[j].
>
> *   **ydata\[i]\[‘std’] is a list, where ydata\[‘std’]\[j] is the**
>
>     standard deviation of the success of qubit i.

**Return type**

`List`\[`Dict`]

