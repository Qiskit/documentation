# qiskit.chemistry.algorithms.pes\_samplers.SieveExtrapolator.extrapolate

`SieveExtrapolator.extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Based on the specified window, a subset of the data points will be used for extrapolation. A default window of 2 points is used, while a value of zero indicates that all previous points will be used for extrapolation. This method finds a cutoff distance based on the maximum average distance or ‘gap’ between the average values of the variational parameters. This cutoff distance is used as a criteria to divide the parameters into two clusters by setting all parameters that are below the cutoff distance to zero.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).
