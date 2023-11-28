# qiskit.ignis.characterization.DragFitter

<span id="undefined" />

`DragFitter(backend_result, xdata, qubits, fit_p0, fit_bounds=None)`

Drag Experiment fitter

See IQFitter \_\_init\_\_

fit\_p0 is \[a, x0, c] where the fit is a\*(x-x0)^2+c

<span id="undefined" />

`__init__(backend_result, xdata, qubits, fit_p0, fit_bounds=None)`

See IQFitter \_\_init\_\_

fit\_p0 is \[a, x0, c] where the fit is a\*(x-x0)^2+c

## Methods

|                                                                                                                                                               |                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.characterization.DragFitter.__init__ "qiskit.ignis.characterization.DragFitter.__init__")(backend\_result, xdata, qubits, fit\_p0) | See IQFitter \_\_init\_\_                               |
| [`add_data`](#qiskit.ignis.characterization.DragFitter.add_data "qiskit.ignis.characterization.DragFitter.add_data")(results\[, recalc, refit])               | Add new execution results to previous execution results |
| [`drag_amplitude`](#qiskit.ignis.characterization.DragFitter.drag_amplitude "qiskit.ignis.characterization.DragFitter.drag_amplitude")(\[qind])               | Return the drag amplitude from the fit                  |
| [`fit_data`](#qiskit.ignis.characterization.DragFitter.fit_data "qiskit.ignis.characterization.DragFitter.fit_data")(\[qid, p0, bounds, series])              | Fit the curve.                                          |
| [`guess_params`](#qiskit.ignis.characterization.DragFitter.guess_params "qiskit.ignis.characterization.DragFitter.guess_params")(\[qind])                     | Guess parameters for the drag fit                       |
| [`plot`](#qiskit.ignis.characterization.DragFitter.plot "qiskit.ignis.characterization.DragFitter.plot")(qind\[, series, ax, show\_plot])                     | Plot the data and fit                                   |

## Attributes

|                                                                                                                                           |                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`backend_result`](#qiskit.ignis.characterization.DragFitter.backend_result "qiskit.ignis.characterization.DragFitter.backend_result")    | Return the execution results                                                          |
| [`description`](#qiskit.ignis.characterization.DragFitter.description "qiskit.ignis.characterization.DragFitter.description")             | Return the fitter’s purpose, e.g.                                                     |
| [`fit_fun`](#qiskit.ignis.characterization.DragFitter.fit_fun "qiskit.ignis.characterization.DragFitter.fit_fun")                         | Return the function used in the fit, e.g.                                             |
| [`measured_qubits`](#qiskit.ignis.characterization.DragFitter.measured_qubits "qiskit.ignis.characterization.DragFitter.measured_qubits") | Return the indices of the qubits to be characterized                                  |
| [`params`](#qiskit.ignis.characterization.DragFitter.params "qiskit.ignis.characterization.DragFitter.params")                            | Return the fit function parameters that were calculated by curve\_fit                 |
| [`params_err`](#qiskit.ignis.characterization.DragFitter.params_err "qiskit.ignis.characterization.DragFitter.params_err")                | Return the error of the fit function parameters                                       |
| [`series`](#qiskit.ignis.characterization.DragFitter.series "qiskit.ignis.characterization.DragFitter.series")                            | Return the list of series for the data                                                |
| [`xdata`](#qiskit.ignis.characterization.DragFitter.xdata "qiskit.ignis.characterization.DragFitter.xdata")                               | Return the data points on the x-axis, the independenet parameter which is fit against |
| [`ydata`](#qiskit.ignis.characterization.DragFitter.ydata "qiskit.ignis.characterization.DragFitter.ydata")                               | Return the data points on the y-axis                                                  |

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

`drag_amplitude(qind=- 1)`

Return the drag amplitude from the fit

**Parameters**

**qind** (*int*) – qubit index

**Returns**

drag amp

**Return type**

float

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

`guess_params(qind=0)`

Guess parameters for the drag fit

**Parameters**

**qind** (*int*) – qubit index

**Returns**

**guess parameters**

\[a, x0, c] where the fit is $a * (x - x0)^{2+c}$

**Return type**

list

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

<span id="undefined" />

`property series`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

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
