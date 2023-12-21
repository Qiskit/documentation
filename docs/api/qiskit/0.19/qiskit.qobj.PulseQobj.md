---
title: PulseQobj
description: API reference for qiskit.qobj.PulseQobj
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseQobj
---

# PulseQobj

<span id="qiskit.qobj.PulseQobj" />

`PulseQobj(qobj_id, config, experiments, header=None)`

A Pulse Qobj.

Instatiate a new Pulse Qobj Object.

Each Pulse Qobj object is used to represent a single payload that will be passed to a Qiskit provider. It mirrors the Qobj the published [Qobj specification](https://arxiv.org/abs/1809.03452) for Pulse experiments.

**Parameters**

*   **qobj\_id** (*str*) – An identifier for the qobj
*   **config** ([*PulseQobjConfig*](qiskit.qobj.PulseQobjConfig "qiskit.qobj.PulseQobjConfig")) – A config for the entire run
*   **header** ([*QobjHeader*](qiskit.qobj.QobjHeader "qiskit.qobj.QobjHeader")) – A header for the entire run
*   **experiments** (*list*) – A list of lists of [`PulseQobjExperiment`](qiskit.qobj.PulseQobjExperiment "qiskit.qobj.PulseQobjExperiment") objects representing an experiment

## Methods

|                                                                                                   |                                                              |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`PulseQobj.from_dict`](qiskit.qobj.PulseQobj.from_dict "qiskit.qobj.PulseQobj.from_dict")(data)  | Create a new PulseQobj object from a dictionary.             |
| [`PulseQobj.to_dict`](qiskit.qobj.PulseQobj.to_dict "qiskit.qobj.PulseQobj.to_dict")(\[validate]) | Return a dictionary format representation of the Pulse Qobj. |

