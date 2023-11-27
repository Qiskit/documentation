# NumPyEigensolver[¶](#numpyeigensolver "Permalink to this headline")

<span id="undefined" />

`NumPyEigensolver(k=1, filter_criterion=None)`

Bases: `qiskit.algorithms.eigen_solvers.eigen_solver.Eigensolver`

The NumPy Eigensolver algorithm.

NumPy Eigensolver computes up to the first $k$ eigenvalues of a complex-valued square matrix of dimension $n \times n$, with $k \leq n$.

<Admonition title="Note" type="note">
  Operators are automatically converted to SciPy’s `spmatrix` as needed and this conversion can be costly in terms of memory and performance as the operator size, mostly in terms of number of qubits it represents, gets larger.
</Admonition>

**Parameters**

*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Union`\[`List`\[`Optional`\[`float`]], `Dict`\[`str`, `float`], `None`]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates, only feasible eigenstates are returned in the results. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to keep this value in the final returned result or not. If the number of elements that satisfies the criterion is smaller than k then the returned list has fewer elements and can even be empty.

## Methods

|                                                                                                                                                                                                             |                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_eigenvalues`](qiskit.algorithms.NumPyEigensolver.compute_eigenvalues#qiskit.algorithms.NumPyEigensolver.compute_eigenvalues "qiskit.algorithms.NumPyEigensolver.compute_eigenvalues")             | Computes eigenvalues.                                                        |
| [`supports_aux_operators`](qiskit.algorithms.NumPyEigensolver.supports_aux_operators#qiskit.algorithms.NumPyEigensolver.supports_aux_operators "qiskit.algorithms.NumPyEigensolver.supports_aux_operators") | Whether computing the expectation value of auxiliary operators is supported. |

## Attributes

<span id="undefined" />

### filter\_criterion

returns the filter criterion if set

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Union`\[`List`\[`Optional`\[`float`]], `Dict`\[`str`, `float`], `None`]], `bool`]]

<span id="undefined" />

### k

returns k (number of eigenvalues requested)

**Return type**

`int`
