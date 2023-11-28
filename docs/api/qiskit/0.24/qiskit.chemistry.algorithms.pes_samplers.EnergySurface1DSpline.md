<span id="qiskit-chemistry-algorithms-pes-samplers-energysurface1dspline" />

# qiskit.chemistry.algorithms.pes\_samplers.EnergySurface1DSpline

<span id="undefined" />

`EnergySurface1DSpline`

A simple cubic spline interpolation for the potential energy surface.

A spline interpolation method for data fitting.

This allows for fitting BOPES sampler results or potential energy surfaces.

<span id="undefined" />

`__init__()`

A spline interpolation method for data fitting.

This allows for fitting BOPES sampler results or potential energy surfaces.

## Methods

|                                                                                                                                                                                                                              |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.__init__ "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.__init__")()                                                           | A spline interpolation method for data fitting.                                                              |
| [`eval`](#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.eval "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.eval")(x)                                                                      | After fitting the data to the fit function, predict the energy at a point x.                                 |
| [`fit`](#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.fit "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.fit")(xdata, ydata\[, initial\_vals, bounds\_list])                              | Fits surface to data.                                                                                        |
| [`get_equilibrium_geometry`](#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_equilibrium_geometry")(\[scaling]) | Returns the geometry for the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are Angstroms. |
| [`get_minimal_energy`](#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_minimal_energy")(\[scaling])                   | Returns the value of the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are J/mol.         |
| [`get_trust_region`](#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_trust_region")()                                   | Get the trust region.                                                                                        |

<span id="undefined" />

`eval(x)`

After fitting the data to the fit function, predict the energy at a point x.

**Parameters**

**x** (`float`) – Value to be evaluated

**Return type**

`float`

**Returns**

Value of surface fit in point x.

<span id="undefined" />

`fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits surface to data.

**Parameters**

*   **xdata** (`List`\[`float`]) – x data to be fitted
*   **ydata** (`List`\[`float`]) – y data to be fitted
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`

<span id="undefined" />

`get_equilibrium_geometry(scaling=1.0)`

Returns the geometry for the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are Angstroms. Scale by 1E-10 to get meters. :type scaling: `float` :param scaling: scaling factor

**Return type**

`float`

**Returns**

equilibrium geometry

<span id="undefined" />

`get_minimal_energy(scaling=1.0)`

Returns the value of the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are J/mol. Scale appropriately for Hartrees. :type scaling: `float` :param scaling: scaling factor

**Return type**

`float`

**Returns**

minimum energy

<span id="undefined" />

`get_trust_region()`

Get the trust region.

Returns the bounds of the region (in space) where the energy surface implementation can be trusted. When doing spline interpolation, for example, that would be the region where data is interpolated (vs. extrapolated) from the arguments of fit().

**Return type**

`Tuple`\[`float`, `float`]

**Returns**

The trust region between bounds.
