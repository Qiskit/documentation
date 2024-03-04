---
title: QasmExperimentCalibrations
description: API reference for qiskit.qobj.QasmExperimentCalibrations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmExperimentCalibrations
---

# qiskit.qobj.QasmExperimentCalibrations

<span id="qiskit.qobj.QasmExperimentCalibrations" />

`QasmExperimentCalibrations(gates)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/qobj/qasm_qobj.py "view source code")

A container for any calibrations data. The gates attribute contains a list of GateCalibrations.

Initialize a container for calibrations.

**Parameters**

**gates** (*list(*[*GateCalibration*](qiskit.qobj.GateCalibration "qiskit.qobj.GateCalibration")*)*) –

### \_\_init\_\_

<span id="qiskit.qobj.QasmExperimentCalibrations.__init__" />

`__init__(gates)`

Initialize a container for calibrations.

**Parameters**

**gates** (*list(*[*GateCalibration*](qiskit.qobj.GateCalibration "qiskit.qobj.GateCalibration")*)*) –

## Methods

|                                                                                                                           |                                                                |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.QasmExperimentCalibrations.__init__ "qiskit.qobj.QasmExperimentCalibrations.__init__")(gates)   | Initialize a container for calibrations.                       |
| [`from_dict`](#qiskit.qobj.QasmExperimentCalibrations.from_dict "qiskit.qobj.QasmExperimentCalibrations.from_dict")(data) | Create a new GateCalibration object from a dictionary.         |
| [`to_dict`](#qiskit.qobj.QasmExperimentCalibrations.to_dict "qiskit.qobj.QasmExperimentCalibrations.to_dict")()           | Return a dictionary format representation of the calibrations. |

### from\_dict

<span id="qiskit.qobj.QasmExperimentCalibrations.from_dict" />

`classmethod from_dict(data)`

Create a new GateCalibration object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QasmExperimentCalibrations to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.QasmExperimentCalibrations.to_dict "qiskit.qobj.QasmExperimentCalibrations.to_dict").

**Returns**

The QasmExperimentCalibrations from the input dictionary.

**Return type**

[QasmExperimentCalibrations](#qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")

### to\_dict

<span id="qiskit.qobj.QasmExperimentCalibrations.to_dict" />

`to_dict()`

Return a dictionary format representation of the calibrations.

**Returns**

The dictionary form of the GateCalibration.

**Return type**

dict

