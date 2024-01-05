---
title: QuantumAlgorithm
description: API reference for qiskit.aqua.algorithms.QuantumAlgorithm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QuantumAlgorithm
---

<span id="qiskit-aqua-algorithms-quantumalgorithm" />

# qiskit.aqua.algorithms.QuantumAlgorithm

<span id="qiskit.aqua.algorithms.QuantumAlgorithm" />

`QuantumAlgorithm(quantum_instance)`

Base class for Quantum Algorithms.

This method should initialize the module and use an exception if a component of the module is available.

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.__init__" />

`abstract __init__(quantum_instance)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### backend

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.backend" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

### quantum\_instance

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.quantum_instance" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

### random

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.random" />

`property random`

Return a numpy random.

### run

<span id="qiskit.aqua.algorithms.QuantumAlgorithm.run" />

`run(quantum_instance=None, **kwargs)`

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

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

