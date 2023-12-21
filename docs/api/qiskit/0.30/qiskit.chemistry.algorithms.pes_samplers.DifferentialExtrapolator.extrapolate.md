# qiskit.chemistry.algorithms.pes\_samplers.DifferentialExtrapolator.extrapolate

`DifferentialExtrapolator.extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Each parameter list and list of numerical gradients is treated as a single point in vector space. The regression model tries to fit a Hamiltonian that describes the evolution from one parameter set (and its gradient features) at point r, to another parameter set at point, r + epsilon. The regression model is then used to predict the parameter set at the point of interest. Note that this extrapolation technique does not explicitly use the spacing of the points (step size) but rather infers it from the list of parameter values.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point
*   **the value is a list of the variational parameters.** (*and*) –

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).
