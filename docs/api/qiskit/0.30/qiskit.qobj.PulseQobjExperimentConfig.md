# PulseQobjExperimentConfig

<span id="undefined" />

`PulseQobjExperimentConfig(qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

Bases: `qiskit.qobj.common.QobjDictField`

A config for a single Pulse experiment in the qobj.

Instantiate a PulseQobjExperimentConfig object.

**Parameters**

*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

|                                                                                                                                                                  |                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`from_dict`](qiskit.qobj.PulseQobjExperimentConfig.from_dict#qiskit.qobj.PulseQobjExperimentConfig.from_dict "qiskit.qobj.PulseQobjExperimentConfig.from_dict") | Create a new QobjHeader object from a dictionary.           |
| [`to_dict`](qiskit.qobj.PulseQobjExperimentConfig.to_dict#qiskit.qobj.PulseQobjExperimentConfig.to_dict "qiskit.qobj.PulseQobjExperimentConfig.to_dict")         | Return a dictionary format representation of the QASM Qobj. |
