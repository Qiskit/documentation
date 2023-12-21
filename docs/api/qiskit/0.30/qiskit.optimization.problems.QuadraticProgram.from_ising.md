# qiskit.optimization.problems.QuadraticProgram.from\_ising

`QuadraticProgram.from_ising(qubit_op, offset=0.0, linear=False)`

Create a quadratic program from a qubit operator and a shift value.

**Parameters**

*   **qubit\_op** (`Union`\[`OperatorBase`, `WeightedPauliOperator`]) – The qubit operator of the problem.
*   **offset** (`float`) – The constant value in the Ising Hamiltonian.
*   **linear** (`bool`) – If linear is True, $x^2$ is treated as a linear term since $x^2 = x$ for $x \in \{0,1\}$. Else, $x^2$ is treat as a quadratic term. The default value is False.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If there are Pauli Xs in any Pauli term
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If there are more than 2 Pauli Zs in any Pauli term
*   **NotImplementedError** – If the input operator is a ListOp

**Return type**

`None`
