---
title: QasmQobjExperiment
description: API reference for qiskit.qobj.QasmQobjExperiment
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobjExperiment
---

# QasmQobjExperiment

<span id="qiskit.qobj.QasmQobjExperiment" />

`QasmQobjExperiment(config=None, header=None, instructions=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/qobj/qasm_qobj.py "view source code")

Bases: `object`

A QASM Qobj Experiment.

Each instance of this class is used to represent a QASM experiment as part of a larger QASM qobj.

Instantiate a QasmQobjExperiment.

**Parameters**

*   **config** ([*QasmQobjExperimentConfig*](qiskit.qobj.QasmQobjExperimentConfig "qiskit.qobj.QasmQobjExperimentConfig")) – A config object for the experiment
*   **header** (*QasmQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`QasmQobjInstruction`](qiskit.qobj.QasmQobjInstruction "qiskit.qobj.QasmQobjInstruction") objects

## Methods

### from\_dict

<span id="qiskit.qobj.QasmQobjExperiment.from_dict" />

`classmethod QasmQobjExperiment.from_dict(data)`

Create a new QasmQobjExperiment object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[QasmQobjExperiment](qiskit.qobj.QasmQobjExperiment "qiskit.qobj.QasmQobjExperiment")

### to\_dict

<span id="qiskit.qobj.QasmQobjExperiment.to_dict" />

`QasmQobjExperiment.to_dict()`

Return a dictionary format representation of the Experiment.

**Returns**

The dictionary form of the QasmQObjExperiment.

**Return type**

dict

