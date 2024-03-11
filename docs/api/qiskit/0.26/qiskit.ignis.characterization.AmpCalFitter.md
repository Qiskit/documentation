---
title: AmpCalFitter
description: API reference for qiskit.ignis.characterization.AmpCalFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.AmpCalFitter
---

# qiskit.ignis.characterization.AmpCalFitter

<span id="qiskit.ignis.characterization.AmpCalFitter" />

`AmpCalFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.6/qiskit/ignis/characterization/gates/fitters.py "view source code")

Amplitude error fitter

See BaseFitter \_\_init\_\_

### \_\_init\_\_

<span id="qiskit.ignis.characterization.AmpCalFitter.__init__" />

`__init__(backend_result, xdata, qubits, fit_p0, fit_bounds)`

See BaseFitter \_\_init\_\_

## Methods

|                                                                                                                                                             |                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.characterization.AmpCalFitter.__init__ "qiskit.ignis.characterization.AmpCalFitter.__init__")(backend\_result, xdata, qubits, …) | See BaseFitter \_\_init\_\_                             |
| [`add_data`](#qiskit.ignis.characterization.AmpCalFitter.add_data "qiskit.ignis.characterization.AmpCalFitter.add_data")(results\[, recalc, refit])         | Add new execution results to previous execution results |
| [`angle_err`](#qiskit.ignis.characterization.AmpCalFitter.angle_err "qiskit.ignis.characterization.AmpCalFitter.angle_err")(\[qind])                        | Return the gate angle error                             |
| [`fit_data`](#qiskit.ignis.characterization.AmpCalFitter.fit_data "qiskit.ignis.characterization.AmpCalFitter.fit_data")(\[qid, p0, bounds, series])        | Fit the curve.                                          |
| [`guess_params`](#qiskit.ignis.characterization.AmpCalFitter.guess_params "qiskit.ignis.characterization.AmpCalFitter.guess_params")(\[qind])               | Guess fit parameters for the amp cal                    |
| [`plot`](#qiskit.ignis.characterization.AmpCalFitter.plot "qiskit.ignis.characterization.AmpCalFitter.plot")(qind\[, series, ax, show\_plot])               | Plot err data.                                          |

## Attributes

|                                                                                                                                               |                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`backend_result`](#qiskit.ignis.characterization.AmpCalFitter.backend_result "qiskit.ignis.characterization.AmpCalFitter.backend_result")    | Return the execution results                                                          |
| [`description`](#qiskit.ignis.characterization.AmpCalFitter.description "qiskit.ignis.characterization.AmpCalFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`fit_fun`](#qiskit.ignis.characterization.AmpCalFitter.fit_fun "qiskit.ignis.characterization.AmpCalFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`measured_qubits`](#qiskit.ignis.characterization.AmpCalFitter.measured_qubits "qiskit.ignis.characterization.AmpCalFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`params`](#qiskit.ignis.characterization.AmpCalFitter.params "qiskit.ignis.characterization.AmpCalFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`params_err`](#qiskit.ignis.characterization.AmpCalFitter.params_err "qiskit.ignis.characterization.AmpCalFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`series`](#qiskit.ignis.characterization.AmpCalFitter.series "qiskit.ignis.characterization.AmpCalFitter.series")                            | Return the list of series for the data                                                |
| [`xdata`](#qiskit.ignis.characterization.AmpCalFitter.xdata "qiskit.ignis.characterization.AmpCalFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ydata`](#qiskit.ignis.characterization.AmpCalFitter.ydata "qiskit.ignis.characterization.AmpCalFitter.ydata")                               | Return the data points on the y-axis                                                  |

### add\_data

<span id="qiskit.ignis.characterization.AmpCalFitter.add_data" />

`add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### angle\_err

<span id="qiskit.ignis.characterization.AmpCalFitter.angle_err" />

`angle_err(qind=- 1)`

Return the gate angle error

**Parameters**

**qind** (*int*) – qubit index to return (-1 return all)

**Returns**

a list of errors

**Return type**

list

### backend\_result

<span id="qiskit.ignis.characterization.AmpCalFitter.backend_result" />

`property backend_result`

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

### description

<span id="qiskit.ignis.characterization.AmpCalFitter.description" />

`property description`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_data

<span id="qiskit.ignis.characterization.AmpCalFitter.fit_data" />

`fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### fit\_fun

<span id="qiskit.ignis.characterization.AmpCalFitter.fit_fun" />

`property fit_fun`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### guess\_params

<span id="qiskit.ignis.characterization.AmpCalFitter.guess_params" />

`guess_params(qind=0)`

Guess fit parameters for the amp cal

**Parameters**

**qind** (*int*) – qubit index to guess fit parameters for

**Returns**

List of fit guess parameters \[thetaerr, offset]

**Return type**

list

### measured\_qubits

<span id="qiskit.ignis.characterization.AmpCalFitter.measured_qubits" />

`property measured_qubits`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.AmpCalFitter.params" />

`property params`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.AmpCalFitter.params_err" />

`property params_err`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### plot

<span id="qiskit.ignis.characterization.AmpCalFitter.plot" />

`plot(qind, series='0', ax=None, show_plot=False)`

Plot err data.

**Parameters**

*   **qind** (*int*) – qubit index to plot
*   **series** (*str*) – the series to plot
*   **ax** (*Axes*) – plot axes
*   **show\_plot** (*bool*) – call plt.show()

**Returns**

The axes object

**Return type**

Axes

**Raises**

**ImportError** – if matplotlib is not installed

### series

<span id="qiskit.ignis.characterization.AmpCalFitter.series" />

`property series`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### xdata

<span id="qiskit.ignis.characterization.AmpCalFitter.xdata" />

`property xdata`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.AmpCalFitter.ydata" />

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

