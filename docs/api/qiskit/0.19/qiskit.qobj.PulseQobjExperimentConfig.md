---
title: PulseQobjExperimentConfig
description: API reference for qiskit.qobj.PulseQobjExperimentConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseQobjExperimentConfig
---

# PulseQobjExperimentConfig

<span id="qiskit.qobj.PulseQobjExperimentConfig" />

`PulseQobjExperimentConfig(qubit_lo_freq=None, meas_lo_freq=None, **kwargs)`

A config for a single Pulse experiment in the qobj.

Instantiate a PulseQobjExperimentConfig object.

**Parameters**

*   **qubit\_lo\_freq** (*list*) – List of frequencies (as floats) for the qubit driver LO’s in GHz.
*   **meas\_lo\_freq** (*list*) – List of frequencies (as floats) for the’ measurement driver LO’s in GHz.
*   **kwargs** – Additional free form key value fields to add to the configuration

## Methods

|                                                                                                                                                  |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`PulseQobjExperimentConfig.from_dict`](qiskit.qobj.PulseQobjExperimentConfig.from_dict "qiskit.qobj.PulseQobjExperimentConfig.from_dict")(data) | Create a new QobjHeader object from a dictionary.           |
| [`PulseQobjExperimentConfig.to_dict`](qiskit.qobj.PulseQobjExperimentConfig.to_dict "qiskit.qobj.PulseQobjExperimentConfig.to_dict")()           | Return a dictionary format representation of the QASM Qobj. |

