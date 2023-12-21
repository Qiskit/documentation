# qiskit.chemistry.algorithms.pes\_samplers.PolynomialExtrapolator.extrapolate

`PolynomialExtrapolator.extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Extrapolation is based on a polynomial function/spline fitting with a user-specified degree.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).
