# T1Fitter[¶](#t1fitter "Permalink to this headline")

<span id="undefined" />

`T1Fitter(backend_result, xdata, qubits, fit_p0, fit_bounds, time_unit='micro-seconds')`

Bases: `qiskit.ignis.characterization.fitters.BaseCoherenceFitter`

Estimate T1, based on experiments outcomes,

The experiments were created by t1\_circuits, and executed on the device.

The probabilities of measuring 1 is assumed to be of the form

$$
f(t) = A\mathrm{e}^{-t/T_1}+B,
$$

for unknown parameters A, B, and T1.

**Parameters**

*   **backend\_result** (`Result`) – result of execution of t1\_circuits on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the T1 circuits.
*   **qubits** (`List`\[`int`]) – indices of the qubits whose T1‘s are to be measured.
*   **fit\_p0** (`List`\[`float`]) – initial values to the fit parameters, where the order is $(A, T_1, B)$.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – bounds on the parameters to fit. The first tuple is the lower bounds, in the order $(A, T_1, B)$. The second tuple is the upper bounds.
*   **time\_unit** (`str`) – unit of delay times in xdata.

## Methods

|                                                                                                                                                                 |                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.characterization.T1Fitter.add_data#qiskit.ignis.characterization.T1Fitter.add_data "qiskit.ignis.characterization.T1Fitter.add_data") | Add new execution results to previous execution results                |
| [`fit_data`](qiskit.ignis.characterization.T1Fitter.fit_data#qiskit.ignis.characterization.T1Fitter.fit_data "qiskit.ignis.characterization.T1Fitter.fit_data") | Fit the curve.                                                         |
| [`plot`](qiskit.ignis.characterization.T1Fitter.plot#qiskit.ignis.characterization.T1Fitter.plot "qiskit.ignis.characterization.T1Fitter.plot")                 | Plot coherence data.                                                   |
| [`time`](qiskit.ignis.characterization.T1Fitter.time#qiskit.ignis.characterization.T1Fitter.time "qiskit.ignis.characterization.T1Fitter.time")                 | Return the characteristic time for the given qubit and series          |
| [`time_err`](qiskit.ignis.characterization.T1Fitter.time_err#qiskit.ignis.characterization.T1Fitter.time_err "qiskit.ignis.characterization.T1Fitter.time_err") | Return the error of characteristic time for the given qubit and series |

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
