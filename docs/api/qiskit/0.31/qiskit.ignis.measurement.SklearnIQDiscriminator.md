---
title: SklearnIQDiscriminator
description: API reference for qiskit.ignis.measurement.SklearnIQDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.measurement.SklearnIQDiscriminator
---

# SklearnIQDiscriminator

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator" />

`SklearnIQDiscriminator(classifier, cal_results, qubit_mask, expected_states=None, standardize=False, schedules=None)` [GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.6/qiskit/ignis/measurement/discriminator/iq_discriminators.py "view source code")

Bases: `qiskit.ignis.measurement.discriminator.iq_discriminators.IQDiscriminationFitter`

A generic discriminant analysis discriminator for IQ data that takes an sklearn classifier as an argument.

**Parameters**

*   **classifier** (*Classifier*) – An sklearn classifier to train and do the discrimination. The classifier must have a fit method and a predict method
*   **cal\_results** (*Union\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*]]*) – calibration results, Result or list of Result used to fit the discriminator.
*   **qubit\_mask** (*List\[int]*) – determines which qubit’s level 1 data to use in the discrimination process.
*   **expected\_states** (*List\[str]*) – a list that should have the same length as schedules. All results in cal\_results are used if schedules is None. expected\_states must have the corresponding length.
*   **standardize** (*bool*) – if true the discriminator will standardize the xdata using the internal method \_scale\_data.
*   **schedules** (*Union\[List\[str], List\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")*]]*) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.

## Methods

### add\_data

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.add_data" />

`SklearnIQDiscriminator.add_data(result, expected_states, refit=True, schedules=None)`

**Parameters**

*   **result** (`Result`) – a Result containing new data to be used to train the discriminator.
*   **expected\_states** (`List`\[`str`]) – the expected states of the results in result.
*   **refit** (`bool`) – refit the discriminator if True.
*   **schedules** (`Union`\[`List`\[`str`], `List`\[`Schedule`], `None`]) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.

### discriminate

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.discriminate" />

`SklearnIQDiscriminator.discriminate(x_data)`

Applies the discriminator to x\_data.

**Parameters**

**x\_data** (*List\[List\[float]]*) – list of features. Each feature is itself a list.

**Return type**

`List`\[`str`]

**Returns**

the discriminated x\_data as a list of labels.

### fit

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.fit" />

`SklearnIQDiscriminator.fit()`

Fits the discriminator using self.\_xdata and self.\_ydata.

### format\_iq\_data

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.format_iq_data" />

`SklearnIQDiscriminator.format_iq_data(iq_data)`

Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. Each sub list is IQ data where the first half of the list is the I data and the second half of the list is the Q data.

**Parameters**

**iq\_data** (*np.ndarray*) – data obtained from get\_memory().

**Return type**

`List`\[`List`\[`float`]]

**Returns**

A list of shots where each entry is a list of IQ points.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – if the measurement return type is unknown

### get\_xdata

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.get_xdata" />

`SklearnIQDiscriminator.get_xdata(results, schedule_type_to_get, schedules=None)`

Retrieves feature data (xdata) for the discriminator.

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – the get\_memory() method is used to retrieve the level 1 data. If result is a list of Result, then the first Result in the list that returns the data of schedule (through get\_memory(schedule)) is used.
*   **schedule\_type\_to\_get** (`int`) – use to specify if we should return data corresponding to (`0`) calibration data only (`1`) non-calibration data (`2`) both calibration and non-calibration data
*   **schedules** (`Union`\[`List`\[`str`], `List`\[`Schedule`], `None`]) – Either the names of the schedules or the schedules themselves.

**Return type**

`List`\[`List`\[`float`]]

**Returns**

data as a list of features. Each feature is a list.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – if IQ data could not be found

### get\_ydata

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.get_ydata" />

`SklearnIQDiscriminator.get_ydata(results, schedule_type_to_get, schedules=None)`

Retrieves the expected states (ydata) for the discriminator.

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – results for which to retrieve the y data (i.e. expected states).
*   **schedule\_type\_to\_get** (`int`) – use to specify if we should return data corresponding to \* 0 calibration data only \* 1 non-calibration data \* 2 both calibration and non-calibration data
*   **schedules** (`Union`\[`List`\[`str`], `List`\[`Schedule`], `None`]) – Either the names of the schedules or the schedules themselves.

**Returns**

**The y data, i.e. expected states. get\_ydata is designed to produce**

y data with the same length as the x data.

**Return type**

list

### is\_calibration

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.is_calibration" />

`SklearnIQDiscriminator.is_calibration(result_name)`

Identify if a name corresponds to a calibration name identified by the regex pattern self.\_cal\_pattern.

**Parameters**

**result\_name** (`str`) – name of the result to be tested.

**Returns**

**True if the name of the result indicates that it is a**

calibration result.

**Return type**

bool

### plot

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.plot" />

`SklearnIQDiscriminator.plot(axs=None, show_boundary=False, show_fitting_data=True, flag_misclassified=False, qubits_to_plot=None, title=True)`

Creates a plot of the data used to fit the discriminator.

**Parameters**

*   **axs** (*Union\[np.ndarray, axes]*) – the axis to use for the plot. If it is none, the plot method will create its own axis instance. If the number of axis instances provided is less than the number of qubits then only the data for the first len(axs) qubits will be plotted.
*   **show\_boundary** (*bool*) – plot the decision regions if true. Some discriminators may put additional constraints on whether the decision regions are plotted or not.
*   **show\_fitting\_data** (*bool*) – if True the x data and labels used to fit the discriminator are shown in the plot.
*   **flag\_misclassified** (*bool*) – plot the misclassified training data points if true.
*   **qubits\_to\_plot** (*list*) – each qubit in this list will receive its own plot. The qubits in qubits to plot must be in the qubit mask. If qubits\_to\_plot is None then the qubit mask will be used.
*   **title** (*bool*) – adds a title to each subplot with the number of the qubit.

**Returns**

**A tuple of the form: `(Union[List[axes], axes], figure)`**

where the axes object used for the plot as well as the figure handle. The figure handle returned is not None only when the figure handle is created by the discriminator’s plot method.

**Return type**

tuple

**Raises**

**QiskitError** – If matplotlib is not installed, or there is invalid input

### plot\_xdata

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.plot_xdata" />

`SklearnIQDiscriminator.plot_xdata(axs, results, color=None)`

Add the relevant IQ data from the Qiskit Result, or list thereof, to the given axes as a scatter plot.

**Parameters**

*   **axs** (*Union\[np.ndarray, axes]*) – the axis to use for the plot. If the number of axis instances provided is less than the number of qubits then only the data for the first len(axs) qubits will be plotted.
*   **results** (*Union\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*]]*) – the discriminators get\_xdata will be used to retrieve the x data from the Result or list of Results.
*   **color** (*str*) – color of the IQ points in the scatter plot.

**Raises**

**QiskitError** – If not enough axis instances are provided

## Attributes

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.expected_states" />

### expected\_states

Returns the expected states used to train the discriminator.

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.fitted" />

### fitted

True if the discriminator has been fitted to calibration data.

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator.schedules" />

### schedules

Returns the schedules with which the discriminator was fitted.

