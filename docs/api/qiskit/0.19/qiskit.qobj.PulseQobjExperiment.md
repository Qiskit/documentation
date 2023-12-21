---
title: PulseQobjExperiment
description: API reference for qiskit.qobj.PulseQobjExperiment
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseQobjExperiment
---

# PulseQobjExperiment

<span id="qiskit.qobj.PulseQobjExperiment" />

`PulseQobjExperiment(instructions, config=None, header=None)`

A Pulse Qobj Experiment.

Each instance of this class is used to represent an individual Pulse experiment as part of a larger Pulse Qobj.

Instantiate a PulseQobjExperiment.

**Parameters**

*   **config** ([*PulseQobjExperimentConfig*](qiskit.qobj.PulseQobjExperimentConfig "qiskit.qobj.PulseQobjExperimentConfig")) – A config object for the experiment
*   **header** (*PulseQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`PulseQobjInstruction`](qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction") objects

## Methods

|                                                                                                                                |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [`PulseQobjExperiment.from_dict`](qiskit.qobj.PulseQobjExperiment.from_dict "qiskit.qobj.PulseQobjExperiment.from_dict")(data) | Create a new PulseQobjExperiment object from a dictionary.   |
| [`PulseQobjExperiment.to_dict`](qiskit.qobj.PulseQobjExperiment.to_dict "qiskit.qobj.PulseQobjExperiment.to_dict")()           | Return a dictionary format representation of the Experiment. |

