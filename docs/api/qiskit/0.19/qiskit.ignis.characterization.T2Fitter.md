---
title: T2Fitter
description: API reference for qiskit.ignis.characterization.T2Fitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.T2Fitter
---

# T2Fitter

<span id="qiskit.ignis.characterization.T2Fitter" />

`T2Fitter(backend_result, xdata, qubits, fit_p0, fit_bounds, circbasename='t2', time_unit='micro-seconds')` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.3/qiskit/ignis/characterization/coherence/fitters.py "view source code")

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

### backend\_result

<span id="qiskit.ignis.characterization.T2Fitter.backend_result" />

`Union[qiskit.result.result.Result, List[qiskit.result.result.Result]]`

Return the execution results

**Return type**

`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]

### description

<span id="qiskit.ignis.characterization.T2Fitter.description" />

`str`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_fun

<span id="qiskit.ignis.characterization.T2Fitter.fit_fun" />

`Callable`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### measured\_qubits

<span id="qiskit.ignis.characterization.T2Fitter.measured_qubits" />

`List[int]`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.T2Fitter.params" />

`List[float]`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.T2Fitter.params_err" />

`List[float]`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### series

<span id="qiskit.ignis.characterization.T2Fitter.series" />

`Optional[List[str]]`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### xdata

<span id="qiskit.ignis.characterization.T2Fitter.xdata" />

`Union[List[float], numpy.array]`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.T2Fitter.ydata" />

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

<span id="qiskit.ignis.characterization.T2Fitter.add_data" />

`T2Fitter.add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### fit\_data

<span id="qiskit.ignis.characterization.T2Fitter.fit_data" />

`T2Fitter.fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### plot

<span id="qiskit.ignis.characterization.T2Fitter.plot" />

`T2Fitter.plot(qind, series='0', ax=None, show_plot=False)`

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

### time

<span id="qiskit.ignis.characterization.T2Fitter.time" />

`T2Fitter.time(qid=- 1, series='0')`

Return the characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The characteristic time of the qubit, or all qubits

### time\_err

<span id="qiskit.ignis.characterization.T2Fitter.time_err" />

`T2Fitter.time_err(qid=- 1, series='0')`

Return the error of characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The error of the characteristic time of the qubit, or all qubits

