---
title: QuadraticIQDiscriminator
description: API reference for qiskit.ignis.measurement.QuadraticIQDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.measurement.QuadraticIQDiscriminator
---

# QuadraticIQDiscriminator

<span id="qiskit.ignis.measurement.QuadraticIQDiscriminator" />

`QuadraticIQDiscriminator(cal_results, qubit_mask, expected_states=None, standardize=False, schedules=None, discriminator_parameters=None)`

Quadratic discriminant analysis discriminator for IQ data.

**Parameters**

*   **cal\_results** (*Union\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*]]*) – calibration results, Result or list of Result used to fit the discriminator.
*   **qubit\_mask** (*List\[int]*) – determines which qubit’s level 1 data to use in the discrimination process.
*   **expected\_states** (*List\[str]*) – a list that should have the same length as schedules. All results in cal\_results are used if schedules is None. expected\_states must have the corresponding length.
*   **standardize** (*bool*) – if true the discriminator will standardize the xdata using the internal method \_scale\_data.
*   **schedules** (*Union\[List\[str], List\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")*]]*) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.
*   **discriminator\_parameters** (*dict*) – parameters for Sklearn’s LDA.

## Attributes

|                                                                                                                                                                                     |                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`QuadraticIQDiscriminator.expected_states`](qiskit.ignis.measurement.QuadraticIQDiscriminator.expected_states "qiskit.ignis.measurement.QuadraticIQDiscriminator.expected_states") | Returns the expected states used to train the discriminator.   |
| [`QuadraticIQDiscriminator.fitted`](qiskit.ignis.measurement.QuadraticIQDiscriminator.fitted "qiskit.ignis.measurement.QuadraticIQDiscriminator.fitted")                            | True if the discriminator has been fitted to calibration data. |
| [`QuadraticIQDiscriminator.schedules`](qiskit.ignis.measurement.QuadraticIQDiscriminator.schedules "qiskit.ignis.measurement.QuadraticIQDiscriminator.schedules")                   | Returns the schedules with which the discriminator was fitted. |

## Methods

|                                                                                                                                                                                            |                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [`QuadraticIQDiscriminator.add_data`](qiskit.ignis.measurement.QuadraticIQDiscriminator.add_data "qiskit.ignis.measurement.QuadraticIQDiscriminator.add_data")(result, …)                  | **type result**[`Result`](qiskit.result.Result "qiskit.result.result.Result")                              |
| [`QuadraticIQDiscriminator.discriminate`](qiskit.ignis.measurement.QuadraticIQDiscriminator.discriminate "qiskit.ignis.measurement.QuadraticIQDiscriminator.discriminate")(x\_data)        | Applies the discriminator to x\_data.                                                                      |
| [`QuadraticIQDiscriminator.fit`](qiskit.ignis.measurement.QuadraticIQDiscriminator.fit "qiskit.ignis.measurement.QuadraticIQDiscriminator.fit")()                                          | Fits the discriminator using self.\_xdata and self.\_ydata.                                                |
| [`QuadraticIQDiscriminator.format_iq_data`](qiskit.ignis.measurement.QuadraticIQDiscriminator.format_iq_data "qiskit.ignis.measurement.QuadraticIQDiscriminator.format_iq_data")(iq\_data) | Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. |
| [`QuadraticIQDiscriminator.get_xdata`](qiskit.ignis.measurement.QuadraticIQDiscriminator.get_xdata "qiskit.ignis.measurement.QuadraticIQDiscriminator.get_xdata")(results, …)              | Retrieves feature data (xdata) for the discriminator.                                                      |
| [`QuadraticIQDiscriminator.get_ydata`](qiskit.ignis.measurement.QuadraticIQDiscriminator.get_ydata "qiskit.ignis.measurement.QuadraticIQDiscriminator.get_ydata")(results, …)              | Retrieves the expected states (ydata) for the discriminator.                                               |
| [`QuadraticIQDiscriminator.is_calibration`](qiskit.ignis.measurement.QuadraticIQDiscriminator.is_calibration "qiskit.ignis.measurement.QuadraticIQDiscriminator.is_calibration")(…)        | Identify if a name corresponds to a calibration name identified by the regex pattern self.\_cal\_pattern.  |
| [`QuadraticIQDiscriminator.plot`](qiskit.ignis.measurement.QuadraticIQDiscriminator.plot "qiskit.ignis.measurement.QuadraticIQDiscriminator.plot")(\[axs, …])                              | Creates a plot of the data used to fit the discriminator.                                                  |
| [`QuadraticIQDiscriminator.plot_xdata`](qiskit.ignis.measurement.QuadraticIQDiscriminator.plot_xdata "qiskit.ignis.measurement.QuadraticIQDiscriminator.plot_xdata")(axs, results)         | Add the relevant IQ data from the Qiskit Result, or list thereof, to the given axes as a scatter plot.     |

