# RabiFitter

<span id="undefined" />

`RabiFitter(backend_result, xdata, qubits, fit_p0, fit_bounds=None)`

Bases: `qiskit.ignis.characterization.fitters.IQFitter`

Rabi Experiment fitter

See BaseCalibrationFitter \_\_init\_\_

fit\_po is \[amp, freq, phase, offset]

## Methods

|                                                                                                                                                                                           |                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`add_data`](qiskit.ignis.characterization.RabiFitter.add_data#qiskit.ignis.characterization.RabiFitter.add_data "qiskit.ignis.characterization.RabiFitter.add_data")                     | Add new execution results to previous execution results |
| [`fit_data`](qiskit.ignis.characterization.RabiFitter.fit_data#qiskit.ignis.characterization.RabiFitter.fit_data "qiskit.ignis.characterization.RabiFitter.fit_data")                     | Fit the curve.                                          |
| [`guess_params`](qiskit.ignis.characterization.RabiFitter.guess_params#qiskit.ignis.characterization.RabiFitter.guess_params "qiskit.ignis.characterization.RabiFitter.guess_params")     | Guess fit parameters for rabi oscillation data          |
| [`pi2_amplitude`](qiskit.ignis.characterization.RabiFitter.pi2_amplitude#qiskit.ignis.characterization.RabiFitter.pi2_amplitude "qiskit.ignis.characterization.RabiFitter.pi2_amplitude") | Return the pi/2 amplitude from the fit                  |
| [`pi_amplitude`](qiskit.ignis.characterization.RabiFitter.pi_amplitude#qiskit.ignis.characterization.RabiFitter.pi_amplitude "qiskit.ignis.characterization.RabiFitter.pi_amplitude")     | Return the pi amplitude from the fit                    |
| [`plot`](qiskit.ignis.characterization.RabiFitter.plot#qiskit.ignis.characterization.RabiFitter.plot "qiskit.ignis.characterization.RabiFitter.plot")                                     | Plot the data and fit                                   |

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
