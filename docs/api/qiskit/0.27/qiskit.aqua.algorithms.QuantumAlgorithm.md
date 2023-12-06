# qiskit.aqua.algorithms.QuantumAlgorithm



`QuantumAlgorithm(quantum_instance)`

Base class for Quantum Algorithms.

This method should initialize the module and use an exception if a component of the module is available.



`abstract __init__(quantum_instance)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                  |                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.QuantumAlgorithm.__init__ "qiskit.aqua.algorithms.QuantumAlgorithm.__init__")(quantum\_instance)            | Initialize self.                             |
| [`run`](#qiskit.aqua.algorithms.QuantumAlgorithm.run "qiskit.aqua.algorithms.QuantumAlgorithm.run")(\[quantum\_instance])                        | Execute the algorithm with selected backend. |
| [`set_backend`](#qiskit.aqua.algorithms.QuantumAlgorithm.set_backend "qiskit.aqua.algorithms.QuantumAlgorithm.set_backend")(backend, \*\*kwargs) | Sets backend with configuration.             |

## Attributes

|                                                                                                                                            |                           |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| [`backend`](#qiskit.aqua.algorithms.QuantumAlgorithm.backend "qiskit.aqua.algorithms.QuantumAlgorithm.backend")                            | Returns backend.          |
| [`quantum_instance`](#qiskit.aqua.algorithms.QuantumAlgorithm.quantum_instance "qiskit.aqua.algorithms.QuantumAlgorithm.quantum_instance") | Returns quantum instance. |
| [`random`](#qiskit.aqua.algorithms.QuantumAlgorithm.random "qiskit.aqua.algorithms.QuantumAlgorithm.random")                               | Return a numpy random.    |



`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]



`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]



`property random`

Return a numpy random.



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

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided



`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`
