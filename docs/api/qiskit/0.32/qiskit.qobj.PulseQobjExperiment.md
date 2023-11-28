# PulseQobjExperiment

<span id="undefined" />

`PulseQobjExperiment(instructions, config=None, header=None)`

Bases: `object`

A Pulse Qobj Experiment.

Each instance of this class is used to represent an individual Pulse experiment as part of a larger Pulse Qobj.

Instantiate a PulseQobjExperiment.

**Parameters**

*   **config** ([*PulseQobjExperimentConfig*](qiskit.qobj.PulseQobjExperimentConfig#qiskit.qobj.PulseQobjExperimentConfig "qiskit.qobj.PulseQobjExperimentConfig")) – A config object for the experiment
*   **header** (*PulseQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`PulseQobjInstruction`](qiskit.qobj.PulseQobjInstruction#qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction") objects

## Methods

|                                                                                                                                                |                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`from_dict`](qiskit.qobj.PulseQobjExperiment.from_dict#qiskit.qobj.PulseQobjExperiment.from_dict "qiskit.qobj.PulseQobjExperiment.from_dict") | Create a new PulseQobjExperiment object from a dictionary.   |
| [`to_dict`](qiskit.qobj.PulseQobjExperiment.to_dict#qiskit.qobj.PulseQobjExperiment.to_dict "qiskit.qobj.PulseQobjExperiment.to_dict")         | Return a dictionary format representation of the Experiment. |
