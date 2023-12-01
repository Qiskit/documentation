# GroverOptimizer

<span id="undefined" />

`GroverOptimizer(num_value_qubits, num_iterations=3, quantum_instance=None, converters=None, penalty=None)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm`

Uses Grover Adaptive Search (GAS) to find the minimum of a QUBO function.

**Parameters**

*   **num\_value\_qubits** (`int`) – The number of value qubits.
*   **num\_iterations** (`int`) – The number of iterations the algorithm will search with no improvement.
*   **quantum\_instance** (`Union`\[`BaseBackend`, `Backend`, `QuantumInstance`, `None`]) – Instance of selected backend, defaults to Aer’s statevector simulator.
*   **converters** (`Union`\[`QuadraticProgramConverter`, `List`\[`QuadraticProgramConverter`], `None`]) – The converters to use for converting a problem into a different form. By default, when None is specified, an internally created instance of [`QuadraticProgramToQubo`](qiskit.optimization.converters.QuadraticProgramToQubo#qiskit.optimization.converters.QuadraticProgramToQubo "qiskit.optimization.converters.QuadraticProgramToQubo") will be used.
*   **penalty** (`Optional`\[`float`]) – The penalty factor used in the default [`QuadraticProgramToQubo`](qiskit.optimization.converters.QuadraticProgramToQubo#qiskit.optimization.converters.QuadraticProgramToQubo "qiskit.optimization.converters.QuadraticProgramToQubo") converter

**Raises**

**TypeError** – When there one of converters is an invalid type.

## Methods

|                                                                                                                                                                                                                                             |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.GroverOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.GroverOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.GroverOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with this optimizer.                         |
| [`is_compatible`](qiskit.optimization.algorithms.GroverOptimizer.is_compatible#qiskit.optimization.algorithms.GroverOptimizer.is_compatible "qiskit.optimization.algorithms.GroverOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`solve`](qiskit.optimization.algorithms.GroverOptimizer.solve#qiskit.optimization.algorithms.GroverOptimizer.solve "qiskit.optimization.algorithms.GroverOptimizer.solve")                                                                 | Tries to solves the given problem using the grover optimizer.                             |

## Attributes

<span id="undefined" />

### quantum\_instance

The quantum instance to run the circuits.

**Return type**

`QuantumInstance`

**Returns**

The quantum instance used in the algorithm.
