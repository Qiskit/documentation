# BaseCoherenceFitter[¶](#basecoherencefitter "Permalink to this headline")

<span id="undefined" />

`BaseCoherenceFitter(description, backend_result, xdata, qubits, fit_fun, fit_p0, fit_bounds, circuit_names, series=None, expected_state='0', time_index=0, time_unit='micro-seconds')`

Bases: `qiskit.ignis.characterization.fitters.BaseFitter`

Base class for fitters of characteristic times

**Parameters**

*   **description** (`str`) – description of the fitter’s purpose, e.g. ‘T1’.
*   **backend\_result** (`Union`\[`Result`, `List`\[`Result`]]) – result of execution on the backend.
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

## Methods

|                                                                                                                                                                                                  |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.characterization.BaseCoherenceFitter.add_data#qiskit.ignis.characterization.BaseCoherenceFitter.add_data "qiskit.ignis.characterization.BaseCoherenceFitter.add_data") | Add new execution results to previous execution results                |
| [`fit_data`](qiskit.ignis.characterization.BaseCoherenceFitter.fit_data#qiskit.ignis.characterization.BaseCoherenceFitter.fit_data "qiskit.ignis.characterization.BaseCoherenceFitter.fit_data") | Fit the curve.                                                         |
| [`plot`](qiskit.ignis.characterization.BaseCoherenceFitter.plot#qiskit.ignis.characterization.BaseCoherenceFitter.plot "qiskit.ignis.characterization.BaseCoherenceFitter.plot")                 | Plot coherence data.                                                   |
| [`time`](qiskit.ignis.characterization.BaseCoherenceFitter.time#qiskit.ignis.characterization.BaseCoherenceFitter.time "qiskit.ignis.characterization.BaseCoherenceFitter.time")                 | Return the characteristic time for the given qubit and series          |
| [`time_err`](qiskit.ignis.characterization.BaseCoherenceFitter.time_err#qiskit.ignis.characterization.BaseCoherenceFitter.time_err "qiskit.ignis.characterization.BaseCoherenceFitter.time_err") | Return the error of characteristic time for the given qubit and series |

## Attributes

<span id="undefined" />

### backend\_result

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

<span id="undefined" />

### description

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

<span id="undefined" />

### fit\_fun

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

<span id="undefined" />

### measured\_qubits

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

<span id="undefined" />

### params

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

<span id="undefined" />

### params\_err

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

<span id="undefined" />

### series

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

<span id="undefined" />

### xdata

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

<span id="undefined" />

### ydata

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
