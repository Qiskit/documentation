---
title: BernsteinVazirani
description: API reference for qiskit.aqua.algorithms.BernsteinVazirani
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.BernsteinVazirani
---

# BernsteinVazirani

<span id="qiskit.aqua.algorithms.BernsteinVazirani" />

`BernsteinVazirani(oracle, quantum_instance=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/education/bernstein_vazirani.py "view source code")

Bases: `qiskit.aqua.algorithms.quantum_algorithm.QuantumAlgorithm`

The Bernstein-Vazirani algorithm.

The Bernstein-Vazirani algorithm is an extension / restriction of the Deutsch-Jozsa algorithm. The goal of the algorithm is to determine a secret string $s \in \{0,1\}^n$, given a black box oracle function, that maps $f:\{0,1\}^n \rightarrow \{0,1\}$ such that $f(x)=s \cdot x (\bmod 2)$.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

### construct\_circuit

<span id="qiskit.aqua.algorithms.BernsteinVazirani.construct_circuit" />

`BernsteinVazirani.construct_circuit(measurement=False)`

Construct the quantum circuit

**Parameters**

**measurement** (*bool*) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### run

<span id="qiskit.aqua.algorithms.BernsteinVazirani.run" />

`BernsteinVazirani.run(quantum_instance=None, **kwargs)`

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

<span id="qiskit.aqua.algorithms.BernsteinVazirani.set_backend" />

`BernsteinVazirani.set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

## Attributes

<span id="qiskit.aqua.algorithms.BernsteinVazirani.backend" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="qiskit.aqua.algorithms.BernsteinVazirani.quantum_instance" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="qiskit.aqua.algorithms.BernsteinVazirani.random" />

### random

Return a numpy random.

