---
title: remove_final_measurements
description: API reference for qiskit.circuit.library.InnerProduct.remove_final_measurements
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.InnerProduct.remove_final_measurements
---

# remove\_final\_measurements

<span id="qiskit.circuit.library.InnerProduct.remove_final_measurements" />

`InnerProduct.remove_final_measurements(inplace=True)`

Removes final measurement on all qubits if they are present. Deletes the ClassicalRegister that was used to store the values from these measurements if it is idle.

Returns a new circuit without measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements removed inplace or return new circuit.

**Returns**

Returns circuit with measurements removed when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

