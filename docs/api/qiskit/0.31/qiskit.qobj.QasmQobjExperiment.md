# QasmQobjExperiment

<span id="undefined" />

`QasmQobjExperiment(config=None, header=None, instructions=None)`

Bases: `object`

A QASM Qobj Experiment.

Each instance of this class is used to represent a QASM experiment as part of a larger QASM qobj.

Instantiate a QasmQobjExperiment.

**Parameters**

*   **config** ([*QasmQobjExperimentConfig*](qiskit.qobj.QasmQobjExperimentConfig#qiskit.qobj.QasmQobjExperimentConfig "qiskit.qobj.QasmQobjExperimentConfig")) – A config object for the experiment
*   **header** (*QasmQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`QasmQobjInstruction`](qiskit.qobj.QasmQobjInstruction#qiskit.qobj.QasmQobjInstruction "qiskit.qobj.QasmQobjInstruction") objects

## Methods

|                                                                                                                                             |                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`from_dict`](qiskit.qobj.QasmQobjExperiment.from_dict#qiskit.qobj.QasmQobjExperiment.from_dict "qiskit.qobj.QasmQobjExperiment.from_dict") | Create a new QasmQobjExperiment object from a dictionary.    |
| [`to_dict`](qiskit.qobj.QasmQobjExperiment.to_dict#qiskit.qobj.QasmQobjExperiment.to_dict "qiskit.qobj.QasmQobjExperiment.to_dict")         | Return a dictionary format representation of the Experiment. |
