# qiskit.ignis.characterization.T2Fitter

<span id="undefined" />

`T2Fitter(backend_result, xdata, qubits, fit_p0, fit_bounds, circbasename='t2', time_unit='micro-seconds')`

Estimate T2, based on experiments outcomes.

The experiments were created by t2\_circuits, and executed on the device.

The probabilities of measuring 0 is assumed to be of the form

$$
f(t) = A\mathrm{e}^{-t/T_2}+B,
$$

for unknown parameters A, B, and T2.

**Parameters**

*   **backend\_result** (`Result`) – result of execution of t2\_circuits on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the T2 circuits.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T2‘s are to be measured.
*   **fit\_p0** (`List`\[`float`]) – initial values to the fit parameters, where the order is $(A, T_2, B)$.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – bounds on the parameters to fit. The first tuple is the lower bounds, in the order $(A, T_2, B)$. The second tuple is the upper bounds.
*   **circbasename** (`str`) – prefix to all circuit names.
*   **time\_unit** (`str`) – unit of delay times in xdata.

<span id="undefined" />

`__init__(backend_result, xdata, qubits, fit_p0, fit_bounds, circbasename='t2', time_unit='micro-seconds')`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                     |                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.characterization.T2Fitter.__init__ "qiskit.ignis.characterization.T2Fitter.__init__")(backend\_result, xdata, qubits, …) | Initialize self.                                                       |
| [`add_data`](#qiskit.ignis.characterization.T2Fitter.add_data "qiskit.ignis.characterization.T2Fitter.add_data")(results\[, recalc, refit])         | Add new execution results to previous execution results                |
| [`fit_data`](#qiskit.ignis.characterization.T2Fitter.fit_data "qiskit.ignis.characterization.T2Fitter.fit_data")(\[qid, p0, bounds, series])        | Fit the curve.                                                         |
| [`plot`](#qiskit.ignis.characterization.T2Fitter.plot "qiskit.ignis.characterization.T2Fitter.plot")(qind\[, series, ax, show\_plot])               | Plot coherence data.                                                   |
| [`time`](#qiskit.ignis.characterization.T2Fitter.time "qiskit.ignis.characterization.T2Fitter.time")(\[qid, series])                                | Return the characteristic time for the given qubit and series          |
| [`time_err`](#qiskit.ignis.characterization.T2Fitter.time_err "qiskit.ignis.characterization.T2Fitter.time_err")(\[qid, series])                    | Return the error of characteristic time for the given qubit and series |

## Attributes

|                                                                                                                                       |                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`backend_result`](#qiskit.ignis.characterization.T2Fitter.backend_result "qiskit.ignis.characterization.T2Fitter.backend_result")    | Return the execution results                                                          |
| [`description`](#qiskit.ignis.characterization.T2Fitter.description "qiskit.ignis.characterization.T2Fitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`fit_fun`](#qiskit.ignis.characterization.T2Fitter.fit_fun "qiskit.ignis.characterization.T2Fitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`measured_qubits`](#qiskit.ignis.characterization.T2Fitter.measured_qubits "qiskit.ignis.characterization.T2Fitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`params`](#qiskit.ignis.characterization.T2Fitter.params "qiskit.ignis.characterization.T2Fitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`params_err`](#qiskit.ignis.characterization.T2Fitter.params_err "qiskit.ignis.characterization.T2Fitter.params_err")                | Return the error of the fit function parameters                                       |
| [`series`](#qiskit.ignis.characterization.T2Fitter.series "qiskit.ignis.characterization.T2Fitter.series")                            | Return the list of series for the data                                                |
| [`xdata`](#qiskit.ignis.characterization.T2Fitter.xdata "qiskit.ignis.characterization.T2Fitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ydata`](#qiskit.ignis.characterization.T2Fitter.ydata "qiskit.ignis.characterization.T2Fitter.ydata")                               | Return the data points on the y-axis                                                  |

<span id="undefined" />

`add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

<span id="undefined" />

`property backend_result`

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

<span id="undefined" />

`property description`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

<span id="undefined" />

`fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

<span id="undefined" />

`property fit_fun`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

<span id="undefined" />

`property measured_qubits`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

<span id="undefined" />

`property params`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

<span id="undefined" />

`property params_err`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

<span id="undefined" />

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

<span id="undefined" />

`property series`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

<span id="undefined" />

`time(qid=- 1, series='0')`

Return the characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The characteristic time of the qubit, or all qubits

<span id="undefined" />

`time_err(qid=- 1, series='0')`

Return the error of characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The error of the characteristic time of the qubit, or all qubits

<span id="undefined" />

`property xdata`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

<span id="undefined" />

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
