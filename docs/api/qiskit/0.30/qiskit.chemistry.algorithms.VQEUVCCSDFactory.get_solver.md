# qiskit.chemistry.algorithms.VQEUVCCSDFactory.get\_solver

`VQEUVCCSDFactory.get_solver(transformation)`

Returns a VQE with a UVCCSD wavefunction ansatz, based on `transformation`. This works only with a `BosonicTransformation`.

**Parameters**

**transformation** (`BosonicTransformation`) – a bosonic qubit operator transformation.

**Return type**

`MinimumEigensolver`

**Returns**

A VQE suitable to compute the ground state of the molecule transformed by `transformation`.
