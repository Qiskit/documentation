# EnergySurface1DSpline

<span id="undefined" />

`EnergySurface1DSpline`

Bases: `qiskit.chemistry.algorithms.pes_samplers.potentials.potential_base.EnergySurfaceBase`

A simple cubic spline interpolation for the potential energy surface.

A spline interpolation method for data fitting.

This allows for fitting BOPES sampler results or potential energy surfaces.

## Methods

|                                                                                                                                                                                                                                                                                                         |                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`eval`](qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.eval#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.eval "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.eval")                                                                                 | After fitting the data to the fit function, predict the energy at a point x.                                 |
| [`fit`](qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.fit#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.fit "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.fit")                                                                                     | Fits surface to data.                                                                                        |
| [`get_equilibrium_geometry`](qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_equilibrium_geometry#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_equilibrium_geometry") | Returns the geometry for the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are Angstroms. |
| [`get_minimal_energy`](qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_minimal_energy#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_minimal_energy")                         | Returns the value of the minimal energy (scaled by ‘scaling’) Default units (scaling=1.0) are J/mol.         |
| [`get_trust_region`](qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_trust_region#qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.EnergySurface1DSpline.get_trust_region")                                 | Get the trust region.                                                                                        |
