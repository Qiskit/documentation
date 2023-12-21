---
title: QasmQobjExperiment
description: API reference for qiskit.qobj.QasmQobjExperiment
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobjExperiment
---

# QasmQobjExperiment

<span id="qiskit.qobj.QasmQobjExperiment" />

`QasmQobjExperiment(config=None, header=None, instructions=None)`

A QASM Qobj Experiment.

Each instance of this class is used to represent a QASM experiment as part of a larger QASM qobj.

Instatiate a QasmQobjExperiment.

**Parameters**

*   **config** ([*QasmQobjExperimentConfig*](qiskit.qobj.QasmQobjExperimentConfig "qiskit.qobj.QasmQobjExperimentConfig")) – A config object for the experiment
*   **header** (*QasmQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`QasmQobjInstruction`](qiskit.qobj.QasmQobjInstruction "qiskit.qobj.QasmQobjInstruction") objects

## Methods

|                                                                                                                             |                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`QasmQobjExperiment.from_dict`](qiskit.qobj.QasmQobjExperiment.from_dict "qiskit.qobj.QasmQobjExperiment.from_dict")(data) | Create a new QasmQobjExperiment object from a dictionary.    |
| [`QasmQobjExperiment.to_dict`](qiskit.qobj.QasmQobjExperiment.to_dict "qiskit.qobj.QasmQobjExperiment.to_dict")()           | Return a dictionary format representation of the Experiment. |

