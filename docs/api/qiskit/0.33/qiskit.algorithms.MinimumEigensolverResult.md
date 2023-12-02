# MinimumEigensolverResult

<span id="undefined" />

`MinimumEigensolverResult`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Minimum Eigensolver Result.

## Methods

|                                                                                                                                                                         |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.MinimumEigensolverResult.combine#qiskit.algorithms.MinimumEigensolverResult.combine "qiskit.algorithms.MinimumEigensolverResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

<span id="undefined" />

### aux\_operator\_eigenvalues

Return aux operator expectation values.

These values are in fact tuples formatted as (mean, standard deviation).

**Return type**

`Union`\[`List`\[`Optional`\[`Tuple`\[`complex`, `complex`]]], `Dict`\[`str`, `Tuple`\[`complex`, `complex`]], `None`]

<span id="undefined" />

### eigenstate

return eigen state

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenvalue

returns eigen value

**Return type**

`Optional`\[`complex`]
