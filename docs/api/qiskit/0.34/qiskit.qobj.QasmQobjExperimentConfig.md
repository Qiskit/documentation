# QasmQobjExperimentConfig[¶](#qasmqobjexperimentconfig "Permalink to this headline")

<span id="undefined" />

`QasmQobjExperimentConfig(calibrations=None, qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

Bases: `qiskit.qobj.common.QobjDictField`

Configuration for a single QASM experiment in the qobj.

**Parameters**

*   **calibrations** ([*QasmExperimentCalibrations*](qiskit.qobj.QasmExperimentCalibrations#qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")) – Information required for Pulse gates.
*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

|                                                                                                                                                               |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`from_dict`](qiskit.qobj.QasmQobjExperimentConfig.from_dict#qiskit.qobj.QasmQobjExperimentConfig.from_dict "qiskit.qobj.QasmQobjExperimentConfig.from_dict") | Create a new QobjHeader object from a dictionary.           |
| [`to_dict`](qiskit.qobj.QasmQobjExperimentConfig.to_dict#qiskit.qobj.QasmQobjExperimentConfig.to_dict "qiskit.qobj.QasmQobjExperimentConfig.to_dict")         | Return a dictionary format representation of the QASM Qobj. |
