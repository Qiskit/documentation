# EigensolverResult

<span id="undefined" />

`EigensolverResult`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Eigensolver Result.

## Methods

|                                                                                                                                                    |                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.EigensolverResult.combine#qiskit.algorithms.EigensolverResult.combine "qiskit.algorithms.EigensolverResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

<span id="undefined" />

### aux\_operator\_eigenvalues

Return aux operator expectation values.

These values are in fact tuples formatted as (mean, standard deviation).

**Return type**

`Optional`\[`List`\[`Union`\[`List`\[`Optional`\[`Tuple`\[`complex`, `complex`]]], `Dict`\[`str`, `Tuple`\[`complex`, `complex`]]]]]

<span id="undefined" />

### eigenstates

return eigen states

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### eigenvalues

returns eigen values

**Return type**

`Optional`\[`ndarray`]
