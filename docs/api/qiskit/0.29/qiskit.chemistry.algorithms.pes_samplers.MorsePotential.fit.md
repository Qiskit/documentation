# qiskit.chemistry.algorithms.pes\_samplers.MorsePotential.fit

`MorsePotential.fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits a potential to computed molecular energies.

**Parameters**

*   **xdata** (`List`\[`float`]) – interatomic distance points (Angstroms)
*   **ydata** (`List`\[`float`]) – molecular energies (Hartrees)
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`
