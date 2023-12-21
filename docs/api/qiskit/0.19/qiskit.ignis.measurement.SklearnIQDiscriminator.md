---
title: SklearnIQDiscriminator
description: API reference for qiskit.ignis.measurement.SklearnIQDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.measurement.SklearnIQDiscriminator
---

# SklearnIQDiscriminator

<span id="qiskit.ignis.measurement.SklearnIQDiscriminator" />

`SklearnIQDiscriminator(classifier, cal_results, qubit_mask, expected_states=None, standardize=False, schedules=None)`

A generic discriminant analysis discriminator for IQ data that takes an sklearn classifier as an argument.

**Parameters**

*   **classifier** (*Classifier*) – An sklearn classifier to train and do the discrimination. The classifier must have a fit method and a predict method
*   **cal\_results** (*Union\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*]]*) – calibration results, Result or list of Result used to fit the discriminator.
*   **qubit\_mask** (*List\[int]*) – determines which qubit’s level 1 data to use in the discrimination process.
*   **expected\_states** (*List\[str]*) – a list that should have the same length as schedules. All results in cal\_results are used if schedules is None. expected\_states must have the corresponding length.
*   **standardize** (*bool*) – if true the discriminator will standardize the xdata using the internal method \_scale\_data.
*   **schedules** (*Union\[List\[str], List\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")*]]*) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.

## Attributes

|                                                                                                                                                                               |                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`SklearnIQDiscriminator.expected_states`](qiskit.ignis.measurement.SklearnIQDiscriminator.expected_states "qiskit.ignis.measurement.SklearnIQDiscriminator.expected_states") | Returns the expected states used to train the discriminator.   |
| [`SklearnIQDiscriminator.fitted`](qiskit.ignis.measurement.SklearnIQDiscriminator.fitted "qiskit.ignis.measurement.SklearnIQDiscriminator.fitted")                            | True if the discriminator has been fitted to calibration data. |
| [`SklearnIQDiscriminator.schedules`](qiskit.ignis.measurement.SklearnIQDiscriminator.schedules "qiskit.ignis.measurement.SklearnIQDiscriminator.schedules")                   | Returns the schedules with which the discriminator was fitted. |

## Methods

|                                                                                                                                                                                      |                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [`SklearnIQDiscriminator.add_data`](qiskit.ignis.measurement.SklearnIQDiscriminator.add_data "qiskit.ignis.measurement.SklearnIQDiscriminator.add_data")(result, …)                  | **type result**[`Result`](qiskit.result.Result "qiskit.result.result.Result")                              |
| [`SklearnIQDiscriminator.discriminate`](qiskit.ignis.measurement.SklearnIQDiscriminator.discriminate "qiskit.ignis.measurement.SklearnIQDiscriminator.discriminate")(x\_data)        | Applies the discriminator to x\_data.                                                                      |
| [`SklearnIQDiscriminator.fit`](qiskit.ignis.measurement.SklearnIQDiscriminator.fit "qiskit.ignis.measurement.SklearnIQDiscriminator.fit")()                                          | Fits the discriminator using self.\_xdata and self.\_ydata.                                                |
| [`SklearnIQDiscriminator.format_iq_data`](qiskit.ignis.measurement.SklearnIQDiscriminator.format_iq_data "qiskit.ignis.measurement.SklearnIQDiscriminator.format_iq_data")(iq\_data) | Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. |
| [`SklearnIQDiscriminator.get_xdata`](qiskit.ignis.measurement.SklearnIQDiscriminator.get_xdata "qiskit.ignis.measurement.SklearnIQDiscriminator.get_xdata")(results, …)              | Retrieves feature data (xdata) for the discriminator.                                                      |
| [`SklearnIQDiscriminator.get_ydata`](qiskit.ignis.measurement.SklearnIQDiscriminator.get_ydata "qiskit.ignis.measurement.SklearnIQDiscriminator.get_ydata")(results, …)              | Retrieves the expected states (ydata) for the discriminator.                                               |
| [`SklearnIQDiscriminator.is_calibration`](qiskit.ignis.measurement.SklearnIQDiscriminator.is_calibration "qiskit.ignis.measurement.SklearnIQDiscriminator.is_calibration")(…)        | Identify if a name corresponds to a calibration name identified by the regex pattern self.\_cal\_pattern.  |
| [`SklearnIQDiscriminator.plot`](qiskit.ignis.measurement.SklearnIQDiscriminator.plot "qiskit.ignis.measurement.SklearnIQDiscriminator.plot")(\[axs, …])                              | Creates a plot of the data used to fit the discriminator.                                                  |
| [`SklearnIQDiscriminator.plot_xdata`](qiskit.ignis.measurement.SklearnIQDiscriminator.plot_xdata "qiskit.ignis.measurement.SklearnIQDiscriminator.plot_xdata")(axs, results)         | Add the relevant IQ data from the Qiskit Result, or list thereof, to the given axes as a scatter plot.     |

