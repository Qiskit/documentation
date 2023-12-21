---
title: construct_circuit
description: API reference for qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit
---

# construct\_circuit

<span id="qiskit.chemistry.components.initial_states.HartreeFock.construct_circuit" />

`HartreeFock.construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (*string*) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

**ValueError** – when mode is not ‘vector’ or ‘circuit’.

