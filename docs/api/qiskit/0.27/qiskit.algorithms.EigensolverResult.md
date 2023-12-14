# qiskit.algorithms.EigensolverResult



`EigensolverResult`

Eigensolver Result.



`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                 |                                                                        |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.EigensolverResult.__init__ "qiskit.algorithms.EigensolverResult.__init__")()    | Initialize self.                                                       |
| [`combine`](#qiskit.algorithms.EigensolverResult.combine "qiskit.algorithms.EigensolverResult.combine")(result) | Any property from the argument that exists in the receiver is updated. |

## Attributes

|                                                                                                                                                            |                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`aux_operator_eigenvalues`](#qiskit.algorithms.EigensolverResult.aux_operator_eigenvalues "qiskit.algorithms.EigensolverResult.aux_operator_eigenvalues") | return aux operator eigen values |
| [`eigenstates`](#qiskit.algorithms.EigensolverResult.eigenstates "qiskit.algorithms.EigensolverResult.eigenstates")                                        | return eigen states              |
| [`eigenvalues`](#qiskit.algorithms.EigensolverResult.eigenvalues "qiskit.algorithms.EigensolverResult.eigenvalues")                                        | returns eigen values             |



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



`property eigenstates`

return eigen states

**Return type**

`Optional`\[`ndarray`]



`property eigenvalues`

returns eigen values

**Return type**

`Optional`\[`ndarray`]
