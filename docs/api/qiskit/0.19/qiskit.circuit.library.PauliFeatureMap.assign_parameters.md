---
title: assign_parameters
description: API reference for qiskit.circuit.library.PauliFeatureMap.assign_parameters
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.PauliFeatureMap.assign_parameters
---

# assign\_parameters

<span id="qiskit.circuit.library.PauliFeatureMap.assign_parameters" />

`PauliFeatureMap.assign_parameters(param_dict, inplace=False)`

Assign parameters to the n-local circuit.

This method also supports passing a list instead of a dictionary. If a list is passed, the list must have the same length as the number of unbound parameters in the circuit. The parameters are assigned in the order of the parameters in [`ordered_parameters()`](qiskit.circuit.library.PauliFeatureMap.ordered_parameters "qiskit.circuit.library.PauliFeatureMap.ordered_parameters").

**Return type**

`Optional`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]

**Returns**

A copy of the NLocal circuit with the specified parameters.

**Raises**

**AttributeError** – If the parameters are given as list and do not match the number of parameters.

