# qiskit.chemistry.components.bosonic\_bases.BosonicBasis.convert

`BosonicBasis.convert(threshold=1e-06)`

This prepares an array object representing a bosonic hamiltonian expressed in the harmonic basis. This object can directly be given to the BosonicOperator class to be mapped to a qubit hamiltonian.

**Parameters**

**threshold** (`float`) – the matrix elements of value below this threshold are discarded

**Return type**

`List`\[`List`\[`Tuple`\[`List`\[`List`\[`int`]], `float`]]]

**Returns**

List of modes for input to creation of a bosonic hamiltonian in the harmonic basis

**Raises**

**ValueError** – If problem with order value from computed modes
