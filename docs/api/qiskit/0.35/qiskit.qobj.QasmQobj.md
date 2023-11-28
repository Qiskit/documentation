# QasmQobj[¶](#qasmqobj "Permalink to this headline")

<span id="undefined" />

`QasmQobj(qobj_id=None, config=None, experiments=None, header=None)`

Bases: `object`

A QASM Qobj.

Instantiate a new QASM Qobj Object.

Each QASM Qobj object is used to represent a single payload that will be passed to a Qiskit provider. It mirrors the Qobj the published [Qobj specification](https://arxiv.org/abs/1809.03452) for OpenQASM experiments.

**Parameters**

*   **qobj\_id** (*str*) – An identifier for the qobj
*   **config** (*QasmQobjRunConfig*) – A config for the entire run
*   **header** ([*QobjHeader*](qiskit.qobj.QobjHeader#qiskit.qobj.QobjHeader "qiskit.qobj.QobjHeader")) – A header for the entire run
*   **experiments** (*list*) – A list of lists of [`QasmQobjExperiment`](qiskit.qobj.QasmQobjExperiment#qiskit.qobj.QasmQobjExperiment "qiskit.qobj.QasmQobjExperiment") objects representing an experiment

## Methods

|                                                                                                               |                                                             |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`from_dict`](qiskit.qobj.QasmQobj.from_dict#qiskit.qobj.QasmQobj.from_dict "qiskit.qobj.QasmQobj.from_dict") | Create a new QASMQobj object from a dictionary.             |
| [`to_dict`](qiskit.qobj.QasmQobj.to_dict#qiskit.qobj.QasmQobj.to_dict "qiskit.qobj.QasmQobj.to_dict")         | Return a dictionary format representation of the QASM Qobj. |
