# qiskit.qobj.PulseQobjExperimentConfig

<span id="undefined" />

`PulseQobjExperimentConfig(qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

A config for a single Pulse experiment in the qobj.

Instantiate a PulseQobjExperimentConfig object.

**Parameters**

*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

<span id="undefined" />

`__init__(qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

Instantiate a PulseQobjExperimentConfig object.

**Parameters**

*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

|                                                                                                                                                    |                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.PulseQobjExperimentConfig.__init__ "qiskit.qobj.PulseQobjExperimentConfig.__init__")(\[qubit\_lo\_freq, meas\_lo\_freq]) | Instantiate a PulseQobjExperimentConfig object.             |
| [`from_dict`](#qiskit.qobj.PulseQobjExperimentConfig.from_dict "qiskit.qobj.PulseQobjExperimentConfig.from_dict")(data)                            | Create a new QobjHeader object from a dictionary.           |
| [`to_dict`](#qiskit.qobj.PulseQobjExperimentConfig.to_dict "qiskit.qobj.PulseQobjExperimentConfig.to_dict")()                                      | Return a dictionary format representation of the QASM Qobj. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.PulseQobjExperimentConfig.to_dict "qiskit.qobj.PulseQobjExperimentConfig.to_dict").

**Returns**

The QobjDictField from the input dictionary.

**Return type**

QobjDictFieldr

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict
