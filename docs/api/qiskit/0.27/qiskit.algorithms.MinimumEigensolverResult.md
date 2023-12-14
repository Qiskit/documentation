# qiskit.algorithms.MinimumEigensolverResult



`MinimumEigensolverResult`

Minimum Eigensolver Result.



`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                               |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.MinimumEigensolverResult.__init__ "qiskit.algorithms.MinimumEigensolverResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.MinimumEigensolverResult.combine "qiskit.algorithms.MinimumEigensolverResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                                          |                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [`aux_operator_eigenvalues`](#qiskit.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues "qiskit.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues") | return aux operator eigen values |
| [`eigenstate`](#qiskit.algorithms.MinimumEigensolverResult.eigenstate "qiskit.algorithms.MinimumEigensolverResult.eigenstate")                                           | return eigen state               |
| [`eigenvalue`](#qiskit.algorithms.MinimumEigensolverResult.eigenvalue "qiskit.algorithms.MinimumEigensolverResult.eigenvalue")                                           | returns eigen value              |



`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]



`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`



`property eigenstate`

return eigen state

**Return type**

`Optional`\[`ndarray`]



`property eigenvalue`

returns eigen value

**Return type**

`Optional`\[`complex`]
