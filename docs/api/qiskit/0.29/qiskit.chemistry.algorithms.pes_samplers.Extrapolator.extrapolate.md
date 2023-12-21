# qiskit.chemistry.algorithms.pes\_samplers.Extrapolator.extrapolate

`abstract Extrapolator.extrapolate(points, param_dict)`

Abstract method to extrapolate point(s) of interest.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Dict`\[`float`, `List`\[`float`]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).
