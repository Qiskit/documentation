# qiskit.chemistry.components.bosonic\_bases.BosonicBasis

<span id="undefined" />

`BosonicBasis`

Basis to express a second quantization Bosonic Hamiltonian.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                             |                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.components.bosonic_bases.BosonicBasis.__init__ "qiskit.chemistry.components.bosonic_bases.BosonicBasis.__init__")()          | Initialize self.                                                                                  |
| [`convert`](#qiskit.chemistry.components.bosonic_bases.BosonicBasis.convert "qiskit.chemistry.components.bosonic_bases.BosonicBasis.convert")(\[threshold]) | This prepares an array object representing a bosonic hamiltonian expressed in the harmonic basis. |

<span id="undefined" />

`convert(threshold=1e-06)`

This prepares an array object representing a bosonic hamiltonian expressed in the harmonic basis. This object can directly be given to the BosonicOperator class to be mapped to a qubit hamiltonian.

**Parameters**

**threshold** (`float`) – the matrix elements of value below this threshold are discarded

**Return type**

`List`\[`List`\[`Tuple`\[`List`\[`List`\[`int`]], `float`]]]

**Returns**

List of modes for input to creation of a bosonic hamiltonian in the harmonic basis

**Raises**

**ValueError** – If problem with order value from computed modes
