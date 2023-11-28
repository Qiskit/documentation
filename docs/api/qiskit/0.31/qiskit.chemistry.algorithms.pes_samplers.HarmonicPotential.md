# HarmonicPotential

<span id="undefined" />

`HarmonicPotential(molecule)`

Bases: `qiskit.chemistry.algorithms.pes_samplers.potentials.potential_base.PotentialBase`

Implements a 1D Harmonic potential.

Input units are Angstroms (distance between the two atoms), and output units are Hartrees (molecular energy).

**Parameters**

**molecule** (`Molecule`) – the underlying molecule.

**Raises**

**ValueError** – Only implemented for diatomic molecules

## Methods

|                                                                                                                                                                                                                                                                                                 |                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`dissociation_energy`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.dissociation_energy#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.dissociation_energy "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.dissociation_energy")                         | Returns the estimated dissociation energy for the current fit.                                                             |
| [`eval`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.eval#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.eval "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.eval")                                                                                     | After fitting the data to the fit function, predict the energy at a point x.                                               |
| [`fit`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit")                                                                                         | Fits a potential to computed molecular energies.                                                                           |
| [`fit_function`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit_function#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit_function "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fit_function")                                                     | Functional form of the potential.                                                                                          |
| [`fundamental_frequency`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fundamental_frequency#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fundamental_frequency "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.fundamental_frequency")                 | Returns the fundamental frequency for the current fit (in s^-1).                                                           |
| [`get_equilibrium_geometry`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_equilibrium_geometry#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_equilibrium_geometry "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_equilibrium_geometry")     | Returns the interatomic distance corresponding to minimal energy.                                                          |
| [`get_maximum_trusted_level`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_maximum_trusted_level#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_maximum_trusted_level") | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality.   |
| [`get_minimal_energy`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_minimal_energy#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_minimal_energy "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_minimal_energy")                             | Returns the smallest molecular energy for the current fit.                                                                 |
| [`get_num_modes`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_num_modes#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_num_modes")                                                 | This (1D) potential represents a single vibrational mode                                                                   |
| [`get_trust_region`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_trust_region#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_trust_region "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.get_trust_region")                                     | The potential will usually be well-defined (even if not useful) for arbitrary x so we return a fairly large interval here. |
| [`process_fit_data`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.process_fit_data#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.process_fit_data "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.process_fit_data")                                     | Mostly for internal use. Preprocesses the data passed to fit\_to\_data()                                                   |
| [`update_molecule`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.update_molecule#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.update_molecule "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.update_molecule")                                         | Updates the underlying molecule.                                                                                           |
| [`vibrational_energy_level`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.vibrational_energy_level#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.vibrational_energy_level")     | Returns the n-th vibrational energy level for the current fit (in Hartrees).                                               |
| [`wave_number`](qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.wave_number#qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.wave_number "qiskit.chemistry.algorithms.pes_samplers.HarmonicPotential.wave_number")                                                         | Returns the wave number for the current fit (in cm^-1).                                                                    |
