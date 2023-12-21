# qiskit.chemistry.algorithms.pes\_samplers.PotentialBase.fit

`abstract PotentialBase.fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits surface to data

**Parameters**

*   **xdata** (`List`\[`float`]) – x data to be fitted
*   **ydata** (`List`\[`float`]) – y data to be fitted
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`
