---
title: QasmQobjExperimentConfig
description: API reference for qiskit.qobj.QasmQobjExperimentConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobjExperimentConfig
---

# QasmQobjExperimentConfig

<span id="qiskit.qobj.QasmQobjExperimentConfig" />

`QasmQobjExperimentConfig(**kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/qobj/qasm_qobj.py "view source code")

Configuration for a single QASM experiment in the qobj.

Instantiate a new Qobj dict field object.

**Parameters**

**kwargs** – arbitrary keyword arguments that can be accessed as attributes of the object.

## Methods

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

### to\_dict

<span id="qiskit.qobj.QasmQobjExperimentConfig.to_dict" />

`QasmQobjExperimentConfig.to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict

