# PulseQobj

<span id="undefined" />

`PulseQobj(qobj_id, config, experiments, header=None)`

Bases: `object`

A Pulse Qobj.

Instantiate a new Pulse Qobj Object.

Each Pulse Qobj object is used to represent a single payload that will be passed to a Qiskit provider. It mirrors the Qobj the published [Qobj specification](https://arxiv.org/abs/1809.03452) for Pulse experiments.

**Parameters**

*   **qobj\_id** (*str*) – An identifier for the qobj
*   **config** ([*PulseQobjConfig*](qiskit.qobj.PulseQobjConfig#qiskit.qobj.PulseQobjConfig "qiskit.qobj.PulseQobjConfig")) – A config for the entire run
*   **header** ([*QobjHeader*](qiskit.qobj.QobjHeader#qiskit.qobj.QobjHeader "qiskit.qobj.QobjHeader")) – A header for the entire run
*   **experiments** (*list*) – A list of lists of [`PulseQobjExperiment`](qiskit.qobj.PulseQobjExperiment#qiskit.qobj.PulseQobjExperiment "qiskit.qobj.PulseQobjExperiment") objects representing an experiment

## Methods

|                                                                                                                  |                                                              |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`from_dict`](qiskit.qobj.PulseQobj.from_dict#qiskit.qobj.PulseQobj.from_dict "qiskit.qobj.PulseQobj.from_dict") | Create a new PulseQobj object from a dictionary.             |
| [`to_dict`](qiskit.qobj.PulseQobj.to_dict#qiskit.qobj.PulseQobj.to_dict "qiskit.qobj.PulseQobj.to_dict")         | Return a dictionary format representation of the Pulse Qobj. |
