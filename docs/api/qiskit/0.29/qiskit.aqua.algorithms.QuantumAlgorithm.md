---
title: QuantumAlgorithm
description: API reference for qiskit.aqua.algorithms.QuantumAlgorithm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QuantumAlgorithm
---

# QuantumAlgorithm

<span id="qiskit.aqua.algorithms.QuantumAlgorithm" />

`QuantumAlgorithm(quantum_instance)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/quantum_algorithm.py "view source code")

Bases: `abc.ABC`

Base class for Quantum Algorithms.

This method should initialize the module and use an exception if a component of the module is available.

## Methods

### run

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.run" />

`QuantumAlgorithm.run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

### set\_backend

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.set_backend" />

`QuantumAlgorithm.set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

## Attributes

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.backend" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.quantum_instance" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.random" />

### random

Return a numpy random.

