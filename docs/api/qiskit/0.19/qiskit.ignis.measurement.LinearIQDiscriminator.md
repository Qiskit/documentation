---
title: LinearIQDiscriminator
description: API reference for qiskit.ignis.measurement.LinearIQDiscriminator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.measurement.LinearIQDiscriminator
---

# LinearIQDiscriminator

<span id="qiskit.ignis.measurement.LinearIQDiscriminator" />

`LinearIQDiscriminator(cal_results, qubit_mask, expected_states=None, standardize=False, schedules=None, discriminator_parameters=None)`

Linear discriminant analysis discriminator for IQ data.

**Parameters**

*   **cal\_results** (*Union\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*, List\[*[*Result*](qiskit.result.Result "qiskit.result.Result")*]]*) – calibration results, Result or list of Result used to fit the discriminator.
*   **qubit\_mask** (*List\[int]*) – determines which qubit’s level 1 data to use in the discrimination process.
*   **expected\_states** (*List\[str]*) – a list that should have the same length as schedules. All results in cal\_results are used if schedules is None. expected\_states must have the corresponding length.
*   **standardize** (*bool*) – if true the discriminator will standardize the xdata using the internal method \_scale\_data.
*   **schedules** (*Union\[List\[str], List\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")*]]*) – The schedules or a subset of schedules in cal\_results used to train the discriminator. The user may also pass the name of the schedules instead of the schedules. If schedules is None, then all the schedules in cal\_results are used.
*   **discriminator\_parameters** (*dict*) – parameters for Sklearn’s LDA.

## Attributes

|                                                                                                                                                                            |                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`LinearIQDiscriminator.expected_states`](qiskit.ignis.measurement.LinearIQDiscriminator.expected_states "qiskit.ignis.measurement.LinearIQDiscriminator.expected_states") | Returns the expected states used to train the discriminator.   |
| [`LinearIQDiscriminator.fitted`](qiskit.ignis.measurement.LinearIQDiscriminator.fitted "qiskit.ignis.measurement.LinearIQDiscriminator.fitted")                            | True if the discriminator has been fitted to calibration data. |
| [`LinearIQDiscriminator.schedules`](qiskit.ignis.measurement.LinearIQDiscriminator.schedules "qiskit.ignis.measurement.LinearIQDiscriminator.schedules")                   | Returns the schedules with which the discriminator was fitted. |

## Methods

|                                                                                                                                                                                       |                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`LinearIQDiscriminator.add_data`](qiskit.ignis.measurement.LinearIQDiscriminator.add_data "qiskit.ignis.measurement.LinearIQDiscriminator.add_data")(result, …)                      | **type result**[`Result`](qiskit.result.Result "qiskit.result.result.Result")                              |
| [`LinearIQDiscriminator.discriminate`](qiskit.ignis.measurement.LinearIQDiscriminator.discriminate "qiskit.ignis.measurement.LinearIQDiscriminator.discriminate")(x\_data)            | Applies the discriminator to x\_data.                                                                      |
| [`LinearIQDiscriminator.fit`](qiskit.ignis.measurement.LinearIQDiscriminator.fit "qiskit.ignis.measurement.LinearIQDiscriminator.fit")()                                              | Fits the discriminator using self.\_xdata and self.\_ydata.                                                |
| [`LinearIQDiscriminator.format_iq_data`](qiskit.ignis.measurement.LinearIQDiscriminator.format_iq_data "qiskit.ignis.measurement.LinearIQDiscriminator.format_iq_data")(iq\_data)     | Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. |
| [`LinearIQDiscriminator.get_xdata`](qiskit.ignis.measurement.LinearIQDiscriminator.get_xdata "qiskit.ignis.measurement.LinearIQDiscriminator.get_xdata")(results, …)                  | Retrieves feature data (xdata) for the discriminator.                                                      |
| [`LinearIQDiscriminator.get_ydata`](qiskit.ignis.measurement.LinearIQDiscriminator.get_ydata "qiskit.ignis.measurement.LinearIQDiscriminator.get_ydata")(results, …)                  | Retrieves the expected states (ydata) for the discriminator.                                               |
| [`LinearIQDiscriminator.is_calibration`](qiskit.ignis.measurement.LinearIQDiscriminator.is_calibration "qiskit.ignis.measurement.LinearIQDiscriminator.is_calibration")(result\_name) | Identify if a name corresponds to a calibration name identified by the regex pattern self.\_cal\_pattern.  |
| [`LinearIQDiscriminator.plot`](qiskit.ignis.measurement.LinearIQDiscriminator.plot "qiskit.ignis.measurement.LinearIQDiscriminator.plot")(\[axs, …])                                  | Creates a plot of the data used to fit the discriminator.                                                  |
| [`LinearIQDiscriminator.plot_xdata`](qiskit.ignis.measurement.LinearIQDiscriminator.plot_xdata "qiskit.ignis.measurement.LinearIQDiscriminator.plot_xdata")(axs, results)             | Add the relevant IQ data from the Qiskit Result, or list thereof, to the given axes as a scatter plot.     |

