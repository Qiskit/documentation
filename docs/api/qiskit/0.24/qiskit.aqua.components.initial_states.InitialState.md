---
title: InitialState
description: API reference for qiskit.aqua.components.initial_states.InitialState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.initial_states.InitialState
---

<span id="qiskit-aqua-components-initial-states-initialstate" />

# qiskit.aqua.components.initial\_states.InitialState

<span id="qiskit.aqua.components.initial_states.InitialState" />

`InitialState`

Base class for InitialState.

This method should initialize the module and use an exception if a component of the module is not available.

### \_\_init\_\_

<span id="qiskit.aqua.components.initial_states.InitialState.__init__" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### bitstr

<span id="qiskit.aqua.components.initial_states.InitialState.bitstr" />

`property bitstr`

### construct\_circuit

<span id="qiskit.aqua.components.initial_states.InitialState.construct_circuit" />

`abstract construct_circuit(mode='circuit', register=None)`

Construct the statevector of desired initial state.

**Parameters**

*   **mode** (`str`) – vector or circuit. The vector mode produces the vector. While the circuit constructs the quantum circuit corresponding that vector.
*   **register** (`Optional`\[`QuantumRegister`]) – qubits for circuit construction.

**Returns**

statevector.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") or numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – when mode is not ‘vector’ or ‘circuit’.

