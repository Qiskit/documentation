---
title: bind_parameters
description: API reference for qiskit.circuit.library.EfficientSU2.bind_parameters
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.EfficientSU2.bind_parameters
---

# bind\_parameters

<span id="qiskit.circuit.library.EfficientSU2.bind_parameters" />

`EfficientSU2.bind_parameters(value_dict)`

Assign numeric parameters to values yielding a new circuit.

To assign new Parameter objects or bind the values in-place, without yielding a new circuit, use the assign\_parameters method.

**Parameters**

**value\_dict** (*dict*) – \{parameter: value, …}

**Raises**

*   **CircuitError** – If value\_dict contains parameters not present in the circuit
*   **TypeError** – If value\_dict contains a ParameterExpression in the values.

**Returns**

copy of self with assignment substitution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

