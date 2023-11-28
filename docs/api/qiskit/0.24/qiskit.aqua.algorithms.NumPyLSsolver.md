<span id="qiskit-aqua-algorithms-numpylssolver" />

# qiskit.aqua.algorithms.NumPyLSsolver

<span id="undefined" />

`NumPyLSsolver(matrix, vector)`

The Numpy LinearSystem algorithm (classical).

This linear system solver computes the eigenvalues of a complex-valued square matrix $A$ of dimension $n \times n$ and the solution to the systems of linear equations defined by $A\overrightarrow{x}=\overrightarrow{b}$ with input vector $\overrightarrow{b}$.

This is a classical counterpart to the [`HHL`](qiskit.aqua.algorithms.HHL#qiskit.aqua.algorithms.HHL "qiskit.aqua.algorithms.HHL") algorithm.

**Parameters**

*   **matrix** (`Union`\[`List`\[`List`\[`float`]], `ndarray`]) – The input matrix of linear system of equations
*   **vector** (`Union`\[`List`\[`float`], `ndarray`]) – The input vector of linear system of equations

<span id="undefined" />

`__init__(matrix, vector)`

**Parameters**

*   **matrix** (`Union`\[`List`\[`List`\[`float`]], `ndarray`]) – The input matrix of linear system of equations
*   **vector** (`Union`\[`List`\[`float`], `ndarray`]) – The input vector of linear system of equations

## Methods

|                                                                                                                              |                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.algorithms.NumPyLSsolver.__init__ "qiskit.aqua.algorithms.NumPyLSsolver.__init__")(matrix, vector) | **type matrix**`Union`\[`List`\[`List`\[`float`]], `ndarray`] |
| [`run`](#qiskit.aqua.algorithms.NumPyLSsolver.run "qiskit.aqua.algorithms.NumPyLSsolver.run")()                              | Execute the classical algorithm.                              |

## Attributes

|                                                                                                        |                        |
| ------------------------------------------------------------------------------------------------------ | ---------------------- |
| [`random`](#qiskit.aqua.algorithms.NumPyLSsolver.random "qiskit.aqua.algorithms.NumPyLSsolver.random") | Return a numpy random. |

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

`run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict
