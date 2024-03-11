---
title: RabiFitter
description: API reference for qiskit.ignis.characterization.RabiFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.RabiFitter
---

<span id="qiskit-ignis-characterization-rabifitter" />

# qiskit.ignis.characterization.RabiFitter

<span id="qiskit.ignis.characterization.RabiFitter" />

`RabiFitter(backend_result, xdata, qubits, fit_p0, fit_bounds=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.5/qiskit/ignis/characterization/calibrations/fitters.py "view source code")

Rabi Experiment fitter

See BaseCalibrationFitter \_\_init\_\_

fit\_po is \[amp, freq, phase, offset]

### \_\_init\_\_

<span id="qiskit.ignis.characterization.RabiFitter.__init__" />

`__init__(backend_result, xdata, qubits, fit_p0, fit_bounds=None)`

See BaseCalibrationFitter \_\_init\_\_

fit\_po is \[amp, freq, phase, offset]

## Methods

|                                                                                                                                                               |                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.characterization.RabiFitter.__init__ "qiskit.ignis.characterization.RabiFitter.__init__")(backend\_result, xdata, qubits, fit\_p0) | See BaseCalibrationFitter \_\_init\_\_                  |
| [`add_data`](#qiskit.ignis.characterization.RabiFitter.add_data "qiskit.ignis.characterization.RabiFitter.add_data")(results\[, recalc, refit])               | Add new execution results to previous execution results |
| [`fit_data`](#qiskit.ignis.characterization.RabiFitter.fit_data "qiskit.ignis.characterization.RabiFitter.fit_data")(\[qid, p0, bounds, series])              | Fit the curve.                                          |
| [`guess_params`](#qiskit.ignis.characterization.RabiFitter.guess_params "qiskit.ignis.characterization.RabiFitter.guess_params")(\[qind])                     | Guess fit parameters for rabi oscillation data          |
| [`pi2_amplitude`](#qiskit.ignis.characterization.RabiFitter.pi2_amplitude "qiskit.ignis.characterization.RabiFitter.pi2_amplitude")(\[qind])                  | Return the pi/2 amplitude from the fit                  |
| [`pi_amplitude`](#qiskit.ignis.characterization.RabiFitter.pi_amplitude "qiskit.ignis.characterization.RabiFitter.pi_amplitude")(\[qind])                     | Return the pi amplitude from the fit                    |
| [`plot`](#qiskit.ignis.characterization.RabiFitter.plot "qiskit.ignis.characterization.RabiFitter.plot")(qind\[, series, ax, show\_plot])                     | Plot the data and fit                                   |

## Attributes

|                                                                                                                                           |                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`backend_result`](#qiskit.ignis.characterization.RabiFitter.backend_result "qiskit.ignis.characterization.RabiFitter.backend_result")    | Return the execution results                                                          |
| [`description`](#qiskit.ignis.characterization.RabiFitter.description "qiskit.ignis.characterization.RabiFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`fit_fun`](#qiskit.ignis.characterization.RabiFitter.fit_fun "qiskit.ignis.characterization.RabiFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`measured_qubits`](#qiskit.ignis.characterization.RabiFitter.measured_qubits "qiskit.ignis.characterization.RabiFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`params`](#qiskit.ignis.characterization.RabiFitter.params "qiskit.ignis.characterization.RabiFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`params_err`](#qiskit.ignis.characterization.RabiFitter.params_err "qiskit.ignis.characterization.RabiFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`series`](#qiskit.ignis.characterization.RabiFitter.series "qiskit.ignis.characterization.RabiFitter.series")                            | Return the list of series for the data                                                |
| [`xdata`](#qiskit.ignis.characterization.RabiFitter.xdata "qiskit.ignis.characterization.RabiFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ydata`](#qiskit.ignis.characterization.RabiFitter.ydata "qiskit.ignis.characterization.RabiFitter.ydata")                               | Return the data points on the y-axis                                                  |

### add\_data

<span id="qiskit.ignis.characterization.RabiFitter.add_data" />

`add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### backend\_result

<span id="qiskit.ignis.characterization.RabiFitter.backend_result" />

`property backend_result`

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

### description

<span id="qiskit.ignis.characterization.RabiFitter.description" />

`property description`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_data

<span id="qiskit.ignis.characterization.RabiFitter.fit_data" />

`fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### fit\_fun

<span id="qiskit.ignis.characterization.RabiFitter.fit_fun" />

`property fit_fun`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### guess\_params

<span id="qiskit.ignis.characterization.RabiFitter.guess_params" />

`guess_params(qind=0)`

Guess fit parameters for rabi oscillation data

**Parameters**

**qind** (*int*) – qubit index to guess fit parameters for

**Returns**

**List of fit guess parameters**

\[amp, freq, phase, offset]

**Return type**

list

### measured\_qubits

<span id="qiskit.ignis.characterization.RabiFitter.measured_qubits" />

`property measured_qubits`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.RabiFitter.params" />

`property params`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.RabiFitter.params_err" />

`property params_err`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### pi2\_amplitude

<span id="qiskit.ignis.characterization.RabiFitter.pi2_amplitude" />

`pi2_amplitude(qind=- 1)`

Return the pi/2 amplitude from the fit

**Parameters**

**qind** (*int*) – qubit index

**Returns**

$\frac{\pi}{2}$ amp

**Return type**

float

### pi\_amplitude

<span id="qiskit.ignis.characterization.RabiFitter.pi_amplitude" />

`pi_amplitude(qind=- 1)`

Return the pi amplitude from the fit

**Parameters**

**qind** (*int*) – qubit index

**Returns**

$\pi$ amp

**Return type**

float

### plot

<span id="qiskit.ignis.characterization.RabiFitter.plot" />

`plot(qind, series='0', ax=None, show_plot=False)`

Plot the data and fit

**Parameters**

*   **qind** (*int*) – qubit index
*   **series** (*str*) – data series to plot (for rabi data always ‘0’)
*   **ax** (*Axes*) – matploblib axes (if none created)
*   **show\_plot** (*bool*) – do plot.show

**Returns**

Plot axes

**Return type**

Axes

### series

<span id="qiskit.ignis.characterization.RabiFitter.series" />

`property series`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### xdata

<span id="qiskit.ignis.characterization.RabiFitter.xdata" />

`property xdata`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.RabiFitter.ydata" />

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

