# qiskit.optimization.problems.QuadraticProgram.to\_ising

`QuadraticProgram.to_ising()`

Return the Ising Hamiltonian of this problem.

**Returns**

The qubit operator for the problem offset: The constant value in the Ising Hamiltonian.

**Return type**

qubit\_op

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not binary.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If constraints exist in the problem.
