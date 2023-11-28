# MinimumEigenOptimizer

<span id="undefined" />

`MinimumEigenOptimizer(min_eigen_solver, penalty=None, converters=None)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm`

A wrapper for minimum eigen solvers from Qiskit Aqua.

This class provides a wrapper for minimum eigen solvers from Qiskit to be used within the optimization module. It assumes a problem consisting only of binary or integer variables as well as linear equality constraints thereof. It converts such a problem into a Quadratic Unconstrained Binary Optimization (QUBO) problem by expanding integer variables into binary variables and by adding the linear equality constraints as weighted penalty terms to the objective function. The resulting QUBO is then translated into an Ising Hamiltonian whose minimal eigen vector and corresponding eigenstate correspond to the optimal solution of the original optimization problem. The provided minimum eigen solver is then used to approximate the ground state of the Hamiltonian to find a good solution for the optimization problem.

## Examples

Outline of how to use this class:

```python
from qiskit.aqua.algorithms import QAOA
from qiskit.optimization.problems import QuadraticProgram
from qiskit.optimization.algorithms import MinimumEigenOptimizer
problem = QuadraticProgram()
# specify problem here
# specify minimum eigen solver to be used, e.g., QAOA
qaoa = QAOA(...)
optimizer = MinimumEigenOptimizer(qaoa)
result = optimizer.solve(problem)
```

This initializer takes the minimum eigen solver to be used to approximate the ground state of the resulting Hamiltonian as well as a optional penalty factor to scale penalty terms representing linear equality constraints. If no penalty factor is provided, a default is computed during the algorithm (TODO).

**Parameters**

*   **min\_eigen\_solver** (`MinimumEigensolver`) – The eigen solver to find the ground state of the Hamiltonian.
*   **penalty** (`Optional`\[`float`]) – The penalty factor to be used, or `None` for applying a default logic.
*   **converters** (`Union`\[`QuadraticProgramConverter`, `List`\[`QuadraticProgramConverter`], `None`]) – The converters to use for converting a problem into a different form. By default, when None is specified, an internally created instance of [`QuadraticProgramToQubo`](qiskit.optimization.converters.QuadraticProgramToQubo#qiskit.optimization.converters.QuadraticProgramToQubo "qiskit.optimization.converters.QuadraticProgramToQubo") will be used.

**Raises**

*   **TypeError** – When one of converters has an invalid type.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – When the minimum eigensolver does not return an eigenstate.

## Methods

|                                                                                                                                                                                                                                                               |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.MinimumEigenOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.MinimumEigenOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.MinimumEigenOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with this optimizer.                         |
| [`is_compatible`](qiskit.optimization.algorithms.MinimumEigenOptimizer.is_compatible#qiskit.optimization.algorithms.MinimumEigenOptimizer.is_compatible "qiskit.optimization.algorithms.MinimumEigenOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`solve`](qiskit.optimization.algorithms.MinimumEigenOptimizer.solve#qiskit.optimization.algorithms.MinimumEigenOptimizer.solve "qiskit.optimization.algorithms.MinimumEigenOptimizer.solve")                                                                 | Tries to solves the given problem using the optimizer.                                    |

## Attributes

<span id="undefined" />

### min\_eigen\_solver

Returns the minimum eigensolver.

**Return type**

`MinimumEigensolver`
