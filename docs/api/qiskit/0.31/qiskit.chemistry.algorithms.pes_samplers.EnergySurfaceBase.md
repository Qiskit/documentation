---
title: EnergySurfaceBase
description: API reference for qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase
---

# EnergySurfaceBase

<span id="qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase" />

`EnergySurfaceBase` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/pes_samplers/potentials/potential_base.py "view source code")

Bases: `abc.ABC`

Class to hold a potential energy surface

## Methods

### eval

<span id="qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.eval" />

`abstract EnergySurfaceBase.eval(x)`

After fitting the data to the fit function, predict the energy at a point x.

**Parameters**

**x** (`float`) – value to evaluate surface in

**Return type**

`float`

**Returns**

value of surface in point x

### fit

<span id="qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.fit" />

`abstract EnergySurfaceBase.fit(xdata, ydata, initial_vals=None, bounds_list=None)`

Fits surface to data

**Parameters**

*   **xdata** (`List`\[`float`]) – x data to be fitted
*   **ydata** (`List`\[`float`]) – y data to be fitted
*   **initial\_vals** (`Optional`\[`List`\[`float`]]) – Initial values for fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)
*   **bounds\_list** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – Bounds for the fit parameters. None for default. Order of parameters is d\_e, alpha, r\_0 and m\_shift (see fit\_function implementation)

**Return type**

`None`

### get\_equilibrium\_geometry

<span id="qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_equilibrium_geometry" />

`abstract EnergySurfaceBase.get_equilibrium_geometry(scaling=1.0)`

Get the equilibrium energy.

Returns the geometry for the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are Angstroms. Scale by 1E-10 to get meters.

**Parameters**

**scaling** (`float`) – scaling factor

**Return type**

`float`

**Returns**

equilibrium geometry

### get\_minimal\_energy

<span id="qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_minimal_energy" />

`abstract EnergySurfaceBase.get_minimal_energy(scaling=1.0)`

Get the minimal energy.

Returns the value of the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are J/mol. Scale appropriately for Hartrees.

**Parameters**

**scaling** (`float`) – scaling factor

**Return type**

`float`

**Returns**

minimum energy

### get\_trust\_region

<span id="qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_trust_region" />

`abstract EnergySurfaceBase.get_trust_region()`

Get the trust region.

Returns the bounds of the region (in space) where the energy surface implementation can be trusted. When doing spline interpolation, for example, that would be the region where data is interpolated (vs. extrapolated) from the arguments of fit().

**Return type**

`Tuple`\[`float`, `float`]

**Returns**

the trust region between bounds

