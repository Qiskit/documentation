---
title: construct_circuit
description: API reference for qiskit.aqua.components.initial_states.VarFormBased.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.initial_states.VarFormBased.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.initial_states.VarFormBased.construct_circuit" />

`VarFormBased.construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (*string*) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – qubits for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

*   **RuntimeError** – invalid input for mode
*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – when mode is not ‘vector’ or ‘circuit’.

