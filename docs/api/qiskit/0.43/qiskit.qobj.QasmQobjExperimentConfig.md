---
title: QasmQobjExperimentConfig
description: API reference for qiskit.qobj.QasmQobjExperimentConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobjExperimentConfig
---

# QasmQobjExperimentConfig

<span id="qiskit.qobj.QasmQobjExperimentConfig" />

`QasmQobjExperimentConfig(calibrations=None, qubit_lo_freq=None, meas_lo_freq=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/qobj/qasm_qobj.py "view source code")

Bases: `QobjDictField`

Configuration for a single QASM experiment in the qobj.

**Parameters**

*   **calibrations** ([*QasmExperimentCalibrations*](qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")) – Information required for Pulse gates.
*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

<span id="qiskit-qobj-qasmqobjexperimentconfig-from-dict" />

### from\_dict

<span id="qiskit.qobj.QasmQobjExperimentConfig.from_dict" />

`classmethod QasmQobjExperimentConfig.from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](qiskit.qobj.QasmQobjExperimentConfig#to_dict "qiskit.qobj.QasmQobjExperimentConfig.to_dict").

**Returns**

The QobjDictField from the input dictionary.

**Return type**

QobjDictFieldr

<span id="qiskit-qobj-qasmqobjexperimentconfig-to-dict" />

### to\_dict

<span id="qiskit.qobj.QasmQobjExperimentConfig.to_dict" />

`QasmQobjExperimentConfig.to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict

