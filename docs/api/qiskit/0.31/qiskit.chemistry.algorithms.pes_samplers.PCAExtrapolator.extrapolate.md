# qiskit.chemistry.algorithms.pes\_samplers.PCAExtrapolator.extrapolate

`PCAExtrapolator.extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. This method transforms the parameters in PCA space before performing the internal extrapolation. The parameters are transformed back to regular space after extrapolation.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point
*   **the value is a list of the variational parameters.** (*and*) –

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).
