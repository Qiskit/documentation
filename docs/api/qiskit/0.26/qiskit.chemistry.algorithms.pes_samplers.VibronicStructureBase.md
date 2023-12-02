# qiskit.chemistry.algorithms.pes\_samplers.VibronicStructureBase

<span id="undefined" />

`VibronicStructureBase(molecule)`

Class to hold a molecular vibronic structure providing access to vibrational modes and energy levels.

<span id="undefined" />

`__init__(molecule)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                                           |                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.__init__ "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.__init__")(molecule)                                                | Initialize self.                                                                                                         |
| [`get_maximum_trusted_level`](#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_maximum_trusted_level "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_maximum_trusted_level")(\[n]) | Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. |
| [`get_num_modes`](#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_num_modes "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.get_num_modes")()                                         | Returns the number of vibrational modes for the molecule.                                                                |
| [`update_molecule`](#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.update_molecule "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.update_molecule")(molecule)                           | Wipe state if molecule changes, and check validity of molecule for potential.                                            |
| [`vibrational_energy_level`](#qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.vibrational_energy_level "qiskit.chemistry.algorithms.pes_samplers.VibronicStructureBase.vibrational_energy_level")(n)       | Returns the n-th vibrational energy level for a given mode.                                                              |

<span id="undefined" />

`get_maximum_trusted_level(n=0)`

Returns the maximum energy level for which the particular implementation still provides a good approximation of reality. Default value of 100. Redefined where needed (see e.g. Morse).

**Parameters**

**n** (`int`) – vibronic mode

**Return type**

`float`

**Returns**

maximum\_trusted\_level setted

<span id="undefined" />

`abstract get_num_modes()`

Returns the number of vibrational modes for the molecule.

**Return type**

`float`

**Returns**

the number of vibrational modes

<span id="undefined" />

`update_molecule(molecule)`

Wipe state if molecule changes, and check validity of molecule for potential.

**Parameters**

**molecule** (`Molecule`) – chemistry molecule

**Return type**

`Molecule`

**Returns**

molecule used

<span id="undefined" />

`abstract vibrational_energy_level(n)`

Returns the n-th vibrational energy level for a given mode.

**Parameters**

**n** (`int`) – number of vibrational mode

**Return type**

`float`

**Returns**

n-th vibrational energy level for a given mode
