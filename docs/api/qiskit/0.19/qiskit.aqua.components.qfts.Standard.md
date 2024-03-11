---
title: Standard
description: API reference for qiskit.aqua.components.qfts.Standard
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.qfts.Standard
---

# Standard

<span id="qiskit.aqua.components.qfts.Standard" />

`Standard(num_qubits)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/qfts/standard.py "view source code")

The Standard QFT.

This is a standard Quantum Fourier Transform

**Parameters**

**num\_qubits** (`int`) – The number of qubits

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.qfts.Standard.construct_circuit" />

`Standard.construct_circuit(mode='circuit', qubits=None, circuit=None, do_swaps=True)`

Construct the circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **qubits** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *or qubits*) – register or qubits to build the circuit on.
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – circuit for construction.
*   **do\_swaps** (*bool*) – include the swaps.

**Returns**

The matrix or circuit depending on the specified mode.

**Return type**

numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – ‘Unrecognized mode

