# NumPyLSsolver

<span id="undefined" />

`NumPyLSsolver(matrix, vector)`

Bases: `qiskit.aqua.algorithms.classical_algorithm.ClassicalAlgorithm`

The Numpy LinearSystem algorithm (classical).

This linear system solver computes the eigenvalues of a complex-valued square matrix $A$ of dimension $n \times n$ and the solution to the systems of linear equations defined by $A\overrightarrow{x}=\overrightarrow{b}$ with input vector $\overrightarrow{b}$.

This is a classical counterpart to the [`HHL`](qiskit.aqua.algorithms.HHL#qiskit.aqua.algorithms.HHL "qiskit.aqua.algorithms.HHL") algorithm.

**Parameters**

*   **matrix** (`Union`\[`List`\[`List`\[`float`]], `ndarray`]) – The input matrix of linear system of equations
*   **vector** (`Union`\[`List`\[`float`], `ndarray`]) – The input vector of linear system of equations

## Methods

|                                                                                                                                       |                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`run`](qiskit.aqua.algorithms.NumPyLSsolver.run#qiskit.aqua.algorithms.NumPyLSsolver.run "qiskit.aqua.algorithms.NumPyLSsolver.run") | Execute the classical algorithm. |

## Attributes

<span id="undefined" />

### random

Return a numpy random.
