# VibronicStructureBase

<span id="undefined" />

`VibronicStructureBase(molecule)`

Bases: `abc.ABC`

Class to hold a molecular vibronic structure providing access to vibrational modes and energy levels.

## Methods

|                                                                                                                                                                                                                                                                                                             |                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`get_maximum_trusted_level`](qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_maximum_trusted_level#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_maximum_trusted_level") | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. |
| [`get_num_modes`](qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_num_modes#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_num_modes")                                                 | Returns the number of vibrational modes for the molecule.                                                                |
| [`update_molecule`](qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.update_molecule#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.update_molecule "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.update_molecule")                                         | Wipe state if molecule changes, and check validity of molecule for potential.                                            |
| [`vibrational_energy_level`](qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.vibrational_energy_level#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.vibrational_energy_level")     | Returns the n-th vibrational energy level for a given mode.                                                              |
