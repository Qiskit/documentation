# QuantumAlgorithm

<span id="undefined" />

`QuantumAlgorithm(quantum_instance)`

Bases: `abc.ABC`

Base class for Quantum Algorithms.

This method should initialize the module and use an exception if a component of the module is available.

## Methods

|                                                                                                                                                                                |                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| [`run`](qiskit.aqua.algorithms.QuantumAlgorithm.run#qiskit.aqua.algorithms.QuantumAlgorithm.run "qiskit.aqua.algorithms.QuantumAlgorithm.run")                                 | Execute the algorithm with selected backend. |
| [`set_backend`](qiskit.aqua.algorithms.QuantumAlgorithm.set_backend#qiskit.aqua.algorithms.QuantumAlgorithm.set_backend "qiskit.aqua.algorithms.QuantumAlgorithm.set_backend") | Sets backend with configuration.             |

## Attributes

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.
