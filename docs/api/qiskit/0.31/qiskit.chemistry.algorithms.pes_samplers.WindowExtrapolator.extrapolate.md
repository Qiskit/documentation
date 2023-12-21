# qiskit.chemistry.algorithms.pes\_samplers.WindowExtrapolator.extrapolate

`WindowExtrapolator.extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Based on the specified window, a subset of the data points will be used for extrapolation. A default window of 2 points is used, while a value of zero indicates that all previous points will be used for extrapolation. This method defines the data window before performing the internal extrapolation.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).
