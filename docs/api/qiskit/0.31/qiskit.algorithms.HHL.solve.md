# qiskit.algorithms.HHL.solve

`HHL.solve(matrix, vector, observable=None, observable_circuit=None, post_processing=None)`

Tries to solve the given linear system of equations.

**Parameters**

*   **matrix** (`Union`\[`List`, `ndarray`, `QuantumCircuit`]) – The matrix specifying the system, i.e. A in Ax=b.
*   **vector** (`Union`\[`List`, `ndarray`, `QuantumCircuit`]) – The vector specifying the right hand side of the equation in Ax=b.
*   **observable** (`Union`\[`LinearSystemObservable`, `BaseOperator`, `List`\[`LinearSystemObservable`], `List`\[`BaseOperator`], `None`]) – Optional information to be extracted from the solution. Default is the probability of success of the algorithm.
*   **observable\_circuit** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`], `None`]) – Optional circuit to be applied to the solution to extract information. Default is None.
*   **post\_processing** (`Optional`\[`Callable`\[\[`Union`\[`float`, `List`\[`float`]]], `Union`\[`float`, `List`\[`float`]]]]) – Optional function to compute the value of the observable. Default is the raw value of measuring the observable.

**Raises**

**ValueError** – If an invalid combination of observable, observable\_circuit and post\_processing is passed.

**Return type**

`LinearSolverResult`

**Returns**

The result object containing information about the solution vector of the linear system.
