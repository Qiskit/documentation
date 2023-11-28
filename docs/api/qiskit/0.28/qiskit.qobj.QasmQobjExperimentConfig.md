# qiskit.qobj.QasmQobjExperimentConfig

<span id="undefined" />

`QasmQobjExperimentConfig(calibrations=None, qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

Configuration for a single QASM experiment in the qobj.

**Parameters**

*   **calibrations** ([*QasmExperimentCalibrations*](qiskit.qobj.QasmExperimentCalibrations#qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")) – Information required for Pulse gates.
*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

<span id="undefined" />

`__init__(calibrations=None, qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

**Parameters**

*   **calibrations** ([*QasmExperimentCalibrations*](qiskit.qobj.QasmExperimentCalibrations#qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")) – Information required for Pulse gates.
*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

|                                                                                                                                                   |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.QasmQobjExperimentConfig.__init__ "qiskit.qobj.QasmQobjExperimentConfig.__init__")(\[calibrations, qubit\_lo\_freq, …]) | **param calibrations**Information required for Pulse gates. |
| [`from_dict`](#qiskit.qobj.QasmQobjExperimentConfig.from_dict "qiskit.qobj.QasmQobjExperimentConfig.from_dict")(data)                             | Create a new QobjHeader object from a dictionary.           |
| [`to_dict`](#qiskit.qobj.QasmQobjExperimentConfig.to_dict "qiskit.qobj.QasmQobjExperimentConfig.to_dict")()                                       | Return a dictionary format representation of the QASM Qobj. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.QasmQobjExperimentConfig.to_dict "qiskit.qobj.QasmQobjExperimentConfig.to_dict").

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
