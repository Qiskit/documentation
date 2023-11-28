# EnergySurfaceBase

<span id="undefined" />

`EnergySurfaceBase`

Bases: `abc.ABC`

Class to hold a potential energy surface

## Methods

|                                                                                                                                                                                                                                                                                             |                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`eval`](qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.eval#qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.eval "qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.eval")                                                                                 | After fitting the data to the fit function, predict the energy at a point x. |
| [`fit`](qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.fit#qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.fit "qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.fit")                                                                                     | Fits surface to data                                                         |
| [`get_equilibrium_geometry`](qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_equilibrium_geometry#qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_equilibrium_geometry") | Get the equilibrium energy.                                                  |
| [`get_minimal_energy`](qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_minimal_energy#qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_minimal_energy")                         | Get the minimal energy.                                                      |
| [`get_trust_region`](qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_trust_region#qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.EnergySurfaceBase.get_trust_region")                                 | Get the trust region.                                                        |
