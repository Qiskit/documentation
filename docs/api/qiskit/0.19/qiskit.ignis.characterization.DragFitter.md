---
title: DragFitter
description: API reference for qiskit.ignis.characterization.DragFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.DragFitter
---

# DragFitter

<span id="qiskit.ignis.characterization.DragFitter" />

`DragFitter(backend_result, xdata, qubits, fit_p0, fit_bounds=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/characterization/calibrations/fitters.py "view source code")

Drag Experiment fitter

See IQFitter \_\_init\_\_

fit\_p0 is \[a, x0, c] where the fit is a\*(x-x0)^2+c

## Attributes

### backend\_result

<span id="qiskit.ignis.characterization.DragFitter.backend_result" />

`Union[qiskit.result.result.Result, List[qiskit.result.result.Result]]`

Return the execution results

**Return type**

`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]

### description

<span id="qiskit.ignis.characterization.DragFitter.description" />

`str`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_fun

<span id="qiskit.ignis.characterization.DragFitter.fit_fun" />

`Callable`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### measured\_qubits

<span id="qiskit.ignis.characterization.DragFitter.measured_qubits" />

`List[int]`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.DragFitter.params" />

`List[float]`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.DragFitter.params_err" />

`List[float]`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### series

<span id="qiskit.ignis.characterization.DragFitter.series" />

`Optional[List[str]]`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### xdata

<span id="qiskit.ignis.characterization.DragFitter.xdata" />

`Union[List[float], numpy.array]`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.DragFitter.ydata" />

`List[Dict]`

Return the data points on the y-axis

The data points are returning in the form of a list of dictionaries:

> *   #### ydata\[i]\[‘mean’] is a list, where item
>
>     no. j is the probability of success of qubit i for a circuit that lasts xdata\[j].
>
> *   #### ydata\[i]\[‘std’] is a list, where ydata\[‘std’]\[j] is the
>
>     standard deviation of the success of qubit i.

**Return type**

`List`\[`Dict`]

## Methods

### add\_data

<span id="qiskit.ignis.characterization.DragFitter.add_data" />

`DragFitter.add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### drag\_amplitude

<span id="qiskit.ignis.characterization.DragFitter.drag_amplitude" />

`DragFitter.drag_amplitude(qind=- 1)`

Return the drag amplitude from the fit

**Parameters**

**qind** (*int*) – qubit index

**Returns**

drag amp

**Return type**

float

### fit\_data

<span id="qiskit.ignis.characterization.DragFitter.fit_data" />

`DragFitter.fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### guess\_params

<span id="qiskit.ignis.characterization.DragFitter.guess_params" />

`DragFitter.guess_params(qind=0)`

Guess parameters for the drag fit

**Parameters**

**qind** (*int*) – qubit index

**Returns**

**guess parameters**

\[a, x0, c] where the fit is $a * (x - x0)^{2+c}$

**Return type**

list

### plot

<span id="qiskit.ignis.characterization.DragFitter.plot" />

`DragFitter.plot(qind, series='0', ax=None, show_plot=False)`

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

