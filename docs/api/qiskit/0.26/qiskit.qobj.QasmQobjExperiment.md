# qiskit.qobj.QasmQobjExperiment

<span id="undefined" />

`QasmQobjExperiment(config=None, header=None, instructions=None)`

A QASM Qobj Experiment.

Each instance of this class is used to represent a QASM experiment as part of a larger QASM qobj.

Instantiate a QasmQobjExperiment.

**Parameters**

*   **config** ([*QasmQobjExperimentConfig*](qiskit.qobj.QasmQobjExperimentConfig#qiskit.qobj.QasmQobjExperimentConfig "qiskit.qobj.QasmQobjExperimentConfig")) – A config object for the experiment
*   **header** (*QasmQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`QasmQobjInstruction`](qiskit.qobj.QasmQobjInstruction#qiskit.qobj.QasmQobjInstruction "qiskit.qobj.QasmQobjInstruction") objects

<span id="undefined" />

`__init__(config=None, header=None, instructions=None)`

Instantiate a QasmQobjExperiment.

**Parameters**

*   **config** ([*QasmQobjExperimentConfig*](qiskit.qobj.QasmQobjExperimentConfig#qiskit.qobj.QasmQobjExperimentConfig "qiskit.qobj.QasmQobjExperimentConfig")) – A config object for the experiment
*   **header** (*QasmQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`QasmQobjInstruction`](qiskit.qobj.QasmQobjInstruction#qiskit.qobj.QasmQobjInstruction "qiskit.qobj.QasmQobjInstruction") objects

## Methods

|                                                                                                                                   |                                                              |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`__init__`](#qiskit.qobj.QasmQobjExperiment.__init__ "qiskit.qobj.QasmQobjExperiment.__init__")(\[config, header, instructions]) | Instantiate a QasmQobjExperiment.                            |
| [`from_dict`](#qiskit.qobj.QasmQobjExperiment.from_dict "qiskit.qobj.QasmQobjExperiment.from_dict")(data)                         | Create a new QasmQobjExperiment object from a dictionary.    |
| [`to_dict`](#qiskit.qobj.QasmQobjExperiment.to_dict "qiskit.qobj.QasmQobjExperiment.to_dict")()                                   | Return a dictionary format representation of the Experiment. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new QasmQobjExperiment object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[QasmQobjExperiment](#qiskit.qobj.QasmQobjExperiment "qiskit.qobj.QasmQobjExperiment")

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the Experiment.

**Returns**

The dictionary form of the QasmQObjExperiment.

**Return type**

dict
