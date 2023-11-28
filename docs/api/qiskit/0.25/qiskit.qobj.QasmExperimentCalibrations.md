# qiskit.qobj.QasmExperimentCalibrations

<span id="undefined" />

`QasmExperimentCalibrations(gates)`

A container for any calibrations data. The gates attribute contains a list of GateCalibrations.

Initialize a container for calibrations.

**Parameters**

**gates** (*list(*[*GateCalibration*](qiskit.qobj.GateCalibration#qiskit.qobj.GateCalibration "qiskit.qobj.GateCalibration")*)*) –

<span id="undefined" />

`__init__(gates)`

Initialize a container for calibrations.

**Parameters**

**gates** (*list(*[*GateCalibration*](qiskit.qobj.GateCalibration#qiskit.qobj.GateCalibration "qiskit.qobj.GateCalibration")*)*) –

## Methods

|                                                                                                                           |                                                                |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`__init__`](#qiskit.qobj.QasmExperimentCalibrations.__init__ "qiskit.qobj.QasmExperimentCalibrations.__init__")(gates)   | Initialize a container for calibrations.                       |
| [`from_dict`](#qiskit.qobj.QasmExperimentCalibrations.from_dict "qiskit.qobj.QasmExperimentCalibrations.from_dict")(data) | Create a new GateCalibration object from a dictionary.         |
| [`to_dict`](#qiskit.qobj.QasmExperimentCalibrations.to_dict "qiskit.qobj.QasmExperimentCalibrations.to_dict")()           | Return a dictionary format representation of the calibrations. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new GateCalibration object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QasmExperimentCalibrations to create. It will be in the same format as output by [`to_dict()`](#qiskit.qobj.QasmExperimentCalibrations.to_dict "qiskit.qobj.QasmExperimentCalibrations.to_dict").

**Returns**

The QasmExperimentCalibrations from the input dictionary.

**Return type**

[QasmExperimentCalibrations](#qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the calibrations.

**Returns**

The dictionary form of the GateCalibration.

**Return type**

dict
