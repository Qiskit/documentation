---
title: PulseQobjExperimentConfig
description: API reference for qiskit.qobj.PulseQobjExperimentConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseQobjExperimentConfig
---

# PulseQobjExperimentConfig

<span id="qiskit.qobj.PulseQobjExperimentConfig" />

`PulseQobjExperimentConfig(qubit_lo_freq=None, meas_lo_freq=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/qobj/pulse_qobj.py "view source code")

Bases: `qiskit.qobj.common.QobjDictField`

A config for a single Pulse experiment in the qobj.

Instantiate a PulseQobjExperimentConfig object.

**Parameters**

*   **qubit\_lo\_freq** (*List\[float]*) – List of qubit LO frequencies in GHz.
*   **meas\_lo\_freq** (*List\[float]*) – List of meas readout LO frequencies in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

### from\_dict

<span id="qiskit.qobj.PulseQobjExperimentConfig.from_dict" />

`classmethod PulseQobjExperimentConfig.from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](qiskit.qobj.PulseQobjExperimentConfig#to_dict "qiskit.qobj.PulseQobjExperimentConfig.to_dict").

**Returns**

The QobjDictField from the input dictionary.

**Return type**

QobjDictFieldr

### to\_dict

<span id="qiskit.qobj.PulseQobjExperimentConfig.to_dict" />

`PulseQobjExperimentConfig.to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict

