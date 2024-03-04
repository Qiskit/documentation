---
title: Simon
description: API reference for qiskit.aqua.algorithms.Simon
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.Simon
---

# qiskit.aqua.algorithms.Simon

<span id="qiskit.aqua.algorithms.Simon" />

`Simon(oracle, quantum_instance=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/algorithms/education/simon.py "view source code")

The Simon algorithm.

The Simon algorithm finds a hidden integer $s \in \{0,1\}^n$ from an oracle $f_s$ that satisfies $f_s(x) = f_s(y)$ if and only if $y=x \oplus s$ for all $x \in \{0,1\}^n$. Thus, if $s = 0\ldots 0$, i.e., the all-zero bitstring, then $f_s$ is a 1-to-1 (or, permutation) function. Otherwise, if $s \neq 0\ldots 0$, then $f_s$ is a 2-to-1 function.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") may be the easiest to use to create one that can be used with the Simon algorithm.

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

### \_\_init\_\_

<span id="qiskit.aqua.algorithms.Simon.__init__" />

`__init__(oracle, quantum_instance=None)`

**Parameters**

*   **oracle** (`Oracle`) – The oracle component
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                         |                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.Simon.__init__ "qiskit.aqua.algorithms.Simon.__init__")(oracle\[, quantum\_instance])              | **type oracle**`Oracle`                      |
| [`construct_circuit`](#qiskit.aqua.algorithms.Simon.construct_circuit "qiskit.aqua.algorithms.Simon.construct_circuit")(\[measurement]) | Construct the quantum circuit                |
| [`run`](#qiskit.aqua.algorithms.Simon.run "qiskit.aqua.algorithms.Simon.run")(\[quantum\_instance])                                     | Execute the algorithm with selected backend. |
| [`set_backend`](#qiskit.aqua.algorithms.Simon.set_backend "qiskit.aqua.algorithms.Simon.set_backend")(backend, \*\*kwargs)              | Sets backend with configuration.             |

## Attributes

|                                                                                                                      |                           |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`backend`](#qiskit.aqua.algorithms.Simon.backend "qiskit.aqua.algorithms.Simon.backend")                            | Returns backend.          |
| [`quantum_instance`](#qiskit.aqua.algorithms.Simon.quantum_instance "qiskit.aqua.algorithms.Simon.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.Simon.random "qiskit.aqua.algorithms.Simon.random")                               | Return a numpy random.    |

### backend

<span id="qiskit.aqua.algorithms.Simon.backend" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

### construct\_circuit

<span id="qiskit.aqua.algorithms.Simon.construct_circuit" />

`construct_circuit(measurement=False)`

Construct the quantum circuit

**Parameters**

**measurement** (*bool*) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### quantum\_instance

<span id="qiskit.aqua.algorithms.Simon.quantum_instance" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

### random

<span id="qiskit.aqua.algorithms.Simon.random" />

`property random`

Return a numpy random.

### run

<span id="qiskit.aqua.algorithms.Simon.run" />

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

<span id="qiskit.aqua.algorithms.Simon.set_backend" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

