# qiskit.algorithms.LinearSolver

<span id="undefined" />

`LinearSolver`

An abstract class for linear system solvers in Qiskit.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                           |                                                |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`__init__`](#qiskit.algorithms.LinearSolver.__init__ "qiskit.algorithms.LinearSolver.__init__")()                        | Initialize self.                               |
| [`solve`](#qiskit.algorithms.LinearSolver.solve "qiskit.algorithms.LinearSolver.solve")(matrix, vector\[, observable, …]) | Solve the system and compute the observable(s) |

<span id="undefined" />

`abstract solve(matrix, vector, observable=None, observable_circuit=None, post_processing=None)`

Solve the system and compute the observable(s)

**Parameters**

*   **matrix** (`Union`\[`ndarray`, `QuantumCircuit`]) – The matrix specifying the system, i.e. A in Ax=b.
*   **vector** (`Union`\[`ndarray`, `QuantumCircuit`]) – The vector specifying the right hand side of the equation in Ax=b.
*   **observable** (`Union`\[`LinearSystemObservable`, `BaseOperator`, `List`\[`LinearSystemObservable`], `List`\[`BaseOperator`], `None`]) – Optional information to be extracted from the solution. Default is the probability of success of the algorithm.
*   **observable\_circuit** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`], `None`]) – Optional circuit to be applied to the solution to extract information. Default is `None`.
*   **post\_processing** (`Optional`\[`Callable`\[\[`Union`\[`float`, `List`\[`float`]]], `Union`\[`float`, `List`\[`float`]]]]) – Optional function to compute the value of the observable. Default is the raw value of measuring the observable.

**Return type**

`LinearSolverResult`

**Returns**

The result of the linear system.
