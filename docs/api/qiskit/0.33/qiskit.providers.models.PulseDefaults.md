# PulseDefaults[¶](#pulsedefaults "Permalink to this headline")

<span id="undefined" />

`PulseDefaults(qubit_freq_est, meas_freq_est, buffer, pulse_library, cmd_def, meas_kernel=None, discriminator=None, **kwargs)`

Bases: `object`

Description of default settings for Pulse systems. These are instructions or settings that may be good starting points for the Pulse user. The user may modify these defaults for custom scheduling.

Validate and reformat transport layer inputs to initialize. :type qubit\_freq\_est: `List`\[`float`] :param qubit\_freq\_est: Estimated qubit frequencies in GHz. :type meas\_freq\_est: `List`\[`float`] :param meas\_freq\_est: Estimated measurement cavity frequencies in GHz. :type buffer: `int` :param buffer: Default buffer time (in units of dt) between pulses. :type pulse\_library: `List`\[`PulseLibraryItem`] :param pulse\_library: Pulse name and sample definitions. :type cmd\_def: `List`\[`Command`] :param cmd\_def: Operation name and definition in terms of Commands. :type meas\_kernel: `Optional`\[`MeasurementKernel`] :param meas\_kernel: The measurement kernels :type discriminator: `Optional`\[`Discriminator`] :param discriminator: The discriminators :param \*\*kwargs: Other attributes for the super class.

## Methods

|                                                                                                                                                                  |                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`from_dict`](qiskit.providers.models.PulseDefaults.from_dict#qiskit.providers.models.PulseDefaults.from_dict "qiskit.providers.models.PulseDefaults.from_dict") | Create a new PulseDefaults object from a dictionary.            |
| [`to_dict`](qiskit.providers.models.PulseDefaults.to_dict#qiskit.providers.models.PulseDefaults.to_dict "qiskit.providers.models.PulseDefaults.to_dict")         | Return a dictionary format representation of the PulseDefaults. |
