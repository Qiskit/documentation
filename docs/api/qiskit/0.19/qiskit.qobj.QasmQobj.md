---
title: QasmQobj
description: API reference for qiskit.qobj.QasmQobj
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmQobj
---

# QasmQobj

<span id="qiskit.qobj.QasmQobj" />

`QasmQobj(qobj_id=None, config=None, experiments=None, header=None)`

A QASM Qobj.

Instatiate a new QASM Qobj Object.

Each QASM Qobj object is used to represent a single payload that will be passed to a Qiskit provider. It mirrors the Qobj the published [Qobj specification](https://arxiv.org/abs/1809.03452) for OpenQASM experiments.

**Parameters**

*   **qobj\_id** (*str*) – An identifier for the qobj
*   **config** (*QasmQobjRunConfig*) – A config for the entire run
*   **header** ([*QobjHeader*](qiskit.qobj.QobjHeader "qiskit.qobj.QobjHeader")) – A header for the entire run
*   **experiments** (*list*) – A list of lists of [`QasmQobjExperiment`](qiskit.qobj.QasmQobjExperiment "qiskit.qobj.QasmQobjExperiment") objects representing an experiment

## Methods

|                                                                                                |                                                             |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`QasmQobj.from_dict`](qiskit.qobj.QasmQobj.from_dict "qiskit.qobj.QasmQobj.from_dict")(data)  | Create a new QASMQobj object from a dictionary.             |
| [`QasmQobj.to_dict`](qiskit.qobj.QasmQobj.to_dict "qiskit.qobj.QasmQobj.to_dict")(\[validate]) | Return a dictionary format representation of the QASM Qobj. |

