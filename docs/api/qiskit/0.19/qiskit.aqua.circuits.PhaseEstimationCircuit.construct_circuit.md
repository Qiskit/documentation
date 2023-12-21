---
title: construct_circuit
description: API reference for qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.circuits.PhaseEstimationCircuit.construct_circuit" />

`PhaseEstimationCircuit.construct_circuit(state_register=None, ancillary_register=None, auxiliary_register=None, measurement=False)`

Construct the Phase Estimation circuit

**Parameters**

*   **state\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the optional register to use for the quantum state
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the optional register to use for
*   **qubits** (*the ancillary measurement*) –
*   **auxiliary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – an optional auxiliary quantum register
*   **measurement** (*bool*) – Boolean flag to indicate if measurement should be included
*   **circuit.** (*in the*) –

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **RuntimeError** – Multiple identity pauli terms are present
*   **ValueError** – invalid mode

