# MorsePotential

<span id="undefined" />

`MorsePotential(molecule)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.potentials.potential_base.PotentialBase`

Implements a 1D Morse potential.

Input units are Angstroms (distance between the two atoms), and output units are Hartrees (molecular energy).

Initializes the potential to the zero-function. [`fit()`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit") should be used afterwards to fit the potential to computed molecular energies.

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

## Methods

|                                                                                                                                                                                                                                                                                        |                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`dissociation_energy`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.dissociation_energy#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.dissociation_energy "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.dissociation_energy")                         | Returns the calculated dissociation energy for the current fit.                                                            |
| [`eval`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.eval#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.eval "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.eval")                                                                                     | After fitting the data to the fit function, predict the energy at a point x.                                               |
| [`fit`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit")                                                                                         | Fits a potential to computed molecular energies.                                                                           |
| [`fit_function`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit_function#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit_function "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fit_function")                                                     | Functional form of the potential.                                                                                          |
| [`fundamental_frequency`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fundamental_frequency#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fundamental_frequency "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.fundamental_frequency")                 | Returns the fundamental frequency for the current fit (in s^-1).                                                           |
| [`get_equilibrium_geometry`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_equilibrium_geometry#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_equilibrium_geometry")     | Returns the interatomic distance corresponding to minimal energy.                                                          |
| [`get_maximum_trusted_level`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_maximum_trusted_level#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_maximum_trusted_level") | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality.   |
| [`get_minimal_energy`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_minimal_energy#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_minimal_energy")                             | Returns the smallest molecular energy for the current fit.                                                                 |
| [`get_num_modes`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_num_modes#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_num_modes")                                                 | This (1D) potential represents a single vibrational mode                                                                   |
| [`get_trust_region`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_trust_region#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.get_trust_region")                                     | The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. |
| [`update_molecule`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.update_molecule#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.update_molecule "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.update_molecule")                                         | Updates the underlying molecule.                                                                                           |
| [`vibrational_energy_level`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.vibrational_energy_level#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.vibrational_energy_level")     | Returns the n-th vibrational energy level for the current fit (in Hartrees).                                               |
| [`wave_number`](qiskit.chemistry.algorithms.pes_samplers.MorsePotential.wave_number#qiskit.chemistry.algorithms.pes_samplers.MorsePotential.wave_number "qiskit.chemistry.algorithms.pes_samplers.MorsePotential.wave_number")                                                         | Returns the wave number for the current fit (in cm^-1).                                                                    |
