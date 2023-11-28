# AngleCalFitter

<span id="undefined" />

`AngleCalFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)`

Bases: `qiskit.ignis.characterization.fitters.BaseGateFitter`

Amplitude error fitter

See BaseFitter \_\_init\_\_

## Methods

|                                                                                                                                                                                       |                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`add_data`](qiskit.ignis.characterization.AngleCalFitter.add_data#qiskit.ignis.characterization.AngleCalFitter.add_data "qiskit.ignis.characterization.AngleCalFitter.add_data")     | Add new execution results to previous execution results |
| [`angle_err`](qiskit.ignis.characterization.AngleCalFitter.angle_err#qiskit.ignis.characterization.AngleCalFitter.angle_err "qiskit.ignis.characterization.AngleCalFitter.angle_err") | Return the gate angle error                             |
| [`fit_data`](qiskit.ignis.characterization.AngleCalFitter.fit_data#qiskit.ignis.characterization.AngleCalFitter.fit_data "qiskit.ignis.characterization.AngleCalFitter.fit_data")     | Fit the curve.                                          |
| [`plot`](qiskit.ignis.characterization.AngleCalFitter.plot#qiskit.ignis.characterization.AngleCalFitter.plot "qiskit.ignis.characterization.AngleCalFitter.plot")                     | Plot err data.                                          |

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
